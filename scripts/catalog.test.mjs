import assert from 'node:assert/strict';
import test from 'node:test';
import { COPY, LANGS, CATALOG as siteCatalog } from '../catalog.js';
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
