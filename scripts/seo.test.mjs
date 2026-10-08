import assert from 'node:assert/strict';
import test from 'node:test';
import { serializeJsonLd } from '../src/lib/seo.ts';

test('JSON-LD escapes HTML script terminators without changing the schema content', () => {
  const data = {
    '@type': 'Organization',
    name: 'Cuy </script><script>alert(1)</script> & Coders',
  };
  const encoded = serializeJsonLd(data);
  assert.ok(!encoded.includes('<'));
  assert.deepEqual(JSON.parse(encoded), data);
});
