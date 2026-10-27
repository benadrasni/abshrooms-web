// One allowlist for the Identify page, the filter event, and page_path.
// A new cap colour is added here and nowhere else.

export const KEY_UNDER = ['gills', 'tubes', 'ridges', 'teeth', 'pits', 'smooth', 'gleba'];
export const KEY_WHERE = ['wood', 'ground', 'grass'];
export const KEY_COLOR = ['white', 'yellow', 'red', 'brown', 'green', 'purple', 'dark'];
export const KEY_SEASON = ['spring', 'summer', 'autumn', 'winter'];

const AXES = [
  ['under', KEY_UNDER],
  ['where', KEY_WHERE],
  ['color', KEY_COLOR],
  ['season', KEY_SEASON],
];

// '' or '?under=…&where=…&color=…&season=…', in that order.
export function identifySearch(search) {
  const incoming = new URLSearchParams(String(search || '').replace(/^\?/, ''));
  const kept = new URLSearchParams();
  AXES.forEach(([key, allowed]) => {
    const value = incoming.get(key);
    if (value && allowed.includes(value)) kept.set(key, value);
  });
  const query = kept.toString();
  return query ? '?' + query : '';
}

// Identify keeps the sanitized filters. Every other path drops the query.
export function analyticsLocation(pathname, search) {
  const path = pathname || '/';
  if (!/\/identify\/?$/.test(path)) return path;
  return path + identifySearch(search);
}
