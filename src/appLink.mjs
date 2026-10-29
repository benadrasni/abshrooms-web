import { LANGS } from '../copy.js';

export const IOS_APP_ID = '6826707489';

const LANG_PREFIX = new Set(LANGS.map((item) => item.code).filter((code) => code !== 'en'));

// Smart App Banner content. The app-argument is a species path:
// /mushroom/<slug> or /<lang>/mushroom/<slug>. Every other page just opens the app.
export function appleSmartBanner(canonicalUrl) {
  const raw = String(canonicalUrl || '');
  let url;
  try {
    url = new URL(raw);
  } catch {
    return `app-id=${IOS_APP_ID}`;
  }
  if (url.protocol !== 'https:' || url.username || url.password || url.search || url.hash) {
    return `app-id=${IOS_APP_ID}`;
  }
  const match = url.pathname.match(/^\/(?:([^/]+)\/)?mushroom\/([^/]+)\/?$/);
  if (!match) return `app-id=${IOS_APP_ID}`;
  if (match[1] && !LANG_PREFIX.has(match[1])) return `app-id=${IOS_APP_ID}`;
  return `app-id=${IOS_APP_ID}, app-argument=${raw}`;
}
