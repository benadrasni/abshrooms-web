import assert from 'node:assert/strict';
import test from 'node:test';
import { COPY, LANGS, CATALOG as siteCatalog, countLabel, viewModel } from '../catalog.js';
import { CATALOG } from '../species.js';

const WHERE = new Set(['wood', 'ground', 'grass']);
const COLOR = new Set(['white', 'yellow', 'red', 'brown', 'green', 'purple', 'dark']);
const HYMENIUM = new Set(['gills', 'tubes', 'ridges', 'teeth', 'pits', 'smooth', 'gleba']);

test('each species carries its own identify facts', () => {
  assert.equal(siteCatalog, CATALOG);
  const names = new Set();
  const ids = new Set();
  for (const species of CATALOG) {
    assert.equal(names.has(species.name), false, species.name);
    assert.equal(ids.has(species.id), false, species.name);
    names.add(species.name);
    ids.add(species.id);
    assert.ok(HYMENIUM.has(species.hymenium), species.name);
    assert.ok(species.where.length > 0 && species.where.every((id) => WHERE.has(id)), species.name);
    assert.ok(species.color.length > 0 && species.color.every((id) => COLOR.has(id)), species.name);
    assert.match(species.added, /^\d{4}-\d{2}-\d{2}$/);
    assert.ok(species.fruitingFrom >= 1 && species.fruitingFrom <= 12, species.name);
    assert.ok(species.fruitingTo >= 1 && species.fruitingTo <= 12, species.name);
  }
});

test('the season panel is a details element', () => {
  const model = viewModel({ lang: 'en', view: 'identify', search: '' });
  assert.match(model.html, /<details class="season-details" id="identify-season-panel">/);
  assert.equal(model.html.includes('data-season-toggle'), false);
  assert.equal(model.html.includes('seasonOpen'), false);
  assert.match(model.html, /role="radiogroup"/);
  const chosen = viewModel({ lang: 'en', view: 'identify', search: '?season=summer', seasonOpen: true });
  assert.match(chosen.html, /<details class="season-details" id="identify-season-panel" open>/);
  assert.match(chosen.html, /data-key="season" data-id="summer"/);
});

test('every menu language has interface strings', () => {
  assert.equal(LANGS.length, 34);
  for (const { code, name } of LANGS) {
    assert.equal(typeof name, 'string');
    assert.equal(name.length > 0, true, code);
    assert.equal(typeof COPY[code].app, 'string', code);
    assert.equal(typeof COPY[code].one, 'string', code);
    assert.equal(typeof COPY[code].many, 'string', code);
  }
});

const ABOUT_KEYS = [
  'about',
  'aboutHeadline',
  'aboutLede',
  'aboutFactCollection',
  'aboutFactLanguages',
  'aboutFactKey',
  'aboutFactSteps',
  'plate',
  'aboutWhyKicker',
  'aboutWhyTitle',
  'aboutWhyP1',
  'aboutWhyP2',
  'aboutWhyP3',
  'aboutHowTitle',
  'aboutHowLede',
  'aboutTilePlateT',
  'aboutTilePlateD',
  'field',
  'aboutTilePhotoT',
  'aboutTilePhotoD',
  'aboutTileTextT',
  'aboutTileTextD',
  'aboutLangsTitle',
  'aboutLangsLede',
  'aboutNamesK',
  'aboutNamesNote',
  'sources',
  'aboutSourcesIntro',
  'sourcesName',
  'aboutSrcIfSub',
  'aboutSrcMbSub',
  'aboutSrcGbifSub',
  'sourcesText',
  'aboutSrcGuides',
  'aboutSrcGuidesSub',
  'sourcesImages',
  'aboutSrcPlates',
  'aboutSrcPlatesSub',
  'aboutSrcCommonsSub',
  'keyTitle',
  'keyLede',
  'keyOpen',
  'aboutSister',
  'sisterSite',
  'aboutSeo',
  'app',
  'nav',
  'language',
  'privacy',
];

const PRIVACY_KEYS = [
  'privacy',
  'privacySeo',
  'privacyLead',
  'privacyAppLink',
  'privacyAnalyticsTitle',
  'privacyAnalytics',
  'privacyChoiceTitle',
  'privacyChoice',
  'privacyStatusOn',
  'privacyStatusOff',
  'gaAllow',
  'gaRefuse',
  'privacyContact',
  'app',
];

