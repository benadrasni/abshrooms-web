import assert from 'node:assert/strict';
import test from 'node:test';
import { CATALOG, findSpecies, listSpecies, parse, viewModel, visibleListIds } from '../catalog.js';
import { LISTS } from '../lists.js';

test('the home page shows the lists for that language', () => {
  assert.deepEqual(visibleListIds('en'), ['us-state-mushrooms', 'deadly-poisonous']);
  assert.deepEqual(visibleListIds('sk'), ['deadly-poisonous']);

  const home = viewModel({ lang: 'en', view: 'home', search: '' });
  const recent = home.html.indexOf('Recently added');
  const lists = home.html.indexOf('Lists of mushrooms');
  const browse = home.html.indexOf('>Browse<');
  assert.ok(recent >= 0 && lists > recent && browse > lists);
  assert.match(home.html, /US state mushrooms/);
  assert.match(home.html, /Deadly poisonous/);
  assert.match(home.html, /class="list-line" style="--list-n: 2"/);
  assert.match(home.html, /href="\/list\/us-state-mushrooms\/"/);
  assert.match(home.html, /href="\/list\/deadly-poisonous\/"/);
  assert.doesNotMatch(home.html, /Mushroom of the year/);

  const slovak = viewModel({ lang: 'sk', view: 'home', search: '' });
  assert.match(slovak.html, /Zoznamy húb/);
  assert.match(slovak.html, /Smrteľne jedovaté/);
  assert.match(slovak.html, /class="list-line" style="--list-n: 1"/);
  assert.match(slovak.html, /href="\/sk\/list\/deadly-poisonous\/"/);
  assert.doesNotMatch(slovak.html, /Huby amerických štátov/);
  assert.doesNotMatch(slovak.html, /us-state-mushrooms/);
});

test('a list page shows catalog species and skips the rest', () => {
  const route = parse('/list/deadly-poisonous/');
  assert.equal(route.view, 'list');
  assert.equal(route.key, 'deadly-poisonous');
  const page = viewModel({ ...route, search: '' });
  assert.match(page.title, /^Deadly poisonous — /);
  assert.match(page.html, /class="on" href="\/"/);
  assert.match(page.html, /Amanita phalloides/);
  assert.match(page.html, /Amanita exitialis/);
  assert.match(page.html, /Amanita fuliginea/);
  assert.match(page.html, /Amanita rimosa/);
  assert.match(page.html, /Pleurocybella porrigens/);
  assert.doesNotMatch(page.html, /class="year"/);
  const names = listSpecies('deadly-poisonous').map((row) => row.name);
  assert.deepEqual(names.slice(0, 3), ['Amanita phalloides', 'Amanita virosa', 'Amanita bisporigera']);
  assert.equal(names.at(-1), 'Pleurocybella porrigens');
  assert.match(page.html, /Cortinarius rubellus/);
  assert.match(page.html, /Inosperma erubescens/);
  assert.match(page.html, /Galerina marginata/);
  assert.doesNotMatch(page.html, /Tricholoma equestre/);
});

test('the deadly list matches species marked deadly', () => {
  const listed = listSpecies('deadly-poisonous').map((row) => row.name).sort();
  const marked = CATALOG.filter((species) => species.edibility === 'deadly').map((species) => species.name).sort();
  assert.deepEqual(listed, marked);
});

test('region lists sort by place and year lists put the newest year first', () => {
  const states = viewModel({ lang: 'en', view: 'list', key: 'us-state-mushrooms', search: '' });
  assert.match(states.html, /en\.wikipedia\.org/);
  assert.match(states.html, /class="year state">Illinois/);
  assert.match(states.html, /class="year state">Minnesota/);
  assert.match(states.html, /class="year state">Utah/);
  const order = listSpecies('us-state-mushrooms').map((row) => row.region);
  assert.deepEqual(order, ['Illinois', 'Minnesota', 'Utah']);
  const html = states.html;
  assert.ok(html.indexOf('Illinois') < html.indexOf('Minnesota'));
  assert.ok(html.indexOf('Minnesota') < html.indexOf('Utah'));

  const years = listSpecies('mushroom-of-the-year-de');
  assert.equal(years[0].name, 'Hericium erinaceus');
  assert.equal(years[0].year, 2026);
  assert.equal(years.at(-1).name, 'Leccinum aurantiacum');
  assert.equal(years.at(-1).year, 1994);
  assert.ok(years.length < 34);
});

