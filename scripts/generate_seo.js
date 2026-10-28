#!/usr/bin/env node
/**
 * After Vite build: sitemap.xml and an HTML shell for each catalog URL.
 * Indexed languages are LANGS in catalog.js. English is unprefixed.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  CATALOG,
  COPY,
  LANGS,
  findSpecies,
  taxonNames,
  viewModel,
  visibleListIds,
} from '../catalog.js';
import { appleSmartBanner } from '../src/appLink.mjs';

const SITE = 'https://whatsthatmushroom.app';
const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const BUILD = path.join(ROOT, 'build');
const INDEXED = LANGS.map((item) => item.code);

function languageOf(code) {
  return LANGS.find((item) => item.code === code) || LANGS.find((item) => item.code === 'en');
}

// Each species payload differs, so a static Content-Security-Policy hash cannot
// allow every shell, and Firebase Hosting cannot nonce a response. The inline
// <script type="application/ld+json"> is a script element. firebase.json allows
// it with script-src-elem 'unsafe-inline' and keeps event handlers off with
// script-src-attr 'none'. A nonce or hash source in script-src-elem would
// ignore 'unsafe-inline' and block these shells.
export function jsonLdScript(value) {
  const json = JSON.stringify(value)
    .replace(/</g, '\\u003c')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
  return '<script type="application/ld+json">' + json + '</script>';
}

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function safeSegment(name) {
  const value = String(name || '');
  if (!value || value.includes('..') || value.includes('/') || value.includes('\\')) {
    throw new Error('unsafe path segment: ' + value);
  }
  return value;
}

function pageUrl(lang, parts) {
  const segs = lang && lang !== 'en' ? [lang].concat(parts) : parts.slice();
  if (!segs.length) return SITE + '/';
  return SITE + '/' + segs.map((part) => encodeURIComponent(part)).join('/') + '/';
}

function langsFor(parts) {
  if (parts[0] === 'list' && parts[1]) {
    return INDEXED.filter((lang) => visibleListIds(lang).indexOf(parts[1]) >= 0);
  }
  return INDEXED;
}

function hreflangTags(parts, langs) {
  const codes = langs && langs.length ? langs : INDEXED;
  const fallback = codes.indexOf('en') >= 0 ? 'en' : codes[0];
  return codes
    .map(
      (lang) =>
        '<link rel="alternate" hreflang="' +
        lang +
        '" href="' +
        escapeHtml(pageUrl(lang, parts)) +
        '">'
    )
    .concat([
      '<link rel="alternate" hreflang="x-default" href="' +
        escapeHtml(pageUrl(fallback, parts)) +
        '">',
    ]);
}

function stripSeo(html) {
  return String(html || '')
    .replace(/<link rel="canonical"[^>]*>/g, '')
    .replace(/<link rel="alternate" hreflang="[^"]+"[^>]*>/g, '')
    .replace(/<meta property="og:[^"]+"[^>]*>/g, '')
    .replace(/<meta name="twitter:[^"]+"[^>]*>/g, '')
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, '')
    .replace(/<div id="app"><\/div><noscript>[\s\S]*?<\/noscript>/g, '<div id="app"></div>');
}

function inject(template, opts) {
  const title = escapeHtml(opts.title);
  const description = escapeHtml(String(opts.description || '').slice(0, 240));
  const url = escapeHtml(opts.url);
  const lang = opts.lang || 'en';
  const language = languageOf(lang);
  let html = template.replace(
    /<html lang="[^"]*"(?: dir="[^"]*")?>/,
    '<html lang="' + lang + '" dir="' + language.dir + '">'
  );
  const parts = opts.parts || [];
  if (parts[0] === 'mushroom' && parts.length > 1) {
    html = html.replace(
      '<meta name="apple-itunes-app" content="app-id=6826707489">',
      '<meta name="apple-itunes-app" content="' + escapeHtml(appleSmartBanner(opts.url)) + '">'
    );
  }
  html = html.replace(/<title>[^<]*<\/title>/, '<title>' + title + '</title>');
  html = html.replace(
    /<meta name="description" content="[^"]*">/,
    '<meta name="description" content="' + description + '">'
  );
  const extra = []
    .concat(
      opts.skipCanonical
        ? []
        : ['<link rel="canonical" href="' + url + '">'].concat(hreflangTags(opts.parts || [], opts.langs))
    )
    .concat([
      opts.robots ? '<meta name="robots" content="' + escapeHtml(opts.robots) + '">' : '',
      '<meta property="og:type" content="website">',
      '<meta property="og:site_name" content="What\'s that mushroom?">',
      '<meta property="og:locale" content="' + language.locale.replace(/-/g, '_') + '">',
      '<meta property="og:title" content="' + title + '">',
      '<meta property="og:description" content="' + description + '">',
      opts.skipCanonical ? '' : '<meta property="og:url" content="' + url + '">',
      opts.image ? '<meta property="og:image" content="' + escapeHtml(opts.image) + '">' : '',
      '<meta name="twitter:card" content="' + (opts.image ? 'summary_large_image' : 'summary') + '">',
      opts.jsonLd ? jsonLdScript(opts.jsonLd) : '',
    ])
    .filter(Boolean)
    .join('');
  html = html.replace('</head>', extra + '</head>');
  if (opts.noscript) {
    html = html.replace(
      '<div id="app"></div>',
      '<div id="app"></div><noscript>' + opts.noscript + '</noscript>'
    );
  }
  return html;
}

function writePage(relParts, html) {
  const dir = path.join(BUILD, ...relParts.map(safeSegment));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
}

function sitemapXml(entries) {
  const body = entries
    .map((entry) => {
      const loc = pageUrl(entry.lang, entry.parts);
      const codes = entry.langs && entry.langs.length ? entry.langs : INDEXED;
      const fallback = codes.indexOf('en') >= 0 ? 'en' : codes[0];
      const links = codes
        .map(
          (lang) =>
            '    <xhtml:link rel="alternate" hreflang="' +
            lang +
            '" href="' +
            pageUrl(lang, entry.parts).replace(/&/g, '&amp;') +
            '"/>'
        )
        .concat([
          '    <xhtml:link rel="alternate" hreflang="x-default" href="' +
            pageUrl(fallback, entry.parts).replace(/&/g, '&amp;') +
            '"/>',
        ]);
      return (
        '  <url>\n    <loc>' +
        loc.replace(/&/g, '&amp;') +
        '</loc>\n' +
        links.join('\n') +
        '\n  </url>'
      );
    })
    .join('\n');
  return (
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' +
    body +
    '\n</urlset>\n'
  );
}

function modelFor(lang, view, key) {
  return viewModel({ lang, view, key, search: '' });
}

export function renderNotFound(template) {
  const copy = COPY.en;
  const model = viewModel({ lang: 'en', view: 'missing', search: '' });
  return inject(template, {
    lang: 'en',
    parts: [],
    url: SITE + '/',
    title: model.title,
    description: copy.missing,
    noscript: '<p>' + escapeHtml(copy.missing) + '</p>',
    robots: 'noindex',
    skipCanonical: true,
  });
}

function main() {
  const templatePath = path.join(BUILD, 'index.html');
  if (!fs.existsSync(templatePath)) {
    throw new Error('build/index.html missing; run vite build first');
  }
  const template = stripSeo(fs.readFileSync(templatePath, 'utf8'));
  const edulis = findSpecies('Boletus edulis');
  const defaultImage = edulis ? edulis.plate : '';
  const families = taxonNames('family');
  const genera = taxonNames('genus');
  const entries = [];

  function emit(lang, parts, route) {
    const model = modelFor(lang, route.view, route.key);
    const langs = langsFor(parts);
    const image = model.image || (route.view === 'mushroom' ? '' : defaultImage);
    const description = String(model.description || '').slice(0, 240);
    const url = pageUrl(lang, parts);
    const noscript =
      '<h1>' +
      escapeHtml(model.title) +
      '</h1><p>' +
      escapeHtml(description) +
      '</p>';
    const html = inject(template, {
      lang,
      parts,
      langs,
      url,
      title: model.title,
      description,
      image: image || undefined,
      noscript,
      jsonLd: route.jsonLd
        ? {
            '@context': 'https://schema.org',
            '@type': 'Taxon',
            name: route.jsonLd.name,
            alternateName: route.jsonLd.alternateName || undefined,
            description,
            taxonRank: route.jsonLd.rank,
            inLanguage: lang,
            url,
            image: image || undefined,
            parentTaxon: route.jsonLd.parent
              ? { '@type': 'Taxon', name: route.jsonLd.parent, taxonRank: 'Family' }
              : undefined,
          }
        : undefined,
    });
    if (!parts.length) {
      if (lang === 'en') fs.writeFileSync(templatePath, html);
      else writePage([lang], html);
    } else {
      writePage(lang === 'en' ? parts : [lang].concat(parts), html);
    }
    entries.push({ lang, parts, langs });
  }

  INDEXED.forEach((lang) => {
    emit(lang, [], { view: 'home' });
    [
      ['families', 'families'],
      ['genera', 'genera'],
      ['identify', 'identify'],
      ['about', 'about'],
      ['privacy', 'privacy'],
    ].forEach(([slug, view]) => {
      emit(lang, [slug], { view });
    });

    CATALOG.forEach((species) => {
      const label = species.label && species.label[lang];
      emit(lang, ['mushroom', species.name], {
        view: 'mushroom',
        key: species.name,
        jsonLd: {
          name: species.name,
          alternateName: label || undefined,
          rank: 'Species',
          parent: species.family,
        },
      });
    });

    families.forEach((family) => {
      emit(lang, ['family', family], {
        view: 'family',
        key: family,
        jsonLd: { name: family, rank: 'Family' },
      });
    });

    genera.forEach((genus) => {
      emit(lang, ['genus', genus], {
        view: 'genus',
        key: genus,
        jsonLd: { name: genus, rank: 'Genus' },
      });
    });

    visibleListIds(lang).forEach((id) => {
      emit(lang, ['list', id], { view: 'list', key: id });
    });
  });

  fs.writeFileSync(path.join(BUILD, '404.html'), renderNotFound(template));
  fs.writeFileSync(path.join(BUILD, 'sitemap.xml'), sitemapXml(entries));
  console.log(
    'seo shells',
    entries.length,
    'species',
    CATALOG.length,
    'families',
    families.length,
    'genera',
    genera.length,
    'langs',
    INDEXED.join(','),
    '404.html'
  );
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main();
}
