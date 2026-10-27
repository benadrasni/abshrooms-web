import { LISTS } from "./lists.js";
import { CATALOG, STORAGE } from "./species.js";
import { COPY, LANGS, MONTHS } from "./copy.js";
import { TAXA } from "./taxa.js";
import {
  allowAnalytics,
  analyticsState,
  pageview,
  refuseAnalytics,
  subscribeAnalytics,
  trackFilterResult,
  trackMushroom,
  trackSearch,
  trackSister
} from "./src/analytics.js";

var PATH_LANGS = LANGS.map(function (item) { return item.code; }).filter(function (code) {
  return code !== "en";
});

function t(lang) {
  return COPY[lang] || COPY.en;
}

function languageOf(lang) {
  var i;
  for (i = 0; i < LANGS.length; i++) {
    if (LANGS[i].code === lang) return LANGS[i];
  }
  for (i = 0; i < LANGS.length; i++) {
    if (LANGS[i].code === "en") return LANGS[i];
  }
  return LANGS[0];
}

function esc(value) {
  return String(value == null ? "" : value).replace(/[&<>"']/g, function (ch) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
  });
}

function fold(value) {
  return String(value || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();
}

function displayName(label, fallback, lang) {
  var raw = label ? String(label).trim() : "";
  if (raw) {
    var language = languageOf(lang);
    if (language.lower) return raw.charAt(0).toLocaleLowerCase(language.locale) + raw.slice(1);
    return raw;
  }
  return String(fallback || "").trim();
}

function countLabel(n, lang) {
  var copy = t(lang);
  var category = languageOf(lang).plural(n);
  return copy[category].replace("{n}", String(n));
}

function href(path, lang) {
  var clean = path || "/";
  if (clean.charAt(0) !== "/") clean = "/" + clean;
  if (clean.length > 1 && clean.charAt(clean.length - 1) === "/") clean = clean.slice(0, -1);
  if (lang && lang !== "en") clean = clean === "/" ? "/" + lang : "/" + lang + clean;
  if (clean === "/") return "/";
  return clean + "/";
}

var FLOWER_ORIGIN = "https://whatsthatflower.com";
var APP_PRIVACY = "https://storage.googleapis.com/abshrooms-resources/misc/PrivacyPolicyofWhatsthatmushroom.htm";

function flowerUrl(lang) {
  var code = String(lang || "").toLowerCase();
  var i;
  for (i = 0; i < LANGS.length; i++) {
    if (LANGS[i].code !== code) continue;
    if (code === "en") return FLOWER_ORIGIN + "/";
    return FLOWER_ORIGIN + "/" + code + "/";
  }
  return FLOWER_ORIGIN + "/";
}

function stripLang(path, lang) {
  if (!lang || lang === "en") return path || "/";
  var prefix = "/" + lang;
  if (path === prefix) return "/";
  if (path.indexOf(prefix + "/") === 0) return path.slice(prefix.length);
  return path || "/";
}

function taxonLabel(name, lang) {
  var row = TAXA[name];
  if (!row || !row[lang]) return "";
  return row[lang];
}

function findSpecies(name) {
  for (var i = 0; i < CATALOG.length; i++) {
    if (CATALOG[i].name === name) return CATALOG[i];
  }
  return null;
}

function taxonTitle(name, lang) {
  var label = taxonLabel(name, lang);
  return label ? displayName(label, "", lang) : name;
}

function taxonNames(kind, lang) {
  var seen = {};
  var names = [];
  var code = lang || "en";
  var locale = languageOf(code).locale;
  CATALOG.forEach(function (species) {
    var name = kind === "family" ? species.family : species.genus;
    if (seen[name]) return;
    seen[name] = true;
    names.push(name);
  });
  names.sort(function (a, b) {
    return taxonTitle(a, code).localeCompare(taxonTitle(b, code), locale);
  });
  return names;
}

function taxonCount(kind, name) {
  var n = 0;
  CATALOG.forEach(function (species) {
    if ((kind === "family" ? species.family : species.genus) === name) n += 1;
  });
  return n;
}

function speciesIn(kind, key) {
  return CATALOG.filter(function (species) {
    return (kind === "family" ? species.family : species.genus) === key;
  }).sort(function (a, b) { return a.name < b.name ? -1 : a.name > b.name ? 1 : 0; });
}

function season(species, lang) {
  var months = MONTHS[lang] || MONTHS.en;
  return months[species.fruitingFrom - 1] + "–" + months[species.fruitingTo - 1];
}

function capMeasure(species, copy) {
  if (species.capFrom != null && species.capTo != null) return species.capFrom + "–" + species.capTo + " cm";
  if (species.capTo != null) return copy.capUpTo.replace("{n}", String(species.capTo));
  return "";
}

function addedLabel(added, lang) {
  var copy = t(lang);
  var now = new Date();
  function key(date) {
    var month = String(date.getMonth() + 1);
    var day = String(date.getDate());
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return date.getFullYear() + "-" + month + "-" + day;
  }
  if (added === key(now)) return copy.today;
  var yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
  if (added === key(yesterday)) return copy.yesterday;
  var parts = added.split("-");
  var date = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
  return new Intl.DateTimeFormat(languageOf(lang).locale, {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(date);
}

var KEY_AXES = ["under", "where", "color", "season"];
var KEY_UNDER = ["gills", "tubes", "ridges", "teeth", "pits", "smooth", "gleba"];
var KEY_WHERE = ["wood", "ground", "grass"];
var KEY_COLOR = ["white", "yellow", "red", "brown", "green", "purple", "dark"];
var KEY_SEASON = ["spring", "summer", "autumn", "winter"];
var SEASON_MONTHS = {
  spring: [3, 4, 5],
  summer: [6, 7, 8],
  autumn: [9, 10, 11],
  winter: [12, 1, 2]
};
var UNDER_COPY = {
  gills: ["underGills", "underGillsEx"],
  tubes: ["underTubes", "underTubesEx"],
  ridges: ["underRidges", "underRidgesEx"],
  teeth: ["underTeeth", "underTeethEx"],
  pits: ["underPits", "underPitsEx"],
  smooth: ["underSmooth", "underSmoothEx"],
  gleba: ["underGleba", "underGlebaEx"]
};
var WHERE_COPY = {
  wood: ["whereWood", "whereWoodEx"],
  ground: ["whereGround", "whereGroundEx"],
  grass: ["whereGrass", "whereGrassEx"]
};
var COLOR_COPY = {
  white: "colorWhite",
  yellow: "colorYellow",
  red: "colorRed",
  brown: "colorBrown",
  green: "colorGreen",
  purple: "colorPurple",
  dark: "colorDark"
};

function keyChoices(axis) {
  if (axis === "under") return KEY_UNDER;
  if (axis === "where") return KEY_WHERE;
  if (axis === "color") return KEY_COLOR;
  return KEY_SEASON;
}

function readSelection(search) {
  var params = new URLSearchParams(search == null ? location.search : search);
  var selection = {};
  KEY_AXES.forEach(function (axis) {
    var value = params.get(axis) || "";
    selection[axis] = keyChoices(axis).indexOf(value) >= 0 ? value : "";
  });
  return selection;
}

function selectionSearch(selection) {
  var params = new URLSearchParams();
  KEY_AXES.forEach(function (axis) {
    if (selection[axis]) params.set(axis, selection[axis]);
  });
  var query = params.toString();
  return query ? "?" + query : "";
}

function fruitingMonths(species) {
  var months = [];
  var month = species.fruitingFrom;
  var guard = 0;
  while (guard < 12) {
    months.push(month);
    if (month === species.fruitingTo) break;
    month = month === 12 ? 1 : month + 1;
    guard += 1;
  }
  return months;
}

function matchesAxis(species, axis, value) {
  if (!value) return true;
  if (axis === "under") return species.hymenium === value;
  if (axis === "season") {
    var months = fruitingMonths(species);
    var want = SEASON_MONTHS[value];
    for (var i = 0; i < want.length; i++) {
      if (months.indexOf(want[i]) >= 0) return true;
    }
    return false;
  }
  var values = axis === "where" ? species.where : species.color;
  if (!values) return false;
  return values.indexOf(value) >= 0;
}

function matchesSelection(species, selection) {
  for (var i = 0; i < KEY_AXES.length; i++) {
    if (!matchesAxis(species, KEY_AXES[i], selection[KEY_AXES[i]])) return false;
  }
  return true;
}

function matchesOther(species, selection, axis) {
  for (var i = 0; i < KEY_AXES.length; i++) {
    if (KEY_AXES[i] === axis) continue;
    if (!matchesAxis(species, KEY_AXES[i], selection[KEY_AXES[i]])) return false;
  }
  return true;
}

function optionCounts(selection, axis) {
  var counts = {};
  keyChoices(axis).forEach(function (id) { counts[id] = 0; });
  CATALOG.forEach(function (species) {
    if (!matchesOther(species, selection, axis)) return;
    if (axis === "under") {
      if (counts[species.hymenium] != null) counts[species.hymenium] += 1;
      return;
    }
    if (axis === "season") {
      keyChoices(axis).forEach(function (id) {
        if (matchesAxis(species, "season", id)) counts[id] += 1;
      });
      return;
    }
    var values = axis === "where" ? species.where : species.color;
    if (!values) return;
    values.forEach(function (id) {
      if (counts[id] != null) counts[id] += 1;
    });
  });
  return counts;
}

function keyGlyph(kind) {
  var pen = 'fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"';
  var ink = 'fill="currentColor"';
  var body = {
    gills: '<path ' + pen + ' d="M14 30c2-14 42-14 44 0"/><path ' + pen + ' d="M36 30v28"/><path ' + pen + ' d="M22 31v11M29 30v16M36 30v16M43 30v16M50 31v11"/>',
    tubes: '<path ' + pen + ' d="M14 30c2-14 42-14 44 0"/><path ' + pen + ' d="M36 44v14"/><circle ' + ink + ' cx="24" cy="38" r="1.7"/><circle ' + ink + ' cx="32" cy="38" r="1.7"/><circle ' + ink + ' cx="40" cy="38" r="1.7"/><circle ' + ink + ' cx="48" cy="38" r="1.7"/><circle ' + ink + ' cx="28" cy="45" r="1.7"/><circle ' + ink + ' cx="36" cy="45" r="1.7"/><circle ' + ink + ' cx="44" cy="45" r="1.7"/>',
    ridges: '<path ' + pen + ' d="M16 26c6 8 10 22 20 32 10-10 14-24 20-32"/><path ' + pen + ' d="M28 34c4 8 6 16 8 24M44 34c-4 8-6 16-8 24M36 28v28"/>',
    teeth: '<path ' + pen + ' d="M14 28c2-12 42-12 44 0"/><path ' + pen + ' d="M22 30v12M29 30v16M36 30v18M43 30v16M50 30v12"/>',
    pits: '<path ' + pen + ' d="M24 16h24l8 14-8 14H24l-8-14z"/><path ' + pen + ' d="M24 16l8 14-8 14M40 16l-8 14 8 14M16 30h40"/><path ' + pen + ' d="M36 44v14"/>',
    smooth: '<path ' + pen + ' d="M22 40c-6-14 4-26 14-22 6-8 18-6 20 6 8 2 10 16 2 22-2 8-12 12-20 8-10 4-18 0-16-14z"/>',
    gleba: '<circle ' + pen + ' cx="36" cy="30" r="16"/><path ' + pen + ' d="M28 44c2 10 14 10 16 0"/><circle ' + ink + ' cx="30" cy="28" r="1.4"/><circle ' + ink + ' cx="38" cy="24" r="1.4"/><circle ' + ink + ' cx="42" cy="32" r="1.4"/>',
    wood: '<path ' + pen + ' d="M20 28h36c8 0 12 4 12 12c0 8-4 12-12 12H20"/><path ' + pen + ' d="M20 28c-8 2-12 6-12 12c0 6 4 10 12 12"/><path ' + pen + ' d="M16 34c3 2 3 8 0 10"/><circle ' + pen + ' cx="16" cy="40" r="5"/>',
    ground: '<path ' + pen + ' d="M24 12 12 32h7l-9 16h24l-9-16h7z"/><path ' + pen + ' d="M24 48v12"/><path ' + pen + ' d="M50 16 42 32h5l-6 12h16l-6-12h5z"/><path ' + pen + ' d="M50 44v16"/><path ' + pen + ' d="M6 60h60"/>',
    grass: '<path ' + pen + ' d="M8 62h56"/><path ' + pen + ' d="M16 62c0-12 2-18 6-26"/><path ' + pen + ' d="M22 62c0-10-2-16-8-22"/><path ' + pen + ' d="M34 62c0-16 4-26 10-34"/><path ' + pen + ' d="M46 62c0-12-4-20-10-26"/><path ' + pen + ' d="M56 62c0-12 2-18 6-24"/><path ' + pen + ' d="M60 62c-2-10-6-14-12-18"/><circle ' + pen + ' cx="44" cy="24" r="3"/><circle ' + pen + ' cx="20" cy="36" r="2.4"/>'
  }[kind] || "";
  return '<svg class="key-glyph" viewBox="0 0 72 72" aria-hidden="true">' + body + "</svg>";
}

function keyButton(className, pressed, disabled, axis, id, inner) {
  return (
    '<button type="button" class="' + className + (pressed ? " on" : "") + '" aria-pressed="' + (pressed ? "true" : "false") + '"' +
    (disabled ? " disabled" : "") +
    ' data-key="' + axis + '" data-id="' + id + '">' +
    inner +
    "</button>"
  );
}

function identifyPage(lang, search, seasonOpen) {
  var copy = t(lang);
  var selection = readSelection(search || "");
  var locale = languageOf(lang).locale;
  var number = function (n) { return n.toLocaleString(locale); };
  var underCounts = optionCounts(selection, "under");
  var whereCounts = optionCounts(selection, "where");
  var colorCounts = optionCounts(selection, "color");
  var seasonCounts = optionCounts(selection, "season");
  var matches = CATALOG.filter(function (species) { return matchesSelection(species, selection); });
  matches.sort(function (a, b) {
    var left = displayName(a.label[lang], a.name, lang);
    var right = displayName(b.label[lang], b.name, lang);
    return left.localeCompare(right, locale);
  });
  var openSeason = { under: selection.under, where: selection.where, color: selection.color, season: "" };
  var anySeasonCount = CATALOG.filter(function (species) { return matchesSelection(species, openSeason); }).length;
  var active = KEY_AXES.some(function (axis) { return selection[axis]; });
  var chips = ["under", "where", "color"].filter(function (axis) { return selection[axis]; }).map(function (axis) {
    var label = axis === "under" ? copy[UNDER_COPY[selection[axis]][0]] : axis === "where" ? copy[WHERE_COPY[selection[axis]][0]] : copy[COLOR_COPY[selection[axis]]];
    return (
      '<button type="button" class="chip on" data-key="' + axis + '" data-id="' + selection[axis] + '">' +
        esc(label) + '<span aria-hidden="true"> ×</span></button>'
    );
  }).join("");
  var underTiles = KEY_UNDER.map(function (id) {
    var count = underCounts[id] || 0;
    var pair = UNDER_COPY[id];
    return keyButton(
      "petal-tile",
      selection.under === id,
      count === 0 && selection.under !== id,
      "under",
      id,
      keyGlyph(id) + '<span class="lbl">' + esc(copy[pair[0]]) + '</span><span class="ex">' + esc(copy[pair[1]]) + '</span><span class="num">' + number(count) + "</span>"
    );
  }).join("");
  var whereTiles = KEY_WHERE.map(function (id) {
    var count = whereCounts[id] || 0;
    var pair = WHERE_COPY[id];
    return keyButton(
      "habitat-tile",
      selection.where === id,
      count === 0 && selection.where !== id,
      "where",
      id,
      '<span class="tile-top">' + keyGlyph(id) + '<span class="num">' + number(count) + "</span></span>" +
        '<span class="lbl">' + esc(copy[pair[0]]) + '</span><span class="ex">' + esc(copy[pair[1]]) + "</span>"
    );
  }).join("");
  var swatches = KEY_COLOR.map(function (id) {
    var count = colorCounts[id] || 0;
    return keyButton(
      "swatch-btn",
      selection.color === id,
      count === 0 && selection.color !== id,
      "color",
      id,
      '<span class="swatch-disk c-' + id + '"></span><span class="lbl">' + esc(copy[COLOR_COPY[id]]) + '</span><span class="num">' + number(count) + "</span>"
    );
  }).join("");
  var seasonRows = KEY_SEASON.filter(function (id) {
    return selection.season === id || (seasonCounts[id] || 0) > 0;
  }).map(function (id) {
    var checked = selection.season === id;
    return (
      '<button type="button" role="radio" class="region-row" data-key="season" data-id="' + id + '" aria-checked="' + (checked ? "true" : "false") + '">' +
        '<span class="radio" aria-hidden="true"></span><span class="lbl">' + esc(copy[id]) + '</span><span class="num">' + number(seasonCounts[id] || 0) + "</span></button>"
    );
  }).join("");
  var seasonName = selection.season ? copy[selection.season] : copy.anySeason;
  var grid = matches.map(function (species) {
    var line = taxonLabel(species.family, lang);
    return cell(species, lang, line ? displayName(line, "", lang) : species.family, !!line);
  }).join("");
  var page =
    '<div class="page identify-page">' +
      '<div class="home-hero identify-hero"><div><h1 class="common">' + esc(copy.keyTitle) + "</h1></div>" +
        '<p class="lede">' + esc(copy.keyLede) + "</p></div>" +
      '<div class="identify-split">' +
        '<div class="identify-filters">' +
          "<fieldset><legend>" + esc(copy.underQuestion) + "</legend>" +
            '<p class="key-note">' + esc(copy.underNote) + '</p><div class="petal-grid">' + underTiles + "</div></fieldset>" +
          "<fieldset><legend>" + esc(copy.whereQuestion) + "</legend>" +
            keyButton("any-btn", !selection.where, false, "where", "", esc(copy.anyWhere)) +
            '<div class="habitat-grid">' + whereTiles + "</div></fieldset>" +
          "<fieldset><legend>" + esc(copy.colorQuestion) + "</legend>" +
            '<p class="key-note">' + esc(copy.colorNote) + '</p><div class="swatches">' + swatches + "</div></fieldset>" +
        "</div>" +
        '<section class="identify-results" id="identify-results" aria-labelledby="identify-count">' +
          '<div class="identify-results-h">' +
            '<p id="identify-count" aria-live="polite">' + esc(countLabel(matches.length, lang)) + "</p>" +
            '<div class="identify-results-row">' +
              '<details class="season-details" id="identify-season-panel"' + (seasonOpen ? " open" : "") + ">" +
                '<summary class="region-toggle' + (selection.season ? " on" : "") + '">' +
                  esc(seasonName) +
                  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
                "</summary>" +
                '<div class="region-panel"><h2>' + esc(copy.seasonQuestion) + "</h2>" +
                  '<p class="key-note">' + esc(copy.seasonNote) + '</p><div role="radiogroup" aria-label="' + esc(copy.seasonQuestion) + '">' +
                  '<button type="button" role="radio" class="region-row" data-key="season" data-id="" aria-checked="' + (!selection.season ? "true" : "false") + '">' +
                    '<span class="radio" aria-hidden="true"></span><span class="lbl">' + esc(copy.anySeason) + '</span><span class="num">' + number(anySeasonCount) + "</span></button>" +
                  seasonRows +
                "</div></div>" +
              "</details>" +
              (active
                ? '<div class="key-chips">' + chips +
                  '<button type="button" class="any-btn" data-key="clear">' + esc(copy.startOver) + "</button></div>"
                : "") +
            "</div>" +
          "</div>" +
          (matches.length ? '<div class="grid">' + grid + "</div>" : '<p class="center-msg">' + esc(copy.keyEmpty) + "</p>") +
        "</section>" +
      "</div>" +
      '<a class="identify-dock" href="#identify-results">' + esc(countLabel(matches.length, lang)) + "</a>" +
    "</div>";
  return { title: copy.keyTitle + " — " + copy.app, description: copy.keyLede, html: shell(lang, page, "identify") };
}

function parse(pathname) {
  var path = pathname == null ? location.pathname : pathname;
  var parts = path.split("/").filter(Boolean);
  var lang = "en";
  if (PATH_LANGS.indexOf(parts[0]) >= 0) {
    lang = parts[0];
    parts = parts.slice(1);
  }
  if (!parts.length) return { lang: lang, view: "home" };
  if (parts[0] === "identify" && parts.length === 1) return { lang: lang, view: "identify" };
  if (parts[0] === "about" && parts.length === 1) return { lang: lang, view: "about" };
  if (parts[0] === "privacy" && parts.length === 1) return { lang: lang, view: "privacy" };
  if (parts[0] === "families" && parts.length === 1) return { lang: lang, view: "families" };
  if (parts[0] === "genera" && parts.length === 1) return { lang: lang, view: "genera" };
  if (parts[0] === "family" && parts[1]) return { lang: lang, view: "family", key: decodeURIComponent(parts[1]) };
  if (parts[0] === "genus" && parts[1]) return { lang: lang, view: "genus", key: decodeURIComponent(parts[1]) };
  if (parts[0] === "list" && parts[1]) return { lang: lang, view: "list", key: decodeURIComponent(parts[1]) };
  if (parts[0] === "mushroom" && parts[1]) {
    return { lang: lang, view: "mushroom", key: decodeURIComponent(parts[1]).replace(/_/g, " ") };
  }
  return { lang: lang, view: "missing" };
}

function go(url) {
  var here = location.pathname + location.search;
  if (url !== here) history.pushState(null, "", url);
  render();
  window.scrollTo(0, 0);
}

function writeSelection(selection) {
  var next = location.pathname + selectionSearch(selection);
  if (next !== location.pathname + location.search) history.replaceState(null, "", next);
  render();
}

function shell(lang, page, active) {
  var copy = t(lang);
  return (
    '<header class="site-bar">' +
      '<a class="mark" href="' + href("/", lang) + '">' + esc(copy.app) + "</a>" +
      '<nav class="site-nav">' +
        '<a class="' + (active === true ? "on" : "") + '" href="' + href("/", lang) + '">' + esc(copy.nav) + "</a>" +
        '<a class="' + (active === "identify" ? "on" : "") + '" href="' + href("/identify", lang) + '">' + esc(copy.keyTitle) + "</a>" +
        '<a class="optional' + (active === "about" ? " on" : "") + '" href="' + href("/about", lang) + '">' + esc(copy.about) + "</a>" +
        '<select class="lang-select" aria-label="' + esc(copy.language) + '">' +
          LANGS.map(function (item) {
            return '<option value="' + item.code + '"' + (lang === item.code ? " selected" : "") + ">" + esc(item.name) + "</option>";
          }).join("") +
        "</select>" +
      "</nav>" +
    "</header>" +
    page +
    '<footer class="site-foot"><span>' + esc(countLabel(CATALOG.length, lang)) + "</span><span>" +
      '<a href="' + href("/identify", lang) + '">' + esc(copy.keyTitle) + "</a> · " +
      '<a href="' + href("/about", lang) + '">' + esc(copy.about) + "</a> · " +
      '<a href="' + href("/privacy", lang) + '">' + esc(copy.privacy) + "</a> · " +
      '<a href="' + flowerUrl(lang) + '">' + esc(copy.sisterSite) + "</a>" +
    "</span></footer>"
  );
}

function tile(name, lang, kind) {
  var copy = t(lang);
  var label = taxonLabel(name, lang);
  var title = label ? displayName(label, "", lang) : name;
  var latin = label ? '<span class="latin">' + esc(name) + "</span>" : "";
  var path = kind === "family" ? "/family/" + encodeURIComponent(name) : "/genus/" + encodeURIComponent(name);
  var titleClass = !label && kind === "genus" ? "latin" : "";
  var icon = kind === "family"
    ? '<img class="tile-icon" src="' + STORAGE + "families/" + encodeURIComponent(name) + '.webp" alt="" loading="lazy" onerror="this.hidden=true">'
    : "";
  var cls = kind === "family" ? "tile tile-with-icon" : "tile";
  return (
    '<a class="' + cls + '" href="' + href(path, lang) + '">' +
      icon +
      '<span class="tile-copy">' +
        "<b class=\"" + titleClass + "\">" + esc(title) + "</b>" +
        latin +
        '<span class="count">' + esc(countLabel(taxonCount(kind, name), lang)) + "</span>" +
      "</span>" +
    "</a>"
  );
}

function cell(species, lang, third, spoken, mark) {
  var raw = species.label && species.label[lang] ? String(species.label[lang]).trim() : "";
  var label = raw ? displayName(raw, "", lang) : "";
  var badge = mark && mark.text
    ? '<div class="year' + (mark.state ? " state" : "") + '">' + esc(mark.text) + "</div>"
    : "";
  var alt = label ? esc(label + ", " + species.name) : esc(species.name);
  return (
    '<a class="cell" href="' + href("/mushroom/" + encodeURIComponent(species.name), lang) + '">' +
      '<div class="art"><img src="' + species.plateGrid + '" alt="' + alt + '"></div>' +
      badge +
      (label
        ? '<div class="n">' + esc(label) + '</div><div class="l latin">' + esc(species.name) + "</div>"
        : '<div class="n latin">' + esc(species.name) + "</div>") +
      '<div class="g' + (spoken ? " spoken" : "") + '">' + esc(third) + "</div>" +
    "</a>"
  );
}

function findList(id) {
  for (var i = 0; i < LISTS.length; i++) {
    if (LISTS[i].id === id) return LISTS[i];
  }
  return null;
}

function listLocales(doc) {
  var locales = doc && doc.locales;
  if (!locales || !locales.length) return ["en"];
  return locales;
}

function listVisible(doc, lang) {
  var locales = listLocales(doc);
  return locales.indexOf(lang) >= 0 || locales.indexOf("*") >= 0;
}

function listText(map, lang) {
  if (!map) return "";
  var own = map[lang];
  if (own && String(own).trim()) return String(own).trim();
  if (map.en && String(map.en).trim()) return String(map.en).trim();
  var keys = Object.keys(map);
  for (var i = 0; i < keys.length; i++) {
    var value = map[keys[i]];
    if (value && String(value).trim()) return String(value).trim();
  }
  return "";
}

function resolveSpecies(entry) {
  if (!entry) return null;
  if (entry.name) {
    var byName = findSpecies(entry.name);
    if (byName) return byName;
  }
  if (entry.speciesId == null) return null;
  for (var i = 0; i < CATALOG.length; i++) {
    if (CATALOG[i].id === entry.speciesId) return CATALOG[i];
  }
  return null;
}

function presentList(doc, lang) {
  var type = doc.type === "year" || doc.type === "region" ? doc.type : "species";
  var resolved = [];
  (doc.entries || []).forEach(function (entry, index) {
    var species = resolveSpecies(entry);
    if (!species) return;
    resolved.push({
      index: index,
      species: species,
      year: entry.year || 0,
      region: entry.region || ""
    });
  });
  resolved.sort(function (a, b) {
    if (type === "year") {
      if (!a.year && !b.year) return a.index - b.index;
      if (!a.year) return 1;
      if (!b.year) return -1;
      if (a.year !== b.year) return b.year - a.year;
      return a.index - b.index;
    }
    if (type === "region") {
      if (!a.region && !b.region) return a.index - b.index;
      if (!a.region) return 1;
      if (!b.region) return -1;
      var byRegion = a.region.toLowerCase().localeCompare(b.region.toLowerCase());
      if (byRegion) return byRegion;
      return a.index - b.index;
    }
    return a.index - b.index;
  });
  var cover = resolveSpecies({ name: doc.coverSpecies, speciesId: doc.coverSpeciesId });
  if (!cover && resolved.length) cover = resolved[0].species;
  return {
    id: doc.id,
    sort: doc.sort || 0,
    title: listText(doc.titles, lang) || doc.id,
    description: listText(doc.descriptions, lang),
    sourceUrl: doc.sourceUrl || "",
    cover: cover,
    entries: resolved
  };
}

function compareLists(a, b) {
  if (a.sort !== b.sort) return a.sort - b.sort;
  var left = a.title.toLowerCase();
  var right = b.title.toLowerCase();
  if (left < right) return -1;
  if (left > right) return 1;
  return 0;
}

function visibleLists(lang) {
  return LISTS.filter(function (doc) { return listVisible(doc, lang); })
    .map(function (doc) { return presentList(doc, lang); })
    .filter(function (list) { return list.entries.length; })
    .sort(compareLists);
}

function sourceHost(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch (err) {
    return "";
  }
}

function listsHtml(lang) {
  var copy = t(lang);
  var lists = visibleLists(lang);
  if (!lists.length) return "";
  var cards = lists.map(function (list) {
    var art = list.cover
      ? '<div class="art"><img src="' + list.cover.plateGrid + '" alt=""></div>'
      : '<div class="art"></div>';
    return (
      '<a class="cell" href="' + href("/list/" + encodeURIComponent(list.id), lang) + '">' +
        art +
        '<div class="n">' + esc(list.title) + "</div>" +
        '<div class="g">' + esc(countLabel(list.entries.length, lang)) + "</div>" +
      "</a>"
    );
  }).join("");
  return (
    '<section class="band">' +
      '<div class="band-h"><h2>' + esc(copy.lists) + "</h2></div>" +
      '<div class="list-line" style="--list-n: ' + lists.length + '">' + cards + "</div>" +
    "</section>"
  );
}

function listPage(lang, id) {
  var copy = t(lang);
  var doc = findList(id);
  if (!doc || !listVisible(doc, lang)) return missing(lang);
  var list = presentList(doc, lang);
  var host = sourceHost(list.sourceUrl);
  var source = host
    ? '<a class="list-source" href="' + esc(list.sourceUrl) + '" target="_blank" rel="noopener noreferrer">' + esc(host) + "</a>"
    : "";
  var lede = (list.description || copy.listLede) + " " + countLabel(list.entries.length, lang);
  var grid = list.entries.map(function (entry) {
    var spoken = taxonLabel(entry.species.family, lang);
    var mark = entry.region
      ? { state: true, text: entry.region }
      : entry.year
        ? { text: String(entry.year) }
        : null;
    return cell(
      entry.species,
      lang,
      spoken ? displayName(spoken, "", lang) : entry.species.family,
      !!spoken,
      mark
    );
  }).join("");
  var body = grid
    ? '<div class="grid">' + grid + "</div>"
    : '<p class="center-msg">' + esc(copy.emptyList) + "</p>";
  var page =
    '<div class="page">' +
      '<div class="home-hero"><div>' +
        '<div class="kicker"><a href="' + href("/", lang) + '">' + esc(copy.nav) + "</a> · " + esc(copy.lists) + "</div>" +
        '<h1 class="common">' + esc(list.title) + "</h1>" +
        source +
      '</div><p class="lede">' + esc(lede) + "</p></div>" +
      body +
    "</div>";
  return {
    title: list.title + " — " + copy.app,
    description: lede,
    image: list.cover ? list.cover.plate : "",
    html: shell(lang, page, true)
  };
}

function searchHits(query, lang) {
  var needle = fold(query);
  if (needle.length < 2) return [];
  var hits = [];
  taxonNames("family", lang).concat(taxonNames("genus", lang)).forEach(function (name) {
    var kind = TAXA[name].rank === "family" ? "family" : "genus";
    var spoken = taxonLabel(name, lang);
    var folded = fold(name);
    var spokenFold = fold(spoken);
    var score = 99;
    if (folded === needle || spokenFold === needle) score = 0;
    else if (folded.indexOf(needle) === 0 || spokenFold.indexOf(needle) === 0) score = 1;
    else if (folded.indexOf(needle) >= 0 || spokenFold.indexOf(needle) >= 0) score = 2;
    if (score < 99) hits.push({ kind: kind, name: name, label: spoken, score: score });
  });
  CATALOG.forEach(function (species) {
    var names = [species.name].concat(species.label[lang] ? [species.label[lang]] : [], species.names[lang] || [], species.synonyms || []);
    var mushroomScore = 99;
    names.forEach(function (name) {
      var folded = fold(name);
      var score = folded === needle ? 0 : folded.indexOf(needle) === 0 ? 1 : folded.indexOf(needle) >= 0 ? 2 : 99;
      if (score < mushroomScore) mushroomScore = score;
    });
    if (mushroomScore < 99) {
      hits.push({ kind: "mushroom", name: species.name, label: species.label[lang], family: species.family, score: mushroomScore + 3 });
    }
  });
  hits.sort(function (a, b) { return a.score - b.score; });
  return hits.slice(0, 12);
}

function resultsHtml(query, lang) {
  var copy = t(lang);
  var hits = searchHits(query, lang);
  if (fold(query).length < 2) return "";
  if (!hits.length) return '<p class="muted">' + esc(copy.empty) + "</p>";
  return hits.map(function (hit) {
    if (hit.kind === "mushroom") {
      var familySpoken = taxonLabel(hit.family, lang);
      var raw = hit.label ? String(hit.label).trim() : "";
      var spoken = raw ? displayName(raw, "", lang) : "";
      return (
        '<a class="result" href="' + href("/mushroom/" + encodeURIComponent(hit.name), lang) + '">' +
          "<span>" +
            (spoken
              ? "<b>" + esc(spoken) + '</b> <span class="latin">' + esc(hit.name) + "</span>"
              : '<b class="latin">' + esc(hit.name) + "</b>") +
          "</span>" +
          '<span class="muted">' + esc(familySpoken ? displayName(familySpoken, "", lang) : hit.family) + "</span>" +
        "</a>"
      );
    }
    var path = hit.kind === "family" ? "/family/" : "/genus/";
    var spoken = hit.label ? displayName(hit.label, "", lang) : "";
    return (
      '<a class="result" href="' + href(path + encodeURIComponent(hit.name), lang) + '">' +
        "<span><b" + (!spoken && hit.kind === "genus" ? ' class="latin"' : "") + ">" + esc(spoken || hit.name) + "</b>" +
        (spoken ? ' <span class="latin">' + esc(hit.name) + "</span>" : "") +
        "</span>" +
        '<span class="muted">' + esc(hit.kind === "family" ? copy.family : copy.genus) + "</span>" +
      "</a>"
    );
  }).join("");
}

function recentHtml(lang) {
  var groups = [];
  var index = {};
  var sorted = CATALOG.slice().sort(function (a, b) {
    if (a.added !== b.added) return a.added < b.added ? 1 : -1;
    return b.id - a.id;
  }).slice(0, 7);
  sorted.forEach(function (species) {
    if (!index[species.added]) {
      index[species.added] = { date: species.added, items: [] };
      groups.push(index[species.added]);
    }
    index[species.added].items.push(species);
  });
  var dates = groups.map(function (group) {
    return '<h3 class="recent-date" style="grid-column: span ' + group.items.length + '">' + esc(addedLabel(group.date, lang)) + "</h3>";
  }).join("");
  var cells = "";
  groups.forEach(function (group) {
    group.items.forEach(function (species) {
      var familyLine = taxonLabel(species.family, lang);
      cells += cell(species, lang, familyLine ? displayName(familyLine, "", lang) : species.family, false);
    });
  });
  return '<div class="recent-line" style="--recent-n: ' + sorted.length + '">' + dates + cells + "</div>";
}

function tilesHtml(lang, kind, byCount) {
  var names = taxonNames(kind, lang);
  if (byCount) {
    names.sort(function (a, b) { return taxonCount(kind, b) - taxonCount(kind, a); });
    names = names.slice(0, 12);
  }
  return names.map(function (name) { return tile(name, lang, kind); }).join("");
}

function home(lang) {
  var copy = t(lang);
  var page =
    '<div class="page">' +
      '<div class="plants-bar">' +
        '<div class="search"><input id="q" value="" placeholder="' + esc(copy.search) + '" aria-label="' + esc(copy.search) + '"></div>' +
        '<div class="plants-count">' + esc(countLabel(CATALOG.length, lang)) + "</div>" +
      "</div>" +
      '<div class="results" id="results"></div>' +
      '<section class="band">' +
        '<div class="band-h"><h2>' + esc(copy.recent) + "</h2></div>" +
        recentHtml(lang) +
      "</section>" +
      listsHtml(lang) +
      '<section class="band">' +
        '<div class="band-h"><h2>' + esc(copy.browse) + "</h2></div>" +
        '<div class="browse-block">' +
          '<div class="band-h"><h3 class="kicker">' + esc(copy.byFamily) + '</h3><a href="' + href("/families", lang) + '">' + esc(copy.seeFamilies) + "</a></div>" +
          '<div class="tiles">' + tilesHtml(lang, "family", true) + "</div>" +
        "</div>" +
        '<div class="browse-block">' +
          '<div class="band-h"><h3 class="kicker">' + esc(copy.byGenus) + '</h3><a href="' + href("/genera", lang) + '">' + esc(copy.seeGenera) + "</a></div>" +
          '<div class="tiles">' + tilesHtml(lang, "genus", true) + "</div>" +
        "</div>" +
      "</section>" +
      '<section class="band identify-band">' +
        "<h2>" + esc(copy.keyTitle) + "</h2>" +
        '<p class="lede">' + esc(copy.keyLede) + "</p>" +
        '<p><a href="' + href("/identify", lang) + '">' + esc(copy.keyOpen) + "</a></p>" +
      "</section>" +
    "</div>";
  return { title: copy.app, description: copy.homeDesc, html: shell(lang, page, true) };
}

function indexPage(lang, kind) {
  var copy = t(lang);
  var title = kind === "family" ? copy.families : copy.genera;
  var names = taxonNames(kind, lang);
  var page =
    '<div class="page">' +
      '<div class="home-hero"><div><div class="kicker"><a href="' + href("/", lang) + '">' + esc(copy.nav) + "</a></div>" +
      '<h1 class="common">' + esc(title) + "</h1></div><div class=\"muted\">" + names.length + "</div></div>" +
      '<section class="band"><div class="tiles">' +
        tilesHtml(lang, kind) +
      "</div></section>" +
    "</div>";
  return { title: title + " — " + copy.app, description: copy.homeDesc, html: shell(lang, page, true) };
}

function taxonPage(lang, kind, key) {
  var copy = t(lang);
  var rows = speciesIn(kind, key);
  if (!rows.length) return missing(lang);
  var spoken = taxonLabel(key, lang);
  var title = spoken ? displayName(spoken, "", lang) : key;
  var parent = kind === "family" ? "/families" : "/genera";
  var parentLabel = kind === "family" ? copy.families : copy.genera;
  var lede = (kind === "family" ? copy.familyLede : copy.genusLede) + " " + countLabel(rows.length, lang);
  var grid = rows.map(function (species) {
    var other = kind === "family" ? species.genus : species.family;
    var line = taxonLabel(other, lang);
    return cell(species, lang, line ? displayName(line, "", lang) : other, !!line);
  }).join("");
  var page =
    '<div class="page">' +
      '<div class="home-hero"><div>' +
        '<div class="kicker"><a href="' + href(parent, lang) + '">' + esc(parentLabel) + "</a> · " + esc(kind === "family" ? copy.family : copy.genus) + "</div>" +
        '<h1 class="common' + (!spoken && kind === "genus" ? " latin" : "") + '">' + esc(title) + "</h1>" +
        (spoken ? '<div class="binomen latin">' + esc(key) + "</div>" : "") +
      "</div><p class=\"lede\">" + esc(lede) + "</p></div>" +
      '<div class="grid">' + grid + "</div>" +
    "</div>";
  var head = spoken ? title + " (" + key + ")" : key;
  return { title: head + " — " + copy.app, description: lede, html: shell(lang, page, true) };
}

function section(label, text) {
  if (!text) return "";
  return '<div class="sec"><div class="k">' + esc(label) + "</div><p>" + esc(text) + "</p></div>";
}

function moreNames(copy, n) {
  var template = copy.moreNames;
  if (n === 1 && copy.moreNamesOne) template = copy.moreNamesOne;
  else if (n >= 2 && n <= 4 && copy.moreNamesFew) template = copy.moreNamesFew;
  return template.replace("{n}", String(n));
}

function gloss(name, lang) {
  var spoken = taxonLabel(name, lang);
  return spoken ? ' <span class="taxon-gloss">· ' + esc(spoken) + "</span>" : "";
}

function rankBody(lang, name) {
  var body = esc(name);
  var row = TAXA[name];
  if (row && row.rank === "family" && taxonCount("family", name)) body = '<a href="' + href("/family/" + encodeURIComponent(name), lang) + '">' + body + "</a>";
  else if (row && row.rank === "genus" && taxonCount("genus", name)) body = '<a class="latin" href="' + href("/genus/" + encodeURIComponent(name), lang) + '">' + body + "</a>";
  return body + gloss(name, lang);
}

function rankLine(lang, name, full) {
  var copy = t(lang);
  var row = TAXA[name];
  var label = (copy.ranks && copy.ranks[row.rank]) || row.rank;
  return '<div class="' + (full ? "rank-full" : "rank") + '"><div class="rk">' + esc(label) + "</div><div>" + rankBody(lang, name) + "</div></div>";
}

function synonymName(name) {
  var parts = String(name).match(/^(\S+\s+\S+)(?:\s+([\s\S]+))?$/);
  if (!parts || !parts[2]) return '<span class="latin">' + esc(name) + "</span>";
  return '<span class="latin">' + esc(parts[1]) + "</span> " + esc(parts[2]);
}

function synonymFlow(names) {
  return '<div class="syn-flow">' + names.map(function (name, index) {
    return "<span>" + (index ? ", " : "") + synonymName(name) + "</span>";
  }).join("") + "</div>";
}

function synonymBlock(species, lang) {
  var copy = t(lang);
  var names = species.synonyms || [];
  if (!names.length) return "";
  var rest = names.slice(2);
  var extra = rest.length
    ? '<details class="more-names"><summary>' + esc(moreNames(copy, rest.length)) + "</summary>" + synonymFlow(rest) + "</details>"
    : "";
  return '<div class="rank"><div class="rk">' + esc(names.length === 1 ? copy.synonym : copy.synonyms) + "</div><div>" + synonymFlow(names.slice(0, 2)) + extra + "</div></div>";
}

function speciesLine(species, lang, full) {
  var copy = t(lang);
  return '<div class="' + (full ? "rank-full" : "rank") + '"><div class="rk">' + esc(copy.ranks.species) + '</div><div class="latin">' + esc(species.name) + ' <span class="author">' + esc(species.author) + "</span></div></div>";
}

function sourceItem(item) {
  var label = item.href
    ? '<a href="' + esc(item.href) + '" target="_blank" rel="noopener noreferrer">' + esc(item.name) + "</a>"
    : esc(item.name);
  var sub = item.detail ? '<span class="sub">' + esc(item.detail) + "</span>" : "";
  return "<li>" + label + sub + "</li>";
}

function sourceColumn(title, items) {
  if (!items.length) return "";
  return "<div><h3>" + esc(title) + "</h3><ul>" + items.map(sourceItem).join("") + "</ul></div>";
}

function sourcesColumn(species, lang) {
  var copy = t(lang);
  var grouped = { name: [], text: [] };
  var sources = (species.sources && species.sources[lang] && species.sources[lang].length)
    ? species.sources[lang]
    : ((species.sources && species.sources.en) || []);
  sources.forEach(function (item) {
    (grouped[item.group] || grouped.text).push(item);
  });
  var columns = sourceColumn(copy.sourcesName, grouped.name) + sourceColumn(copy.sourcesText, grouped.text);
  if (!columns) return "";
  return (
    '<div class="src-col">' +
      '<div class="band-h"><h2>' + esc(copy.sources) + "</h2><p>" + esc(copy.sourcesLede) + "</p></div>" +
      '<div class="bib">' + columns + "</div>" +
    "</div>"
  );
}

function taxonomyBand(species, lang) {
  var copy = t(lang);
  var summary = species.summary.map(function (name) { return rankLine(lang, name, false); }).join("");
  var full = species.path.map(function (name) { return rankLine(lang, name, true); }).join("") + speciesLine(species, lang, true);
  return (
    '<section class="band"><div class="tax-grid">' +
      '<div class="tax-col">' +
        '<div class="band-h"><h2>' + esc(copy.classification) + "</h2><p>" + esc(copy.classLede) + "</p></div>" +
        '<div class="ranks">' + summary + speciesLine(species, lang, false) + synonymBlock(species, lang) + "</div>" +
        '<details class="details tax-ranks-full"><summary>' + esc(copy.showRanks) + "</summary>" + full + "</details>" +
      "</div>" +
      sourcesColumn(species, lang) +
    "</div></section>"
  );
}

function photoCaption(copy, index, count) {
  return copy.photo.replace("{i}", String(index)).replace("{n}", String(count));
}

function httpUrl(value) {
  var url = String(value || "").trim();
  if (!/^https?:\/\//i.test(url)) return "";
  return url;
}

function creditHtml(credit) {
  if (!credit) return "";
  var author = String(credit.author || "").trim();
  var license = String(credit.license || "").trim();
  var source = httpUrl(credit.source);
  var licenseUrl = httpUrl(credit.licenseUrl);
  var parts = [];
  if (author && source) {
    parts.push('<a href="' + esc(source) + '" target="_blank" rel="noopener noreferrer">' + esc(author) + "</a>");
  } else if (author) {
    parts.push(esc(author));
  } else if (source) {
    parts.push('<a href="' + esc(source) + '" target="_blank" rel="noopener noreferrer">' + esc(source) + "</a>");
  }
  if (license && licenseUrl) {
    parts.push('<a href="' + esc(licenseUrl) + '" target="_blank" rel="noopener noreferrer">' + esc(license) + "</a>");
  } else if (license) {
    parts.push(esc(license));
  }
  if (!parts.length) return "";
  return '<span class="credit">' + parts.join(" · ") + "</span>";
}

function creditPlain(credit) {
  if (!credit) return "";
  return [String(credit.author || "").trim(), String(credit.license || "").trim()].filter(Boolean).join(", ");
}

function photoBand(species, lang) {
  var copy = t(lang);
  var photos = species.photos;
  var figs = photos.map(function (photo, index) {
    var caption = photoCaption(copy, index + 1, photos.length);
    var plain = creditPlain(photo);
    var label = plain ? caption + ", " + plain : caption;
    return (
      "<figure>" +
        '<button type="button" class="photo-open" data-index="' + index + '" data-caption="' + esc(caption) + '" aria-label="' + esc(label) + '">' +
          '<img src="' + esc(photo.src) + '" alt="" loading="lazy">' +
        "</button>" +
        "<figcaption><span class=\"dark-cap\">" + esc(caption) + "</span>" + creditHtml(photo) + "</figcaption>" +
      "</figure>"
    );
  }).join("");
  return (
    '<section class="band">' +
      '<div class="band-h"><h2>' + esc(copy.field) + "</h2><p>" + esc(copy.fieldLede) + "</p></div>" +
      '<div class="photos">' + figs + "</div>" +
    "</section>"
  );
}

var light = null;
var lightOverflow = "";

function lightItems() {
  return Array.prototype.map.call(document.querySelectorAll(".photos .photo-open"), function (button) {
    var img = button.querySelector("img");
    var figure = button.closest("figure");
    var credit = figure ? figure.querySelector(".credit") : null;
    return {
      src: img ? img.getAttribute("src") : "",
      caption: button.getAttribute("data-caption") || "",
      credit: credit ? credit.innerHTML : ""
    };
  });
}

function paintLightbox() {
  var node = document.getElementById("lightbox");
  if (!light) {
    if (node) node.remove();
    document.body.style.overflow = lightOverflow;
    return;
  }
  var copy = t(parse().lang);
  var item = light.items[light.index];
  if (!node) {
    lightOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.insertAdjacentHTML("beforeend",
      '<div id="lightbox" class="lightbox" role="dialog" aria-modal="true" tabindex="-1" aria-label="' + esc(item.caption) + '">' +
        '<button type="button" class="lightbox-close" aria-label="' + esc(copy.lightboxClose) + '">×</button>' +
        (light.items.length > 1
          ? '<button type="button" class="lightbox-nav lightbox-prev" data-delta="-1" aria-label="' + esc(copy.lightboxPrev) + '"><span aria-hidden="true">‹</span></button>' +
            '<button type="button" class="lightbox-nav lightbox-next" data-delta="1" aria-label="' + esc(copy.lightboxNext) + '"><span aria-hidden="true">›</span></button>'
          : "") +
        '<div class="lightbox-body"><img alt="' + esc(item.caption) + '"><p></p><div class="credit lightbox-credit"></div></div>' +
      "</div>"
    );
    node = document.getElementById("lightbox");
    var close = node.querySelector(".lightbox-close");
    if (close) close.focus();
  }
  node.setAttribute("aria-label", item.caption);
  var image = node.querySelector("img");
  image.src = item.src;
  image.alt = item.caption;
  node.querySelector(".lightbox-body p").textContent = item.caption;
  var credit = node.querySelector(".lightbox-credit");
  credit.innerHTML = item.credit || "";
  credit.hidden = !item.credit;
}

function openLightbox(index) {
  var items = lightItems();
  if (!items.length) return;
  light = { items: items, index: (index + items.length) % items.length };
  paintLightbox();
}

function stepLightbox(delta) {
  if (!light || light.items.length < 2) return;
  var count = light.items.length;
  light.index = (light.index + delta + count) % count;
  paintLightbox();
}

function closeLightbox() {
  if (!light) return;
  light = null;
  paintLightbox();
}

function mushroomText(species, lang) {
  var texts = (species && species.text) || {};
  var own = texts[lang];
  var en = texts.en || {};
  if (!own) return en;
  function pick(field) {
    var val = own[field];
    if (val && String(val).trim()) return val;
    return en[field] || "";
  }
  return {
    description: pick("description"),
    cap: pick("cap"),
    hymenium: pick("hymenium"),
    stipe: pick("stipe"),
    flesh: pick("flesh"),
    sporePrint: pick("sporePrint"),
    habitat: pick("habitat"),
    uses: pick("uses"),
    confusion: pick("confusion"),
    notes: pick("notes")
  };
}

function mushroomPage(lang, key) {
  var copy = t(lang);
  var species = findSpecies(key);
  if (!species) return missing(lang);
  var text = mushroomText(species, lang);
  var raw = species.label && species.label[lang] ? String(species.label[lang]).trim() : "";
  var spoken = raw ? displayName(raw, "", lang) : "";
  var familySpoken = taxonLabel(species.family, lang);
  var orderSpoken = taxonLabel(species.order, lang);
  var genusSpoken = taxonLabel(species.genus, lang);
  var aka = species.names[lang] || [];
  var edible = species.edibility === "choice" || species.edibility === "edible" || species.edibility === "edible_with_caution";
  var heading = spoken
    ? '<h1 class="common">' + esc(spoken) + "</h1>" +
      '<div class="binomen latin">' + esc(species.name) + ' <span class="author">' + esc(species.author) + "</span></div>"
    : '<h1 class="common latin">' + esc(species.name) + ' <span class="author">' + esc(species.author) + "</span></h1>";
  var plateAlt = spoken ? esc(spoken + ", " + species.name) : esc(species.name);
  var page =
    '<div class="page">' +
      '<div class="crumb">' +
        '<a href="' + href("/", lang) + '">' + esc(copy.nav) + "</a> · " +
        "<span>" + esc(orderSpoken ? displayName(orderSpoken, "", lang) : species.order) + "</span> · " +
        '<a href="' + href("/family/" + encodeURIComponent(species.family), lang) + '">' + esc(familySpoken ? displayName(familySpoken, "", lang) : species.family) + "</a> · " +
        '<a' + (genusSpoken ? "" : ' class="latin"') + ' href="' + href("/genus/" + encodeURIComponent(species.genus), lang) + '">' + esc(genusSpoken ? displayName(genusSpoken, "", lang) : species.genus) + "</a> · " +
        '<span class="here latin">' + esc(species.name) + "</span>" +
      "</div>" +
      '<section class="spread">' +
        '<div class="plate"><img src="' + esc(species.plate) + '" alt="' + plateAlt + '"><div class="cap">' + esc(copy.plate) + creditHtml(species.plateCredit) + "</div></div>" +
        '<div class="copy">' +
          '<div class="kicker">' + esc(species.family) + " · " + esc(species.order) + "</div>" +
          heading +
          (aka.length ? '<div class="aka">' + esc(copy.also) + " " + esc(aka.join(", ")) + "</div>" : "") +
          '<div class="facts">' +
            (capMeasure(species, copy) ? '<div class="fact"><div class="k">' + esc(copy.cap) + '</div><div class="v">' + esc(capMeasure(species, copy)) + "</div></div>" : "") +
            '<div class="fact"><div class="k">' + esc(copy.season) + '</div><div class="v">' + esc(season(species, lang)) + "</div></div>" +
            '<div class="fact"><div class="k">' + esc(copy.edibility) + '</div><div class="v">' + esc(copy[species.edibility] || "") + "</div></div>" +
          "</div>" +
          '<p class="lede">' + esc(text.description) + "</p>" +
          (text.notes ? '<aside class="note"><div class="k">' + esc(copy.notes) + "</div><p>" + esc(text.notes) + "</p></aside>" : "") +
          section(copy.cap, text.cap) +
          section(copy[species.hymenium] || copy.tubes, text.hymenium) +
          section(copy.stipe, text.stipe) +
          section(copy.flesh, text.flesh) +
          section(copy.spore, text.sporePrint) +
          section(copy.habitat, text.habitat) +
          (text.uses ? '<aside class="note uses"><div class="k">' + esc(copy.uses) + '</div><p class="disclaimer">' + esc(edible ? copy.usesNote : copy.usesCaution) + "</p><p>" + esc(text.uses) + "</p></aside>" : "") +
          (text.confusion ? section(copy.lookalikes, text.confusion) : "") +
        "</div>" +
      "</section>" +
      photoBand(species, lang) +
      taxonomyBand(species, lang) +
    "</div>";
  var head = spoken ? spoken + " (" + species.name + ")" : species.name;
  return {
    title: head + " — " + copy.app,
    description: text.description || "",
    image: species.plate,
    html: shell(lang, page, true)
  };
}

var ABOUT_SPECIES = "Boletus edulis";

function aboutPage(lang) {
  var copy = t(lang);
  var species = findSpecies(ABOUT_SPECIES);
  var raw = species && species.label && species.label[lang] ? String(species.label[lang]).trim() : "";
  var label = raw ? displayName(raw, "", lang) : "";
  var toSpecies = species ? href("/mushroom/" + encodeURIComponent(species.name), lang) : "";
  var alt = species ? (label ? label + ", " + species.name : species.name) : "";
  var photos = "";
  if (species) {
    photos = species.photos.slice(0, 3).map(function (photo) {
      return (
        "<figure>" +
          '<a href="' + toSpecies + '"><img src="' + esc(photo.src) + '" alt="' + esc(alt) + '"></a>' +
          creditHtml(photo) +
        "</figure>"
      );
    }).join("");
  }
  var plate = species
    ? '<div class="plate"><a href="' + toSpecies + '"><img src="' + esc(species.plate) + '" alt="' + esc(alt) + '"></a><div class="cap">' + esc(copy.plate) + creditHtml(species.plateCredit) + "</div></div>"
    : "";
  var langs = LANGS.map(function (item) {
    var on = item.code === lang;
    return '<a class="lang-chip' + (on ? " on" : "") + '" href="' + href("/about", item.code) + '"' + (on ? ' aria-current="page"' : "") + ">" + esc(item.name) + "</a>";
  }).join("");
  var page =
    '<div class="page">' +
      '<div class="home-hero identify-hero about-hero">' +
        '<div><h1 class="common">' + esc(copy.aboutHeadline) + "</h1></div>" +
        '<p class="lede">' + esc(copy.aboutLede) + "</p>" +
      "</div>" +
      '<div class="facts about-facts">' +
        '<div class="fact"><div class="k">' + esc(copy.aboutFactCollection) + '</div><div class="v">' + CATALOG.length + "</div></div>" +
        '<div class="fact"><div class="k">' + esc(copy.aboutFactLanguages) + '</div><div class="v">' + LANGS.length + "</div></div>" +
        '<div class="fact"><div class="k">' + esc(copy.aboutFactKey) + '</div><div class="v">' + esc(copy.aboutFactSteps) + "</div></div>" +
      "</div>" +
      '<section class="spread">' +
        plate +
        '<div class="copy about-copy">' +
          '<div class="kicker">' + esc(copy.aboutWhyKicker) + "</div>" +
          '<h2 class="common">' + esc(copy.aboutWhyTitle) + "</h2>" +
          "<p>" + esc(copy.aboutWhyP1) + "</p>" +
          "<p>" + esc(copy.aboutWhyP2) + "</p>" +
          "<p>" + esc(copy.aboutWhyP3) + "</p>" +
          (photos ? '<div class="about-photos">' + photos + "</div>" : "") +
        "</div>" +
      "</section>" +
      '<section class="band">' +
        '<div class="band-h"><h2>' + esc(copy.aboutHowTitle) + "</h2><p>" + esc(copy.aboutHowLede) + "</p></div>" +
        '<div class="tiles about-tiles">' +
          '<div class="tile"><div class="kicker">' + esc(copy.plate) + "</div><b>" + esc(copy.aboutTilePlateT) + "</b><span>" + esc(copy.aboutTilePlateD) + "</span></div>" +
          '<div class="tile"><div class="kicker">' + esc(copy.field) + "</div><b>" + esc(copy.aboutTilePhotoT) + "</b><span>" + esc(copy.aboutTilePhotoD) + "</span></div>" +
          '<div class="tile"><div class="kicker">' + esc(copy.aboutFactKey) + "</div><b>" + esc(copy.aboutTileTextT) + "</b><span>" + esc(copy.aboutTileTextD) + "</span></div>" +
        "</div>" +
      "</section>" +
      '<section class="band">' +
        '<div class="band-h"><h2>' + esc(copy.aboutLangsTitle) + "</h2><p>" + esc(copy.aboutLangsLede.replace("{n}", String(LANGS.length))) + "</p></div>" +
        '<div class="langs">' + langs + "</div>" +
        '<aside class="note"><div class="k">' + esc(copy.aboutNamesK) + "</div><p>" + esc(copy.aboutNamesNote) + "</p></aside>" +
      "</section>" +
      '<section class="band">' +
        '<div class="band-h"><h2>' + esc(copy.sources) + "</h2><p>" + esc(copy.aboutSourcesIntro) + "</p></div>" +
        '<div class="bib about-bib">' +
          "<div><h3>" + esc(copy.sourcesName) + "</h3><ul>" +
            '<li><a href="https://www.indexfungorum.org/" target="_blank" rel="noopener noreferrer">Index Fungorum</a>' +
              " · " +
              '<a href="https://www.speciesfungorum.org/" target="_blank" rel="noopener noreferrer">Species Fungorum</a>' +
              '<span class="sub">' + esc(copy.aboutSrcIfSub) + "</span></li>" +
            '<li><a href="https://www.mycobank.org/" target="_blank" rel="noopener noreferrer">MycoBank</a><span class="sub">' + esc(copy.aboutSrcMbSub) + "</span></li>" +
            '<li><a href="https://www.gbif.org/" target="_blank" rel="noopener noreferrer">GBIF</a><span class="sub">' + esc(copy.aboutSrcGbifSub) + "</span></li>" +
          "</ul></div>" +
          "<div><h3>" + esc(copy.sourcesText) + "</h3><ul>" +
            '<li><a href="https://www.wikipedia.org/" target="_blank" rel="noopener noreferrer">Wikipedia</a></li>' +
            '<li><a href="https://www.first-nature.com/" target="_blank" rel="noopener noreferrer">First Nature</a>' +
              " · " +
              '<a href="https://www.mushroomexpert.com/" target="_blank" rel="noopener noreferrer">MushroomExpert</a></li>' +
            "<li>" + esc(copy.aboutSrcGuides) + '<span class="sub">' + esc(copy.aboutSrcGuidesSub) + "</span></li>" +
          "</ul></div>" +
          "<div><h3>" + esc(copy.sourcesImages) + "</h3><ul>" +
            "<li>" + esc(copy.aboutSrcPlates) + '<span class="sub">' + esc(copy.aboutSrcPlatesSub) + "</span></li>" +
            '<li><a href="https://commons.wikimedia.org/" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a><span class="sub">' + esc(copy.aboutSrcCommonsSub) + "</span></li>" +
          "</ul></div>" +
        "</div>" +
      "</section>" +
      '<section class="band identify-band">' +
        "<h2>" + esc(copy.keyTitle) + "</h2>" +
        '<p class="lede">' + esc(copy.keyLede) + "</p>" +
        '<p><a href="' + href("/identify", lang) + '">' + esc(copy.keyOpen) + "</a></p>" +
        '<p class="about-sister">' + esc(copy.aboutSister) + ' <a href="' + flowerUrl(lang) + '">' + esc(copy.sisterSite) + "</a></p>" +
      "</section>" +
    "</div>";
  return { title: copy.about + " — " + copy.app, description: copy.aboutSeo, html: shell(lang, page, "about") };
}

function privacyPage(lang) {
  var copy = t(lang);
  var state = analyticsState();
  var allowPressed = state.ready && state.on;
  var refusePressed = state.ready && !state.on;
  var status = state.ready
    ? "<p>" + esc(state.on ? copy.privacyStatusOn : copy.privacyStatusOff) + "</p>"
    : "";
  var page =
    '<div class="page">' +
      '<div class="home-hero"><div><h1 class="common">' + esc(copy.privacy) + "</h1></div></div>" +
      '<section class="band privacy-copy">' +
        "<p>" + esc(copy.privacyLead) + ' <a href="' + APP_PRIVACY + '" target="_blank" rel="noopener noreferrer">' + esc(copy.privacyAppLink) + "</a></p>" +
        "<h2>" + esc(copy.privacyAnalyticsTitle) + "</h2>" +
        "<p>" + esc(copy.privacyAnalytics) + "</p>" +
        "<h2>" + esc(copy.privacyChoiceTitle) + "</h2>" +
        "<p>" + esc(copy.privacyChoice) + "</p>" +
        status +
        '<div class="ga-actions">' +
          '<button type="button" class="ga-choice" data-ga="allow" aria-pressed="' + (allowPressed ? "true" : "false") + '">' + esc(copy.gaAllow) + "</button>" +
          '<button type="button" class="ga-choice" data-ga="refuse" aria-pressed="' + (refusePressed ? "true" : "false") + '">' + esc(copy.gaRefuse) + "</button>" +
        "</div>" +
        "<p>" + esc(copy.privacyContact) + ' <a href="mailto:adrian.benko.us@gmail.com">adrian.benko.us@gmail.com</a></p>' +
      "</section>" +
    "</div>";
  return { title: copy.privacy + " — " + copy.app, description: copy.privacySeo, html: shell(lang, page, false) };
}

function missing(lang) {
  var copy = t(lang);
  var page = '<div class="page"><p class="center-msg">' + esc(copy.missing) + ' <a href="' + href("/", lang) + '">' + esc(copy.nav) + "</a></p></div>";
  return { title: copy.app, description: copy.homeDesc, html: shell(lang, page, false) };
}

function viewModel(route) {
  if (route.view === "home") return home(route.lang);
  if (route.view === "identify") return identifyPage(route.lang, route.search || "", route.seasonOpen);
  if (route.view === "about") return aboutPage(route.lang);
  if (route.view === "privacy") return privacyPage(route.lang);
  if (route.view === "families") return indexPage(route.lang, "family");
  if (route.view === "genera") return indexPage(route.lang, "genus");
  if (route.view === "family") return taxonPage(route.lang, "family", route.key);
  if (route.view === "genus") return taxonPage(route.lang, "genus", route.key);
  if (route.view === "list") return listPage(route.lang, route.key);
  if (route.view === "mushroom") return mushroomPage(route.lang, route.key);
  return missing(route.lang);
}

function pageImage(model) {
  if (model.image) return model.image;
  var edulis = findSpecies("Boletus edulis");
  return edulis ? edulis.plate : "";
}

function setMeta(model, lang, pathname) {
  document.title = model.title;
  document.documentElement.lang = lang;
  document.documentElement.dir = languageOf(lang).dir;
  var desc = String(model.description || "").slice(0, 240);
  var tag = document.querySelector('meta[name="description"]');
  if (tag) tag.setAttribute("content", desc);
  var og = document.querySelector('meta[property="og:description"]');
  if (og) og.setAttribute("content", desc);
  var ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", model.title);
  var path = pathname == null ? location.pathname : pathname;
  var url = "https://whatsthatmushroom.app" + (path.charAt(0) === "/" ? path : "/" + path);
  var canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute("href", url);
  var ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute("content", url);
  var image = document.querySelector('meta[property="og:image"]');
  var src = pageImage(model);
  if (image && src) image.setAttribute("content", src);
}

var consentObserver = null;

function consentBar(lang) {
  var state = analyticsState();
  if (!state.ask) return "";
  var copy = t(lang);
  return (
    '<div class="ga-banner" role="region" aria-label="' + esc(copy.privacy) + '">' +
      "<p>" + esc(copy.gaBanner) + "</p>" +
      '<div class="ga-actions">' +
        '<button type="button" class="ga-choice" data-ga="allow">' + esc(copy.gaAllow) + "</button>" +
        '<button type="button" class="ga-choice" data-ga="refuse">' + esc(copy.gaRefuse) + "</button>" +
        '<a class="ga-choice" href="' + href("/privacy", lang) + '">' + esc(copy.privacy) + "</a>" +
      "</div>" +
    "</div>"
  );
}

function paintConsent(lang) {
  var host = document.getElementById("consent");
  if (!host) return;
  if (consentObserver) {
    consentObserver.disconnect();
    consentObserver = null;
  }
  var state = analyticsState();
  var root = document.documentElement;
  host.innerHTML = consentBar(lang);
  if (!state.ask) {
    root.classList.remove("ga-ask");
    root.style.removeProperty("--ga-banner-h");
    return;
  }
  root.classList.add("ga-ask");
  var bar = host.querySelector(".ga-banner");
  if (!bar) return;
  var apply = function () {
    root.style.setProperty("--ga-banner-h", bar.offsetHeight + "px");
  };
  apply();
  if (typeof ResizeObserver === "undefined") return;
  consentObserver = new ResizeObserver(apply);
  consentObserver.observe(bar);
}

function render() {
  var pathname = location.pathname;
  var search = location.search;
  var filters = document.querySelector(".identify-filters");
  var filterScroll = filters ? filters.scrollTop : 0;
  var y = window.scrollY;
  closeLightbox();
  var seasonPanel = document.getElementById("identify-season-panel");
  var route = parse(pathname);
  route.search = search;
  route.seasonOpen = !!(seasonPanel && seasonPanel.open);
  var model = viewModel(route);
  document.getElementById("app").innerHTML = model.html;
  setMeta(model, route.lang, pathname);
  paintConsent(route.lang);
  window.scrollTo(0, y);
  var nextFilters = document.querySelector(".identify-filters");
  if (nextFilters) nextFilters.scrollTop = filterScroll;
  if (route.view === "identify") {
    var selection = readSelection(search);
    var matched = 0;
    CATALOG.forEach(function (species) {
      if (matchesSelection(species, selection)) matched += 1;
    });
    trackFilterResult({
      under: selection.under,
      where: selection.where,
      color: selection.color,
      season: selection.season,
      count: matched
    });
  }
  clearTimeout(searchTimer);
  var input = document.getElementById("q");
  if (input) input.addEventListener("input", function () {
    var box = document.getElementById("results");
    if (box) box.innerHTML = resultsHtml(input.value, route.lang);
    clearTimeout(searchTimer);
    var term = input.value;
    var lang = route.lang;
    searchTimer = setTimeout(function () {
      trackSearch(term, searchHits(term, lang).length);
    }, 1000);
  });
  var copy = t(route.lang);
  pageview({ pathname: pathname, search: search }, {
    appName: copy.app,
    lang: route.lang,
    pageType: route.view === "missing" ? "other" : route.view,
    species: route.view === "mushroom" ? route.key : ""
  });
}

var listenersBound = false;
var started = false;
var searchTimer = 0;

function bindListeners() {
  if (listenersBound || typeof document === "undefined") return;
  listenersBound = true;

document.addEventListener("click", function (event) {
  var gaBtn = event.target.closest("[data-ga]");
  if (gaBtn) {
    if (gaBtn.getAttribute("data-ga") === "allow") allowAnalytics();
    else refuseAnalytics();
    return;
  }
  var opener = event.target.closest(".photo-open");
  if (opener) {
    openLightbox(Number(opener.getAttribute("data-index")) || 0);
    return;
  }
  if (light) {
    if (event.target.closest(".lightbox-close")) {
      closeLightbox();
      return;
    }
    var nav = event.target.closest("[data-delta]");
    if (nav) {
      stepLightbox(Number(nav.getAttribute("data-delta")) || 0);
      return;
    }
    if (event.target.classList && event.target.classList.contains("lightbox")) {
      closeLightbox();
      return;
    }
  }
  var keyBtn = event.target.closest("[data-key]");
  if (keyBtn) {
    var axis = keyBtn.getAttribute("data-key");
    var id = keyBtn.getAttribute("data-id") || "";
    if (axis === "clear" || axis === "season") {
      var panel = document.getElementById("identify-season-panel");
      if (panel) panel.open = false;
    }
    if (axis === "clear") {
      writeSelection({ under: "", where: "", color: "", season: "" });
      return;
    }
    var selection = readSelection();
    selection[axis] = selection[axis] === id ? "" : id;
    writeSelection(selection);
    var focused = document.querySelector(
      axis === "season"
        ? "#identify-season-panel > summary"
        : '[data-key="' + axis + '"][data-id="' + id + '"]'
    );
    if (focused) focused.focus({ preventScroll: true });
    return;
  }
  var link = event.target.closest("a");
  if (!link) return;
  var url = new URL(link.href, location.origin);
  var results = link.closest("#results");
  if (results) {
    var field = document.getElementById("q");
    if (field) {
      clearTimeout(searchTimer);
      trackSearch(field.value, searchHits(field.value, parse().lang).length);
    }
  }
  var mushroomPath = url.pathname.match(/\/mushroom\/([^/]+)\/?$/);
  if (mushroomPath && url.origin === location.origin) {
    var speciesName = mushroomPath[1];
    try { speciesName = decodeURIComponent(speciesName); } catch (err) { /* keep the raw segment */ }
    speciesName = speciesName.replace(/_/g, " ");
    var source = results ? "search" : link.closest(".identify-page") ? "key" : "list";
    trackMushroom(speciesName, source);
  }
  if (url.hostname === "whatsthatflower.com") {
    trackSister(link.closest(".about-sister") ? "about" : "footer");
  }
  if (url.origin !== location.origin) return;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
  if (url.pathname === location.pathname && url.hash) return;
  event.preventDefault();
  go(url.pathname + url.search);
});

document.addEventListener("change", function (event) {
  if (!event.target.classList || !event.target.classList.contains("lang-select")) return;
  var route = parse();
  var path = stripLang(location.pathname, route.lang);
  var search = route.view === "identify" ? location.search : "";
  go(href(path, event.target.value) + search);
});

document.addEventListener("keydown", function (event) {
  if (light) {
    if (event.key === "Escape") {
      event.preventDefault();
      closeLightbox();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      stepLightbox(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      stepLightbox(1);
    }
    return;
  }
  if (event.key === "Escape") {
    var panel = document.getElementById("identify-season-panel");
    if (panel && panel.open) {
      event.preventDefault();
      panel.open = false;
      var summary = panel.querySelector("summary");
      if (summary) summary.focus({ preventScroll: true });
    }
    return;
  }
  var current = event.target.closest && event.target.closest("#identify-season-panel button[role='radio']");
  if (!current) return;
  var buttons = Array.prototype.slice.call(document.querySelectorAll("#identify-season-panel button[role='radio']"));
  var index = buttons.indexOf(current);
  if (index < 0) return;
  var next = index;
  if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (index + 1) % buttons.length;
  else if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (index - 1 + buttons.length) % buttons.length;
  else if (event.key === "Home") next = 0;
  else if (event.key === "End") next = buttons.length - 1;
  else return;
  event.preventDefault();
  buttons[next].click();
});
}

function start() {
  if (started || typeof window === "undefined") return;
  started = true;
  bindListeners();
  render();
  window.addEventListener("popstate", function () {
    render();
    window.scrollTo(0, 0);
  });
  subscribeAnalytics(function () {
    if (parse().view === "privacy") render();
    else paintConsent(parse().lang);
  });
}

function visibleListIds(lang) {
  return visibleLists(lang).map(function (list) { return list.id; });
}

function listSpecies(id) {
  var doc = findList(id);
  if (!doc) return [];
  return presentList(doc, "en").entries.map(function (entry) {
    return {
      name: entry.species.name,
      year: entry.year || 0,
      region: entry.region || ""
    };
  });
}

export {
  CATALOG,
  COPY,
  LANGS,
  LISTS,
  viewModel,
  parse,
  href,
  findSpecies,
  taxonNames,
  visibleListIds,
  listSpecies,
  countLabel,
  start
};
