import assert from 'node:assert/strict';
import test from 'node:test';
import { COPY, LANGS, CATALOG as siteCatalog, countLabel, parse, recordsLabel, viewModel } from '../catalog.js';
import { EN_GB, prefersBritishEnglish } from '../copy.js';
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

test('Not clear skips the underside filter', () => {
  const model = viewModel({ lang: 'en', view: 'identify', search: '?under=gills' });
  assert.match(model.html, /class="petal-tile" aria-pressed="false" data-key="under-skip" data-id=""/);
  assert.match(model.html, />Not clear<\/span><span class="num">/);
  const unclearCount = CATALOG.length.toLocaleString('en-US');
  assert.match(model.html, new RegExp('data-key="under-skip" data-id="">[\\s\\S]*?<span class="num">' + unclearCount + '</span>'));
  assert.match(model.html, /id="identify-where"/);
  assert.equal(model.html.includes('data-id="unclear"'), false);
  assert.match(model.html, /aria-pressed="true"(?: disabled)? data-key="under" data-id="gills"/);
});

test('British English is a spelling overlay, not another language', () => {
  assert.equal(LANGS.length, 34);
  assert.equal(LANGS.some((language) => language.code === 'en_GB'), false);
  assert.equal(COPY.en.colorQuestion, 'What color is the cap?');
  assert.equal(EN_GB.colorQuestion, 'What colour is the cap?');
  assert.equal(prefersBritishEnglish('en-GB'), true);
  assert.equal(prefersBritishEnglish('en_GB'), true);
  assert.equal(prefersBritishEnglish('en-gb-oxendict'), true);
  assert.equal(prefersBritishEnglish('en-UK'), true);
  assert.equal(prefersBritishEnglish('en-US'), false);
  assert.equal(prefersBritishEnglish('en'), false);
  assert.equal(prefersBritishEnglish('en-AU'), false);
  const british = Object.assign({}, COPY.en, EN_GB);
  assert.equal(british.colorQuestion, EN_GB.colorQuestion);
  assert.equal(british.underQuestion, COPY.en.underQuestion);
  for (const key of Object.keys(EN_GB)) {
    assert.equal(typeof COPY.en[key], 'string', key);
    assert.notEqual(EN_GB[key], COPY.en[key], key);
    assert.match(EN_GB[key], /colour/i, key);
    assert.doesNotMatch(COPY.en[key], /colour/i, key);
  }
  for (const [key, value] of Object.entries(COPY.en)) {
    if (typeof value !== 'string' || !/colour/i.test(value)) continue;
    assert.ok(EN_GB[key], key);
  }
  const model = viewModel({ lang: 'en', view: 'identify', search: '' });
  assert.match(model.html, /What color is the cap\?/);
  assert.equal(model.html.includes('What colour is the cap?'), false);
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
  'plantOpen',
  'appInApp',
  'plantInApp',
  'plantLede',
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
      const label = recent.some((species) => species.added === today) ? copy.today : copy.yesterday;
      assert.ok(home.html.includes(esc(label)), `${language.code} ${label}`);
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

test('a species page shows only the Latin name when there is no vernacular', () => {
  const italian = viewModel({ lang: 'it', view: 'mushroom', key: 'Galerina marginata', search: '' });
  assert.match(italian.html, /<h1 class="common latin">Galerina marginata <span class="author">\(Batsch\) Kühner<\/span><\/h1>/);
  assert.doesNotMatch(italian.html, /class="binomen/);
  assert.doesNotMatch(italian.html, /galerina marginata/);
  assert.match(italian.title, /^Galerina marginata — /);
  assert.doesNotMatch(italian.title, /\(/);

  const hindi = viewModel({ lang: 'hi', view: 'mushroom', key: 'Amanita phalloides', search: '' });
  assert.match(hindi.html, /<h1 class="common latin">Amanita phalloides <span class="author">\(Vaill\. ex Fr\.\) Link<\/span><\/h1>/);
  assert.doesNotMatch(hindi.html, /class="binomen/);
  assert.match(hindi.title, /^Amanita phalloides — /);

  const slovakLatin = viewModel({ lang: 'sk', view: 'mushroom', key: 'Hericium americanum', search: '' });
  assert.match(slovakLatin.html, /<h1 class="common latin">Hericium americanum <span class="author">/);
  assert.doesNotMatch(slovakLatin.html, /hericium americanum/);
  assert.doesNotMatch(slovakLatin.html, /class="binomen/);

  const english = viewModel({ lang: 'en', view: 'mushroom', key: 'Amanita phalloides', search: '' });
  assert.match(english.html, /<h1 class="common">death cap<\/h1>/);
  assert.match(english.html, /<div class="binomen latin">Amanita phalloides <span class="author">\(Vaill\. ex Fr\.\) Link<\/span><\/div>/);
  assert.match(english.title, /^death cap \(Amanita phalloides\) — /);

  const slovak = viewModel({ lang: 'sk', view: 'mushroom', key: 'Boletus edulis', search: '' });
  assert.match(slovak.html, /<h1 class="common">hríb smrekový<\/h1>/);
  assert.match(slovak.html, /<div class="binomen latin">Boletus edulis <span class="author">/);
  assert.match(slovak.title, /^hríb smrekový \(Boletus edulis\) — /);
});

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

  const deathcap = viewModel({ lang: 'sk', view: 'mushroom', key: 'Amanita phalloides', search: '' });
  assert.match(deathcap.html, /Celobiele plodnice sú farebná forma/);
  assert.doesNotMatch(deathcap.html, /All-white fruit bodies/);

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

function lookalikesParagraph(html, heading) {
  const marker = `<div class="k">${heading}</div><p>`;
  const start = html.indexOf(marker);
  assert.ok(start >= 0, heading);
  const from = start + marker.length;
  return html.slice(from, html.indexOf('</p>', from));
}

test('lookalikes link a species that is in the book', () => {
  const reticulatus = viewModel({ lang: 'en', view: 'mushroom', key: 'Boletus reticulatus', search: '' });
  const summer = lookalikesParagraph(reticulatus.html, 'Lookalikes');
  assert.match(summer, /<a class="latin" data-source="lookalike" href="\/mushroom\/Boletus%20edulis\/"><bdi dir="ltr">Boletus edulis<\/bdi><\/a>/);
  assert.match(summer, /href="\/mushroom\/Boletus%20aereus\/"/);
  assert.match(summer, /href="\/mushroom\/Tylopilus%20felleus\/"/);
  assert.match(summer, /href="\/mushroom\/Rubroboletus%20satanas\/"/);

  const edulis = viewModel({ lang: 'en', view: 'mushroom', key: 'Boletus edulis', search: '' });
  const penny = lookalikesParagraph(edulis.html, 'Lookalikes');
  assert.match(penny, /kept separate from Boletus edulis\./);
  assert.equal(penny.includes('/mushroom/Boletus%20edulis/'), false);
  assert.equal(penny.includes('Boletus betulicola</bdi>'), false);
  assert.match(penny, /href="\/mushroom\/Boletus%20reticulatus\/"/);
  assert.match(penny, /href="\/mushroom\/Tylopilus%20felleus\/"/);

  const virosa = viewModel({ lang: 'en', view: 'mushroom', key: 'Amanita virosa', search: '' });
  const destroying = lookalikesParagraph(virosa.html, 'Lookalikes');
  assert.match(
    destroying,
    /<a class="latin" data-source="lookalike" href="\/mushroom\/Amanita%20citrina\/"><bdi dir="ltr">Amanita citrina<\/bdi><\/a> var\. alba/
  );
  assert.match(destroying, /Agaricus species, including Agaricus sylvicola/);
  assert.equal(destroying.includes('Agaricus%20sylvicola'), false);
  assert.match(destroying, /href="\/mushroom\/Agaricus%20campestris\/"/);
  assert.match(destroying, /href="\/mushroom\/Amanita%20verna\/"/);
  assert.match(destroying, /href="\/mushroom\/Amanita%20phalloides\/"/);

  const nuda = viewModel({ lang: 'en', view: 'mushroom', key: 'Lepista nuda', search: '' });
  const blewitt = lookalikesParagraph(nuda.html, 'Lookalikes');
  assert.match(blewitt, /href="\/mushroom\/Collybia%20personata\/"><bdi dir="ltr">Lepista personata<\/bdi>/);
  assert.match(blewitt, /href="\/mushroom\/Collybia%20personata\/"><bdi dir="ltr">Lepista saeva<\/bdi>/);

  const calopus = viewModel({ lang: 'en', view: 'mushroom', key: 'Caloboletus calopus', search: '' });
  const bitter = lookalikesParagraph(calopus.html, 'Lookalikes');
  assert.match(bitter, /Melzer&#39;s/);
  assert.equal(bitter.includes("Melzer's"), false);

  const slovak = viewModel({ lang: 'sk', view: 'mushroom', key: 'Boletus reticulatus', search: '' });
  const skPara = lookalikesParagraph(slovak.html, COPY.sk.lookalikes);
  assert.match(skPara, /href="\/sk\/mushroom\/Boletus%20edulis\/"/);
});

test('a species page has Seen in the wild and store badges', () => {
  const page = viewModel({ lang: 'en', view: 'mushroom', key: 'Boletus edulis', search: '' });
  assert.match(page.html, /id="seen" data-latin="Boletus edulis"/);
  assert.match(page.html, /<h2>Seen in the wild<\/h2>/);
  assert.match(page.html, /Public observations only\. Country and month, not a street pin\./);
  assert.match(page.html, /<p class="muted seen-empty" hidden>No public sightings yet\.<\/p>/);
  assert.match(page.html, /<h3 class="seen-count" hidden>0 public records<\/h3>/);
  assert.match(page.html, /Record one in the app/);
  assert.equal(page.html.includes('app-icon-placeholder'), false);
  const seenHtml = page.html.slice(page.html.indexOf('id="seen"'));
  const aside = seenHtml.slice(seenHtml.indexOf('class="aside"'), seenHtml.indexOf('</aside>'));
  assert.match(aside, /data-store="google_play"/);
  assert.match(aside, /data-store="app_store"/);
  assert.equal(recordsLabel(1, 'en'), '1 public record');
  assert.equal(recordsLabel(0, 'en'), '0 public records');
  assert.equal(recordsLabel(2, 'en'), '2 public records');
  assert.equal(recordsLabel(1, 'sk'), '1 verejný záznam');
  assert.equal(recordsLabel(2, 'sk'), '2 verejné záznamy');
  assert.equal(recordsLabel(5, 'sk'), '5 verejných záznamov');
  assert.equal(recordsLabel(2, 'sl'), '2 javna zapisa');
  assert.equal(recordsLabel(0, 'fr'), '0 mention publique');
  const slovak = viewModel({ lang: 'sk', view: 'mushroom', key: 'Boletus edulis', search: '' });
  assert.match(slovak.html, /<h2>Nájdené v prírode<\/h2>/);
  assert.match(slovak.html, /<h3 class="seen-count" hidden>0 verejných záznamov<\/h3>/);
  const order = page.html.indexOf('In the field');
  const seen = page.html.indexOf('Seen in the wild');
  const taxonomy = page.html.indexOf('>Taxonomy<');
  assert.ok(order > 0 && order < seen && seen < taxonomy);
});

test('store badges sit where the flower site puts them', () => {
  const play = 'https://play.google.com/store/apps/details?id=sk.ab.shrooms';
  const apple = 'https://apps.apple.com/us/app/whats-that-mushroom/id6826707489';
  for (const language of LANGS) {
    const copy = COPY[language.code];
    const home = viewModel({ lang: language.code, view: 'home', search: '' });
    const about = viewModel({ lang: language.code, view: 'about', search: '' });
    const identify = viewModel({ lang: language.code, view: 'identify', search: '' });
    const species = viewModel({ lang: language.code, view: 'mushroom', key: 'Boletus edulis', search: '' });
    for (const page of [home, about, identify, species]) {
      assert.ok(page.html.includes(play), language.code);
      assert.ok(page.html.includes(apple), language.code);
      assert.ok(page.html.includes(`alt="${esc(copy.storePlay)}"`), `${language.code} play`);
      assert.ok(page.html.includes(`alt="${esc(copy.storeApple)}"`), `${language.code} apple`);
      assert.equal(page.html.includes('app-banner'), false, `${language.code} static shell`);
    }
    const flowerPlay = 'https://play.google.com/store/apps/details?id=sk.ab.herbs';
    const flowerApple = 'https://apps.apple.com/us/app/whats-that-flower/id1449982118';
    const flowerIdentify = `https://whatsthatflower.com${language.code === 'en' ? '' : '/' + language.code}/identify/`;
    for (const page of [home, about]) {
      const band = page.html.slice(page.html.indexOf('class="band identify-band"'));
      assert.ok(band.indexOf(esc(copy.appInApp)) < band.indexOf(esc(copy.plantInApp)), `${language.code} order`);
      assert.ok(band.indexOf(esc(copy.keyOpen)) < band.indexOf(play), `${language.code} mushroom key`);
      assert.ok(band.includes(esc(copy.plantOpen)), `${language.code} plant site`);
      assert.ok(band.indexOf(play) < band.indexOf(flowerPlay), `${language.code} stores`);
      assert.ok(band.includes(flowerApple), `${language.code} apple`);
      assert.ok(band.includes(flowerIdentify), `${language.code} flower web`);
      assert.ok(band.includes('data-sister="1"'), `${language.code} sister stores`);
    }
    assert.equal(identify.html.includes('sk.ab.herbs'), false, `${language.code} identify`);
    assert.equal(species.html.includes('sk.ab.herbs'), false, `${language.code} species`);
    const filters = identify.html.slice(
      identify.html.indexOf('class="identify-filters"'),
      identify.html.indexOf('class="identify-results"')
    );
    assert.ok(filters.includes('class="identify-stores"'), `${language.code} identify`);
    assert.ok(filters.includes(play), `${language.code} identify play`);
    assert.equal(filters.includes('identify-results'), false, language.code);
  }
});

const STIPE_FIELDS = ['stipeHeightFrom', 'stipeHeightTo', 'stipeThickFrom', 'stipeThickTo'];

test('three species store the English stipe size in centimetres', () => {
  function stipeSize(name) {
    const species = CATALOG.find((item) => item.name === name);
    return STIPE_FIELDS.map((field) => species[field]);
  }
  assert.deepEqual(stipeSize('Lactarius lignyotus'), [4, 12, 0.5, 1.5]);
  assert.deepEqual(stipeSize('Entoloma incanum'), [2, 8, 0.1, 0.4]);
  assert.deepEqual(stipeSize('Cantharellus cibarius'), [2, 8, 0.5, 1.5]);
});

test('a bad percent-encoding is the missing page, including lists', () => {
  assert.equal(parse('/mushroom/%E0%A4%A/').view, 'missing');
  assert.equal(parse('/family/%/').view, 'missing');
  assert.equal(parse('/genus/%ZZ/').view, 'missing');
  assert.equal(parse('/list/%/').view, 'missing');
  assert.equal(parse('/list/%ZZ/').view, 'missing');
  assert.equal(parse('/sk/list/%E0%A4%A/').view, 'missing');
  assert.equal(parse('/sk/list/%E0%A4%A/').lang, 'sk');
  assert.equal(parse('/list/deadly-poisonous/').view, 'list');
  assert.equal(parse('/list/deadly-poisonous/').key, 'deadly-poisonous');
  assert.equal(parse('/mushroom/Boletus%20edulis/').key, 'Boletus edulis');
  assert.equal(parse('/mushroom/Boletus_edulis/').key, 'Boletus edulis');
});
