import assert from 'node:assert/strict';
import test from 'node:test';
import {
  bannerDecision,
  bannerMarkup,
  pageStorage,
  readDismissed,
  relatedAppInstalled,
  writeDismissed,
  DISMISS_KEY,
} from '../src/appBanner.mjs';

const ANDROID =
  'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36';
const IPHONE_SAFARI =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1';
const IPHONE_CHROME =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/126.0.6478.54 Mobile/15E148 Safari/604.1';
const IPAD_SAFARI =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15';
const IPAD_CHROME =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/126.0.6478.153 Version/17.0 Safari/605.1.15';
const DESKTOP =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36';
const GOOGLEBOT =
  'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)';

const URLS = {
  play: 'https://play.google.com/store/apps/details?id=sk.ab.shrooms',
  appStore: 'https://apps.apple.com/us/app/whats-that-mushroom/id6826707489',
};

function decide(userAgent, extra = {}) {
  return bannerDecision({ userAgent, maxTouchPoints: 0, ...extra });
}

test('Android phones get the Play Store bar', () => {
  assert.equal(decide(ANDROID), 'google_play');
});

test('iPhone and iPad Safari use the system banner instead', () => {
  assert.equal(decide(IPHONE_SAFARI), null);
  assert.equal(decide(IPAD_SAFARI, { maxTouchPoints: 5 }), null);
});

test('other iOS browsers get the App Store bar', () => {
  assert.equal(decide(IPHONE_CHROME), 'app_store');
  assert.equal(decide(IPAD_CHROME, { maxTouchPoints: 5 }), 'app_store');
});

test('a desktop browser, including a touchscreen Mac, gets no bar', () => {
  assert.equal(decide(DESKTOP), null);
  assert.equal(decide(DESKTOP, { maxTouchPoints: 2 }), null);
});

test('a closed bar and an installed app stay hidden', () => {
  assert.equal(decide(ANDROID, { dismissed: true }), null);
  assert.equal(decide(ANDROID, { installed: true }), null);
  assert.equal(decide(IPHONE_CHROME, { installed: true }), null);
});

test('crawlers do not get the bar', () => {
  assert.equal(decide(GOOGLEBOT), null);
});

test('related apps match the Play package and the App Store id', () => {
  assert.equal(relatedAppInstalled([{ id: 'sk.ab.shrooms', platform: 'play' }]), true);
  assert.equal(relatedAppInstalled([{ id: '6826707489', platform: 'itunes' }]), true);
  assert.equal(relatedAppInstalled([{ id: 'id6826707489', platform: 'itunes' }]), true);
  assert.equal(relatedAppInstalled([{ id: 'sk.ab.herbs' }]), false);
  assert.equal(relatedAppInstalled([{ id: 'other.app' }]), false);
  assert.equal(relatedAppInstalled(null), false);
});

test('the bar names this app and the matching store', () => {
  const copy = {
    app: "What's that mushroom?",
    short: 'Identify mushrooms with a smartphone',
    get: 'Get',
    close: 'Close',
    storePlay: 'Get it on Google Play',
    storeApple: 'Download on the App Store',
  };
  const play = bannerMarkup(copy, 'google_play', URLS);
  assert.match(play, /class="app-banner"/);
  assert.match(play, /href="https:\/\/play\.google\.com\/store\/apps\/details\?id=sk\.ab\.shrooms"/);
  assert.match(play, /data-store="google_play"/);
  assert.match(play, /What&#39;s that mushroom\?/);
  assert.match(play, /src="\/images\/app-icon\.png"/);
  assert.match(play, /aria-label="Close"/);
  assert.match(play, />Get</);
  const apple = bannerMarkup(copy, 'app_store', URLS);
  assert.match(apple, /id6826707489/);
  assert.match(apple, /data-store="app_store"/);
  assert.match(apple, /aria-label="Download on the App Store"/);
  assert.equal(bannerMarkup(copy, 'other', URLS), '');
});

test('dismissal is stored on this site', () => {
  const saved = new Map();
  const storage = {
    getItem: (key) => (saved.has(key) ? saved.get(key) : null),
    setItem: (key, value) => saved.set(key, value),
  };
  assert.equal(readDismissed(storage), false);
  writeDismissed(storage);
  assert.equal(saved.get(DISMISS_KEY), 'dismissed');
  assert.equal(readDismissed(storage), true);
  assert.equal(readDismissed({ getItem: () => { throw new Error('private'); } }), false);
});

test('a throwing localStorage getter is not dismissed and still closes', () => {
  const previous = Object.getOwnPropertyDescriptor(globalThis, 'window');
  Object.defineProperty(globalThis, 'window', {
    configurable: true,
    value: {
      get localStorage() {
        throw new Error('SecurityError');
      },
    },
  });
  try {
    assert.equal(pageStorage(), null);
    assert.equal(readDismissed(pageStorage()), false);
    assert.doesNotThrow(() => writeDismissed(pageStorage()));
  } finally {
    if (previous) Object.defineProperty(globalThis, 'window', previous);
    else delete globalThis.window;
  }
});
