import assert from 'node:assert/strict';
import test from 'node:test';
import {
  countByCountry,
  countryName,
  formatSeenWhen,
  loadPublicSightings,
  sightingPhotoUrl,
  sightingsFromQuery,
} from '../src/sightings.mjs';

const PHOTO = 'sightings/public/1793.jpg';

test('a sighting photo url stays on the public card', () => {
  assert.equal(
    sightingPhotoUrl(PHOTO),
    'https://firebasestorage.googleapis.com/v0/b/abshrooms-a9d4c.firebasestorage.app/o/sightings%2Fpublic%2F1793.jpg?alt=media',
  );
  assert.equal(sightingPhotoUrl('sightings/uid/1793.jpg'), '');
  assert.equal(sightingPhotoUrl('photos/other.jpg'), '');
  assert.equal(sightingPhotoUrl('https://evil.example/a.jpg'), '');
  assert.equal(
    sightingPhotoUrl('https://firebasestorage.googleapis.com/v0/b/abshrooms-a9d4c.firebasestorage.app/o/x?alt=media'),
    '',
  );
});

test('public sightings are newest first and skip a row without a photo', () => {
  const rows = sightingsFromQuery([
    {},
    {
      document: {
        name: 'projects/abshrooms-a9d4c/databases/(default)/documents/sightings_public/old',
        fields: {
          status: { stringValue: 'public' },
          photo: { stringValue: PHOTO },
          millis: { integerValue: '1000' },
          country: { stringValue: 'sk' },
        },
      },
    },
    {
      document: {
        name: 'projects/abshrooms-a9d4c/databases/(default)/documents/sightings_public/new',
        fields: {
          status: { stringValue: 'public' },
          photo: { stringValue: 'sightings/public/new.jpg' },
          millis: { integerValue: '2000' },
          country: { stringValue: 'us' },
        },
      },
    },
    {
      document: {
        name: 'projects/abshrooms-a9d4c/databases/(default)/documents/sightings/review',
        fields: {
          status: { stringValue: 'review' },
          photo: { stringValue: 'sightings/uid/review.jpg' },
          millis: { integerValue: '3000' },
        },
      },
    },
    {
      document: {
        name: 'projects/abshrooms-a9d4c/databases/(default)/documents/sightings/nophoto',
        fields: {
          status: { stringValue: 'public' },
          photo: { stringValue: '' },
          millis: { integerValue: '4000' },
        },
      },
    },
  ]);
  assert.deepEqual(rows.map((row) => row.id), ['new', 'old']);
  assert.equal(rows[1].country, 'sk');
  assert.equal(rows[0].when, 2000);
  assert.equal(countryName('sk', 'en'), 'Slovakia');
  assert.equal(formatSeenWhen(Date.UTC(2026, 9, 28), 'en-US'), 'Oct 2026');
  assert.deepEqual(countByCountry(rows, 'en'), [
    { name: 'Slovakia', count: 1 },
    { name: 'United States', count: 1 },
  ]);
});

test('a query error is not an empty list', () => {
  assert.throws(() => sightingsFromQuery([{ error: { status: 'FAILED_PRECONDITION' } }]));
  assert.deepEqual(sightingsFromQuery([]), []);
});

test('the sightings request asks only for one latin name on the public cards', async () => {
  let body = null;
  const rows = await loadPublicSightings('Boletus edulis', async (url, options) => {
    body = JSON.parse(options.body);
    assert.equal(url, 'https://firestore.googleapis.com/v1/projects/abshrooms-a9d4c/databases/(default)/documents:runQuery');
    assert.equal(options.method, 'POST');
    return {
      ok: true,
      async json() {
        return [];
      },
    };
  });
  assert.deepEqual(rows, []);
  assert.equal(body.structuredQuery.from[0].collectionId, 'sightings_public');
  const filter = body.structuredQuery.where.fieldFilter;
  assert.equal(filter.field.fieldPath, 'latin');
  assert.equal(filter.value.stringValue, 'Boletus edulis');
  assert.equal(JSON.stringify(body).includes('latitude'), false);
  assert.equal(JSON.stringify(body).includes('uid'), false);
  const refuse = async () => {
    throw new Error('no fetch');
  };
  assert.deepEqual(await loadPublicSightings('  ', refuse), []);
  assert.deepEqual(await loadPublicSightings('', refuse), []);
});
