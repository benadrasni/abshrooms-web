# Agent notes — abshrooms-web

Public field guide at https://whatsthatmushroom.app/ (also https://abshrooms-a9d4c.web.app/). Vite. The pages are HTML strings from `catalog.js`. Repo: `~/whatsthatmushroom/web`.

The site does not read Firestore. `copy.js` holds the interface strings for 34 languages. `species.js` exports the `CATALOG` array, and each species carries `where` and `color` for the identify page. `taxa.js` holds rank vernaculars. `catalog.js` is the pages: it imports those modules and still exports `LANGS`, `COPY`, and `CATALOG`. English is unprefixed. Every other code in `LANGS` is a path prefix (`/sk/...`).

A new language is one object in `copy.js`. Species text for that language is `text.{code}` on each species. Slovak plurals are special-cased in `countLabel`. Another language uses the English one/many line until that function grows a branch for it. `scripts/generate_seo.js` reads `LANGS` and writes one HTML shell per home, families, genera, identify, about, family, genus, and species URL, plus `sitemap.xml`.

## Deploy Hosting

Only when the user asks to deploy the website. From this directory:

```bash
npm run build
firebase deploy --only hosting --project abshrooms-a9d4c --non-interactive
```

`npm run build` is `vite build` then `scripts/generate_seo.js`. Output is `build/`. `.firebaserc` project is `abshrooms-a9d4c`. Confirm a species shell such as `/mushroom/Boletus%20edulis/` serves that species title on https://abshrooms-a9d4c.web.app and https://whatsthatmushroom.app.

Do not deploy database rules or Storage from this repo.
