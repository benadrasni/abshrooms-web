import { LANGS } from '../copy.js';

export const IOS_APP_ID = '6826707489';

const SITE = 'https://whatsthatmushroom.app';
const LANG_PREFIX = new Set(LANGS.map((item) => item.code).filter((code) => code !== 'en'));

// A species URL on this site: /mushroom/<slug>/ or /<lang>/mushroom/<slug>/.
// Returns that URL, or null. The banner is formatted from the URL that passed.
function speciesUrl(canonicalUrl) {
  const raw = String(canonicalUrl || '');
  if (raw.includes('?') || raw.includes('#')) return null;
  let url;
  try {
    url = new URL(raw);
  } catch {
    return null;
  }
  if (url.origin !== SITE || url.username || url.password) return null;
  const match = url.pathname.match(/^\/(?:([^/]+)\/)?mushroom\/([^/]+)\/$/);
  if (!match || (match[1] && !LANG_PREFIX.has(match[1]))) return null;
  return url;
}

export function appleSmartBanner(canonicalUrl) {
  const url = speciesUrl(canonicalUrl);
  const id = `app-id=${IOS_APP_ID}`;
  return url ? `${id}, app-argument=${url.origin}${url.pathname}` : id;
}
