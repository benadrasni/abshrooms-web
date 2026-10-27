import assert from 'node:assert/strict';
import test from 'node:test';
import { COPY, parse, viewModel } from '../catalog.js';
import { decisionFor, parseCloudflareTrace } from '../src/analyticsConsent.mjs';
import { analyticsLocation } from '../src/identifyQuery.mjs';
import {
  allowAnalytics,
  analyticsState,
  pageview,
  refuseAnalytics,
  resetAnalyticsState,
  runConsentEvent,
} from '../src/analytics.js';

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

test('a slow region result cannot turn analytics on after the timeout asks', () => {
  resetAnalyticsState();
  const timed = runConsentEvent({ type: 'timeout' });
  assert.equal(timed.applied, true);
  assert.deepEqual(timed.decision, { load: false, ask: true });
  assert.equal(analyticsState().on, false);
  assert.equal(analyticsState().ask, true);
  assert.equal(analyticsState().choice, '');
  const late = runConsentEvent({ type: 'region', loc: 'US' });
  assert.equal(late.applied, false);
  assert.equal(analyticsState().on, false);
  assert.equal(analyticsState().ask, true);
  const html = viewModel({ lang: 'en', view: 'privacy', search: '' }).html;
  assert.match(html, /data-ga="allow" aria-pressed="false"/);
  assert.match(html, /data-ga="refuse" aria-pressed="false"/);
  const failed = runConsentEvent({ type: 'error' });
  assert.equal(failed.applied, false);
  resetAnalyticsState();
});

test('a choice after the timeout still turns collection on', () => {
  resetAnalyticsState();
  runConsentEvent({ type: 'timeout' });
  assert.equal(analyticsState().on, false);
  assert.equal(analyticsState().ask, true);
  allowAnalytics();
  assert.equal(analyticsState().on, true);
  assert.equal(analyticsState().ask, false);
  assert.equal(analyticsState().choice, 'granted');
  const late = runConsentEvent({ type: 'region', loc: 'US' });
  assert.equal(late.applied, false);
  assert.equal(analyticsState().on, true);
  assert.equal(analyticsState().choice, 'granted');
  const refused = runConsentEvent({ type: 'choice', choice: 'denied' });
  assert.equal(refused.applied, true);
  assert.equal(analyticsState().on, false);
  assert.equal(analyticsState().choice, 'denied');
  resetAnalyticsState();
});

test('privacy buttons stay unpressed until a choice is stored', () => {
  resetAnalyticsState();
  const waiting = viewModel({ lang: 'en', view: 'privacy', search: '' }).html;
  assert.match(waiting, /data-ga="allow" aria-pressed="false"/);
  assert.match(waiting, /data-ga="refuse" aria-pressed="false"/);
  allowAnalytics();
  const allowed = viewModel({ lang: 'en', view: 'privacy', search: '' }).html;
  assert.match(allowed, /data-ga="allow" aria-pressed="true"/);
  assert.match(allowed, /data-ga="refuse" aria-pressed="false"/);
  refuseAnalytics();
  const refused = viewModel({ lang: 'en', view: 'privacy', search: '' }).html;
  assert.match(refused, /data-ga="allow" aria-pressed="false"/);
  assert.match(refused, /data-ga="refuse" aria-pressed="true"/);
  const late = runConsentEvent({ type: 'region', loc: 'US' });
  assert.equal(late.applied, false);
  assert.equal(analyticsState().on, false);
  assert.equal(analyticsState().choice, 'denied');
  resetAnalyticsState();
});

test('page views keep identify filters and drop every other query', (t) => {
  resetAnalyticsState();
  const events = [];
  globalThis.window = {
    location: {
      hostname: 'whatsthatmushroom.app',
      origin: 'https://whatsthatmushroom.app',
    },
    gtag(type, name, params) {
      events.push({ type, name, params });
    },
  };
  t.after(() => {
    delete globalThis.window;
    resetAnalyticsState();
  });
  assert.equal(
    analyticsLocation('/identify/', '?under=gills&utm_source=ad&where=wood&color=blue&season=autumn&q=secret'),
    '/identify/?under=gills&where=wood&season=autumn'
  );
  assert.equal(analyticsLocation('/mushroom/Boletus%20edulis/', '?utm_source=newsletter&gclid=1'), '/mushroom/Boletus%20edulis/');
  assert.equal(analyticsLocation('/', '?fbclid=1'), '/');
  allowAnalytics();
  pageview(
    { pathname: '/identify/', search: '?under=gills&utm_source=ad&where=wood&color=red&season=autumn&q=secret' },
    { lang: 'en', pageType: 'identify' }
  );
  pageview({ pathname: '/privacy/', search: '?utm_source=ad&fbclid=1' }, { lang: 'en', pageType: 'privacy' });
  assert.equal(events[0].params.page_path, '/identify/?under=gills&where=wood&color=red&season=autumn');
  assert.equal(events[1].params.page_path, '/privacy/');
  const html = viewModel({
    lang: 'en',
    view: 'identify',
    search: '?under=gills&utm_source=ad&where=wood&color=blue&season=autumn&q=secret',
  }).html;
  assert.match(html, /aria-pressed="true"(?: disabled)? data-key="under" data-id="gills"/);
  assert.match(html, /aria-pressed="true"(?: disabled)? data-key="where" data-id="wood"/);
  assert.match(html, /class="region-toggle on"[^>]*>Autumn/);
  assert.match(html, /data-key="season" data-id="autumn" aria-checked="true"/);
  assert.doesNotMatch(html, /aria-pressed="true"(?: disabled)? data-key="color"/);
});
