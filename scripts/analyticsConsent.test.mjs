import assert from 'node:assert/strict';
import test from 'node:test';
import { COPY, parse, viewModel } from '../catalog.js';
import { decisionFor, parseCloudflareTrace } from '../src/analyticsConsent.mjs';

const TRACE = [
  'fl=123',
  'h=whatsthatmushroom.app',
  'ip=203.0.113.8',
  'loc=SK',
  'tls=TLSv1.3',
  '',
].join('\n');

const PRIVACY_KEYS = [
  'privacy',
  'privacySeo',
  'gaBanner',
  'gaAllow',
  'gaRefuse',
  'privacyLead',
  'privacyAppLink',
  'privacyAnalyticsTitle',
  'privacyAnalytics',
  'privacyChoiceTitle',
  'privacyChoice',
  'privacyStatusOn',
  'privacyStatusOff',
  'privacyContact',
];

test('trace loc is the country code', () => {
  assert.equal(parseCloudflareTrace(TRACE), 'SK');
  assert.equal(parseCloudflareTrace('colo=VIE\nloc=us\n'), 'US');
  assert.equal(parseCloudflareTrace('<!doctype html><script>loc=US</script>'), '');
  assert.equal(parseCloudflareTrace(''), '');
});

test('EEA, UK, and Switzerland ask before collection', () => {
  for (const loc of ['DE', 'FR', 'SK', 'IE', 'GR', 'CY', 'NO', 'IS', 'LI', 'GB', 'UK', 'CH', 'AX', 'GP', 'BQ']) {
    assert.deepEqual(decisionFor({ choice: '', loc }), { load: false, ask: true }, loc);
  }
});

test('other countries load with no question', () => {
  for (const loc of ['US', 'JP', 'AU', 'BR', 'IN', 'CA', 'KR', 'TW']) {
    assert.deepEqual(decisionFor({ choice: '', loc }), { load: true, ask: false }, loc);
  }
});

test('a stored choice wins over the country', () => {
  assert.deepEqual(decisionFor({ choice: 'granted', loc: 'DE' }), { load: true, ask: false });
  assert.deepEqual(decisionFor({ choice: 'denied', loc: 'US' }), { load: false, ask: false });
});

test('an unknown country asks and does not load', () => {
  for (const loc of ['', 'XX', 'T1', 'A1', 'A2', 'EU']) {
    assert.deepEqual(decisionFor({ choice: '', loc }), { load: false, ask: true }, loc || '(empty)');
  }
});

test('privacy copy exists in each catalog language', () => {
  for (const [lang, copy] of Object.entries(COPY)) {
    for (const key of PRIVACY_KEYS) {
      assert.equal(typeof copy[key], 'string', `${lang}.${key}`);
      assert.ok(copy[key].trim(), `${lang}.${key}`);
    }
  }
});

test('privacy is a page and the footer links to it', () => {
  const route = parse('/privacy/');
  assert.equal(route.view, 'privacy');
  assert.equal(route.lang, 'en');
  const model = viewModel({ ...route, search: '' });
  assert.match(model.title, /^Privacy — /);
  assert.match(model.html, /data-ga="allow"/);
  assert.match(model.html, /data-ga="refuse"/);
  assert.match(model.html, /href="\/privacy\/"/);
  const sk = parse('/sk/privacy/');
  assert.equal(sk.lang, 'sk');
  assert.equal(sk.view, 'privacy');
  const slovak = viewModel({ ...sk, search: '' });
  assert.match(slovak.title, /^Súkromie — /);
  assert.match(slovak.html, /href="\/sk\/privacy\/"/);
  assert.match(slovak.html, /https:\/\/whatsthatflower\.com\/sk\//);
  const home = viewModel({ lang: 'en', view: 'home', search: '' });
  assert.match(home.html, /href="\/privacy\/"/);
});
