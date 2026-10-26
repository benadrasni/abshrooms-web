import { decisionFor, parseCloudflareTrace } from './analyticsConsent.mjs';

// Web stream on the abshrooms-a9d4c property shared with the Android and iOS apps.
const GA_ID = 'G-C3N3E9LE8J';
const CHOICE_KEY = 'wtm-ga';
const REGION_WAIT_MS = 3000;
const TITLE_GAP = ' — ';

let mode = 'pending';
let ask = false;
let installed = false;
let lastPageKey = '';
let lastSearchKey = '';
let lastFilterKey = '';
let queuedPage = null;
let queuedFilter = null;
let regionSettled = false;
const listeners = new Set();

function ready() {
  return mode === 'on' && typeof window !== 'undefined' && typeof window.gtag === 'function';
}

function readChoice() {
  try {
    const value = localStorage.getItem(CHOICE_KEY);
    return value === 'granted' || value === 'denied' ? value : '';
  } catch (err) {
    return '';
  }
}

function writeChoice(choice) {
  try {
    localStorage.setItem(CHOICE_KEY, choice);
  } catch (err) {
    /* private mode keeps the choice in memory only */
  }
}

export function analyticsState() {
  return { ready: mode !== 'pending', on: mode === 'on', ask };
}

function publish() {
  const state = analyticsState();
  listeners.forEach((listener) => listener(state));
}

export function subscribeAnalytics(listener) {
  listeners.add(listener);
  listener(analyticsState());
  return () => listeners.delete(listener);
}

