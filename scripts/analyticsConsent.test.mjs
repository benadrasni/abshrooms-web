import assert from 'node:assert/strict';
import { mock, test } from 'node:test';
import { COPY, parse, start, viewModel } from '../catalog.js';
import { countryFromTraces, decisionFor, parseCloudflareTrace } from '../src/analyticsConsent.mjs';
import { analyticsLocation } from '../src/identifyQuery.mjs';
import {
  allowAnalytics,
  analyticsState,
  pageview,
  refuseAnalytics,
  resetAnalyticsState,
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

test('one trace body is a country, catalog HTML, or empty', () => {
  const missing = '<!DOCTYPE html><title>That page is not in the catalog.</title>';
  assert.equal(parseCloudflareTrace('loc=SK\n'), 'SK');
  assert.equal(parseCloudflareTrace(missing), '');
  assert.equal(parseCloudflareTrace(''), '');
});

test('the first usable country wins', () => {
  const missing = '<!DOCTYPE html><title>That page is not in the catalog.</title>';
  const cloudflare = 'h=www.cloudflare.com\nloc=US\n';
  assert.equal(countryFromTraces([missing, cloudflare]), 'US');
  assert.equal(countryFromTraces(['loc=SK\n', cloudflare]), 'SK');
  assert.equal(countryFromTraces([missing, '']), '');
  assert.equal(countryFromTraces([missing]), '');
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

test('a settled flag keeps a late region from turning collection on', () => {
  let settled = false;
  function consider({ choice, loc }) {
    if (choice !== 'granted' && choice !== 'denied' && settled) return null;
    settled = true;
    return decisionFor({ choice: choice || '', loc: loc || '' });
  }

  assert.deepEqual(consider({ loc: '' }), { load: false, ask: true });
  assert.equal(consider({ loc: 'US' }), null);
  assert.equal(consider({ loc: 'DE' }), null);
  assert.deepEqual(consider({ choice: 'granted' }), { load: true, ask: false });
  assert.equal(consider({ loc: 'US' }), null);
  assert.deepEqual(consider({ choice: 'denied' }), { load: false, ask: false });
  assert.equal(consider({ loc: 'US' }), null);
  assert.deepEqual(decisionFor({ choice: 'denied', loc: 'US' }), { load: false, ask: false });
  assert.deepEqual(decisionFor({ choice: '', loc: 'DE' }), { load: false, ask: true });
  assert.deepEqual(decisionFor({ choice: '', loc: '' }), { load: false, ask: true });
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
  resetAnalyticsState();
});

const GA_DISABLE = 'ga-disable-G-HNL4783D4F';
const TRACE_URLS = ['/cdn-cgi/trace', 'https://www.cloudflare.com/cdn-cgi/trace'];

function installSurface() {
  const written = [];
  const doc = {
    createElement() {
      return {};
    },
    head: { appendChild() {} },
    querySelectorAll() {
      return [];
    },
  };
  Object.defineProperty(doc, 'cookie', {
    configurable: true,
    get() {
      return '';
    },
    set(value) {
      written.push(value);
    },
  });
  const reloads = [];
  globalThis.document = doc;
  globalThis.window = {
    location: {
      hostname: 'whatsthatmushroom.app',
      origin: 'https://whatsthatmushroom.app',
      reload() {
        reloads.push(true);
      },
    },
    document: doc,
  };
  return { written, reloads };
}

function restoreSurface() {
  delete globalThis.window;
  delete globalThis.document;
  delete globalThis.localStorage;
  resetAnalyticsState();
}

const GA_COOKIES = ['_ga', '_ga_HNL4783D4F', '_ga_C3N3E9LE8J', '_gid'];

function assertCleared(written) {
  const names = written.map((value) => value.split('=')[0]);
  for (const name of GA_COOKIES) {
    assert.equal(names.includes(name), true, name);
  }
  assert.equal(names.length, GA_COOKIES.length * 3);
}

test('refuse clears cookies and denies the tag, and reloads only when the denial was saved', (t) => {
  resetAnalyticsState();
  const { written, reloads } = installSurface();
  const store = {};
  let storageThrows = false;
  globalThis.localStorage = {
    getItem(key) {
      return Object.prototype.hasOwnProperty.call(store, key) ? store[key] : null;
    },
    setItem(key, value) {
      if (storageThrows) throw new Error('private');
      store[key] = value;
    },
  };
  t.after(restoreSurface);

  allowAnalytics();
  assert.equal(window[GA_DISABLE], false);
  refuseAnalytics();
  assert.equal(analyticsState().on, false);
  assert.equal(analyticsState().choice, 'denied');
  assert.equal(window[GA_DISABLE], true);
  assertCleared(written);
  for (const domain of ['', '; Domain=whatsthatmushroom.app', '; Domain=.whatsthatmushroom.app']) {
    assert.equal(
      written.includes('_ga_C3N3E9LE8J=; Max-Age=0; Path=/' + domain),
      true,
      domain || '(host-only)'
    );
  }
  const denied = window.dataLayer.filter((entry) => entry[0] === 'consent' && entry[1] === 'update');
  assert.equal(denied.at(-1)[2].analytics_storage, 'denied');
  assert.equal(reloads.length, 1);

  written.length = 0;
  storageThrows = true;
  allowAnalytics();
  refuseAnalytics();
  assert.equal(reloads.length, 1);
  assert.equal(analyticsState().on, false);
  assert.equal(analyticsState().choice, 'denied');
  assert.equal(window[GA_DISABLE], true);
  assertCleared(written);
  const deniedAgain = window.dataLayer.filter((entry) => entry[0] === 'consent' && entry[1] === 'update');
  assert.equal(deniedAgain.at(-1)[2].analytics_storage, 'denied');
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

function cookieDoc(written) {
  const doc = {
    createElement() {
      return {};
    },
    head: { appendChild() {} },
    querySelectorAll() {
      return [];
    },
  };
  Object.defineProperty(doc, 'cookie', {
    configurable: true,
    get() {
      return '';
    },
    set(value) {
      written.push(value.split('=')[0]);
    },
  });
  return doc;
}

async function bootFresh(id, { stored = '', trace, traces, fail = false, hang = false, ok = true } = {}) {
  const written = [];
  const urls = [];
  const doc = cookieDoc(written);
  let fetchCalls = 0;
  globalThis.document = doc;
  globalThis.localStorage = {
    getItem() {
      return stored;
    },
    setItem() {},
  };
  globalThis.window = {
    location: {
      hostname: 'whatsthatmushroom.app',
      origin: 'https://whatsthatmushroom.app',
    },
    document: doc,
  };
  globalThis.fetch = (url) => {
    fetchCalls += 1;
    const target = String(url);
    urls.push(target);
    if (!TRACE_URLS.includes(target)) return Promise.reject(new Error('unexpected ' + target));
    if (hang) return new Promise(() => {});
    if (fail) return Promise.reject(new Error('trace'));
    const spec = traces && Object.prototype.hasOwnProperty.call(traces, target) ? traces[target] : trace;
    const responseOk = spec && typeof spec === 'object' ? spec.ok !== false : ok;
    const body = spec && typeof spec === 'object' ? spec.body : spec;
    return Promise.resolve({
      ok: responseOk,
      text: async () => body || '',
    });
  };
  const analytics = await import(new URL('../src/analytics.js?boot=' + id, import.meta.url));
  await new Promise((resolve) => setImmediate(resolve));
  return { analytics, written, fetchCalls: () => fetchCalls, urls: () => urls.slice() };
}

test('boot sends stored denial, an EU region, a timeout, and a trace error through the same off path', async (t) => {
  let realClear = null;
  t.after(() => {
    delete globalThis.window;
    delete globalThis.document;
    delete globalThis.localStorage;
    delete globalThis.fetch;
    if (realClear) globalThis.clearTimeout = realClear;
    mock.timers.reset();
  });

  const denied = await bootFresh('denied', { stored: 'denied' });
  assert.deepEqual(denied.analytics.analyticsState(), { ready: true, on: false, ask: false, choice: 'denied' });
  assert.equal(window[GA_DISABLE], true);
  assert.equal(denied.fetchCalls(), 0);
  assert.deepEqual(denied.urls(), []);
  assertCleared(denied.written);

  const granted = await bootFresh('granted', { stored: 'granted' });
  assert.deepEqual(granted.analytics.analyticsState(), { ready: true, on: true, ask: false, choice: 'granted' });
  assert.equal(window[GA_DISABLE], false);
  assert.equal(granted.fetchCalls(), 0);
  assert.deepEqual(granted.urls(), []);
  assert.equal(granted.written.length, 0);

  const europe = await bootFresh('eu', { trace: 'loc=DE\n' });
  assert.deepEqual(europe.analytics.analyticsState(), { ready: true, on: false, ask: true, choice: '' });
  assert.equal(window[GA_DISABLE], true);
  assert.deepEqual(europe.urls(), TRACE_URLS);
  assertCleared(europe.written);

  const broken = await bootFresh('error', { fail: true });
  assert.deepEqual(broken.analytics.analyticsState(), { ready: true, on: false, ask: true, choice: '' });
  assert.deepEqual(broken.urls(), TRACE_URLS);
  assertCleared(broken.written);

  mock.timers.enable({ apis: ['setTimeout'] });
  realClear = globalThis.clearTimeout;
  globalThis.clearTimeout = () => {};
  let finish = null;
  const lateUrls = [];
  globalThis.fetch = (url) => new Promise((resolve) => {
    lateUrls.push(String(url));
    finish = resolve;
  });
  const late = await import(new URL('../src/analytics.js?boot=late', import.meta.url));
  const lateCookies = [];
  globalThis.document = cookieDoc(lateCookies);
  window.document = globalThis.document;
  mock.timers.tick(3000);
  await new Promise((resolve) => setImmediate(resolve));
  assert.deepEqual(late.analyticsState(), { ready: true, on: false, ask: true, choice: '' });
  assertCleared(lateCookies);
  assert.equal(decisionFor({ choice: '', loc: 'US' }).load, true);
  finish({ ok: true, text: async () => 'loc=US\n' });
  await new Promise((resolve) => setImmediate(resolve));
  assert.deepEqual(late.analyticsState(), { ready: true, on: false, ask: true, choice: '' });
  assert.equal(window[GA_DISABLE], true);
  assert.deepEqual(lateUrls, TRACE_URLS);
});

test('a failed same-origin trace uses the public country and does not ask outside the consent region', async (t) => {
  t.after(() => {
    delete globalThis.window;
    delete globalThis.document;
    delete globalThis.localStorage;
    delete globalThis.fetch;
  });

  const missing = '<!DOCTYPE html><title>That page is not in the catalog.</title>';
  const notOk = await bootFresh('not-ok', { trace: 'loc=US\n', ok: false });
  assert.deepEqual(notOk.analytics.analyticsState(), { ready: true, on: false, ask: true, choice: '' });
  assert.equal(window[GA_DISABLE], true);
  assert.deepEqual(notOk.urls(), TRACE_URLS);
  assertCleared(notOk.written);

  const html = await bootFresh('html', { trace: missing });
  assert.deepEqual(html.analytics.analyticsState(), { ready: true, on: false, ask: true, choice: '' });
  assert.deepEqual(html.urls(), TRACE_URLS);
  assertCleared(html.written);

  const united = await bootFresh('us', { trace: 'loc=US\nip=203.0.113.8\n' });
  assert.deepEqual(united.analytics.analyticsState(), { ready: true, on: true, ask: false, choice: '' });
  assert.deepEqual(united.urls(), TRACE_URLS);
  assert.equal(united.written.length, 0);

  const rescued = await bootFresh('rescued', {
    traces: {
      '/cdn-cgi/trace': missing,
      'https://www.cloudflare.com/cdn-cgi/trace': 'h=www.cloudflare.com\nloc=US\n',
    },
  });
  assert.deepEqual(rescued.analytics.analyticsState(), { ready: true, on: true, ask: false, choice: '' });
  assert.deepEqual(rescued.urls(), TRACE_URLS);
  assert.equal(rescued.written.length, 0);

  const britain = await bootFresh('britain', {
    traces: {
      '/cdn-cgi/trace': { ok: false, body: '' },
      'https://www.cloudflare.com/cdn-cgi/trace': 'loc=GB\n',
    },
  });
  assert.deepEqual(britain.analytics.analyticsState(), { ready: true, on: false, ask: true, choice: '' });
  assertCleared(britain.written);

  const sameOrigin = await bootFresh('same-origin', {
    traces: {
      '/cdn-cgi/trace': 'loc=DE\n',
      'https://www.cloudflare.com/cdn-cgi/trace': 'loc=US\n',
    },
  });
  assert.deepEqual(sameOrigin.analytics.analyticsState(), { ready: true, on: false, ask: true, choice: '' });
  assertCleared(sameOrigin.written);
});

test('router history calls miss a tag that wrapped them and listened for popstate', async (t) => {
  const nativeCalls = [];
  const wrappedCalls = [];
  const historyObj = {
    pushState(...args) {
      nativeCalls.push(['push', ...args]);
    },
    replaceState(...args) {
      nativeCalls.push(['replace', ...args]);
    },
  };
  const win = new EventTarget();
  win.location = {
    hostname: 'whatsthatmushroom.app',
    origin: 'https://whatsthatmushroom.app',
    pathname: '/',
    search: '',
    hash: '',
  };
  win.scrollY = 0;
  win.scrollTo = () => {};
  const app = { innerHTML: '' };
  const doc = new EventTarget();
  let script = null;
  doc.createElement = () => {
    script = {};
    return script;
  };
  doc.head = { appendChild() {} };
  doc.getElementById = (id) => (id === 'app' ? app : null);
  doc.querySelector = () => null;
  doc.querySelectorAll = () => [];
  doc.documentElement = {
    lang: '',
    dir: '',
    classList: { add() {}, remove() {} },
    style: { setProperty() {}, removeProperty() {} },
  };
  doc.body = { style: { overflow: '' } };
  doc.title = '';
  const written = [];
  Object.defineProperty(doc, 'cookie', {
    configurable: true,
    get() {
      return '';
    },
    set(value) {
      written.push(value);
    },
  });
  globalThis.history = historyObj;
  globalThis.location = win.location;
  globalThis.window = win;
  globalThis.document = doc;
  globalThis.localStorage = {
    getItem() {
      return '';
    },
    setItem() {},
  };
  globalThis.fetch = () => Promise.resolve({ ok: false, text: async () => '' });
  t.after(() => {
    delete globalThis.history;
    delete globalThis.location;
    delete globalThis.window;
    delete globalThis.document;
    delete globalThis.localStorage;
    delete globalThis.fetch;
  });

  const analytics = await import(new URL('../src/analytics.js?boot=unwrap', import.meta.url));
  await new Promise((resolve) => setImmediate(resolve));
  let early = 0;
  let tagPopstate = 0;
  let after = 0;
  let clicks = 0;
  win.addEventListener('popstate', () => {
    early += 1;
  });
  analytics.allowAnalytics();
  assert.equal(typeof script.onload, 'function');
  start();
  await Promise.resolve();

  const nativePush = historyObj.pushState;
  const nativeReplace = historyObj.replaceState;
  historyObj.pushState = (...args) => {
    wrappedCalls.push(['push', ...args]);
    nativePush(...args);
  };
  historyObj.replaceState = (...args) => {
    wrappedCalls.push(['replace', ...args]);
    nativeReplace(...args);
  };
  win.addEventListener('popstate', () => {
    tagPopstate += 1;
  });
  win.addEventListener('click', () => {
    clicks += 1;
  });
  script.onload();
  win.addEventListener('popstate', () => {
    after += 1;
  });

  history.pushState(null, '', '/identify/');
  history.replaceState(null, '', '/');
  assert.deepEqual(wrappedCalls, []);
  assert.deepEqual(nativeCalls, [
    ['push', null, '', '/identify/'],
    ['replace', null, '', '/'],
  ]);

  app.innerHTML = '';
  win.dispatchEvent(new Event('popstate'));
  win.dispatchEvent(new Event('click'));
  assert.equal(tagPopstate, 0);
  assert.equal(early, 1);
  assert.equal(after, 1);
  assert.equal(clicks, 1);
  assert.equal(app.innerHTML.includes('What'), true);
});

test('a tag popstate listener is dropped whichever side of the router it is called from', async (t) => {
  const win = new EventTarget();
  win.location = {
    hostname: 'whatsthatmushroom.app',
    origin: 'https://whatsthatmushroom.app',
  };
  const doc = new EventTarget();
  let script = null;
  doc.createElement = () => {
    script = {};
    return script;
  };
  doc.head = { appendChild() {} };
  const written = [];
  Object.defineProperty(doc, 'cookie', {
    configurable: true,
    get() {
      return '';
    },
    set(value) {
      written.push(value);
    },
  });
  globalThis.window = win;
  globalThis.document = doc;
  globalThis.localStorage = {
    getItem() {
      return '';
    },
    setItem() {},
  };
  globalThis.fetch = () => Promise.resolve({ ok: false, text: async () => '' });
  t.after(() => {
    delete globalThis.window;
    delete globalThis.document;
    delete globalThis.localStorage;
    delete globalThis.fetch;
  });

  const analytics = await import(new URL('../src/analytics.js?boot=order', import.meta.url));
  await new Promise((resolve) => setImmediate(resolve));
  analytics.allowAnalytics();
  await Promise.resolve();
  let tag = 0;
  let later = 0;
  win.addEventListener('popstate', () => {
    tag += 1;
  });
  script.onload();
  win.addEventListener('popstate', () => {
    later += 1;
  });
  win.dispatchEvent(new Event('popstate'));
  assert.equal(tag, 0);
  assert.equal(later, 1);
});