test('2016 on the German and Hungarian year lists is Collybia personata', () => {
  const germany = listSpecies('mushroom-of-the-year-de');
  const hungary = listSpecies('mushroom-of-the-year-hu');
  assert.equal(germany.find((row) => row.year === 2016).name, 'Collybia personata');
  assert.equal(hungary.find((row) => row.year === 2016).name, 'Collybia personata');
});

test('German 2001 and Latvian 2017 and 2010 use the catalog names', () => {
  const germany = listSpecies('mushroom-of-the-year-de');
  const latvia = listSpecies('mushroom-of-the-year-lv');
  assert.equal(germany.find((row) => row.year === 2001).name, 'Choiromyces meandriformis');
  assert.equal(latvia.find((row) => row.year === 2017).name, 'Choiromyces meandriformis');
  assert.equal(latvia.find((row) => row.year === 2010).name, 'Hericium coralloides');

  const germanPage = viewModel({ lang: 'de', view: 'list', key: 'mushroom-of-the-year-de', search: '' });
  assert.match(germanPage.html, /href="\/de\/mushroom\/Choiromyces%20meandriformis\/"/);
  const latvianPage = viewModel({ lang: 'lv', view: 'list', key: 'mushroom-of-the-year-lv', search: '' });
  assert.match(latvianPage.html, /href="\/lv\/mushroom\/Choiromyces%20meandriformis\/"/);
  assert.match(latvianPage.html, /href="\/lv\/mushroom\/Hericium%20coralloides\/"/);
});

