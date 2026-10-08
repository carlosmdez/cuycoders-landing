import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { gzipSync } from 'node:zlib';

const root = resolve('dist');
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (
    await Promise.all(
      entries.map((entry) =>
        entry.isDirectory()
          ? walk(resolve(dir, entry.name))
          : resolve(dir, entry.name),
      ),
    )
  ).flat();
}
const files = (await walk(root)).filter((file) => file.endsWith('.html'));
const pages = new Map(
  await Promise.all(
    files.map(async (file) => [
      file.slice(root.length).replace(/index\.html$/, ''),
      await readFile(file, 'utf8'),
    ]),
  ),
);
const localized = [...pages].filter(([path]) => /^\/(es|en)\//.test(path));
assert.equal(
  localized.length,
  10,
  'Two homepages, two indexes and six articles',
);
const origin = process.env.SITE_URL || 'https://cuycoders.com';
const titles = new Set();
function getAlternates(html) {
  return new Map(
    [...html.matchAll(/<link\b[^>]*>/g)]
      .map(([tag]) => [
        tag.match(/hreflang="([^"]+)"/)?.[1],
        tag.match(/href="([^"]+)"/)?.[1],
      ])
      .filter(([lang, href]) => lang && href),
  );
}
for (const [path, html] of localized) {
  const locale = path.split('/')[1];
  assert.match(html, new RegExp(`<html lang="${locale}"`));
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${path}: one h1`);
  assert.match(html, /<meta name="description" content="[^"]+"/);
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert.ok(title && !titles.has(title), `${path}: title must be unique`);
  titles.add(title);
  let previousLevel = 0;
  for (const [, level] of html.matchAll(/<h([1-6])(?:\s|>)/g)) {
    assert.ok(
      Number(level) <= previousLevel + 1,
      `${path}: skipped heading level`,
    );
    previousLevel = Number(level);
  }
  for (const match of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    const url = new URL(
      match[1].replaceAll('&amp;', '&'),
      `https://build.test${path}`,
    );
    if (url.origin !== 'https://build.test') continue;
    const target = pages.get(url.pathname);
    assert.ok(target, `${path}: broken internal link ${url.pathname}`);
    if (url.hash)
      assert.ok(
        target.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`),
        `${path}: missing anchor ${url.hash}`,
      );
  }
  const schema = html.match(
    /<script type="application\/ld\+json">(.*?)<\/script>/s,
  );
  if (schema)
    assert.equal(
      JSON.parse(schema[1]).author?.name || JSON.parse(schema[1]).name,
      'Cuy Coders',
    );
  const alternative =
    html.match(/class="language"[^>]*href="([^"]+)"/) ||
    html.match(/href="([^"]+)"[^>]*class="language"/);
  assert.ok(alternative, `${path}: language switch`);
  assert.ok(pages.has(alternative[1]), `${path}: missing translated page`);
  if (origin) {
    assert.ok(
      html.includes(
        `<link rel="canonical" href="${new URL(path, origin).href}"`,
      ),
      `${path}: self canonical`,
    );
    for (const lang of ['es', 'en', 'x-default'])
      assert.ok(
        html.includes(`hreflang="${lang}"`),
        `${path}: hreflang ${lang}`,
      );
    const alternates = getAlternates(html);
    assert.equal(
      alternates.get(locale),
      new URL(path, origin).href,
      `${path}: self hreflang`,
    );
    assert.equal(
      alternates.get('x-default'),
      alternates.get('es'),
      `${path}: Spanish fallback`,
    );
    for (const lang of ['es', 'en']) {
      const target = new URL(alternates.get(lang));
      assert.equal(
        target.origin,
        new URL(origin).origin,
        `${path}: alternate origin`,
      );
      const targetPage = pages.get(target.pathname);
      assert.ok(targetPage, `${path}: alternate must resolve`);
      assert.deepEqual(
        getAlternates(targetPage),
        alternates,
        `${path}: reciprocal language cluster`,
      );
    }
  }
  assert.ok(
    gzipSync(html).byteLength < 12 * 1024,
    `${path}: compressed HTML budget`,
  );
}
for (const locale of ['es', 'en']) {
  const home = pages.get(`/${locale}/`);
  assert.match(home, /action="https:\/\/formserve.io\/f\/rvcKqtYUGPA"/);
  assert.match(home, /method="POST"/);
  assert.doesNotMatch(
    home,
    /Probar formulario|Try demo form|contact-demo-notice/,
  );
  assert.match(home, /name="_honeypot"/);
  assert.match(home, /data-contact-success/);
  assert.equal(
    (home.match(/rel="preload"[^>]*as="font"/g) || []).length,
    2,
    `${locale}: two font preloads`,
  );
}
const fonts = (await walk(resolve(root, '_astro'))).filter((file) =>
  file.endsWith('.woff2'),
);
assert.equal(
  fonts.length,
  2,
  'Ship only the two Latin variable font subsets required by ES/EN',
);
const styles = (await walk(resolve(root, '_astro'))).filter((file) =>
  file.endsWith('.css'),
);
for (const file of styles) {
  assert.ok(
    gzipSync(await readFile(file)).byteLength < 12 * 1024,
    'Compressed CSS budget',
  );
}
const robots = await readFile(resolve(root, 'robots.txt'), 'utf8');
assert.ok(robots.includes('Allow: /'));
if (origin) {
  const sitemap = await readFile(resolve(root, 'sitemap-0.xml'), 'utf8');
  assert.equal(
    (sitemap.match(/<loc>/g) || []).length,
    10,
    'Canonical localized pages in sitemap',
  );
  assert.ok(robots.includes(new URL('sitemap-index.xml', origin).href));
}
console.log(
  `Verified ${localized.length} localized pages: links, headings, unique titles, schema, Formserve forms, reciprocal canonical/hreflang, sitemap and font/HTML/CSS budgets.`,
);
