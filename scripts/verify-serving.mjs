import assert from 'node:assert/strict';
import { readdir } from 'node:fs/promises';
import { createServer } from 'node:net';
import { resolve } from 'node:path';

// Exercise the production Caddyfile against dist without requiring Docker.
const probe = createServer();
await new Promise((done) => probe.listen(0, '127.0.0.1', done));
const port = probe.address().port;
await new Promise((done) => probe.close(done));
const server = Bun.spawn(
  ['caddy', 'run', '--config', 'Caddyfile', '--adapter', 'caddyfile'],
  {
    env: { ...process.env, PORT: String(port), STATIC_ROOT: resolve('dist') },
    stdout: 'ignore',
    stderr: 'pipe',
  },
);
const base = `http://127.0.0.1:${port}`;
try {
  let ready = false;
  for (let attempt = 0; attempt < 50; attempt++) {
    try {
      ready = (await fetch(`${base}/healthz`)).ok;
    } catch {}
    if (ready) break;
    await Bun.sleep(100);
  }
  assert.ok(ready, 'Caddy must start');
  const root = await fetch(base, { redirect: 'manual' });
  assert.equal(root.status, 301);
  assert.equal(root.headers.get('location'), '/es/');
  const www = await fetch(`${base}/en/`, {
    redirect: 'manual',
    headers: { Host: 'www.cuycoders.com' },
  });
  assert.equal(www.status, 301);
  assert.equal(www.headers.get('location'), 'https://cuycoders.com/en/');
  const slash = await fetch(`${base}/en`, { redirect: 'manual' });
  assert.equal(slash.status, 308);
  assert.equal(slash.headers.get('location'), '/en/');
  for (const path of [
    '/es/',
    '/en/',
    '/es/blog/',
    '/es/blog/es-entender-negocio/',
    '/robots.txt',
    '/sitemap-index.xml',
  ]) {
    const response = await fetch(`${base}${path}`);
    assert.equal(response.status, 200, path);
    assert.match(
      response.headers.get('cache-control'),
      /max-age=0, must-revalidate/,
    );
  }
  const html = await fetch(`${base}/es/`, {
    headers: { 'Accept-Encoding': 'gzip' },
  });
  assert.equal(html.headers.get('content-encoding'), 'gzip');
  const css = (await readdir('dist/_astro')).find((file) =>
    file.endsWith('.css'),
  );
  const asset = await fetch(`${base}/_astro/${css}`);
  assert.equal(asset.status, 200);
  assert.match(
    asset.headers.get('cache-control'),
    /max-age=31536000, immutable/,
  );
  const health = await fetch(`${base}/healthz`);
  assert.equal(await health.text(), 'ok');
  assert.equal(health.headers.get('cache-control'), 'no-store');
  assert.equal((await fetch(`${base}/missing-page`)).status, 404);
  console.log(
    'Verified Caddy: routes, redirects, 404, gzip, cache headers and health check.',
  );
} finally {
  server.kill();
  await server.exited;
}