// A year-list row whose name is not a catalog name is omitted from the page.
// These species are not in the catalog yet. Any other missing name fails
// this test instead of disappearing at render.
const YEAR_LIST_NAMES_NOT_IN_CATALOG = [
  'mushroom-of-the-year-de 2000 Amanita regalis',
  'mushroom-of-the-year-de 2002 Cortinarius orellanus',
  'mushroom-of-the-year-de 2005 Astraeus hygrometricus',
  'mushroom-of-the-year-de 2009 Terana caerulea',
  'mushroom-of-the-year-de 2010 Cortinarius praestans',
  'mushroom-of-the-year-de 2011 Clathrus ruber',
  'mushroom-of-the-year-de 2012 Cantharellus cinereus',
  'mushroom-of-the-year-de 2013 Entoloma incanum',
  'mushroom-of-the-year-de 2014 Crucibulum laeve',
  'mushroom-of-the-year-de 2023 Mitrula paludosa',
  'mushroom-of-the-year-de 2025 Clavaria zollingeri',
  'mushroom-of-the-year-de 2027 Lactarius lignyotus',
  'mushroom-of-the-year-at 2016 Hapalopilus croceus',
  'mushroom-of-the-year-at 2017 Bovista paludosa',
  'mushroom-of-the-year-at 2018 Pseudoplectania melaena',
  'mushroom-of-the-year-at 2019 Picipes rhizophilus',
  'mushroom-of-the-year-at 2020 Climacodon septentrionalis',
  'mushroom-of-the-year-at 2021 Tricholoma focale',
  'mushroom-of-the-year-at 2022 Hydnellum mirabile',
  'mushroom-of-the-year-at 2023 Maublancomyces inflatus',
  'mushroom-of-the-year-at 2024 Phaeoclavulina roellinii',
  'mushroom-of-the-year-at 2025 Calonarius atrovirens',
  'mushroom-of-the-year-at 2026 Phaeoclavulina macrospora',
  'mushroom-of-the-year-nl 2018 Leotia lubrica',
  'mushroom-of-the-year-nl 2019 Clavaria argillacea',
  'mushroom-of-the-year-nl 2020 Clavaria argillacea',
  'mushroom-of-the-year-nl 2021 Phyllotopsis nidulans',
  'mushroom-of-the-year-lv 2024 Chlorociboria aeruginascens',
  'mushroom-of-the-year-lv 2023 Grifola frondosa',
  'mushroom-of-the-year-lv 2022 Hydnellum ferrugineum',
  'mushroom-of-the-year-lv 2020 Peziza ammophila',
  'mushroom-of-the-year-lv 2019 Noblesia crocea',
  'mushroom-of-the-year-lv 2016 Amanita strobiliformis',
  'mushroom-of-the-year-lv 2015 Phlebiopsis gigantea',
  'mushroom-of-the-year-lv 2014 Aureoboletus projectellus',
  'mushroom-of-the-year-lv 2012 Rhodotus palmatus',
  'mushroom-of-the-year-lv 2009 Heterobasidion annosum',
  'mushroom-of-the-year-lv 2008 Agaricus bitorquis',
  'mushroom-of-the-year-lv 2007 Aspropaxillus giganteus',
  'mushroom-of-the-year-lv 2006 Sarcosoma globosum',
  'mushroom-of-the-year-lv 2005 Phaeolepiota aurea',
  'mushroom-of-the-year-lv 2003 Helvella crispa',
  'mushroom-of-the-year-hu 2008 Russula virescens',
  'mushroom-of-the-year-hu 2011 Amanita caesarea',
  'mushroom-of-the-year-hu 2013 Agaricus bohusii',
  'mushroom-of-the-year-hu 2017 Omphalotus olearius',
  'mushroom-of-the-year-hu 2020 Microstoma protractum',
  'mushroom-of-the-year-hu 2021 Volvariella bombycina',
  'mushroom-of-the-year-hu 2024 Amanita excelsa',
  'mushroom-of-the-year-hu 2026 Agaricus bohusii',
  'mushroom-of-the-year-fi 2025 Albatrellus ovinus',
  'mushroom-of-the-year-fi 2026 Lactarius camphoratus',
];

test('every year-list name is a catalog name or a species the catalog does not have yet', () => {
  const missing = [];
  for (const list of LISTS) {
    if (list.type !== 'year') continue;
    for (const entry of list.entries) {
      if (!findSpecies(entry.name)) missing.push(`${list.id} ${entry.year} ${entry.name}`);
    }
  }
  assert.deepEqual(missing, YEAR_LIST_NAMES_NOT_IN_CATALOG);
});

test('a list for another language is not a page', () => {
  const hidden = viewModel({ lang: 'en', view: 'list', key: 'mushroom-of-the-year-de', search: '' });
  assert.match(hidden.html, /That page is not in the catalog/);
  const slovak = parse('/sk/list/us-state-mushrooms/');
  assert.equal(slovak.lang, 'sk');
  assert.equal(slovak.view, 'list');
  const page = viewModel({ ...slovak, search: '' });
  assert.match(page.html, /Táto stránka v katalógu nie je/);
});

test('mushroom page falls back to English when text for language is missing', () => {
  const de = viewModel({ lang: 'de', view: 'mushroom', key: 'Boletus edulis', search: '' });
  assert.ok(de.description.length > 0);
  assert.match(de.description, /^A large ectomycorrhizal mushroom/);
  assert.match(de.html, /A large ectomycorrhizal mushroom/);

  const skAuricularia = viewModel({ lang: 'sk', view: 'mushroom', key: 'Auricularia auricula-judae', search: '' });
  assert.ok(skAuricularia.description.length > 0);
  assert.match(skAuricularia.description, /^Drevokazná rôsolovitá huba/);
  assert.match(skAuricularia.html, /Drevokazná rôsolovitá huba/);
});
