import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';
import { jsonLdScript, renderNotFound } from './generate_seo.js';
import { COPY, viewModel } from '../catalog.js';

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
  const missing = viewModel({ lang: 'en', view: 'missing', search: '' });
  assert.equal(missing.description, COPY.en.missing);
  assert.equal(viewModel({ lang: 'sk', view: 'missing', search: '' }).description, COPY.sk.missing);
  assert.match(html, /name="robots" content="noindex"/);
  assert.match(html, /<div id="app"><\/div><noscript><p>That page is not in the catalog\.<\/p><\/noscript>/);
  assert.match(html, /src="\/assets\/index\.js"/);
  assert.equal(html.includes('rel="canonical"'), false);
  assert.equal(html.includes('hreflang'), false);
  assert.equal(html.includes('og:url'), false);
});

test('json-ld escapes < and unicode line separators', () => {
  const value = { name: '</script><img src=x onerror=alert(1)>', note: 'a\u2028b\u2029c' };
  const script = jsonLdScript(value);
  const inner = script.slice(script.indexOf('>') + 1, script.lastIndexOf('<'));
  assert.equal(inner.includes('<'), false);
  assert.equal(inner.includes('\u2028'), false);
  assert.equal(inner.includes('\u2029'), false);
  assert.match(inner, /\\u003c/);
  assert.deepEqual(JSON.parse(inner), value);
});

test('the content security policy allows json-ld, list styles, and self-hosted fonts', () => {
  const hosting = JSON.parse(fs.readFileSync(new URL('../firebase.json', import.meta.url), 'utf8')).hosting;
  const headers = hosting.headers.flatMap((group) => group.headers);
  const csp = headers.find((header) => header.key === 'Content-Security-Policy').value;
  assert.match(csp, /font-src 'self'/);
  assert.match(csp, /style-src 'self' 'unsafe-inline'/);
  assert.match(csp, /script-src-attr 'none'/);
  assert.doesNotMatch(csp, /fonts\.googleapis\.com/);
  const directives = new Map();
  csp.split(';').forEach((part) => {
    const tokens = part.trim().split(/\s+/).filter(Boolean);
    if (tokens.length) directives.set(tokens[0], tokens.slice(1));
  });
  const elementSources = directives.get('script-src-elem') || [];
  const blocksInline = elementSources.some((source) =>
    source === "'strict-dynamic'" || /^(?:'?)(?:nonce|sha256|sha384|sha512)-/.test(source)
  );
  assert.equal(elementSources.includes("'unsafe-inline'"), true);
  assert.equal(blocksInline, false);
  assert.match(viewModel({ lang: 'en', view: 'home', search: '' }).html, /style="--list-n: /);
  const families = viewModel({ lang: 'en', view: 'families', search: '' }).html;
  assert.match(families, /class="tile-icon"/);
  assert.doesNotMatch(families, /\son\w+=/);
  const catalog = fs.readFileSync(new URL('../catalog.js', import.meta.url), 'utf8');
  assert.match(catalog, /addEventListener\(\s*"error"/);
  assert.doesNotMatch(catalog, /onerror=/);
  assert.match(catalog, /src="' \+ esc\(species\.plateGrid\) \+ '"/);
  assert.match(catalog, /src="' \+ esc\(list\.cover\.plateGrid\) \+ '"/);
  const html = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');
  const css = fs.readFileSync(new URL('../styles.css', import.meta.url), 'utf8');
  assert.doesNotMatch(html, /fonts\.googleapis\.com|fonts\.gstatic\.com/);
  assert.match(css, /\/fonts\/source-sans-3-v20-roman-cyrillic\.woff2/);
  assert.match(css, /\/fonts\/source-sans-3-v20-italic-cyrillic\.woff2/);
  assert.match(css, /U\+0400-045F/);
  assert.equal(fs.existsSync(new URL('../public/fonts/source-sans-3-v20-roman-cyrillic.woff2', import.meta.url)), true);
  assert.equal(fs.existsSync(new URL('../public/fonts/fraunces-v38-roman-latin.woff2', import.meta.url)), true);
  assert.doesNotMatch(css, /fonts\.googleapis\.com|fonts\.gstatic\.com/);
});