function dayKey(date) {
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${date.getFullYear()}-${month}-${day}`;
}

function esc(value) {
  return String(value).replace(/[&<>"']/g, (ch) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }[ch]));
}

test('about and privacy follow the language record', () => {
  assert.deepEqual(
    LANGS.filter((item) => item.dir === 'rtl').map((item) => item.code).sort(),
    ['ar', 'fa', 'he']
  );
  assert.deepEqual(
    LANGS.filter((item) => item.lower).map((item) => item.code).sort(),
    ['cs', 'pl', 'ru', 'sk', 'uk']
  );
  const now = new Date();
  const today = dayKey(now);
  const yesterday = dayKey(new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1));
  const recent = [...siteCatalog]
    .sort((a, b) => {
      if (a.added !== b.added) return a.added < b.added ? 1 : -1;
      return b.id - a.id;
    })
    .slice(0, 7);
  const dated = recent.find((species) => species.added !== today && species.added !== yesterday);

  for (const language of LANGS) {
    const copy = COPY[language.code];
    assert.match(language.locale, /^[a-z]{2,3}-[A-Za-z]{2}$/, language.code);
    assert.equal(typeof language.plural, 'function', language.code);
    for (const key of ABOUT_KEYS) {
      assert.equal(typeof copy[key], 'string', `${language.code}.${key}`);
      assert.ok(copy[key].trim(), `${language.code}.${key}`);
    }
    for (const key of PRIVACY_KEYS) {
      assert.equal(typeof copy[key], 'string', `${language.code}.${key}`);
      assert.ok(copy[key].trim(), `${language.code}.${key}`);
    }
    assert.ok(copy.aboutLangsLede.includes('{n}'), language.code);

    for (const n of [0, 1, 2, 4, 5, 11, 21, 22, 101, 102]) {
      const category = language.plural(n);
      assert.equal(typeof copy[category], 'string', `${language.code} ${n} ${category}`);
      const label = countLabel(n, language.code);
      assert.equal(label, copy[category].replace('{n}', String(n)), `${language.code} ${n}`);
      if (n !== 1) assert.ok(label.includes(String(n)), `${language.code} ${n} ${label}`);
    }

    const about = viewModel({ lang: language.code, view: 'about', search: '' });
    const privacy = viewModel({ lang: language.code, view: 'privacy', search: '' });
    assert.ok(
      about.html.includes(`<div class="k">${esc(copy.aboutFactLanguages)}</div><div class="v">${LANGS.length}</div>`),
      language.code
    );
    assert.ok(about.html.includes(esc(copy.aboutLangsLede.replace('{n}', String(LANGS.length)))), language.code);
    assert.equal(about.html.includes('{n}'), false, language.code);
    assert.equal((about.html.match(/class="lang-chip/g) || []).length, LANGS.length, language.code);
    for (const item of LANGS) {
      const path = item.code === 'en' ? '/about/' : `/${item.code}/about/`;
      assert.ok(about.html.includes(`href="${path}"`), `${language.code} → ${item.code}`);
    }
    assert.ok(privacy.html.includes(esc(copy.privacyLead)), language.code);
    assert.ok(privacy.html.includes(esc(copy.gaAllow)), language.code);
    assert.ok(privacy.html.includes(esc(copy.privacyAnalytics)), language.code);

    const home = viewModel({ lang: language.code, view: 'home', search: '' });
    if (dated) {
      const [year, month, day] = dated.added.split('-').map(Number);
      const formatted = new Intl.DateTimeFormat(language.locale, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }).format(new Date(year, month - 1, day));
      assert.ok(home.html.includes(esc(formatted)), `${language.code} ${formatted}`);
    } else {
      assert.ok(home.html.includes(esc(copy.today)), `${language.code} today`);
    }
  }

  assert.equal(COPY.sl.two, '{n} gobi');
  assert.equal(countLabel(2, 'sl'), COPY.sl.two.replace('{n}', '2'));
  assert.equal(countLabel(102, 'sl'), COPY.sl.two.replace('{n}', '102'));
});

const PLURAL_EXTRAS = new Set(['two', 'few', 'zero']);
const OPTIONAL_KEYS = new Set(['moreNamesOne', 'moreNamesFew']);

test('every language uses one copy shape', () => {
  const enKeys = Object.keys(COPY.en).filter((key) => key !== 'ranks').sort();
  const enRanks = Object.keys(COPY.en.ranks).sort();
  for (const { code } of LANGS) {
    const copy = COPY[code];
    const keys = Object.keys(copy).filter((key) => key !== 'ranks');
    const extra = keys.filter((key) => !enKeys.includes(key) && !PLURAL_EXTRAS.has(key) && !OPTIONAL_KEYS.has(key)).sort();
    const missing = enKeys.filter((key) => !Object.prototype.hasOwnProperty.call(copy, key));
    assert.deepEqual(extra, [], `${code} extra`);
    assert.deepEqual(missing, [], `${code} missing`);
    assert.deepEqual(Object.keys(copy.ranks).sort(), enRanks, code);
    assert.match(copy.capUpTo, /\{n\}/, code);
    for (const key of enKeys) {
      assert.equal(typeof copy[key], 'string', `${code}.${key}`);
      assert.ok(copy[key].trim(), `${code}.${key}`);
    }
    for (const rank of enRanks) {
      assert.equal(typeof copy.ranks[rank], 'string', `${code}.ranks.${rank}`);
      assert.ok(copy.ranks[rank].trim(), `${code}.ranks.${rank}`);
    }
  }
});

function escText(value) {
  return String(value == null ? '' : value).replace(/[&<>"']/g, (ch) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }[ch]));
}

test('a species page shows the plate and photo credits stored on the record', () => {
  for (const species of CATALOG) {
    const page = viewModel({ lang: 'en', view: 'mushroom', key: species.name, search: '' });
    const plate = species.plateCredit;
    assert.ok(page.html.includes(escText(plate.author)), species.name);
    assert.ok(page.html.includes(escText(plate.license)), species.name);
    if (plate.source) assert.ok(page.html.includes(plate.source), `${species.name} plate source`);
    for (const photo of species.photos) {
      assert.ok(page.html.includes(escText(photo.author)), `${species.name} ${photo.author}`);
      assert.ok(page.html.includes(escText(photo.license)), `${species.name} ${photo.license}`);
      assert.ok(page.html.includes(photo.source), `${species.name} photo source`);
      if (photo.licenseUrl) assert.ok(page.html.includes(photo.licenseUrl), species.name);
    }
  }

  const edulis = viewModel({ lang: 'en', view: 'mushroom', key: 'Boletus edulis', search: '' });
  assert.match(
    edulis.html,
    /href="https:\/\/www\.biodiversitylibrary\.org\/item\/22673"[^>]*>L\. Dufour<\/a> · public domain/
  );
  assert.match(edulis.html, /href="https:\/\/creativecommons\.org\/licenses\/by-sa\/4\.0"[^>]*>CC BY-SA 4\.0<\/a>/);
  assert.match(edulis.html, /data-caption="Photo 1 of 5"/);
  assert.match(edulis.html, /aria-label="Photo 1 of 5, UuMUfQ, CC BY-SA 4\.0"/);

  const slovak = viewModel({ lang: 'sk', view: 'mushroom', key: 'Boletus edulis', search: '' });
  assert.match(slovak.html, /Fotografia 1 z 5/);
  assert.match(slovak.html, />UuMUfQ</);

  const reticulatus = viewModel({ lang: 'en', view: 'mushroom', key: 'Boletus reticulatus', search: '' });
  assert.match(reticulatus.html, /<span class="credit">Gemini · not stated<\/span>/);

  const panther = viewModel({ lang: 'en', view: 'mushroom', key: 'Amanita pantherina', search: '' });
  assert.match(
    panther.html,
    /href="https:\/\/commons\.wikimedia\.org\/wiki\/File:Amanita_pantherina_2013_G1\.jpg"[^>]*>George Chernilevsky<\/a> · Public domain/
  );

  const about = viewModel({ lang: 'en', view: 'about', search: '' });
  assert.match(about.html, /class="credit">(?:<a[^>]*>)?L\. Dufour/);
  assert.match(about.html, />UuMUfQ</);
});
