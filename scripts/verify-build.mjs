import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { resolve } from 'node:path';

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
const origin = process.env.SITE_URL;
for (const [path, html] of localized) {
  const locale = path.split('/')[1];
  assert.match(html, new RegExp(`<html lang="${locale}"`));
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${path}: one h1`);
  assert.match(html, /<meta name="description" content="[^"]+"/);
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
  }
}
for (const locale of ['es', 'en']) {
  const home = pages.get(`/${locale}/`);
  assert.match(home, /type="submit" disabled/);
  assert.match(home, /<noscript>/);
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
  `Verified ${localized.length} localized pages: internal links, anchors, language switches, metadata, schema and safe demo forms${origin ? ', canonical/hreflang and sitemap' : ''}.`,
);