function install() {
  if (installed || typeof document === 'undefined') return;
  installed = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('consent', 'default', {
    analytics_storage: 'granted',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
  window.gtag('js', new Date());
  window.gtag('config', GA_ID, { send_page_view: false });
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(script);
}

function clearGaCookies() {
  if (typeof document === 'undefined') return;
  const names = ['_ga', '_ga_' + GA_ID.slice(2), '_gid'];
  const host = window.location.hostname;
  const domains = [''];
  if (host && host !== 'localhost' && host.includes('.')) {
    domains.push(host);
    const parts = host.split('.');
    if (parts.length >= 2) domains.push('.' + parts.slice(-2).join('.'));
  }
  names.forEach((name) => {
    domains.forEach((domain) => {
      const suffix = domain ? '; Domain=' + domain : '';
      document.cookie = name + '=; Max-Age=0; Path=/' + suffix;
    });
  });
}

function turnOn() {
  mode = 'on';
  ask = false;
  if (typeof window !== 'undefined') {
    window['ga-disable-' + GA_ID] = false;
    if (installed && typeof window.gtag === 'function') {
      window.gtag('consent', 'update', { analytics_storage: 'granted' });
    } else {
      install();
    }
  }
  if (queuedPage) sendPageview(queuedPage.loc, queuedPage.meta);
  if (queuedFilter) sendFilter(queuedFilter);
  publish();
}

function turnOff({ ask: nextAsk, disableScript }) {
  mode = 'off';
  ask = Boolean(nextAsk);
  lastPageKey = '';
  lastSearchKey = '';
  lastFilterKey = '';
  if (disableScript && typeof window !== 'undefined') {
    window['ga-disable-' + GA_ID] = true;
    if (installed && typeof window.gtag === 'function') {
      window.gtag('consent', 'update', { analytics_storage: 'denied' });
    }
    clearGaCookies();
  }
  publish();
}

function settle(decision) {
  if (decision.load) {
    turnOn();
    return;
  }
  turnOff({ ask: decision.ask, disableScript: true });
}

export function allowAnalytics() {
  writeChoice('granted');
  turnOn();
}

export function refuseAnalytics() {
  writeChoice('denied');
  turnOff({ ask: false, disableScript: true });
}

function sendPageview(loc, meta) {
  if (!ready()) return;
  const info = meta || {};
  const pathname = loc.pathname || '/';
  const search = loc.search || '';
  const key = pathname + search;
  if (key === lastPageKey) return;
  lastPageKey = key;
  const species = String(info.species || '').trim();
  const params = {
    page_path: key,
    page_location: window.location.origin + key,
    page_title: species
      ? species + TITLE_GAP + (info.appName || "What's that mushroom?")
      : document.title || '',
    page_type: info.pageType || 'other',
    lang: info.lang || 'en',
    send_to: GA_ID,
  };
  if (species) params.species = species;
  window.gtag('event', 'page_view', params);
}

export function pageview(loc, meta) {
  queuedPage = { loc, meta };
  if (mode === 'on') sendPageview(loc, meta);
}

export function trackSearch(term, resultCount) {
  if (!ready()) return;
  const search_term = String(term || '').trim().slice(0, 100);
  if (search_term.length < 2) {
    lastSearchKey = '';
    return;
  }
  if (search_term === lastSearchKey) return;
  lastSearchKey = search_term;
  const count = Number.isFinite(resultCount) && resultCount >= 0 ? Math.min(Math.floor(resultCount), 100000) : 0;
  window.gtag('event', 'search', {
    search_term,
    result_count: count,
    send_to: GA_ID,
  });
}

function sendFilter(payload) {
  if (!ready() || !payload) return;
  if (payload.key === lastFilterKey) return;
  lastFilterKey = payload.key;
  window.gtag('event', 'filter_result', payload.params);
}

/** Same event as the app key, plus season, which only the website asks. */
export function trackFilterResult({ under, where, color, season, count }) {
  const underValue = (String(under || '').trim() || 'any').slice(0, 40);
  const whereValue = (String(where || '').trim() || 'any').slice(0, 40);
  const colorValue = (String(color || '').trim() || 'any').slice(0, 40);
  const seasonValue = (String(season || '').trim() || 'any').slice(0, 40);
  const active = underValue !== 'any' || whereValue !== 'any' || colorValue !== 'any' || seasonValue !== 'any';
  if (!active) {
    queuedFilter = null;
    lastFilterKey = '';
    return;
  }
  const resultCount = Number.isFinite(count) && count >= 0 ? Math.min(Math.floor(count), 100000) : 0;
  const params = {
    under: underValue,
    where: whereValue,
    color: colorValue,
    season: seasonValue,
    count: resultCount,
    send_to: GA_ID,
  };
  queuedFilter = {
    key: [underValue, whereValue, colorValue, seasonValue, resultCount].join('\n'),
    params,
  };
  if (mode === 'on') sendFilter(queuedFilter);
}

/** A species opened from search, the key, or a list. Matches the app event. */
export function trackMushroom(name, source) {
  if (!ready()) return;
  const itemId = String(name || '').trim().slice(0, 100);
  if (!itemId) return;
  const from = String(source || '').trim().slice(0, 24);
  window.gtag('event', 'select_content', {
    content_type: 'mushroom',
    item_id: itemId,
    ...(from ? { source: from } : {}),
    transport_type: 'beacon',
    send_to: GA_ID,
  });
}

/** A tap on the flower field guide. */
export function trackSister(place) {
  if (!ready()) return;
  const where = String(place || '').trim().slice(0, 24);
  window.gtag('event', 'sister_click', {
    link_domain: 'whatsthatflower.com',
    ...(where ? { link_place: where } : {}),
    page_path: window.location.pathname,
    transport_type: 'beacon',
    send_to: GA_ID,
  });
}

async function readRegion() {
  const response = await fetch('/cdn-cgi/trace', { cache: 'no-store', credentials: 'omit' });
  if (!response.ok) return '';
  return parseCloudflareTrace(await response.text());
}

function boot() {
  if (typeof window === 'undefined') return;
  window['ga-disable-' + GA_ID] = true;
  const choice = readChoice();
  if (choice === 'granted' || choice === 'denied') {
    settle(decisionFor({ choice, loc: '' }));
    return;
  }
  const timer = setTimeout(() => {
    if (regionSettled || readChoice()) return;
    settle(decisionFor({ choice: '', loc: '' }));
  }, REGION_WAIT_MS);
  readRegion()
    .then((loc) => {
      regionSettled = true;
      clearTimeout(timer);
      if (readChoice()) return;
      settle(decisionFor({ choice: '', loc }));
    })
    .catch(() => {
      regionSettled = true;
      clearTimeout(timer);
      if (readChoice()) return;
      settle(decisionFor({ choice: '', loc: '' }));
    });
}

boot();
