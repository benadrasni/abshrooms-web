// Public Sightings for one species page. The card is sightings_public.
// Its photo is sightings/public/{id}.jpg on the sighting bucket.

const PROJECT = 'abshrooms-a9d4c';
const BUCKET = 'abshrooms-a9d4c.firebasestorage.app';
const QUERY_URL = `https://firestore.googleapis.com/v1/projects/${PROJECT}/databases/(default)/documents:runQuery`;
const regionNames = {};

function fieldValue(field) {
  if (!field || typeof field !== 'object') return null;
  if (typeof field.stringValue === 'string') return field.stringValue;
  if (field.integerValue != null && field.integerValue !== '') {
    const n = Number(field.integerValue);
    return Number.isFinite(n) ? n : null;
  }
  return null;
}

// Object path sightings/public/{id}.jpg. A path with an account in it is empty.
export function sightingPhotoUrl(path) {
  const object = String(path || '').trim();
  if (!object || object.includes('..') || object.includes('\\')) return '';
  if (!/^sightings\/public\/[^/]+\.jpg$/.test(object)) return '';
  return `https://firebasestorage.googleapis.com/v0/b/${BUCKET}/o/${encodeURIComponent(object)}?alt=media`;
}

export function countryName(code, locale) {
  if (!code) return '';
  const cc = String(code).toLowerCase();
  if (!/^[a-z]{2}$/.test(cc)) return '';
  const tag = locale || 'en';
  try {
    if (!regionNames[tag] && typeof Intl !== 'undefined' && Intl.DisplayNames) {
      regionNames[tag] = new Intl.DisplayNames([tag], { type: 'region' });
    }
    const name = regionNames[tag] && regionNames[tag].of(cc.toUpperCase());
    if (name && name.toUpperCase() !== cc.toUpperCase()) return name;
  } catch {
    // The code itself is the fallback.
  }
  return cc.toUpperCase();
}

export function formatSeenWhen(millis, locale) {
  if (!millis) return '';
  const date = new Date(millis);
  if (Number.isNaN(date.getTime())) return '';
  try {
    return date.toLocaleString(locale || 'en', { month: 'short', year: 'numeric' });
  } catch {
    return '';
  }
}

// Newest first. A row without a public photo is left out.
export function sightingsFromQuery(payload) {
  if (!Array.isArray(payload)) throw new Error('sightings');
  if (payload.some((item) => item && item.error)) throw new Error('sightings query');
  const rows = [];
  payload.forEach((item) => {
    const doc = item && item.document;
    const fields = doc && doc.fields;
    if (!fields) return;
    const status = fieldValue(fields.status);
    if (status && status !== 'public') return;
    const url = sightingPhotoUrl(fieldValue(fields.photo));
    if (!url) return;
    const millis = fieldValue(fields.millis);
    const when = typeof millis === 'number' ? millis : 0;
    const name = String(doc.name || '');
    const id = name.split('/').pop() || '';
    const rawCountry = fieldValue(fields.country);
    const country = typeof rawCountry === 'string' && /^[a-z]{2}$/.test(rawCountry) ? rawCountry : '';
    rows.push({ id, url, when, country });
  });
  rows.sort((a, b) => b.when - a.when || (a.id < b.id ? 1 : a.id > b.id ? -1 : 0));
  return rows;
}

export function countByCountry(rows, locale) {
  const map = new Map();
  rows.forEach((row) => {
    const name = countryName(row.country, locale);
    if (!name) return;
    map.set(name, (map.get(name) || 0) + 1);
  });
  return [...map.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name, locale || 'en'));
}

export async function loadPublicSightings(latin, fetchImpl) {
  const name = String(latin || '').trim();
  if (!name) return [];
  const fetchFn = fetchImpl || fetch;
  const res = await fetchFn(QUERY_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      structuredQuery: {
        from: [{ collectionId: 'sightings_public' }],
        where: {
          fieldFilter: {
            field: { fieldPath: 'latin' },
            op: 'EQUAL',
            value: { stringValue: name },
          },
        },
        limit: 200,
      },
    }),
  });
  if (!res.ok) throw new Error(`sightings ${res.status}`);
  return sightingsFromQuery(await res.json());
}
