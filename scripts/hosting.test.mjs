import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';
import { renderNotFound } from './generate_seo.js';

const TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
  <title>What's that mushroom?</title>
  <meta name="description" content="A field guide to mushrooms.">
</head>
<body>
  <div id="app"></div>
  <script type="module" src="/assets/index.js"></script>
</body>
</html>
`;

test('hosting does not rewrite unknown paths onto the app shell', () => {
  const hosting = JSON.parse(fs.readFileSync(new URL('../firebase.json', import.meta.url), 'utf8')).hosting;
  assert.equal(hosting.public, 'build');
  assert.equal(Object.hasOwn(hosting, 'rewrites'), false);
  assert.equal(hosting.redirects[0].source, '/en');
  assert.equal(hosting.redirects[0].destination, '/');
});

test('the generated 404 shell is a real not-found page', () => {
  const html = renderNotFound(TEMPLATE);
  assert.match(html, /<title>What's that mushroom\?<\/title>/);
  assert.match(html, /name="description" content="That page is not in the catalog\."/);
  assert.match(html, /name="robots" content="noindex"/);
  assert.match(html, /<div id="app"><\/div><noscript><p>That page is not in the catalog\.<\/p><\/noscript>/);
  assert.match(html, /src="\/assets\/index\.js"/);
  assert.equal(html.includes('rel="canonical"'), false);
  assert.equal(html.includes('hreflang'), false);
  assert.equal(html.includes('og:url'), false);
});
