(function () {
  var STORAGE = "https://storage.googleapis.com/abshrooms-resources/";
  var MEDIA = "photos/Boletales/Boletaceae/Boletus_edulis/";
  var PLATE = STORAGE + MEDIA + "Boletus_edulis@1600.webp?v=2";
  var PLATE_GRID = STORAGE + MEDIA + "Boletus_edulis@400.webp?v=2";
  var ADDED = "2026-10-22";

  var COPY = {
    en: {
      app: "What's that mushroom?",
      nav: "Mushrooms",
      language: "Language",
      search: "Search names, families, Latin",
      empty: "No mushrooms match that search.",
      one: "1 mushroom",
      many: "{n} mushrooms",
      recent: "Recently added",
      today: "Today",
      yesterday: "Yesterday",
      browse: "Browse",
      byFamily: "By family",
      byGenus: "By genus",
      seeFamilies: "See all families",
      seeGenera: "See all genera",
      families: "Families",
      genera: "Genera",
      family: "Family",
      genus: "Genus",
      familyLede: "Mushrooms in this family.",
      genusLede: "Species in this genus.",
      missing: "That page is not in the catalog.",
      plate: "Illustration",
      field: "In the field",
      fieldLede: "Curated photographs of this species. Distinct from the illustration, and from public sightings below.",
      photo: "Photo {i} of {n}",
      lightboxPrev: "Previous",
      lightboxNext: "Next",
      lightboxClose: "Close",
      also: "Also called",
      cap: "Cap",
      season: "Season",
      edibility: "Edibility",
      choice: "Choice",
      edible: "Edible",
      edible_with_caution: "Edible with caution",
      poisonous: "Poisonous",
      deadly: "Deadly",
      inedible: "Inedible",
      tubes: "Tubes and pores",
      gills: "Gills",
      ridges: "Ridges",
      pits: "Pits and ridges",
      smooth: "Smooth surface",
      teeth: "Teeth",
      gleba: "Gleba",
      capUpTo: "up to {n} cm",
      stipe: "Stipe",
      flesh: "Flesh",
      spore: "Spore print",
      habitat: "Habitat",
      uses: "Uses",
      usesNote: "A culinary note, not a guide to picking or eating a mushroom.",
      usesCaution: "Not a guide to picking or eating a mushroom.",
      lookalikes: "Lookalikes",
      notes: "Notes",
      classification: "Taxonomy",
      classLede: "Family and genus open mushroom indexes.",
      ranks: {
        kingdom: "Kingdom",
        subkingdom: "Subkingdom",
        phylum: "Phylum",
        subphylum: "Subphylum",
        class: "Class",
        subclass: "Subclass",
        suborder: "Suborder",
        order: "Order",
        family: "Family",
        genus: "Genus",
        species: "Species"
      },
      synonym: "Synonym",
      synonyms: "Synonyms",
      moreNames: "{n} more names",
      showRanks: "Show all ranks",
      sources: "Sources",
      sourcesLede: "Name records and the pages used for the text.",
      sourcesName: "Name",
      sourcesText: "Text",
      homeDesc: "A field guide to mushrooms. Browse by family and genus, and open a species plate.",
      keyTitle: "Identify",
      keyLede: "Narrow the catalog by the underside, where it grows, the cap colour, and the season. It does not confirm a name, and it is not a guide to eating.",
      keyOpen: "Open the key",
      underQuestion: "What is underneath?",
      underNote: "Turn it over. If there is no cap, choose the surface that bears the spores.",
      underGills: "Gills",
      underGillsEx: "thin blades",
      underTubes: "Pores",
      underTubesEx: "a sponge",
      underRidges: "Ridges",
      underRidgesEx: "blunt and forked",
      underTeeth: "Teeth",
      underTeethEx: "hanging spines",
      underPits: "Pits",
      underPitsEx: "a honeycomb",
      underSmooth: "Smooth",
      underSmoothEx: "wrinkled or bare",
      underGleba: "Enclosed",
      underGlebaEx: "puffball, stinkhorn",
      whereQuestion: "Where is it growing?",
      anyWhere: "Anywhere",
      whereWood: "On wood",
      whereWoodEx: "stumps, trunks, logs",
      whereGround: "With trees",
      whereGroundEx: "on the ground in woods",
      whereGrass: "In grass",
      whereGrassEx: "lawns, meadows, verges",
      colorQuestion: "What colour is the cap?",
      colorNote: "Yellow includes orange. Red includes pink. Dark is grey or black. A cap can match more than one colour.",
      colorWhite: "White",
      colorYellow: "Yellow",
      colorRed: "Red",
      colorBrown: "Brown",
      colorGreen: "Green",
      colorPurple: "Purple",
      colorDark: "Dark",
      anySeason: "Any season",
      seasonQuestion: "When did you find it?",
      seasonNote: "Matched to the months this catalog gives for each species.",
      spring: "Spring",
      summer: "Summer",
      autumn: "Autumn",
      winter: "Winter",
      startOver: "Start over",
      keyEmpty: "No mushrooms match those choices.",
      about: "About",
      aboutHeadline: "A mushroom encyclopedia",
      aboutLede: "Species pages you can trust: a mycological plate, field photographs, and sourced text. Identify with the four-step key on this site.",
      aboutFactCollection: "Collection",
      aboutFactLanguages: "Languages",
      aboutFactKey: "Identification",
      aboutFactSteps: "4 steps",
      aboutWhyKicker: "Why it exists",
      aboutWhyTitle: "A catalog of mushrooms",
      aboutWhyP1: "Search and read here. Identify by the underside, where it grows, the cap colour, and the season.",
      aboutWhyP2: "Each species page is prepared by hand: photographs, a mycological plate, and identification text rewritten from sources that actually cover the mushroom. Common names come from sources in that language. If none exist, the Latin name stands.",
      aboutWhyP3: "This is a curated collection, not a flora of the world's fungi.",
      aboutHowTitle: "How a species page is made",
      aboutHowLede: "A plate, field photographs, and sourced text.",
      aboutTilePlateT: "One official plate",
      aboutTilePlateD: "A historic mycological plate, kept as the official picture of the species.",
      aboutTilePhotoT: "Curated photographs",
      aboutTilePhotoD: "Field photographs prepared for the catalog, kept apart from the illustration.",
      aboutTileTextT: "Written from sources",
      aboutTileTextD: "Cap, the spore-bearing surface, stipe, flesh, spore print, and habitat, plus uses, lookalikes, and notes when a source records them.",
      aboutLangsTitle: "Languages",
      aboutLangsLede: "The site is in {n} languages. A species page shows the identification text written for that language. Common names are never invented.",
      aboutNamesK: "Names",
      aboutNamesNote: "A vernacular label is used only when a source in that language has it. Otherwise the page shows the Latin name.",
      aboutSourcesIntro: "Each species page lists the pages actually used. The catalog does not invent facts from an unused source.",
      aboutSrcIfSub: "Accepted name, author, and classification",
      aboutSrcMbSub: "Synonyms",
      aboutSrcGbifSub: "Accepted species usage",
      aboutSrcGuides: "Guides cited on the species page",
      aboutSrcGuidesSub: "nahuby.sk, and others when they cover the mushroom",
      sourcesImages: "Images",
      aboutSrcPlates: "Historic plates",
      aboutSrcPlatesSub: "Published mycological plates, kept as the species illustration",
      aboutSrcCommonsSub: "Field photographs chosen for the catalog",
      aboutSeo: "About the mushroom encyclopedia What's that mushroom?"
    },
    sk: {
      app: "Aká je to huba?",
      nav: "Huby",
      language: "Jazyk",
      search: "Hľadať názvy, čeľade, latinské názvy",
      empty: "Žiadna huba nezodpovedá hľadaniu.",
      one: "1 huba",
      few: "{n} huby",
      many: "{n} húb",
      recent: "Nedávno pridané",
      today: "Dnes",
      yesterday: "Včera",
      browse: "Listovať",
      byFamily: "Podľa čeľade",
      byGenus: "Podľa rodu",
      seeFamilies: "Všetky čeľade",
      seeGenera: "Všetky rody",
      families: "Čeľade",
      genera: "Rody",
      family: "Čeľaď",
      genus: "Rod",
      familyLede: "Huby tejto čeľade.",
      genusLede: "Druhy tohto rodu.",
      missing: "Táto stránka v katalógu nie je.",
      plate: "Ilustrácia",
      field: "V teréne",
      fieldLede: "Vybrané fotografie tohto druhu v prírode (odlišné od ilustrácie).",
      photo: "Fotografia {i} z {n}",
      lightboxPrev: "Predchádzajúca",
      lightboxNext: "Ďalšia",
      lightboxClose: "Zavrieť",
      also: "Aj",
      cap: "Klobúk",
      season: "Obdobie",
      edibility: "Jedlosť",
      choice: "Výborná",
      edible: "Jedlá",
      edible_with_caution: "Jedlá s výhradou",
      poisonous: "Jedovatá",
      deadly: "Smrteľná",
      inedible: "Nejedlá",
      tubes: "Rúrky",
      gills: "Lupene",
      ridges: "Žilky",
      pits: "Jamky a priehradky",
      smooth: "Hladký povrch",
      teeth: "Ostne",
      gleba: "Gléba",
      capUpTo: "do {n} cm",
      stipe: "Hlúbik",
      flesh: "Dužina",
      spore: "Výtrusný prach",
      habitat: "Výskyt",
      uses: "Použitie",
      usesNote: "Kuchynská poznámka, nie návod na zber.",
      usesCaution: "Nie je to návod na zber.",
      lookalikes: "Zámena",
      notes: "Poznámky",
      classification: "Taxonómia",
      classLede: "Čeľaď a rod otvárajú zoznamy húb.",
      ranks: {
        kingdom: "ríša",
        subkingdom: "podríša",
        phylum: "oddelenie",
        subphylum: "pododdelenie",
        class: "trieda",
        subclass: "podtrieda",
        suborder: "podrad",
        order: "rad",
        family: "čeľaď",
        genus: "rod",
        species: "druh"
      },
      synonym: "Synonymum",
      synonyms: "Synonymá",
      moreNames: "ešte {n} mien",
      moreNamesOne: "ešte {n} meno",
      moreNamesFew: "ešte {n} mená",
      showRanks: "Zobraziť všetky taxóny",
      sources: "Zdroje",
      sourcesLede: "Záznamy o názve a stránky použité pre text.",
      sourcesName: "Názov",
      sourcesText: "Text",
      homeDesc: "Sprievodca hubami. Listujte podľa čeľade a rodu a otvorte kartu druhu.",
      keyTitle: "Kľúč",
      keyLede: "Zúžte katalóg podľa spodnej strany, miesta, farby klobúka a obdobia. Neurčuje to meno s istotou a nie je to návod na zber.",
      keyOpen: "Otvoriť kľúč",
      underQuestion: "Čo je naspodku?",
      underNote: "Otočte ju. Ak nemá klobúk, vyberte plochu, na ktorej vznikajú výtrusy.",
      underGills: "Lupene",
      underGillsEx: "tenké lupene",
      underTubes: "Póry",
      underTubesEx: "špongia",
      underRidges: "Žilky",
      underRidgesEx: "tupé a vidlicovité",
      underTeeth: "Ostne",
      underTeethEx: "ovisnuté ostne",
      underPits: "Jamky",
      underPitsEx: "voština",
      underSmooth: "Hladký",
      underSmoothEx: "vráskavý alebo holý",
      underGleba: "Vnútri",
      underGlebaEx: "prášnica, hadovka",
      whereQuestion: "Kde rastie?",
      anyWhere: "Kdekoľvek",
      whereWood: "Na dreve",
      whereWoodEx: "pne, kmene, konáre",
      whereGround: "Pri stromoch",
      whereGroundEx: "na zemi v lese",
      whereGrass: "V tráve",
      whereGrassEx: "trávniky, lúky, okraje",
      colorQuestion: "Akej farby je klobúk?",
      colorNote: "Žltá zahŕňa oranžovú. Červená zahŕňa ružovú. Tmavá je sivá alebo čierna. Klobúk môže mať viac farieb.",
      colorWhite: "Biela",
      colorYellow: "Žltá",
      colorRed: "Červená",
      colorBrown: "Hnedá",
      colorGreen: "Zelená",
      colorPurple: "Fialová",
      colorDark: "Tmavá",
      anySeason: "Ktorékoľvek obdobie",
      seasonQuestion: "Kedy ste ju našli?",
      seasonNote: "Podľa mesiacov, ktoré tento katalóg uvádza pri druhu.",
      spring: "Jar",
      summer: "Leto",
      autumn: "Jeseň",
      winter: "Zima",
      startOver: "Od začiatku",
      keyEmpty: "Žiadna huba nezodpovedá tomuto výberu.",
      about: "O projekte",
      aboutHeadline: "Atlas húb",
      aboutLede: "Stránky druhov, ktorým sa dá veriť: mykologická ilustrácia, terénne fotografie a text zo zdrojov. Určujte štvorstupňovým kľúčom na tejto stránke.",
      aboutFactCollection: "Zbierka",
      aboutFactLanguages: "Jazyky",
      aboutFactKey: "Určovanie",
      aboutFactSteps: "4 kroky",
      aboutWhyKicker: "Prečo to existuje",
      aboutWhyTitle: "Katalóg húb",
      aboutWhyP1: "Hľadajte a čítajte tu. Určujte podľa spodnej strany, miesta, farby klobúka a obdobia.",
      aboutWhyP2: "Každá stránka druhu sa pripravuje ručne: fotografie, mykologická ilustrácia a identifikačný text prepísaný zo zdrojov, ktoré danú hubu naozaj opisujú. Ľudové názvy pochádzajú zo zdrojov v danom jazyku. Ak žiadny nie je, ostane latinský názov.",
      aboutWhyP3: "Toto je starostlivo pripravovaná zbierka, nie flóra všetkých húb sveta.",
      aboutHowTitle: "Ako vzniká stránka druhu",
      aboutHowLede: "Ilustrácia, fotografie a text zo zdrojov.",
      aboutTilePlateT: "Jedna oficiálna ilustrácia",
      aboutTilePlateD: "Historická mykologická ilustrácia, oficiálny obraz druhu.",
      aboutTilePhotoT: "Vybrané fotografie",
      aboutTilePhotoD: "Terénne fotografie pripravené pre katalóg, oddelené od ilustrácie.",
      aboutTileTextT: "Text zo zdrojov",
      aboutTileTextD: "Klobúk, výtrusorodá vrstva, hlúbik, dužina, výtrusný prach a výskyt, a použitie, zámena a poznámky, keď ich zdroj uvádza.",
      aboutLangsTitle: "Jazyky",
      aboutLangsLede: "Stránka je v {n} jazykoch. Stránka druhu ukáže identifikačný text napísaný v danom jazyku. Ľudové názvy sa nevymýšľajú.",
      aboutNamesK: "Názvy",
      aboutNamesNote: "Ľudový názov sa použije len vtedy, keď ho má zdroj v danom jazyku. Inak stránka ukáže latinský názov.",
      aboutSourcesIntro: "Každá stránka druhu uvádza stránky, ktoré sa naozaj použili. Katalóg nevymýšľa fakty zo zdroja, ktorý hubu neopisuje.",
      aboutSrcIfSub: "Akceptovaný názov, autor a zaradenie",
      aboutSrcMbSub: "Synonymá",
      aboutSrcGbifSub: "Akceptované použitie druhu",
      aboutSrcGuides: "Sprievodcovia uvedení na stránke druhu",
      aboutSrcGuidesSub: "nahuby.sk a ďalšie, keď hubu naozaj opisujú",
      sourcesImages: "Obrázky",
      aboutSrcPlates: "Historické ilustrácie",
      aboutSrcPlatesSub: "Uverejnené mykologické tabule, uložené ako ilustrácia druhu",
      aboutSrcCommonsSub: "Terénne fotografie vybrané pre katalóg",
      aboutSeo: "O atlase húb Aká je to huba?"
    }
  };

  var MONTHS = {
    en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    sk: ["január", "február", "marec", "apríl", "máj", "jún", "júl", "august", "september", "október", "november", "december"]
  };

  var TAXA = {
    Fungi: { rank: "kingdom", sk: "huby" },
    Dikarya: { rank: "subkingdom" },
    Basidiomycota: { rank: "phylum", sk: "bazídiové huby" },
    Ascomycota: { rank: "phylum", sk: "vreckaté huby" },
    Agaricomycotina: { rank: "subphylum" },
    Pezizomycotina: { rank: "subphylum" },
    Agaricomycetes: { rank: "class", sk: "pečiarky" },
    Pezizomycetes: { rank: "class" },
    Agaricomycetidae: { rank: "subclass" },
    Pezizomycetidae: { rank: "subclass" },
    Boletales: { rank: "order", sk: "hríbotvaré" },
    Agaricales: { rank: "order", sk: "pečiarkotvaré" },
    Cantharellales: { rank: "order", sk: "kuriatkotvaré" },
    Pezizales: { rank: "order", sk: "kustriebkotvaré" },
    Boletaceae: { rank: "family", sk: "hríbovité" },
    Hygrophoropsidaceae: { rank: "family", sk: "líštičkovité" },
    Hygrophoropsis: { rank: "genus", sk: "líška" },
    Amanitaceae: { rank: "family", sk: "muchotrávkovité" },
    Agaricaceae: { rank: "family", sk: "pečiarkovité" },
    Hydnaceae: { rank: "family", sk: "jelenkovité" },
    Morchellaceae: { rank: "family", sk: "smrčkovité" },
    Pleurotaceae: { rank: "family", sk: "hlivovité" },
    Boletus: { rank: "genus", sk: "hríb" },
    Rubroboletus: { rank: "genus", sk: "hríb" },
    Neoboletus: { rank: "genus", sk: "hríb" },
    Imleria: { rank: "genus", sk: "suchohríb" },
    Tylopilus: { rank: "genus", sk: "podhríb" },
    Amanita: { rank: "genus", sk: "muchotrávka" },
    Macrolepiota: { rank: "genus", sk: "bedľa" },
    Chlorophyllum: { rank: "genus", sk: "bedľa" },
    Cantharellus: { rank: "genus", sk: "kuriatko" },
    Craterellus: { rank: "genus", sk: "lievik" },
    Hydnum: { rank: "genus", sk: "jelenka" },
    Morchella: { rank: "genus", sk: "smrčok" },
    Pleurotus: { rank: "genus", sk: "hliva" },
    "Incertae sedis": { rank: "subclass" },
    Polyporales: { rank: "order", sk: "trúdnikotvaré" },
    Polyporaceae: { rank: "family", sk: "trúdnikovité" },
    Polyporus: { rank: "genus", sk: "trúdnik" },
    Fomes: { rank: "genus", sk: "práchnovec" },
    Trametes: { rank: "genus" },
    Laetiporaceae: { rank: "family", sk: "sírovcovité" },
    Laetiporus: { rank: "genus", sk: "sírovec" },
    Physalacriaceae: { rank: "family", sk: "čaďovkovité" },
    Armillaria: { rank: "genus", sk: "podpňovka" },
    Coprinus: { rank: "genus", sk: "hnojník" },
    Discinaceae: { rank: "family", sk: "ušiakovité" },
    Gyromitra: { rank: "genus", sk: "ušiak" },
    Strophariaceae: { rank: "family", sk: "golierovkovité" },
    Suillaceae: { rank: "family", sk: "masliakovité" },
    Suillus: { rank: "genus", sk: "masliak" },
    Hypholoma: { rank: "genus", sk: "strapcovka" },
    Agaricus: { rank: "genus", sk: "pečiarka" },
    Leccinum: { rank: "genus", sk: "kozák" },
    Russulales: { rank: "order", sk: "plávkotvaré" },
    Russulaceae: { rank: "family", sk: "plávkovité" },
    Auriscalpiaceae: { rank: "family", sk: "lyžičkovcovité" },
    Lactarius: { rank: "genus", sk: "rýdzik" },
    Russula: { rank: "genus", sk: "plávka" },
    Cortinariaceae: { rank: "family", sk: "pavučinovcovité" },
    Cortinarius: { rank: "genus", sk: "pavučinovec" },
    Fistulinaceae: { rank: "family", sk: "pečeňovcovité" },
    Fistulina: { rank: "genus", sk: "pečeňovec" },
    Lyophyllaceae: { rank: "family", sk: "čírovnicovité" },
    Calocybe: { rank: "genus", sk: "čírovnica" },
    Inocybaceae: { rank: "family", sk: "vláknicovité" },
    Inosperma: { rank: "genus", sk: "vláknica" },
    Thelephorales: { rank: "order" },
    Bankeraceae: { rank: "family", sk: "korkovkovité" },
    Paxillaceae: { rank: "family", sk: "čechračkovité" },
    Paxillus: { rank: "genus", sk: "čechračka" },
    Sparassidaceae: { rank: "family", sk: "kučierkovité" },
    Sparassis: { rank: "genus", sk: "kučierka" },
    Tricholomataceae: { rank: "family", sk: "čírovkovité" },
    Tricholoma: { rank: "genus", sk: "čírovka" },
    Lepista: { rank: "genus", sk: "pôvabnica" },
    Tricholomatineae: { rank: "suborder", sk: "čírovkotvaré" },
    Sarcodon: { rank: "genus", sk: "jelenkovec" },
    Kuehneromycetaceae: { rank: "family" },
    Kuehneromyces: { rank: "genus" },
    Galerinaceae: { rank: "family", sk: "kapucňovkovité" },
    Galerina: { rank: "genus", sk: "kapucňovka" },
    Entolomataceae: { rank: "family", sk: "hodvábnicovité" },
    Entoloma: { rank: "genus", sk: "hodvábnica" },
    Phallaceae: { rank: "family", sk: "hadovkovité" },
    Phallomycetidae: { rank: "subclass" },
    Phallales: { rank: "order", sk: "hadovkotvaré" },
    Phallus: { rank: "genus", sk: "hadovka" },
    Auriculariaceae: { rank: "family", sk: "uchovkovité" },
    Auriculariomycetidae: { rank: "subclass" },
    Auriculariales: { rank: "order" },
    Auricularia: { rank: "genus" },
    Artomyces: { rank: "genus" },
    Lycoperdaceae: { rank: "family", sk: "prášnicovité" },
    Lycoperdon: { rank: "genus", sk: "prášnica" },
    Calvatia: { rank: "genus", sk: "vatovec" },
    Clitocybaceae: { rank: "family", sk: "strmuľkovité" },
    Clitocybe: { rank: "genus", sk: "strmuľka" }
  };

  var SPECIES = {
    id: 0,
    name: "Boletus edulis",
    author: "Bull.",
    family: "Boletaceae",
    genus: "Boletus",
    order: "Boletales",
    edibility: "choice",
    hymenium: "tubes",
    path: ["Fungi", "Dikarya", "Basidiomycota", "Agaricomycotina", "Agaricomycetes", "Agaricomycetidae", "Boletales", "Boletaceae", "Boletus"],
    summary: ["Boletales", "Boletaceae", "Boletus"],
    added: ADDED,
    plate: PLATE,
    plateGrid: PLATE_GRID,
    plateCredit: {
      author: "L. Dufour",
      license: "public domain",
      source: "https://www.biodiversitylibrary.org/item/22673"
    },
    photos: [
      {
        src: STORAGE + MEDIA + "be1.webp",
        author: "UuMUfQ",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Herbstein_Rixfeld_Boletus_edulis_2022_a.png"
      },
      {
        src: STORAGE + MEDIA + "be2.webp",
        author: "Kornowski",
        license: "CC BY 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Boletus_edulis_Bull._Section.jpg"
      },
      {
        src: STORAGE + MEDIA + "be3.webp",
        author: "Thomas Fuhrmann",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Bayerischer_Spessart_Naturpark,_Gemeine_Steinpilz_(Boletus_edulis).jpg"
      },
      {
        src: STORAGE + MEDIA + "be4.webp",
        author: "Dmitry Brant",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Boletus_edulis_3.jpg"
      },
      {
        src: STORAGE + MEDIA + "be5.webp",
        author: "Gouwenaar",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:20141026_gewoon_eekhoorntjesbrood.jpeg"
      }
    ],
    capFrom: 5,
    capTo: 30,
    stipeHeightFrom: 6,
    stipeHeightTo: 25,
    stipeThickFrom: 2,
    stipeThickTo: 7,
    fruitingFrom: 6,
    fruitingTo: 11,
    label: { en: "penny bun", sk: "hríb smrekový" },
    names: {
      en: ["cep", "king bolete", "porcini"],
      sk: ["hríb podborovník", "smrekáč", "hríb obyčajný smrekový"]
    },
    text: {
      en: {
        description: "A large ectomycorrhizal mushroom. Native across Europe, North America, and parts of Asia. Introduced with planted trees at Christchurch in New Zealand, in the Adelaide Hills of Australia, and in pine plantations in South Africa and Zimbabwe.",
        cap: "The cap is usually 5–30 cm across, sometimes larger, convex when young and flattening with age. It is reddish brown, often with a paler margin, and viscid when moist. A mature fruit body can weigh about 1 kg. A specimen from Skye in 1995 had a cap 42 cm across.",
        hymenium: "The tubes are about 1–2 cm deep. The pores are small, about two or three per millimetre. They are whitish and look stuffed when young, then yellow, and later greenish yellow to brown. They do not stain when bruised.",
        stipe: "The stipe is usually 6–25 cm tall and 2–7 cm thick, white or yellowish. It is often swollen at the base when young and more cylindrical later. A fine raised net covers the upper part, sometimes the whole stipe. The flesh in the base is sometimes dark yellow.",
        flesh: "The flesh is white, thick, and firm when young, and becomes somewhat spongy with age. Cut or bruised flesh stays white, with a faint pinkish or vinaceous-brown tinge just beneath the cap cuticle.",
        sporePrint: "Olive brown. The spores are elliptical to spindle-shaped, about 12–17 × 5–7 μm.",
        habitat: "Fruit bodies appear in summer and autumn, singly or in twos and threes. It grows with living trees, including pine, spruce, hemlock, fir, beech, oak, and chestnut, in cool-temperate and subtropical woods.",
        uses: "It is a choice edible mushroom, eaten fresh in season and more often dried and then soaked, in soups, pasta, and risotto. It is not grown as a reliable cultivated crop.",
        confusion: "Lookalikes include Tylopilus felleus, which has a dark net on a pale stipe and pores that become pink, and Rubroboletus satanas, which has a red stipe and flesh that blues when bruised. Boletus aereus, Boletus pinophilus, and Boletus reticulatus are related European species kept separate from Boletus edulis. Molecular studies place names such as Boletus betulicola, Boletus persoonii, Boletus quercicola, and Boletus venturii in the Boletus edulis complex.",},
      sk: {
        description: "Veľká ektomykorízna huba. Pôvodná je v Európe, v Severnej Amerike a v častiach Ázie. Zavlečená bola s vysadenými stromami do Christchurchu na Novom Zélande, do pohoria Adelaide Hills v Austrálii a do borovicových plantáží v Južnej Afrike a v Zimbabwe.",
        cap: "Klobúk je široký 50–300 mm (zvyčajne do 200 mm). Najprv je polguľovitý, belavý a jemne plstnatý, neskôr klenutý až plochý, hnedastý, červenkastohnedý alebo občas sivohnedý, často s úzkym belavým lemom na okraji, za vlhka slizký a napokon lysý.",
        hymenium: "Rúrky sú 10–20 mm dlhé, spočiatku belavé, neskôr žlté až zelenkastožlté. Póry sú drobné, rovnako sfarbené ako rúrky a po otlačení nemenia farbu.",
        stipe: "Hlúbik meria 60–250 × 20–70 mm. Spočiatku je bruchatý až súdkovitý, neskôr kyjakovitý alebo valcovitý, belavý až bledohnedastý. Jemná bledá sieťka pokrýva hornú polovicu (niekedy aj väčšiu časť) hlúbika a býva menej výrazná než pri hríbe dubovom.",
        flesh: "Dužina je biela, hrubá a v mladosti pevná, v starobe špongiovitá. Na reze ostáva nemenne biela, iba tesne pod pokožkou klobúka máva tenký ružovkastý alebo vínovohnedastý pásik.",
        sporePrint: "Výtrusný prach je olivovohnedý. Výtrusy sú elipsoidné až vretenovité, približne 12–17 × 5–7 μm.",
        habitat: "Plodnice sa objavujú v lete a na jeseň, jednotlivo alebo v malých skupinách po dvoch či troch. Rastie so živými stromami vrátane borovice, smreka, jedľovca, jedle, buka, duba a gaštana v lesoch mierneho až subtropického pásma.",
        uses: "Je to výborná a medzi hubármi mimoriadne obľúbená jedlá huba. V kuchyni je všestranne využiteľná čerstvá v polievkach, omáčkach či rizote a výborne sa hodí najmä na sušenie.",
        confusion: "Zámena je možná s jedlým hríbom dubovým (Boletus reticulatus), hríbom sosnovým (Boletus pinophilus) a hríbom bronzovým (Boletus aereus). Na spoločných stanovištiach pod ihličnanmi rastie nejedlý, výrazne horký podhríb žlčový (Tylopilus felleus), ktorý má na hlúbiku tmavú sieťku a v dospelosti ružovkasté rúrky. Jedovatý hríb satanský (Rubroboletus satanas) má červené póry aj hlúbik a na reze modrie.",
        notes: "Molekulárne štúdie zahŕňajú do druhu Boletus edulis aj taxóny uvádzané predtým samostatne ako Boletus betulicola, Boletus persoonii, Boletus quercicola a Boletus venturii."}
    },
    sources: {
      en: [
        { group: "text", name: "Wikipedia", href: "https://en.wikipedia.org/wiki/Boletus_edulis" },
        { group: "name", name: "Index Fungorum", href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=356530", detail: "356530" },
        { group: "name", name: "MycoBank", href: "https://www.mycobank.org/page/Name%20details%20page/3200" },
        { group: "name", name: "GBIF", href: "https://www.gbif.org/species/5954958", detail: "5954958" }
      ],
      sk: [
        { group: "name", name: "Index Fungorum", href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=356530", detail: "356530" },
        { group: "name", name: "MycoBank", href: "https://www.mycobank.org/page/Name%20details%20page/3200" },
        { group: "name", name: "GBIF", href: "https://www.gbif.org/species/5954958", detail: "5954958" },
        { group: "text", name: "Wikipedia", href: "https://sk.wikipedia.org/wiki/Hríb_smrekový" },
        { group: "text", name: "Ottova encyklopédia húb", detail: "Hagara, Ladislav, a kol. Praha: Ottovo nakladatelství, 2015, s. 507–508." },
        { group: "text", name: "Quark", href: "https://www.quark.sk/celebrity-v-risi-hub/" },
        { group: "text", name: "Terminologický portál", href: "https://terminologickyportal.sk/pdf/son/1954/SON_1954_10.pdf", detail: "SON 1954" },
        { group: "text", name: "Wikipedia", href: "https://en.wikipedia.org/wiki/Boletus_edulis", detail: "English" }
      ]
    },
    synonyms: [
      "Leccinum edule (Bull.) Gray",
      "Dictyopus edulis (Bull.) Forq.",
      "Tubiporus edulis (Bull.) P. Karst.",
      "Ceriomyces crassus Battarra"
    ]
  };

  var AMANITA_MEDIA = "photos/Agaricales/Amanitaceae/Amanita_muscaria/";
  var AMANITA = {
    id: 1,
    name: "Amanita muscaria",
    author: "(L.) Lam.",
    family: "Amanitaceae",
    genus: "Amanita",
    order: "Agaricales",
    edibility: "poisonous",
    hymenium: "gills",
    path: ["Fungi", "Dikarya", "Basidiomycota", "Agaricomycotina", "Agaricomycetes", "Agaricomycetidae", "Agaricales", "Amanitaceae", "Amanita"],
    summary: ["Agaricales", "Amanitaceae", "Amanita"],
    added: ADDED,
    plate: STORAGE + AMANITA_MEDIA + "Amanita_muscaria@1600.webp",
    plateGrid: STORAGE + AMANITA_MEDIA + "Amanita_muscaria@400.webp",
    plateCredit: {
      author: "L. Dufour",
      license: "public domain",
      source: "https://www.biodiversitylibrary.org/item/22673"
    },
    photos: [
      {
        src: STORAGE + AMANITA_MEDIA + "am1.webp",
        author: "Chrumps",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Amanita_muscaria_3.jpg"
      },
      {
        src: STORAGE + AMANITA_MEDIA + "am2.webp",
        author: "Hans Hillewaert",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Amanita_muscaria_(young).jpg"
      },
      {
        src: STORAGE + AMANITA_MEDIA + "am3.webp",
        author: "George Chernilevsky",
        license: "CC BY 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Amanita_muscaria_2026_G02.jpg"
      },
      {
        src: STORAGE + AMANITA_MEDIA + "am4.webp",
        author: "Bernard Spragg",
        license: "CC0",
        licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
        source: "https://commons.wikimedia.org/wiki/File:Fly_agaric._(27019255418).jpg"
      },
      {
        src: STORAGE + AMANITA_MEDIA + "am5.webp",
        author: "Spielvogel",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:2_young_amanita_muscaria.jpg"
      }
    ],
    capFrom: 10,
    capTo: 20,
    stipeHeightFrom: 10,
    stipeHeightTo: 25,
    stipeThickFrom: 1,
    stipeThickTo: 2,
    fruitingFrom: 8,
    fruitingTo: 11,
    label: { en: "fly agaric", sk: "muchotrávka červená" },
    names: {
      en: ["fly amanita", "red toadstool"],
      sk: ["mucholapka", "muchomôrka", "mušárka", "mucharka", "muchačka", "hadačka"]
    },
    text: {
      en: {
        description: "An ectomycorrhizal mushroom of hardwood and conifer woods. Frequent through the northern hemisphere, including Britain and Ireland, mainland Europe, Asia, the United States, and Canada. Introduced in Australia (including Tasmania) and New Zealand.",
        cap: "The cap is 10–20 cm across at maturity, red or occasionally orange. It is rounded when young and usually flattens, sometimes becoming slightly concave. Irregular white fragments of the universal veil lie on the cap and can wash off in wet weather.",
        hymenium: "The gills are white, free, and crowded. They turn pale yellow as the fruit body matures.",
        stipe: "The stipe is 10–25 cm long and 1–2 cm thick, white, with a grooved hanging white ring. The base is swollen and keeps white remains of the volva, which break into rings of scales.",
        flesh: "The flesh is white, with a golden-yellow layer just beneath the cap cuticle. The odour is not distinctive.",
        sporePrint: "White. The spores are oval, about 9–13 × 6.5–9 μm, and do not turn blue in iodine.",
        habitat: "Fruit bodies appear from August to November. It grows with hardwoods and conifers, notably birch, pine, and spruce.",
        uses: "The fly agaric is poisonous. It contains muscimol and ibotenic acid, and fatal poisoning is extremely rare.",
        confusion: "Amanita caesarea has an orange cap with a striated margin and a yellow stipe, and is rarely if ever found in northern Europe. Amanita rubescens can have a deep orange cap, and its flesh turns red when damaged. Russula nobilis has a bright red cap but no ring and no volva. Many authorities keep the brown Amanita regalis as a separate species.",
        notes: "It was used against flies."},
      sk: {
        description: "Ektomykorízna huba listnatých a ihličnatých lesov. Častá je na severnej pologuli vrátane Británie a Írska, kontinentálnej Európy, Ázie, Spojených štátov a Kanady. Zavlečená bola do Austrálie (vrátane Tasmánie) a na Nový Zéland.",
        cap: "Klobúk má 100–200 mm v priemere. Najprv je takmer guľovitý, potom klenuto polguľovitý a napokon plochý, v dospelosti na okraji hrebeňovito ryhovaný. Pokožka je šarlátovočervená alebo červenooranžová, zriedkavo oranžovožltá, a pokrývajú ju belavé alebo žltkasté bradavky (zvyšky plachtičky), ktoré môže dážď zmyť. Za vlhka je klobúk lepkavý až slizký, za sucha lesklý.",
        hymenium: "Lupene sú 6–12 mm široké, bruchaté a husté. Sú biele, krémové alebo krémovožltkasté a pri hlúbiku takmer voľné.",
        stipe: "Hlúbik je 80–250 mm dlhý a 10–35 mm hrubý. Je valcovitý, hore užší, dolu širší, zakončený zdurenou hľuzou s niekoľkými sústrednými pásmi bradaviek. Býva biely, zriedkavo slabo žltkastý, najprv plný a neskôr rúrkovito dutý. V hornej tretine má veľký ovisnutý biely alebo žltkastý prsteň s jemne ryhovaným okrajom.",
        flesh: "Dužina je biela. Pod pokožkou klobúka je asi v hrúbke 1 mm zlatožltá. Vôňu má nevýraznú.",
        sporePrint: "Výtrusný prach je biely. Výtrusy sú elipsoidné až oválne, hladké a neamyloidné, veľké približne 9–13 × 6,5–9 μm.",
        habitat: "Plodnice sa objavujú od augusta do novembra. Rastie s listnáčmi aj ihličnanmi, najmä s brezou, borovicou a smrekom.",
        uses: "Je to jedovatá huba s neurotoxickým a psychotropným účinkom. Obsahuje kyselinu iboténovú a muscimol; smrteľné otravy sú však veľmi zriedkavé.",
        confusion: "Na Slovensku v horských smrečinách zriedkavo rastie príbuzná jedovatá muchotrávka kráľovská (Amanita regalis), ktorá sa líši pečeňovohnedým až tmavohnedým klobúkom so žltkastými bradavkami. V teplých listnatých lesoch možno dažďom obmyté plodnice zameniť s výbornou jedlou muchotrávkou cisárskou (Amanita caesarea), ktorá má však zlatožlté lupene, žltý hlúbik a na báze voľnú bielu pošvu. Jedlá muchotrávka červenkastá (Amanita rubescens) má na poranených miestach vínovočervenejúcu dužinu.",
        notes: "Používala sa na trávenie múch."}
    },
    sources: {
      en: [
        { group: "text", name: "First Nature", href: "https://www.first-nature.com/fungi/amanita-muscaria.php" },
        { group: "text", name: "Wikipedia", href: "https://en.wikipedia.org/wiki/Amanita_muscaria" },
        { group: "name", name: "Index Fungorum", href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=161267", detail: "161267" },
        { group: "name", name: "MycoBank", href: "https://www.mycobank.org/page/Name%20details%20page/name/Amanita%20muscaria" },
        { group: "name", name: "GBIF", href: "https://www.gbif.org/species/8168319", detail: "8168319" }
      ],
      sk: [
        { group: "name", name: "Index Fungorum", href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=161267", detail: "161267" },
        { group: "name", name: "MycoBank", href: "https://www.mycobank.org/page/Name%20details%20page/name/Amanita%20muscaria" },
        { group: "name", name: "GBIF", href: "https://www.gbif.org/species/8168319", detail: "8168319" },
        { group: "text", name: "Wikipedia", href: "https://sk.wikipedia.org/wiki/Muchotr%C3%A1vka_%C4%8Derven%C3%A1" },
        { group: "text", name: "nahuby.sk", href: "https://www.nahuby.sk/atlas-hub/Amanita-muscaria/muchotravka-cervena/muchomurka-cervena/ID287" }
      ]
    },
    synonyms: [
      "Agaricus muscarius L.",
      "Hypophyllum muscarium (L.) Paulet",
      "Venenarius muscarius (L.) Earle",
      "Amanitaria muscaria (L.) E.-J. Gilbert",
      "Agaricus puellus Batsch",
      "Agaricus imperialis Batsch",
      "Agaricus nobilis Bolton",
      "Agaricus pseudoaurantiacus Bull.",
      "Amanita circinnata Gray",
      "Amanita formosa Gonn. & Rabenh.",
      "Agaricus aureolus Kalchbr.",
      "Amanita aureola (Kalchbr.) Sacc.",
      "Amanita chrysoblema G.F. Atk."
    ]
  };

  var CHANTERELLE_MEDIA = "photos/Cantharellales/Hydnaceae/Cantharellus_cibarius/";
  var CHANTERELLE = {
    id: 2,
    name: "Cantharellus cibarius",
    author: "Fr.",
    family: "Hydnaceae",
    genus: "Cantharellus",
    order: "Cantharellales",
    edibility: "choice",
    hymenium: "ridges",
    path: ["Fungi", "Dikarya", "Basidiomycota", "Agaricomycotina", "Agaricomycetes", "Cantharellales", "Hydnaceae", "Cantharellus"],
    summary: ["Cantharellales", "Hydnaceae", "Cantharellus"],
    added: ADDED,
    plate: STORAGE + CHANTERELLE_MEDIA + "Cantharellus_cibarius@1600.webp",
    plateGrid: STORAGE + CHANTERELLE_MEDIA + "Cantharellus_cibarius@400.webp",
    plateCredit: {
      author: "L. Dufour",
      license: "public domain",
      source: "https://www.biodiversitylibrary.org/item/22673"
    },
    photos: [
      {
        src: STORAGE + CHANTERELLE_MEDIA + "cc1.webp",
        author: "Strobilomyces",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Chanterelle_Cantharellus_cibarius.jpg"
      },
      {
        src: STORAGE + CHANTERELLE_MEDIA + "cc2.webp",
        author: "Andreas Kunze",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:2007-07-14_Cantharellus_cibarius_cropped.jpg"
      },
      {
        src: STORAGE + CHANTERELLE_MEDIA + "cc3.webp",
        author: "Enrico Tomschke",
        license: "CC BY 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Cantharellus_cibarius_77767941.jpg"
      },
      {
        src: STORAGE + CHANTERELLE_MEDIA + "cc4.webp",
        author: "Heisenberg-pl",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Cantharellus_cibarius_20090717-01.jpg"
      }
    ],
    capTo: 10,
    fruitingFrom: 6,
    fruitingTo: 11,
    label: { en: "chanterelle", sk: "kuriatko jedlé" },
    names: {
      en: ["girolle"],
      sk: ["kuriatka", "kurence", "kurčatka", "kuriačky", "kuríčky", "kuročky", "kurky", "kuriaše", "kuriače", "kohútky", "lišky", "lišočky", "lišovky", "kozačky", "herhubky", "hrajhubky", "hajdahubky", "hubky", "červené hubky", "tanečnice", "kuriatka obyčajné"]
    },
    text: {
      en: {
        description: "An ectomycorrhizal mushroom. Native in Europe from Scandinavia to the Mediterranean, and frequent but localised in Britain and Ireland. In the strict sense it is European. North American fungi once placed under this name are other species.",
        cap: "The cap is up to 10 cm across and usually funnel-shaped, with a wavy irregular margin. The colour runs from light yellow to deep egg-yolk yellow. A fine white bloom sometimes masks it.",
        hymenium: "The underside bears false gills rather than true gills. Thick wrinkled veins run well down the stipe. They are straight near the stipe, and forked and more sinuous toward the cap edge.",
        stipe: "The stipe is the same colour as the cap or somewhat paler, solid, and tapered toward the base, and it merges into the cap. It is 2–8 cm long and 0.5–1.5 cm thick. In clumps the stipes are often curved and sometimes joined near the base.",
        flesh: "The flesh is white. The odour is faintly of apricots. The taste of the uncooked flesh is not distinctive.",
        sporePrint: "Pale yellow to creamy white, sometimes with a slight pinkish tinge. The spores are ellipsoidal and smooth, about 7–11 × 4–6 μm, and do not turn blue in iodine.",
        habitat: "Fruit bodies appear from June to October, and into November in a mild autumn. It grows most often in deciduous woods with oak, chestnut, or hazel, also under conifers, and sometimes on a roadside verge under a deciduous hedge. It prefers acid soil.",
        uses: "The chanterelle is a choice edible. Cooked fruit bodies have a fruity, apricot-like aroma.",
        confusion: "Hygrophoropsis aurantiaca, the false chanterelle, is brighter orange, has crowded true gills, and has flesh the colour of the cap rather than white. Omphalotus olearius and Omphalotus illudens are poisonous, grow on deciduous wood, and have true gills. Cantharellus amethysteus has purple scales on the cap and is kept as a separate species.",
        notes: "Cantharellus pallens is a separate species."},
      sk: {
        description: "Ektomykorízna huba. Pôvodná je v Európe od Škandinávie po Stredomorie; v Británii a Írsku je miestami častá, no lokálna. V užšom zmysle ide o európsky druh; severoamerické huby uvádzané kedysi pod týmto menom patria k iným druhom.",
        cap: "Klobúk má 10–100 mm v priemere. Za mladi je mierne klenutý s podvinutým okrajom, potom plochý a napokon lievikovito prehĺbený, s nepravidelne laločnato zvlneným okrajom. Býva svetložltý až sýto žĺtkovožltý, neskôr blednúci, holý a matný.",
        hymenium: "Na spodnej strane klobúka sú namiesto pravých lupeňov hrubé, vidlicovito rozkonárené nepravé lupene (žilky), vysoké do 3 mm. Sú poprepájané priečnymi žilkami, žĺtkovožlté a zbiehajú hlboko na hlúbik.",
        stipe: "Hlúbik je 30–80 mm vysoký a 8–25 mm hrubý. Je žltý, rovnako sfarbený ako žilky, plný a valcovitý, k báze sa zužuje a hore sa plynulo rozširuje do klobúka.",
        flesh: "Dužina je belavá až bledožltá a pevne mäsitá. Má príjemnú ovocnú, marhuľovú vôňu a mierne korenistú chuť.",
        sporePrint: "Výtrusný prach je bledo okrovožltý až smotanový. Výtrusy sú elipsoidné, hladké a neamyloidné, veľké 7–11 × 4–6 μm.",
        habitat: "Plodnice sa objavujú od júna do októbra a v miernej jeseni aj v novembri. Rastie najčastejšie v listnatých lesoch s dubom, bukom, gaštanom alebo lieskou, aj pod ihličnanmi (najmä smrekom a borovicou), predovšetkým na kyslých pôdach.",
        uses: "Je to výborná a veľmi cenená jedlá huba. Dužina je tuhá, na vzduchu sa takmer nekazí a hmyz plodnice takmer nenapáda. Hodí sa do polievok, omáčok, praženice a mladé plodnice sa nakladajú do sladkokyslého alebo octového nálevu.",
        confusion: "Kuriatku jedlému sa veľmi podobá jedlé kuriatko bledé (Cantharellus pallens), ktoré má mäsitejšie plodnice, belavý povrch klobúka a rastie najmä v listnatých lesoch. Častou zámenou je liškovec pomarančový (Hygrophoropsis aurantiaca), ktorý má živšie oranžové sfarbenie, pružnú dužinu a pravé, husto usporiadané lupene. Na dreve listnáčov v trsoch rastie jedovatá hliva olivová (Omphalotus olearius), ktorá má takisto pravé lupene.",}
    },
    sources: {
      en: [
        { group: "text", name: "First Nature", href: "https://www.first-nature.com/fungi/cantharellus-cibarius.php" },
        { group: "text", name: "Wild Food UK", href: "https://www.wildfooduk.com/mushroom-guide/chanterelle-3/" },
        { group: "text", name: "Wikipedia", href: "https://en.wikipedia.org/wiki/Cantharellus_cibarius" },
        { group: "text", name: "British Mycological Society", href: "https://www.britmycolsoc.org.uk/english-names.html" },
        { group: "name", name: "Index Fungorum", href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=200345", detail: "200345" },
        { group: "name", name: "MycoBank", href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/200345" },
        { group: "name", name: "GBIF", href: "https://www.gbif.org/species/5249504", detail: "5249504" }
      ],
      sk: [
        { group: "name", name: "Index Fungorum", href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=200345", detail: "200345" },
        { group: "name", name: "MycoBank", href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/200345" },
        { group: "name", name: "GBIF", href: "https://www.gbif.org/species/5249504", detail: "5249504" },
        { group: "text", name: "Wikipedia", href: "https://sk.wikipedia.org/wiki/Kuriatko_jedl%C3%A9" },
        { group: "text", name: "nahuby.sk", href: "https://www.nahuby.sk/atlas-hub/Cantharellus-cibarius/kuriatko-jedle/liska-obecna/ID231" }
      ]
    },
    synonyms: [
      "Agaricus chantarellus L.",
      "Merulius chantarellus (L.) Scop.",
      "Cantharellus flavescens Lam.",
      "Hyponevris cantharella (L.) Paulet",
      "Cantharellus vulgaris Gray",
      "Merulius cibarius (Fr.) Westend.",
      "Craterellus cibarius (Fr.) Quél.",
      "Alectorolophoides cibarius (Fr.) Earle",
      "Chanterel chantarellus (L.) Murrill",
      "Agaricus alectorolophoides Schaeff.",
      "Agaricus chantarellus Bolton",
      "Merulius alectorolophoides (Schaeff.) J.F. Gmel.",
      "Cantharellus luteus Wettst.",
      "Chanterel alectorolophoides (Schaeff.) Murrill",
      "Cantharellus edulis Sacc."
    ]
  };

  var RETICULATUS_MEDIA = "photos/Boletales/Boletaceae/Boletus_reticulatus/";
  var RETICULATUS = {
    id: 3,
    name: "Boletus reticulatus",
    author: "Schaeff.",
    family: "Boletaceae",
    genus: "Boletus",
    order: "Boletales",
    edibility: "choice",
    hymenium: "tubes",
    path: ["Fungi", "Dikarya", "Basidiomycota", "Agaricomycotina", "Agaricomycetes", "Agaricomycetidae", "Boletales", "Boletaceae", "Boletus"],
    summary: ["Boletales", "Boletaceae", "Boletus"],
    added: ADDED,
    plate: STORAGE + RETICULATUS_MEDIA + "Boletus_reticulatus@1600.webp",
    plateGrid: STORAGE + RETICULATUS_MEDIA + "Boletus_reticulatus@400.webp",
    plateCredit: {
      author: "Gemini",
      license: "not stated"
    },
    photos: [
      {
        src: "https://storage.googleapis.com/abshrooms-resources/photos/Boletales/Boletaceae/Boletus_reticulatus/br1.webp",
        author: "adrian.benko",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Boletus_reticulatus3.jpg"
      },
      {
        src: "https://storage.googleapis.com/abshrooms-resources/photos/Boletales/Boletaceae/Boletus_reticulatus/br2.webp",
        author: "Lucian Clanet",
        license: "CC BY 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Boletus_aestivalis_8.jpg"
      },
      {
        src: "https://storage.googleapis.com/abshrooms-resources/photos/Boletales/Boletaceae/Boletus_reticulatus/br3.webp",
        author: "Lucian Clanet",
        license: "CC BY 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Boletus_aestivalis_5.jpg"
      },
      {
        src: "https://storage.googleapis.com/abshrooms-resources/photos/Boletales/Boletaceae/Boletus_reticulatus/br4.webp",
        author: "Jivko Jelyazkov",
        license: "CC0 1.0",
        licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
        source: "https://commons.wikimedia.org/wiki/File:Boletus_aestivalis_10.jpg"
      },
      {
        src: "https://storage.googleapis.com/abshrooms-resources/photos/Boletales/Boletaceae/Boletus_reticulatus/br5.webp",
        author: "Archenzo",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:BoletusAestivalis.JPG"
      }
    ],
    capFrom: 10,
    capTo: 20,
    stipeHeightFrom: 8,
    stipeHeightTo: 18,
    stipeThickFrom: 2.5,
    stipeThickTo: 6,
    fruitingFrom: 6,
    fruitingTo: 10,
    label: { en: "summer bolete", sk: "hríb dubový" },
    names: {
      en: ["summer cep"],
      sk: ["hríb dubák", "hríb sieťkovaný", "dubák", "hríb obyčajný - dubák"]
    },
    text: {
      en: {
        description: "An ectomycorrhizal mushroom. A common bolete of Mediterranean, temperate, and hemiboreal woods throughout Europe. It is rare in Britain and Ireland and more frequent in southern Europe. Records from North America and Japan once placed under this name belong to other species, and a southern African record under planted pine is treated as likely introduced.",
        cap: "The cap is typically 10–20 cm across (averaging 7–12 cm in smaller specimens), light yellowish brown to mid brown. It starts velvety, then becomes wrinkled or finely cracked in dry weather. The margin is not markedly paler than the centre.",
        hymenium: "The tubes and small pores are white when young, becoming greenish yellow with age. They do not change colour significantly when cut or bruised.",
        stipe: "The stipe is 8–18 cm long and 2.5–6 cm thick, more often barrel-shaped and only occasionally club-shaped. A paler raised net stands on a pale to mid-brown ground, darkest toward the apex and the base and somewhat paler and pinker near the swollen centre. The net usually runs well down the stipe and sometimes to the base.",
        flesh: "The flesh is white. Cut flesh stays white and yellows slightly with age. It is less firm than the flesh of Boletus edulis or Boletus aereus. The odour is earthy. The taste is pleasant and mild, though not as strong as that of the penny bun.",
        sporePrint: "Olive brown (olivaceous snuff-brown). The spores are subfusiform and smooth, about 13–15 × 4.5–5.5 μm.",
        habitat: "Fruit bodies appear from June to October in Britain and Ireland, and through to February in some parts of southern Europe. It grows on soil under broadleaved trees, notably beech and oaks, also with other broadleaved trees, and occasionally under spruce. It fruits a little earlier than Boletus edulis.",
        uses: "It is a choice edible, as good as Boletus edulis and used in the same recipes. The texture and taste are almost the same, and the flesh is somewhat less firm.",
        confusion: "Boletus edulis has a paler stipe, a white net, and a brown cap with a whitish margin, and it fruits later. Boletus aereus has a darker cap and much firmer flesh. Tylopilus felleus has a darker net on a paler stipe, a pinkish tinge to the pores, and a very bitter taste. Poisonous red boletes, such as Rubroboletus satanas, are red in the flesh or the pores, or they stain blue at once when cut.",
        notes: "It is recorded east to Primorsky Krai. A 2019 assessment places it as Least Concern, with a stable population."},
      sk: {
        description: "Ektomykorízna huba. Bežný hríb stredomorských, miernych a hemiboreálnych lesov v celej Európe; v Británii a Írsku je zriedkavý, v južnej Európe častejší. Nálezy zo Severnej Ameriky a z Japonska uvádzané kedysi pod týmto menom patria k iným druhom a juhoafrický nález pod vysadenou borovicou sa pokladá za pravdepodobné zavlečenie.",
        cap: "Klobúk má 60–300 mm v priemere. Najprv je polguľovitý, potom polguľovito klenutý a v dospelosti plocho rozprestretý. Farba je bledo špinavohnedá, sivoplavá až kožovohnedá. Povrch je matný, jemne zamatový až plstnatý a zostáva tak pomerne dlho. Býva zvyčajne bledší ako pri hríbe smrekovom a v starobe za sucha je často políčkovito rozpukaný. Pod lupou je pokožka vláknito plstnatá, nikdy nie bielo oinovatená.",
        hymenium: "Rúrky sú 10–35 mm dlhé, pri hlúbiku vykrojené, v mladosti biele a čoskoro žltozelené. Póry sú drobné, okrúhle a rovnako sfarbené ako rúrky. Otlačením nemenia farbu. V dospelosti sú žlté až žltozelené, často s olivovým odtieňom.",
        stipe: "Hlúbik je 80–250 mm dlhý a 20–70 mm hrubý. Najprv je bruchatý až súdkovitý, v dospelosti valcovitý. Celý, alebo minimálne do polovice, nesie výraznú sieťku. Tá je najprv krémová a postupne hnedne a nikdy nie je tmavšia ako základná farba hlúbika. Hlúbik je už v mladosti hnedastý, potom škoricovohnedý alebo kožovohnedý, vždy tmavší ako hlúbik hríba smrekového alebo hríba brezového. Báza býva belavá.",
        flesh: "Dužina je v celej plodnici biela, v starobe belavá, nad rúrkami niekedy žltkastá a pod pokožkou klobúka bledohnedá. Je mäkšia ako dužina hríba smrekového a často ju napadajú larvy hmyzu. Chuť je lahodná a vôňa veľmi príjemná, hubová.",
        sporePrint: "Výtrusný prach je olivovohnedý. Výtrusy sú vretenovité a hladké, veľké 13–15 × 4,5–5,5 μm.",
        habitat: "Plodnice sa v Británii a Írsku objavujú od júna do októbra a v niektorých častiach južnej Európy až do februára. Rastie v pôde pod listnatými stromami, najmä pod bukom a dubom, aj pod inými listnáčmi a príležitostne pod smrekom. Plodí o niečo skôr ako hríb smrekový. Na Slovensku rastie v listnatých a zmiešaných lesoch (len zriedka v čistých ihličnatých), najčastejšie pod dubom, bukom, hrabom a lieskou; prvá vlna rastie v máji a júni a druhá od konca augusta do októbra.",
        uses: "Je to výborná jedlá huba, jeden z najchutnejších hríbovitých druhov, a v kuchyni sa používa rovnako ako hríb smrekový. Výborne sa hodí na sušenie, do polievok a omáčok.",
        confusion: "Od hríba smrekového (Boletus edulis) sa líši matným, bledším a za sucha často políčkovito rozpukaným klobúkom, tmavším hlúbikom a svetlou sieťkou siahajúcou takmer po bázu. Hríb bronzový (Boletus aereus) má tmavohnedý až čiernohnedý klobúk s bielym oinovatením pri okraji a rastie v teplých oblastiach pod dubmi a bukmi. Hríb sosnový (Boletus pinophilus) má hrboľatý červenohnedý klobúk a viaže sa najmä na borovice. Nejedlý podhríb žlčový (Tylopilus felleus) má horkú dužinu, tmavú sieťku na hlúbiku a v dospelosti ružovkasté póry.",
        notes: "Hodnotenie IUCN z roku 2019 ho zaraďuje medzi málo dotknuté druhy (Least Concern)."}
    },
    sources: {
      en: [
        { group: "text", name: "First Nature", href: "https://www.first-nature.com/fungi/boletus-reticulatus.php" },
        { group: "text", name: "Wild Food UK", href: "https://www.wildfooduk.com/mushroom-guide/summer-bolete/" },
        { group: "text", name: "Wikipedia", href: "https://en.wikipedia.org/wiki/Boletus_reticulatus" },
        { group: "text", name: "IUCN", href: "https://www.iucnredlist.org/species/122090240/222968893" },
        { group: "name", name: "Index Fungorum", href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=200521", detail: "200521" },
        { group: "name", name: "MycoBank", href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/200521" },
        { group: "name", name: "GBIF", href: "https://www.gbif.org/species/5954691", detail: "5954691" }
      ],
      sk: [
        { group: "name", name: "Index Fungorum", href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=200521", detail: "200521" },
        { group: "name", name: "MycoBank", href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/200521" },
        { group: "name", name: "GBIF", href: "https://www.gbif.org/species/5954691", detail: "5954691" },
        { group: "text", name: "Wikipedia", href: "https://sk.wikipedia.org/wiki/Hr%C3%ADb_dubov%C3%BD" },
        { group: "text", name: "nahuby.sk", href: "https://www.nahuby.sk/atlas-hub/Boletus-reticulatus/hrib-dubovy/hrib-dubovy/ID122" }
      ]
    },
    synonyms: [
      "Suillus reticulatus (Schaeff.) Kuntze",
      "Boletus mutabilis Batsch",
      "Tubiporus aestivalis Paulet",
      "Boletus aestivalis (Paulet) Fr.",
      "Versipellis aestivalis (Paulet) Quél.",
      "Dictyopus aestivalis (Paulet) Quél.",
      "Suillus aestivalis (Paulet) Kuntze",
      "Boletus carpinaceus Velen."
    ]
  };

  var PROCERA_MEDIA = "photos/Agaricales/Agaricaceae/Macrolepiota_procera/";
  var PROCERA = {
    id: 4,
    name: "Macrolepiota procera",
    author: "(Scop.) Singer",
    family: "Agaricaceae",
    genus: "Macrolepiota",
    order: "Agaricales",
    edibility: "choice",
    hymenium: "gills",
    path: [
      "Fungi",
      "Dikarya",
      "Basidiomycota",
      "Agaricomycotina",
      "Agaricomycetes",
      "Agaricomycetidae",
      "Agaricales",
      "Agaricaceae",
      "Macrolepiota"
    ],
    summary: [
      "Agaricales",
      "Agaricaceae",
      "Macrolepiota"
    ],
    added: "2026-10-23",
    plate: STORAGE + PROCERA_MEDIA + "Macrolepiota_procera@1600.webp",
    plateGrid: STORAGE + PROCERA_MEDIA + "Macrolepiota_procera@400.webp",
    plateCredit: {
      author: "W. G. Farlow",
      license: "not stated"
    },
    photos: [
      {
        src: "https://storage.googleapis.com/abshrooms-resources/photos/Agaricales/Agaricaceae/Macrolepiota_procera/mp1.webp",
        author: "Holger Krisp",
        license: "CC BY 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Parasol-Macrolepiota-procera.jpg"
      },
      {
        src: "https://storage.googleapis.com/abshrooms-resources/photos/Agaricales/Agaricaceae/Macrolepiota_procera/mp2.webp",
        author: "Chrumps",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Macrolepiota-procera.jpg"
      },
      {
        src: "https://storage.googleapis.com/abshrooms-resources/photos/Agaricales/Agaricaceae/Macrolepiota_procera/mp3.webp",
        author: "Gouwenaar",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:20080829_grote_parasolzwam.jpeg"
      },
      {
        src: "https://storage.googleapis.com/abshrooms-resources/photos/Agaricales/Agaricaceae/Macrolepiota_procera/mp4.webp",
        author: "A.BourgeoisP",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:2015-11_-_Terril_Saint-Charles_-_26.JPG"
      },
      {
        src: "https://storage.googleapis.com/abshrooms-resources/photos/Agaricales/Agaricaceae/Macrolepiota_procera/mp5.webp",
        author: "Rad.dekk",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Bedle_mezi_podzimn%C3%ADm_list%C3%ADm.jpg"
      }
    ],
    capFrom: 10,
    capTo: 25,
    stipeHeightTo: 30,
    stipeThickFrom: 1,
    stipeThickTo: 1.5,
    fruitingFrom: 7,
    fruitingTo: 11,
    label: {
      en: "parasol",
      sk: "bedľa vysoká"
    },
    names: {
      en: [
        "parasol mushroom"
      ],
      sk: [
        "bedľa jedlá",
        "bedľa obyčajná",
        "ambrelka",
        "ambrél",
        "ambrélovka",
        "anbríľovka",
        "bagoňa",
        "bedľa",
        "betľa",
        "brezovec",
        "crnovka",
        "godola",
        "chochluša",
        "jedlá bedľa",
        "kráľovná",
        "kochlačka",
        "kochlička",
        "kozarova mac",
        "kozarova mať",
        "kozia nôžka",
        "kožušárka",
        "kuku",
        "kuky",
        "kuky-muky",
        "parapel",
        "parazól",
        "parazólek",
        "pastierska palica",
        "pyšný mládenec",
        "srnka",
        "srnula",
        "srňavka",
        "svahovka",
        "svákovka",
        "vysoká nôžka"
      ]
    },
    text: {
      en: {
        description: "A saprobic mushroom. Frequent in southern Britain and Ireland, and less common in northern England and Scotland except on sheltered coasts. It also occurs in most of mainland Europe, and through temperate Eurasia. North American records are still unconfirmed.",
        cap: "The cap is 10–25 cm across, occasionally reaching 30 cm. It starts spherical and pale brown to tan, with a darker brown crown that breaks into concentric rings of scales as the skin cracks, and it expands until it is flat with a prominent dark umbo.",
        hymenium: "The gills are broad, crowded, and free, ending some distance from the stipe. They are white or pale cream.",
        stipe: "The stipe is up to 30 cm tall and 1–1.5 cm thick, reaching 2.5 cm across the bulbous base, and narrows slightly toward the apex. The bulb lacks a volva. The surface is white or cream, covered with small brown scales that form a banded snakeskin pattern. A thick, double-edged ring about two thirds of the way up persists and becomes loose enough to slide along the stipe. Inside, the stipe is tough, fibrous, and hollow.",
        flesh: "The flesh is white and does not change significantly when cut. In the cap it is thin, soft, and slightly spongy. In the stipe it is tough and fibrous. The odour is pleasantly nutty or not distinctive, and the taste is sweet and nutty.",
        sporePrint: "White or very pale cream. The spores are ellipsoidal to ovoid, smooth, and thick-walled, about 12–18 × 8–12 μm, with a small germ pore. They are dextrinoid.",
        habitat: "Fruit bodies appear from June to November in Britain and Ireland, and later in southern Europe. It grows in woodland clearings, open woods, verges, and grassy places beside woodland, alone or in scattered troops and rings, also in permanent pasture, among ferns, and on stable sand dunes, and rarely on disturbed ground such as gardens and allotments.",
        uses: "It is a choice edible, and the fruit bodies should be cooked. The caps are the part used, including fried as a schnitzel. The stems are tough, though they are also chopped for soup or dried and ground. The mushroom is fried, dried, or stewed.",
        confusion: "Chlorophyllum rhacodes, the shaggy parasol, is smaller, with larger reflexed scales and a stipe that lacks the snakeskin pattern. Its flesh turns red when cut, and for many people it is poisonous. Chlorophyllum molybdites has greenish gills and a green spore print, and its stipe lacks the snakeskin pattern. Small Lepiota species, the dapperlings, can be seriously poisonous, so a fully expanded cap under 10 cm is better left. White buttons of Amanita, including Amanita pantherina, are another hazard; the parasol has darker scales on a paler cap and should be gathered only once the cap has opened past the button stage.",
        notes: "Var. procera and var. pseudo-olivascens are recognised. The second develops olive stains on the cap and grows under conifers. The species is widespread in temperate Eurasia, and North American records still need confirmation."},
      sk: {
        description: "Saprotrofná huba. V južnej Británii a Írsku je častá, v severnom Anglicku a Škótsku menej častá, okrem chránených pobreží. Vyskytuje sa aj vo väčšine kontinentálnej Európy a v miernom pásme Eurázie. Severoamerické nálezy sú zatiaľ nepotvrdené.",
        cap: "Klobúk je 70–300 mm široký, bežne od 100 mm. V mladosti je vajcovitý, guľovitý až zvoncovitý, v dospelosti plocho klenutý až plochý, v strede s výrazným zaobleným bradavkovitým hrboľom. Najprv je hladký a celý hnedý až tmavohnedý. Rastom sa rozpuká na nepravidelné, koncentricky usporiadané šupiny, medzi ktorými je špinavobelavý, vláknito šupinkatý podklad. Okolo hrboľa zostáva súvislo hnedý. Okraj je belavo páperistý.",
        hymenium: "Lupene sú 10–18 mm široké, husté a prestriedané. Od hlúbika sú odsadené úzkou medzerou. Sú biele až krémové a pri okraji zaoblené.",
        stipe: "Hlúbik je 180–400 mm dlhý, bežne od 200 mm, a 10–22 mm hrubý, na báze až 40 mm. Je takmer valcovitý, hore stenčený a dole hľuzovito zhrubnutý. Najprv je vatovito vypchatý, neskôr rúrkovito dutý a drevnatý. Za mladi je celý hnedý až tmavohnedý, neskôr sa rozpukáva na nepravidelné priečne šupiny (hadovitý vzor) a medzi nimi presvitá bledšia až biela dužina. V hornej tretine je posuvný prsteň, hrubý, blanitý až vatovitý, s dvoma rozstrapkanými okrajmi, navrchu špinavobelavý a naspodku hnedastý. Hľuzovitá báza býva od mycélia bielo plstnatá.",
        flesh: "Dužina je biela a na reze nemení farbu. V klobúku je v dospelosti mäkká a vatovitá, v hlúbiku tvrdá až vláknito drevnatá. Má príjemnú orieškovú chuť aj vôňu.",
        sporePrint: "Výtrusný prach je biely až bledokrémový. Výtrusy majú 12,5–18 × 8–12 µm. Sú elipsoidné až vajcovité, hladké, hrubostenné, bezfarebné a dextrinoidné, s nápadným klíčnym pórom.",
        habitat: "Plodnice sa v Európe objavujú od júna (ojedinele už od mája) do novembra. Rastie jednotlivo, v malých skupinách alebo v čarovných kruhoch na lesných svetlinách, okrajoch listnatých a ihličnatých lesov, rúbaniskách, lúkach, trvalých pasienkoch, medzi papradím, na ustálených pieskových dunách a pri cestách, zriedkavo aj v parkoch a záhradách. Na Slovensku je hojná od nížin po podhorské oblasti.",
        uses: "Je to výborná jedlá huba. Mladé, ešte uzavreté klobúky sú vhodné na plnenie alebo do octového nálevu. Dospelé klobúky sa vyprážajú v trojobale na spôsob viedenského rezňa a hodia sa aj do praženice. Plodnice (vrátane tuhých hlúbikov) sú vhodné aj na sušenie a prípravu hubového prášku.",
        confusion: "Možná je zámena s jedlou bedľou štíhlou (Macrolepiota mastoidea) a s druhmi z okruhu bedle červenejúcej (Chlorophyllum rhacodes), ktorých dužina na reze červenie a na hlúbiku nemajú hadovité šupinkovanie. V trávnatých a synantropných biotopoch hrozí zámena s jedovatou bedľou záhradnou (Chlorophyllum brunneum) a s prudko jedovatými drobnými druhmi rodu bedlička (Lepiota), ktoré majú spravidla klobúk užší ako 10 cm. Nerozvinuté plodnice možno pri nepozornosti zameniť s mladými plodnicami muchotrávok, napríklad muchotrávky tigrovanej (Amanita pantherina).",}
    },
    sources: {
      en: [
        {
          group: "text",
          name: "First Nature",
          href: "https://www.first-nature.com/fungi/macrolepiota-procera.php"
        },
        {
          group: "text",
          name: "Wild Food UK",
          href: "https://www.wildfooduk.com/mushroom-guide/parasol/"
        },
        {
          group: "text",
          name: "Wikipedia",
          href: "https://en.wikipedia.org/wiki/Macrolepiota_procera"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=287857",
          detail: "287857"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/287857"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/8914748",
          detail: "8914748"
        }
      ],
      sk: [
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=287857",
          detail: "287857"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/287857"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/8914748",
          detail: "8914748"
        },
        {
          group: "text",
          name: "Wikipedia",
          href: "https://sk.wikipedia.org/wiki/Bed%C4%BEa_vysok%C3%A1"
        }
      ]
    },
    synonyms: [
      "Agaricus procerus Scop.",
      "Lepiota procera (Scop.) Gray",
      "Amanita procera (Scop.) Fr.",
      "Leucocoprinus procerus (Scop.) Pat.",
      "Mastocephalus procerus (Scop.) Kuntze",
      "Lepiotophyllum procerum (Scop.) Locq.",
      "Agaricus procerus O.F. Müll.",
      "Agaricus annulatus Lightf.",
      "Agaricus colubrinus Bull.",
      "Agaricus antiquatus Batsch",
      "Agaricus squamosus Vill.",
      "Agaricus concentricus Pers."
    ]
  };

  var PHALLOIDES_MEDIA = "photos/Agaricales/Amanitaceae/Amanita_phalloides/";
  var PHALLOIDES = {
    id: 5,
    name: "Amanita phalloides",
    author: "(Vaill. ex Fr.) Link",
    family: "Amanitaceae",
    genus: "Amanita",
    order: "Agaricales",
    edibility: "deadly",
    hymenium: "gills",
    path: ["Fungi", "Dikarya", "Basidiomycota", "Agaricomycotina", "Agaricomycetes", "Agaricomycetidae", "Agaricales", "Amanitaceae", "Amanita"],
    summary: ["Agaricales", "Amanitaceae", "Amanita"],
    added: "2026-10-23",
    plate: STORAGE + PHALLOIDES_MEDIA + "Amanita_phalloides@1600.webp",
    plateGrid: STORAGE + PHALLOIDES_MEDIA + "Amanita_phalloides@400.webp",
    plateCredit: {
      author: "L. Dufour",
      license: "public domain",
      source: "https://www.biodiversitylibrary.org/item/22673"
    },
    photos: [
      {
        src: STORAGE + PHALLOIDES_MEDIA + "ap1.webp",
        author: "Krzysztof Ślusarczyk",
        license: "CC BY 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by/3.0",
        source: "https://commons.wikimedia.org/wiki/File:03_Amanita_phalloides_in_Zalas,_Poland.jpg"
      },
      {
        src: STORAGE + PHALLOIDES_MEDIA + "ap2.webp",
        author: "Krzysztof Ślusarczyk",
        license: "CC BY 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by/3.0",
        source: "https://commons.wikimedia.org/wiki/File:02_Amanita_phalloides_in_Zalas,_Poland.jpg"
      },
      {
        src: STORAGE + PHALLOIDES_MEDIA + "ap3.webp",
        author: "Krzysztof Ślusarczyk",
        license: "CC BY 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by/3.0",
        source: "https://commons.wikimedia.org/wiki/File:01_Amanita_phalloides_in_Zalas,_Poland.jpg"
      },
      {
        src: STORAGE + PHALLOIDES_MEDIA + "ap4.webp",
        author: "Archenzo",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Amanita_phalloides_1.JPG"
      },
      {
        src: STORAGE + PHALLOIDES_MEDIA + "ap5.webp",
        author: "Stu's Images",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Amanita_phalloides_-_young.JPG"
      }
    ],
    capFrom: 5,
    capTo: 15,
    stipeHeightFrom: 7,
    stipeHeightTo: 15,
    fruitingFrom: 7,
    fruitingTo: 11,
    label: { en: "death cap", sk: "muchotrávka zelená" },
    names: {
      en: [
        "deathcap",
        "death cup",
        "deadly amanita"
      ],
      sk: [
        "muchotrávka hľuznatá",
        "muchotrávka hľúznatá",
        "muchotrávka hľuzovitá",
        "muchotrávka hľúzovitá",
        "katmanka hľuznatá",
        "katmanka hľuzovitá",
        "pečiarka jedovatá",
        "huba uzlovatá"
      ]
    },
    text: {
      en: {
        description: "An ectomycorrhizal mushroom of broadleaf woods, especially with oak. Native across much of Europe, from Ireland and southern Scandinavia through the Mediterranean to Morocco and Algeria, with reports from northern Iran. Introduced in North America, Australia, South Africa, and parts of South America.",
        cap: "The cap is 5–15 cm across. It starts egg-shaped and almost white, then becomes yellow, bronze, or olive, usually darker in the centre, and flattens with age. The margin is not lined. Veil fragments are soon lost, though a large creamy patch can remain in dry weather. An all-white form occurs.",
        hymenium: "The gills are free, broad, and crowded. They are pure white at first and turn cream with age, sometimes with a slight pinkish tinge.",
        stipe: "The stipe is 7–15 cm long and off-white, with a paler zig-zag mottling. A fragile hanging ring usually remains at maturity. The base is swollen and sits in a large white sack-like volva, often tinged green inside.",
        flesh: "The flesh is white and does not change colour when cut. The odour is not distinctive when young. Old fruit bodies smell unpleasant and sickly sweet.",
        sporePrint: "White. The spores are smooth and ellipsoid, about 7–12 × 6–9 μm, and turn blue in iodine.",
        habitat: "Fruit bodies appear in summer and autumn, from July to November in Britain and Ireland. It grows with broadleaf trees, especially oak, and less often with conifers.",
        uses: "It is deadly. It contains amatoxins, which cooking and freezing do not destroy, and it causes most fatal mushroom poisonings.",
        confusion: "Amanita citrina usually keeps brownish cream veil fragments on the cap and has a rimmed bulb rather than an open sack-like volva. Agaricus species have no volva, and their gills become pink and then dark brown. The white form can resemble Amanita virosa. Green Russula species, including Russula aeruginea, have brittle flesh and neither a ring nor a volva. A young button can resemble a puffball until it is cut open and the volva and gills show.",
        notes: "All-white fruit bodies are a colour form."},
      sk: {
        description: "Ektomykorízna huba listnatých lesov, najmä s dubom. Pôvodná je vo veľkej časti Európy, od Írska a južnej Škandinávie cez Stredomorie po Maroko a Alžírsko, s údajmi zo severného Iránu. Zavlečená je v Severnej Amerike, Austrálii, Južnej Afrike a v častiach Južnej Ameriky.",
        cap: "Klobúk má priemer 50–150 mm. Najprv je vajcovitý až zvoncovito klenutý, neskôr plocho klenutý až rozprestretý, s hladkým neryhovaným okrajom. Sfarbený je žltozeleno, olivovozeleno až zelenohnedo (v strede býva tmavší), s charakteristickými jemne vrastenými lúčovitými vláknami; vyskytuje sa aj čisto biela forma (var. alba). Povrch je za vlhka lepkavý, za sucha hodvábne lesklý a zvyčajne bez útržkov plachtičky.",
        hymenium: "Lupene sú pri hlúbiku voľné, husté a široké, trvalo biele až belavé, v dospelosti niekedy so slabým zelenkastým alebo krémovým nádychom.",
        stipe: "Hlúbik je vysoký 70–150 mm a hrubý 10–20 mm, takmer valcovitý, hore mierne stenčený, najprv plný, neskôr vatovito vypchatý až dutý. Je belavý so žltozelenkastým kľukatým pásikavým mramorovaním. V hornej časti má biely, jemne ryhovaný ovisnutý prsteň a naspodku je hľuzovito zhrubnutý, obalený voľnou bielou až zelenkastou laločnatou pošvou, ktorá býva často ukrytá v pôde.",
        flesh: "Dužina je biela, pod pokožkou klobúka slabo žltozelenkastá a na reze nemení farbu. Mladé plodnice majú nevýraznú alebo jemne medovo sladkastú vôňu, staré plodnice nepríjemne zdochlinovo páchnu.",
        sporePrint: "Výtrusný prach je biely. Výtrusy sú široko elipsoidné, hladké a amyloidné, veľké 8–10 × 7–8 μm.",
        habitat: "Plodnice sa objavujú v lete a na jeseň, od júla do novembra. Rastie s listnáčmi, najmä s dubom, bukom a hrabom, a zriedkavejšie aj s ihličnanmi.",
        uses: "Je smrteľne jedovatá. Obsahuje amatoxíny a falotoxíny, ktoré varenie, sušenie ani mrazenie nezničia, a spôsobuje väčšinu smrteľných otráv hubami s ťažkým poškodením pečene a obličiek.",
        confusion: "Mierne jedovatá až nejedlá muchotrávka citrónová (Amanita citrina) má na klobúku mapovité zvyšky plachtičky, prirastenú obriezkovitú pošvu na hľuze a jej dužina páchne po surových zemiakoch. Zelené druhy plávok, napríklad plávka trávovozelená (Russula aeruginea), plávka zelenkastá (Russula virescens) či plávka buková (Russula heterophylla), majú krehkú lámavú dužinu a nemajú ani prsteň, ani pošvu. Biela forma muchotrávky zelenej sa zamieňa s jedlými pečiarkami (Agaricus), ktoré však nemajú pošvu a ich lupene sa menia z ružovej na čokoládovohnedú, alebo so smrteľne jedovatou muchotrávkou končistou (Amanita virosa) a muchotrávkou jarnou (Amanita verna). Mladé plodnice uzavreté v pošve pripomínajú prášnice alebo vajíčka muchotrávky cisárskej (Amanita caesarea).",}
    },
    sources: {
      en: [
        { group: "text", name: "First Nature", href: "https://www.first-nature.com/fungi/amanita-phalloides.php" },
        { group: "text", name: "Wikipedia", href: "https://en.wikipedia.org/wiki/Amanita_phalloides" },
        { group: "text", name: "MushroomExpert", href: "https://www.mushroomexpert.com/amanita_phalloides.html" },
        { group: "name", name: "Species Fungorum", href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=178962", detail: "178962" },
        { group: "name", name: "MycoBank", href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/178962" },
        { group: "name", name: "GBIF", href: "https://www.gbif.org/species/5240325", detail: "5240325" }
      ],
      sk: [
        { group: "name", name: "Species Fungorum", href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=178962", detail: "178962" },
        { group: "name", name: "MycoBank", href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/178962" },
        { group: "name", name: "GBIF", href: "https://www.gbif.org/species/5240325", detail: "5240325" },
        { group: "text", name: "Wikipedia", href: "https://sk.wikipedia.org/wiki/Muchotr%C3%A1vka_zelen%C3%A1" },
        { group: "text", name: "nahuby.sk", href: "https://www.nahuby.sk/atlas-hub/Amanita-phalloides/muchotravka-zelena/muchomurka-zelena/ID304" }
      ]
    },
    synonyms: [
      "Agaricus phalloides Vaill. ex Fr.",
      "Venenarius phalloides (Vaill. ex Fr.) Murrill",
      "Amanitina phalloides (Fr.) E.-J. Gilbert",
      "Amanita viridis Pers.",
      "Agaricus virosus Vittad."
    ]
  };

  var PANTHERINA_MEDIA = "photos/Agaricales/Amanitaceae/Amanita_pantherina/";
  var PANTHERINA = {
    id: 6,
    name: "Amanita pantherina",
    author: "(DC.) Krombh.",
    family: "Amanitaceae",
    genus: "Amanita",
    order: "Agaricales",
    edibility: "poisonous",
    hymenium: "gills",
    path: ["Fungi", "Dikarya", "Basidiomycota", "Agaricomycotina", "Agaricomycetes", "Agaricomycetidae", "Agaricales", "Amanitaceae", "Amanita"],
    summary: ["Agaricales", "Amanitaceae", "Amanita"],
    added: "2026-10-23",
    plate: STORAGE + PANTHERINA_MEDIA + "Amanita_pantherina@1600.webp",
    plateGrid: STORAGE + PANTHERINA_MEDIA + "Amanita_pantherina@400.webp",
    plateCredit: {
      author: "L. Dufour",
      license: "public domain",
      source: "https://www.biodiversitylibrary.org/item/22673"
    },
    photos: [
      {
        src: STORAGE + PANTHERINA_MEDIA + "pn1.webp",
        author: "George Chernilevsky",
        license: "Public domain",
        source: "https://commons.wikimedia.org/wiki/File:Amanita_pantherina_2013_G1.jpg"
      },
      {
        src: STORAGE + PANTHERINA_MEDIA + "pn2.webp",
        author: "Thomas Pruß",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Amanita_pantherina_(3).JPG"
      },
      {
        src: STORAGE + PANTHERINA_MEDIA + "pn3.webp",
        author: "Lukas",
        license: "CC BY-SA 2.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
        source: "https://commons.wikimedia.org/wiki/File:Amanita_pantherina_(30629736747).jpg"
      },
      {
        src: STORAGE + PANTHERINA_MEDIA + "pn4.webp",
        author: "Lukas",
        license: "CC BY-SA 2.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
        source: "https://commons.wikimedia.org/wiki/File:Amanita_pantherina_(44845981114).jpg"
      },
      {
        src: STORAGE + PANTHERINA_MEDIA + "pn5.webp",
        author: "Lukas",
        license: "CC BY-SA 2.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
        source: "https://commons.wikimedia.org/wiki/File:Amanita_pantherina_(45570877151).jpg"
      }
    ],
    capFrom: 5,
    capTo: 12,
    stipeHeightFrom: 6,
    stipeHeightTo: 12,
    fruitingFrom: 8,
    fruitingTo: 11,
    label: { en: "panther cap", sk: "muchotrávka tigrovaná" },
    names: {
      en: [
        "panthercap",
        "false blusher",
        "panther amanita"
      ]
    },
    text: {
      en: {
        description: "An ectomycorrhizal mushroom of deciduous woodland, especially beech, and of mixed woods with oak. It is a rare find in Britain and Ireland and much more frequent farther south in Europe. It is also recorded across western Asia, and it occurs less often with conifers and rarely in meadows.",
        cap: "The cap is 5–12 cm across. It is shiny brown or grey-brown, and the colour runs from pale ochre to very dark brown. The margin is very finely lined. The cap starts domed and flattens with age. Pure white remains of the universal veil are usually dotted fairly evenly over the surface. They can wash off in wet weather.",
        hymenium: "The gills are white, free, crowded, and fairly broad.",
        stipe: "The stipe is 6–12 cm long and pure white. A hanging ring is chunky at first and often becomes thin and floppy with age. The slightly swollen base keeps the white remains of the volva, usually as one or more woolly rings, or as a helix, above a narrow gutter.",
        flesh: "The flesh is white and does not turn pink or red when cut. The odour is not distinctive, though bruised flesh smells slightly of radish.",
        sporePrint: "White. The spores are smooth, broadly ellipsoidal to ovoid, 8–12 × 6.7–7.5 μm, and do not turn blue in iodine.",
        habitat: "Fruit bodies appear from August to November in Britain and Ireland, and often as much as three months later in the far south of Europe. It grows mainly with broadleaf trees, most often oak or beech, sometimes with conifers, and occasionally with common rockrose where no trees stand nearby.",
        uses: "It is poisonous, and more toxic than Amanita muscaria. It contains ibotenic acid and muscimol. Deaths are reported, though they are uncommon.",
        confusion: "Amanita excelsa has grey veil fragments on the cap, a stouter stipe, and no distinct volval gutter. Amanita rubescens turns pink or red on the stipe and in the cap flesh when damaged. The white veil spots can wash off in wet weather, so a bare brown cap is still possible.",
        notes: "In western North America the brown amanitas given this name are other species, and the measurements given here are for European fruit bodies."},
      sk: {
        description: "Ektomykorízna huba listnatých a ihličnatých lesov. Na Britských ostrovoch je vzácna, v kontinentálnej a južnej Európe oveľa častejšia a zaznamenaná je aj v západnej Ázii. Zriedka rastie aj na lúkach.",
        cap: "Klobúk je široký 4 až 12 cm. Za mladi je polguľovitý, neskôr klenutý až rozprestretý, na okraji pravidelne hrebeňovito ryhovaný. Najčastejšie je žltohnedý, môže byť aj bledohnedý, sivastý alebo tmavohnedý. Povrch je za vlhka slizký a za sucha lesklý, takmer vždy pokrytý drobnými čisto bielymi bradavkovitými útržkami plachtičky usporiadanými v sústredných kruhoch.",
        hymenium: "Lupene sú 6 až 10 mm široké, husté, pri hlúbiku voľné a čisto biele.",
        stipe: "Hlúbik je dlhý 6 až 15 cm a hrubý 0,5 až 2 cm. Je valcovitý, biely, hladký a lesklý, dole hľuzovito zhrubnutý, s bielym neryhovaným ovisnutým prsteňom. Hľuzu obopína prirastená obriezkovitá pošva s ostro odsadeným okrajom, nad ktorým bývajú 1 až 3 špirálovité alebo prstencovité pásiky.",
        flesh: "Dužina je dosť tenká, mäkká a čisto biela, na reze nemení farbu. Vôňa je nevýrazná alebo pripomína reďkovku či surové zemiaky.",
        sporePrint: "Výtrusný prach je biely. Výtrusy sú široko elipsoidné až vajcovité, hladké, bezfarebné a neamyloidné, veľké 8–12 × 6,7–8 μm.",
        habitat: "Plodnice sa objavujú od augusta do novembra (na juhu Európy aj neskôr v zime). Rastie pod listnáčmi, najmä pod dubom a bukom, ako aj v ihličnatých lesoch (na Slovensku hojne v ihličnatých aj listnatých lesoch od nížin do hôr), a občas aj s devätorníkom peniažtekovým (Helianthemum nummularium) mimo lesa.",
        uses: "Je prudko jedovatá, ešte jedovatejšia než muchotrávka červená. Obsahuje kyselinu iboténovú a muscimol; spôsobuje ťažké otravy s tráviacimi aj nervovými poruchami, ktoré sa vo výnimočných prípadoch končia smrťou.",
        confusion: "Zámena je možná s jedlou, no chuťovo menej hodnotnou muchotrávkou hrubou (Amanita excelsa), ktorá má sivé útržky plachtičky, ryhovaný prsteň a nemá ostro obrezanú pošvu, a s výbornou jedlou muchotrávkou červenkastou (Amanita rubescens), ktorej dužina na poranených miestach vínovočervenie a prsteň je zreteľne ryhovaný. Zameniť sa dá aj s jedovatou muchotrávkou olivovohnedastou (Amanita franchetii), ktorá má žltkasté bradavky.",
        notes: "Hnedé muchotrávky zo západu Severnej Ameriky uvádzané pod týmto menom predstavujú iné druhy."}
    },
    sources: {
      en: [
        {
          group: "text",
          name: "First Nature",
          href: "https://www.first-nature.com/fungi/amanita-pantherina.php"
        },
        {
          group: "text",
          name: "Wikipedia",
          href: "https://en.wikipedia.org/wiki/Amanita_pantherina"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=156565",
          detail: "156565"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/156565"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/8961574",
          detail: "8961574"
        }
      ],
      sk: [
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=156565",
          detail: "156565"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/156565"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/8961574",
          detail: "8961574"
        },
        {
          group: "text",
          name: "Wikipedia",
          href: "https://sk.wikipedia.org/wiki/Muchotrávka_tigrovaná"
        },
        {
          group: "text",
          name: "nahuby.sk",
          href: "https://www.nahuby.sk/atlas-hub/Amanita-pantherina/muchotravka-tigrovana/muchomurka-tygrovana/ID298",
          detail: "muchotrávka tigrovaná"
        }
      ]
    },
    synonyms: [
      "Agaricus pantherinus DC.",
      "Venenarius pantherinus (DC.) Murrill",
      "Amanitaria pantherina (DC.) E.-J. Gilbert",
      "Agaricus ruderatus Batsch",
      "Agaricus herpeticus Roques",
      "Amanita abietum E.-J. Gilbert"
    ]
  };

  var MORCHELLA_MEDIA = "photos/Pezizales/Morchellaceae/Morchella_esculenta/";
  var MORCHELLA = {
    id: 7,
    name: "Morchella esculenta",
    author: "(L.) Pers.",
    family: "Morchellaceae",
    genus: "Morchella",
    order: "Pezizales",
    edibility: "choice",
    hymenium: "pits",
    path: ["Fungi", "Dikarya", "Ascomycota", "Pezizomycotina", "Pezizomycetes", "Pezizomycetidae", "Pezizales", "Morchellaceae", "Morchella"],
    summary: ["Pezizales", "Morchellaceae", "Morchella"],
    added: "2026-10-23",
    plate: STORAGE + MORCHELLA_MEDIA + "Morchella_esculenta@1600.webp",
    plateGrid: STORAGE + MORCHELLA_MEDIA + "Morchella_esculenta@400.webp",
    plateCredit: {
      author: "L. Dufour",
      license: "public domain",
      source: "https://www.biodiversitylibrary.org/item/22673"
    },
    photos: [
      {
        src: STORAGE + MORCHELLA_MEDIA + "me1.webp",
        author: "Achim Lammerts (Syntaxys)",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:2026-04-04_Z5-3750E_Achim-Lammerts_Morchella-esculenta.jpg"
      },
      {
        src: STORAGE + MORCHELLA_MEDIA + "me2.webp",
        author: "Achim Lammerts (Syntaxys)",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:2026-04-05_Z5-3990E_Achim-Lammerts_Morchella-esculenta.jpg"
      },
      {
        src: STORAGE + MORCHELLA_MEDIA + "me3.webp",
        author: "Tsungam",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Horn-Bad_Meinberg_-_2021-05-20_-_NSG_Silberbachtal_mit_Ziegenberg_(DSC_1945).jpg"
      },
      {
        src: STORAGE + MORCHELLA_MEDIA + "me4.webp",
        author: "GLJIVARSKO DRUSTVO NIS",
        license: "CC BY 2.0",
        licenseUrl: "https://creativecommons.org/licenses/by/2.0",
        source: "https://commons.wikimedia.org/wiki/File:Morchella_esculenta_(17160152652).jpg"
      }
    ],
    capFrom: 3,
    capTo: 8,
    stipeHeightFrom: 3,
    stipeHeightTo: 12,
    stipeThickFrom: 1.5,
    stipeThickTo: 6,
    fruitingFrom: 3,
    fruitingTo: 6,
    label: { en: "morel", sk: "smrčok jedlý" },
    names: {
      en: [
        "common morel",
        "yellow morel"
      ],
      sk: [
        "smrček",
        "smrčok",
        "smrž",
        "smarž",
        "maržeľ",
        "smaržľa",
        "smaržľak",
        "smrh",
        "smrha",
        "smrečok",
        "smrekár",
        "smrečkár"
      ]
    },
    text: {
      en: {
        description: "A spring mushroom of chalky woodland. In the strict sense it is European, and it is also reported from China. It is an infrequent find in Britain and Ireland, and it occurs through mainland Europe. North American fungi once placed under this name are other species.",
        cap: "The cap is 3–8 cm across and 5–12 cm tall. It is sometimes conical, and more often globose or an elongated oval. It is hollow. Irregular pits are separated by narrow ridges. The colour runs from pale cream to ochre, yellowish brown, or mid brown, and it usually darkens with age. The ridges are usually slightly paler than the pits. The margin is inrolled and fused to the stipe.",
        hymenium: "The fertile surface lines the pits. Spore-producing asci sit there. The ridges between the pits are sterile.",
        stipe: "The stipe is white or pale cream, sometimes with brown blotches near the base. It is 3–12 cm tall and 1.5–6 cm thick at the base, and it usually tapers toward the apex. It is hollow and smooth, and the flesh of the stipe is tough.",
        flesh: "The flesh of the cap is waxy. The odour and the taste of the uncooked flesh are not distinctive.",
        sporePrint: "Creamy white or pale ochre. The spores are ellipsoidal and smooth, about 17.5–22 × 9–11 μm. The asci are cylindrical, about 260 × 20 μm, with eight spores.",
        habitat: "Fruit bodies appear from March into early June. It grows on chalky soil under deciduous trees, occasionally with dwarf willow on calcareous dune slacks, and sometimes on disturbed soil in gardens.",
        uses: "It is a choice edible once it is cooked thoroughly. Raw fruit bodies can cause severe stomach pain and sickness. Cooked fruit bodies are dried, fried in butter, or used in soup. Because insects often shelter inside the hollow interior, the fruit body is usually sliced lengthwise before cooking.",
        confusion: "Morchella elata has a darker pitted cap, with the pits aligned in columns, and it is usually more pointed. Gyromitra esculenta is poisonous. Its cap is red-brown and brain-like, and its stipe is divided into several chambers rather than one continuous hollow. Helvella crispa has a fluted stipe, with grooves on the outside and hollow channels inside.",
        notes: "It is a European species that is also reported from China."},
      sk: {
        description: "Jarná huba listnatých a lužných lesov, najmä na vápenatých pôdach. V užšom zmysle ide o európsky druh, potvrdený aj v Číne. V Británii a Írsku je zriedkavejší, v kontinentálnej Európe miestami hojný. Severoamerické huby uvádzané kedysi pod týmto menom patria k iným druhom.",
        cap: "Klobúk je 30–70 mm vysoký (výnimočne až 130 mm) a 30–60 mm široký (výnimočne až 80 mm). Je dutý a vajcovito oválny až takmer guľovitý, na spodnom okraji prirastený k hlúbiku. Povrch pokrývajú nepravidelné, rozlične veľké jamky oddelené rebierkovitými priehradkami. Farba je okrová, žltohnedá až hnedastookrová, pričom priehradky bývajú bledšie ako jamky.",
        hymenium: "Výtrusorodá vrstva (hyménium) s vreckami vystiela vnútro jamiek a je okrová až hnedastookrová. Hrany priehradiek medzi jamkami sú neplodné a bledšie.",
        stipe: "Hlúbik je 30–90 mm vysoký (výnimočne až 130 mm) a 20–35 mm hrubý (výnimočne až 70 mm). Je valcovitý, na báze zhrubnutý a nepravidelne zbrázdený, dutý, s jemne zamatovo zrnitým povrchom. Najprv je belavý, postupne žltkastý a v starobe až mierne hnedastý.",
        flesh: "Dužina je veľmi tenká, voskovitá a krehko mäsitá, belavá až žltookrová, s príjemnou jemnou chuťou a vôňou.",
        sporePrint: "Výtrusný prach je krémovožltý až bledookrový. Výtrusy sú elipsoidné a hladké, veľké 17,5–22 × 9–11 μm; vrecká sú valcovité, osemvýtrusové.",
        habitat: "Plodnice sa objavujú od marca do začiatku júna. Rastie v lužných a listnatých lesoch (najmä pod jaseňom, brestom a topoľom), v krovinách, ovocných sadoch a záhradách, obľubuje výživné a vápenaté pôdy.",
        uses: "Po dôkladnej tepelnej úprave je to výborná a vysoko cenená jedlá huba; surové plodnice sú však jedovaté a spôsobujú tráviace ťažkosti. Používa sa do polievok, omáčok, na vyprážanie na masle, plnenie mäsom a hodí sa aj na sušenie.",
        confusion: "Podobný jedlý smrčok kužeľovitý (Morchella conica) a smrčok vysoký (Morchella elata) majú tmavšie, kužeľovito zahrotené klobúky s jamkami usporiadanými v pozdĺžnych radoch. Nebezpečná je zámena so smrteľne jedovatým ušiakom obyčajným (Gyromitra esculenta), ktorý má červenohnedý, mozgovito poprehýbaný klobúk bez pravidelných jamiek a jeho hlúbik má na reze viacero nepravidelných komôrok namiesto jednej súvislej dutiny."}
    },
    sources: {
      en: [
        {
          group: "text",
          name: "First Nature",
          href: "https://www.first-nature.com/fungi/morchella-esculenta.php"
        },
        {
          group: "text",
          name: "Wikipedia",
          href: "https://en.wikipedia.org/wiki/Morchella_esculenta"
        },
        {
          group: "text",
          name: "NBN Atlas",
          href: "https://species.nbnatlas.org/species/NBNSYS0000019646"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=247978",
          detail: "247978"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=247978",
          detail: "247978"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/247978"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/2594602",
          detail: "2594602"
        }
      ],
      sk: [
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=247978",
          detail: "247978"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=247978",
          detail: "247978"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/247978"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/2594602",
          detail: "2594602"
        },
        {
          group: "text",
          name: "nahuby.sk",
          href: "https://www.nahuby.sk/atlas-hub/Morchella-esculenta/smrcok-jedly/smrz-obecny/ID628"
        },
        {
          group: "text",
          name: "Wikipedia",
          href: "https://sk.wikipedia.org/wiki/Smr%C4%8Dok_jedl%C3%BD"
        }
      ]
    },
    synonyms: [
      "Phallus esculentus L.",
      "Helvella esculenta (L.) Sowerby",
      "Coelomorum esculentum (L.) Paulet",
      "Morellus esculentus (L.) Eaton",
      "Morilla esculenta (L.) Quél.",
      "Phalloboletus esculentus (L.) Kuntze",
      "Phallus tremelloides Vent.",
      "Morchella tremelloides (Vent.) Pers.",
      "Morilla tremelloides (Vent.) Quél.",
      "Morchella rotunda (Pers.) Boud.",
      "Morchella mesomorpha Pers.",
      "Morchella pubescens (Pers.) Krombh.",
      "Morchella rigida (Krombh.) Boud.",
      "Morchella distans Fr.",
      "Morchella prunarii Schulzer & Hazsl.",
      "Morchella viridis Leuba",
      "Morchella abietina Leuba",
      "Morchella lutescens Leuba",
      "Morchella umbrina Boud.",
      "Morchella cylindrica Velen.",
      "Morchella dunensis (Castañera, J.L. Alonso & G. Moreno) Clowez"
    ]
  };

  var PLEUROTUS_MEDIA = "photos/Agaricales/Pleurotaceae/Pleurotus_ostreatus/";
  var PLEUROTUS = {
    id: 8,
    name: "Pleurotus ostreatus",
    author: "(Jacq.) P. Kumm.",
    family: "Pleurotaceae",
    genus: "Pleurotus",
    order: "Agaricales",
    edibility: "choice",
    hymenium: "gills",
    path: [
      "Fungi",
      "Dikarya",
      "Basidiomycota",
      "Agaricomycotina",
      "Agaricomycetes",
      "Agaricomycetidae",
      "Agaricales",
      "Pleurotaceae",
      "Pleurotus"
    ],
    summary: [
      "Agaricales",
      "Pleurotaceae",
      "Pleurotus"
    ],
    added: "2026-10-23",
    plate: STORAGE + PLEUROTUS_MEDIA + "Pleurotus_ostreatus@1600.webp",
    plateGrid: STORAGE + PLEUROTUS_MEDIA + "Pleurotus_ostreatus@400.webp",
    plateCredit: {
      author: "L. Dufour",
      license: "not stated"
    },
    photos: [
      {
        src: STORAGE + PLEUROTUS_MEDIA + "po1.webp",
        author: "Achim Lammerts",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:2025-10-26_D500-1200_Achim-Lammerts_Pleurotus-ostreatus.jpg"
      },
      {
        src: STORAGE + PLEUROTUS_MEDIA + "po2.webp",
        author: "Hamilton",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:2010-10-28_Pleurotus_ostreatus_(Jacq.)_P._Kumm_116409_cropped.jpg"
      },
      {
        src: STORAGE + PLEUROTUS_MEDIA + "po3.webp",
        author: "Thomas Pruß",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Austernseitling_(1).jpg"
      },
      {
        src: STORAGE + PLEUROTUS_MEDIA + "po4.webp",
        author: "Dominicus Johannes Bergsma",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Gewone_oesterzwam_(Pleurotus_ostreatus)_25-12-2020_(d.j.b.)_01.jpg"
      },
      {
        src: STORAGE + PLEUROTUS_MEDIA + "po5.webp",
        author: "Dominicus Johannes Bergsma",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Gewone_oesterzwam_(Pleurotus_ostreatus)_31-12-2020_(d.j.b.)_02.jpg"
      }
    ],
    capFrom: 5,
    capTo: 18,
    stipeHeightFrom: 1,
    stipeHeightTo: 3,
    stipeThickFrom: 1,
    stipeThickTo: 2,
    fruitingFrom: 6,
    fruitingTo: 2,
    label: {
      en: "oyster mushroom",
      sk: "hliva ustricová"
    },
    names: {
      en: [
        "grey oyster mushroom",
        "oyster fungus",
        "pearl oyster mushroom"
      ],
      sk: [
        "hliva ustricovitá",
        "hliva ústricovitá",
        "hliva chrastavá",
        "chrastavka",
        "kladná huba",
        "srež",
        "hliva",
        "hliv",
        "hlivka",
        "liva",
        "hlivec",
        "hlivák",
        "gliva",
        "buková hliva",
        "bukovo hliva",
        "ješeňovo hliva",
        "stromská hliva",
        "hliva stromovka",
        "kladová huba",
        "orechová huba",
        "bukovnica",
        "kladnička",
        "chladnička",
        "chladnačka",
        "openka",
        "podpienka",
        "podpenka",
        "podpinka",
        "pňakovka",
        "pnovka",
        "pníček",
        "podpník",
        "michalka",
        "michoľak",
        "hnedáčky",
        "psie uchá",
        "psie ucho",
        "jelenice",
        "scáky",
        "pešterec",
        "pesere",
        "panoše"
      ]
    },
    text: {
      en: {
        description: "A saprobic mushroom, sometimes weakly parasitic, on broadleaf wood. It occurs throughout Britain and Ireland and in most of mainland Europe, and it is widely recorded in much of Asia, including Japan, and in parts of North America. It is absent from the Pacific Northwest.",
        cap: "The cap is typically 5–18 cm across (occasionally 2–30 cm, averaging near 15 cm). It is white, cream, brown, smoky grey, or blue-grey, and bracket-like, shell-shaped, fan-shaped, or oyster-shaped, with a lateral or eccentric stipe. It starts convex, with an inrolled margin when young, and becomes flatter or centrally depressed, with a wavy margin that is sometimes split. Fruit bodies often grow in overlapping tiers, each stipe attached separately.",
        hymenium: "The gills are white, turning pale yellow to pale ochre with age, crowded, and deeply decurrent, running most of the way down the stipe.",
        stipe: "The stipe is white or cream and woolly at the base. It is sometimes absent. When present it is usually short, 1–4 cm long and 1–2 cm thick, tapering toward the base, eccentric or attached laterally to wood, with no ring. It opens out into the cap, so the cap sometimes appears to grow straight from the tree.",
        flesh: "The flesh is white and firm, becoming tough in the stipe. The taste is mild and pleasant, and the odour is mushroomy or faintly anise- or almond-like.",
        sporePrint: "White to pale lilac-grey. The spores are subcylindrical to narrowly kidney-shaped and smooth, 8–12.5 × 3–4.5 μm.",
        habitat: "Fruit bodies appear mainly in autumn and winter, though they can occur at any time of year in Britain, Ireland, and mainland Europe. They grow in overlapping clusters on dying or dead standing deciduous trees, particularly beech and oak, and on fallen trunks and stumps, and only very rarely on conifers such as spruce.",
        uses: "It is a choice edible, widely cultivated and sold in shops. The taste is mild and the texture soft, and it is used in soups, stews, stir-fries, and breaded dishes. Because the flesh becomes tough and the flavour acrid with age, young fruit bodies are preferred.",
        confusion: "Pleurotus dryinus has a frosted cap and a short-lived ring on the stipe. Pleurotus pulmonarius is paler and fruits more often in summer, although either species can fruit at any time and the two may hybridise. Oysterlings stay under 4 cm across. Pleurocybella porrigens is usually funnel-shaped with a split margin, grows on conifer wood (mainly in Scotland within Britain), and can be deadly for people with kidney disease. Other similar fungi include Pleurotus cornucopiae, Hohenbuehelia petaloides, and the hairy-capped Phyllotopsis nidulans. Toxic lookalikes include Omphalotus nidiformis in Australia and Omphalotus olivascens and Clitocybe dealbata in North America. Some toxic Lentinellus species have jagged gill edges and finely hairy caps. Pleurotus eryngii is a related cultivated species.",
        notes: "Pleurotus columbinus is a blue-grey form sometimes treated as a separate species, and Pleurotus floridanus is kept separate. The mycelium traps and digests nematodes. Species of this genus contain lovastatin, a statin that lowers blood cholesterol."},
      sk: {
        description: "Saprotrofná huba, niekedy slabo parazitická, na dreve listnáčov. Vyskytuje sa v celej Británii a Írsku a vo väčšine kontinentálnej Európy a je široko zaznamenaná vo veľkej časti Ázie vrátane Japonska a v častiach Severnej Ameriky. Na pacifickom severozápade chýba.",
        cap: "Klobúk je 40–250 mm široký, jednostranný, lastúrovitý, vejárovitý alebo lievikovito prehĺbený, hladký a pružný. V mladosti je klenutý s dlho podvinutým, jemne plstnatým okrajom, ktorý sa neskôr vyrovnáva a stáva ostrým alebo zvlneným. Sfarbenie je premenlivé, v mladosti tmavosivé, oceľovomodré až hnedočierne, neskôr sivofialové, sivohnedé alebo kožovohnedé, v starobe blednúce. Plodnice vyrastajú v bohatých, škridlicovito sa prekrývajúcich trsoch.",
        hymenium: "Lupene sú husté, mäkké a nízke, hlboko zbiehavé na hlúbik, na báze často vidlicovito rozkonárené a poprepájané. Najprv sú biele až belavé, neskôr bledosivé a v starobe alebo po otlačení žltkasté až sivookrové.",
        stipe: "Hlúbik je krátky, 10–40 mm dlhý a 10–30 mm hrubý (niekedy takmer chýba), výstredný až bočný, smerom k báze zúžený, plný a veľmi tuhý. Povrch je biely až sivastý, na báze husto bielo chlpato plstnatý, bez prsteňa.",
        flesh: "Dužina je čisto biela, v mladosti mäkká, pružná a šťavnatá, v starobe a v hlúbiku tuhá a vláknitá; na reze nemení farbu. Má jemnú, mierne sladkastú chuť a príjemnú hubovú (niekedy slabo anízovú) vôňu.",
        sporePrint: "Výtrusný prach je biely až bledosivofialový. Výtrusy sú valcovité, hladké a bezfarebné, veľké 8–12,5 × 3–4,5 µm.",
        habitat: "Plodnice sa objavujú najmä na jeseň a v zime (na Slovensku predovšetkým od októbra do marca za mierneho počasia), príležitostne aj v iných častiach roka. Rastú v bohatých prekrývajúcich sa trsoch na odumierajúcich alebo odumretých stojacich i spadnutých kmeňoch a pňoch listnatých drevín, najmä na buku, dube, vŕbe, topoli a orechu, a len veľmi zriedka na ihličnanoch, napríklad na smreku.",
        uses: "Je to výborná jedlá huba, ktorá sa vo veľkom aj komerčne pestuje. Mladé plodnice majú jemnú chuť a mäkkú dužinu; používajú sa do polievok, prívarkov, gulášov, rizota, na nakladanie do octu alebo sa vyprážajú. Staršie plodnice a hlúbiky sú tuhé.",
        confusion: "Hliva dubová (Pleurotus dryinus) má plstnatý až oinovatený klobúk, v mladosti prsteň na hlúbiku a rastie skôr jednotlivo. Hliva buková (Pleurotus pulmonarius) je bledšia, belavá až sivookrová, s veľmi hustými žltnúcimi lupeňmi, a plodí častejšie v lete, pričom oba druhy sa môžu krížiť. Hliva lievikovitá (Pleurotus cornucopiae) má hlboko lievikovitý klobúk a žilkovito pospájané lupene zbiehajúce až k báze hlúbika. Na dreve ihličnanov rastie biela paľasovka uškovitá (Pleurocybella porrigens), ktorá je tenkostantejšia, nemá hlúbik a u ľudí s ochorením obličiek môže spôsobiť smrteľnú otravu. Podobná pahliva hniezdovitá (Phyllotopsis nidulans) má oranžovožltý chlpatý klobúk a nepríjemný zápach. Jedovaté druhy rodu húževnatček (Lentinellus) majú zúbkaté ostrie lupeňov.",
        notes: "Oceľovomodrá forma sa niekedy uvádza ako Pleurotus columbinus. Významnými obsahovými látkami sú betaglukán pleurán s imunomodulačnými účinkami a lovastatín znižujúci hladinu cholesterolu."}
    },
    sources: {
      en: [
        {
          group: "text",
          name: "First Nature",
          href: "https://www.first-nature.com/fungi/pleurotus-ostreatus.php"
        },
        {
          group: "text",
          name: "Wild Food UK",
          href: "https://www.wildfooduk.com/mushroom-guide/oyster-mushroom/"
        },
        {
          group: "text",
          name: "Wikipedia",
          href: "https://en.wikipedia.org/wiki/Pleurotus_ostreatus"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=174220",
          detail: "174220"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=174220",
          detail: "174220"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/174220"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/2526530",
          detail: "2526530"
        }
      ],
      sk: [
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=174220",
          detail: "174220"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=174220",
          detail: "174220"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/174220"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/2526530",
          detail: "2526530"
        },
        {
          group: "text",
          name: "Wikipedia",
          href: "https://sk.wikipedia.org/wiki/Hliva_ustricov%C3%A1"
        },
        {
          group: "text",
          name: "Encyclopaedia Beliana",
          href: "https://beliana.sav.sk/heslo/hliva"
        },
        {
          group: "text",
          name: "nahuby.sk",
          href: "https://www.nahuby.sk/atlas-hub/Pleurotus-ostreatus/hliva-ustricovita/hliva-ustricna/ID89"
        }
      ]
    },
    synonyms: [
      "Agaricus ostreatus Jacq.",
      "Crepidopus ostreatus (Jacq.) Gray",
      "Pleuropus ostreatus (Jacq.) Zaw.",
      "Clitocybe ostreata (Jacq.) P. Karst.",
      "Dendrosarcus ostreatus (Jacq.) Kuntze",
      "Agaricus glandulosus Bull.",
      "Pleurotus glandulosus (Bull.) Gillet",
      "Agaricus fuligineus Pers.",
      "Agaricus salignus Pers.",
      "Pleurotus salignus (Pers.) P. Kumm.",
      "Clitocybe saligna (Pers.) P. Karst.",
      "Agaricus ochraceus Pers.",
      "Pleuropus atroalbus (Pers.) Zaw.",
      "Agaricus reticulatus Schumach.",
      "Panus carpathicus Fr. ex Kalchbr.",
      "Agaricus revolutus J. Kickx f.",
      "Pleurotus revolutus (J. Kickx f.) Gillet",
      "Agaricus macropus (Bagl.) Bagl.",
      "Pleurotus suberis Pat."
    ]
  };

  var LAETIPORUS_MEDIA = "photos/Polyporales/Laetiporaceae/Laetiporus_sulphureus/";
  var LAETIPORUS = {
    id: 9,
    name: "Laetiporus sulphureus",
    author: "(Bull.) Murrill",
    family: "Laetiporaceae",
    genus: "Laetiporus",
    order: "Polyporales",
    edibility: "edible_with_caution",
    hymenium: "tubes",
    path: [
      "Fungi",
      "Dikarya",
      "Basidiomycota",
      "Agaricomycotina",
      "Agaricomycetes",
      "Incertae sedis",
      "Polyporales",
      "Laetiporaceae",
      "Laetiporus"
    ],
    summary: [
      "Polyporales",
      "Laetiporaceae",
      "Laetiporus"
    ],
    added: "2026-10-23",
    plate: STORAGE + LAETIPORUS_MEDIA + "Laetiporus_sulphureus@1600.webp",
    plateGrid: STORAGE + LAETIPORUS_MEDIA + "Laetiporus_sulphureus@400.webp",
    plateCredit: {
      author: "L. Dufour",
      license: "not stated"
    },
    photos: [
      {
        src: STORAGE + LAETIPORUS_MEDIA + "ls1.webp",
        author: "Doug Bowman",
        license: "CC BY 2.0",
        licenseUrl: "https://creativecommons.org/licenses/by/2.0",
        source: "https://commons.wikimedia.org/wiki/File:Chicken_of_the_Woods.jpg"
      },
      {
        src: STORAGE + LAETIPORUS_MEDIA + "ls2.webp",
        author: "Bahnmoeller",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Gemeiner_Schwefelporling_-_Laetiporus_sulphureus.jpg"
      },
      {
        src: STORAGE + LAETIPORUS_MEDIA + "ls3.webp",
        author: "Rror",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Laetiporus_sulphureus_big.jpg"
      },
      {
        src: STORAGE + LAETIPORUS_MEDIA + "ls4.webp",
        author: "Ladislav Luppa",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Laetiporus_sulphureus_-_City_Park_in_Lu%C4%8Denec.jpg"
      },
      {
        src: STORAGE + LAETIPORUS_MEDIA + "ls5.webp",
        author: "Gargoyle888",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:AnotherImpressiveGrowth5.jpg"
      },
    ],
    capFrom: 10,
    capTo: 40,
    fruitingFrom: 6,
    fruitingTo: 11,
    label: {
      en: "chicken of the woods",
      sk: "sírovec obyčajný"
    },
    names: {
      en: [
        "sulphur polypore",
        "sulphur shelf",
        "chicken polypore",
        "lobster of the woods"
      ]
    },
    text: {
      en: {
        description: "A bracket fungus of living and dead broadleaved trees, and sometimes of yew. It is infrequent in many parts of Britain and Ireland and locally common, including in yew woodland. The same fungus, or species very close to it, is reported across northern Europe and, in North America, east of the Rocky Mountains.",
        cap: "Individual brackets are typically 10–40 cm wide (occasionally 5–60 cm across) and 3–12 cm thick. Young brackets are soft and spongy, with broad wavy margins that become thinner and paler with age. The colour runs from bright orange and pinkish orange to egg yellow or pale creamy yellow, and old brackets fade to tan or whitish.",
        hymenium: "The tubes are short, 1.5–4 mm deep. The pores are roundish to oval, typically 2–4 per millimetre, and bright sulphur yellow (fading to pale yellow with age).",
        stipe: "There is no stipe. The brackets grow directly from the trunk or narrow into a lateral base.",
        flesh: "The flesh is white to yellow-orange when moist and paler when dry. It smells mushroomy and tastes slightly sour. When fresh it is succulent and can exude a yellowish juice. It later becomes dry, crumbly, and brittle.",
        sporePrint: "White. The spores are ellipsoidal to broadly ovoid, 5–7 × 3.5–4.5 μm.",
        habitat: "Fruit bodies appear mainly in summer and autumn (from April into November in Europe, and from June to October in North America). It grows on standing and fallen trunks, and sometimes on large branches, mainly of oak, sweet chestnut, beech, and occasionally cherry, willow, and yew. It feeds on dead or dying wood and parasitises living trees, causing a brown cubical rot of the heartwood.",
        uses: "Young moist fruit bodies are a good edible mushroom. They are sliced, brushed with oil, and fried in breadcrumbs, or sautéed in butter. The texture and taste are compared with chicken. A minority of people experience nausea or gastrointestinal upset. Fruit bodies growing on yew or locust are avoided because those trees contain toxins. It must not be eaten raw, and older brackets are tough and woody.",
        confusion: "Pale fruit bodies can resemble Meripilus giganteus, whose pores turn black when bruised. In North America, Laetiporus cincinnatus grows at the bases of oaks and has a pale pinkish-orange cap and white pores, Laetiporus persicinus bruises brown, Laetiporus huroniensis grows on conifers such as hemlock, and Laetiporus gilbertsonii grows on eucalyptus and oaks in the west. Severe sickness after a meal has been linked especially to the conifer- and eucalyptus-inhabiting species.",
        notes: "The global conservation rank is GNR, last reviewed in 1993. Laetiporus cincinnatus, Laetiporus huroniensis, Laetiporus gilbertsonii, and Laetiporus montanus are separate species."},
      sk: {
        description: "Konzolovitá huba živých a odumretých listnatých stromov, niekedy aj tisa. V mnohých častiach Británie a Írska je zriedkavá a miestami hojná, aj v tisových porastoch. Tá istá huba, alebo druhy jej veľmi blízke, sa uvádza zo severnej Európy a v Severnej Amerike z územia východne od Skalnatých hôr.",
        cap: "Klobúk je 10–40 cm široký. Býva polkruhovitý, vejárovitý alebo rozlične deformovaný, na vrchnej strane lúčovito vráskavý a oinovatený. Za mladi je okrovožltý alebo sírovožltý, neskôr žltooranžový, miestami s ružovkastým odtieňom, a v starobe bledookrový až belavý. Plodnice sú jednoročné, hrubo mäsité a často vyrastajú škridlicovito nad sebou.",
        hymenium: "Rúrky sú 1,5–4 mm dlhé a sírovožlté. Póry sú okrúhle a drobné, 2–4 na 1 mm, najprv sírovožlté a neskôr žltookrové.",
        stipe: "Hlúbik zvyčajne chýba. Plodnica prirastá na substrát zúženým bokom.",
        flesh: "Dužina je biela alebo jemne krémovožltá. Za mladi je šťavnatá a mäkká, v dospelosti tuhá, krehká a drobivá. Vôňa je príjemne hubová a chuť trochu kyslastá.",
        sporePrint: "Výtrusný prach je za čerstva krémový až slamovožltkastý. Po uschnutí bledne a býva takmer biely. Výtrusy sú vajcovité, hladké a bezfarebné, 5–7 × 3,5–4,5 μm.",
        habitat: "Plodnice sa objavujú v lete a na jeseň (v Európe od apríla do novembra, v Severnej Amerike od júna do októbra). Rastie na stojacich aj spadnutých kmeňoch a niekedy na hrubých konároch, najmä na dube, gaštane jedlom, buku, agáte, vŕbe, čerešni a príležitostne aj na tise. Živí sa odumretým drevom a napáda aj živé stromy, kde spôsobuje intenzívnu hnedú kockovitú hnilobu jadrového dreva.",
        uses: "Mladé šťavnaté plodnice sú po tepelnej úprave jedlé a niektorí hubári ich pokladajú za lahôdku. Upravujú sa na spôsob viedenského rezňa, nakladajú sa do octového nálevu alebo sa používajú v nakyslých omáčkach a gulášoch. Surová huba je nejedlá a staršie plodnice sú tuhé a drevnaté. Plodnice rastúce na tise a agáte sa nezbierajú, pretože môžu vyvolať vracanie a hnačky; exempláre z duba bývajú niekedy mierne trpké.",
        confusion: "Zámena s inými hubami je pre žiarivé sfarbenie málo pravdepodobná. Tvarom trsov a niekedy aj chuťou môže mladé plodnice pripomínať vejárovec obrovský (Meripilus giganteus), ktorý je však okrovohnedý a jeho póry aj dužina po otlačení a na reze černejú. V horských smrečinách rastie príbuzný sírovec horský (Laetiporus montanus).",
        notes: "Laetiporus montanus, Laetiporus cincinnatus, Laetiporus huroniensis a Laetiporus gilbertsonii sú samostatné druhy."}
    },
    sources: {
      en: [
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=299348",
          detail: "299348"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=299348",
          detail: "299348"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=159365",
          detail: "159365"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/genusrecord.asp?RecordID=17899",
          detail: "17899"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/9072021",
          detail: "9072021"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=299348",
          detail: "299348"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/299348"
        },
        {
          group: "text",
          name: "First Nature",
          href: "https://www.first-nature.com/fungi/laetiporus-sulphureus.php"
        },
        {
          group: "text",
          name: "Wikipedia",
          href: "https://en.wikipedia.org/wiki/Laetiporus_sulphureus"
        },
        {
          group: "text",
          name: "MushroomExpert",
          href: "https://www.mushroomexpert.com/laetiporus_sulphureus.html"
        }
      ],
      sk: [
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=299348",
          detail: "299348"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/9072021",
          detail: "9072021"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=299348",
          detail: "299348"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/299348"
        },
        {
          group: "text",
          name: "nahuby.sk",
          href: "https://www.nahuby.sk/atlas-hub/Laetiporus-sulphureus/sirovec-obycajny/sirovec-zlutooranzovy/ID607"
        },
        {
          group: "text",
          name: "Wikipedia",
          href: "https://sk.wikipedia.org/wiki/S%C3%ADrovec_oby%C4%8Dajn%C3%BD"
        },
        {
          group: "text",
          name: "Škodcovia drevín",
          href: "https://www.skodcoviadrevin.eu/skodca/sirovec-obycajny"
        },
        {
          group: "text",
          name: "Encyclopaedia Beliana",
          href: "https://beliana.sav.sk/heslo/hlinovec"
        }
      ]
    },
    synonyms: [
      "Boletus sulphureus Bull.",
      "Sistotrema sulphureum (Bull.) Rebent.",
      "Polyporus sulphureus (Bull.) Fr.",
      "Merisma sulphureum (Bull.) Gillet",
      "Polypilus sulphureus (Bull.) P. Karst.",
      "Cladomeris sulphurea (Bull.) Quél.",
      "Leptoporus sulphureus (Bull.) Quél.",
      "Tyromyces sulphureus (Bull.) Donk",
      "Grifola sulphurea (Bull.) Pilát",
      "Cladoporus sulphureus (Bull.) Teixeira",
      "Boletus caudicinus Scop.",
      "Polyporus caudicinus (Scop.) Murrill",
      "Polyporellus caudicinus (Scop.) P. Karst.",
      "Leptoporus caudicinus (Scop.) Quél.",
      "Boletus tenax Lightf.",
      "Boletus coriaceus Huds.",
      "Boletus citrinus J.J. Planer",
      "Boletus tenax Bolton",
      "Boletus lingua-cervina Schrank",
      "Boletus citrinus Lumn.",
      "Boletus ramosus Bull.",
      "Polyporus ramosus (Bull.) Gray",
      "Leptoporus ramosus (Bull.) Quél.",
      "Agarico-carnis flammula Paulet",
      "Agarico-pulpa styptica Paulet",
      "Polyporus casearius Fr.",
      "Polypilus casearius (Fr.) P. Karst.",
      "Cladomeris casearius (Fr.) Quél.",
      "Leptoporus casearius (Fr.) Quél.",
      "Polyporus rubricus Berk.",
      "Polyporellus rubricus (Berk.) P. Karst.",
      "Polyporus todarii Inzenga",
      "Stereum speciosum Fr.",
      "Ptychogaster aurantiacus Pat.",
      "Ceriomyces aurantiacus (Pat.) Sacc.",
      "Polyporus caudicinus Schaeff. ex J. Schröt.",
      "Polypilus caudicinus (Schaeff. ex J. Schröt.) P. Karst.",
      "Polyporus rostafinskii Błoński",
      "Laetiporus speciosus Battarra ex Murrill",
      "Calvatia versispora Lloyd",
      "Ptychogaster versisporus (Lloyd) Lloyd",
      "Laetiporus versisporus (Lloyd) Imazeki",
      "Sporotrichum versisporum (Lloyd) Stalpers",
      "Ceriomyces neumanii Bres.",
      "Ptychogaster aureus Lloyd"
    ]
  };

  var IMLERIA_MEDIA = "photos/Boletales/Boletaceae/Imleria_badia/";
  var IMLERIA = {
    id: 10,
    name: "Imleria badia",
    author: "(Fr.) Vizzini",
    family: "Boletaceae",
    genus: "Imleria",
    order: "Boletales",
    edibility: "choice",
    hymenium: "tubes",
    path: [
      "Fungi",
      "Dikarya",
      "Basidiomycota",
      "Agaricomycotina",
      "Agaricomycetes",
      "Agaricomycetidae",
      "Boletales",
      "Boletaceae",
      "Imleria"
    ],
    summary: [
      "Boletales",
      "Boletaceae",
      "Imleria"
    ],
    added: "2026-10-23",
    plate: STORAGE + IMLERIA_MEDIA + "Imleria_badia@1600.webp",
    plateGrid: STORAGE + IMLERIA_MEDIA + "Imleria_badia@400.webp",
    plateCredit: {
      author: "W. G. Farlow",
      license: "not stated"
    },
    photos: [
      {
        src: STORAGE + IMLERIA_MEDIA + "ib1.webp",
        author: "Jean-Pol Grandmont",
        license: "CC BY 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Boletus_badius_JPG1.jpg"
      },
      {
        src: STORAGE + IMLERIA_MEDIA + "ib2.webp",
        author: "Achim Lammerts",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:2025-10-08_D500-0912_Achim-Lammerts_Imleria-badia.jpg"
      },
      {
        src: STORAGE + IMLERIA_MEDIA + "ib3.webp",
        author: "Achim Lammerts",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:2025-11-04_D500-1630_Achim-Lammerts_Imleria-badia.jpg"
      },
      {
        src: STORAGE + IMLERIA_MEDIA + "ib4.webp",
        author: "Ude",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Boletus_badius_stem.jpg"
      },
      {
        src: STORAGE + IMLERIA_MEDIA + "ib5.webp",
        author: "Andreas Kunze",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:2007-07-14_Imleria_badia_2.jpg"
      },
    ],
    capFrom: 5,
    capTo: 15,
    stipeHeightFrom: 5,
    stipeHeightTo: 15,
    stipeThickFrom: 2,
    stipeThickTo: 3,
    fruitingFrom: 8,
    fruitingTo: 11,
    label: { en: "bay bolete", sk: "suchohríb hnedý" },
    names: {
      en: [
        "bay boletus",
        "bay-brown bolete",
        "bay-capped bolete",
        "false cep"
      ],
      sk: [
        "hríb hnedý",
        "masliak",
        "gaštaniak"
      ]
    },
    text: {
      en: {
        description: "An ectomycorrhizal mushroom of coniferous and mixed woods. A 2019 assessment lists it as native across much of Europe and in Canada, the United States, and Russia. It is common in Britain and Ireland. Further records are reported from Turkey, Jordan, China, Taiwan, and central Mexico.",
        cap: "The cap is typically 5–15 cm across (3–9 cm in North American collections). It is bay brown, chestnut, dark brown, or reddish brown, finely downy or velvety when young and smooth later. It becomes sticky or slimy in wet weather and soon dries. The margin is narrow and overhanging, and the cuticle is difficult to peel from the flesh.",
        hymenium: "The tubes are up to 1–2 cm deep, pale yellow at first and becoming greenish yellow or olive, and usually turn blue when cut. The pores are angular, about 1–3 per millimetre, cream to pale yellow becoming olive-yellow, and bruise dull blue or bluish green on mature fruit bodies.",
        stipe: "The stipe is 4–15 cm long (up to 18 cm in North America) and 1–4 cm thick. It is more or less cylindrical, often slightly curved or enlarged near the base, with white basal mycelium and no ring. The surface is pale yellow at the apex and brown to reddish brown below, covered with fine longitudinal brown fibrils on a paler ground rather than a raised net.",
        flesh: "The flesh is white to pale yellow, tinged vinaceous-pink or brownish just beneath the cap cuticle, and usually stains pale blue or blue-green above the tubes and at the stipe apex when cut. The odour is faint or slightly fruity, and the taste is mild.",
        sporePrint: "Olivaceous brown. The spores are subfusiform (boletoid-fusiform) and smooth, about 11–15 × 4–5.5 μm.",
        habitat: "Fruit bodies appear in late summer and autumn, from August to November in Britain and Ireland and from July to November in North America. They grow singly or scattered on the ground, or on decaying mossy stumps, under pines, spruce, hemlock, and other conifers, and less often under beech, oak, sweet chestnut, and birch. They avoid chalky soils.",
        uses: "It is a choice edible mushroom, close in quality to Boletus edulis and suitable in the same recipes. The fruit bodies are less often infested by larvae than many other boletes, and they dry well when sliced thinly. They are sold in markets in Europe and central Mexico.",
        confusion: "Boletus edulis sometimes has a bay-brown cap, but its pale stipe carries a raised white net and its pores do not bruise blue. Aureoboletus projectellus is more robust and has a coarsely netted stipe. Austroboletus gracilis does not bruise blue, and its pores turn pinkish. Xerocomus subtomentosus has a dry velvety cap and wider yellow pores that rarely stain blue. Xerocomellus zelleri in western North America and Hortiboletus bubalinus are also similar.",
        notes: "A 2019 assessment places it as Least Concern, with a stable population. Fruit bodies can bioaccumulate mercury, cobalt, and nickel, and a pigment in the cap (norbadione A) concentrates radioactive caesium-137."},
      sk: {
        description: "Ektomykorízna huba ihličnatých a zmiešaných lesov. Hodnotenie z roku 2019 ju uvádza ako pôvodnú vo veľkej časti Európy a v Kanade, Spojených štátoch a Rusku. V Británii a Írsku je hojná. Ďalšie nálezy sa uvádzajú z Turecka, Jordánska, Číny, Taiwanu a stredného Mexika.",
        cap: "Klobúk má 40–150 mm v priemere. Najprv je polguľovitý, potom vankúšovitý a dosť plochý, v starobe často so zdvihnutým okrajom. V mladosti je okraj podvinutý a plstnatý, v dospelosti s presahujúcou okrajovou blankou. Je gaštanovohnedý, zriedkavejšie plavohnedý alebo červenohnedý, niekedy až čiernohnedý. Mladý klobúk je nápadne plstnatý, starý je holý, za vlhka dosť slizký a inak suchý. Pokožka sa dá olúpať iba v malých útržkoch, a len zo staršej plodnice.",
        hymenium: "Rúrky sú až 20 mm dlhé, najprv bledokrémové, potom bledožlté, plavo zelenožlté, olivovožlté alebo zelenkasté. Poranením sa sfarbujú na zelenomodro. Pri hlúbiku bývajú trochu vykrojené, ale aj široko prirastené. Póry sú drobné až stredne veľké, najprv belavé, potom bledožlté, plavo zelenožlté až olivovozelené, za sucha i so zlatohnedým odtieňom. Poranením sa intenzívne sfarbujú do zelenomodra a neskôr sú tieto miesta špinavohnedé. Za sucha, ak sú póry oschnuté, často ani po otlačení nezmodrejú.",
        stipe: "Hlúbik je bez prsteňa, 40–120 mm dlhý a 8–40 mm hrubý. Za mladi je zväčša bruchatý až súdkovitý, potom sa spravidla mení na valcovitý. Niekedy býva celkom tenký a prehnutý, inokedy aj v dospelosti bruchatý. Na olivovožltkastom bledom podklade je pozdĺžne hnedasto vláknitý a pokrytý jemnými hnedastými vločkami. Často je takmer celý hnedý, ale vždy bledší ako klobúk. Poranením modrie a tieto modré miesta sa čoskoro sfarbujú na špinavohnedo.",
        flesh: "Dužina je najprv belavá, potom slabožltkastá, často s plavohnedastým odtieňom. Pod pokožkou klobúka a pod povrchom hlúbika býva trochu hnedastá. Na reze dosť zreteľne modrie, inokedy, najmä na zaschnutých plodniciach, nemodrie vôbec. V mladosti je pevná, neskôr mäkšia. V klobúku starých plodníc býva úplne mäkká a v hlúbiku vláknitá. Chuť a vôňa sú príjemne hubové, ale nenápadné.",
        sporePrint: "Výtrusný prach je olivový až olivovohnedý. Výtrusy sú vretenovité a hladké, veľké 11–15 × 4–5,5 μm.",
        habitat: "Plodnice sa v Británii a Írsku objavujú od augusta do novembra a v Severnej Amerike od júla do novembra. Rastú jednotlivo alebo roztrúsene na zemi aj na rozkladajúcich sa pňoch, pod borovicami, smrekmi a inými ihličnanmi, zriedkavejšie pod bukom, dubom a gaštanom; vápencovým pôdam sa vyhýbajú. Na Slovensku rastú hojne v ihličnatých a zmiešaných lesoch od júna do konca novembra v humóznej pôde, v machu, na práchnivých pňoch alebo pri šiškách.",
        uses: "Je to výborná a všestranne využiteľná jedlá huba, jedna z najhojnejších hríbovitých húb, vhodná do polievok, omáčok, praženice aj na sušenie.",
        confusion: "Možná je zámena s jedlým hríbom smrekovým (Boletus edulis), ktorý má na hlúbiku bielu sieťku a rúrky, ktoré po otlačení nemodrejú, alebo so suchohríbom plstnatým (Xerocomus subtomentosus), ktorý má suchý zamatový klobúk a širšie žlté póry. Na rovnakých stanovištiach rastie nejedlý, horký podhríb žlčový (Tylopilus felleus) s tmavou sieťkou na hlúbiku a ružovejúcimi pórmi. Forma opisovaná predtým ako suchohríb vresový (Boletus badiorufus), dnes považovaná za synonymum tohto druhu, sa vyznačuje veľmi krátkymi, takmer nemodrejúcimi rúrkami a dole zahroteným hlúbikom.",
        notes: "Hodnotenie IUCN z roku 2019 ho zaraďuje medzi málo dotknuté druhy (Least Concern). Hnedé farbivo norbadión A v pokožke klobúka viaže ťažké kovy a rádioaktívne cézium-137."}
    },
    sources: {
      en: [
        { group: "name", name: "Species Fungorum", href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=550569", detail: "550569" },
        { group: "name", name: "Species Fungorum", href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=476862", detail: "476862" },
        { group: "name", name: "Index Fungorum", href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=550569", detail: "550569" },
        { group: "name", name: "Index Fungorum", href: "https://www.indexfungorum.org/Publications/Index%20Fungorum%20no.147.pdf", detail: "147" },
        { group: "name", name: "MycoBank", href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/550569" },
        { group: "name", name: "GBIF", href: "https://www.gbif.org/species/7832732", detail: "7832732" },
        { group: "text", name: "First Nature", href: "https://www.first-nature.com/fungi/imleria-badia.php" },
        { group: "text", name: "Wikipedia", href: "https://en.wikipedia.org/wiki/Imleria_badia" },
        { group: "text", name: "MushroomExpert", href: "https://www.mushroomexpert.com/imleria_badia.html" },
        { group: "text", name: "Wild Food UK", href: "https://www.wildfooduk.com/mushroom-guide/bay-bolete-boletus-imleria-badia/" },
        { group: "text", name: "IUCN", href: "https://www.iucnredlist.org/species/138329440/138330311" },
      ],
      sk: [
        { group: "name", name: "Index Fungorum", href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=550569", detail: "550569" },
        { group: "name", name: "Index Fungorum", href: "https://www.indexfungorum.org/Publications/Index%20Fungorum%20no.147.pdf", detail: "147" },
        { group: "name", name: "GBIF", href: "https://www.gbif.org/species/7832732", detail: "7832732" },
        { group: "text", name: "nahuby.sk", href: "https://www.nahuby.sk/atlas-hub/Imleria-badia/suchohrib-hnedy/suchohrib-hnedy/ID673" },
        { group: "text", name: "Wikipedia", href: "https://sk.wikipedia.org/wiki/Suchohr%C3%ADb_hned%C3%BD" }
      ]
    },
    synonyms: [
      "Boletus badius (Fr.) Fr.",
      "Rostkovites badius (Fr.) P. Karst.",
      "Viscipelles badia (Fr.) Quél.",
      "Ixocomus badius (Fr.) Quél.",
      "Suillus badius (Fr.) Kuntze",
      "Xerocomus badius (Fr.) E.-J. Gilbert",
      "Boletus glutinosus Krombh.",
      "Boletus vaccinus Fr.",
      "Tubiporus vaccinus (Fr.) P. Karst.",
      "Suillus vaccinus (Fr.) Kuntze",
      "Boletus limatulus Frost",
      "Suillus limatulus (Frost) Kuntze"
    ]
  };

  var ARMILLARIA_MEDIA = "photos/Agaricales/Physalacriaceae/Armillaria_mellea/";
  var ARMILLARIA = {
    id: 11,
    name: "Armillaria mellea",
    author: "(Vahl) P. Kumm.",
    family: "Physalacriaceae",
    genus: "Armillaria",
    order: "Agaricales",
    edibility: "edible_with_caution",
    hymenium: "gills",
    path: [
      "Fungi",
      "Dikarya",
      "Basidiomycota",
      "Agaricomycotina",
      "Agaricomycetes",
      "Agaricomycetidae",
      "Agaricales",
      "Physalacriaceae",
      "Armillaria"
    ],
    summary: [
      "Agaricales",
      "Physalacriaceae",
      "Armillaria"
    ],
    added: "2026-10-23",
    plate: STORAGE + ARMILLARIA_MEDIA + "Armillaria_mellea@1600.webp",
    plateGrid: STORAGE + ARMILLARIA_MEDIA + "Armillaria_mellea@400.webp",
    plateCredit: {
      author: "L. Dufour",
      license: "not stated"
    },
    photos: [
      {
        src: STORAGE + ARMILLARIA_MEDIA + "hm1.webp",
        author: "Stu's Images",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Armillaria_mellea,_Honey_Fungus,_UK_1.jpg"
      },
      {
        src: STORAGE + ARMILLARIA_MEDIA + "hm2.webp",
        author: "Andreas Eichler",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:2015.10.10.-02-Viernheim--Honiggelber_Hallimasch.jpg"
      },
      {
        src: STORAGE + ARMILLARIA_MEDIA + "hm3.webp",
        author: "Jose Angel Urquia Goitia",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Armillaria_mellea_11.jpg"
      },
      {
        src: STORAGE + ARMILLARIA_MEDIA + "hm4.webp",
        author: "DidierFy",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Armillaria_mellea_10.2025_(4).jpg"
      },
      {
        src: STORAGE + ARMILLARIA_MEDIA + "hm5.webp",
        author: "RomkeHoekstra",
        license: "CC0",
        licenseUrl: "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
        source: "https://commons.wikimedia.org/wiki/File:2024_Echte_hunningswam_(Armillaria_mellea).jpg"
      }
    ],
    capFrom: 5,
    capTo: 15,
    stipeHeightFrom: 6,
    stipeHeightTo: 15,
    stipeThickFrom: 0.5,
    stipeThickTo: 1.5,
    fruitingFrom: 7,
    fruitingTo: 11,
    label: {
      en: "honey fungus",
      sk: "podpňovka obyčajná"
    },
    names: {
      en: [
        "honey mushroom",
        "bootlace fungus"
      ],
      sk: [
        "podpenky",
        "openky",
        "podpňovky",
        "podpníky",
        "michalky",
        "václavky",
        "láclavky",
        "lacvajky",
        "vícvalky",
        "michalice",
        "michalanky",
        "jesienky",
        "hromádky",
        "hromadzinky",
        "honcule",
        "veseliarky",
        "halamaše",
        "michalka",
        "michálka",
        "podpňúvka",
        "pňovka",
        "podpenka",
        "pinka",
        "podpinka",
        "openka",
        "opienka",
        "podpník",
        "pníček",
        "podpníček",
        "václavka",
        "láclavka",
        "lacvajka",
        "ráclavka",
        "laclavíčka",
        "vícvalka",
        "michalica",
        "michalanka",
        "jesienka",
        "jasienka",
        "hromádka",
        "hromadinka",
        "hromadzinka",
        "hromadenka",
        "honcuľa",
        "honcúra",
        "veseliarka",
        "chladnačka",
        "halamaš"
      ]
    },
    text: {
      en: {
        description: "A parasitic mushroom on living broadleaf wood, and a saprobe on stumps and dead roots. It is common in Britain and Ireland and through much of mainland Europe, rarer in Scandinavia and more frequent farther south, and it is recorded in eastern and southeastern North America and in California.",
        cap: "The cap is 3.5–15 cm across. It is honey-yellow to golden yellow or red-brown, usually darker at the centre. It starts deeply convex and flattens, often developing a raised centre and a wavy, striate margin. Fine dark or brownish scales cover the young cap, most noticeably toward the centre, though they may wear away with age. The surface is dry to tacky when wet.",
        hymenium: "The gills are adnate to shortly decurrent and close to crowded. Covered at first by a whitish to pale yellow partial veil, they are whitish to flesh-coloured when young, becoming yellowish and developing rusty-brown spots with age.",
        stipe: "The stipe is 6–20 cm tall and 0.5–2.5 cm thick, tapering toward the base where the stipes of a cluster fuse. It is whitish near the apex and yellowish to dark brown or olive-black toward the base, with a tough, fibrous outer rind and white pith inside. A persistent, thick, membranous white ring with a yellow fluffy underside and margin sits on the upper stipe.",
        flesh: "The cap flesh is white to whitish and firm, and does not change colour when cut. The odour is faint or sweetish, and the taste is mild at first, leaving a slightly bitter or astringent aftertaste. Actively growing mycelium in decaying wood is bioluminescent (foxfire), whereas the fruit bodies themselves do not glow.",
        sporePrint: "White to pale cream. The spores are ellipsoidal, smooth, and inamyloid, 7–9 × 5–6 μm, with a distinct apiculus. The basidia lack basal clamp connections.",
        habitat: "Fruit bodies appear from July to November in Britain, Ireland, and mainland Europe, and in autumn (or into winter in warmer climates) in North America. They grow in dense clusters on living trunks, stumps, and buried roots of broadleaf trees, including oaks and fruit trees, and spread through the soil and bark by tough black rhizomorphs (bootlaces).",
        uses: "The caps are edible only when thoroughly cooked; the tough, fibrous stipes are discarded. Some guides advise against collecting it because raw or undercooked fruit bodies cause severe gastrointestinal upset, and even well-cooked mushrooms can cause indigestion in sensitive individuals.",
        confusion: "Armillaria ostoyae has dark brown or black scales on the underside of its ring and grows mainly on conifers. Armillaria gallica has a bulbous stipe base and a cobwebby veil that leaves only a faint ring zone. Desarmillaria tabescens lacks a ring. Pholiota squarrosa has a scaly cap and stipe, gills that turn rusty brown, and no white spore print. Deadly Galerina marginata also grows on wood but is smaller, has a rusty-brown spore print, and lacks the thick white-and-yellow ring and black rhizomorphs. Several honey-coloured Armillaria species were treated under this single name until the 1970s.",},
      sk: {
        description: "Parazitická huba na živom dreve listnáčov a saprotrof na pňoch a odumretých koreňoch. V Británii a Írsku aj vo veľkej časti kontinentálnej Európy je hojná, v Škandinávii zriedkavejšia a ďalej na juh častejšia. Zaznamenaná je na východe a na juhovýchode Severnej Ameriky a v Kalifornii.",
        cap: "Klobúk má 35–150 mm v priemere. Najprv je takmer polguľovitý až klenutý s podvinutým okrajom, neskôr plocho rozprestretý, často s tupým hrboľom v strede a zvlneným, jemne ryhovaným okrajom. Býva medovožltý, žltozelenkavý, olivovohnedý až červenohnedý, v strede tmavší a pokrytý drobnými žltkastými až čiernohnedými vláknitými šupinkami, ktoré v dospelosti často miznú.",
        hymenium: "Lupene sú prirastené až krátko zbiehavé a pomerne husté, v mladosti zakryté belavým až žltkastým blanitým závojom. Najprv sú biele až krémovo ružovkasté, neskôr žltkasté až hnedasté s hrdzavohnedými škvrnami a v dospelosti od výtrusného prachu bielo poprášené.",
        stipe: "Hlúbik je 50–200 mm dlhý a 5–25 mm hrubý, valcovitý, často prehnutý a na báze zrastený v trsoch, s tuhou vláknitou kôrou a bielou vatovitou výplňou. Pod klobúkom je belavý až žltkastý, nižšie hnedastý až olivovočernastý. V hornej časti nesie hrubý, trvácny blanitý biely prsteň so žltkastým vločkatým okrajom a spodnou stranou.",
        flesh: "Dužina je biela až belavá, v klobúku pevná a v hlúbiku tuhá a vláknitá; na reze nemení farbu. Vôňa je slabá, mierne nasladlá až kyslastá, chuť je spočiatku mierna, no po chvíli v hrdle trpká a zvieravá. Aktívne rastúce podhubie v práchnivejúcom dreve v tme svetielkuje (bioluminiscencia), samotné plodnice však nesvetielkujú.",
        sporePrint: "Výtrusný prach je biely až bledokrémový. Výtrusy sú elipsoidné, hladké, bezfarebné a neamyloidné, s výrazným apikulom, veľké 7–9 × 5–6 μm. Bazídiá nemajú bazálne spony.",
        habitat: "Plodnice sa objavujú od júla do novembra (na Slovensku najhojnejšie od konca septembra do polovice októbra). Rastú v hustých trsoch na živých kmeňoch, pňoch a podzemných koreňoch listnatých stromov vrátane dubov a ovocných drevín, pričom v pôde a pod kôrou sa huba šíri tuhými čiernymi povrazcami podhubia (rizomorfami). Po odumretí hostiteľa ďalej rozkladá drevo.",
        uses: "Zbierajú sa len mladé klobúky (hlúbiky sú príliš tuhé a vláknité), ktoré sú jedlé až po dôkladnej tepelnej úprave trvajúcej aspoň 15–20 minút; hodia sa najmä na nakladanie do octového nálevu a do polievok. Surové alebo nedostatočne uvarené plodnice spôsobujú vážne žalúdočné a črevné ťažkosti a u citlivých osôb môže vyvolať nevoľnosť aj dobre uvarená huba.",
        confusion: "Do sedemdesiatych rokov 20. storočia sa pod týmto menom uvádzalo viacero príbuzných druhov. Podpňovka smreková (Armillaria ostoyae) má na spodnej strane prsteňa tmavohnedé až čierne šupinky a rastie najmä na ihličnanoch. Podpňovka žltá (Armillaria gallica) má hľuzovitú bázu hlúbika a len pavučinovú prstencovú zónu. Podpňovka bezprsteňová (Desarmillaria tabescens) prsteň vôbec nemá. Nejedlá šupinačka strapatá (Pholiota squarrosa) má hrubo šupinatý klobúk aj hlúbik, hrdzavohnednúce lupene a reďkovkovú chuť. Nebezpečná je zámena s jedovatou strapcovkou zväzkovitou (Hypholoma fasciculare), ktorá má sírovožlté až olivovozelené lupene a horkú chuť, alebo so smrteľne jedovatou kapucňovkou okrovohnedou (Galerina marginata), ktorá je drobnejšia a má hrdzavohnedý výtrusný prach.",}
    },
    sources: {
      en: [
        {
          group: "text",
          name: "First Nature",
          href: "https://www.first-nature.com/fungi/armillaria-mellea.php"
        },
        {
          group: "text",
          name: "MushroomExpert",
          href: "https://www.mushroomexpert.com/armillaria_mellea.html"
        },
        {
          group: "text",
          name: "MushroomExpert",
          href: "https://mushroomexpert.com/fungionwood/gilled%20fungi/species%20pages/Armillaria%20mellea.htm",
          detail: "bootlace fungus"
        },
        {
          group: "text",
          name: "Wikipedia",
          href: "https://en.wikipedia.org/wiki/Armillaria_mellea"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=190066",
          detail: "190066"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=190066",
          detail: "190066"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=150428",
          detail: "150428"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=190066",
          detail: "190066"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=17098",
          detail: "17098"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/190066"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/2536891",
          detail: "2536891"
        }
      ],
      sk: [
        {
          group: "text",
          name: "nahuby.sk",
          href: "https://www.nahuby.sk/atlas-hub/Armillaria-mellea/podpnovka-obycajna/vaclavka-obecna/ID492"
        },
        {
          group: "text",
          name: "Wikipedia",
          href: "https://sk.wikipedia.org/wiki/Podp%C5%88ovka_oby%C4%8Dajn%C3%A1"
        },
        {
          group: "text",
          name: "Wikipedia",
          href: "https://sk.wikipedia.org/wiki/Podp%C5%88ovka",
          detail: "podpňovka"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=190066",
          detail: "190066"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=190066",
          detail: "190066"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=150428",
          detail: "150428"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=190066",
          detail: "190066"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=17098",
          detail: "17098"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/190066"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/2536891",
          detail: "2536891"
        }
      ]
    },
    synonyms: [
      "Agaricus melleus Vahl",
      "Armillariella mellea (Vahl) P. Karst.",
      "Omphalia mellea (Vahl) Quél.",
      "Mastoleucomyces melleus (Vahl) Kuntze",
      "Agaricites melleus (Vahl) Mesch.",
      "Polymyces melleus (Vahl) Earle",
      "Clitocybe mellea (Vahl) Ricken",
      "Lepiota mellea (Vahl) J.E. Lange",
      "Collybia mellea (Vahl) Emel",
      "Agaricus versicolor With.",
      "Stropharia versicolor (With.) Fr.",
      "Geophila versicolor (With.) Quél.",
      "Fungus versicolor (With.) Kuntze",
      "Armillariella olivacea (Rick) Singer"
    ]
  };

  var COPRINUS_MEDIA = "photos/Agaricales/Agaricaceae/Coprinus_comatus/";
  var COPRINUS = {
    id: 12,
    name: "Coprinus comatus",
    author: "(O.F. Müll.) Pers.",
    family: "Agaricaceae",
    genus: "Coprinus",
    order: "Agaricales",
    edibility: "choice",
    hymenium: "gills",
    path: [
      "Fungi",
      "Dikarya",
      "Basidiomycota",
      "Agaricomycotina",
      "Agaricomycetes",
      "Agaricomycetidae",
      "Agaricales",
      "Agaricaceae",
      "Coprinus"
    ],
    summary: [
      "Agaricales",
      "Agaricaceae",
      "Coprinus"
    ],
    added: "2026-10-23",
    plate: STORAGE + COPRINUS_MEDIA + "Coprinus_comatus@1600.webp",
    plateGrid: STORAGE + COPRINUS_MEDIA + "Coprinus_comatus@400.webp",
    photos: [
      {
        src: STORAGE + COPRINUS_MEDIA + "co1.webp",
        author: "Raphaël Blo.",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Coprinus_comatus_(1).JPG"
      },
      {
        src: STORAGE + COPRINUS_MEDIA + "co2.webp",
        author: "Björn S...",
        license: "CC BY-SA 2.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
        source: "https://commons.wikimedia.org/wiki/File:Coprinus_comatus_(30053094063).jpg"
      },
      {
        src: STORAGE + COPRINUS_MEDIA + "co3.webp",
        author: "Agnes Monkelbaan",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Breil-Brigels_(actm)_19.jpg"
      },
      {
        src: STORAGE + COPRINUS_MEDIA + "co4.webp",
        author: "B59210",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Coprin_chevelu,_Coprinus_comatus.jpg"
      },
      {
        src: STORAGE + COPRINUS_MEDIA + "co5.webp",
        author: "Dr. Hans-Günter Wagner",
        license: "CC BY-SA 2.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
        source: "https://commons.wikimedia.org/wiki/File:Coprinus_comatus_(1)_(48992601347).jpg"
      }
    ],
    plateCredit: {
      author: "L. Dufour",
      license: "not stated"
    },
    capTo: 6,
    stipeHeightTo: 30,
    stipeThickFrom: 1,
    stipeThickTo: 1.5,
    fruitingFrom: 4,
    fruitingTo: 11,
    label: {
      en: "shaggy inkcap",
      sk: "hnojník obyčajný"
    },
    names: {
      en: [
        "lawyer's wig",
        "shaggy mane",
        "shaggy ink cap"
      ]
    },
    text: {
      en: {
        description: "A saprobic mushroom of meadows, lawns, path edges, and open woodland. It is widespread and common in Britain and Ireland and through mainland Europe, from Scandinavia to the Mediterranean, and it also occurs in North America. It appears to have been introduced to Australia, New Zealand, and Iceland.",
        cap: "The cap is 5–15 cm tall (occasionally up to 20 cm) and 3–8 cm across. It is oval to cylindrical when young, expanding into a narrow bell shape. The surface is white with a pale brown crown and breaks into large, shaggy, recurved scales. At maturity the cap darkens and deliquesces (dissolves into black ink) from the lower margin upward until only a small disc remains at the top of the stipe.",
        hymenium: "The gills are free to adnexed and very crowded. They are white at first, then turn pink and finally black before deliquescing into a spore-laden liquid from the lower edge upward. Pleurocystidia are absent.",
        stipe: "The stipe is 10–30 cm tall (exceptionally up to 40 cm) and 1–2.5 cm thick, cylindrical or tapering slightly upward, smooth, white, brittle, and hollow, with a loose string-like strand of fibres hanging inside the cavity. It separates easily from the cap. A narrow, movable white ring near the base often becomes stained with black spores or slips down the stipe.",
        flesh: "The flesh is white, thin, and fragile. The odour and taste are mild and pleasant.",
        sporePrint: "Black to brownish black. The spores are ellipsoidal and smooth, 9–13 × 6.5–9.5 μm, with a central or slightly eccentric germ pore.",
        habitat: "Fruit bodies appear from April to November in Britain, Ireland, and mainland Europe, and in summer and autumn in North America, most abundantly soon after rain. They grow singly, in small groups, or in troops and rings on lawns, grass verges, path edges, wood chips, and disturbed or compacted ground.",
        uses: "Young firm fruit bodies are a choice edible mushroom, provided they are cooked soon after picking while the gills are still white. Once picked, the gills quickly turn black and dissolve into an inedible inky mass. Unlike Coprinopsis atramentaria, this species does not contain coprine.",
        confusion: "When young, Coprinopsis picacea can look similar, but its cap skin is dark brown with contrasting white veil patches and it is poisonous. Coprinopsis atramentaria is smaller, smoother, and grey-brown, and contains coprine, which causes poisoning when combined with alcohol. In North America, toxic Chlorophyllum molybdites has been confused with unopened fruit bodies, and the desert fungus Podaxis pistillaris is superficially similar in shape.",
        notes: "While most inkcaps have been transferred on molecular grounds to Coprinopsis, Coprinellus, and Parasola in the Psathyrellaceae, this species remains in the Agaricaceae. A 2019 assessment (amended in 2022) lists it as Least Concern. Its mycelium can immobilise and digest soil nematodes."},
      sk: {
        description: "Saprotrofná huba lúk, trávnikov, okrajov chodníkov a otvoreného lesa. V Británii a Írsku aj v kontinentálnej Európe, od Škandinávie po Stredomorie, je rozšírená a hojná. Vyskytuje sa aj v Severnej Amerike. Zavlečená bola do Austrálie, na Nový Zéland a na Island.",
        cap: "Klobúk je 50–150 mm vysoký a 30–80 mm široký, v mladosti valcovitý až úzko vajcovitý, neskôr úzko zvoncovitý. Je čisto biely so svetlohnedým až okrovým hladkým temenom, na zvyšku povrchu pokrytý veľkými, odstávajúcimi bielymi až hnedastými vláknitými šupinami. Pri dozrievaní sa od spodného okraja smerom nahor roztápa (autolýza) na čiernu kvapalinu.",
        hymenium: "Lupene sú voľné a veľmi husté. V mladosti sú čisto biele, postupne od spodného okraja ružovejú a napokon černejú a spolu s klobúkom sa rozpúšťajú na čiernu atramentovú tekutinu plnú výtrusov.",
        stipe: "Hlúbik je 100–300 mm vysoký a 10–25 mm hrubý, valcovitý, smerom nahor mierne zúžený, na báze hľuzovito zhrubnutý, biely, hodvábne lesklý a dutý, s voľným bielym vláknom vo vnútri dutiny. V spodnej časti má úzky, voľne posuvný biely prsteň, ktorý sa ľahko stráca.",
        flesh: "Dužina je v mladosti biela, tenká, krehká a mäkká, s príjemnou jemnou chuťou a nevýraznou vôňou.",
        sporePrint: "Výtrusný prach je čierny až čiernohnedý. Výtrusy sú elipsoidné a hladké, s klíčnym pórom, veľké 9–13 × 6,5–9,5 μm.",
        habitat: "Plodnice sa objavujú od apríla do novembra, najhojnejšie v lete a na jeseň krátko po daždi. Rastú jednotlivo, v skupinách, v radoch alebo v kruhoch na trávnikoch, lúkach, pasienkoch, trávnatých okrajoch ciest, pri chodníkoch, v záhradách, na drevnej štiepke a na uľahnutej či narušenej pôde.",
        uses: "Mladé pevné plodnice s čisto bielymi lupeňmi sú výborná jedlá huba. Keďže po zbere rýchlo starnú a roztápajú sa na nejedlú čiernu hmotu, musia sa tepelne upraviť krátko po nazbieraní. Na rozdiel od hnojníka atramentového (Coprinopsis atramentaria) tento druh neobsahuje koprín, takže v kombinácii s alkoholom nespôsobuje otravu.",
        confusion: "V mladosti sa mu môže podobať nejedlý hnojník strakatý (Coprinopsis picacea), ktorý má však tmavohnedý až čiernohnedý klobúk s kontrastnými bielymi útržkami plachtičky a nepríjemný zápach. Menší hnojník atramentový (Coprinopsis atramentaria) má sivohnedý, takmer hladký klobúk a obsahuje koprín, ktorý pri požití alkoholu vyvoláva akútnu otravu. V Severnej Amerike sa s mladými plodnicami zamieňa jedovatý druh Chlorophyllum molybdites.",
        notes: "Na rozdiel od väčšiny ostatných hnojníkov preradených do čeľade Psathyrellaceae zostal v čeľadi pečiarkovité (Agaricaceae). Hodnotenie IUCN z roku 2019 (upravené v roku 2022) ho zaraďuje medzi málo dotknuté druhy (Least Concern)."}
    },
    sources: {
      en: [
        {
          group: "text",
          name: "First Nature",
          href: "https://www.first-nature.com/fungi/coprinus-comatus.php"
        },
        {
          group: "text",
          name: "MushroomExpert",
          href: "https://www.mushroomexpert.com/coprinus_comatus.html"
        },
        {
          group: "text",
          name: "Wikipedia",
          href: "https://en.wikipedia.org/wiki/Coprinus_comatus"
        },
        {
          group: "text",
          name: "IUCN",
          href: "https://www.iucnredlist.org/species/122090475/222967238"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=148667",
          detail: "148667"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=148667",
          detail: "148667"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=148667",
          detail: "148667"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/genusrecord.asp?RecordID=17367",
          detail: "17367"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/name/Coprinus%20comatus"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/7987658",
          detail: "7987658"
        }
      ],
      sk: [
        {
          group: "text",
          name: "Beliana",
          href: "https://beliana.sav.sk/heslo/hnojnik-obycajny",
          detail: "hnojník obyčajný"
        },
        {
          group: "text",
          name: "First Nature",
          href: "https://www.first-nature.com/fungi/coprinus-comatus.php"
        },
        {
          group: "text",
          name: "Wikipedia",
          href: "https://en.wikipedia.org/wiki/Coprinus_comatus"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=148667",
          detail: "148667"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=148667",
          detail: "148667"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=148667",
          detail: "148667"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/genusrecord.asp?RecordID=17367",
          detail: "17367"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/name/Coprinus%20comatus"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/7987658",
          detail: "7987658"
        }
      ]
    },
    synonyms: [
      "Agaricus comatus O.F. Müll.",
      "Pselliophora comata (O.F. Müll.) P. Karst.",
      "Agaricus ovatus Scop.",
      "Agaricus ovatus Schaeff.",
      "Coprinus ovatus (Schaeff.) Fr.",
      "Pselliophora ovata (Schaeff.) P. Karst.",
      "Agaricus fimetarius Bolton",
      "Agaricus cylindricus Sowerby"
    ]
  };

  var GYROMITRA_MEDIA = "photos/Pezizales/Discinaceae/Gyromitra_esculenta/";
  var GYROMITRA = {
    id: 13,
    name: "Gyromitra esculenta",
    author: "Pers. ex Fr.",
    family: "Discinaceae",
    genus: "Gyromitra",
    order: "Pezizales",
    edibility: "deadly",
    hymenium: "smooth",
    path: [
      "Fungi",
      "Dikarya",
      "Ascomycota",
      "Pezizomycotina",
      "Pezizomycetes",
      "Pezizomycetidae",
      "Pezizales",
      "Discinaceae",
      "Gyromitra"
    ],
    summary: [
      "Pezizales",
      "Discinaceae",
      "Gyromitra"
    ],
    added: "2026-10-23",
    plate: STORAGE + GYROMITRA_MEDIA + "Gyromitra_esculenta@1600.webp",
    plateGrid: STORAGE + GYROMITRA_MEDIA + "Gyromitra_esculenta@400.webp",
    photos: [
      {
        src: STORAGE + GYROMITRA_MEDIA + "ge1.webp",
        author: "ChristianSW",
        license: "CC0 1.0",
        licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
        source: "https://commons.wikimedia.org/wiki/File:Fr%C3%BChjahrs-Giftlorchel,_LSG_Seppenser_Bach,_2019-04.jpg"
      },
      {
        src: STORAGE + GYROMITRA_MEDIA + "ge2.webp",
        author: "Lebrac",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Giftlorchel.jpg"
      },
      {
        src: STORAGE + GYROMITRA_MEDIA + "ge3.webp",
        author: "Toffel",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Gyromitra_esculenta_2011-04-17.JPG"
      },
      {
        src: STORAGE + GYROMITRA_MEDIA + "ge4.webp",
        author: "SiberianJay",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Stenmurkla-01218-B2.jpg"
      },
      {
        src: STORAGE + GYROMITRA_MEDIA + "ge5.webp",
        author: "Jerzy Opioła",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Gyromitra_esculenta_BPN1.jpg"
      }
    ],
    plateCredit: {
      author: "L. Dufour",
      license: "public domain",
      source: "https://www.biodiversitylibrary.org/page/3270667"
    },
    capFrom: 5,
    capTo: 15,
    stipeHeightFrom: 2,
    stipeHeightTo: 5,
    stipeThickFrom: 2,
    stipeThickTo: 3,
    fruitingFrom: 4,
    fruitingTo: 7,
    label: {
      en: "false morel",
      sk: "ušiak obyčajný"
    },
    names: {
      en: [
        "turban fungus",
        "brain mushroom",
        "beefsteak morel",
        "elephant ears",
        "rain mushroom"
      ],
      sk: [
        "ušiak",
        "ucháč",
        "uško",
        "volovo ucho",
        "pšeničňak",
        "majovka",
        "lesný smrh"
      ]
    },
    text: {
      en: {
        description: "A spring mushroom of sandy coniferous woodland. It is widespread in Europe, where it is more frequent in the mountains than in the lowlands, and it is also recorded across much of North America. In Britain and Ireland it is rarely recorded and very localised.",
        cap: "The cap is 5–15 cm across and 4–8 cm tall. It is red-brown, irregularly lobed, and rather like a brain, and it is usually broader than it is tall. Rounded margins of the folds leave irregular hollow chambers inside the cap.",
        hymenium: "The fertile surface covers the outside of the cap. It is smooth at first and becomes deeply wrinkled and folded. The margin is turned back and fused to the stipe, and it is rarely free when young.",
        stipe: "The stipe is creamy white and fragile. It is 2–5 cm tall and 2–3 cm across. Several irregular tube-like hollows run inside it.",
        flesh: "The odour and the taste are not distinctive.",
        sporePrint: "Yellowish buff, also described as whitish. The spores are ellipsoidal, smooth, and hyaline, 18–23 μm long and occasionally to 25 μm, by 10–12.5 μm wide, usually with two oil drops. The asci are cylindrical, eight-spored, and 180–220 × 15–17 μm.",
        habitat: "Fruit bodies appear from April into July, and they may come up as the snow melts. It grows on sandy soil in coniferous woodland, most often under pines and sometimes under aspens, and often where the ground has been disturbed.",
        uses: "It is deadly poisonous when raw or improperly prepared. It contains gyromitrin, which hydrolyses in the body to the toxic compound monomethylhydrazine (MMH), damaging the liver, central nervous system, and red blood cells. Although fruit bodies have traditionally been eaten in Scandinavia and eastern Europe after repeated parboiling in changes of water, boiling does not reliably remove all of the toxin, inhaling the cooking steam can itself cause poisoning, and repeated meals allow the toxin to accumulate.",
        confusion: "Morchella esculenta has a deeply pitted cap and one continuous hollow, and its stipe is usually longer. Helvella crispa has a creamy-white saddle-shaped cap and a stipe with longitudinal hollows. Gyromitra gigas, Gyromitra infula, and Gyromitra ambigua are similar, and the last two are poisonous.",},
      sk: {
        description: "Jarná huba piesočnatého ihličnatého lesa. V Európe je rozšírená, v horách častejšia ako v nížinách, a zaznamenaná je aj na veľkej časti Severnej Ameriky. V Británii a Írsku je zriedkavo zaznamenaná a veľmi lokálna.",
        cap: "Klobúk má 20–150 mm (zvyčajne do 80 mm) v priemere. V obryse býva okrúhly alebo hranato členitý, na povrchu vráskavý a mozgovito poprehýbaný. Sčasti je prirastený k hlúbiku a sčasti od neho laločnato odstáva. Na vonkajšej strane je gaštanovohnedý, červenohnedý až tmavohnedý, iba zriedkavo bledší; vnútri má nepravidelné duté komôrky a je biely.",
        hymenium: "Výtrusorodá vrstva pokrýva vonkajší, mozgovito poprehýbaný povrch klobúka, ktorý je gaštanovohnedý až tmavohnedý.",
        stipe: "Hlúbik je 20–70 mm vysoký a 15–35 mm hrubý. Je nepravidelne valcovitý až bočne stlačený, často zbrázdený a vo vnútri rozdelený na niekoľko nepravidelných dutín. Navonok je belavý, žltkastý alebo mäsovočervenkastý až fialovkastý a jemne zamatovo plstnatý; vnútri je biely a krehký.",
        flesh: "Dužina je biela, tenká, voskovito chrupkovitá a krehká, s príjemnou, no nevýraznou chuťou a vôňou.",
        sporePrint: "Výtrusný prach je belavý až žltkastokrémový. Výtrusy sú elipsoidné, hladké a bezfarebné, zvyčajne s dvoma tukovými kvapkami, veľké 18–23 × 10–12,5 μm.",
        habitat: "Plodnice sa objavujú od apríla (niekedy už v marci pri topení snehu) do júla. Rastie na piesočnatej a kyslej pôde v ihličnatých lesoch, najčastejšie pod borovicami a smrekmi, občas aj pod osikami, najmä na miestach s narušeným povrchom pôdy, na rúbaniskách a okrajoch lesných ciest.",
        uses: "Je smrteľne jedovatá v surovom stave aj pri nedostatočnej úprave. Obsahuje prudký jed gyromitrín, ktorý sa v tele premieňa na monometylhydrazín (MMH) a poškodzuje pečeň, centrálnu nervovú sústavu a červené krvinky. Hoci sa v niektorých krajinách severnej a východnej Európy tradične konzumovala po opakovanom prevarení a zliatí vody, ani varenie nezaručuje úplné odstránenie toxínu a otravu môže spôsobiť už vdychovanie výparov pri varení.",
        confusion: "Nebezpečná je zámena s jedlým smrčkom jedlým (Morchella esculenta) alebo smrčkom kužeľovitým (Morchella conica), ktoré však majú klobúk pokrytý sieťou pravidelných jamiek a priehradiek (nie mozgovitými závitmi) a celá plodnica má na reze jednu súvislú dutinu. Podobný ušiak obrovský (Gyromitra gigas) má svetlejší, žemľovookrový až olivovohnedastý klobúk, býva väčší (60–160 mm) a rastie najmä v listnatých a zmiešaných lesoch.",}
    },
    sources: {
      en: [
        {
          group: "text",
          name: "First Nature",
          href: "https://www.first-nature.com/fungi/gyromitra-esculenta.php"
        },
        {
          group: "text",
          name: "Wikipedia",
          href: "https://en.wikipedia.org/wiki/Gyromitra_esculenta"
        },
        {
          group: "text",
          name: "Fungi of Great Britain and Ireland",
          href: "https://fungi.myspecies.info/content/gyromitra-esculenta"
        },
        {
          group: "text",
          name: "NBN Atlas",
          href: "https://species.nbnatlas.org/species/NBNSYS0000019569"
        },
        {
          group: "text",
          name: "California Fungi",
          href: "https://www.mykoweb.com/CAF/species/Gyromitra_esculenta.html"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=236690",
          detail: "236690"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=236690",
          detail: "236690"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=236690",
          detail: "236690"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/genusrecord.asp?RecordID=2184",
          detail: "2184"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/236690"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/5258510",
          detail: "5258510"
        }
      ],
      sk: [
        {
          group: "text",
          name: "nahuby.sk",
          href: "https://www.nahuby.sk/atlas-hub/Gyromitra-esculenta/usiak-obycajny/uchac-obecny/ID776",
          detail: "ušiak obyčajný"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=236690",
          detail: "236690"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=236690",
          detail: "236690"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=236690",
          detail: "236690"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/genusrecord.asp?RecordID=2184",
          detail: "2184"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/236690"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/5258510",
          detail: "5258510"
        }
      ]
    },
    synonyms: [
      "Helvella esculenta Pers.",
      "Physomitra esculenta (Pers. ex Fr.) Boud.",
      "Helvella phalloides A. Cumino"
    ]
  };

  var RUBESCENS_MEDIA = "photos/Agaricales/Amanitaceae/Amanita_rubescens/";
  var RUBESCENS = {
    id: 14,
    name: "Amanita rubescens",
    author: "Pers.",
    family: "Amanitaceae",
    genus: "Amanita",
    order: "Agaricales",
    edibility: "edible_with_caution",
    hymenium: "gills",
    path: [
      "Fungi",
      "Dikarya",
      "Basidiomycota",
      "Agaricomycotina",
      "Agaricomycetes",
      "Agaricomycetidae",
      "Agaricales",
      "Amanitaceae",
      "Amanita",
    ],
    summary: [
      "Agaricales",
      "Amanitaceae",
      "Amanita"
    ],
    added: "2026-10-23",
    plate: STORAGE + RUBESCENS_MEDIA + "Amanita_rubescens@1600.webp",
    plateGrid: STORAGE + RUBESCENS_MEDIA + "Amanita_rubescens@400.webp",
    photos: [
      {
        src: STORAGE + RUBESCENS_MEDIA + "ar1.webp",
        author: "Andreas Kunze",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:2011-07-30_Amanita_rubescens_1.jpg"
      },
      {
        src: STORAGE + RUBESCENS_MEDIA + "ar2.webp",
        author: "Andreas Kunze",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:2011-07-30_Amanita_rubescens_6.jpg"
      },
      {
        src: STORAGE + RUBESCENS_MEDIA + "ar3.webp",
        author: "Sanja565658",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Amanita_rubescens_04.JPG"
      },
      {
        src: STORAGE + RUBESCENS_MEDIA + "ar4.webp",
        author: "Одинець Сергій",
        license: "CC BY 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Amanita_rubescens_-_%D0%9C%D1%83%D1%85%D0%BE%D0%BC%D0%BE%D1%80_%D1%81%D1%96%D1%80%D0%BE-%D1%80%D0%BE%D0%B6%D0%B5%D0%B2%D0%B8%D0%B9,_%D0%9C%D1%83%D1%85%D0%BE%D0%BC%D0%BE%D1%80_%D1%81%D0%B5%D1%80%D0%BE-%D1%80%D0%BE%D0%B7%D0%BE%D0%B2%D1%8B%D0%B9.jpg"
      },
      {
        src: STORAGE + RUBESCENS_MEDIA + "ar5.webp",
        author: "Dr. Hans-Günter Wagner",
        license: "CC BY-SA 2.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
        source: "https://commons.wikimedia.org/wiki/File:Amanita_rubescens_(35940089010).jpg"
      },
    ],
    plateCredit: {
      author: "L. Dufour",
      license: "public domain",
      source: "https://www.biodiversitylibrary.org/item/22673"
    },
    capFrom: 5,
    capTo: 20,
    stipeHeightFrom: 7,
    stipeHeightTo: 15,
    stipeThickFrom: 1,
    stipeThickTo: 2,
    fruitingFrom: 6,
    fruitingTo: 10,
    label: {
      en: "blusher",
      sk: "muchotrávka červenkastá"
    },
    names: {
      en: [
        "blushing amanita"
      ]
    },
    text: {
      en: {
        description: "An ectomycorrhizal mushroom of deciduous and coniferous woodland, often in small groups on poor acidic soil. It is very common in Britain, Ireland, and mainland Europe, and native to Europe and Asia. In South Africa it is thought to have been introduced with planted trees. North American records are treated as other species.",
        cap: "The cap is 5–20 cm across, though some mature caps are only about 2.5 cm. The colour runs from nearly white through pink and brown to almost black, and it is often brownish pink. Irregular off-white or grey fragments of the universal veil usually stay on the surface, and heavy rain can wash them off. The cap starts domed and flattens, and it sometimes becomes slightly funnel-shaped.",
        hymenium: "The gills are white, crowded, and adnate to nearly free. On a mature fruit body they are often spotted pink or rusty red, and they turn pink or dull red when handled.",
        stipe: "The stipe is 7–15 cm long and 1–2 cm thick. It is white above the ring and reddish brown below, often with deep pink flecks. A thin, fragile hanging ring is usually grooved and often ragged. The base is swollen. A distinct volva shows only on a very young fruit body and does not leave rings around the base. The stipe becomes hollow with age.",
        flesh: "The flesh is white. Cut or bruised flesh of the cap and the stipe turns deep pink or dull red. A fresh fruit body has no distinctive odour or taste. An older fruit body full of maggots can smell unpleasant.",
        sporePrint: "White. The spores are smooth, broadly ellipsoidal to ovoid, 8–9 × 5–5.5 μm, and turn blue-black in iodine.",
        habitat: "Fruit bodies appear from June to October in Britain and Ireland, and in mild spells as late as December. It grows with broadleaf and conifer trees and is particularly abundant in conifer woods.",
        uses: "It is eaten only after thorough cooking. Raw flesh contains a haemolytic toxin that can cause anaemia, and thorough cooking destroys that toxin. The fruit bodies resemble poisonous amanitas.",
        confusion: "Amanita excelsa has flesh that does not change colour when cut, and many of its fruit bodies otherwise look like a pale form of this mushroom. Amanita pantherina has a brown cap with pure white veil fragments, a smooth collar-like volval rim, and flesh that does not turn pink. Washed-out Amanita muscaria can be orange-brown or pale yellow, with white veil fragments and no reddening flesh. Amanita caesarea has a brilliant orange cap with a lined margin and a yellow stipe, and it is rarely found outside southern Europe.",
        notes: "One form has a sulphur-yellow ring and is otherwise the same."},
      sk: {
        description: "Ektomykorízna huba listnatých a ihličnatých lesov, často v malých skupinách na chudobnej kyslej pôde. Je veľmi častá v Británii, Írsku a kontinentálnej Európe a pôvodná je v Európe a Ázii. V Južnej Afrike sa pokladá za zavlečenú s vysadenými stromami. Severoamerické nálezy sa pokladajú za iné druhy.",
        cap: "Klobúk je široký 5 až 20 cm (zvyčajne do 15 cm). Za mladi je takmer guľovitý, neskôr polguľovito klenutý a v dospelosti plochý, hrubo mäsitý. Spočiatku je bledoružový, potom mäsovoružový, červenohnedý až hnedý, nepravidelne pokrytý belavými, sivastými alebo mäsovohnedastými bradavkovitými zvyškami plachtičky. Okraj býva v dospelosti jemne a krátko ryhovaný.",
        hymenium: "Lupene sú 6 až 12 mm široké, husté a pri hlúbiku takmer voľné. Najprv sú biele, neskôr a po otlačení červeno až vínovočerveno škvrnité.",
        stipe: "Hlúbik je biely až mäsovoružovkastý, dlhý 6 až 18 cm a hrubý 1,5 až 4 cm. Je valcovitý, dolu kyjakovito zhrubnutý a zakončený zahrotenou hľuzou bez voľnej pošvy, pokrytou niekoľkými radmi drobných plochých bradaviek. V mladosti je plný, neskôr špongiovito vypchatý až dutý. Veľký ovisnutý blanitý prsteň je biely alebo ružovkastý a na vrchnej strane zreteľne vejárovito ryhovaný.",
        flesh: "Dužina je biela, na reze, pri poranení a v chodbičkách lariev hmyzu postupne ružovie až vínovočervenie (najmä v spodnej časti hlúbika a pod pokožkou klobúka). Vôňa je slabá, chuť je spočiatku mierna a neskôr mierne trpká až škrabľavá.",
        sporePrint: "Výtrusný prach je biely. Výtrusy sú široko elipsoidné, hladké, bezfarebné a amyloidné, veľké 8–9 × 5,5–7 μm.",
        habitat: "Plodnice sa objavujú od júna do novembra (pri miernom počasí až do decembra). Rastie v listnatých aj ihličnatých lesoch od nížin až po horské smrečiny, tiež na rašeliniskách, v parkoch a alejach, často vo veľkom množstve aj za suchšieho počasia.",
        uses: "Po dôkladnej tepelnej úprave je to vynikajúca jedlá huba; za surova je však jedovatá, pretože obsahuje termolabilný hemolytický toxín (rubescenslyzín), ktorý sa varením alebo dusením rozkladá. Tepelne upravené čerstvé plodnice sú vhodné do polievok, omáčok, praženíc či na vyprážanie a mladé uzavreté plodnice sa po prevarení nakladajú do octového nálevu. Na sušenie nie je vhodná.",
        confusion: "Nebezpečná je zámena s prudko jedovatou muchotrávkou tigrovanou (Amanita pantherina), ktorej dužina na reze ani pri poranení nikdy nečervenie, prsteň na vrchnej strane nemá ryhovanie a hľuzu na báze hlúbika obopína prirastená pošva s ostro odsadeným golierikovitým okrajom a prstencovitými pásikmi. Podobná jedlá, no chuťovo menej hodnotná muchotrávka hrubá (Amanita excelsa) má sivohnedý klobúk so sivými útržkami plachtičky a takisto nemennú bielu dužinu, ktorá nečervenie.",}
    },
    sources: {
      en: [
        {
          group: "text",
          name: "First Nature",
          href: "https://www.first-nature.com/fungi/amanita-rubescens.php"
        },
        {
          group: "text",
          name: "Wikipedia",
          href: "https://en.wikipedia.org/wiki/Amanita_rubescens"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=172799",
          detail: "172799"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=172799",
          detail: "172799"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/Synonymy.asp?RecordID=172799",
          detail: "172799"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/172799"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/7496350",
          detail: "7496350"
        }
      ],
      sk: [
        {
          group: "text",
          name: "Wikipedia",
          href: "https://sk.wikipedia.org/wiki/Muchotr%C3%A1vka_%C4%8Dervenkast%C3%A1"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=172799",
          detail: "172799"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=172799",
          detail: "172799"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/Synonymy.asp?RecordID=172799",
          detail: "172799"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/172799"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/7496350",
          detail: "7496350"
        }
      ]
    },
    synonyms: [
      "Agaricus rubescens (Pers.) Fr.",
      "Limacium rubescens (Pers.) J. Schröt.",
      "Amplariella rubescens (Pers.) E.-J. Gilbert",
      "Agaricus verrucosus Bull.",
      "Agaricus magnificus Fr.",
      "Amanita magnifica (Fr.) Gillet",
      "Lepiota magnifica (Fr.) P. Karst.",
      "Amanita annulosulphurea (Gillet) Seyot"
    ]
  };

  var HYPHOLOMA_MEDIA = "photos/Agaricales/Strophariaceae/Hypholoma_fasciculare/";
  var HYPHOLOMA = {
    id: 15,
    name: "Hypholoma fasciculare",
    author: "(Huds.) P. Kumm.",
    family: "Strophariaceae",
    genus: "Hypholoma",
    order: "Agaricales",
    edibility: "poisonous",
    hymenium: "gills",
    path: [
      "Fungi",
      "Dikarya",
      "Basidiomycota",
      "Agaricomycotina",
      "Agaricomycetes",
      "Agaricomycetidae",
      "Agaricales",
      "Strophariaceae",
      "Hypholoma"
    ],
    summary: [
      "Agaricales",
      "Strophariaceae",
      "Hypholoma"
    ],
    added: "2026-10-23",
    plate: STORAGE + HYPHOLOMA_MEDIA + "Hypholoma_fasciculare@1600.webp",
    plateGrid: STORAGE + HYPHOLOMA_MEDIA + "Hypholoma_fasciculare@400.webp",
    photos: [
      {
        src: STORAGE + HYPHOLOMA_MEDIA + "hf1.webp",
        author: "Kreuzschnabel",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:2014_Hypholoma_fasciculare.jpg"
      },
      {
        src: STORAGE + HYPHOLOMA_MEDIA + "hf2.webp",
        author: "RsVe",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:2016-09-10_Hypholoma_fasciculare.jpg"
      },
      {
        src: STORAGE + HYPHOLOMA_MEDIA + "hf3.webp",
        author: "AnRo0002",
        license: "CC0 1.0",
        licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
        source: "https://commons.wikimedia.org/wiki/File:20191013Hypholoma_fasciculare1.jpg"
      },
      {
        src: STORAGE + HYPHOLOMA_MEDIA + "hf4.webp",
        author: "AnRo0002",
        license: "CC0 1.0",
        licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
        source: "https://commons.wikimedia.org/wiki/File:20191013Hypholoma_fasciculare4.jpg"
      },
      {
        src: STORAGE + HYPHOLOMA_MEDIA + "hf5.webp",
        author: "Norbert Nagel",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Clustered_woodlover_-_Hypholoma_fasciculare_-_Gr%C3%BCnbl%C3%A4ttriger_Schwefelkopf_-_sulfur_tuft_-_01.jpg"
      }
    ],
    plateCredit: {
      author: "L. Dufour",
      license: "public domain",
      source: "https://www.biodiversitylibrary.org/page/3270838"
    },
    capFrom: 2,
    capTo: 7,
    stipeHeightFrom: 5,
    stipeHeightTo: 12,
    stipeThickFrom: 0.5,
    stipeThickTo: 1,
    fruitingFrom: 1,
    fruitingTo: 12,
    label: {
      en: "sulphur tuft",
      sk: "strapcovka zväzkovitá"
    },
    names: {
      en: [
        "sulfur tuft",
        "clustered woodlover"
      ]
    },
    text: {
      en: {
        description: "A wood-rotting mushroom of dense tufts on stumps and fallen trunks. It is very common in Britain and Ireland and across most of mainland Europe, especially in the north and the centre. It is also common in North America, and it is recorded in Iran and in eastern Anatolia.",
        cap: "The cap is 2–7 cm across. It is sulphur yellow, often tan at the centre, and convex or slightly umbonate. Dark velar remnants cling to the margin.",
        hymenium: "The gills are crowded and adnate. They are sulphur yellow at first, then olive-green, and they blacken as the spores ripen.",
        stipe: "The stipe is more or less the colour of the cap, and browner toward the base. It is 5–12 cm long and 0.5–1 cm thick, and it is usually curved.",
        flesh: "The cap flesh is sulphur yellow and quite firm. The odour is mushroomy and not distinctive. The taste is very bitter.",
        sporePrint: "Purplish brown. The spores are ellipsoidal and smooth, 6–7.8 × 4–4.5 μm, with a small germ pore.",
        habitat: "Fruit bodies appear through the year and are most abundant from June to November. It grows on stumps, felled trunks, and other dead wood of broad-leaved trees, and less often of conifers. Tufts that seem to stand in grass are on buried wood. It sometimes fruits on the hollow trunk of a living tree.",
        uses: "The taste is very bitter. A meal can cause stomach pain, nausea, vomiting, diarrhoea, temporary paralysis, and distorted vision, usually five to ten hours later. The illness usually passes in a few days, and it is only very rarely fatal. One reported death followed a meal that also contained other fungi.",
        confusion: "Hypholoma lateritium has a brick-red cap, and its yellow gills become olivaceous brown rather than olive green. Hypholoma capnoides grows on conifer wood, has mild-tasting flesh, and has pale smoky-grey gills with no green tint.",},
      sk: {
        description: "Drevokazná huba hustých trsov na pňoch a spadnutých kmeňoch. V Británii a Írsku je veľmi hojná a vyskytuje sa na väčšine kontinentálnej Európy, najmä na severe a v strede. Hojná je aj v Severnej Amerike a zaznamenaná je v Iráne a vo východnej Anatólii.",
        cap: "Klobúk má 20–70 mm v priemere. Najprv je zvoncovito klenutý, potom plocho rozprestretý, s tupým, len naznačeným hrboľom. Je tenko mäsitý, sírovožltý až zelenožltý, v strede žltooranžový až oranžovohnedý. Za mladi ho kryje žltý vláknito blanitý závoj (vélum), ktorého zvyšky ostávajú ako útržky na okraji klobúka a časom sa strácajú.",
        hymenium: "Lupene sú 4–6 mm široké, veľmi husté a k hlúbiku zaoblene prirastené. Najprv sú sírovožlté, čoskoro sírovozelené až olivovozelené a v dospelosti od dozrievajúcich výtrusov fialovohnedé až čokoládovohnedé.",
        stipe: "Hlúbik je 50–120 mm dlhý a 3–10 mm hrubý. Je rúrkovito dutý, valcovitý, pružný, zvyčajne prehnutý a na báze zrastený do hustých trsov. Je sírovožltý, smerom k báze hrdzavohnedý, v hornej časti s prstencovou zónou zo zvyškov závoja, ktorá sa neskôr stráca.",
        flesh: "Dužina je sírovožltá a dolu v hlúbiku hrdzavohnedastá. Vôňa je nenápadná a chuť veľmi horká.",
        sporePrint: "Výtrusný prach je purpurovohnedý až čokoládovohnedý. Výtrusy sú elipsoidné a hladké, s drobným klíčnym pórom, veľké 6–7,8 × 4–4,5 μm.",
        habitat: "Plodnice sa objavujú takmer po celý rok, najhojnejšie od mája do novembra. Rastie vo veľkých trsoch na pňoch, odumretých kmeňoch a koreňoch listnatých aj ihličnatých stromov.",
        uses: "Je jedovatá a pre výrazne horkú chuť aj nepožívateľná. Po požití spôsobuje po 5 až 10 hodinách ťažké žalúdočné a črevné otravy sprevádzané bolesťami brucha, nevoľnosťou, úporným vracaním a hnačkami.",
        confusion: "Podobá sa jej jedlá strapcovka maková (Hypholoma capnoides), ktorá má miernu, nehorkú chuť, belavé až makovo sivomodrasté lupene (bez žltých a zelených tónov) a rastie na dreve ihličnanov. Nejedlá strapcovka tehlovočervená (Hypholoma lateritium) má tehlovočervený klobúk a väčšie plodnice na dreve listnáčov. Menej skúsení hubári si ju môžu zameniť aj s jedlou šupinačkou menlivou (Kuehneromyces mutabilis) alebo podpňovkou obyčajnou (Armillaria mellea).",}
    },
    sources: {
      en: [
        {
          group: "text",
          name: "First Nature",
          href: "https://www.first-nature.com/fungi/hypholoma-fasciculare.php"
        },
        {
          group: "text",
          name: "Wikipedia",
          href: "https://en.wikipedia.org/wiki/Hypholoma_fasciculare"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=152334",
          detail: "152334"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=152334",
          detail: "152334"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=152334",
          detail: "152334"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=228168",
          detail: "228168"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/genusrecord.asp?RecordID=17828",
          detail: "17828"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/152334"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/3293632",
          detail: "3293632"
        }
      ],
      sk: [
        {
          group: "text",
          name: "nahuby.sk",
          href: "https://www.nahuby.sk/atlas-hub/Hypholoma-fasciculare/strapcovka-zvazkovita/trepenitka-svazcita/ID646",
          detail: "strapcovka zväzkovitá"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=152334",
          detail: "152334"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=152334",
          detail: "152334"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=152334",
          detail: "152334"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/152334"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/3293632",
          detail: "3293632"
        }
      ]
    },
    synonyms: [
      "Agaricus fascicularis Huds.",
      "Pratella fascicularis (Huds.) Gray",
      "Naematoloma fasciculare (Huds.) P. Karst.",
      "Geophila fascicularis (Huds.) Quél.",
      "Dryophila fascicularis (Huds.) Quél.",
      "Psilocybe fascicularis (Huds.) Kühner",
      "Agaricus praticola (Pers.) J. Otto",
      "Agaricus elaeodes Fr.",
      "Hypholoma elaeodes (Fr.) Gillet",
      "Naematoloma elaeodes (Fr.) P. Karst.",
      "Agaricus subviridis Berk. & M.A. Curtis",
      "Psilocybe subviridis (Berk. & M.A. Curtis) Sacc.",
      "Naematoloma subviride (Berk. & M.A. Curtis) A.H. Sm.",
      "Hypholoma subviride (Berk. & M.A. Curtis) Dennis",
      "Agaricus sadleri Berk. & Broome",
      "Clitocybe sadleri (Berk. & Broome) Sacc.",
      "Hypholoma megapotamicum (Speg.) Sacc.",
      "Hypholoma sulphureum G.M. Taylor & P.K. Buchanan"
    ]
  };

  var AGARICUS_MEDIA = "photos/Agaricales/Agaricaceae/Agaricus_campestris/";
  var AGARICUS = {
    id: 16,
    name: "Agaricus campestris",
    author: "L.",
    family: "Agaricaceae",
    genus: "Agaricus",
    order: "Agaricales",
    edibility: "choice",
    hymenium: "gills",
    path: [
      "Fungi",
      "Dikarya",
      "Basidiomycota",
      "Agaricomycotina",
      "Agaricomycetes",
      "Agaricomycetidae",
      "Agaricales",
      "Agaricaceae",
      "Agaricus"
    ],
    summary: [
      "Agaricales",
      "Agaricaceae",
      "Agaricus"
    ],
    added: "2026-10-23",
    plate: STORAGE + AGARICUS_MEDIA + "Agaricus_campestris@1600.webp",
    plateGrid: STORAGE + AGARICUS_MEDIA + "Agaricus_campestris@400.webp",
    photos: [
      {
        src: STORAGE + AGARICUS_MEDIA + "ac1.webp",
        author: "Dr. Hans-Günter Wagner",
        license: "CC BY-SA 2.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
        source: "https://commons.wikimedia.org/wiki/File:Agaricus_campestris_(49147948397).jpg"
      },
      {
        src: STORAGE + AGARICUS_MEDIA + "ac2.webp",
        author: "Dr. Hans-Günter Wagner",
        license: "CC BY-SA 2.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
        source: "https://commons.wikimedia.org/wiki/File:Agaricus_campestris_(48647010296).jpg"
      },
      {
        src: STORAGE + AGARICUS_MEDIA + "ac3.webp",
        author: "Thomas Pruß",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:A._campestris.JPG"
      },
      {
        src: STORAGE + AGARICUS_MEDIA + "ac4.webp",
        author: "Ak ccm",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:2010-08-07_Agaricus_campestris_gills.jpg"
      },
      {
        src: STORAGE + AGARICUS_MEDIA + "ac5.webp",
        author: "Rick Farwell",
        license: "CC BY 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Agaricus_campestris_226499595.jpg"
      }
    ],
    plateCredit: {
      author: "L. Dufour",
      license: "not stated"
    },
    capFrom: 3,
    capTo: 10,
    stipeHeightFrom: 3,
    stipeHeightTo: 10,
    stipeThickFrom: 1,
    stipeThickTo: 2,
    fruitingFrom: 6,
    fruitingTo: 10,
    label: {
      en: "field mushroom",
      sk: "pečiarka poľná"
    },
    names: {
      en: [
        "meadow mushroom",
        "pink bottom"
      ],
      sk: [
        "šampiňón poľný",
        "šampiňón obyčajný",
        "šampiňón pečiarka",
        "pečiarka",
        "pečierka",
        "pečdarka",
        "pečárka",
        "pečírka",
        "pečiarka polnia",
        "pažítník",
        "pažitnica",
        "pečerica",
        "zemianka",
        "uhelka",
        "cigáňka",
        "majovka",
        "tanečnice",
        "žampion",
        "šampion"
      ]
    },
    text: {
      en: {
        description: "A saprobic mushroom of grazed meadows, lawns, and other grassy places, and rarely found in woodland. It is widespread and common in Britain and Ireland and through most of Europe. It is also reported from northern and southern Africa, Asia, North America, Australia, and New Zealand.",
        cap: "The cap is 3–10 cm across, white to creamy white, convex to broadly convex at first and flattening with age. The surface is smooth and glossy to finely silky, sometimes breaking into small brownish or fibrillose scales, and the margin usually stays down-turned or slightly inrolled with fragments of the partial veil.",
        hymenium: "The gills are free and crowded, with frequent short gills. Covered in the button stage by a thin white partial veil, they are deep pink at first, then turn chocolate brown, and finally almost black. Cheilocystidia and pleurocystidia are absent.",
        stipe: "The stipe is 3–10 cm tall and 1–2 cm thick, about as long as the cap is wide, white, and cylindrical or tapering toward the base. It is smooth above the thin, ephemeral white ring and finely fibrillose below, and it does not stain yellow when bruised or cut. A fully expanded fruit body often retains only faint traces of the collapsed ring.",
        flesh: "The flesh is thick, firm, and white, sometimes turning faintly pink when cut, and never staining yellow. The odour and taste are mild and pleasant, similar to cultivated button mushrooms.",
        sporePrint: "Dark chocolate brown. The spores are ovoid to ellipsoidal and smooth, 6.5–9 × 4–6 μm.",
        habitat: "Fruit bodies appear from June to October. They come up after rain, singly, in small groups, or in fairy rings, in pastures, playing fields, parks, and lawns.",
        uses: "It is a choice edible mushroom when cooked and eaten in moderation. It is used in the same ways as cultivated button mushrooms, sautéed or fried, in risotto, omelettes, soups, and sauces. Because the fruit bodies mature quickly and have a short shelf life, the species is not grown commercially. Specimens from busy roadsides should be avoided as they bioaccumulate heavy metals and pollutants. Historically in parts of Scotland, slices were applied as a poultice to scalds, burns, and ulcers.",
        confusion: "Agaricus xanthodermus stains bright chrome yellow in the cap skin and especially at the base of the stipe when cut, smells of phenol or ink, and causes gastrointestinal poisoning. Agaricus arvensis is larger, bruises faintly yellowish, smells of aniseed, and is edible. Agaricus bitorquis has a double ring and grows on compacted ground beside paths. Deadly Amanita virosa, Amanita verna, and white forms of Amanita phalloides have a sac-like volva at the base, persistently white gills, and a white spore print. Poisonous white Clitocybe species in grass have decurrent white gills. In North America, toxic Agaricus californicus and Agaricus hondensis, as well as edible Agaricus andrewii and Agaricus solidipes, are similar.",
        notes: "Sequenced collections east of the Rocky Mountains belong to related species, and in western North America the name is applied provisionally. A 2018 assessment (published in 2019, with a 2022 erratum) lists it as Least Concern. Aqueous extracts have shown insulin-like activity on glucose metabolism in vitro."},
      sk: {
        description: "Saprotrofná huba spásaných lúk, trávnikov a iných trávnatých miest; v lese sa vyskytuje zriedkavo. V Británii a Írsku aj vo väčšine Európy je rozšírená a hojná. Udáva sa aj zo severnej a južnej Afriky, z Ázie, zo Severnej Ameriky, z Austrálie a z Nového Zélandu.",
        cap: "Klobúk má v priemere 3–10 cm (výnimočne až 12 cm). Za mladi je takmer guľovitý až polguľovito klenutý a biely, v dospelosti plochý a belavý až žltkastý. Povrch je hladký a hodvábne vláknitý, niekedy rozpadnutý na drobné hnedasté vláknité šupinky. Okraj je najprv podvinutý, neskôr ostrý, často ovenčený útržkovitými zvyškami čiastočného závoja (véla).",
        hymenium: "Lupene sú voľné, husté a 3–10 mm široké, v mladosti zakryté tenkým bielym závojom. Spočiatku sú sýtoružové, neskôr čokoládovohnedé a v plnej zrelosti takmer čierne.",
        stipe: "Hlúbik je valcovitý alebo k báze mierne zúžený, 3–10 cm vysoký a 1–2 cm hrubý, plný a biely, v dospelosti naspodku niekedy hnedastý; po otlačení ani na reze nežltne. V hornej tretine má tenký, blanitý biely prsteň, ktorý sa ľahko trhá a čoskoro mizne.",
        flesh: "Dužina je pevná, mäsitá a biela, na reze niekedy slabo ružovie, nikdy však nežltne. Má príjemnú hubovú vôňu a jemnú chuť.",
        sporePrint: "Výtrusný prach je tmavo čokoládovohnedý až purpurovohnedý. Výtrusy sú hladké, vajcovito elipsoidné a červenohnedé, veľké 6,5–9 × 4–6 μm.",
        habitat: "Plodnice sa objavujú od mája do novembra (najhojnejšie od júna do októbra). Vyrastajú po daždi jednotlivo, v malých skupinách alebo v čarovných kruhoch v tráve na pasienkoch, lúkach, poliach, ihriskách, v parkoch a záhradách.",
        uses: "Je to výborná jedlá huba, jedna z najchutnejších voľne rastúcich pečiarok. Hodí sa na vyprážanie, dusenie, do polievok, omáčok, rizota aj k mäsitým jedlám. Keďže plodnice rýchlo dozrievajú a mäknú, nehodí sa na komerčné pestovanie; nezbierajú sa ani plodnice pri frekventovaných cestách, pretože hromadia ťažké kovy.",
        confusion: "Jedovatá pečiarka páchnuca (Agaricus xanthodermus) na báze hlúbika a na okraji klobúka po otlačení alebo prekrojení okamžite chrómovožltne a páchne po karbole alebo atramente. Jedlá pečiarka ovčia (Agaricus arvensis) je väčšia, slabo žltne a vonia po aníze. Smrteľne jedovaté muchotrávky — muchotrávka zelená (Amanita phalloides, najmä jej biela forma), muchotrávka jarná (Amanita verna) a muchotrávka končistá (Amanita virosa) — sa spoľahlivo líšia trvalo bielymi lupeňmi a voľnou vakovitou pošvou na báze hlúbika. Jedovaté biele strmuľky (Clitocybe) rastúce v tráve majú zbiehavé biele lupene a biely výtrusný prach.",
        notes: "Hodnotenie IUCN z roku 2018 (uverejnené v roku 2019 s opravou z roku 2022) zaraďuje druh medzi málo dotknuté druhy (Least Concern)."}
    },
    sources: {
      en: [
        {
          group: "text",
          name: "First Nature",
          href: "https://www.first-nature.com/fungi/agaricus-campestris.php"
        },
        {
          group: "text",
          name: "MushroomExpert",
          href: "https://www.mushroomexpert.com/agaricus_campestris.html"
        },
        {
          group: "text",
          name: "Wikipedia",
          href: "https://en.wikipedia.org/wiki/Agaricus_campestris"
        },
        {
          group: "text",
          name: "IUCN",
          href: "https://www.iucnredlist.org/species/122090215/222966644"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=356498",
          detail: "356498"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=356498",
          detail: "356498"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=356498",
          detail: "356498"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=17030",
          detail: "17030"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/356498"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/5243458",
          detail: "5243458"
        }
      ],
      sk: [
        {
          group: "text",
          name: "Wikipedia",
          href: "https://sk.wikipedia.org/wiki/Pe%C4%8Diarka_po%C4%BEn%C3%A1",
          detail: "pečiarka poľná"
        },
        {
          group: "text",
          name: "First Nature",
          href: "https://www.first-nature.com/fungi/agaricus-campestris.php"
        },
        {
          group: "text",
          name: "Wikipedia",
          href: "https://en.wikipedia.org/wiki/Agaricus_campestris"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=356498",
          detail: "356498"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=356498",
          detail: "356498"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=356498",
          detail: "356498"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/356498"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/5243458",
          detail: "5243458"
        }
      ]
    },
    synonyms: [
      "Amanita campestris (L.) Roussel",
      "Hypophyllum campestre (L.) Paulet",
      "Pratella campestris (L.) Gray",
      "Pluteus campestris (L.) Fr.",
      "Psalliota campestris (L.) P. Kumm.",
      "Fungus campestris (L.) Kuntze",
      "Agaricus villaticus Brond.",
      "Pratella villatica (Brond.) Gillet",
      "Psalliota villatica (Brond.) Bres.",
      "Fungus villaticus (Brond.) Kuntze",
      "Agaricus setiger Fr.",
      "Pratella setigera (Fr.) Gillet",
      "Fungus setiger (Fr.) Kuntze",
      "Psalliota flocculosa Rea"
    ]
  };

  var LECCINUM_MEDIA = "photos/Boletales/Boletaceae/Leccinum_scabrum/";
  var LECCINUM = {
    id: 17,
    name: "Leccinum scabrum",
    author: "(Bull.) Gray",
    family: "Boletaceae",
    genus: "Leccinum",
    order: "Boletales",
    edibility: "edible",
    hymenium: "tubes",
    path: ["Fungi", "Dikarya", "Basidiomycota", "Agaricomycotina", "Agaricomycetes", "Agaricomycetidae", "Boletales", "Boletaceae", "Leccinum"],
    summary: ["Boletales", "Boletaceae", "Leccinum"],
    added: "2026-10-23",
    plate: STORAGE + LECCINUM_MEDIA + "Leccinum_scabrum@1600.webp",
    plateGrid: STORAGE + LECCINUM_MEDIA + "Leccinum_scabrum@400.webp",
    plateCredit: {
      author: "L. Dufour",
      license: "not stated"
    },
    photos: [
      {
        src: STORAGE + LECCINUM_MEDIA + "ls1.webp",
        author: "André Karwath",
        license: "CC BY-SA 2.5",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/2.5",
        source: "https://commons.wikimedia.org/wiki/File:Leccinum_scabrum_-_standing_(aka).jpg"
      },
      {
        src: STORAGE + LECCINUM_MEDIA + "ls2.webp",
        author: "André Karwath",
        license: "CC BY-SA 2.5",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/2.5",
        source: "https://commons.wikimedia.org/wiki/File:Leccinum_scabrum_-_horizontal_(aka).jpg"
      },
      {
        src: STORAGE + LECCINUM_MEDIA + "ls3.webp",
        author: "Lukas",
        license: "CC BY-SA 2.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
        source: "https://commons.wikimedia.org/wiki/File:Brown_Birch_Bolete_-_Leccinum_scabrum_(5034326578).jpg"
      },
      {
        src: STORAGE + LECCINUM_MEDIA + "ls4.webp",
        author: "Ejdzej",
        license: "CC BY 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Ko%C5%BAlarz_babka-Leccinum_scabrum-Ejdzej-1.jpg"
      },
      {
        src: STORAGE + LECCINUM_MEDIA + "ls5.webp",
        author: "Holger Krisp",
        license: "CC BY 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Leccinum_scabrum_Birkenpilz.jpg"
      }
    ],
    capFrom: 5,
    capTo: 15,
    stipeHeightFrom: 7,
    stipeHeightTo: 20,
    stipeThickFrom: 2,
    stipeThickTo: 3,
    fruitingFrom: 7,
    fruitingTo: 11,
    label: {
      en: "brown birch bolete",
      sk: "kozák brezový"
    },
    names: {
      en: ["birch bolete", "rough-stemmed bolete", "scaber stalk"],
      sk: ["brezák"]
    },
    text: {
      en: {
        description: "An ectomycorrhizal mushroom of birch woods, including planted birches. It is frequent in Britain and Ireland and common across mainland Europe, from Scandinavia to the Mediterranean and the Iberian Peninsula. It is very common in North America, recorded from the Himalayas, and introduced in Australia and New Zealand.",
        cap: "The cap is 5–15 cm across. It is hemispherical at first, then convex or cushion-shaped, and flattens with age, often with a wavy margin. The surface is finely velvety when young and smoother later, dry in fair weather and becoming viscid when wet, in shades of grey-brown to yellowish or reddish brown. A very pale, almost white form occurs rarely.",
        hymenium: "The tubes are 1–2 cm long and deeply depressed around the stipe. The pores are small and circular, off-white when young and becoming dingy grey or brownish grey with age. When bruised, the pores slowly stain brownish rather than blue.",
        stipe: "The stipe is 7–20 cm long and 1.5–3.5 cm thick, barrel-shaped when young and later slenderly club-shaped, tapering upward, with no ring. The surface is white to greyish, covered with dark brown to black scabers (woolly scales) arranged in rough longitudinal lines that become coarser toward the base.",
        flesh: "The flesh is whitish, firm in young buttons, and soon becomes soft, spongy, and waterlogged in wet weather. Cut flesh stays white or flushes faintly pinkish, without turning blue; it turns dark grey to black when cooked. The odour and taste are mild and pleasant.",
        sporePrint: "Olivaceous brown to snuff-brown. The spores are narrowly ellipsoid to subfusiform and smooth, about 14–20 × 4.5–5.5 μm.",
        habitat: "Fruit bodies appear from June to November. They grow on the ground exclusively with birches, including silver birch (Betula pendula) and downy birch (Betula pubescens), in woodland, heathland, and parks, as well as under planted ornamental birches in North America, Australia, and New Zealand.",
        uses: "Young, firm fruit bodies are edible when thoroughly cooked, though the flesh is softer than that of Boletus edulis and some guides rate its texture poorly. It is used in mixed mushroom dishes, soups, or dried, and in Finland and Russia it is often pickled in brine or vinegar. Like all Leccinum species, it must not be eaten raw.",
        confusion: "Several other birch-associated Leccinum species are similar: Leccinum cyaneobasileucum has flesh that stains blue in the stipe base; Leccinum versipelle has an orange-ochre cap, blackish scabers, and flesh that bruises blue-green or violaceous grey; Leccinum holopus is pale whitish to greenish buff throughout; Leccinum variicolor has a mottled cap and a stipe base that stains blue-green and coral-red; and Leccinum melaneum has a very dark brown to blackish cap. Leccinum duriusculum has firmer flesh and grows with poplars and aspens. All Leccinum species can cause gastrointestinal upset if eaten raw or undercooked.",},
      sk: {
        description: "Ektomykorízna huba brezových lesov a výsadieb. V Británii a Írsku je častá a na európskej pevnine hojná, od Škandinávie po Stredomorie a Pyrenejský polostrov. V Severnej Amerike je veľmi hojná, nálezy sú aj z Himalájí a bola zavlečená do Austrálie a na Nový Zéland.",
        cap: "Klobúk má v priemere 5–15 cm. Spočiatku je polguľovitý, neskôr vankúšovito klenutý a v starobe sploštený. Má sivohnedú, žltohnedú až červenohnedú farbu (zriedkavo sa vyskytuje aj veľmi bledá, takmer biela forma). Povrch je v mladosti jemne zamatový, neskôr hladký, za sucha matný a za vlhka lepkavý.",
        hymenium: "Rúrky sú 10–20 mm dlhé, pri hlúbiku hlboko vykrojené, belavé až sivokrémové. Póry sú drobné a okrúhle, v mladosti belavé, neskôr sivasté až hnedosivé; po otlačení pomaly hnednú a nikdy nemodrejú.",
        stipe: "Hlúbik je 7–20 cm dlhý a 1,5–3,5 cm hrubý, štíhlo kyjakovitý a smerom nahor zúžený, bez prsteňa. Na belavom až sivastom podklade je husto pokrytý tmavohnedými až čiernymi odstávajúcimi šupinkami usporiadanými v pozdĺžnych radoch.",
        flesh: "Dužina je biela, v mladých plodniciach pevná, no v klobúku čoskoro mäkne a za dažďa vodnatie, kým v hlúbiku je tuhá a vláknitá. Na reze nemení farbu alebo len veľmi slabo naružovie (nikdy nemodrie), pri varení však sivočernie. Vôňa aj chuť sú jemné a príjemné.",
        sporePrint: "Výtrusný prach je olivovohnedý až tabakovohnedý. Výtrusy sú úzko elipsoidné až vretenovité a hladké, veľké 14–20 × 4,5–5,5 μm.",
        habitat: "Plodnice sa objavujú od júna do novembra. Rastú na zemi výhradne pod brezami, najmä pod brezou previsnutou (Betula pendula) a brezou plstnatou (Betula pubescens), v zmiešaných lesoch, brezových hájoch, na vresoviskách aj v parkoch.",
        uses: "Mladé a pevné plodnice sú po dôkladnej tepelnej úprave chutné jedlé (staršie klobúky sú príliš mäkké a vodnaté). Hodia sa do praženice, polievok, omáčok aj na sušenie napríklad do vianočnej kapustnice. Podobne ako ostatné kozáky sa nesmie konzumovať surový.",
        confusion: "S nebezpečne jedovatými hubami sa nezamení, no podobá sa mu viacero príbuzných jedlých kozákov. Pod brezami rastie aj kozák žltooranžový (Leccinum versipelle) s oranžovožltým klobúkom a dužinou, ktorá na reze sivofialovie až modrozelenie, kozák bieložltý (Leccinum holopus) s belavým klobúkom v rašeliniskách, kozák rôznofarebný (Leccinum variicolor) s fľakatým klobúkom a modrozelenejúcou bázou hlúbika a kozák čierny (Leccinum melaneum) s čiernohnedým klobúkom. Kozák osikový (Leccinum aurantiacum) rastie pod osikami a má oranžovočervený klobúk, zatiaľ čo kozák hrabový (Leccinum pseudoscabrum) rastie pod hrabmi a jeho dužina na reze fialovosivie až černie.",}
    },
    sources: {
      en: [
        {
          group: "text",
          name: "First Nature",
          href: "https://www.first-nature.com/fungi/leccinum-scabrum.php"
        },
        {
          group: "text",
          name: "Wikipedia",
          href: "https://en.wikipedia.org/wiki/Leccinum_scabrum"
        },
        {
          group: "text",
          name: "Wild Food UK",
          href: "https://www.wildfooduk.com/mushroom-guide/brown-birch-bolete/"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=100712",
          detail: "100712"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=100712",
          detail: "100712"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=100712",
          detail: "100712"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=194176",
          detail: "194176"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=17918",
          detail: "17918"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/100712"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/9141390",
          detail: "9141390"
        }
      ],
      sk: [
        {
          group: "text",
          name: "Wikipedia",
          href: "https://sk.wikipedia.org/wiki/Koz%C3%A1k_brezov%C3%BD",
          detail: "kozák brezový"
        },
        {
          group: "text",
          name: "Encyclopaedia Beliana",
          href: "https://beliana.sav.sk/heslo/kozak",
          detail: "kozák"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=100712",
          detail: "100712"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=100712",
          detail: "100712"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=100712",
          detail: "100712"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/100712"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/9141390",
          detail: "9141390"
        }
      ]
    },
    synonyms: ["Boletus scaber Bull.", "Krombholzia scabra (Bull.) P. Karst.", "Gyroporus scaber (Bull.) Quél.", "Ceriomyces scaber (Bull.) Murrill", "Krombholziella scabra (Bull.) Maire", "Trachypus scaber (Bull.) Romagn.", "Leccinum rigidipes P.D. Orton", "Boletus avellaneus J. Blum", "Leccinum avellaneum (J. Blum) Bon", "Krombholziella avellanea (J. Blum) Alessio", "Leccinum subcinnamomeum Pilát & Dermek", "Krombholziella subcinnamomea (Pilát & Dermek) Alessio"]
  };

  var SUILLUS_MEDIA = "photos/Boletales/Suillaceae/Suillus_luteus/";
  var SUILLUS = {
    id: 18,
    name: "Suillus luteus",
    author: "(L.) Roussel",
    family: "Suillaceae",
    genus: "Suillus",
    order: "Boletales",
    edibility: "edible",
    hymenium: "tubes",
    path: [
      "Fungi",
      "Dikarya",
      "Basidiomycota",
      "Agaricomycotina",
      "Agaricomycetes",
      "Agaricomycetidae",
      "Boletales",
      "Suillaceae",
      "Suillus"
    ],
    summary: ["Boletales", "Suillaceae", "Suillus"],
    added: "2026-10-23",
    plate: STORAGE + SUILLUS_MEDIA + "Suillus_luteus@1600.webp",
    plateGrid: STORAGE + SUILLUS_MEDIA + "Suillus_luteus@400.webp",
    plateCredit: {
      author: "L. Dufour",
      license: "not stated"
    },
    photos: [
      {
        src: STORAGE + SUILLUS_MEDIA + "sl1.webp",
        author: "Tim Sage",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Suillus_luteus_113280.jpg"
      },
      {
        src: STORAGE + SUILLUS_MEDIA + "sl2.webp",
        author: "Achim Lammerts",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:2025-10-15_D500-1030_Achim-Lammerts_Suillus-luteus.jpg"
      },
      {
        src: STORAGE + SUILLUS_MEDIA + "sl3.webp",
        author: "Achim Lammerts",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:2025-10-15_D500-1036_Achim-Lammerts_Suillus-luteus.jpg"
      },
      {
        src: STORAGE + SUILLUS_MEDIA + "sl4.webp",
        author: "Lukas",
        license: "CC BY-SA 2.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
        source: "https://commons.wikimedia.org/wiki/File:Suillus_luteus_(30896753828).jpg"
      },
      {
        src: STORAGE + SUILLUS_MEDIA + "sl5.webp",
        author: "Björn S...",
        license: "CC BY-SA 2.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
        source: "https://commons.wikimedia.org/wiki/File:Suillus_luteus_(37793987452).jpg"
      }
    ],
    capFrom: 4,
    capTo: 10,
    stipeHeightFrom: 5,
    stipeHeightTo: 10,
    stipeThickFrom: 2,
    stipeThickTo: 3,
    fruitingFrom: 8,
    fruitingTo: 11,
    label: {
      en: "slippery jack",
      sk: "masliak obyčajný"
    },
    names: {
      en: ["sticky bun", "pine boletus"],
      sk: [
        "masliak",
        "másleník",
        "borový hríb",
        "maslák",
        "masläk",
        "mäsiar",
        "maslér",
        "masliar",
        "maslienka",
        "maslejk",
        "mašľok",
        "máselňák",
        "máselník",
        "mašlanik",
        "mašlenik",
        "maslaník",
        "mašlej",
        "masloviak",
        "maslovka",
        "borák",
        "bôrak",
        "bôrovec",
        "bórovec",
        "borovec",
        "borovák",
        "borúvka",
        "podborovník",
        "podborovec",
        "podbórka",
        "podborúvka",
        "sosnäk",
        "dráč",
        "šupák",
        "sopliak",
        "soplák",
        "soplačka",
        "soplivec",
        "mäkkýš",
        "kakáš",
        "mašľar",
        "maslovec",
        "podborovka",
        "sošňak"
      ]
    },
    text: {
      en: {
        description: "An ectomycorrhizal mushroom of pine woods and of pine plantations. Fruit bodies often appear in large numbers. It is native across Eurasia, from Ireland to Korea, and it has been introduced with pines in North and South America, southern Africa, Australia, and New Zealand. It is common in Britain and Ireland.",
        cap: "The cap is typically 4–10 cm across, rarely reaching 20 cm. It is conical to hemispherical at first, then convex, and later broadly convex to nearly flat, sometimes with a low umbo. The colour is dark chestnut, reddish brown, or chocolate brown, fading to yellowish brown or dull tan, and often radially streaked. It is covered in a thick layer of slime when wet, becoming glossy when dry, and the cuticle peels off easily. In young fruit bodies, remnants of the partial veil often hang from the margin.",
        hymenium: "The tubes are 3–10 mm deep, adnate to slightly decurrent, and peel easily from the cap flesh. Covered at first by a membranous whitish partial veil, the pores are small (about 2–3 per millimetre), round to angular, lemon yellow when young and darkening to olive-yellow or brownish yellow with age. They do not bruise blue.",
        stipe: "The stipe is 3–10 cm tall and 1.5–3 cm thick, cylindrical or slightly swollen at the base, with white basal mycelium. A membranous partial veil leaves a prominent hanging ring that is whitish above and dark brown to purplish or violet beneath, often collapsing against the stipe with age. Above the ring, the pale yellow surface is dotted with cinnamon to dark brown glandular granules; below the ring, the stipe is dingy whitish to brownish and often slimy.",
        flesh: "The flesh is white to pale lemon yellow, unchanging when cut, and soft and spongy at maturity. The odour is faint and fruity, and the taste is mild and pleasant.",
        sporePrint: "Ochre to clay-brown or cinnamon brown. The spores are elongated ellipsoid to subfusiform and smooth, 7–10.5 × 2.5–3.5 μm.",
        habitat: "Fruit bodies appear mainly in late summer and autumn (from August to November in Britain and Ireland), and after wet spells in spring or winter in warmer climates and southern hemisphere pine plantations. They grow gregariously, often in large troops or rings, under pines—especially two-needle species such as Scots pine (Pinus sylvestris) and Austrian pine (Pinus nigra).",
        uses: "It is a good edible mushroom when thoroughly cooked. It is used in soups, stews, and fried dishes, pickled in vinegar, or dried. Because the thick glutinous cap cuticle turns slimy in the pan and can cause indigestion, the cap skin (and the tube layer of older specimens) is peeled off before cooking.",
        confusion: "Suillus granulatus grows under pines in the same habitat, but lacks a partial veil and ring, and its young pores exude milky droplets. Suillus grevillei grows under larch and has a golden-yellow to orange-brown cap. Young Gomphidius glutinosus has a slimy brown cap but has decurrent gills rather than pores. In North America, Suillus borealis and Suillus pseudobrevipes have a partial veil that clings to the cap margin rather than forming a purplish-backed ring on the stipe, Suillus cothurnatus has a thick band-like ring and orange-buff flesh, and Suillus albidipes lacks glandular dots on the stipe.",
        notes: "A 2018 assessment lists it as Least Concern."},
      sk: {
        description: "Ektomykorízna huba borovicových lesov a borovicových výsadieb, ktorej plodnice sa často objavujú vo veľkom množstve. Je pôvodná v celej Eurázii, od Írska po Kóreu, a s borovicami bola zavlečená do Severnej a Južnej Ameriky, do južnej Afriky, do Austrálie a na Nový Zéland. V Británii a Írsku aj v strednej Európe je hojná.",
        cap: "Klobúk má 40–120 mm v priemere. Najprv je polguľovitý, potom vankúšovito až plocho rozprestretý a v strede máva niekedy tupý hrboľ. Býva čokoládovohnedý, gaštanovohnedý, žltohnedý až olivovohnedý. Pokožka je za vlhka hrubo slizká a po oschnutí lesklá a jemne lúčovito vláknito pásikavá; od dužiny sa dá celkom ľahko olúpať.",
        hymenium: "Rúrky sú 6–14 mm dlhé, k hlúbiku prirastené alebo zriedkavo krátko zbiehavé a od dužiny klobúka ľahko oddeliteľné. Za mladi sú zakryté belavým blanitým závojom; spočiatku sú bledožlté, potom citrónovožlté až zlatožlté a v dospelosti olivovožlté. Póry sú rovnako sfarbené ako rúrky, drobné (okolo 0,5 mm, zriedkavo až 1 mm), okrúhle až hranaté a v mladosti niekedy ronia belavé kvapôčky.",
        stipe: "Hlúbik je 30–110 mm dlhý a 10–25 mm hrubý, valcovitý. Nad prsteňom je bledožltý až citrónovožltý a husto posiaty škoricovohnedými až tmavohnedými žliazkatými zrnkami, v dolnej časti hnedastý. Biely blanitý závoj, ktorý v mladosti spája hlúbik s okrajom klobúka, zanecháva na hlúbiku výrazný ovisnutý prsteň, ktorý je zospodu hnedofialový až čiernohnedý.",
        flesh: "Dužina je belavá až citrónovožltkastá (najmä nad rúrkami) a v báze hlúbika trochu hnedastá; na reze nemení farbu. V dospelosti je mäkko špongiovitá a dosť vodnatá, v hlúbiku trochu vláknitá. Má slabú, príjemnú ovocnú vôňu a jemnú chuť.",
        sporePrint: "Výtrusný prach je okrovohnedý až škoricovohnedý. Výtrusy sú podlhovasto elipsoidné až takmer vretenovité a hladké, veľké 7–10,5 × 2,5–3,5 μm.",
        habitat: "Plodnice sa objavujú od mája do novembra (najhojnejšie koncom leta a na jeseň, v miernom podnebí po dažďoch aj v zime). Rastú v skupinách, často vo veľkých húfoch alebo v čarovných kruhoch, pod dvojihlicovými borovicami, najmä pod borovicou lesnou (Pinus sylvestris), borovicou čiernou (Pinus nigra) a v horách aj pod kosodrevinou (Pinus mugo), od nížinných borov až po kosodrevinové pásmo.",
        uses: "Je to výborná jedlá huba, považovaná za najchutnejší druh masliaka. Hodí sa do polievok, omáčok, praženice aj na nakladanie do octového nálevu. Pred tepelnou úpravou sa odporúča stiahnuť slizkú pokožku klobúka (a pri starších plodniciach odstrániť aj rúrky), pretože sliz v pokrme sliznatie a u citlivých ľudí môže sťažiť trávenie.",
        confusion: "Pod borovicami na rovnakých stanovištiach rastie jedlý masliak zrnitý (Suillus granulatus), ktorý však nemá závoj ani prsteň na hlúbiku. Jedlý masliak smrekovcový (Suillus grevillei) má prsteň, no jeho klobúk je zlatožltý až oranžovohnedý a rastie výhradne pod smrekovcom. Mladý sliziak hôrny (Gomphidius glutinosus) má takisto slizký hnedý klobúk, ale namiesto rúrok má riedke zbiehavé lupene.",
        notes: "Hodnotenie IUCN z roku 2018 ho zaraďuje medzi málo dotknuté druhy (Least Concern)."}
    },
    sources: {
      en: [
        {
          group: "text",
          name: "First Nature",
          href: "https://www.first-nature.com/fungi/suillus-luteus.php"
        },
        {
          group: "text",
          name: "Wikipedia",
          href: "https://en.wikipedia.org/wiki/Suillus_luteus"
        },
        {
          group: "text",
          name: "MushroomExpert",
          href: "https://www.mushroomexpert.com/suillus_luteus.html"
        },
        {
          group: "text",
          name: "IUCN",
          href: "https://www.iucnredlist.org/species/122090818/122091108"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=120823",
          detail: "120823"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=120823",
          detail: "120823"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=120823",
          detail: "120823"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=147334",
          detail: "147334"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/120823"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/7777157",
          detail: "7777157"
        }
      ],
      sk: [
        {
          group: "text",
          name: "nahuby.sk",
          href: "https://www.nahuby.sk/atlas-hub/Suillus-luteus/masliak-obycajny/klouzek-obecny/ID274",
          detail: "masliak obyčajný"
        },
        {
          group: "text",
          name: "Wikipedia",
          href: "https://sk.wikipedia.org/wiki/Masliak_oby%C4%8Dajn%C3%BD"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=120823",
          detail: "120823"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=120823",
          detail: "120823"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=120823",
          detail: "120823"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/120823"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/7777157",
          detail: "7777157"
        }
      ]
    },
    synonyms: [
      "Boletus luteus L.",
      "Cricunopus luteus (L.) P. Karst.",
      "Viscipelles lutea (L.) Quél.",
      "Ixocomus luteus (L.) Quél.",
      "Solenia lutea (L.) Kuntze",
      "Boletopsis lutea (L.) Henn.",
      "Boletus volvatus Batsch",
      "Suillus annulatus Poir."
    ]
  };

  var LACTARIUS_MEDIA = "photos/Russulales/Russulaceae/Lactarius_deliciosus/";
  var LACTARIUS = {
    id: 19,
    name: "Lactarius deliciosus",
    author: "(L.) Gray",
    family: "Russulaceae",
    genus: "Lactarius",
    order: "Russulales",
    edibility: "choice",
    hymenium: "gills",
    path: [
      "Fungi",
      "Dikarya",
      "Basidiomycota",
      "Agaricomycotina",
      "Agaricomycetes",
      "Incertae sedis",
      "Russulales",
      "Russulaceae",
      "Lactarius"
    ],
    summary: [
      "Russulales",
      "Russulaceae",
      "Lactarius"
    ],
    added: "2026-10-23",
    plate: STORAGE + LACTARIUS_MEDIA + "Lactarius_deliciosus@1600.webp",
    plateGrid: STORAGE + LACTARIUS_MEDIA + "Lactarius_deliciosus@400.webp",
    plateCredit: {
      author: "L. Dufour",
      license: "not stated"
    },
    photos: [
      {
        src: STORAGE + LACTARIUS_MEDIA + "ld1.webp",
        author: "Lukas Large",
        license: "CC BY-SA 2.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
        source: "https://commons.wikimedia.org/wiki/File:Lactarius_deliciosus_-_Saffron_Milkcap_(51576323291).jpg"
      },
      {
        src: STORAGE + LACTARIUS_MEDIA + "ld2.webp",
        author: "Eleassar",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Lactarius_deliciosus_-_front_view.jpg"
      },
      {
        src: STORAGE + LACTARIUS_MEDIA + "ld3.webp",
        author: "zaca",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:2011-11-26_Lactarius_deliciosus_(L.)_Gray_187161.jpg"
      },
      {
        src: STORAGE + LACTARIUS_MEDIA + "ld4.webp",
        author: "Lukas",
        license: "CC BY-SA 2.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
        source: "https://commons.wikimedia.org/wiki/File:Lactarius_deliciosus_(32969568682).jpg"
      },
      {
        src: STORAGE + LACTARIUS_MEDIA + "ld5.webp",
        author: "Eleassar",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Lactarius_deliciosus_-_lying.jpg"
      }
    ],
    capFrom: 6,
    capTo: 20,
    stipeHeightFrom: 5,
    stipeHeightTo: 8,
    stipeThickFrom: 1.5,
    stipeThickTo: 2,
    fruitingFrom: 8,
    fruitingTo: 10,
    label: {
      en: "saffron milkcap",
      sk: "rýdzik pravý"
    },
    names: {
      en: [
        "delicious milkcap",
        "saffron milk cap",
        "delicious milk cap"
      ],
      sk: [
        "rýdzik",
        "hrýdzik",
        "rydzak",
        "rydz",
        "ryndzik",
        "ryžik",
        "krvávka",
        "borúvka",
        "podbúrka"
      ]
    },
    text: {
      en: {
        description: "An ectomycorrhizal mushroom of pine woods. It is native to Europe, including the Mediterranean basin, and it has been introduced with pines to Chile, Australia, New Zealand, and South Africa. Populations in North America and Central America that have carried the same name are different species.",
        cap: "The cap is 6–20 cm across. It starts convex with an inrolled margin and a central depression, and becomes broadly funnel-shaped with age. The surface is carrot-orange to reddish orange with darker concentric zones, bruises green, and often develops greyish-green patches as it ages. It is smooth, matt when dry, and viscid when wet.",
        hymenium: "The gills are shortly decurrent, crowded, and bright orange, staining green where bruised. Cut gills release a carrot-orange latex that stays orange for a long time and slowly fades to greyish green after several hours (unlike Lactarius deterrimus, whose latex turns wine red).",
        stipe: "The stipe is cylindrical, soon hollow, and relatively short, 5–8 cm long and 1.5–2 cm thick. The pale orange surface is marked with a scattering of shallow, brighter-orange pits (scrobiculi), especially toward the base, and stains green where handled.",
        flesh: "The flesh is whitish in the centre and carrot-orange near the surfaces, slowly staining dull green after exposure. The odour is fruity, and the milk tastes mild at first, leaving a slightly bitter or astringent aftertaste.",
        sporePrint: "Pale pinkish buff. The spores are ellipsoidal, 7–9 × 6–7 μm, and ornamented with a well-defined, almost complete amyloid network of ridges.",
        habitat: "Fruit bodies appear from August to October in Britain and Ireland (and into November in mainland Europe). They grow on the ground in coniferous woodland with pines. In the southern hemisphere they fruit from April to June in pine plantations.",
        uses: "It is a prized edible mushroom, traditionally grilled, pan-fried, stewed, or pickled in Spain, Provence, Poland, Cyprus, and Russia. Young caps with an inrolled margin are preferred, and slow cooking or grilling is preferred over drying, as dried fruit bodies lose their aroma.",
        confusion: "Lactarius deterrimus grows under spruce, has a more uniform cap and an unpitted stipe, and exudes orange milk that turns wine red within 30–60 minutes. Lactarius sanguifluus grows under pines on calcareous soil and immediately exudes deep wine-red milk. Lactarius salmonicolor grows under firs and scarcely stains green. Lactarius quieticolor grows under pines on acid soil, has duller orange-brown tones, and stains blue-green. Lactarius torminosus is pinkish with a shaggy, bearded cap margin, exudes acrid white milk, grows with birch, and is poisonous. In North America, lookalikes include Lactarius rubrilacteus, Lactarius thyinos, Lactarius olympianus, and Lactarius salmoneus.",
        notes: "A Roman fresco from Herculaneum is regarded as one of the earliest depictions of this mushroom. Molecular and morphological work by Nuytinck, Verbeken, and Miller (2007) confirmed that this is a European species, distinct from North and Central American taxa formerly given the name."},
      sk: {
        description: "Ektomykorízna huba borovicových lesov. Je pôvodná v Európe vrátane Stredomoria a s borovicami bola zavlečená do Čile, Austrálie, na Nový Zéland a do Južnej Afriky. Severoamerické a stredoamerické populácie, ktoré v minulosti niesli rovnaké meno, patria iným druhom.",
        cap: "Klobúk má v priemere 40–150 mm (výnimočne až 200 mm), je pevne a krehko mäsitý. Za mladi je klenutý s podvinutým okrajom a plytko vtlačeným stredom, neskôr v strede hlbšie preliačený až široko lievikovitý s vystretým okrajom. Na krémovo až svetlookrovo oranžovom podklade je tehlovooranžový až mrkvovooranžový s tmavšími sústrednými kruhmi alebo škvrnami a v starobe alebo na otlačených miestach získava sivozelené škvrny. Povrch je hladký a holý, za sucha matný a za vlhka slizký.",
        hymenium: "Lupene sú prirastené až krátko zbiehavé, husté, tenké a krehko lámavé, 3–7 mm vysoké, pri hlúbiku často rozvidlené a prestriedané kratšími lupienkami. Za mladi sú krémovo oranžové až šafranovožlté, neskôr mrkvovo až červenooranžové; po otlačení a na poranených miestach roní huba oranžové mlieko a lupene postupne sivozelenejú.",
        stipe: "Hlúbik je 3–9 cm dlhý a 1–2 cm hrubý, valcovitý alebo k báze mierne zúžený, pevný, no krehký; za mladi je plný až belavo vypchatý, čoskoro však dutý. Je bledší než klobúk, na belavom až svetlooranžovom podklade posiaty plytkými tmavšie oranžovými jamkami (škvrnami), pod lupeňmi s výrazným belavým pásikom a na otlačených miestach zelenie.",
        flesh: "Dužina je v strede belavá, pod pokožkou klobúka, pri povrchu hlúbika a nad lupeňmi mrkvovooranžová. Po prerezaní roní nehojné mrkvovooranžové mlieko, ktoré si dlho zachováva oranžovú farbu (nikdy nevínovočervenie) a až po 1–2 hodinách pomaly sivozelenie. Vôňa je príjemne ovocne korenistá, chuť mierna a až po dlhšom žuvaní veľmi jemne trpkastá.",
        sporePrint: "Výtrusný prach je smotanovokrémový s ružovkastým nádychom. Výtrusy sú elipsoidné, veľké 7–9 × 6–7 μm, zdobené takmer úplnou amyloidnou sieťkou hrebienkov.",
        habitat: "Plodnice sa objavujú od júla do novembra (na južnej pologuli od apríla do júna). Rastú na zemi jednotlivo alebo v skupinách výhradne pod borovicami (často na trávnatých miestach, vresoviskách a medzi borievkami), na suchších aj vlhkejších, neutrálnych až vápenatých pôdach od nížin do horského pásma. V našich lesoch je menej hojný než rýdzik smrekový.",
        uses: "Je to výborná, vysoko cenená jedlá huba. Najlepšie sú mladé klobúky s podvinutým okrajom; výborne sa hodia na opekanie, grilovanie, dusenie, do praženice aj na nakladanie do octového nálevu alebo solenie. Tradične sa vo veľkom zbiera najmä v Španielsku, Provensálsku, Poľsku, na Cypre a v Rusku. Na sušenie nie je vhodná, pretože sušením stráca arómu.",
        confusion: "Príbuzné jedlé rýdziky s oranžovým alebo červeným mliekom sa líšia mykoríznym hostiteľom a zmenou farby mlieka: rýdzik smrekový (Lactarius deterrimus) rastie pod smrekmi, má menej pásikavý klobúk, hlúbik bez jamiek a jeho oranžové mlieko do 30–60 minút vínovočervenie; rýdzik lososovoružový (Lactarius salmonicolor) rastie pod jedľami a takmer nezelenie; pod borovicami rastie aj rýdzik krvavý (Lactarius sanguifluus), ktorý hneď roní tmavé vínovočervené mlieko, rýdzik oranžovokrvavý (Lactarius semisanguifluus), ktorého oranžové mlieko za 5–10 minút vínovočervenie, a rýdzik tmavohnedý (Lactarius quieticolor) s tlmenejšími hnedooranžovými tónmi na kyslých pôdach. Jedovatý rýdzik kravský (Lactarius torminosus) rastie pod brezami, má ružovkastý klobúk s husto chlpatým okrajom a pálčivé biele mlieko.",
        notes: "Rímska freska z Herculanea sa považuje za jedno z najstarších vyobrazení tejto huby. Molekulárna a morfologická štúdia Nuytinckovej, Verbekenovej a Millera (2007) potvrdila, že ide o čisto európsky druh odlišný od severoamerických a stredoamerických taxónov."}
    },
    sources: {
      en: [
        {
          group: "text",
          name: "First Nature",
          href: "https://www.first-nature.com/fungi/lactarius-deliciosus.php"
        },
        {
          group: "text",
          name: "Wikipedia",
          href: "https://en.wikipedia.org/wiki/Lactarius_deliciosus"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=224737",
          detail: "224737"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=224737",
          detail: "224737"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=224737",
          detail: "224737"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=196882",
          detail: "196882"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=17895",
          detail: "17895"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/224737"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/5248629",
          detail: "5248629"
        }
      ],
      sk: [
        {
          group: "text",
          name: "nahuby.sk",
          href: "https://www.nahuby.sk/atlas-hub/Lactarius-deliciosus/rydzik-pravy/ryzec-pravy/ID583",
          detail: "rýdzik pravý"
        },
        {
          group: "text",
          name: "Wikipedia",
          href: "https://sk.wikipedia.org/wiki/R%C3%BDdzik_prav%C3%BD",
          detail: "rýdzik pravý"
        },
        {
          group: "text",
          name: "Encyclopaedia Beliana",
          href: "https://beliana.sav.sk/heslo/lopatovka",
          detail: "plávkotvaré"
        },
        {
          group: "text",
          name: "First Nature",
          href: "https://www.first-nature.com/fungi/lactarius-deliciosus.php"
        },
        {
          group: "text",
          name: "Wikipedia",
          href: "https://en.wikipedia.org/wiki/Lactarius_deliciosus"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=224737",
          detail: "224737"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=224737",
          detail: "224737"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/224737"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/5248629",
          detail: "5248629"
        }
      ]
    },
    synonyms: [
      "Agaricus deliciosus L.",
      "Amanita deliciosa (L.) Roussel",
      "Galorrheus deliciosus (L.) P. Kumm.",
      "Lactifluus deliciosus (L.) Kuntze",
      "Lactarius laeticolor (S. Imai) Imazeki ex Hongo"
    ]
  };

  var VIROSA_MEDIA = "photos/Agaricales/Amanitaceae/Amanita_virosa/";
  var VIROSA = {
    id: 20,
    name: "Amanita virosa",
    author: "Bertill.",
    family: "Amanitaceae",
    genus: "Amanita",
    order: "Agaricales",
    edibility: "deadly",
    hymenium: "gills",
    path: [
      "Fungi",
      "Dikarya",
      "Basidiomycota",
      "Agaricomycotina",
      "Agaricomycetes",
      "Agaricomycetidae",
      "Agaricales",
      "Amanitaceae",
      "Amanita"
    ],
    summary: [
      "Agaricales",
      "Amanitaceae",
      "Amanita"
    ],
    added: "2026-10-23",
    plate: STORAGE + VIROSA_MEDIA + "Amanita_virosa@1600.webp",
    plateGrid: STORAGE + VIROSA_MEDIA + "Amanita_virosa@400.webp",
    plateCredit: {
      author: "Gemini",
      license: "not stated"
    },
    photos: [
      {
        src: STORAGE + VIROSA_MEDIA + "av1.webp",
        author: "Jerzy Opioła",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Amanita_virosa_a1_(7).JPG"
      },
      {
        src: STORAGE + VIROSA_MEDIA + "av2.webp",
        author: "Jose Angel Urquia Goitia",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Amanita_virosa_8.jpg"
      },
      {
        src: STORAGE + VIROSA_MEDIA + "av3.webp",
        author: "Quartl",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Amanita_virosa_qtl1.jpg"
      },
      {
        src: STORAGE + VIROSA_MEDIA + "av4.webp",
        author: "Jose Angel Urquia Goitia",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Amanita_virosa_7.jpg"
      },
      {
        src: STORAGE + VIROSA_MEDIA + "av5.webp",
        author: "Jose Angel Urquia Goitia",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Amanita_virosa_goitik.jpg"
      }
    ],
    capFrom: 5,
    capTo: 10,
    stipeHeightFrom: 9,
    stipeHeightTo: 15,
    stipeThickFrom: 0.6,
    stipeThickTo: 2,
    fruitingFrom: 8,
    fruitingTo: 11,
    label: {
      en: "destroying angel",
      sk: "muchotrávka končistá"
    },
    names: {
      en: [
        "European destroying angel"
      ]
    },
    text: {
      en: {
        description: "An ectomycorrhizal mushroom of woodland. It is infrequent in the lowlands and more plentiful in the mountains, and frequent in Scandinavian conifer forests. It occurs through Europe, including Britain and Ireland, with confirmed records from northern Asia. North American records under this name belong to other species.",
        cap: "The cap is 5–10 cm across, and some fruit bodies reach 12 cm. It starts egg-shaped and pure white, then becomes bell-shaped or occasionally almost flat, often with a broad umbo, and it is often tilted. The margin is not lined. The centre may turn ivory. Veil fragments soon wash off and are rarely left on a mature cap.",
        hymenium: "The gills are free, crowded, and white.",
        stipe: "The stipe is 9–15 cm long and 0.6–2 cm thick, pure white, fibrous, and often slightly curved. A fragile ring hangs high on the stipe and may be smooth or grooved. The base sits in a large white sack-like volva, usually buried in the soil.",
        flesh: "The flesh is white. It turns yellow at once with potassium hydroxide, and bright yellow with sodium hydroxide. A mature fruit body smells faintly sickly, and the smell has also been compared to radishes.",
        sporePrint: "White. The spores are spherical to subglobose and smooth, 7–10 μm across, and amyloid (turning blue to blue-black in iodine).",
        habitat: "Fruit bodies appear in late summer and autumn, from August to November in Britain and from July to September in northern Europe. It grows at the edge of deciduous or mixed woodland, with beech, chestnut, pine, spruce, and fir.",
        uses: "It is deadly. The fruit body contains amatoxins and phallotoxins, and one cap can kill an adult.",
        confusion: "Amanita verna fruits in spring, and its flesh does not turn yellow with potassium hydroxide. The white form of Amanita phalloides fruits in autumn and is equally poisonous. Amanita citrina var. alba usually keeps veil fragments on the cap and smells of new potatoes. Agaricus species, including Agaricus sylvicola and Agaricus campestris, have no volva, and their gills turn pink and then brown. A button can resemble a puffball until it is cut open and the volva shows. Similar white amanitas in North America, including Amanita bisporigera, Amanita ocreata, and Amanita amerivirosa, are other species.",},
      sk: {
        description: "Ektomykorízna huba lesov. V nížinách je zriedkavá, hojnejšia v horských oblastiach a v ihličnatých lesoch Škandinávie častá. Vyskytuje sa v celej Európe vrátane Británie a Írska, s potvrdenými nálezmi zo severnej Ázie. Severoamerické nálezy uvádzané pod týmto menom patria iným druhom.",
        cap: "Klobúk je široký 5–10 cm (výnimočne až 12 cm). Za mladi je vajcovitý až tupo kužeľovitý, neskôr zvoncovitý až kužeľovito klenutý s tupým hrboľom (často nesúmerne naklonený) a len zriedkavo plochý, s neryhovaným okrajom. Je hladký, čisto biely, na temene v dospelosti niekedy jemne slonovinový až žltookrový, za vlhka mierne lepkavý a za sucha lesklý, spravidla bez zvyškov plachtičky.",
        hymenium: "Lupene sú voľné, husté, 5–8 mm široké, čisto biele, pri okraji klobúka zaoblené a v mladosti zakryté bielou čiastočnou plachtičkou.",
        stipe: "Hlúbik je vysoký 9–15 cm a hrubý 0,6–2 cm, valcovitý, hore mierne zúžený, čisto biely, vláknito vločkatý až šupinkatý a v dospelosti dutý. V hornej časti nesie tenký, ovisnutý a ľahko potrhaný biely prsteň. Na báze je hľuzovito zhrubnutý a vyrastá z veľkej, voľnej vakovitej bielej pošvy, ktorá býva zväčša ponorená v pôde.",
        flesh: "Dužina je biela a na reze nemení farbu, no s roztokom hydroxidu draselného (KOH) alebo sodného (NaOH) sa okamžite sfarbuje na jasnožlto. Vôňa je v mladosti nevýrazná, v dospelosti nepríjemne mdlá až reďkovková.",
        sporePrint: "Výtrusný prach je biely. Výtrusy sú guľovité až takmer guľovité, hladké, bezfarebné a amyloidné, veľké 7–10 μm.",
        habitat: "Plodnice sa objavujú koncom leta a na jeseň, od júla do novembra. Rastie najmä na kyslých pôdach v horských a podhorských ihličnatých, listnatých aj zmiešaných lesoch, najčastejšie pod smrekom, borovicou, jedľou, bukom, brezou a gaštanom.",
        uses: "Je smrteľne jedovatá. Plodnice obsahujú amatoxíny a falotoxíny, ktoré spôsobujú ťažké a často fatálne poškodenie pečene a obličiek; už jeden klobúk môže usmrtiť dospelého človeka.",
        confusion: "Najčastejšie sa zamieňa s jedlými svetlými pečiarkami, napríklad s pečiarkou lesnou (Agaricus sylvicola) alebo pečiarkou poľnou (Agaricus campestris), ktoré však nikdy nemajú na báze hlúbika pošvu a ich lupene sa menia z ružovej na čokoládovohnedú. Smrteľne jedovatá muchotrávka jarná (Amanita verna) a biela forma muchotrávky zelenej (Amanita phalloides var. alba) majú pravidelnejšie pologuľovitý až klenutý klobúk, hladký až jemne pásikavý hlúbik a ich dužina nereaguje s KOH žlto. Mierne jedovatá biela odroda muchotrávky citrónovej (Amanita citrina var. alba) má na klobúku útržky plachtičky, obrezanú hľuzu bez voľnej vakovitej pošvy a páchne po surových zemiakoch.",}
    },
    sources: {
      en: [
        {
          group: "text",
          name: "First Nature",
          href: "https://www.first-nature.com/fungi/amanita-virosa.php"
        },
        {
          group: "text",
          name: "Wikipedia",
          href: "https://en.wikipedia.org/wiki/Amanita_virosa"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/names/NamesRecord.asp?RecordID=163692",
          detail: "163692"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=163692",
          detail: "163692"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=463397",
          detail: "463397"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=163692",
          detail: "163692"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/163692"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/5240323",
          detail: "5240323"
        }
      ],
      sk: [
        {
          group: "text",
          name: "Wikipedia",
          href: "https://sk.wikipedia.org/wiki/Muchotr%C3%A1vka_kon%C4%8Dist%C3%A1",
          detail: "muchotrávka končistá"
        },
        {
          group: "text",
          name: "nahuby.sk",
          href: "https://www.nahuby.sk/atlas-hub/Amanita-virosa/muchotravka-koncista/muchomurka-jizliva/ID290",
          detail: "muchotrávka končistá"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=163692",
          detail: "163692"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/5240323",
          detail: "5240323"
        }
      ]
    },
    synonyms: [
      "Agaricus virosus Fr.",
      "Amanitina virosa (Bertill.) E.-J. Gilbert"
    ]
  };

  var RUBRO_MEDIA = "photos/Boletales/Boletaceae/Rubroboletus_satanas/";
  var RUBROBOLETUS = {
    id: 21,
    name: "Rubroboletus satanas",
    author: "(Lenz) Kuan Zhao & Zhu L. Yang",
    family: "Boletaceae",
    genus: "Rubroboletus",
    order: "Boletales",
    edibility: "poisonous",
    hymenium: "tubes",
    path: [
      "Fungi",
      "Dikarya",
      "Basidiomycota",
      "Agaricomycotina",
      "Agaricomycetes",
      "Agaricomycetidae",
      "Boletales",
      "Boletaceae",
      "Rubroboletus"
    ],
    summary: [
      "Boletales",
      "Boletaceae",
      "Rubroboletus"
    ],
    added: "2026-10-23",
    plate: STORAGE + RUBRO_MEDIA + "Rubroboletus_satanas@1600.webp",
    plateGrid: STORAGE + RUBRO_MEDIA + "Rubroboletus_satanas@400.webp",
    plateCredit: {
      author: "L. Dufour",
      license: "public domain",
      source: "https://www.biodiversitylibrary.org/page/3270641"
    },
    photos: [
      {
        src: STORAGE + RUBRO_MEDIA + "rs1.webp",
        author: "Archenzo",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Boletus_satanas.JPG"
      },
      {
        src: STORAGE + RUBRO_MEDIA + "rs2.webp",
        author: "Bernypisa",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Boletus-satanas-4.jpg"
      },
      {
        src: STORAGE + RUBRO_MEDIA + "rs3.webp",
        author: "Bojan",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Rubroboletus_satanas_2.jpg"
      },
      {
        src: STORAGE + RUBRO_MEDIA + "rs4.webp",
        author: "LukeEmski",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Rubroboletus_satanas_-_Borowik_szata%C5%84ski.jpg"
      }
    ],
    capFrom: 6,
    capTo: 30,
    stipeHeightFrom: 5,
    stipeHeightTo: 15,
    stipeThickFrom: 4,
    stipeThickTo: 12,
    fruitingFrom: 5,
    fruitingTo: 9,
    label: { en: "devil's bolete", sk: "hríb satanský" },
    names: {
      en: [
        "Satan's bolete"
      ],
      sk: [
        "hríb satan",
        "satan",
        "hríb krvavý",
        "kolodej",
        "čertoplach",
        "červená noha",
        "jedovatý kozák",
        "zbojnícka noha",
        "sinál"
      ]
    },
    text: {
      en: {
        description: "An ectomycorrhizal mushroom of warm broad-leaved woods on calcareous soil. It is mostly southern in Europe, rare or absent farther north, and in Britain and Ireland limited to chalk in southern England. It is also reported from Turkey, Crimea, Ukraine, northern Israel, and Cyprus. Western North American records belong to Rubroboletus eastwoodiae.",
        cap: "The cap is typically 6–30 cm across (exceptionally reaching 40–50 cm). It starts hemispherical with an inrolled margin and becomes convex, often with a wavy or lobed margin when old. The surface is chalky white, greyish white, or silvery buff, sometimes tinged olive, ochre, or brownish with age. It is finely velvety at first, later smooth, and slightly viscid in wet weather; the cuticle does not peel.",
        hymenium: "The tubes are up to 25 mm long, free to slightly adnate, pale yellow to greenish yellow or yellow-olive, and turn blue when cut. The small rounded pores are yellow to orange when very young, soon turning blood-red to carmine from the stipe outward (often staying paler near the margin), and bruise blue when pressed.",
        stipe: "The stipe is 5–15 cm long (exceptionally to 20–25 cm) and 4–12 cm thick (exceptionally to 16–20 cm). It is stout and bulbous—often wider than it is tall—barrel-shaped when young and more club-shaped later, with a swollen base. The surface is golden yellow to orange at the apex, pinkish red to carmine through the middle, and deep purple-red toward the base, overlaid on the upper half or throughout by a fine yellow to blood-red net with hexagonal meshes.",
        flesh: "The flesh is thick, firm when young and spongy later, whitish to pale yellow or straw-coloured (sometimes reddish in the stipe base). When cut, it turns pale to sky blue slowly and moderately—strongest above the tubes and at the stipe apex—before fading back toward off-white. The odour is weak and slightly musky in young fruit bodies, becoming foul and carrion-like with age. The taste of young flesh is mild and nutty, though even tasting raw flesh can provoke nausea.",
        sporePrint: "Olivaceous brown. The spores are subfusiform to fusiform and smooth, 10–16 × 4.5–7.5 μm.",
        habitat: "Fruit bodies appear from May to September (mainly late summer and early autumn in Britain). They grow singly or in small groups on chalk and limestone in warm, open broad-leaved woodland under oak, beech, sweet chestnut, hornbeam, and lime.",
        uses: "It is poisonous, especially when raw, causing severe gastrointestinal poisoning with nausea, abdominal pain, and violent vomiting and bloody diarrhoea lasting up to six hours. The glycoprotein toxin bolesatine is implicated, along with trace amounts of muscarine. Although historical accounts report consumption after prolonged boiling in parts of Italy and the former Czechoslovakia, cooking has not been shown to render it safe.",
        confusion: "Suillellus luridus has a darker olive-brown to buff cap, orange-red flesh at the stipe base, and flesh that stains dark blue immediately when cut. Caloboletus calopus has a pale cap and red-netted stipe, but its pores remain yellow and its flesh tastes bitter. Rubroboletus rhodoxanthus and Rubroboletus legaliae prefer more acidic soils and develop distinct pink or rose flushes on the cap; in R. rhodoxanthus the bright yellow flesh blues only in the cap. Rubroboletus pulchrotinctus has a pink-tinged cap margin and a paler stipe, while Rubroboletus rubrosanguineus grows under spruce and fir in mountain forests.",
        notes: "Red-list assessments in both Britain and the Czech Republic classify it as Vulnerable."},
      sk: {
        description: "Ektomykorízna huba teplých listnatých lesov na vápenatých pôdach. V Európe má prevažne južné rozšírenie, ďalej na sever je vzácna alebo chýba a v Británii sa vyskytuje len na kriedovom podloží južného Anglicka. Ďalšie nálezy pochádzajú z Turecka, Krymu, Ukrajiny, severného Izraela a Cypru. Záznamy zo západu Severnej Ameriky patria druhu Rubroboletus eastwoodiae.",
        cap: "Klobúk má v priemere 6–30 cm (výnimočne až 40 cm). Najprv je polguľovitý s podvinutým okrajom, neskôr vankúšovito klenutý so zvlneným okrajom. Za mladi je kriedovobiely až striebristosivý, neskôr sivý, olivovosivý až svetlookrový alebo kožovožltkastý, bez ružových či purpurových odtieňov. Povrch je spočiatku jemne zamatový, potom hladký, za vlhka mierne lepkavý a pokožka sa nedá olúpať.",
        hymenium: "Rúrky sú až 25 mm dlhé, pri hlúbiku voľné až úzko prirastené, žlté až zelenožlté a na reze modrejú. Póry sú drobné a okrúhle, vo veľmi mladom štádiu žlté až oranžové, čoskoro však od hlúbika smerom k okraju krvavočervené až karmínové a po otlačení modrejú.",
        stipe: "Hlúbik je 5–15 cm vysoký a 4–12 cm hrubý, zavalitý, bruchatý až hľuzovitý (často širší než vyšší). Na vrchole je zlatožltý až oranžový, v strednej časti karmínovočervený a pri báze purpurovočervený, v hornej polovici alebo po celej dĺžke pokrytý jemnou žltou až krvavočervenou sieťkou s hranatými okami.",
        flesh: "Dužina je hrubá, v mladosti pevná a neskôr špongiovitá, belavá až bledožltá; na reze modrie len mierne a pomaly (najvýraznejšie nad rúrkami a vo vrchole hlúbika). V mladosti má slabú vôňu a jemnú orieškovú chuť, no v dospelosti nepríjemne zapácha po zdochline alebo zhnitej cibuli.",
        sporePrint: "Výtrusný prach je olivovohnedý. Výtrusy sú vretenovité a hladké, veľké 10–16 × 4,5–7,5 μm.",
        habitat: "Plodnice sa objavujú od mája do septembra. Rastú jednotlivo alebo v malých skupinách na vápenatých a kriedových pôdach v teplých, svetlých listnatých lesoch pod dubom, bukom, hrabom, lipou a gaštanom jedlým. Na Slovensku sa vyskytuje zriedkavo v teplých dubových lesoch na juhu územia, napríklad v Štiavnických vrchoch a v Slovenskom krase.",
        uses: "Je jedovatý, najmä za surova alebo pri nedostatočnej tepelnej úprave. Obsahuje glykoproteínový toxín bolesatín (a stopy muskarínu) a spôsobuje ťažké gastrointestinálne otravy sprevádzané nevoľnosťou, bolesťami brucha, prudkým vracaním a krvavou hnačkou trvajúcou až šesť hodín; nevoľnosť môže vyvolať už ochutnanie surovej dužiny. Hoci sa v niektorých oblastiach historicky konzumoval po dlhom varení, tepelná úprava sa nepovažuje za spoľahlivo bezpečnú.",
        confusion: "Blízko príbuzný hríb ružovokožý (Rubroboletus rhodoxanthus) a hríb satanský falošný (Rubroboletus legaliae) majú na klobúku výrazné ružové až staroružové odtiene; pri hríbe ružovokožom navyše citrónovožltá dužina na reze modrie iba v klobúku. Hríb siný (Suillellus luridus) má okrovohnedý až olivovohnedý klobúk, oranžovočervenú bázu hlúbika na reze a dužinu, ktorá okamžite intenzívne tmavomodrie. Hríb zrnitohlúbikový (Neoboletus luridiformis) má tmavohnedý klobúk a na hlúbiku namiesto sieťky červené zrnká. Nejedlý hríb horký (Caloboletus calopus) má bledý klobúk a červenú sieťku na hlúbiku, ale jeho póry sú trvalo citrónovožlté a dužina je výrazne horká.",
        notes: "V červených zoznamoch Británie aj Českej republiky je zaradený ako zraniteľný druh (Vulnerable)."}
    },
    sources: {
      en: [
        {
          group: "text",
          name: "First Nature",
          href: "https://www.first-nature.com/fungi/rubroboletus-satanas.php"
        },
        {
          group: "text",
          name: "Wikipedia",
          href: "https://en.wikipedia.org/wiki/Rubroboletus_satanas"
        },
        {
          group: "text",
          name: "myko.cz",
          href: "https://www.myko.cz/myko-atlas/Boletus-satanas/"
        },
        {
          group: "text",
          name: "NBN Atlas",
          href: "https://species.nbnatlas.org/species/BMSSYS0000050748"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=809241",
          detail: "809241"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=809241",
          detail: "809241"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=809235",
          detail: "809235"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/809241"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/7722553",
          detail: "7722553"
        }
      ],
      sk: [
        {
          group: "text",
          name: "Wikipedia",
          href: "https://sk.wikipedia.org/wiki/Hr%C3%ADb_satansk%C3%BD",
          detail: "hríb satanský"
        },
        {
          group: "text",
          name: "nahuby.sk",
          href: "https://www.nahuby.sk/atlas-hub/Rubroboletus-satanas/hrib-satansky/hrib-satan/ID134",
          detail: "hríb satanský"
        },
        {
          group: "text",
          name: "First Nature",
          href: "https://www.first-nature.com/fungi/rubroboletus-satanas.php"
        },
        {
          group: "text",
          name: "Wikipedia",
          href: "https://en.wikipedia.org/wiki/Rubroboletus_satanas"
        },
        {
          group: "text",
          name: "myko.cz",
          href: "https://www.myko.cz/myko-atlas/Boletus-satanas/"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=809241",
          detail: "809241"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=809241",
          detail: "809241"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/809241"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/7722553",
          detail: "7722553"
        }
      ]
    },
    synonyms: [
      "Boletus satanas Lenz",
      "Suillus satanas (Lenz) Kuntze",
      "Tubiporus satanas (Lenz) Maire",
      "Suillellus satanas (Lenz) Blanco-Dios",
      "Boletus foetidus Lagger",
      "Boletus crataegi Smotl. ex Hlaváček"
    ]
  };

  var CORTINARIUS_MEDIA = "photos/Agaricales/Cortinariaceae/Cortinarius_rubellus/";
  var CORTINARIUS = {
    id: 22,
    name: "Cortinarius rubellus",
    author: "Cooke",
    family: "Cortinariaceae",
    genus: "Cortinarius",
    order: "Agaricales",
    edibility: "deadly",
    hymenium: "gills",
    path: [
      "Fungi",
      "Dikarya",
      "Basidiomycota",
      "Agaricomycotina",
      "Agaricomycetes",
      "Agaricomycetidae",
      "Agaricales",
      "Cortinariaceae",
      "Cortinarius"
    ],
    summary: [
      "Agaricales",
      "Cortinariaceae",
      "Cortinarius"
    ],
    added: "2026-10-23",
    plate: STORAGE + CORTINARIUS_MEDIA + "Cortinarius_rubellus@1600.webp",
    plateGrid: STORAGE + CORTINARIUS_MEDIA + "Cortinarius_rubellus@400.webp",
    plateCredit: {
      author: "Giacomo Bresadola",
      license: "public domain",
      source: "https://commons.wikimedia.org/wiki/File:Bresadola_-_Cortinarius_brunneo-fulvus.png"
    },
    photos: [
      {
        src: STORAGE + CORTINARIUS_MEDIA + "cr1.webp",
        author: "Andreas Kunze",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:2006-07-12_Cortinarius_rubellus_1.jpg"
      },
      {
        src: STORAGE + CORTINARIUS_MEDIA + "cr2.webp",
        author: "Andreas Kunze",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:2006-07-12_Cortinarius_rubellus_2.jpg"
      },
      {
        src: STORAGE + CORTINARIUS_MEDIA + "cr3.webp",
        author: "Andreas Kunze",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:2007-07-07_Cortinarius_rubellus.jpg"
      },
      {
        src: STORAGE + CORTINARIUS_MEDIA + "cr4.webp",
        author: "Svencapoeira",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:K%C3%BChmv%C3%B6%C3%B6dik.jpg"
      },
      {
        src: STORAGE + CORTINARIUS_MEDIA + "cr5.webp",
        author: "Danny Steven S.",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Cortinarius-rubellus064.jpg"
      }
    ],
    capFrom: 4,
    capTo: 8,
    stipeHeightFrom: 5,
    stipeHeightTo: 10,
    stipeThickFrom: 0.7,
    stipeThickTo: 1.5,
    fruitingFrom: 8,
    fruitingTo: 11,
    label: {
      en: "deadly webcap",
      sk: "pavučinovec otravný"
    },
    names: {},
    text: {
      en: {
        description: "A mycorrhizal mushroom of small groups on damp acid soil under conifers. It is rare in southern England and Wales, more frequent farther north in the British Isles, and very common in Scandinavia and northern mainland Europe. It also occurs in North America and in the mountains of central Japan.",
        cap: "The cap is 4–8 cm across. It is tawny brown to orange, convex at first, then flattening, and it keeps a slight or sometimes pronounced umbo. The surface is dry and slightly scaly, and the margin often stays slightly rolled down.",
        hymenium: "The gills are adnate and covered by a cortina in young fruit bodies. They are pale yellowish at first and become rusty brown as the spores mature.",
        stipe: "The stipe is 5–10 cm tall and 0.7–1.5 cm thick, cylindrical or slightly club-shaped and often curved. It is paler than the cap, fibrous, and decorated below with concentric yellowish bands (remnants of the universal veil) in a snakeskin-like pattern, with rusty-reddish fibres from the cortina higher up.",
        flesh: "The flesh is cream or pale yellow, darker tan to reddish brown under the cap skin and in the base of the stipe. The smell is faint and radish-like, and the taste is mild.",
        sporePrint: "Rusty reddish-brown. The spores are ellipsoidal to subglobose and verrucose (warty), 9–12 × 6.5–8.5 μm.",
        habitat: "Fruit bodies appear from August to November. It grows with pine and spruce on damp acid soil, often in Sphagnum moss, in wet conifer woodland and boggy mixed woodland.",
        uses: "It is deadly poisonous. It contains orellanine, a potent nephrotoxin that destroys the renal tubules and causes acute kidney failure. Symptoms typically do not appear until 2 to 14 days after ingestion, beginning with intense thirst, headache, chills, nausea, and flank pain, followed by renal failure. Early medical intervention and dialysis are critical. Foragers have fatally mistaken it for chanterelles or funnel chanterelles.",
        confusion: "Cortinarius orellanus sometimes has an umbo, and that umbo is usually less sharp. Craterellus tubaeformis has a funnel-shaped cap and ridges rather than gills. Chanterelles have ridges, and ceps have pores.",},
      sk: {
        description: "Mykorízna huba rastúca v malých skupinách na vlhkej kyslej pôde pod ihličnanmi. Na juhu Anglicka a vo Walese je zriedkavá, severnejšie na Britských ostrovoch častejšia a v Škandinávii a severnej kontinentálnej Európe veľmi hojná. Vyskytuje sa aj v Severnej Amerike a v horách stredného Japonska.",
        cap: "Klobúk má 4–8 cm v priemere. Najprv je kužeľovito klenutý, neskôr plocho rozprestretý a v strede si spravidla zachováva výrazný, často ostrý hrboľ. Je hrdzavohnedý, škoricovohnedý až oranžovočervenohnedý, suchý, matný a jemne vláknito šupinkatý, so sklopeným okrajom.",
        hymenium: "Lupene sú prirastené až zúbkom zbiehavé, pomerne riedke a široké, v mladosti zakryté bledožltou pavučinkou (kortinou). Spočiatku sú okrovožlté až škoricové, v dospelosti od dozrievajúcich výtrusov tmavo hrdzavohnedé.",
        stipe: "Hlúbik je 5–10 cm vysoký a 0,7–1,5 cm hrubý, valcovitý alebo kyjakovitý a často prehnutý. Je bledší než klobúk, vláknitý, v hornej časti s hrdzavohnedými vláknami od pavučinky a v dolnej časti charakteristicky zdobený niekoľkými žltými až okrovožltými kľukatými pásmi (zvyškami celkového závoja), ktoré pripomínajú hadiu kožu.",
        flesh: "Dužina je krémová až bledožltá, pod pokožkou klobúka a v báze hlúbika hrdzavohnedastá. Vôňa je slabá, pripomínajúca reďkovku, a chuť je mierna.",
        sporePrint: "Výtrusný prach je hrdzavohnedý. Výtrusy sú široko elipsoidné až takmer guľovité a bradavičnaté, veľké 9–12 × 6,5–8,5 μm.",
        habitat: "Plodnice sa objavujú od augusta do novembra. Rastie s borovicou a smrekom na vlhkej kyslej pôde, často v rašelinníku (Sphagnum), vo vlhkých ihličnatých a podmáčaných zmiešaných lesoch od podhorí do horského pásma.",
        uses: "Je smrteľne jedovatá. Obsahuje orelanín, silný nefrotoxín, ktorý ničí obličkové kanáliky a spôsobuje akútne a často nezvratné zlyhanie obličiek. Zákernosť otravy spočíva v mimoriadne dlhom bezpríznakovom období: prvé príznaky (úporný smäd, bolesti hlavy a bedier, zimnica a nevoľnosť) sa objavujú až 2 až 14 dní po požití.",
        confusion: "Rovnako smrteľne jedovatý pavučinovec plyšový (Cortinarius orellanus) má tupší klobúk bez ostrého hrboľa, hlúbik bez žltých kľukatých pásov a rastie v teplých listnatých lesoch pod dubmi a bukmi. Neskúsení hubári si tento druh smrteľne zamieňajú s jedlým kuriatkom jedlým (Cantharellus cibarius) alebo s kuriatkom lievikovitým (Craterellus tubaeformis), ktoré však majú na spodnej strane klobúka nízke vidlicovité lišty namiesto lupeňov a nemajú pavučinku ani pásikavý hlúbik.",}
    },
    sources: {
      en: [
        {
          group: "text",
          name: "First Nature",
          href: "https://www.first-nature.com/fungi/cortinarius-rubellus.php"
        },
        {
          group: "text",
          name: "Wikipedia",
          href: "https://en.wikipedia.org/wiki/Cortinarius_rubellus"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=166839",
          detail: "166839"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=166839",
          detail: "166839"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=166839",
          detail: "166839"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=17391",
          detail: "17391"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/166839"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/2528663",
          detail: "2528663"
        }
      ],
      sk: [
        {
          group: "text",
          name: "nahuby.sk",
          href: "https://www.nahuby.sk/atlas-hub/Cortinarius-rubellus/pavucinovec-otravny/pavucinec-skvely--pavucinec-cervenooranzovy/ID337",
          detail: "pavučinovec otravný"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=166839",
          detail: "166839"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=166839",
          detail: "166839"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=166839",
          detail: "166839"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/166839"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/2528663",
          detail: "2528663"
        }
      ]
    },
    synonyms: [
      "Telamonia rubella (Cooke) A. Blytt",
      "Cortinarius orellanoides Rob. Henry",
      "Cortinarius speciosus J. Favre",
      "Cortinarius speciosissimus Kühner & Romagn."
    ]
  };

  var CRATERELLUS_MEDIA = "photos/Cantharellales/Hydnaceae/Craterellus_cornucopioides/";
  var CRATERELLUS = {
    id: 23,
    name: "Craterellus cornucopioides",
    author: "(L.) Pers.",
    family: "Hydnaceae",
    genus: "Craterellus",
    order: "Cantharellales",
    edibility: "choice",
    hymenium: "smooth",
    path: ["Fungi", "Dikarya", "Basidiomycota", "Agaricomycotina", "Agaricomycetes", "Cantharellales", "Hydnaceae", "Craterellus"],
    summary: ["Cantharellales", "Hydnaceae", "Craterellus"],
    added: "2026-10-23",
    plate: STORAGE + CRATERELLUS_MEDIA + "Craterellus_cornucopioides@1600.webp",
    plateGrid: STORAGE + CRATERELLUS_MEDIA + "Craterellus_cornucopioides@400.webp",
    plateCredit: {
      author: "L. Dufour",
      license: "public domain",
      source: "https://www.biodiversitylibrary.org/page/3270709"
    },
    photos: [
      {
        src: STORAGE + CRATERELLUS_MEDIA + "crn1.webp",
        author: "Jean-Pol GRANDMONT",
        license: "CC BY 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by/3.0",
        source: "https://commons.wikimedia.org/wiki/File:0_Craterellus_cornucopioides_-_Trompette_de_la_mort_(1).JPG"
      },
      {
        src: STORAGE + CRATERELLUS_MEDIA + "crn2.webp",
        author: "Jean-Pol GRANDMONT",
        license: "CC BY 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by/3.0",
        source: "https://commons.wikimedia.org/wiki/File:0_Craterellus_cornucopioides_-_Trompette_de_la_mort_(2).JPG"
      },
      {
        src: STORAGE + CRATERELLUS_MEDIA + "crn3.webp",
        author: "Holger Krisp",
        license: "CC BY 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Black_trumpet_Craterellus_cornucopioides.jpg"
      },
      {
        src: STORAGE + CRATERELLUS_MEDIA + "crn4.webp",
        author: "Franck Hidvégi",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Craterellus_cornucopioides_6.jpg"
      },
      {
        src: STORAGE + CRATERELLUS_MEDIA + "crn5.webp",
        author: "tomasz przechlewski",
        license: "CC BY 2.0",
        licenseUrl: "https://creativecommons.org/licenses/by/2.0",
        source: "https://commons.wikimedia.org/wiki/File:Craterellus_cornucopioides1.jpg"
      }
    ],
    capFrom: 4,
    capTo: 8,
    stipeHeightTo: 10,
    fruitingFrom: 6,
    fruitingTo: 12,
    label: { en: "horn of plenty", sk: "lievik trúbkovitý" },
    names: {
      en: ["trumpet of death", "black trumpet", "black chanterelle", "trumpet of the dead"]
    },
    text: {
      en: {
        description: "A mycorrhizal mushroom that is hard to see against leaf litter. In the strict sense it is European, from Scandinavia to the Mediterranean, and localised but often abundant where it occurs in Britain and Ireland. A broader complex once included under this name occurs in the Americas and in Asia, including Japan.",
        cap: "The cap is funnel-shaped, 4–8 cm across, with an inrolled margin. The upper, infertile surface is grey-brown to dark grey or black, with wrinkled striations toward the margin.",
        hymenium: "The outer fertile surface is grey and pruinose, and finely wrinkled lengthwise. The basidia are slenderly clavate, and each bears two spores.",
        stipe: "The stipe is grey and pruinose, finely wrinkled lengthwise, and hollow to the base, toward which it tapers slightly. It is seamless with the cap. Fruit bodies grow to about 10 cm tall, and exceptionally to 15 cm.",
        flesh: "The odour and taste are not distinctive.",
        sporePrint: "White to pale buff or cream. The spores are broadly ellipsoidal, smooth, and hyaline, 11.5–16 × 7–10 μm.",
        habitat: "Fruit bodies appear from June to November, and into December in a mild autumn in southern Britain. In Mediterranean countries and on the Iberian Peninsula they continue into the new year. They grow in groups on soil in deciduous woods, most often under beech and also with oak and other broad-leaved trees, often in moss on moist heavy calcareous soil.",
        uses: "It is a choice edible. It tastes better than the dark fruit body suggests. Dried fruit bodies can be stored, and the mushroom is also made into a sauce.",
        confusion: "Craterellus fallax is very similar and occurs in eastern North America, where it is distinguished by a yellowish to salmon-ochre spore print. Craterellus cinereus (Cantharellus cinereus) has distinct forked, decurrent false gills (veins) on the outer surface and basidia that bear four to six spores, whereas Craterellus sinuosus (Pseudocraterellus undulatus) has a more crisped, wavy cap and a strongly wrinkled fertile surface.",
        notes: "A 2024 assessment places the species as Least Concern."},
      sk: {
        description: "Mykorízna huba, ktorú je v opadanom lístí ťažko vidieť. V užšom zmysle je európska, od Škandinávie po Stredozemie, a tam, kde sa v Británii a Írsku vyskytuje, je len miestami, no často hojná. Širší komplex, ktorý sa kedysi zaraďoval pod toto meno, sa vyskytuje v Amerike a v Ázii vrátane Japonska.",
        cap: "Klobúk má 30–80 mm v priemere. Je trúbkovito lievikovitý a tenko mäsitý, s prehnutým okrajom, ktorý býva v dospelosti vlnitý, laločnatý a roztrhaný. Na vnútornej strane je najprv hnedočierny, neskôr čiernosivý až čierny a šupinkatý.",
        hymenium: "Celú vonkajšiu stranu plodnice vrátane hlúbika pokrýva výtrusové rúcho. Na vonkajšej strane je sivohnedé, najprv hladké, neskôr vráskavé a v dospelosti od bieleho výtrusného prachu belavo oinovatené.",
        stipe: "Hlúbik je 50–120 mm vysoký a dutý. Smerom dolu sa zužuje a hore pomaly prechádza do klobúka. Je rovnako sfarbený ako klobúk.",
        flesh: "Dužina je veľmi krehká a trochu chrupkovitá. Najprv je sivočierna, potom čierna, bez výraznej chuti, s príjemnou vôňou. Usušená huba je celá čierna a lámavá.",
        sporePrint: "Výtrusný prach je biely. Výtrusy sú vajcovito elipsovité, hladké a bezfarebné, 12–15 × 7–8,5 μm.",
        habitat: "Plodnice sa objavujú od júna do novembra a v miernej jeseni na juhu Británie aj v decembri. V stredomorských krajinách a na Pyrenejskom polostrove pokračujú aj do nového roka. Rastú v skupinách na pôde v listnatých lesoch, najčastejšie pod bukom a aj s dubom a inými listnáčmi, často v machu na vlhkej ťažkej vápenatej pôde.",
        uses: "Je to výborná jedlá huba aj napriek nevzhľadnému zovňajšku. Hodí sa do polievok, omáčok, na zaváranie v octovom náleve a na sušenie. Usušené a rozdrvené plodnice sa používajú ako korenie.",
        confusion: "Zámena s jedovatými hubami je pre charakteristický tvar a farbu nepravdepodobná. Podobá sa jej jedlý lievik kučeravý (Craterellus sinuosus), ktorý je menší, bledšie sivohnedý a má silne zvlnený klobúk aj vráskavú vonkajšiu plodnú stranu, a jedlý lievik popolavý (Craterellus cinereus), ktorý má na vonkajšej strane zreteľné vidlicovito rozkonárené zbiehavé lišty (nepravé lupene).",
        notes: "Hodnotenie IUCN z roku 2024 zaraďuje druh medzi málo dotknuté druhy (Least Concern)."}
    },
    sources: {
      en: [
        { group: "text", name: "First Nature", href: "https://www.first-nature.com/fungi/craterellus-cornucopioides.php" },
        { group: "text", name: "Wikipedia", href: "https://en.wikipedia.org/wiki/Craterellus_cornucopioides" },
        { group: "name", name: "Index Fungorum", href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=153130", detail: "153130" },
        { group: "name", name: "Species Fungorum", href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=153130", detail: "153130" },
        { group: "name", name: "Species Fungorum", href: "https://www.speciesfungorum.org/Names/genusrecord.asp?RecordID=17398", detail: "17398" },
        { group: "name", name: "MycoBank", href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/153130" },
        { group: "name", name: "GBIF", href: "https://www.gbif.org/species/2554662", detail: "2554662" },
        { group: "name", name: "IUCN", href: "https://www.iucnredlist.org/species/122090489/122090908" }
      ],
      sk: [
        { group: "text", name: "nahuby.sk", href: "https://www.nahuby.sk/atlas-hub/Craterellus-cornucopioides/lievik-trubkovity/strocek-trubkovity/ID248", detail: "lievik trúbkovitý" },
        { group: "text", name: "Wikipedia", href: "https://sk.wikipedia.org/wiki/Lievik_tr%C3%BAbkovit%C3%BD" },
        { group: "name", name: "Index Fungorum", href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=153130", detail: "153130" },
        { group: "name", name: "GBIF", href: "https://www.gbif.org/species/2554662", detail: "2554662" }
      ]
    },
    synonyms: ["Peziza cornucopioides L.", "Helvella cornucopioides (L.) Scop.", "Octospora cornucopioides (L.) Timm", "Pezicula cornucopioides (L.) Paulet", "Merulius cornucopioides (L.) With.", "Craterella cornucopioides (L.) Pers.", "Cantharellus cornucopioides (L.) Fr.", "Sterbeeckia cornucopioides (L.) Dumort.", "Pleurotus cornucopioides (L.) Gillet", "Trombetta cornucopioides (L.) Kuntze", "Merulius purpureus With.", "Cantharellus cornucopiae Wallr.", "Craterellus ochrosporus Burt", "Craterellus konradii Bourdot & Maire", "Cantharellus konradii (Bourdot & Maire) Romagn."]
  };

  var FISTULINA_MEDIA = "photos/Agaricales/Fistulinaceae/Fistulina_hepatica/";
  var FISTULINA = {
    id: 24,
    name: "Fistulina hepatica",
    author: "(Schaeff.) With.",
    family: "Fistulinaceae",
    genus: "Fistulina",
    order: "Agaricales",
    edibility: "edible",
    hymenium: "tubes",
    path: ["Fungi", "Dikarya", "Basidiomycota", "Agaricomycotina", "Agaricomycetes", "Agaricomycetidae", "Agaricales", "Fistulinaceae", "Fistulina"],
    summary: ["Agaricales", "Fistulinaceae", "Fistulina"],
    added: "2026-10-23",
    plate: STORAGE + FISTULINA_MEDIA + "Fistulina_hepatica@1600.webp",
    plateGrid: STORAGE + FISTULINA_MEDIA + "Fistulina_hepatica@400.webp",
    plateCredit: {
      author: "L. Dufour",
      license: "not stated"
    },
    photos: [
      {
        src: STORAGE + FISTULINA_MEDIA + "fh1.webp",
        author: "Dan Molter",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Fistulina_hepatica01.jpg"
      },
      {
        src: STORAGE + FISTULINA_MEDIA + "fh2.webp",
        author: "Ian Dodd",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:2008-05-30_Fistulina_hepatica_(Schaeff.)_With_13737.jpg"
      },
      {
        src: STORAGE + FISTULINA_MEDIA + "fh3.webp",
        author: "dario.z",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:2014-07-05_Fistulina_hepatica_(Schaeff.)_With_431987.jpg"
      },
      {
        src: STORAGE + FISTULINA_MEDIA + "fh4.webp",
        author: "Bjoerns",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Fistulina_hepatica_(Wesel,_Nordrhein-Westfalen,_Germany)_3.jpg"
      },
      {
        src: STORAGE + FISTULINA_MEDIA + "fh5.webp",
        author: "Vavrin",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Fistulina_hepatica_CzechRep.jpg"
      }
    ],
    capFrom: 10,
    capTo: 25,
    stipeHeightFrom: 1,
    stipeHeightTo: 5,
    fruitingFrom: 6,
    fruitingTo: 11,
    label: { en: "beefsteak fungus", sk: "pečeňovec dubový" },
    names: {
      en: ["beefsteak polypore", "ox tongue", "poor man's steak", "tongue mushroom"]
    },
    text: {
      en: {
        description: "A bracket fungus of living and dead oak, sometimes on sweet chestnut and other broadleaved trees. It is widespread and fairly common in Britain and Ireland, through mainland Europe, and in North America, especially east of the Rocky Mountains. It is also reported from Africa, Australia, subtropical India, and the Canary Islands.",
        cap: "The bracket starts nearly globose and warty, then becomes tongue-shaped or semicircular. It is typically 10–25 cm across and 2–6 cm thick. Large fruit bodies reach about 30 cm across and about 8 cm thick, and a very young one can be only about 5 cm across. The upper surface is rough or fibrous, often radially streaked, and sticky or slimy when wet. Young brackets are orange-red to blood red, then liver red, purplish, or reddish brown, and dark brown in age.",
        hymenium: "The tubes stand free of one another and are about 10–15 mm long. They are whitish, creamy, pale pinkish, or pale yellow, then reddish brown, and they bruise rusty brown to deep red-brown. Mature tubes open in a star shape. The pores are small and round, about 4–6 per millimetre. The basidia are clavate and four-spored. Pleurocystidia are absent. Cystidium-like hyphal ends at the tube mouths are about 5–7 μm wide. The hyphae are monomitic, with clamp connections, and some are gloeopleurous.",
        stipe: "A short lateral stipe is often present, about 1–5 cm long and up to about 4 cm wide, coloured like the cap above and pore-bearing below. Many brackets have no stipe and attach by a narrowed side.",
        flesh: "The flesh is juicy and about 3–5 cm thick. It is dark red to meat red, marbled or streaked with paler veins, though some North American fruit bodies are whitish and streaked reddish. Cut flesh exudes a dull red juice. The smell is mild or pleasantly mushroomy, and the taste is sour, slightly acidic, or slightly bitter. Older flesh becomes tough and leathery.",
        sporePrint: "The print is pale pinkish yellow or pinkish in some accounts, reddish brown in others, and ochre-rusty, darkening to rusty brown, in others. European spores are ovoid to tear-shaped, smooth, and inamyloid, about 4–6 × 3–4 μm. North American spores are smaller, about 3–4 × 2–3 μm, smooth, and widely almond-shaped to somewhat ellipsoid or tear-shaped.",
        habitat: "Fruit bodies appear from June into November, and in Britain and Ireland mainly from July to October. They grow low on living trunks at wounds, and on stumps and dead roots, mainly of oak and sweet chestnut, and less often of beech, walnut, and ash. On the Canary Islands the host is laurel, and in Australia the reports are from eucalyptus wounds. The fungus parasitises living oak heartwood and also feeds on dead wood. The decay is a slow brown rot, and the stained heartwood is valued by furniture makers.",
        uses: "Young fruit bodies are edible after thorough cooking. They are simmered until tender, fried, or used in a goulash or a vinegar pickle. The taste is sour and slightly bitter, and the flesh is rich in tannins and hard to digest. Some accounts rate the young fruit bodies well, and others do not rank them among the better edibles. Older fruit bodies are tough, and their juice can upset the stomach, so they are soaked overnight before cooking.",
        confusion: "Inonotus hispidus has a strongly hairy cap and grows on oak and on apple. Very young fruit bodies can resemble Laetiporus sulphureus, which forms flatter brackets stacked one above another. Ischnoderma has tubes fused to one another. Buglossoporus quercinus grows in similar places and has a yellow-brown cap skin and longer spores. Daedaleopsis confragosa var. tricolor is only about 1 cm thick and has gills. Pycnoporus cinnabarinus is smaller and woody, with elongated angular pores.",
        notes: "In northern Europe this is the only species of the genus. Fistulina antarctica, Fistulina endoxantha, and Fistulina pumiliae are separate species on southern beech. Infected oak heartwood is sold as brown oak."},
      sk: {
        description: "Konzolovitá huba živých aj odumretých dubov, niekedy gaštana jedlého a iných listnáčov. V Británii a Írsku je rozšírená a pomerne hojná, rastie v kontinentálnej Európe a v Severnej Amerike, najmä východne od Skalnatých hôr. Uvádza sa aj z Afriky, Austrálie, subtropickej Indie a z Kanárskych ostrovov.",
        cap: "Plodnica je najprv takmer guľovitá a bradavkovitá, neskôr jazykovitá alebo polkruhovitá. Zvyčajne meria 10–25 cm a je hrubá 2–6 cm. Veľké plodnice dosahujú asi 30 cm a hrúbku okolo 8 cm, veľmi mladá môže mať len asi 5 cm. Vrchná strana je drsná alebo vláknitá, často lúčovito pásikavá a za vlhka lepkavá alebo slizká. Mladé plodnice sú oranžovočervené až krvavočervené, potom pečeňovočervené, purpurové alebo červenohnedé a v starobe tmavohnedé.",
        hymenium: "Rúrky stoja voľne vedľa seba a sú dlhé asi 10–15 mm. Sú belavé, krémové, bledo ružovkasté alebo bledožlté, neskôr červenohnedé a po otlačení hrdzavohnedé až tmavo červenohnedé. Ústia dospelých rúrok sú hviezdovité. Póry sú drobné a okrúhle, asi 4–6 na milimeter. Bazídiá sú kyjačkovité a štvorvýtrusné. Pleurocystidy chýbajú. Na ústiach rúrok sú konce hýf podobné cystidám, široké asi 5–7 μm. Hýfy sú monomitické, so spojkami, a niektoré sú gloeopleurózne.",
        stipe: "Krátky bočný hlúbik býva často prítomný, dlhý asi 1–5 cm a široký až asi 4 cm. Zvrchu je sfarbený ako klobúk a zospodu nesie póry. Mnohé plodnice hlúbik nemajú a prirastajú zúženým bokom.",
        flesh: "Dužina je šťavnatá a hrubá asi 3–5 cm. Je tmavočervená až mäsovočervená, mramorovaná alebo popretkávaná svetlejšími žilkami. Niektoré severoamerické plodnice sú belavé a červenkavo žilkované. Na reze z nej vyteká matnočervená šťava. Vôňa je mierna alebo príjemne hubová a chuť kyslá, slabo kyslastá alebo slabo horká. Staršia dužina tvrdne a kožovatie.",
        sporePrint: "Výtrusný prach býva bledo ružovožltý alebo ružovkastý, inde červenohnedý a inde okrovohrdzavý, ktorý tmavne do hrdzavohneda. Európske výtrusy sú vajcovité až slzovité, hladké a neamyloidné, asi 4–6 × 3–4 μm. Severoamerické výtrusy sú menšie, asi 3–4 × 2–3 μm, hladké a široko mandľovité až mierne elipsoidné alebo slzovité.",
        habitat: "Plodnice sa objavujú od júna do novembra, v Británii a Írsku najmä od júla do októbra. Rastú nízko na živých kmeňoch pri ranách a na pňoch a odumretých koreňoch, najmä duba a gaštana jedlého, zriedkavejšie buka, orecha kráľovského a jaseňa. Na Kanárskych ostrovoch je hostiteľom vavrín a z Austrálie sa uvádza z rán eukalyptov. Huba je na živom jadrovom dreve duba parazitická a na odumretom dreve saprotrofná. Hniloba je pomalá hnedá hniloba a zafarbené jadrové drevo si cenia výrobcovia nábytku.",
        uses: "Mladé plodnice sú jedlé po dôkladnej tepelnej úprave. Varia sa domäkka, vyprážajú sa alebo sa dávajú do guláša a do octového nálevu. Chuť je kyslá a slabo horká, dužina je bohatá na triesloviny a ťažko stráviteľná. Jedni mladé plodnice hodnotia priaznivo, iní ich nepočítajú medzi lepšie jedlé huby. Staršie plodnice sú tuhé a ich šťava môže podráždiť žalúdok, preto sa pred varením namáčajú cez noc.",
        confusion: "Ryšavec srstnatý (Inonotus hispidus) má výrazne chlpatý klobúk a rastie na dube aj na jabloni. Veľmi mladé plodnice môžu pripomínať sírovec obyčajný (Laetiporus sulphureus), ktorý tvorí plochejšie plodnice naukladané nad sebou. Pri rode Ischnoderma sú rúrky navzájom zrastené. Brezovník dubový (Buglossoporus quercinus) rastie na podobných miestach, má žltohnedú pokožku klobúka a dlhšie výtrusy. Daedaleopsis confragosa var. tricolor je hrubá len asi 1 cm a má lupene. Červenica rumelková (Pycnoporus cinnabarinus) je menšia a drevnatá, s predĺženými hranatými pórmi.",
        notes: "V severnej Európe je to jediný druh rodu. Fistulina antarctica, Fistulina endoxantha a Fistulina pumiliae sú samostatné druhy na pabuku. Napadnuté jadrové drevo duba sa predáva ako brown oak. Na Slovensku je tento druh rozšírený v starých dubových lesoch."}
    },
    sources: {
      en: [
        { group: "text", name: "First Nature", href: "https://www.first-nature.com/fungi/fistulina-hepatica.php" },
        { group: "text", name: "Wikipedia", href: "https://en.wikipedia.org/wiki/Fistulina_hepatica" },
        { group: "text", name: "MushroomExpert", href: "https://www.mushroomexpert.com/fistulina_hepatica.html" },
        { group: "text", name: "nahuby.sk", href: "https://www.nahuby.sk/atlas-hub/Fistulina-hepatica/pecenovec-dubovy/pstren-dubovy/ID393", detail: "pečeňovec dubový" },
        { group: "text", name: "Wikipedia", href: "https://de.wikipedia.org/wiki/Eichen-Leberreischling" },
        { group: "text", name: "myko.cz", href: "https://www.myko.cz/myko-atlas/Fistulina-hepatica/" },
        { group: "name", name: "Index Fungorum", href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=193923", detail: "193923" },
        { group: "name", name: "Species Fungorum", href: "https://www.speciesfungorum.org/names/Synonymy.asp?RecordID=193923", detail: "193923" },
        { group: "name", name: "Species Fungorum", href: "https://www.speciesfungorum.org/names/NamesRecord.asp?RecordID=231009", detail: "231009" },
        { group: "name", name: "Species Fungorum", href: "https://www.speciesfungorum.org/names/genusrecord.asp?RecordID=17591", detail: "17591" },
        { group: "name", name: "MycoBank", href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/193923" },
        { group: "name", name: "GBIF", href: "https://www.gbif.org/species/2531012", detail: "2531012" }
      ],
      sk: [
        { group: "text", name: "nahuby.sk", href: "https://www.nahuby.sk/atlas-hub/Fistulina-hepatica/pecenovec-dubovy/pstren-dubovy/ID393", detail: "pečeňovec dubový" },
        { group: "name", name: "Index Fungorum", href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=193923", detail: "193923" },
        { group: "name", name: "GBIF", href: "https://www.gbif.org/species/2531012", detail: "2531012" }
      ]
    },
    synonyms: ["Boletus hepaticus Schaeff.", "Hypodrys hepaticus (Schaeff.) Pers.", "Boletus buglossum Retz.", "Fistulina buglossum (Retz.) Pers.", "Buglossus quercinus Wahlenb.", "Fistulina buglossoides Bull.", "Boletus bulliardii J.F. Gmel.", "Boletus hepaticus Bull.", "Agarico-carnis lingua-bovis Paulet", "Fistulina sarcoides St.-Amans", "Ceriomyces hepaticus Sacc.", "Ptychogaster hepaticus Lloyd", "Confistulina hepatica (Lloyd) Stalpers"]
  };

  var NEOBOLETUS_MEDIA = "photos/Boletales/Boletaceae/Neoboletus_luridiformis/";
  var NEOBOLETUS = {
    id: 25,
    name: "Neoboletus luridiformis",
    author: "(Rostk.) Gelardi, Simonini & Vizzini",
    family: "Boletaceae",
    genus: "Neoboletus",
    order: "Boletales",
    edibility: "edible_with_caution",
    hymenium: "tubes",
    path: [
      "Fungi",
      "Dikarya",
      "Basidiomycota",
      "Agaricomycotina",
      "Agaricomycetes",
      "Agaricomycetidae",
      "Boletales",
      "Boletaceae",
      "Neoboletus"
    ],
    summary: ["Boletales", "Boletaceae", "Neoboletus"],
    added: "2026-10-23",
    plate: STORAGE + NEOBOLETUS_MEDIA + "Neoboletus_luridiformis@1600.webp",
    plateGrid: STORAGE + NEOBOLETUS_MEDIA + "Neoboletus_luridiformis@400.webp",
    plateCredit: {
      author: "Gemini",
      license: "not stated"
    },
    photos: [
      {
        src: STORAGE + NEOBOLETUS_MEDIA + "nl1.webp",
        author: "George Chernilevsky",
        license: "public domain",
        source: "https://commons.wikimedia.org/wiki/File:2012-07-12_Boletus_erythropus_crop.jpg"
      },
      {
        src: STORAGE + NEOBOLETUS_MEDIA + "nl2.webp",
        author: "Fishmonger 79",
        license: "CC BY 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Jeune_Bolet_a_pied_rouge.jpg"
      },
      {
        src: STORAGE + NEOBOLETUS_MEDIA + "nl3.webp",
        author: "Unterillertaler",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Flockenstieliger_Hexen-R%C3%B6hrling_(Boletus_erythropus).jpg"
      },
      {
        src: STORAGE + NEOBOLETUS_MEDIA + "nl4.webp",
        author: "George Chernilevsky",
        license: "public domain",
        source: "https://commons.wikimedia.org/wiki/File:2012-07-12_Boletus_erythropus_2_crop.jpg"
      },
      {
        src: STORAGE + NEOBOLETUS_MEDIA + "nl5.webp",
        author: "Andreas Kunze",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:2011-07-31_Boletus_erythropus_tubes.jpg"
      }
    ],
    capFrom: 5,
    capTo: 20,
    stipeHeightFrom: 4,
    stipeHeightTo: 15,
    stipeThickFrom: 2,
    stipeThickTo: 5,
    fruitingFrom: 5,
    fruitingTo: 11,
    label: {
      en: "scarletina bolete",
      sk: "hríb zrnitohlúbikový"
    },
    names: {
      en: ["red foot bolete", "dotted stemmed bolete", "dotted stem bolete"],
      sk: [
        "siniak",
        "sinál",
        "modrák",
        "svetlák",
        "svetláň",
        "belaskár",
        "belasniak",
        "nemec",
        "baniar",
        "banfk",
        "komprd",
        "karmazín",
        "harasník",
        "súkenák",
        "červené nohavice",
        "jedlák",
        "koniak",
        "počeč"
      ]
    },
    text: {
      en: {
        description: "An ectomycorrhizal mushroom of acid coniferous and beech woods. It is widespread in Europe, with further reports from the Caucasus, Asia Minor, the Near East, North America, and, as a form, North Africa. It is fairly common in Britain and Ireland, more so in the mountains and foothills than the lowlands.",
        cap: "The cap is 5–20 cm across, occasionally to 25 cm. It is hemispherical, then convex or cushion-shaped, and flatter in age. The surface is usually dark brown, bay, or chocolate brown, less often paler brown, olive-tinged, or coppery bronze, finely felty or velvety and matt when young, then bald, and briefly a little slimy in wet weather. Bruised places darken, sometimes almost to black. Paler caps occur, especially on fruit bodies that grow with oaks. The cap cuticle begins as a trichoderm of erect cylindrical to weakly club-shaped hyphal ends, 3–6 μm wide, which soon lie flat and become somewhat gelatinous.",
        hymenium: "The tubes are yellow to olive-yellow, up to about 3 cm long, notched or adnate at the stipe, and turn blue-green at once when cut. The pores are small, about 1 mm or less, yellow only when very young, then orange-red to deep blood red, and paler with an olive tint in age. Pressure turns them blue at once, and the blue marks later become black-brown. The basidia measure 25–40 × 9–13 μm, occasionally to 15 μm wide. The cystidia are flask-shaped to ventricose-fusiform, more scattered and larger on the pores, and up to about 50 μm long.",
        stipe: "The stipe is 4–15 cm long and 2–5 cm thick, often 7–15 × 2–4 cm in Britain and Ireland, and it has no ring and no raised net. It is ventricose when young, then cylindrical to club-shaped. The ground is yellow to brownish yellow, yellow at the apex, and covered with fine red dots or floccules, which may be yellowish near the top. On the paler fruit bodies that grow with oaks the dots are fine and sparse. The base is olive and slightly felty, with pale yellowish mycelium. Bruised places turn blue at once.",
        flesh: "The flesh is deep yellow to yolk yellow, sometimes slightly reddish in the stipe base, and firm, fibrous and tough in the base. Cut surfaces turn intense blue at once. Over several hours the blue fades to a dull yellow. The smell is faint and mushroomy, or not distinctive, and the taste is mild.",
        sporePrint: "Olive-brown to dark olive. The spores are fusiform to broadly ellipsoidal, about 12–18 × 4.5–6.5 μm, or 12–16 × 4.5–6 μm in British material.",
        habitat: "Fruit bodies appear from May into October or November, from June to November in Slovakia, and from August to October in Britain and Ireland. They grow singly or in groups on the ground, often at a wood edge, in a clearing, or among bilberries, on fresh acid soils under spruce and other conifers and less often under beech and oak. They are often found with Boletus edulis. Very dry, very wet, and strongly calcareous ground is avoided, and they are scarce where the soil is rich in nitrogen.",
        uses: "Thoroughly cooked, it is a very good edible mushroom and is commonly collected in several European countries, though some people are made ill by it. In some regions it is preferred to Boletus edulis. The blue colour fades on cooking. Raw or undercooked fruit bodies cause vomiting and diarrhoea, and for that reason drying is not recommended.",
        confusion: "Suillellus luridus has a red net on the stipe, a darker line where the tubes meet the cap flesh, and an orange-red to orange-yellow tube floor, and it prefers chalky soil. Suillellus queletii has a smoother, paler stipe with finer floccules, often a reddish cap, and purple-red flesh in the stipe base, and that basal flesh is amyloid. Suillellus mendax has both a net and dots, redder tones on the cap and stipe, and amyloid flesh in the stipe base. Rubroboletus satanas has a pale grey to chalky white cap, a bulbous stipe with a red net, and flesh that blues only moderately. Rubroboletus dupainii has a bright red cap. Rubroboletus lupinus has a smooth stipe. Rubroboletus pulcherrimus has a netted stipe and is larger. Imperator rhodopurpureus prefers neutral soil. Neoboletus junquilleus has a yellow cap. Neoboletus xanthopus is yellower on the cap and stipe, with smaller floccules and a tomentum at the stipe base, and it grows in warm oak woods.",
        notes: "The blueing comes from variegatic acid, which oxidises in air, and the red of the pores comes from variegatorubin. It was the edible mushroom of the year in Germany in 2018. In Slovakia it is often passed over because the red pores and the intense blueing put collectors off."},
      sk: {
        description: "Ektomykorízna huba kyslých ihličnatých a bukových lesov. V Európe je rozšírená a ďalšie údaje sa uvádzajú z Kaukazu, Malej Ázie, Blízkeho východu a Severnej Ameriky a ako forma aj zo severnej Afriky. V Británii a Írsku je pomerne hojná, viac v horách a podhorí než v nížinách.",
        cap: "Klobúk má 5–20 cm v priemere, výnimočne až 25 cm. Najprv je polguľovitý, potom klenutý alebo vankúšovitý a v starobe plochejší. Povrch býva zvyčajne tmavohnedý, gaštanovohnedý alebo čokoládovohnedý, zriedkavejšie bledšie hnedý, s olivovým nádychom alebo medenobronzový, za mladi jemne plstnatý alebo zamatový a matný, potom holý a za vlhka nakrátko trochu slizký. Otlačené miesta tmavnú, niekedy takmer dočierna. Bledšie klobúky bývajú najmä na plodniciach, ktoré rastú s dubmi. Pokožka klobúka je spočiatku trichoderm zo vzpriamených valcovitých až slabo kyjačkovitých koncov hýf, širokých 3–6 μm, ktoré sa čoskoro položia naplocho a trochu slizovatejú.",
        hymenium: "Rúrky sú žlté až olivovožlté, dlhé až asi 3 cm, pri hlúbiku vykrojené alebo prirastené a na reze hneď zelenomodrejú. Póry sú drobné, asi 1 mm alebo menšie, žlté iba vo veľmi mladom štádiu, potom oranžovočervené až sýto krvavočervené a v starobe bledšie, s olivovým nádychom. Po tlaku hneď zmodrejú a modré miesta neskôr sčernejú do čiernohneda. Bazídiá merajú 25–40 × 9–13 μm a výnimočne sú široké až 15 μm. Cystidy sú fľaškovité až bruchato vretenovité, na póroch redšie a väčšie, dlhé až asi 50 μm.",
        stipe: "Hlúbik je 4–15 cm dlhý a 2–5 cm hrubý, v Británii a Írsku často 7–15 × 2–4 cm, bez prsteňa a bez vystúpenej sieťky. Za mladi je bruchatý, potom valcovitý až kyjakovitý. Podklad je žltý až hnedastožltý, na vrchole žltý, a pokrývajú ho jemné červené bodky alebo vločky, ktoré môžu byť pri vrchole žltkasté. Na bledších plodniciach, ktoré rastú s dubmi, sú bodky jemné a riedke. Báza je olivová a slabo plstnatá, s bledožltkastým mycéliom. Otlačené miesta hneď zmodrejú.",
        flesh: "Dužina je sýtožltá až žĺtkovožltá, v báze hlúbika niekedy slabo červenkastá, pevná a v báze vláknitá a tuhá. Rezné plochy hneď intenzívne zmodrejú. Za niekoľko hodín modrá bledne do matnej žltej. Vôňa je slabá a hubová, alebo nenápadná, a chuť je mierna.",
        sporePrint: "Výtrusný prach je olivovohnedý až tmavoolivový. Výtrusy sú vretenovité až široko elipsoidné, asi 12–18 × 4,5–6,5 μm, v britskom materiáli 12–16 × 4,5–6 μm.",
        habitat: "Plodnice sa objavujú od mája do októbra alebo novembra, na Slovensku od júna do novembra a v Británii a Írsku od augusta do októbra. Rastú jednotlivo alebo v skupinách na zemi, často na okraji lesa, na čistinke alebo medzi čučoriedkami, na sviežich kyslých pôdach pod smrekom a inými ihličnanmi a zriedkavejšie pod bukom a dubom. Často rastú spolu s hríbom smrekovým (Boletus edulis). Veľmi suchej, veľmi mokrej a výrazne vápenatej pôde sa vyhýba a na pôde bohatej na dusík je vzácna.",
        uses: "Po dôkladnej tepelnej úprave je to veľmi chutná jedlá huba a v niekoľkých európskych krajinách sa bežne zbiera, hoci niektorým ľuďom po nej býva nevoľno. V niektorých krajoch ju uprednostňujú pred hríbom smrekovým (Boletus edulis). Pri varení modrá farba mizne. Surové alebo nedovarené plodnice spôsobujú vracanie a hnačku, a preto sa sušenie neodporúča.",
        confusion: "Hríb siný (Suillellus luridus) má na hlúbiku červenú sieťku, tmavšiu čiaru na styku rúrok s dužinou klobúka a oranžovočervené až oranžovožlté dno rúrok a uprednostňuje kriedovú pôdu. Hríb Quéletov (Suillellus queletii) má hladší a bledší hlúbik s jemnejšími vločkami, často červenkastý klobúk a v báze hlúbika purpurovočervenú dužinu, ktorá je amyloidná. Suillellus mendax má aj sieťku, aj bodky, červenšie odtiene na klobúku aj hlúbiku a amyloidnú dužinu v báze hlúbika. Hríb satanský (Rubroboletus satanas) má bledosivý až kriedovobiely klobúk, hľuzovitý hlúbik s červenou sieťkou a dužinu, ktorá modrie len mierne. Hríb Dupainov (Rubroboletus dupainii) má žiarivo červený klobúk. Hríb vlčí (Rubroboletus lupinus) má hladký hlúbik. Rubroboletus pulcherrimus má sieťkovaný hlúbik a je väčší. Hríb vínovočervený (Imperator rhodopurpureus) uprednostňuje neutrálnu pôdu. Hríb žltý (Neoboletus junquilleus) má žltý klobúk. Hríb zrnitohlúbikový odfarbený (Neoboletus xanthopus) je na klobúku aj hlúbiku žltší, s menšími vločkami a s plsťou na báze hlúbika, a rastie v teplých dubových lesoch.",
        notes: "Modranie spôsobuje kyselina variegátová, ktorá sa na vzduchu oxiduje, a červenú farbu pórov variegatorubín. V Nemecku bola v roku 2018 jedlou hubou roka. Na Slovensku ju zberatelia často obchádzajú, lebo ich odrádzajú červené póry a intenzívne modranie."}
    },
    sources: {
      en: [
        {
          group: "text",
          name: "First Nature",
          href: "https://www.first-nature.com/fungi/neoboletus-luridiformis.php"
        },
        {
          group: "text",
          name: "Wikipedia",
          href: "https://en.wikipedia.org/wiki/Neoboletus_luridiformis"
        },
        {
          group: "text",
          name: "Wikipedia",
          href: "https://de.wikipedia.org/wiki/Flockenstieliger_Hexen-R%C3%B6hrling"
        },
        {
          group: "text",
          name: "nahuby.sk",
          href: "https://www.nahuby.sk/atlas-hub/Neoboletus-luridiformis/hrib-zrnitohlubikovy/hrib-kovar/ID145",
          detail: "hríb zrnitohlúbikový"
        },
        {
          group: "text",
          name: "nahuby.sk",
          href: "https://www.nahuby.sk/clanok.php?clanok_id=32"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=550771",
          detail: "550771"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Publications/Index%20Fungorum%20no.192.pdf",
          detail: "192"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=550771",
          detail: "550771"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=550771",
          detail: "550771"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=246588",
          detail: "246588"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/550771"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/8208185",
          detail: "8208185"
        }
      ],
      sk: [
        {
          group: "text",
          name: "nahuby.sk",
          href: "https://www.nahuby.sk/atlas-hub/Neoboletus-luridiformis/hrib-zrnitohlubikovy/hrib-kovar/ID145",
          detail: "hríb zrnitohlúbikový"
        }
      ]
    },
    synonyms: [
      "Boletus luridiformis Rostk.",
      "Suillus luridiformis (Rostk.) Kuntze",
      "Sutorius luridiformis (Rostk.) G. Wu & Zhu L. Yang",
      "Dictyopus discolor Quél.",
      "Boletus discolor (Quél.) Costantin & L.M. Dufour"
    ]
  };

  var CALOCYBE_MEDIA = "photos/Agaricales/Lyophyllaceae/Calocybe_gambosa/";
  var CALOCYBE = {
    id: 26,
    name: "Calocybe gambosa",
    author: "(Fr.) Donk",
    family: "Lyophyllaceae",
    genus: "Calocybe",
    order: "Agaricales",
    edibility: "choice",
    hymenium: "gills",
    path: ["Fungi", "Dikarya", "Basidiomycota", "Agaricomycotina", "Agaricomycetes", "Agaricomycetidae", "Agaricales", "Lyophyllaceae", "Calocybe"],
    summary: ["Agaricales", "Lyophyllaceae", "Calocybe"],
    added: "2026-10-23",
    plate: STORAGE + CALOCYBE_MEDIA + "Calocybe_gambosa@1600.webp",
    plateGrid: STORAGE + CALOCYBE_MEDIA + "Calocybe_gambosa@400.webp",
    plateCredit: {
      author: "L. Dufour",
      license: "public domain",
      source: "https://www.biodiversitylibrary.org/page/3270645"
    },
    photos: [
      {
        src: STORAGE + CALOCYBE_MEDIA + "cg1.webp",
        author: "Dr. Hans-Günter Wagner",
        license: "CC BY-SA 2.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
        source: "https://commons.wikimedia.org/wiki/File:Calocybe_gambosa_(36064595975).jpg"
      },
      {
        src: STORAGE + CALOCYBE_MEDIA + "cg2.webp",
        author: "Strobilomyces",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Calocybe_gambosa_080420wa.jpg"
      },
      {
        src: STORAGE + CALOCYBE_MEDIA + "cg3.webp",
        author: "Andreas Kunze",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:2010-05-27_Calocybe_gambosa.jpg"
      },
      {
        src: STORAGE + CALOCYBE_MEDIA + "cg4.webp",
        author: "Harlekin96",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Calocybe_gambosa_1.jpg"
      },
      {
        src: STORAGE + CALOCYBE_MEDIA + "cg5.webp",
        author: "Wilma Harper",
        license: "CC BY 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Calocybe_gambosa_133593349.jpg"
      }
    ],
    capFrom: 4,
    capTo: 15,
    stipeHeightFrom: 3,
    stipeHeightTo: 9,
    stipeThickFrom: 1,
    stipeThickTo: 4,
    fruitingFrom: 4,
    fruitingTo: 6,
    label: { en: "St. George's mushroom", sk: "čírovnica májová" },
    names: { sk: ["čírovka májová", "májovka"] },
    text: {
      en: {
        description: "A fleshy saprobic mushroom of calcareous grassland, meadows, orchards, and grassy woodland edges, often in rings. It is widespread in Europe, plentiful in some districts and missing from others, and reported from North America. The fruit bodies are among the first large mushrooms of spring.",
        cap: "The cap is 4–15 cm across, most often about 5–12 cm. It is hemispherical, bell-shaped, or conical at first, with a long-inrolled margin, and later convex to flat, often staying domed, wavy, or misshapen. The surface is smooth, matte, and silky, and bare. It is whitish to cream or beige, sometimes flushed light brown or grey-brown, and often becomes ochre-yellow, tan, or yellowish brown with age. Yellow caps occur as well.",
        hymenium: "The gills are very crowded and thin, about 5–9 mm broad, with a wavy or crenulate edge. They are sinuate to adnate, often attached by a small tooth, and sometimes drawn down in a short line. They are whitish to cream, later pale ochre or greyish, and they do not turn pink. The basidia are narrowly clavate to cylindrical with a widened apex, 15–20 × 4–6 μm, usually four-spored and rarely two-spored, with siderophilous granules and a basal clamp. Cystidia are absent.",
        stipe: "The stipe is 3–9 cm tall and 1–4 cm thick, more or less cylindrical, and often curved. Young stipes are sometimes ventricose, and the base may stay slightly swollen or, less often, taper. It is solid at first and later sometimes stuffed, whitish to cream, often pale ochre below, and smooth to longitudinally fibrous. There is no ring.",
        flesh: "The flesh is thick, firm, a little spongy, and white, and it does not change colour when cut. The smell is strong and mealy, like fresh flour, cucumber, or wet plaster. The taste is pleasant and floury when raw. Cooking removes most of that mealy smell and taste.",
        sporePrint: "White to whitish cream. The spores are ovoid to ellipsoidal, smooth, hyaline, and thin-walled, and inamyloid, 4–7 × 2.3–4.5 μm.",
        habitat: "The main fruiting is from April to June. In the Mediterranean the mushrooms can appear in March, while in Scandinavia and in high mountains they continue through June and July, and a thinner crop is recorded in October and November. They come up singly, in groups, or in fairy rings that persist for many years, in meadows, pastures, orchards, gardens, and roadside verges, in scrub of hawthorn, blackthorn, and roses, and along deciduous woodland edges under hazel, beech, oak, or birch, sometimes near spruce. The soil is usually rich and calcareous, though fruit bodies occur on moderately acid ground as well. The fungus decomposes grassland litter. Some accounts treat it as mycorrhizal.",
        uses: "It is a choice edible mushroom, cooked in omelettes, risotto, soups, and sauces, or dried, pickled, or otherwise preserved. It is reputed to be edible raw, and it is usually cooked. Young fruit bodies are preferred, because older ones are often tunnelled by fly larvae. Fruit bodies from busy roadsides can hold pollutants from traffic. In the Basque Country it is a spring delicacy, and commercial quantities are imported from Romania, Hungary, Turkey, and eastern Europe. In central Italy it has been prized since the sixteenth century.",
        confusion: "Inosperma erubescens grows in the same spring places, including parks and deciduous woods. Its gills are pale pink rather than white, adnexed, and they redden when bruised, and the fruit body smells pungent and fruity rather than mealy. Entoloma sinuatum has less crowded gills that become salmon-pink to flesh-red, and a flesh-pink spore print. One account calls its smell rancid, while others say the flesh can smell and taste mealy, so the pink gills and spore print are the separation to trust. It fruits from May into autumn in open deciduous woods, and the two species can grow together at a woodland edge. Clitopilus prunulus smells mealy as well, but its gills are decurrent and it fruits later in the year. Tricholomella constricta fruits in autumn on nitrogen-rich soil and has a rooting stipe and a ring.",
        notes: "A 2019 assessment lists it as Least Concern."},
      sk: {
        description: "Mäsitá saprotrofná huba vápnitých trávnikov, lúk, ovocných sadov a trávnatých okrajov lesov, často v kruhoch. V Európe je rozšírená, v niektorých krajoch hojná a v iných chýba, a udáva sa aj zo Severnej Ameriky. Plodnice patria medzi prvé veľké huby jari.",
        cap: "Klobúk má v priemere 4–15 cm, najčastejšie asi 5–12 cm. Za mladi je polguľovitý, zvoncovitý alebo kužeľovitý, s dlho podvinutým okrajom, neskôr klenutý až plochý a často ostáva klenutý, zvlnený alebo pokrivený. Povrch je hladký, matný, hodvábny a holý. Sfarbenie je belavé až krémové alebo béžové, niekedy s nádychom svetlohnedej alebo sivohnedej, a v starobe často okrovožlté, plavé alebo žltohnedé. Vyskytujú sa aj žlté klobúky.",
        hymenium: "Lupene sú veľmi husté a tenké, asi 5–9 mm široké, so zvlneným alebo vrúbkovaným ostrím. Sú vykrojené až prirastené, často zúbkom prirastené a niekedy krátko zbiehavé. Sú belavé až krémové, neskôr bledookrové alebo sivasté, a neružovejú. Bazídiá sú úzko kyjačkovité až valcovité s rozšíreným vrcholom, veľké 15–20 × 4–6 μm, zvyčajne štvorvýtrusové a zriedka dvojvýtrusové, so siderofilnými granulami a s bazálnou svorkou. Cystidy chýbajú.",
        stipe: "Hlúbik je 3–9 cm vysoký a 1–4 cm hrubý, viac-menej valcovitý a často prehnutý. Mladé hlúbiky bývajú niekedy bruchaté a báza môže ostať mierne zhrubnutá, zriedkavejšie sa zužuje. Najprv je plný a neskôr niekedy vatovito vyplnený, belavý až krémový, naspodku často bledookrový, hladký až pozdĺžne vláknitý. Prsteň chýba.",
        flesh: "Dužina je hrubá, pevná, trochu špongiovitá a biela a na reze nemení farbu. Vôňa je silná a múčna, ako čerstvá múka, uhorka alebo mokrá omietka. Chuť za surova je príjemná a múčna. Varenie väčšinu tej múčnej vône a chuti odstráni.",
        sporePrint: "Výtrusný prach je biely až belavokrémový. Výtrusy sú vajcovité až elipsoidné, hladké, hyalínne, tenkostenné a neamyloidné, veľké 4–7 × 2,3–4,5 μm.",
        habitat: "Hlavné obdobie plodenia je od apríla do júna. V Stredomorí sa plodnice môžu objaviť už v marci, kým v Škandinávii a vo vysokých horách pokračujú aj v júni a júli a slabšia úroda sa objavuje v októbri a novembri. Vyrastajú jednotlivo, v skupinách alebo v čarovných kruhoch, ktoré pretrvávajú mnoho rokov, na lúkach, pasienkoch, v sadoch, záhradách a na okrajoch ciest, v krovinách hlohu, trnky a ruží a pozdĺž okrajov listnatých lesov pod lieskou, bukom, dubom alebo brezou, niekedy pri smreku. Pôda býva zvyčajne bohatá a vápnitá, plodnice však rastú aj na mierne kyslom podklade. Huba rozkladá opad trávnikov. Niektoré výklady ju pokladajú za mykoríznu.",
        uses: "Je to výborná jedlá huba. Varí sa v omeletách, rizote, polievkach a omáčkach, suší sa, nakladá alebo inak konzervuje. Traduje sa, že je jedlá aj surová, zvyčajne sa však tepelne upravuje. Uprednostňujú sa mladé plodnice, lebo staršie bývajú často prevŕtané larvami múch. Plodnice z frekventovaných ciest môžu obsahovať znečistenie z dopravy. V Baskicku je jarnou lahôdkou a obchodné množstvá sa dovážajú z Rumunska, Maďarska, Turecka a z východnej Európy. V strednom Taliansku si ju cenia od 16. storočia.",
        confusion: "Vláknica Patouillardova (Inosperma erubescens) rastie na tých istých jarných miestach, aj v parkoch a listnatých lesoch. Je prudko jedovatá. Lupene má bledoružové, nie biele, úzko prirastené a po otlačení červenejú a plodnica vonia ostro a ovocne, nie múčne. Hodvábnica veľká (Entoloma sinuatum) je prudko jedovatá. Má redšie lupene, ktoré sa sfarbujú do lososovoružova až mäsovočervena, a mäsovoružový výtrusný prach. Jeden výklad označuje jej vôňu za žluknutú, iné uvádzajú, že dužina môže voňať aj chutiť múčne, a preto sa treba spoľahnúť na ružové lupene a výtrusný prach. Plodí od mája do jesene vo svetlých listnatých lesoch a na okraji lesa môžu obe huby rásť spolu. Machovka obyčajná (Clitopilus prunulus) je jedlá a vonia tiež múčne, lupene má však zbiehavé a plodí neskôr v roku. Čírovnica opásaná (Tricholomella constricta) plodí na jeseň na pôde bohatej na dusík, má koreňujúci hlúbik a prsteň.",
        notes: "Hodnotenie z roku 2019 ho zaraďuje medzi málo dotknuté druhy (Least Concern). Na Slovensku je miestami hojný a inde celkom chýba; v Belianskych Tatrách plodí až v júni a júli."}
    },
    sources: {
      en: [
        { group: "text", name: "First Nature", href: "https://www.first-nature.com/fungi/calocybe-gambosa.php" },
        { group: "text", name: "Wikipedia", href: "https://en.wikipedia.org/wiki/Calocybe_gambosa" },
        { group: "text", name: "IUCN", href: "https://www.iucnredlist.org/species/122090261/222965313" },
        { group: "text", name: "Fungipedia", href: "https://www.fungipedia.org/en/hongos/calocybe-gambosa.html" },
        { group: "text", name: "Fungipedia", href: "https://www.fungipedia.org/en/microscopias/josep/calocybe-gambosa", detail: "microscopy" },
        { group: "text", name: "MycoDB", href: "https://www.mycodb.fr/fiche.php?genre=Calocybe&espece=gambosa" },
        { group: "text", name: "Wikipedia", href: "https://sk.wikipedia.org/wiki/%C4%8C%C3%ADrovnica_m%C3%A1jov%C3%A1", detail: "Slovak" },
        { group: "text", name: "nahuby.sk", href: "https://www.nahuby.sk/atlas-hub/Calocybe-gambosa/cirovnica-majova/ciruvka-majovka/ID57", detail: "čírovnica májová" },
        { group: "text", name: "nahuby.sk", href: "https://www.nahuby.sk/atlas_hub_dvojniky_detail.php?dvojniky_id=14", detail: "dvojníky" },
        { group: "text", name: "myko.cz", href: "https://www.myko.cz/myko-atlas/Calocybe-gambosa/" },
        { group: "text", name: "mycology.su", href: "https://mycology.su/calocybe-gambosa.html" },
        { group: "text", name: "grzyby.pl", href: "https://grzyby.pl/gatunki/Calocybe_gambosa.htm" },
        { group: "text", name: "BioImages", href: "https://www.bioimages.org.uk/html/Calocybe_gambosa.htm" },
        { group: "name", name: "Index Fungorum", href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=293917", detail: "293917" },
        { group: "name", name: "Species Fungorum", href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=293917", detail: "293917" },
        { group: "name", name: "Index Fungorum", href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=17220", detail: "17220" },
        { group: "name", name: "MycoBank", href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/293917" },
        { group: "name", name: "GBIF", href: "https://www.gbif.org/species/8936224", detail: "8936224" }
      ],
      sk: [
        { group: "text", name: "Wikipedia", href: "https://sk.wikipedia.org/wiki/%C4%8C%C3%ADrovnica_m%C3%A1jov%C3%A1", detail: "čírovnica májová" },
        { group: "text", name: "nahuby.sk", href: "https://www.nahuby.sk/atlas-hub/Calocybe-gambosa/cirovnica-majova/ciruvka-majovka/ID57", detail: "čírovnica májová" }
      ]
    },
    synonyms: [
      "Agaricus gambosus Fr.",
      "Tricholoma gambosum (Fr.) P. Kumm.",
      "Lyophyllum gambosum (Fr.) Singer",
      "Agaricus georgii L.",
      "Amanita georgii (L.) Roussel",
      "Tricholoma georgii (L.) Quél.",
      "Gyrophila georgii (L.) Quél.",
      "Calocybe georgii (L.) Kühner ex Kalamees",
      "Tricholoma palumbinum (Paulet) Quél.",
      "Gyrophila palumbina (Paulet) Quél.",
      "Agaricus georgii Sowerby",
      "Agaricus albellus DC.",
      "Agaricus aromaticus Roques"
    ]
  };

  var INOSPERMA_MEDIA = "photos/Agaricales/Inocybaceae/Inosperma_erubescens/";
  var INOSPERMA = {
    id: 27,
    name: "Inosperma erubescens",
    author: "(A. Blytt) Matheny & Esteve-Rav.",
    family: "Inocybaceae",
    genus: "Inosperma",
    order: "Agaricales",
    edibility: "deadly",
    hymenium: "gills",
    path: ["Fungi", "Dikarya", "Basidiomycota", "Agaricomycotina", "Agaricomycetes", "Agaricomycetidae", "Agaricales", "Inocybaceae", "Inosperma"],
    summary: ["Agaricales", "Inocybaceae", "Inosperma"],
    added: "2026-10-23",
    plate: STORAGE + INOSPERMA_MEDIA + "Inosperma_erubescens@1600.webp",
    plateGrid: STORAGE + INOSPERMA_MEDIA + "Inosperma_erubescens@400.webp",
    plateCredit: {
      author: "Giacomo Bresadola",
      license: "public domain",
      source: "https://commons.wikimedia.org/wiki/File:Bresadola_-_Inocybe_Patouillardi.png"
    },
    photos: [
      {
        src: STORAGE + INOSPERMA_MEDIA + "ie1.webp",
        author: "Andreas Kunze",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:2010-05-27_Inocybe_erubescens.jpg"
      },
      {
        src: STORAGE + INOSPERMA_MEDIA + "ie2.webp",
        author: "Andreas Kunze",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:2010-04-27_Inocybe_erubescens.jpg"
      },
      {
        src: STORAGE + INOSPERMA_MEDIA + "ie3.webp",
        author: "Tatiana Bulyonkova",
        license: "CC BY-SA 2.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
        source: "https://commons.wikimedia.org/wiki/File:Inocybe_erubescens_(19417855088).jpg"
      },
      {
        src: STORAGE + INOSPERMA_MEDIA + "ie4.webp",
        author: "Jose Castro",
        license: "CC BY 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Inosperma_erubescens_702228227.jpg"
      },
      {
        src: STORAGE + INOSPERMA_MEDIA + "ie5.webp",
        author: "Jerzy Opioła",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Inocybe_erubescens_MS4_(1).jpg"
      }
    ],
    capFrom: 2.5,
    capTo: 12,
    stipeHeightFrom: 2.5,
    stipeHeightTo: 12,
    stipeThickFrom: 0.4,
    stipeThickTo: 2,
    fruitingFrom: 5,
    fruitingTo: 9,
    label: { en: "deadly fibrecap", sk: "vláknica Patouillardova" },
    names: { en: ["red-staining Inocybe", "red-staining fibrecap", "brick-red tear mushroom"] },
    text: {
      en: {
        description: "An ectomycorrhizal mushroom of calcareous deciduous woods, parks, and grassy places, usually with beech, oak, lime, or hornbeam. It is widespread in Europe, recorded from eastern Anatolia, and in Israel under oak and pine. In western Siberia it fruits on lawns and in planted broadleaf shade.",
        cap: "The cap is 2.5–9 cm across, and some fruit bodies reach 12 cm. It is conical or bell-shaped at first, with an inrolled margin, and later convex to flat, usually keeping a broad umbo. The margin often turns up and splits radially. The surface is dry and silky, with fine radial fibres rather than scales, though a cracked margin can break into patches, and it is slightly sticky in wet weather. Young caps are white to cream or pale ochre. They become straw-coloured to ochre and then brick-red or cinnabar, with red stains where the surface is bruised or split.",
        hymenium: "The gills are crowded, up to about 8 mm broad, with a whitish, flocculose, uneven edge. They are notched to adnexed or adnate, and sometimes almost free. They are whitish to pale ochre at first, later pinkish, grey-brown, or olivaceous brown, and finally reddish brown, often with reddish spots, and they redden where bruised. The basidia are clavate, 31–50 × 10–15 μm, mostly four-spored, with a few two-spored. The cheilocystidia are thin-walled, cylindrical to narrowly clavate, without a crystal cap, and colourless or filled with red-brown contents, about 25–70 × 8–20 μm. Pleurocystidia are absent. A very young fruit body may still show a fleeting cortina.",
        stipe: "The stipe is 2.5–12 cm tall and 0.4–2 cm thick, cylindrical, and often a little swollen or club-shaped at the base, which may carry a mass of soil. It is solid when young. The surface is longitudinally fibrillose, and the apex is pruinose to minutely flocculose, with caulocystidia like the cheilocystidia only near the top. It is whitish to pale ochre at first and then stains orange-red to brick-red, usually from the base upward, while staying paler than an old cap. There is no ring.",
        flesh: "The flesh is white in the cap and whitish to pale pink in the stipe. Bruised surfaces redden strongly. Cut flesh reddens slowly and only in places in some collections, and in others it hardly changes. Young fruit bodies are often faintly fruity, sweet, soapy, or reminiscent of beetroot. Older ones turn unpleasant, and some collections smell spermatic or musty and herbaceous. The smell is not mealy. The taste is described as mild.",
        sporePrint: "Ochre-brown to dull brown, sometimes with an olive tint. The spores are smooth, ellipsoid to bean-shaped, and sometimes irregular, 9–15 × 5–8 μm, most often about 10–14.5 × 5.5–7.5 μm.",
        habitat: "Fruit bodies appear from May to September, most often in June. In western Siberia the season continues into October. They grow singly or in small groups on soil and leaf litter, usually on alkaline or neutral ground, under beech, oak, lime, and hornbeam, and also in mixed woods, along paths, in parks, and on shaded lawns under planted broadleaf trees. A few records are with birch or conifers.",
        uses: "It is deadly poisonous. The fruit bodies contain a large amount of muscarine. Illness can begin within fifteen minutes to two hours, with nausea, a cold sweat, heavy salivation and tears, vomiting, painful diarrhoea, and cramps, then a disturbed heartbeat, laboured breathing, weakness, and blurred vision, while the person stays conscious. A published fatal quantity is about 40–50 g fresh, and a death was recorded in Surrey in 1937.",
        confusion: "Calocybe gambosa fruits in the same spring places. Its gills stay whitish to cream and do not redden, the cap is not radially fibrillose, and the flesh smells strongly of flour. Inocybe godeyi is smaller, smells of fruit, and has a marginate bulb at the stipe base. Inosperma bongardii also reddens where bruised, but the cap is coarsely fibrillose to scaly and the smell is sharp and chemical. Inocybe pyriodora reddens slowly and has thick-walled pleurocystidia and a heavy sweet smell. Other pale species in the group are smaller and do not redden with age or where bruised. In Israel it has been confused with Tricholoma terreum, which grows in the same habitat and does not stain red. It has also been mistaken for Agaricus species and for Cortinarius caperatus. This mushroom has no ring, and its gills redden where bruised.",},
      sk: {
        description: "Ektomykorízna huba vápnitých listnatých lesov, parkov a trávnatých miest, zvyčajne pri buku, dube, lipe alebo hrabe. Je rozšírená v Európe, zaznamenaná z východnej Anatólie a v Izraeli pod dubom a borovicou. Na západnej Sibíri plodí na trávnikoch a v tieni vysadených listnáčov.",
        cap: "Klobúk má naprieč 2,5–9 cm a niektoré plodnice dosiahnu 12 cm. Za mladi je kužeľovitý alebo zvoncovitý, s podvinutým okrajom, neskôr klenutý až plochý a zvyčajne si ponecháva široký hrboľ. Okraj sa často vyhrnie a lúčovito rozpuká. Povrch je suchý a hodvábny, s jemnými lúčovitými vláknami, nie so šupinami, hoci rozpukaný okraj sa môže rozpadnúť na políčka, a za vlhka je mierne lepkavý. Mladé klobúky sú biele až krémové alebo svetlookrové. Neskôr sú slamovožlté až okrové a potom tehlovočervené alebo rumelkové, s červenými škvrnami na otlačených alebo rozpukaných miestach.",
        hymenium: "Lupene sú husté, široké až asi 8 mm, s belavým, vločkatým a nerovným ostrím. Sú vykrojené, úzko prirastené alebo prirastené a niekedy takmer voľné. Najprv sú belavé až svetlookrové, neskôr ružovkasté, sivohnedé alebo olivovohnedé a napokon červenohnedé, často s červenkastými škvrnami, a po otlačení červenajú. Bazídiá sú kyjakovité, 31–50 × 10–15 μm, väčšinou štvorvýtrusné a zriedkavo dvojvýtrusné. Cheilocystidy sú tenkostenné, valcovité až úzko kyjakovité, bez kryštálovej čiapočky, bezfarebné alebo s červenohnedým obsahom, asi 25–70 × 8–20 μm. Pleurocystidy chýbajú. Veľmi mladá plodnica môže mať ešte pominuteľnú pavučinku (kortinu).",
        stipe: "Hlúbik je 2,5–12 cm vysoký a 0,4–2 cm hrubý, valcovitý a na báze často trocha zhrubnutý alebo kyjakovitý, niekedy s hrudou pôdy. Za mladi je plný. Povrch je pozdĺžne vláknitý a vrchol je oinovatený až jemne vločkatý, s kaulocystidami podobnými cheilocystidám len pri vrchole. Najprv je belavý až svetlookrový a potom sa sfarbuje na oranžovočerveno až tehlovočerveno, zvyčajne od bázy nahor, a ostáva bledší než starý klobúk. Prsteň nemá.",
        flesh: "Dužina je v klobúku biela a v hlúbiku belavá až svetloružová. Otlačený povrch silno červenie. Rozrezaná dužina v niektorých zberoch červenie pomaly a len miestami, v iných sa takmer nemení. Mladé plodnice často slabo voňajú ovocím, sladko, mydlom alebo cviklou. Staršie sú nepríjemné a niektoré zbery majú spermatickú alebo zatuchnutú bylinnú vôňu. Vôňa nie je múčna. Chuť sa opisuje ako mierna.",
        sporePrint: "Okrovohnedý až matne hnedý, niekedy s olivovým odtieňom. Výtrusy sú hladké, elipsoidné až fazuľovité a niekedy nepravidelné, 9–15 × 5–8 μm, najčastejšie asi 10–14,5 × 5,5–7,5 μm.",
        habitat: "Plodnice sa objavujú od mája do septembra, najčastejšie v júni. Na západnej Sibíri sezóna pokračuje do októbra. Rastú jednotlivo alebo v malých skupinách na pôde a v opadanke, zvyčajne na zásaditom alebo neutrálnom podklade, pod bukom, dubom, lipou a hrabom, a tiež v zmiešaných lesoch, pri cestách, v parkoch a na zatienených trávnikoch pod vysadenými listnáčmi. Niekoľko záznamov je pri breze alebo pri ihličnanoch.",
        uses: "Je smrteľne jedovatá. Plodnice obsahujú veľké množstvo muskarínu. Ochorenie môže začať do pätnástich minút až dvoch hodín nevoľnosťou, studeným potom, silným slinením a slzením, zvracaním, bolestivou hnačkou a kŕčmi, potom poruchou srdcovej činnosti, sťaženým dýchaním, slabosťou a zahmleným videním, pričom človek ostáva pri vedomí. Uverejnené smrteľné množstvo je asi 40–50 g v čerstvom stave a úmrtie bolo zaznamenané v Surrey v roku 1937.",
        confusion: "Čírovnica májová (Calocybe gambosa) plodí na tých istých jarných miestach. Jej lupene ostávajú belavé až krémové a nečervenajú, klobúk nie je lúčovito vláknitý a dužina silno vonia po múke. Vláknica Godeyova (Inocybe godeyi) je menšia, vonia ovocím a na báze hlúbika má obrúbenú hľuzu. Inosperma bongardii po otlačení tiež červenie, ale klobúk je hrubo vláknitý až šupinatý a vôňa je ostrá a chemická. Inocybe pyriodora červenie pomaly, má hrubostenné pleurocystidy a ťažkú sladkú vôňu. Iné bledé druhy tejto skupiny sú menšie a s vekom ani po otlačení nečervenajú. V Izraeli bola zamenená s čírovkou zemnou (Tricholoma terreum), ktorá rastie na tom istom stanovišti a nečervenie. Zamieňala sa aj s druhmi pečiarky (Agaricus) a s pavučinovcom inovaťovým (Cortinarius caperatus). Táto huba nemá prsteň a jej lupene po otlačení červenajú.",
        notes: "Na Slovensku je táto huba menej rozšírená, v niektorých rokoch častejšia a hojnejšia v teplejších oblastiach."}
    },
    sources: {
      en: [
        { group: "text", name: "Wikipedia", href: "https://en.wikipedia.org/wiki/Inosperma_erubescens" },
        { group: "text", name: "First Nature", href: "https://www.first-nature.com/fungi/inocybe-erubescens.php" },
        { group: "text", name: "Wikipedia", href: "https://sk.wikipedia.org/wiki/Vl%C3%A1knica_Patouillardova", detail: "Slovak" },
        { group: "text", name: "nahuby.sk", href: "https://www.nahuby.sk/atlas-hub/Inosperma-erubescens/vlaknica-Patouillardova/vlaknice-zacervenala--Patouillardova-/ID796", detail: "vláknica Patouillardova" },
        { group: "text", name: "mycology.su", href: "https://mycology.su/inosperma-erubescens.html" },
        { group: "text", name: "grzyby.pl", href: "https://www.grzyby.pl/gatunki/Inocybe_erubescens.htm" },
        { group: "text", name: "grzyby-pk.pl", href: "https://grzyby-pk.pl/gatunki/i/inocybe-erubescens.html" },
        { group: "text", name: "botany.cz", href: "https://botany.cz/cs/inocybe-erubescens/" },
        { group: "text", name: "Funga Nordica", href: "https://www.mykoweb.com/CAF/PDF/FungaNordica/FungaNordica-Inocybe.pdf" },
        { group: "name", name: "Index Fungorum", href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=830361", detail: "830361" },
        { group: "name", name: "Species Fungorum", href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=830361", detail: "830361" },
        { group: "name", name: "Index Fungorum", href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=830339", detail: "830339" },
        { group: "name", name: "MycoBank", href: "https://www.mycobank.org/page/Name%20details%20page/573045" },
        { group: "name", name: "GBIF", href: "https://www.gbif.org/species/10776858", detail: "10776858" }
      ],
      sk: [
        { group: "text", name: "Wikipedia", href: "https://sk.wikipedia.org/wiki/Vl%C3%A1knica_Patouillardova", detail: "vláknica Patouillardova" },
        { group: "text", name: "nahuby.sk", href: "https://www.nahuby.sk/atlas-hub/Inosperma-erubescens/vlaknica-Patouillardova/vlaknice-zacervenala--Patouillardova-/ID796", detail: "vláknica Patouillardova" },
        { group: "text", name: "botany.cz", href: "https://botany.cz/cs/inocybe-erubescens/" }
      ]
    },
    synonyms: [
      "Inocybe erubescens A. Blytt",
      "Inocybe patouillardii Bres."
    ]
  };

  var HYDNUM_MEDIA = "photos/Cantharellales/Hydnaceae/Hydnum_repandum/";
  var HYDNUM = {
    id: 28,
    name: "Hydnum repandum",
    author: "L.",
    family: "Hydnaceae",
    genus: "Hydnum",
    order: "Cantharellales",
    edibility: "choice",
    hymenium: "teeth",
    path: ["Fungi", "Dikarya", "Basidiomycota", "Agaricomycotina", "Agaricomycetes", "Cantharellales", "Hydnaceae", "Hydnum"],
    summary: ["Cantharellales", "Hydnaceae", "Hydnum"],
    added: "2026-10-23",
    plate: STORAGE + HYDNUM_MEDIA + "Hydnum_repandum@1600.webp",
    plateGrid: STORAGE + HYDNUM_MEDIA + "Hydnum_repandum@400.webp",
    plateCredit: {
      author: "L. Dufour",
      license: "public domain",
      source: "https://www.biodiversitylibrary.org/page/3270722"
    },
    photos: [
      {
        src: STORAGE + HYDNUM_MEDIA + "hr1.webp",
        author: "Alan Rockefeller",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:2012-08-29_Hydnum_repandum_L_256175.jpg"
      },
      {
        src: STORAGE + HYDNUM_MEDIA + "hr2.webp",
        author: "Jerzy Opioła",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Hydnum_repandum_G6.jpg"
      },
      {
        src: STORAGE + HYDNUM_MEDIA + "hr3.webp",
        author: "Lukas",
        license: "CC BY-SA 2.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
        source: "https://commons.wikimedia.org/wiki/File:Hydnum_repandum_(30096528225).jpg"
      },
      {
        src: STORAGE + HYDNUM_MEDIA + "hr4.webp",
        author: "Megalogena",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Hydnum_repandum_10.jpg"
      },
      {
        src: STORAGE + HYDNUM_MEDIA + "hr5.webp",
        author: "Archenzo",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:HydnumRepandum.JPG"
      }
    ],
    capFrom: 3,
    capTo: 15,
    stipeHeightFrom: 2,
    stipeHeightTo: 10,
    stipeThickFrom: 0.5,
    stipeThickTo: 3,
    fruitingFrom: 7,
    fruitingTo: 12,
    label: { en: "wood hedgehog", sk: "jelenka poprehýbaná" },
    names: { en: ["hedgehog mushroom", "hedgehog fungus", "sweet tooth"], sk: ["bláznivé kuriatko", "pochabé kuriatko", "biely vlkolak žltý srniak"] },
    text: {
      en: {
        description: "An ectomycorrhizal mushroom. It is widespread and common in Europe, in both coniferous and deciduous woodland. A 2018 revision verifies records from Europe. Fungi from North America and eastern Asia once placed under this name are other species. Older accounts extend it across the temperate northern hemisphere.",
        cap: "The cap is 3–15 cm across. It is convex at first, then plane, wavy, or lobed, and sometimes depressed. The margin is rolled inward when young, and crowded caps become misshapen. The surface is dry and smooth to finely felted. It is cream, yellow, or orange-ochre, usually paler toward the margin, and it can fade nearly white. Bruising and age bring ochre to orange-brown.",
        hymenium: "Crowded soft spines, 2–7 mm long, cover the underside. They are brittle, usually decurrent, and sometimes only shortly decurrent. They are whitish to cream at first, then cap-coloured or pale orange, and they break off when touched. The basidia are clavate, 35–50 × 6–8 μm, four-spored, with sterigmata 3–6 μm long and a basal clamp.",
        stipe: "The stipe is 2–10 cm tall and 0.5–3 cm thick. It is cylindrical to slightly club-shaped and often off-centre. The base may taper or stay slightly swollen. It is solid, whitish to cream, and paler than the cap. Bruising turns it pale ochre-brown to orange-brown. There is no ring.",
        flesh: "The flesh is thick, firm, and brittle, white to faintly yellowish. Some collections stain yellow to orange-brown when cut, and others do not change. The smell is mild, sometimes faintly fruity. The taste is mild to slightly sour or peppery, and older fruit bodies turn bitter.",
        sporePrint: "White to pale cream. The spores are smooth, thin-walled, and hyaline, subglobose to broadly ellipsoid, 6.5–9 × 5.5–7.5 μm. On the type material they measure 7–8.5 × 6.2–7.5 μm.",
        habitat: "Fruit bodies appear from July to November, and in Britain and Ireland from August into December. In western European pine woods they can last into winter. They grow singly, in groups, in lines, or in rings, on soil, leaf litter, or moss, under spruce, fir, pine, or beech, and in mixed woods with birch, oak, aspen, or hazel. The ground is often basic, though they also grow where it is only damp.",
        uses: "It is a choice edible mushroom. Young fruit bodies are preferred, because older ones turn bitter. The firm flesh goes into soups, stews, and risottos, often with other mushrooms. It is sold in European markets. Cooking softens the peppery taste.",
        confusion: "Hydnum rufescens is smaller, and its cap is a deeper apricot, orange, or rusty colour. Its spines are adnate or free rather than decurrent, the cap margin is more sharply delimited, and the cap is less felty. Hydnum ellipsosporum has a cap 3–5 cm across and ellipsoid spores 9–11 × 6–7.5 μm. Pale fruit bodies cannot be separated from Hydnum boreorepandum without a sequence, and the spores of the two are essentially the same size. Hydnum slovenicum has an orange-ochre cap and smaller spores, averaging 7.5 × 6.4 μm. Hydnum albidum is a separate, smaller species, white to pale grey-yellow, with small subglobose spores. Cantharellus cibarius and Cantharellus pallens have thick forked ridges rather than spines.",
        notes: "A 2019 assessment lists the species as Least Concern."},
      sk: {
        description: "Ektomykorízna huba. V Európe je rozšírená a hojná, v ihličnatých aj listnatých lesoch. Revízia z roku 2018 overuje nálezy z Európy. Huby zo Severnej Ameriky a východnej Ázie, ktoré sa kedysi uvádzali pod týmto menom, sú iné druhy. Staršie výklady ju rozširujú na celé mierne pásmo severnej pologule.",
        cap: "Klobúk má v priemere 3–15 cm. Za mladi je klenutý, neskôr plochý, zvlnený alebo laločnatý a niekedy preliačený. Okraj je za mladi podvinutý a v hustých skupinách sa klobúky krivia. Povrch je suchý, hladký až jemne plstnatý. Sfarbenie je krémové, žlté alebo oranžovookrové, k okraju zvyčajne bledšie, a klobúk môže vyblednúť takmer do biela. Otlačením a v starobe prechádza do okrovej až oranžovohnedej.",
        hymenium: "Spodnú stranu pokrývajú husté mäkké ostne, dlhé 2–7 mm. Sú lámavé, zvyčajne zbiehavé a niekedy len krátko zbiehavé. Najprv sú belavé až krémové, neskôr sfarbené ako klobúk alebo bledooranžové a pri dotyku sa odlamujú. Bazídiá sú kyjačkovité, veľké 35–50 × 6–8 μm, štvorvýtrusové, so sterigmami dlhými 3–6 μm a s bazálnou svorkou.",
        stipe: "Hlúbik je 2–10 cm vysoký a 0,5–3 cm hrubý. Je valcovitý až mierne kyjakovitý a často excentrický. Báza sa môže zužovať alebo ostať mierne zhrubnutá. Je plný, belavý až krémový a bledší ako klobúk. Otlačením sa sfarbuje na bledookrovohnedý až oranžovohnedý. Prsteň chýba.",
        flesh: "Dužina je hrubá, pevná a lámavá, biela až slabo žltkastá. Niektoré plodnice sa na reze sfarbujú do žlta až oranžovohneda, iné farbu nemenia. Vôňa je mierna, niekedy slabo ovocná. Chuť je mierna až mierne kyslastá alebo korenistá a staršie plodnice horknú.",
        sporePrint: "Výtrusný prach je biely až bledokrémový. Výtrusy sú hladké, tenkostenné a hyalínne, takmer guľovité až široko elipsoidné, veľké 6,5–9 × 5,5–7,5 μm. Na typovom materiáli merajú 7–8,5 × 6,2–7,5 μm.",
        habitat: "Plodnice sa objavujú od júla do novembra. V západoeurópskych borinách môžu vydržať až do zimy. Rastú jednotlivo, v skupinách, v radoch alebo v kruhoch, na pôde, v opade alebo v machu, pod smrekom, jedľou, borovicou alebo bukom a v zmiešaných lesoch s brezou, dubom, osikou alebo lieskou. Podklad býva často zásaditý, rastú však aj tam, kde je len vlhko.",
        uses: "Je to výborná jedlá huba. Uprednostňujú sa mladé plodnice, lebo staršie horknú. Pevná dužina sa dáva do polievok, dusených jedál a rizota, často s inými hubami. Predáva sa na európskych trhoch. Tepelná úprava zmierňuje korenistú chuť.",
        confusion: "Jelenka ryšavá (Hydnum rufescens) je menšia a klobúk má sýtejšiu marhuľovú, oranžovú alebo hrdzavú farbu. Ostne má prirastené alebo voľné, nie zbiehavé, okraj klobúka je ostrejšie ohraničený a klobúk je menej plstnatý. Hydnum ellipsosporum má klobúk v priemere 3–5 cm a elipsoidné výtrusy veľké 9–11 × 6–7,5 μm. Bledé plodnice nemožno od Hydnum boreorepandum odlíšiť bez sekvencie a výtrusy oboch sú v podstate rovnako veľké. Hydnum slovenicum má oranžovookrový klobúk a menšie výtrusy, v priemere 7,5 × 6,4 μm. Hydnum albidum je samostatný menší druh, biely až bledo sivožltý, s drobnými takmer guľovitými výtrusmi. Kuriatko jedlé (Cantharellus cibarius) a kuriatko bledé (Cantharellus pallens) majú hrubé vidlicovité žilky, nie ostne.",
        notes: "Hodnotenie z roku 2019 ho zaraďuje ako málo dotknutý druh (Least Concern)."}
    },
    sources: {
      en: [
        { group: "text", name: "First Nature", href: "https://www.first-nature.com/fungi/hydnum-repandum.php" },
        { group: "text", name: "Wikipedia", href: "https://en.wikipedia.org/wiki/Hydnum_repandum" },
        { group: "text", name: "Mycologia", href: "https://doi.org/10.1080/00275514.2018.1477004", detail: "2018" },
        { group: "text", name: "MushroomExpert", href: "https://www.mushroomexpert.com/hydnum_repandum.html" },
        { group: "text", name: "IUCN", href: "https://www.iucnredlist.org/species/122090544/222978763" },
        { group: "text", name: "nahuby.sk", href: "https://www.nahuby.sk/atlas-hub/Hydnum-repandum/jelenka-poprehybana/lisak-zprohybany/ID169", detail: "jelenka poprehýbaná" },
        { group: "text", name: "myko.cz", href: "https://www.myko.cz/myko-atlas/Hydnum-repandum/" },
        { group: "text", name: "grzyby.pl", href: "https://grzyby.pl/gatunki/Hydnum_repandum.htm" },
        { group: "text", name: "MycoDB", href: "https://www.mycodb.fr/fiche.php?genre=Hydnum&espece=repandum" },
        { group: "text", name: "mycology.su", href: "https://mycology.su/hydnum-repandum.html" },
        { group: "text", name: "Fungipedia", href: "https://www.fungipedia.org/hongos/hydnum-repandum.html" },
        { group: "text", name: "botany.cz", href: "https://botany.cz/cs/hydnum-repandum/" },
        { group: "name", name: "Index Fungorum", href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=225014", detail: "225014" },
        { group: "name", name: "Species Fungorum", href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=225014", detail: "225014" },
        { group: "name", name: "Index Fungorum", href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=17797", detail: "17797" },
        { group: "name", name: "MycoBank", href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/225014" },
        { group: "name", name: "GBIF", href: "https://www.gbif.org/species/2554716", detail: "2554716" }
      ],
      sk: [
        { group: "text", name: "nahuby.sk", href: "https://www.nahuby.sk/atlas-hub/Hydnum-repandum/jelenka-poprehybana/lisak-zprohybany/ID169", detail: "jelenka poprehýbaná" }
      ]
    },
    synonyms: [
      "Hypothele repanda (L.) Paulet",
      "Dentinum repandum (L.) Gray",
      "Tyrodon repandus (L.) P. Karst.",
      "Sarcodon repandus (L.) Quél.",
      "Hydnum flavidum Schaeff.",
      "Hydnum clandestinum Batsch",
      "Hydnum medium Pers.",
      "Lophium medium (Pers.) Fr.",
      "Hydnum bulbosum Raddi",
      "Hydnum bicolor Raddi",
      "Hydnum aurantium Raf.",
      "Hydnum album Pers.",
      "Hydnum diffractum Berk."
    ]
  };

  var SARCODON_MEDIA = "photos/Thelephorales/Bankeraceae/Sarcodon_imbricatus/";
  var SARCODON = {
    id: 29,
    name: "Sarcodon imbricatus",
    author: "(L.) P. Karst.",
    family: "Bankeraceae",
    genus: "Sarcodon",
    order: "Thelephorales",
    edibility: "edible_with_caution",
    hymenium: "teeth",
    path: ["Fungi", "Dikarya", "Basidiomycota", "Agaricomycotina", "Agaricomycetes", "Incertae sedis", "Thelephorales", "Bankeraceae", "Sarcodon"],
    summary: ["Thelephorales", "Bankeraceae", "Sarcodon"],
    added: "2026-10-23",
    plate: STORAGE + SARCODON_MEDIA + "Sarcodon_imbricatus@1600.webp",
    plateGrid: STORAGE + SARCODON_MEDIA + "Sarcodon_imbricatus@400.webp",
    plateCredit: {
      author: "L. Dufour",
      license: "public domain",
      source: "https://www.biodiversitylibrary.org/page/3270722"
    },
    photos: [
      {
        src: STORAGE + SARCODON_MEDIA + "si1.webp",
        author: "Holger Krisp",
        license: "CC BY 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Habichtspilz-Sarcodon-imbricatus.jpg"
      },
      {
        src: STORAGE + SARCODON_MEDIA + "si2.webp",
        author: "Andreas Kunze",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:2007-09-11_Sarcodon_imbricatus_1.jpg"
      },
      {
        src: STORAGE + SARCODON_MEDIA + "si3.webp",
        author: "Andreas Kunze",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:2007-09-11_Sarcodon_imbricatus_2.jpg"
      },
      {
        src: STORAGE + SARCODON_MEDIA + "si4.webp",
        author: "Colussi.g",
        license: "CC BY 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Hymenophor_of_Sarcodon_imbricatus.jpg"
      },
      {
        src: STORAGE + SARCODON_MEDIA + "si5.webp",
        author: "OrlikNiebieski",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Sarcodon_imbricatum_-_top.JPG"
      }
    ],
    capFrom: 5,
    capTo: 30,
    stipeHeightFrom: 3,
    stipeHeightTo: 10,
    stipeThickFrom: 1,
    stipeThickTo: 4,
    fruitingFrom: 7,
    fruitingTo: 12,
    label: {
      en: "shingled hedgehog",
      sk: "jelenkovec škridlicovitý"
    },
    names: {
      en: ["scaly hedgehog", "scaly tooth"],
      sk: ["vlkolak", "jelení pysk", "jelenia huba", "jelenica", "sova", "srniak", "srňacník", "srňačka", "jastrab", "kaniarka"]
    },
    text: {
      en: {
        description: "An ectomycorrhizal mushroom of spruce woods, also found with fir. It is widespread in Europe and North America, and it is reported from Japan. Records from the British Isles and the Netherlands belong to a separate pine associate. It is locally common in mountain spruce woods and was formerly more abundant.",
        cap: "The cap is 5–25 cm across and can reach about 30 cm. It is convex at first, with an inrolled margin, then plane to funnel-shaped, often with a deep central depression that may open into a hole. The margin becomes wavy or lobed. The surface is dry and brown, grey-brown, or buff, sometimes with a reddish tint, and paler toward the edge. Coarse, thick, dark brown to blackish scales stand up in the centre, often in rough concentric zones, and lie flatter toward the margin. With age the scales darken and turn upward.",
        hymenium: "The underside bears crowded, brittle teeth rather than gills. They run down the stipe and thin out along it. They are several millimetres to 1.5 cm long, whitish or pale grey when young, then grey-brown to brown. Clamp connections are present.",
        stipe: "The stipe is 3–10 cm long and 1–4 cm thick. Many fruit bodies sit so low that the stipe stays hidden until the mushroom is lifted. It is cylindrical or slightly club-shaped, sometimes off-centre, and often thicker at the base, though some are narrower there. The surface is dry, smooth or finely velvety, whitish when young and grey to brown later, and it may carry a few aborted teeth near the top. White mycelium clings to the base. The interior is solid at first and can become hollow with age.",
        flesh: "The flesh is thick, whitish to pale grey or pale brown, and brownish in the base of the stipe. Young flesh is firm. Older flesh is soft or leathery. It does not exude a liquid. The smell is mild or spicy, and the taste is mild, pleasant, or slightly bitter, and more bitter in old fruit bodies. Potassium hydroxide on the flesh gives a faint olive tint or no reaction.",
        sporePrint: "Brown to grey-brown. The basidiospores are subglobose to irregularly globose, with angular warts or nodules. Central European accounts give 6–8 × 5–5.5 μm. A North American account gives 5–8.5 × 5–7.5 μm.",
        habitat: "Fruit bodies appear from July to September across much of North America, and from September to December on the West Coast. In central Europe they fruit from August into November, and in mild weather they last a little longer. They grow singly, in groups, or in fused clusters, sometimes in rings, on acid sandy ground, in moss, or in needle litter, chiefly under spruce in foothill and mountain woods, and also under fir. They are also found in mixed and deciduous woods.",
        uses: "Young fruit bodies are eaten, though the flesh is tough and the quality is only middling. Older ones are bitter and leathery. Parboiling reduces the bitterness. They are pickled or dried and used as a flavouring, and in Bulgaria the dried mushroom is ground as an aromatic flour. Raw fruit bodies may be poisonous, and some collections cause gastrointestinal upset.",
        confusion: "Sarcodon squamosus has smaller, more appressed scales and grows with pine. Hydnellum scabrosum has finer scales, a very bitter taste, and blue-green flesh in the stipe base. Hydnellum joeides is brown, and its flesh slowly turns violet when cut. Strobilomyces strobilaceus can look shaggy from above, but it has pores. Hydnum repandum has a smooth cream, yellow, or orange cap and pale spines, without coarse dark scales.",
        notes: "Old fruit bodies of this species and its relatives contain blue-green pigments used to dye wool. A 2006 red list of Poland places the species as vulnerable. It was strictly protected in Poland until 2014."},
      sk: {
        description: "Ektomykorízna huba smrečín, rastie aj s jedľou. Je rozšírená v Európe a Severnej Amerike a uvádza sa aj z Japonska. Nálezy z Britských ostrovov a Holandska patria samostatnému druhu viazanému na borovicu. V horských smrečinách je miestami hojná a v minulosti bola oveľa hojnejšia.",
        cap: "Klobúk má v priemere 5–25 cm a môže dosiahnuť asi 30 cm. Za mladi je klenutý, s podvinutým okrajom, neskôr plochý až lievikovitý, často s hlbokou stredovou priehlbinou, ktorá sa môže otvoriť do otvoru. Okraj sa stáva zvlneným alebo laločnatým. Povrch je suchý, hnedý, sivohnedý alebo plavý, niekedy s červenkastým odtieňom, a k okraju bledší. Hrubé tmavohnedé až načernalé šupiny v strede odstávajú, často v hrubých sústredných pásoch, a k okraju ležia plochejšie. V starobe šupiny tmavnú a stáčajú sa nahor.",
        hymenium: "Spodnú stranu pokrývajú husté lámavé ostne, nie lupene. Zbiehajú na hlúbik a pozdĺž neho rednú. Sú dlhé niekoľko milimetrov až 1,5 cm, za mladi belavé alebo bledosivé, neskôr sivohnedé až hnedé. Prítomné sú svorky.",
        stipe: "Hlúbik je 3–10 cm dlhý a 1–4 cm hrubý. Mnohé plodnice sedia tak nízko, že hlúbik ostáva skrytý, kým sa huba nezdvihne. Je valcovitý alebo mierne kyjakovitý, niekedy excentrický a na báze často hrubší, hoci inokedy je tam užší. Povrch je suchý, hladký alebo jemne zamatový, za mladi belavý a neskôr sivý až hnedý, a pri vrchole môže niesť niekoľko nedokončených ostňov. Na báze sa drží biele mycélium. Vnútro je najprv plné a v starobe môže byť duté.",
        flesh: "Dužina je hrubá, belavá až bledosivá alebo bledohnedá a v báze hlúbika hnedastá. Mladá dužina je pevná. Staršia je mäkká alebo kožovitá. Nevylučuje tekutinu. Vôňa je mierna alebo korenistá a chuť je mierna, príjemná alebo mierne horká, v starých plodniciach horkejšia. Hydroxid draselný na dužine dáva slabý olivový odtieň alebo nijakú reakciu.",
        sporePrint: "Výtrusný prach je hnedý až sivohnedý. Bazídiospóry sú takmer guľovité až nepravidelne guľovité, s hranatými bradavkami alebo hrčkami. Stredoeurópske údaje uvádzajú 6–8 × 5–5,5 μm.",
        habitat: "V strednej Európe plodnice rastú od augusta do novembra a v miernom počasí vydržia o niečo dlhšie. Rastú jednotlivo, v skupinách alebo v zrastených zväzkoch, niekedy v kruhoch, na kyslej piesočnatej pôde, v machu alebo v ihličnatom opade, najmä pod smrekom v podhorských a horských lesoch a aj pod jedľou. Nachádzajú sa aj v zmiešaných a listnatých lesoch.",
        uses: "Mladé plodnice sa jedia, hoci dužina je tuhá a akosť je len priemerná. Staršie sú horké a kožovité. Predvarenie horkosť zmierňuje. Nakladajú sa alebo sa sušia a používajú ako korenie a v Bulharsku sa sušená huba melie na aromatickú múku. Surové plodnice môžu byť jedovaté a niektoré zbery spôsobujú žalúdočné a črevné ťažkosti.",
        confusion: "Jelenkovec sosnový (Sarcodon squamosus) má menšie, viac pritisnuté šupiny a rastie s borovicou. Jelenkovec horký (Hydnellum scabrosum) má jemnejšie šupiny, veľmi horkú chuť a modrozelenú dužinu v báze hlúbika. Jelenkovec fialovomäsový (Hydnellum joeides) je hnedý a jeho dužina sa na reze pomaly sfarbuje do fialova. Strobilomyces strobilaceus vyzerá zhora strapatý, má však póry. Jelenka poprehýbaná (Hydnum repandum) má hladký krémový, žltý alebo oranžový klobúk a bledé ostne, bez hrubých tmavých šupín.",
        notes: "Staré plodnice tohto druhu a príbuzných obsahujú modrozelené farbivá, ktorými sa farbila vlna. Červený zoznam Poľska z roku 2006 ho zaraďuje ako zraniteľný druh (Vulnerable). V Poľsku bol prísne chránený do roku 2014."}
    },
    sources: {
      en: [
        {
          group: "text",
          name: "Wikipedia",
          href: "https://en.wikipedia.org/wiki/Sarcodon_imbricatus"
        },
        {
          group: "text",
          name: "MushroomExpert",
          href: "https://www.mushroomexpert.com/sarcodon_imbricatus.html"
        },
        {
          group: "text",
          name: "nahuby.sk",
          href: "https://www.nahuby.sk/atlas-hub/Sarcodon-imbricatus/jelenkovec-skridlicovity/losak-jeleni/ID172",
          detail: "jelenkovec škridlicovitý"
        },
        {
          group: "text",
          name: "pl.wikipedia",
          href: "https://pl.wikipedia.org/wiki/Sarniak_%C5%9Bwierkowy"
        },
        {
          group: "text",
          name: "grzyby.pl",
          href: "https://grzyby.pl/gatunki/Sarcodon_imbricatus.htm"
        },
        {
          group: "text",
          name: "Mycological Research",
          href: "https://doi.org/10.1017/S0953756299008709",
          detail: "1999"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=414481",
          detail: "414481"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=414481",
          detail: "414481"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=198239",
          detail: "198239"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=18501",
          detail: "18501"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/414481"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/5238865",
          detail: "5238865"
        }
      ],
      sk: [
        {
          group: "text",
          name: "nahuby.sk",
          href: "https://www.nahuby.sk/atlas-hub/Sarcodon-imbricatus/jelenkovec-skridlicovity/losak-jeleni/ID172",
          detail: "jelenkovec škridlicovitý"
        }
      ]
    },
    synonyms: ["Fungus imbricatus (L.) Paulet", "Phaeodon imbricatus (L.) J. Schröt.", "Hydnum subsquamosum Batsch", "Fungus subsquamosus (Batsch) Paulet", "Scutiger subsquamosus (Batsch) Paulet", "Sarcodon subsquamosus (Batsch) P. Karst.", "Phaeodon subsquamosus (Batsch) J. Schröt.", "Hydnum laevigatum Sw.", "Sistotrema laevigatum (Sw.) Pers.", "Polyporus laevigatus (Sw.) Duby", "Sarcodon laevigatus (Sw.) P. Karst.", "Hydnum infundibulum Sw.", "Sarcodon infundibulus (Sw.) P. Karst.", "Bankera infundibulum (Sw.) Pouzar", "Hydnum gracile (Fr.) Fr.", "Phellodon gracilis (Fr.) P. Karst.", "Sarcodon gracilis (Fr.) Quél.", "Hydnum badium Pers.", "Hydnum aspratum Berk.", "Phaeodon aspratus (Berk.) Henn.", "Sarcodon aspratus (Berk.) S. Ito", "Hydnum adpressum Lloyd"]
  };

  var RUSSULA_MEDIA = "photos/Russulales/Russulaceae/Russula_cyanoxantha/";
  var RUSSULA = {
    id: 30,
    name: "Russula cyanoxantha",
    author: "(Schaeff.) Fr.",
    family: "Russulaceae",
    genus: "Russula",
    order: "Russulales",
    edibility: "choice",
    hymenium: "gills",
    path: ["Fungi", "Dikarya", "Basidiomycota", "Agaricomycotina", "Agaricomycetes", "Incertae sedis", "Russulales", "Russulaceae", "Russula"],
    summary: ["Russulales", "Russulaceae", "Russula"],
    added: "2026-10-23",
    plate: STORAGE + RUSSULA_MEDIA + "Russula_cyanoxantha@1600.webp",
    plateGrid: STORAGE + RUSSULA_MEDIA + "Russula_cyanoxantha@400.webp",
    plateCredit: {
      author: "M. C. Cooke",
      license: "not stated"
    },
    photos: [
      {
        src: STORAGE + RUSSULA_MEDIA + "rc1.webp",
        author: "MediAtta",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Russule_charbonniere.jpg"
      },
      {
        src: STORAGE + RUSSULA_MEDIA + "rc2.webp",
        author: "Lucian Clanet",
        license: "CC BY 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Russula_cyanoxantha_02.jpg"
      },
      {
        src: STORAGE + RUSSULA_MEDIA + "rc3.webp",
        author: "Holger Krisp",
        license: "CC BY 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Frauen-Täubling_Russula_cyanoxantha.jpg"
      },
      {
        src: STORAGE + RUSSULA_MEDIA + "rc4.webp",
        author: "Svencapoeira",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Siniroheline_pilvik.jpg"
      },
      {
        src: STORAGE + RUSSULA_MEDIA + "rc5.webp",
        author: "Lucian Clanet",
        license: "CC BY 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Russula_cyanoxantha_01.jpg"
      }
    ],
    capFrom: 5,
    capTo: 15,
    stipeHeightFrom: 5,
    stipeHeightTo: 12,
    stipeThickFrom: 1.5,
    stipeThickTo: 3,
    fruitingFrom: 6,
    fruitingTo: 11,
    label: {
      en: "charcoal burner",
      sk: "plávka modrastá"
    },
    names: {
      en: ["variegated russula"]
    },
    text: {
      en: {
        description: "An ectomycorrhizal mushroom of broadleaf and mixed woods, most often with beech and oak and also with spruce and fir. It is widespread in Europe from the Mediterranean to central Fennoscandia, and it is reported from North Africa, the Canary Islands, temperate Asia, and parts of North and Central America.",
        cap: "The cap is commonly 5–15 cm across, with published extremes of about 4.5–18 cm. It is hemispherical at first, then convex, and later flattened to shallowly depressed, sometimes nearly funnel-shaped. The surface is smooth to finely radially veined, sticky and shiny when wet. The skin peels from a short distance at the margin to about halfway. Colours include lilac, purple, wine, grey, olive, and green, often mottled and darker toward the centre, which may fade to ochre. The margin stays sharp and smooth for a long time and may become faintly grooved only in age. Sodium hydroxide turns the cap skin brownish, and sulfuric acid turns it greenish yellow.",
        hymenium: "The gills are white to pale cream, crowded, greasy, and flexible: they bend and spring back rather than snapping, unlike the brittle gills of most species in the genus. They are adnexed or adnate to slightly decurrent, sometimes forked, of unequal lengths, and rather narrow, narrowed toward both ends. The basidia are clavate and four-spored. Published lengths run from about 45–55 μm to about 66–73 μm, at about 9–11 μm wide. Cheilocystidia are fusiform to cylindrical, about 30–55 × 4–6 μm, sometimes with a small appendage. Pleurocystidia are about 27–85 × 3–6 μm. The cystidia turn weakly grey-black in sulfobenzaldehyde and slightly blue in sulfovanillin.",
        stipe: "The stipe is white, sometimes flushed lilac or faintly pink. It is cylindrical and stout, often tapered at the base, and it has no ring. European fruit bodies are about 5–12 cm long and 1.5–3 cm thick, and published extremes reach about 2.5–13 cm long and 1–5 cm thick. The stipe is solid at first and later spongy or chambered.",
        flesh: "The flesh is white, firm, and thick, often violet-tinged under the cuticle, and it does not change colour when cut. The odour is not distinctive. The taste is mild and nutty, and it may become faintly sharp only after prolonged chewing. Iron salts produce no salmon reaction: the flesh stays unchanged or slowly turns pale grey-green to olive. Guaiac turns the flesh blue-green, weakly at first and strongly after about 50 seconds.",
        sporePrint: "Pure white. The spores are broadly ellipsoid, mostly 7–9 × 5.5–7 μm, with a length-to-width ratio near 1.1–1.2. They bear isolated blunt amyloid warts about 0.5 μm high, only sparsely joined.",
        habitat: "Fruit bodies appear in Europe from June into early November, from May in central Europe, and occasionally from mid-April. In Britain and Ireland they appear from July to November. They grow singly or in groups on the ground in beech, oak, and oak-hornbeam woods, and also with spruce and fir, including in parks and gardens. The soils are fresh and loose, weakly acid to weakly alkaline, and not strongly rich in nitrogen. Fruit bodies are uncommon on compacted, waterlogged, or long-dry ground. In eastern North America and the Mountain states they appear from July to October, and from October to January farther west.",
        uses: "It is a good edible mushroom with a mild, nutty taste. The flesh stays softer after cooking than that of many other edible species in the genus. It is sautéed and used in omelettes, soups, and stews. Fruit bodies are often riddled with maggots.",
        confusion: "Russula ionochlora and Russula parazurea are smaller, have brittle gills, and do not give a pure white spore print. Russula grisea has a cream spore print, a more blue-grey cap with violet or green hues, and cream gills. Russula heterophylla turns pink in the flesh with iron salts and has smaller spores. Russula virescens has a cracked green cap, flesh that turns pink-orange with iron salts, and a cap skin made largely of spherical cells. Russula claroflava greys in the flesh with age, has brittle gills, and a dark cream to pale ochre spore print. Russula xerampelina is equally variable in cap colour and smells of crab or fish. Russula olivacea may have a mottled cap and has yellow spores. Russula aeruginea is more uniformly green, often grows with birch, has a cream spore print and brittle gills, and tastes slightly hot.",
        notes: "It was mushroom of the year in Germany in 1997. A 2025 assessment places it as Least Concern, leaves records from Africa uncertain, and sets Australian reports aside as a different species. North American fruit bodies that carry this name may belong to more than one species."},
      sk: {
        description: "Ektomykorízna huba listnatých a zmiešaných lesov, najčastejšie s bukom a dubom a aj so smrekom a jedľou. Je rozšírená v Európe od Stredomoria po strednú Fennoskandiu a uvádza sa zo severnej Afriky, Kanárskych ostrovov, miernej Ázie a z častí Severnej a Strednej Ameriky.",
        cap: "Klobúk máva v priemere 5–15 cm a uverejnené krajnosti sú asi 4,5–18 cm. Za mladi je polguľovitý, potom klenutý a neskôr sploštený až plytko preliačený, niekedy takmer lievikovitý. Povrch je hladký až jemne lúčovito žilkovaný, za vlhka lepkavý a lesklý. Pokožka sa lúpe od krátkeho úseku pri okraji asi do polovice. Býva ľilový, purpurový, vínový, sivý, olivový aj zelený, často strakatý a k stredu tmavší, pričom stred môže vyblednúť do okrova. Okraj ostáva dlho ostrý a hladký a len v starobe môže byť slabo ryhovaný. Hydroxid sodný sfarbuje pokožku klobúka do hneda a kyselina sírová do zelenožlta.",
        hymenium: "Lupene sú biele až bledokrémové, husté, mastné a pružné: ohnú sa a vrátia naspäť, namiesto toho, aby sa lámali, na rozdiel od krehkých lupeňov väčšiny druhov rodu. Sú vykrojené alebo pripojené až mierne zbiehavé, niekedy vidlicovité, nerovnakej dĺžky a pomerne úzke, zúžené k obom koncom. Bazídiá sú kyjakovité a štvorvýtrusové. Uverejnené dĺžky siahajú od asi 45–55 μm po asi 66–73 μm pri šírke asi 9–11 μm. Cheilocystidy sú vretenovité až valcovité, asi 30–55 × 4–6 μm, niekedy s malým príveskom. Pleurocystidy merajú asi 27–85 × 3–6 μm. Cystidy sa v sulfobenzaldehyde slabo sfarbujú do sivočierna a v sulfovanilíne slabo do modra.",
        stipe: "Hlúbik je biely, niekedy s ľilavým alebo slabo ružovkastým nádychom. Je valcovitý a statný, často k báze zúžený, a nemá prsteň. Európske plodnice sú asi 5–12 cm dlhé a 1,5–3 cm hrubé a uverejnené krajnosti dosahujú asi 2,5–13 cm dĺžky a 1–5 cm hrúbky. Hlúbik je najprv plný a neskôr špongiovitý alebo komôrkatý.",
        flesh: "Dužina je biela, pevná a hrubá, pod pokožkou často s fialovým nádychom, a na reze nemení farbu. Vôňa je nevýrazná. Chuť je mierna a oriešková a slabo štipľavá môže byť až po dlhom žuvaní. Soli železa nevyvolajú lososovú reakciu: dužina ostáva bez zmeny alebo pomaly bledne do sivozelena až olivova. Guajak sfarbuje dužinu do modrozelena, najprv slabo a po asi 50 sekundách silno.",
        sporePrint: "Čistobiely. Výtrusy sú široko elipsoidné, väčšinou 7–9 × 5,5–7 μm, s pomerom dĺžky k šírke blízko 1,1–1,2. Nesú izolované tupé amyloidné bradavice vysoké asi 0,5 μm, len riedko pospájané.",
        habitat: "Plodnice sa v Európe objavujú od júna do začiatku novembra, v strednej Európe od mája a ojedinele od polovice apríla. V Británii a Írsku sa objavujú od júla do novembra. Rastú jednotlivo alebo v skupinách na zemi v bukových, dubových a dubovo-hrabových lesoch a aj so smrekom a jedľou, aj v parkoch a záhradách. Pôdy sú svieže a kypré, slabo kyslé až slabo zásadité a nie výrazne bohaté na dusík. Na zhutnenej, zamokrenej alebo dlhodobo suchej pôde sú plodnice zriedkavé. Na východe Severnej Ameriky a v horských štátoch sa objavujú od júla do októbra a ďalej na západe od októbra do januára.",
        uses: "Je to dobrá jedlá huba s miernou orieškovou chuťou. Dužina ostáva po tepelnej úprave mäkšia než dužina mnohých iných jedlých druhov rodu. Opeká sa a používa sa do omelet, polievok a dusených jedál. Plodnice bývajú často červivé.",
        confusion: "Plávka fialovozelená (Russula ionochlora) a Russula parazurea sú menšie, majú krehké lupene a nedávajú čistobiely výtrusný prach. Plávka strakatá (Russula grisea) má krémový výtrusný prach, viac sivomodrý klobúk s fialovými alebo zelenými odtieňmi a krémové lupene. Plávka buková (Russula heterophylla) má dužinu, ktorá so soľami železa ružovie, a menšie výtrusy. Plávka zelenkastá (Russula virescens) má popukaný zelený klobúk, dužinu, ktorá so soľami železa ružovooranžovie, a pokožku klobúka tvorenú prevažne guľovitými bunkami. Plávka chrómovožltá (Russula claroflava) má v starobe sivnúcu dužinu, krehké lupene a tmavokrémový až bledookrový výtrusný prach. Russula xerampelina je v sfarbení klobúka rovnako premenlivá a vonia po kraboch alebo po rybe. Plávka olivová (Russula olivacea) môže mať strakatý klobúk a má žlté výtrusy. Plávka trávovozelená (Russula aeruginea) je jednotnejšie zelená, často rastie s brezou, má krémový výtrusný prach a krehké lupene a chuť má mierne štipľavú.",
        notes: "V roku 1997 ho v Nemecku vyhlásili za hubu roka. Hodnotenie z roku 2025 ho zaraďuje ako málo dotknutý druh (Least Concern), africké nálezy ponecháva ako neisté a austrálske údaje oddeľuje ako iný druh.",
      }
    },
    sources: {
      en: [
        {
          group: "text",
          name: "First Nature",
          href: "https://www.first-nature.com/fungi/russula-cyanoxantha.php"
        },
        {
          group: "text",
          name: "Wikipedia",
          href: "https://en.wikipedia.org/wiki/Russula_cyanoxantha"
        },
        {
          group: "text",
          name: "MushroomExpert",
          href: "https://www.mushroomexpert.com/russula_cyanoxantha.html"
        },
        {
          group: "text",
          name: "de.wikipedia",
          href: "https://de.wikipedia.org/wiki/Frauen-Täubling"
        },
        {
          group: "text",
          name: "botany.cz",
          href: "https://botany.cz/cs/russula-cyanoxantha/"
        },
        {
          group: "text",
          name: "MycoBank",
          href: "https://www.mycobank.org/details/26/37935"
        },
        {
          group: "text",
          name: "nahuby.sk",
          href: "https://www.nahuby.sk/atlas-hub/Russula-langei/plavka-Langeova/holubinka-Langeova/ID11938",
          detail: "plávka modrastá"
        },
        {
          group: "text",
          name: "IUCN Red List",
          href: "https://www.iucnredlist.org/species/230148367/260413995"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=190250",
          detail: "190250"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=190250",
          detail: "190250"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=201876",
          detail: "201876"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/190250"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/2551542",
          detail: "2551542"
        }
      ],
      sk: [
        {
          group: "text",
          name: "nahuby.sk",
          href: "https://www.nahuby.sk/atlas-hub/Russula-cyanoxantha/plavka-modrasta/holubinka-namodrala/ID458",
          detail: "plávka modrastá"
        }
      ]
    },
    synonyms: [
      "Agaricus cyanoxanthus Schaeff.",
      "Russula variata Banning",
      "Russula cutefracta Cooke",
      "Russula lilacina Quél. ex Gillet",
      "Russula peltereaui (Singer) Moreau",
      "Russula flavoviridis Romagn."
    ]
  };

  var KUEHNEROMYCES_MEDIA = "photos/Agaricales/Kuehneromycetaceae/Kuehneromyces_mutabilis/";
  var KUEHNEROMYCES = {
    id: 31,
    name: "Kuehneromyces mutabilis",
    author: "(Schaeff.) Singer & A.H. Sm.",
    family: "Kuehneromycetaceae",
    genus: "Kuehneromyces",
    order: "Agaricales",
    edibility: "edible_with_caution",
    hymenium: "gills",
    path: ["Fungi", "Dikarya", "Basidiomycota", "Agaricomycotina", "Agaricomycetes", "Agaricomycetidae", "Agaricales", "Kuehneromycetaceae", "Kuehneromyces"],
    summary: ["Agaricales", "Kuehneromycetaceae", "Kuehneromyces"],
    added: "2026-10-23",
    plate: STORAGE + KUEHNEROMYCES_MEDIA + "Kuehneromyces_mutabilis@1600.webp",
    plateGrid: STORAGE + KUEHNEROMYCES_MEDIA + "Kuehneromyces_mutabilis@400.webp",
    plateCredit: {
      author: "L. Dufour",
      license: "public domain",
      source: "https://archive.org/details/atlasdeschampign00dufo"
    },
    photos: [
      {
        src: STORAGE + KUEHNEROMYCES_MEDIA + "km1.webp",
        author: "Achim Lammerts (Syntaxys)",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:2025-10-11_D500-920_Achim-Lammerts_Kuehneromyces-mutabilis.jpg"
      },
      {
        src: STORAGE + KUEHNEROMYCES_MEDIA + "km2.webp",
        author: "Björn S...",
        license: "CC BY-SA 2.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
        source: "https://commons.wikimedia.org/wiki/File:Sheathed_Woodtuft_-_Kuehneromyces_mutabilis_(37913110846).jpg"
      },
      {
        src: STORAGE + KUEHNEROMYCES_MEDIA + "km3.webp",
        author: "Dr. Hans-Günter Wagner",
        license: "CC BY-SA 2.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
        source: "https://commons.wikimedia.org/wiki/File:Kuehneromyces_mutabilis_(9)_(26569001279).jpg"
      },
      {
        src: STORAGE + KUEHNEROMYCES_MEDIA + "km4.webp",
        author: "Walter J. Pilsak, Waldsassen",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Stockschwaemmchen-Huete.jpg"
      },
      {
        src: STORAGE + KUEHNEROMYCES_MEDIA + "km5.webp",
        author: "Holger Krisp",
        license: "CC BY 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Gemeine_Stockschw%C3%A4mmchen_Kuehneromyces_mutabilis.jpg"
      }
    ],
    capFrom: 1.5,
    capTo: 10,
    stipeHeightFrom: 3,
    stipeHeightTo: 10,
    stipeThickFrom: 0.2,
    stipeThickTo: 1.2,
    fruitingFrom: 1,
    fruitingTo: 12,
    label: {
      en: "sheathed woodtuft",
      sk: "šupinačka menlivá"
    },
    names: {
      en: ["brown stew fungus", "two-toned pholiota", "velvet toughshank"],
      sk: ["šupinovka menlivá"]
    },
    text: {
      en: {
        description: "A wood-rotting mushroom of tufts on stumps and fallen trunks. It is common through Britain and Ireland and across Europe, from the Mediterranean to Iceland and Scandinavia. It is widespread in Asia, including the Caucasus, Siberia, and Japan, and in North America, especially the montane west, and in Australia.",
        cap: "The cap is 1.5–10 cm across, most often about 2–8 cm. It starts obtuse, hemispherical, or bell-shaped, with the margin incurved, and it becomes convex or nearly flat, often with a low broad umbo. The surface is hygrophanous and greasy or sticky when moist, from a separable pellicle, and the moist margin is closely translucent-striate. The colour is reddish cinnamon, dull cinnamon, or orange-brown, drying pale ochre, honey yellow, or pinkish buff from the centre outward, so a darker watery band often remains around a paler disc. Very young caps may carry fine white veil fibrils or tiny scales, but the surface is soon smooth.",
        hymenium: "The gills are crowded, with many short gills, and they may stand farther apart in age. They are broadly adnate or notched, and often shortly decurrent. They are pallid, pale ochre, or yellowish at first, then dull cinnamon to rust brown. A whitish to pale tan partial veil covers them when young. Basidia are 20–23 × 4–5 μm and four-spored, and pleurocystidia are absent. Cheilocystidia are thin-walled and hyaline, subcylindric to fusoid-ventricose or narrowly lageniform, sometimes slightly capitate. Accounts differ: they may be abundant and about 17–29 × 3.3–7 μm, scattered and about 20–40 × 2.5–7 μm, or 35–50 × 7.5–12.5 μm. Clamp connections are present. Caulocystidia are similar and can be scarce, especially on old material.",
        stipe: "The stipe is 3–10 cm long and 0.2–1.2 cm thick, often curved, and equal or tapered toward the base. Above the ring it is pale ochre and smooth, silky, or finely striate. Below the ring it bears recurved brown scales and darkens toward a blackish brown base. The ring is membranous and whitish, then stained cinnamon by the spores. It may become ragged or limp, or remain only as a zone of fibrils, and on old fruit bodies the scales may wear away. The base is bare or clothed in white mycelium. The interior is stuffed, then hollow.",
        flesh: "The cap flesh is thin away from the disc, pale tan to light ochre or cream, watery, and soft, and it does not change colour when cut. The stipe flesh is pale at the apex and rust brown to dark brown toward the base, and it is tough. The odour is weak. It may be pleasantly spicy, mushroomy, or like freshly cut wood, and it is neither mealy nor of radish. The taste is mild to pleasantly spicy, or slightly unpleasant, and not bitter.",
        sporePrint: "The spore print is ochre brown to cinnamon or rusty brown. The spores are smooth under a light microscope, ovate to broadly ellipsoidal or almond-shaped, 5.5–8 × 3.5–5 μm, and occasionally to 6 μm wide. The apex is truncate from a germ pore. They are pale tan to brownish golden in KOH and pale tawny in Melzer's reagent.",
        habitat: "Fruit bodies can appear in any month where the weather is mild, and they are most plentiful in summer and autumn. In central Europe they are recorded from March into December, with the main crop from May to November. It is saprobic on stumps, logs, and buried wood, in tufts and only rarely alone. Broad-leaved trees are the usual hosts, especially birch, beech, alder, lime, and chestnut. It is less often on spruce, though it is abundant on conifer wood in the Pacific Northwest. Tufts that seem to stand in the litter are on buried wood, and it is frequent on wet ground along streams.",
        uses: "The caps are fried or used to flavour sauces and soups, and the flavour is best after cooking. The stipes are too tough and are discarded. A deadly lookalike grows on the same wood, so several guides advise against gathering it unless the two can be separated with certainty.",
        confusion: "Galerina marginata is deadly and grows on the same wood, singly or in smaller tufts. This mushroom dries from the centre outward, so the margin stays a darker watery band, while Galerina marginata dries from the margin inward. The stipe below the ring is scaly here and is normally silky in Galerina marginata, although scales can occur on that species, so the character is not fully reliable. The odour and taste here are spicy or mushroomy and mild. Galerina marginata smells and tastes mealy, or of meal to radish, and its spores are larger and warted. KOH on the cap gives no colour change here, and it turns the cap of Galerina marginata red. The two are sometimes separable only under a microscope. Hypholoma fasciculare and related tufted species of Hypholoma have a grey-violet or grey-black spore print, a smooth stipe, little or no hygrophanous change, and no ring. Hypholoma capnoides has a smooth stipe, and its gills become greyish brown to purplish brown. Species of Pholiota in the same habitat often have a scalier cap. Some are slimy, and a ring, when present, is fibrous and soon lost. Psathyrella piluliformis has no ring, and its spore print is nearly black-brown. Flammulina velutipes has a darker velvety stipe and a white spore print. Armillaria, including Armillaria nabsnona on alder, has a white spore print.",
        notes: "A 2019 assessment places it as Least Concern, and the population trend in that assessment is stable."},
      sk: {
        description: "Drevokazná huba trsov na pňoch a spadnutých kmeňoch. Bežná je v Británii a Írsku a v celej Európe, od Stredomoria po Island a Škandináviu. Rozšírená je v Ázii vrátane Kaukazu, Sibíri a Japonska, v Severnej Amerike, najmä v horskom západe, a v Austrálii.",
        cap: "Klobúk má 15–100 mm v priemere, najčastejšie asi 20–80 mm. Za mladi je tupý, polguľovitý alebo zvoncovitý, s podvinutým okrajom, neskôr klenutý až takmer plochý, často s nízkym širokým hrboľom. Povrch je hygrofánny a za vlhka mastný až lepkavý, s odlučiteľnou pokožkou, a vlhký okraj je husto priesvitne ryhovaný. Farba je červenkasto škoricová, matne škoricová alebo oranžovohnedá. Od stredu osychá do svetlookrovej, medovožltej alebo ružovkasto plavej farby, takže okolo bledšieho temena často ostáva tmavší vodnatý pás. Veľmi mladé klobúky môžu niesť jemné belavé vlákna závoja alebo drobné šupinky, povrch je však čoskoro hladký.",
        hymenium: "Lupene sú husté, s mnohými krátkymi lupienkami, a v starobe môžu stáť redšie. Sú široko prirastené alebo vykrojené a často krátko zbiehavé. Najprv sú belavé, svetlookrové alebo žltkasté, potom matne škoricové až hrdzavohnedé. Za mladi ich kryje belavý až svetlohnedý čiastočný závoj. Bazídiá majú 20–23 × 4–5 μm a sú štvorvýtrusné. Pleurocystidy chýbajú. Cheilocystidy sú tenkostenné a hyalínne, takmer valcovité až vretenovito bruchaté alebo úzko fľaškovité, niekedy slabo hlavičkaté. Údaje sa líšia: môžu byť hojné a merajú asi 17–29 × 3,3–7 μm, roztrúsené a asi 20–40 × 2,5–7 μm, alebo 35–50 × 7,5–12,5 μm. Spojky sú prítomné. Kaulocystidy sú podobné a môžu byť vzácne, najmä na starých plodniciach.",
        stipe: "Hlúbik je dlhý 30–100 mm a hrubý 2–12 mm, často prehnutý, valcovitý alebo k báze zúžený. Nad prsteňom je svetlookrový a hladký, hodvábny alebo jemne ryhovaný. Pod prsteňom nesie naspäť ohnuté hnedé šupiny a k báze tmavne do čiernohneda. Prsteň je blanitý a belavý, potom od výtrusov škoricovo zašpinený. Môže sa rozstrapkať alebo ovisnúť, alebo z neho ostane len vláknitá zóna, a na starých plodniciach sa môžu zodrať aj šupiny. Báza je holá alebo pokrytá bielym mycéliom. Vnútro je najprv vypchaté, potom duté.",
        flesh: "Dužina klobúka je mimo temena tenká, bledohnedá až svetlookrová alebo krémová, vodnatá a mäkká a na reze nemení farbu. Dužina hlúbika je na vrchole bledá a k báze hrdzavohnedá až tmavohnedá a je tuhá. Vôňa je slabá. Môže byť príjemne korenistá, hubová alebo ako čerstvo narezané drevo a nie je ani múčna, ani reďkovková. Chuť je mierna až príjemne korenistá, alebo mierne nepríjemná, a nie je horká.",
        sporePrint: "Výtrusný prach je okrovohnedý až škoricový alebo hrdzavohnedý. Výtrusy sú pod svetelným mikroskopom hladké, vajcovité až široko elipsoidné alebo mandľovité, veľké 5,5–8 × 3,5–5 μm a občas až 6 μm široké. Vrchol je uťatý klíčnym pórom. V KOH sú svetlohnedé až hnedozlatisté a v Melzerovom činidle svetlo plavé.",
        habitat: "Plodnice sa môžu objaviť v ktoromkoľvek mesiaci, kde je počasie mierne, a najhojnejšie sú v lete a na jeseň. V strednej Európe sú zaznamenané od marca do decembra, s hlavnou úrodou od mája do novembra. Rastie saprotrofne na pňoch, ležiacich kmeňoch a zahrabanom dreve, v trsoch a len zriedka jednotlivo. Obvyklým hostiteľom sú listnáče, najmä breza, buk, jelša, lipa a gaštan. Na smreku je zriedkavejšia, na dreve ihličnanov je však hojná na pacifickom severozápade. Trsy, ktoré akoby vyrastali z hrabanky, rastú na zahrabanom dreve, a býva častá na vlhkej pôde pozdĺž potokov.",
        uses: "Klobúky sa vyprážajú alebo sa nimi dochucujú omáčky a polievky a chuť je najlepšia po tepelnej úprave. Hlúbiky sú príliš tuhé a odhadzujú sa. Na tom istom dreve rastie smrteľne jedovatá podobná huba, a preto viaceré príručky radia nezbierať ju, kým sa tieto dve nedajú s istotou odlíšiť.",
        confusion: "Smrteľne jedovatá kapucňovka okrovohnedastá (Galerina marginata) rastie na tom istom dreve, jednotlivo alebo v menších trsoch. Táto huba osychá od stredu k okraju, takže okraj ostáva tmavším vodnatým pásom, kým kapucňovka okrovohnedastá osychá od okraja do stredu. Hlúbik pod prsteňom je tu šupinatý a pri kapucňovke okrovohnedastej býva zvyčajne hodvábny, hoci šupiny sa môžu objaviť aj na nej, takže tento znak nie je celkom spoľahlivý. Vôňa aj chuť sú tu korenisté alebo hubové a mierne. Kapucňovka okrovohnedastá vonia a chutí múčne, alebo po múke až po reďkovke, a jej výtrusy sú väčšie a bradavičnaté. KOH na klobúku tu farbu nemení a klobúk kapucňovky okrovohnedastej sfarbí do červena. Obe sa niekedy dajú odlíšiť len pod mikroskopom. Jedovatá strapcovka zväzkovitá (Hypholoma fasciculare) a príbuzné trsovité strapcovky (Hypholoma) majú sivofialový alebo sivočierny výtrusný prach, hladký hlúbik, slabú hygrofánnu zmenu alebo nijakú a nemajú prsteň. Jedlá strapcovka maková (Hypholoma capnoides) má hladký hlúbik a jej lupene sa menia na sivohnedé až purpurovohnedé. Druhy šupinovky (Pholiota) na tom istom stanovišti majú často šupinatejší klobúk. Niektoré sú slizké a prsteň, ak je prítomný, je vláknitý a čoskoro sa stráca. Nejedlá drobuľka vodomilná (Psathyrella piluliformis) nemá prsteň a jej výtrusný prach je takmer čiernohnedý. Jedlá plamienka zimná (Flammulina velutipes) má tmavší zamatový hlúbik a biely výtrusný prach. Podpňovky (Armillaria), vrátane Armillaria nabsnona na jelši, majú biely výtrusný prach.",
        notes: "Hodnotenie z roku 2019 ho zaraďuje medzi málo dotknuté druhy (Least Concern) a trend populácie v tom hodnotení je stabilný."}
    },
    sources: {
      en: [
        { group: "text", name: "First Nature", href: "https://www.first-nature.com/fungi/kuehneromyces-mutabilis.php" },
        { group: "text", name: "Wikipedia", href: "https://en.wikipedia.org/wiki/Kuehneromyces_mutabilis" },
        { group: "text", name: "MushroomExpert", href: "https://www.mushroomexpert.com/kuehneromyces_mutabilis.html" },
        { group: "text", name: "MykoWeb", href: "https://www.mykoweb.com/Pholiota/species/Pholiota_mutabilis.html", detail: "Smith & Hesler" },
        { group: "text", name: "myko.cz", href: "https://www.myko.cz/myko-atlas/Kuehneromyces-mutabilis/" },
        { group: "text", name: "botany.cz", href: "https://botany.cz/cs/kuehneromyces-mutabilis/", detail: "šupinačka menlivá" },
        { group: "text", name: "Treking.cz", href: "https://www.treking.cz/priroda/openka-menliva.htm" },
        { group: "text", name: "Internet Archive", href: "https://archive.org/details/atlasdeschampign00dufo", detail: "Dufour 1891" },
        { group: "name", name: "Index Fungorum", href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=287387", detail: "287387" },
        { group: "name", name: "Species Fungorum", href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=287387", detail: "287387" },
        { group: "name", name: "Species Fungorum", href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=158909", detail: "158909" },
        { group: "name", name: "Species Fungorum", href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=17884", detail: "17884" },
        { group: "name", name: "MycoBank", href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/287387" },
        { group: "name", name: "GBIF", href: "https://www.gbif.org/species/2533962", detail: "2533962" },
        { group: "name", name: "NCBI", href: "https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=71948", detail: "71948" }
      ],
      sk: [
        { group: "text", name: "nahuby.sk", href: "https://www.nahuby.sk/atlas-hub/Kuehneromyces-mutabilis/supinacka-menliva/openka-menliva/ID711", detail: "šupinačka menlivá" },
        { group: "text", name: "botany.cz", href: "https://botany.cz/cs/kuehneromyces-mutabilis/", detail: "šupinačka menlivá" },
        { group: "name", name: "GBIF", href: "https://www.gbif.org/species/2533962", detail: "2533962" }
      ]
    },
    synonyms: [
      "Agaricus mutabilis Schaeff.",
      "Pholiota mutabilis (Schaeff.) P. Kumm.",
      "Dryophila mutabilis (Schaeff.) Quél.",
      "Galerina mutabilis (Schaeff.) P.D. Orton",
      "Galerina leucolepidota P.D. Orton",
      "Kuehneromyces leucolepidotus (P.D. Orton) Pegler & T.W.K. Young"
    ]
  };


  var GALERINA_MEDIA = "photos/Agaricales/Galerinaceae/Galerina_marginata/";
  var GALERINA = {
    id: 32,
    name: "Galerina marginata",
    author: "(Batsch) Kühner",
    family: "Galerinaceae",
    genus: "Galerina",
    order: "Agaricales",
    edibility: "deadly",
    hymenium: "gills",
    path: ["Fungi", "Dikarya", "Basidiomycota", "Agaricomycotina", "Agaricomycetes", "Agaricomycetidae", "Agaricales", "Galerinaceae", "Galerina"],
    summary: ["Agaricales", "Galerinaceae", "Galerina"],
    added: "2026-10-23",
    plate: STORAGE + GALERINA_MEDIA + "Galerina_marginata@1600.webp",
    plateGrid: STORAGE + GALERINA_MEDIA + "Galerina_marginata@400.webp",
    plateCredit: {
      author: "M. C. Cooke",
      license: "public domain",
      source: "https://www.biodiversitylibrary.org/page/23312156"
    },
    photos: [
      {
        src: STORAGE + GALERINA_MEDIA + "gm1.webp",
        author: "Alan Rockefeller",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Galerina_marginata_Point_Reyes.jpg"
      },
      {
        src: STORAGE + GALERINA_MEDIA + "gm2.webp",
        author: "André De Kesel",
        license: "CC0 1.0",
        licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
        source: "https://commons.wikimedia.org/wiki/File:Galerina_marginata_-_Bundelmosklokje.jpg"
      },
      {
        src: STORAGE + GALERINA_MEDIA + "gm3.webp",
        author: "Dan Molter",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Galerina_marginata_61108.jpg"
      },
      {
        src: STORAGE + GALERINA_MEDIA + "gm4.webp",
        author: "Ryan Hodnett",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Funeral_Bell_(Galerina_marginata)_-_Gatineau_Park_02.jpg"
      }
    ],
    capFrom: 1,
    capTo: 7,
    stipeHeightFrom: 2,
    stipeHeightTo: 8,
    stipeThickFrom: 0.2,
    stipeThickTo: 0.9,
    fruitingFrom: 1,
    fruitingTo: 12,
    label: {
      en: "funeral bell",
      sk: "kapucňovka okrovohnedastá"
    },
    names: {
      en: ["deadly skullcap","autumn skullcap","deadly Galerina","marginate Pholiota"]
    },
    text: {
      en: {
        description: "A wood-rotting mushroom that fruits alone or in small clusters on stumps, fallen trunks, and buried wood. It is widespread in the Northern Hemisphere, through Europe, Asia, and North America, and it is also recorded in Australia and Antarctica. In Britain and Ireland it is uncommon.",
        cap: "The cap is usually 1–7 cm across, occasionally to 8 cm, and a narrower treatment gives 0.5–4 cm. It is hemispherical or bell-shaped at first, then convex to almost flat, sometimes with a low umbo. The margin is inrolled when young and can be translucently striate when moist. The surface is moist and slightly sticky, then shiny or matte. It is hygrophanous, rufous brown to orange-brown at the centre and honey yellow or ochre toward the margin, fading to dull tan as it dries. A pale veil may cling to the margin of a very young cap.",
        hymenium: "The gills are close to crowded and broadly adnate to shortly decurrent, sometimes with a decurrent tooth. They are pale cream or yellowish at first, then ochre to rusty brown, with a paler edge. A whitish partial veil covers them when young, and short gills are present. The basidia are mostly four-spored, less often two-spored, about 21–30 × 5–8.4 μm. Cheilocystidia and pleurocystidia are thin-walled and flask-shaped to fusoid, about 34–75 × 5–16 μm, with a neck and a blunt or slightly enlarged tip. Clamp connections are present.",
        stipe: "The stipe is 2–8 cm long and 0.2–0.9 cm thick, equal or a little thicker downward, often curved, and fragile. It is solid at first and becomes hollow from the base. Above a thin pale ring it is whitish and finely powdery. Below the ring it is brown to reddish brown, with pale fibrils that may leave spots or bands and then disappear. The ring sits on the upper half, turns rusty from the spores, and may be lost, leaving only a zone. White mycelium is often present at the base.",
        flesh: "The flesh is thin and yellowish, dirty yellow, or watery brown. The smell and the taste are mealy, sometimes only faintly.",
        sporePrint: "Rusty brown to snuff brown. The spores are broadly ellipsoid to almond-shaped and finely warted, mostly 7–11 × 4.5–6 μm, occasionally to 11.5 μm long and 7 μm wide. A smooth plage is present, and the outer wall often loosens.",
        habitat: "In Europe fruit bodies appear from May into December, most often in summer and autumn, and central Europe also has an early-spring flush. In temperate North America they appear through the year, most often in spring and autumn. It grows on decaying wood of conifers and broad-leaved trees, on stumps, fallen trunks, branches, sawdust, peeled bark, and buried wood, and it causes a stringy white rot. On floodplain wood it can be among the commonest mushrooms. Groups and small clusters are usual, and solitary fruit bodies occur.",
        uses: "It contains amatoxins, including α-amanitin and γ-amanitin, the same class of toxins as in Amanita phalloides. Symptoms begin several hours after a meal and sometimes not until the next day: severe abdominal pain, vomiting, and diarrhoea. An apparent easing can follow, and then liver damage, gastrointestinal bleeding, kidney failure, coma, or death, often within about a week. A severe poisoning can leave lasting liver and kidney damage. Between 1978 and 1995, ten such poisonings were reported in Europe and North America, two of them fatal.",
        confusion: "Kuehneromyces mutabilis has scales on the stipe up to the ring, a spicy or aromatic smell, smooth spores, and a cap that is often paler at the centre than at the margin. Kuehneromyces vernalis is rarer and closer, and its spores are smooth and have a germ pore. Flammulina velutipes has white to pale yellow gills, a white spore print, smooth elliptical spores 6.5–9 × 2.5–4 μm, no ring, and a stipe that becomes dark and velvety. Hypholoma capnoides has gills that are whitish at first and then grey-blue. Armillaria mellea has a white spore print. Pholiota species often have a scaly cap, a dark brown spore print, and smooth spores.",},
      sk: {
        description: "Drevokazná huba, ktorá plodí jednotlivo alebo v malých trsoch na pňoch, spadnutých kmeňoch a zahrabanom dreve. Rozšírená je na severnej pologuli, v Európe, Ázii a Severnej Amerike, a zaznamenaná je aj v Austrálii a v Antarktíde. V Británii a Írsku je zriedkavá.",
        cap: "Klobúk má zvyčajne 10–70 mm v priemere, občas až 80 mm; užšie poňatie uvádza 5–40 mm. Za mladi je polguľovitý alebo zvoncovitý, potom klenutý až takmer plochý, niekedy s nízkym hrboľom. Okraj je za mladi podvinutý a za vlhka môže byť priesvitne ryhovaný. Povrch je vlhký a slabo lepkavý, potom lesklý alebo matný. Je hygrofánny, v strede ryšavohnedý až oranžovohnedý a k okraju medovožltý alebo okrový, pri osychaní bledne do matne plavej farby. Na okraji veľmi mladého klobúka môže ostať bledý závoj.",
        hymenium: "Lupene sú dosť husté až husté, široko prirastené až krátko zbiehavé, niekedy so zbiehavým zúbkom. Najprv sú bledokrémové alebo žltkasté, potom okrové až hrdzavohnedé, s bledším ostrím. Za mladi ich kryje belavý čiastočný závoj a sú prítomné aj krátke lupienky. Bazídiá sú väčšinou štvorvýtrusné, zriedkavejšie dvojvýtrusné, veľké asi 21–30 × 5–8,4 μm. Cheilocystidy a pleurocystidy sú tenkostenné, fľaškovité až vretenovité, veľké asi 34–75 × 5–16 μm, s hrdlom a s tupým alebo slabo rozšíreným vrcholom. Spojky sú prítomné.",
        stipe: "Hlúbik je dlhý 20–80 mm a hrubý 2–9 mm, valcovitý alebo dolu trochu hrubší, často prehnutý a krehký. Najprv je plný a od bázy sa stáva dutým. Nad tenkým bledým prsteňom je belavý a jemne poprášený. Pod prsteňom je hnedý až červenohnedý, s bledými vláknami, ktoré môžu zanechať škvrny alebo pásy a potom zmiznúť. Prsteň sedí v hornej polovici, od výtrusov hrdzavie a môže sa stratiť, takže ostane len zóna. Na báze býva často biele mycélium.",
        flesh: "Dužina je tenká, žltkastá, špinavožltá alebo vodnato hnedá. Vôňa aj chuť sú múčne, niekedy len slabo.",
        sporePrint: "Výtrusný prach je hrdzavohnedý až tabakovohnedý. Výtrusy sú široko elipsoidné až mandľovité a jemne bradavičnaté, väčšinou veľké 7–11 × 4,5–6 μm, občas až 11,5 μm dlhé a 7 μm široké. Majú hladkú suprahilárnu plôšku (plage) a vonkajšia stena sa často odlučuje.",
        habitat: "V Európe sa plodnice objavujú od mája do decembra, najčastejšie v lete a na jeseň, a stredná Európa má aj skorú jarnú vlnu. V miernom pásme Severnej Ameriky sa objavujú po celý rok, najčastejšie na jar a na jeseň. Rastie na tlejúcom dreve ihličnanov aj listnáčov, na pňoch, spadnutých kmeňoch, konároch, pilinách, olúpanej kôre a zahrabanom dreve a spôsobuje vláknitú bielu hnilobu. Skupiny a malé trsy sú obvyklé, vyskytujú sa aj jednotlivé plodnice. Na Slovensku rastie na dreve ihličnanov aj listnáčov a v lužných lesoch býva medzi najhojnejšími hubami.",
        uses: "Je smrteľne jedovatá. Obsahuje amatoxíny vrátane α-amanitínu a γ-amanitínu, teda rovnakú skupinu toxínov ako muchotrávka zelená (Amanita phalloides). Príznaky sa začínajú niekoľko hodín po jedle a niekedy až na druhý deň: silná bolesť brucha, vracanie a hnačka. Môže nasledovať zdanlivé zlepšenie a potom poškodenie pečene, krvácanie do tráviaceho traktu, zlyhanie obličiek, kóma alebo smrť, často približne do týždňa. Ťažká otrava môže zanechať trvalé poškodenie pečene a obličiek. V rokoch 1978 až 1995 bolo v Európe a Severnej Amerike hlásených desať takýchto otráv, z toho dve smrteľné.",
        confusion: "Jedlá šupinačka menlivá (Kuehneromyces mutabilis) má na hlúbiku šupiny až po prsteň, korenistú alebo aromatickú vôňu, hladké výtrusy a klobúk, ktorý je v strede často bledší ako na okraji. Zriedkavejšia a bližšia je Kuehneromyces vernalis, ktorej výtrusy sú hladké a majú klíčny pór. Jedlá plamienka zimná (Flammulina velutipes) má biele až bledožlté lupene, biely výtrusný prach, hladké elipsoidné výtrusy veľké 6,5–9 × 2,5–4 μm, nemá prsteň a jej hlúbik tmavne a stáva sa zamatovým. Jedlá strapcovka maková (Hypholoma capnoides) má lupene najprv belavé a potom sivomodré. Jedlá podpňovka obyčajná (Armillaria mellea) má biely výtrusný prach. Druhy šupinovky (Pholiota) majú často šupinatý klobúk, tmavohnedý výtrusný prach a hladké výtrusy.",}
    },
    sources: {
      en: [
        { group: "text", name: "First Nature", href: "https://www.first-nature.com/fungi/galerina-marginata.php" },
        { group: "text", name: "Wikipedia", href: "https://en.wikipedia.org/wiki/Galerina_marginata" },
        { group: "text", name: "MushroomExpert", href: "https://www.mushroomexpert.com/galerina_marginata.html" },
        { group: "text", name: "myko.cz", href: "https://www.myko.cz/myko-atlas/Galerina-marginata/" },
        { group: "text", name: "Грибы Сибири", href: "https://mycology.su/galerina-marginata.html" },
        { group: "text", name: "nahuby.sk", href: "https://www.nahuby.sk/atlas_hub_dvojniky_detail.php?dvojniky_id=1" },
        { group: "text", name: "BHL", href: "https://www.biodiversitylibrary.org/page/23312156", detail: "Cooke plate 403" },
        { group: "name", name: "Index Fungorum", href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=253217", detail: "253217" },
        { group: "name", name: "Species Fungorum", href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=253217", detail: "253217" },
        { group: "name", name: "Species Fungorum", href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=144051", detail: "144051" },
        { group: "name", name: "Species Fungorum", href: "https://www.speciesfungorum.org/Names/genusrecord.asp?RecordID=17631", detail: "17631" },
        { group: "name", name: "MycoBank", href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/253217" },
        { group: "name", name: "GBIF", href: "https://www.gbif.org/species/8118872", detail: "8118872" },
        { group: "name", name: "NCBI", href: "https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=109633", detail: "109633" }
      ],
      sk: [
        { group: "text", name: "nahuby.sk", href: "https://www.nahuby.sk/atlas-hub/Galerina-marginata/kapucnovka-okrovohnedasta/cepicatka-jehlicnanova/ID188", detail: "kapucňovka okrovohnedastá" }
      ]
    },
    synonyms: ["Agaricus marginatus Batsch","Galera marginata (Batsch) P. Kumm.","Pholiota marginata (Batsch) Quél.","Dryophila marginata (Batsch) Quél.","Flammula marginata (Batsch) Fayod","Ryssospora marginata (Batsch) Fayod","Galerula marginata (Batsch) Kühner","Agaricus unicolor Vahl","Pholiota unicolor (Vahl) Gillet","Dryophila unicolor (Vahl) Quél.","Galerula unicolor (Vahl) Kühner","Galerina unicolor (Vahl) Singer","Agaricus mustelinus Fr.","Pholiota mustelina Quél.","Dryophila mustelina (Quél.) Quél.","Ryssospora mustelina (Quél.) Fayod","Agaricus autumnalis Peck","Naucoria autumnalis (Peck) Sacc.","Pholiota autumnalis (Peck) Peck","Gymnopilus autumnalis (Peck) Murrill","Galerina autumnalis (Peck) A.H. Sm. & Singer"]
  };


  var SPARASSIS_MEDIA = "photos/Polyporales/Sparassidaceae/Sparassis_crispa/";
  var SPARASSIS = {
    id: 33,
    name: "Sparassis crispa",
    author: "(Wulfen) Fr.",
    family: "Sparassidaceae",
    genus: "Sparassis",
    order: "Polyporales",
    edibility: "choice",
    hymenium: "smooth",
    path: ["Fungi", "Dikarya", "Basidiomycota", "Agaricomycotina", "Agaricomycetes", "Incertae sedis", "Polyporales", "Sparassidaceae", "Sparassis"],
    summary: ["Polyporales", "Sparassidaceae", "Sparassis"],
    added: "2026-10-23",
    plate: STORAGE + SPARASSIS_MEDIA + "Sparassis_crispa@1600.webp",
    plateGrid: STORAGE + SPARASSIS_MEDIA + "Sparassis_crispa@400.webp",
    plateCredit: {
      author: "L. Dufour",
      license: "public domain",
      source: "https://www.biodiversitylibrary.org/page/3270858"
    },
    photos: [
      {
        src: STORAGE + SPARASSIS_MEDIA + "sc1.webp",
        author: "Achim Lammerts",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:2025-08-29_D500-0564_Achim_Lammerts_Krause_Glucke_(Sparassis_crispa).jpg"
      },
      {
        src: STORAGE + SPARASSIS_MEDIA + "sc2.webp",
        author: "Achim Lammerts",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:2025-11-04_D500-1685_Achim_Lammerts_Sparassis-crispa.jpg"
      },
      {
        src: STORAGE + SPARASSIS_MEDIA + "sc3.webp",
        author: "Gerda Arendt",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Cauliflower_fungus,_Ehrenbach.jpg"
      },
      {
        src: STORAGE + SPARASSIS_MEDIA + "sc4.webp",
        author: "AndyScott",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Holmbury_St_Mary,_Hurt_Wood,_Sparassis_crispa.jpg"
      },
      {
        src: STORAGE + SPARASSIS_MEDIA + "sc5.webp",
        author: "Henk Monster",
        license: "CC BY 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by/3.0",
        source: "https://commons.wikimedia.org/wiki/File:A_young_Sparassis_crispa_(Wood_Cauliflower,_D%3D_Krause_Gluck_or_Fette_Henne,_F%3D_Sparassis_cr%C3%A9pu_Syn._chou-fleur,_NL%3D_Grote_sponszwam)_white_spores_and_causes_white_rot,_at_the_foot_of_a_firtree_at_Warnsborn_forest_-_panoramio.jpg"
      }
    ],
    capFrom: 10,
    capTo: 40,
    fruitingFrom: 7,
    fruitingTo: 12,
    label: {
      en: "cauliflower fungus",
      sk: "kučierka veľká"
    },
    names: {
      en: ["wood cauliflower", "cauliflower mushroom", "brain fungus"],
      sk: ["barania hlava"]
    },
    text: {
      en: {
        description: "A brown-rot fungus of conifer woods, parasitic on living roots and saprotrophic on stumps, most often with pine. It is widespread from the Mediterranean through central Europe to northern Scotland and the southern coasts of Scandinavia, and it is reported from North Africa. North American records under this name, and some Asian ones, are other species in the same complex.",
        cap: "The fruit body is commonly 10–40 cm across and about 10–25 cm tall. Smaller ones are about 5 cm across and 5 cm tall, and large ones weigh several kilograms, to about 6 kg. It is irregularly rounded, a dense mass of flattened, wavy, curled lobes with toothed edges, fused in places and leaving cavities between them. The lobes are whitish or cream at first, then yellowish, and brownish in age, sometimes with a darker margin as they dry. Young lobes are tough and rubbery and later become softer. A dry fruit body is brittle.",
        hymenium: "The fertile surface is smooth and whitish to cream, and it darkens as the spores mature. It covers both faces of the lobes, though some accounts find it developed mostly on the lower face of the flattened tips.",
        stipe: "A short, thick, fleshy base is often buried in the soil or the root wood. It is cylindrical and rooting, whitish to cream, and blackish toward the attachment. In a fully grown fruit body it may be hidden.",
        flesh: "The flesh is white, elastic, and waxy, and the hyphal system is monomitic, with clamp connections. The odour is spicy and faintly sweet, sometimes a little like anise, and weakly resinous when raw. The taste is nutty, and it may be mildly hot.",
        sporePrint: "White, off-white, or cream, and also described as pale yellowish to pale ochre. Old lobes may look dusted orange-ochre. The spores are smooth, ellipsoid to broadly ellipsoid or ovoid, about 4.5–7.5 × 3–5.5 μm, and often contain one oil drop.",
        habitat: "Fruit bodies appear from July to December in central Europe, with a peak in September and October, from July to October in Britain and Ireland and into November in some accounts, from August to October in Slovakia, and from July to November in Czech accounts. They grow at the base of living conifers or on stumps, especially Scots pine, and also on other pines, spruce, larch, and occasionally Douglas fir. The fungus enters through wounds in the roots or the lower trunk and causes a brown rot of the heartwood. The decayed wood smells of turpentine. It can live on in the stump for several years and infect new trees from there. It occurs on many soils that are neither very dry nor very wet. In Slovakia it is most often in pine woods on sandy soil, including the Záhorie.",
        uses: "It is a choice edible mushroom when young and fresh. Once the lobes turn brown and the fruit body starts to decay it becomes indigestible and is left. The flesh is a little cartilaginous raw and stays firm when cooked. It is used in soups, including a mock tripe soup, fried, and dried for sauces. Needles, soil, and grubs lodge in the folds. A brief blanch, about 2–3 minutes in one account, makes the mass elastic and easier to rinse under water, and it can also be sliced a few centimetres thick and soaked. It is cooked slowly. It keeps for a week or more in the refrigerator, and it can be dried or preserved in oil or cold water.",
        confusion: "Sparassis brevipes has broader, less curled, spatula-like lobe tips, often with a pale thickened rim, and it lacks clamp connections. Its odour is soapy. It grows on fir, and less often on beech, spruce, or larch, and it is also reported with pine. Sparassis spathulata has straighter, more erect fronds and grows with broadleaf trees in eastern North America, though it is also reported with pine. Sparassis radicata is kept separate in western North America, where it has a long rooting base. Grifola frondosa grows at the base of oaks and has grey-brown fan-shaped segments with pores on the underside. Species of Ramaria have upright branches that are not flattened and curled at the tips. Artomyces pyxidatus and Artomyces microsporus grow on solid dead wood, and their upright branches end in small crowns.",},
      sk: {
        description: "Huba ihličnatých lesov spôsobujúca hnedú hnilobu, parazitická na živých koreňoch a saprotrofná na pňoch, najčastejšie pri borovici. Rozšírená je od Stredomoria cez strednú Európu po severné Škótsko a južné pobrežia Škandinávie a uvádza sa aj zo severnej Afriky. Severoamerické nálezy pod týmto menom, a niektoré ázijské, patria iným druhom toho istého komplexu.",
        cap: "Plodnica meria zvyčajne 10–40 cm v priemere a asi 10–25 cm na výšku. Menšie plodnice merajú asi 5 cm v priemere a 5 cm na výšku, veľké vážia niekoľko kilogramov, až okolo 6 kg. Je nepravidelne zaokrúhlená a tvorí hustú masu sploštených, vlnitých a kučeravých lalokov so zúbkatými okrajmi, miestami zrastených, s dutinami medzi nimi. Laloky sú najprv belavé alebo krémové, potom žltkasté a v starobe hnedasté, pri osychaní niekedy s tmavším okrajom. Mladé laloky sú tuhé a gumovité a neskôr mäknú. Suchá plodnica je krehká.",
        hymenium: "Plodný povrch je hladký, belavý až krémový, a pri dozrievaní výtrusov tmavne. Pokrýva obe strany lalokov, hoci v niektorých opisoch je vyvinutý najmä na spodnej strane sploštených koncov.",
        stipe: "Krátky, hrubý a mäsitý hlúbik býva často zahrabaný v pôde alebo v dreve koreňa. Je valcovitý a zakoreňujúci, belavý až krémový a k miestu prirastenia černastý. Na dorastenej plodnici môže byť skrytý.",
        flesh: "Dužina je biela, pružná a voskovitá. Hýfový systém je monomitický, so spojkami. Vôňa je korenistá a jemne sladkastá, niekedy trochu po aníze, a za surova slabo živicová. Chuť je oriešková a môže byť mierne pálivá.",
        sporePrint: "Biely, takmer biely alebo krémový; uvádza sa aj ako bledožltkastý až bledookrový. Staré laloky môžu byť poprášené oranžovým okrom. Výtrusy sú hladké, elipsoidné až široko elipsoidné alebo vajcovité, veľké asi 4,5–7,5 × 3–5,5 μm, a často majú jednu olejovú kvapku.",
        habitat: "Plodnice sa v strednej Európe objavujú od júla do decembra, s vrcholom v septembri a októbri, v Británii a Írsku od júla do októbra a podľa niektorých opisov aj do novembra, na Slovensku od augusta do októbra a v českých opisoch od júla do novembra. Rastú na báze živých ihličnanov alebo na pňoch, najmä pri borovici lesnej, a tiež pri iných boroviciach, smreku, smrekovci a príležitostne pri duglaske tisolistej. Huba vniká cez rany na koreňoch alebo v dolnej časti kmeňa a spôsobuje hnedú hnilobu jadrového dreva. Rozložené drevo vonia po terpentíne. V pni môže prežívať niekoľko rokov a odtiaľ nakaziť nové stromy. Vyskytuje sa na mnohých pôdach, ktoré nie sú ani veľmi suché, ani veľmi mokré. Na Slovensku rastie najčastejšie v borovicových lesoch na piesočnatej pôde, vrátane Záhoria.",
        uses: "Za mladi a za čerstva je to výborná jedlá huba. Keď laloky zhnednú a plodnica sa začína kaziť, stáva sa nestráviteľnou a necháva sa. Dužina je za surova trochu chrupkovitá a po uvarení ostáva pevná. Používa sa do polievok, aj do polievky na spôsob držkovej, smaží sa a suší sa do omáčok. V záhyboch sa zachytávajú ihličie, pôda a larvy. Krátke blanšírovanie, v jednom opise asi 2–3 minúty, urobí hmotu pružnou, takže sa ľahšie preplachuje pod vodou; dá sa aj nakrájať na niekoľko centimetrov hrubé plátky a namočiť. Varí sa pomaly. V chladničke vydrží týždeň aj dlhšie a dá sa sušiť alebo uchovať v oleji či v studenej vode.",
        confusion: "Kučierka jedľová (Sparassis brevipes) má širšie, menej kučeravé, lopatkovité konce lalokov, často s bledým zhrubnutým okrajom, a nemá spojky. Má mydlovú vôňu. Rastie na jedli, menej často na buku, smreku alebo smrekovci, a uvádza sa aj pri borovici. Sparassis spathulata má rovnejšie, vzpriamenejšie laloky a rastie pri listnáčoch vo východnej Severnej Amerike, uvádza sa však aj pri borovici. Sparassis radicata sa v západnej Severnej Amerike vedie ako samostatný druh a má dlhú zakoreňujúcu bázu. Trsovnica lupeňovitá (Grifola frondosa) rastie na báze dubov a má sivohnedé vejárovité úkrojky s pórmi na spodnej strane. Druhy strapačky (Ramaria) majú vzpriamené konáre, ktoré nie sú na koncoch sploštené a kučeravé. Korunovec svietnikovitý (Artomyces pyxidatus) a korunkovec (Artomyces microsporus) rastú na pevnom odumretom dreve a ich vzpriamené konáre sa končia malými korunkami.",}
    },
    sources: {
      en: [
        { group: "text", name: "First Nature", href: "https://www.first-nature.com/fungi/sparassis-crispa.php" },
        { group: "text", name: "Wikipedia", href: "https://en.wikipedia.org/wiki/Sparassis_crispa" },
        { group: "text", name: "Wild Food UK", href: "https://www.wildfooduk.com/mushroom-guide/cauliflower-fungus/" },
        { group: "text", name: "de.wikipedia", href: "https://de.wikipedia.org/wiki/Krause_Glucke" },
        { group: "text", name: "myko.cz", href: "https://www.myko.cz/myko-atlas/Sparassis-crispa" },
        { group: "text", name: "nahuby.sk", href: "https://www.nahuby.sk/atlas-hub/Sparassis-crispa/kucierka-velka/kotrc-kaderavy/ID226" },
        { group: "text", name: "grzyby.pl", href: "https://grzyby.pl/gatunki/Sparassis_crispa.htm" },
        { group: "text", name: "Fungipedia", href: "https://www.fungipedia.org/en/hongos/sparassis-crispa.html" },
        { group: "text", name: "FUNGI Magazine", href: "https://fungimag.com/fall-09-articles/sparassis.pdf" },
        { group: "text", name: "BHL", href: "https://www.biodiversitylibrary.org/page/3270858", detail: "Dufour plate" },
        { group: "name", name: "Index Fungorum", href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=228848", detail: "228848" },
        { group: "name", name: "Species Fungorum", href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=228848", detail: "228848" },
        { group: "name", name: "MycoBank", href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/228848" },
        { group: "name", name: "GBIF", href: "https://www.gbif.org/species/2550247", detail: "2550247" }
      ],
      sk: [
        { group: "text", name: "nahuby.sk", href: "https://www.nahuby.sk/atlas-hub/Sparassis-crispa/kucierka-velka/kotrc-kaderavy/ID226", detail: "kučierka veľká" }
      ]
    },
    synonyms: ["Clavaria crispa Wulfen", "Merisma crispum (Wulfen) Ehrenb.", "Masseeola crispa (Wulfen) Kuntze", "Manina crispa Scop.", "Clavaria crispa (Scop.) Sacc."]
  };

  var PAXILLUS_MEDIA = "photos/Boletales/Paxillaceae/Paxillus_involutus/";
  var PAXILLUS = {
    id: 34,
    name: "Paxillus involutus",
    author: "(Batsch) Fr.",
    family: "Paxillaceae",
    genus: "Paxillus",
    order: "Boletales",
    edibility: "deadly",
    hymenium: "gills",
    path: ["Fungi", "Dikarya", "Basidiomycota", "Agaricomycotina", "Agaricomycetes", "Agaricomycetidae", "Boletales", "Paxillaceae", "Paxillus"],
    summary: ["Boletales", "Paxillaceae", "Paxillus"],
    added: "2026-10-23",
    plate: STORAGE + PAXILLUS_MEDIA + "Paxillus_involutus@1600.webp",
    plateGrid: STORAGE + PAXILLUS_MEDIA + "Paxillus_involutus@400.webp",
    plateCredit: {
      author: "L. Dufour",
      license: "public domain",
      source: "https://www.biodiversitylibrary.org/page/3270728"
    },
    photos: [
      {
        src: STORAGE + PAXILLUS_MEDIA + "pi1.webp",
        author: "Holger Krisp",
        license: "CC BY 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Kahler-Krempling-Paxillus-involutus.jpg"
      },
      {
        src: STORAGE + PAXILLUS_MEDIA + "pi2.webp",
        author: "Achim Lammerts",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:2025-10-15_D500-0990_Achim-Lammerts_Paxillus-involutus.jpg"
      },
      {
        src: STORAGE + PAXILLUS_MEDIA + "pi3.webp",
        author: "Achim Lammerts",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:2025-10-18_D500-1105_Achim-Lammerts_Paxillus-involutus.jpg"
      },
      {
        src: STORAGE + PAXILLUS_MEDIA + "pi4.webp",
        author: "Gouwenaar",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:20201015_gewone_krulzoom2.jpeg"
      },
      {
        src: STORAGE + PAXILLUS_MEDIA + "pi5.webp",
        author: "Agnes Monkelbaan",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:De_gewone_krulzoom_(Paxillus_involutus)._Locatie,_Paddenstoelenreservaat._11-10-2021._(actm.)_02.jpg"
      }
    ],
    capFrom: 4,
    capTo: 12,
    stipeHeightFrom: 3,
    stipeHeightTo: 8,
    stipeThickFrom: 1,
    stipeThickTo: 2,
    fruitingFrom: 6,
    fruitingTo: 11,
    label: {
      en: "brown roll-rim",
      sk: "čechračka podvinutá"
    },
    names: {
      en: ["common roll-rim", "naked brimcap", "poison paxillus", "inrolled pax", "poison pax", "brown chanterelle", "involved navel-stool"]
    },
    text: {
      en: {
        description: "An ectomycorrhizal mushroom of broadleaf and coniferous woods, parks, and gardens. In Europe it ranges from Scandinavia to the Iberian Peninsula, and it also occurs in temperate Asia and northern North America. It has been introduced with planted trees to Australia, New Zealand, South Africa, and South America.",
        cap: "The cap is commonly 4–12 cm across, with published extremes of about 2–15 cm and, in one account, about 20 cm. It is hemispherical or convex at first, then flattened, and later depressed to funnel-shaped. The margin stays strongly inrolled for a long time and is downy or felty, and it may become grooved in age. The surface is finely felted when young, later smoother, and slightly sticky when wet. The colour runs from ochre-brown and yellow-brown to olive-brown or rusty brown, and bruising and age darken it.",
        hymenium: "The gills are crowded, narrow, and deeply decurrent. They fork, and near the stipe they join into a net or become pore-like. They peel away from the flesh as a layer. They are pale yellow to pale ochre at first, later rusty brown, and bruising turns them brown to dark brown. Cheilocystidia and pleurocystidia are slender and filament-like, about 40–65 × 8–10.5 μm.",
        stipe: "The stipe matches the cap or is a little paler, yellowish to brown, and it darkens where handled. It is cylindrical, often curved, and tapered toward the base, and it has no ring. It is commonly 3–8 cm long and about 1–2 cm thick. Published figures also give about 3–6 × 1–3 cm. It is solid.",
        flesh: "The flesh is pale yellow to yellowish, firm and juicy, and it browns where cut. Cooking blackens it, and it gives off a lot of juice. The odour is faint and not distinctive, sometimes slightly mushroomy. The taste is sour. The brown bruise is caused by the phenol involutin.",
        sporePrint: "Sienna, ochre-brown, or rusty brown. The spores are ellipsoid and smooth. Published measurements are about 7.5–9 × 5–6 μm and about 6.5–8.5 × 4.5–5 μm.",
        habitat: "Fruit bodies appear from June to November in central Europe, and from July to October in Britain and Ireland. Elsewhere they appear in late summer and autumn. In coastal California, fruit bodies associated with oak and pine appear from late autumn into winter, and a form with birch plantings appears in autumn. They grow singly or in groups on the ground in broadleaf and conifer woods, parks, gardens, lawns, and along paths, often under birch and also with oak, beech, pine, spruce, and other trees. They favour moist ground and soils that are acid or at least not rich in lime. They are sometimes found on woody debris around stumps.",
        uses: "It was widely eaten in central and eastern Europe, often pickled, salted, or cooked in stews, and it was regarded as poor. It is still salted and pickled in parts of eastern Europe, especially in Poland. Raw fruit bodies cause severe gastric illness. Cooking does not remove an antigen that, after repeated meals, can make the immune system destroy red blood cells. The reaction can lead to kidney failure, shock, and respiratory failure, including in people who had eaten it for years with only mild stomach upset. Julius Schäffer died in 1944, seventeen days after a meal of it.",
        confusion: "Funnel-shaped mushrooms in Clitocybe have white gills and a white spore print. Lactarius turpis is darker olive and, like other Lactarius, exudes milk. Paxillus rubicundulus, also filed as Paxillus filamentosus, grows only with alder. It is smaller and paler, with a thin cap that has flattened scales toward the margin, flesh that barely browns, deep yellow-ochre gills that do not change colour, and smaller spores, about 5.5–8.5 × 4–5 μm. Paxillus obscurisporus has caps to about 40 cm, a margin that tends to unroll and flatten, and a tapered stipe with cream mycelium at the base. Paxillus validus grows under broadleaf trees in parks, has a stipe of more or less equal width, and caps to about 20 cm. Crystals in its rhizomorphs reach about 2.5 μm, while crystals in other Paxillus rhizomorphs stay under about 0.5 μm. Paxillus cuprinus turns copper-brown with age, has somewhat almond-shaped spores with a pinched apex, and grows with birch in open places. Paxillus vernalis has a darker spore print and a thicker stipe, about 2–4 cm, and grows under aspen and birch. Tapinella atrotomentosa grows on or beside conifer stumps and has a short thick stipe covered in dark brown velvet. Tapinella panuoides has no stipe, or only a short lateral one, and grows on conifer wood.",
        notes: "Several similar species were later separated from fruit bodies filed under this name."},
      sk: {
        description: "Ektomykorízna huba listnatých a ihličnatých lesov, parkov a záhrad. V Európe siaha od Škandinávie po Pyrenejský polostrov a vyskytuje sa aj v miernej Ázii a na severe Severnej Ameriky. So sadenými stromami bola zavlečená do Austrálie, na Nový Zéland, do Južnej Afriky a do Južnej Ameriky.",
        cap: "Klobúk máva v priemere 4–12 cm, s uverejnenými krajnými hodnotami asi 2–15 cm a v jednom údaji asi 20 cm. Za mladi je polguľovitý alebo klenutý, potom sploštený a neskôr preliačený až lievikovitý. Okraj ostáva dlho výrazne podvinutý, je páperistý alebo plstnatý a v starobe môže byť ryhovaný. Povrch je za mladi jemne plstnatý, neskôr hladší a za vlhka mierne lepkavý. Farba prechádza od okrovohnedej a žltohnedej po olivovohnedú alebo hrdzavohnedú a otlačením aj vekom tmavne.",
        hymenium: "Lupene sú husté, úzke a hlboko zbiehavé. Vidlicovito sa rozkonárujú a pri hlúbiku sa spájajú do siete alebo sú pórovité. Od dužiny sa dajú odlúpnuť ako súvislá vrstva. Najprv sú bledožlté až svetlookrové, neskôr hrdzavohnedé a po otlačení hnednú až tmavohnednú. Cheilocystidy a pleurocystidy sú štíhle a vláknité, asi 40–65 × 8–10,5 μm.",
        stipe: "Hlúbik má farbu klobúka alebo je o niečo bledší, žltkastý až hnedý, a na dotykových miestach tmavne. Je valcovitý, často prehnutý a k báze zúžený a nemá prsteň. Býva dlhý 3–8 cm a hrubý asi 1–2 cm. Uverejnené údaje uvádzajú aj asi 3–6 × 1–3 cm. Je plný.",
        flesh: "Dužina je bledožltá až žltkastá, pevná a šťavnatá a na reze hnedne. Varením černie a vypúšťa veľa šťavy. Vôňa je slabá a nevýrazná, niekedy mierne hubová. Chuť je kyslastá. Hnedé otlačenie spôsobuje fenol involutín.",
        sporePrint: "Sienová, okrovohnedá alebo hrdzavohnedá. Výtrusy sú elipsoidné a hladké. Uverejnené rozmery sú asi 7,5–9 × 5–6 μm a asi 6,5–8,5 × 4,5–5 μm.",
        habitat: "Plodnice sa objavujú od júna do novembra v strednej Európe a od júla do októbra v Británii a Írsku. Inde sa objavujú v neskorom lete a na jeseň. Na pobreží Kalifornie sa plodnice viazané na dub a borovicu objavujú od neskorej jesene do zimy a forma pri vysadených brezách na jeseň. Rastú jednotlivo alebo v skupinách na zemi v listnatých a ihličnatých lesoch, v parkoch, záhradách, na trávnikoch a pozdĺž chodníkov, často pod brezou a aj s dubom, bukom, borovicou, smrekom a inými drevinami. Vyhovujú im vlhké pôdy, kyslé alebo aspoň nie bohaté na vápno. Niekedy rastú aj na drevných zvyškoch okolo pňov.",
        uses: "V strednej a východnej Európe sa hojne jedla, často nakladaná, solená alebo dusená, a pokladala sa za podradnú. V častiach východnej Európy, najmä v Poľsku, sa ešte solí a nakladá. Surové plodnice spôsobujú ťažkú žalúdočnú poruchu. Varenie neodstráni antigén, ktorý po opakovaných jedlách môže spôsobiť, že imunitný systém ničí červené krvinky. Reakcia môže viesť k zlyhaniu obličiek, šoku a zlyhaniu dýchania, aj u ľudí, ktorí ju roky jedli len s miernymi žalúdočnými ťažkosťami. Julius Schäffer zomrel v roku 1944, sedemnásť dní po jedle z nej.",
        confusion: "Lievikovité huby rodu strmuľka (Clitocybe) majú biele lupene a biely výtrusný prach. Rýdzik odporný (Lactarius turpis) je tmavšie olivový a ako iné rýdziky (Lactarius) roní mlieko. Čechračka jelšová (Paxillus rubicundulus), uvádzaná aj ako Paxillus filamentosus, rastie len s jelšou. Je menšia a bledšia, s tenkým klobúkom, ktorý má smerom k okraju pritisnuté šupiny, s dužinou, ktorá takmer nehnedne, so sýto žltookrovými lupeňmi, ktoré nemenia farbu, a s menšími výtrusmi, asi 5,5–8,5 × 4–5 μm. Paxillus obscurisporus má klobúky až asi 40 cm, okraj, ktorý sa skôr rozvinie a sploští, a k báze zúžený hlúbik s krémovým mycéliom. Paxillus validus rastie pod listnáčmi v parkoch, má hlúbik viac-menej rovnakej hrúbky a klobúky až asi 20 cm. Kryštály v jeho rizomorfách dosahujú asi 2,5 μm, kým kryštály v rizomorfách iných druhov rodu Paxillus ostávajú pod asi 0,5 μm. Paxillus cuprinus v starobe medenohnedne, má trochu mandľovité výtrusy so stiahnutým vrcholom a rastie s brezou na otvorených miestach. Čechračka parková (Paxillus vernalis) má tmavší výtrusný prach a hrubší hlúbik, asi 2–4 cm, a rastie pod osikou a brezou. Čechračka tmavohlúbiková (Tapinella atrotomentosa) rastie na pňoch ihličnanov alebo vedľa nich a má krátky hrubý hlúbik pokrytý tmavohnedým zamatom. Čechračka lastúrovitá (Tapinella panuoides) nemá hlúbik, alebo len krátky bočný, a rastie na dreve ihličnanov.",
        notes: "Viaceré podobné druhy boli neskôr oddelené od plodníc vedených pod týmto menom. Na Slovensku je zaznamenaná na kyslých piesčitých a na živiny chudobných pôdach, aj v mokradiach, najmä pod smrekmi, borovicami a brezami.",
      }
    },
    sources: {
      en: [
        { group: "text", name: "Wikipedia", href: "https://en.wikipedia.org/wiki/Paxillus_involutus" },
        { group: "text", name: "First Nature", href: "https://www.first-nature.com/fungi/paxillus-involutus.php" },
        { group: "text", name: "MushroomExpert", href: "https://www.mushroomexpert.com/paxillus_involutus.html" },
        { group: "text", name: "de.wikipedia", href: "https://de.wikipedia.org/wiki/Kahler_Krempling" },
        { group: "text", name: "cs.wikipedia", href: "https://cs.wikipedia.org/wiki/%C4%8Cechratka_podvinut%C3%A1" },
        { group: "text", name: "myko.cz", href: "https://www.myko.cz/myko-atlas/Paxillus-involutus/" },
        { group: "text", name: "botany.cz", href: "https://botany.cz/cs/paxillus-involutus/" },
        { group: "text", name: "Treking.cz", href: "https://www.treking.cz/priroda/cechratka-podvinuta.htm" },
        { group: "text", name: "englishfungi.org", href: "https://www.englishfungi.org/Species/Paxillus%20involutus" },
        { group: "text", name: "PubMed", href: "https://pubmed.ncbi.nlm.nih.gov/24433674/", detail: "epitype" },
        { group: "text", name: "BHL", href: "https://www.biodiversitylibrary.org/page/3270728", detail: "Dufour plate" },
        { group: "name", name: "Index Fungorum", href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=191172", detail: "191172" },
        { group: "name", name: "Species Fungorum", href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=191172", detail: "191172" },
        { group: "name", name: "MycoBank", href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/191172" },
        { group: "name", name: "GBIF", href: "https://www.gbif.org/species/5240002", detail: "5240002" }
      ],
      sk: [
        { group: "text", name: "Encyclopaedia Beliana", href: "https://beliana.sav.sk/heslo/cechracka", detail: "čechračka podvinutá" },
        { group: "text", name: "Spravodajca SMS", href: "http://mykospol.sk/wp-content/uploads/2019/04/Spravodajca_c-372008.pdf", detail: "Lizoň 2008" },
        { group: "text", name: "botany.cz", href: "https://botany.cz/cs/paxillus-involutus/", detail: "čechračka podvinutá" },
        { group: "text", name: "Treking.cz", href: "https://www.treking.cz/priroda/cechratka-podvinuta.htm", detail: "čechračka podvinutá" },
        { group: "text", name: "botany.cz", href: "https://botany.cz/cs/paxillus-rubicundulus/", detail: "čechračka jelšová" },
        { group: "text", name: "nahuby.sk", href: "https://www.nahuby.sk/atlas-hub/Paxillus-involutus/cechracka-podvinuta/cechratka-podvinuta/ID21", detail: "čechračka podvinutá" }
      ]
    },
    synonyms: ["Agaricus involutus Batsch", "Omphalia involuta (Batsch) Gray", "Ruthea involuta (Batsch) Opat.", "Rhymovis involuta (Batsch) Rabenh.", "Tapinia involuta (Batsch) Pat.", "Agaricus contiguus Bull.", "Agaricus adscendibus Bolton", "Paxillus leptopus Fr."]
  };

  var LEPISTA_MEDIA = "photos/Agaricales/Tricholomataceae/Lepista_nuda/";
  var LEPISTA = {
    id: 35,
    name: "Lepista nuda",
    author: "(Bull.) Cooke",
    family: "Tricholomataceae",
    genus: "Lepista",
    order: "Agaricales",
    edibility: "choice",
    hymenium: "gills",
    path: ["Fungi", "Dikarya", "Basidiomycota", "Agaricomycotina", "Agaricomycetes", "Agaricomycetidae", "Agaricales", "Tricholomataceae", "Lepista"],
    summary: ["Agaricales", "Tricholomataceae", "Lepista"],
    added: "2026-10-23",
    plate: STORAGE + LEPISTA_MEDIA + "Lepista_nuda@1600.webp",
    plateGrid: STORAGE + LEPISTA_MEDIA + "Lepista_nuda@400.webp",
    plateCredit: {
      author: "J. Sowerby",
      license: "public domain",
      source: "https://commons.wikimedia.org/wiki/File:Coloured_Figures_of_English_Fungi_or_Mushrooms_-_t._209.png"
    },
    photos: [
      {
        src: STORAGE + LEPISTA_MEDIA + "ln1.webp",
        author: "Dan Molter",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Clitocybe_nuda_60302.jpg"
      },      {
        src: STORAGE + LEPISTA_MEDIA + "ln2.webp",
        author: "Jimmie Veitch",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Clitocybe_nuda_(Fr.)_H.E._Bigelow_%26_A.H._Sm_267650.jpg"
      },      {
        src: STORAGE + LEPISTA_MEDIA + "ln3.webp",
        author: "Nathan Wilson",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:2002-12-28_Clitocybe_nuda_(Fr.)_H.E._Bigelow_%26_A.H._Sm_289.jpg"
      },      {
        src: STORAGE + LEPISTA_MEDIA + "ln4.webp",
        author: "FNeill",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Clitocybe_Nuda,_AKA_Lepista_Nuda,_AKA_Wood_Blewit.jpg"
      }
    ],
    capFrom: 2.5,
    capTo: 20,
    stipeHeightFrom: 2,
    stipeHeightTo: 11,
    stipeThickFrom: 1,
    stipeThickTo: 3,
    fruitingFrom: 8,
    fruitingTo: 12,
    label: {
      en: "wood blewit",
      sk: "pôvabnica fialová"
    },
    names: {
      en: ["blewit", "blue foot", "amethyst lepista", "blue-gilled agaric"],
      sk: ["hliva", "modrá hliva", "proficla"]
    },
    text: {
      en: {
        description: "A fleshy saprobic mushroom of leaf litter in woods, parks, and gardens, often in rings or rows. It is native to temperate Europe and North America, reported from Asia, North Africa, and South America, and introduced in Australia and New Zealand, where it is becoming more common.",
        cap: "The cap is 2.5–15 cm across, and occasionally reaches 20 cm. It is convex, with a long-inrolled margin, and later flat or slightly depressed, often wavy, and the edge may turn up. The surface is smooth and slightly hygrophanous, tacky or viscid when wet, and the young margin can look frosted. Young caps are violet, lilac, or purple-blue. The colour fades from the centre to tan, ochre, or brown, and some caps are brown or buff from the start. North American fruit bodies are often a duller tan, while the gills and the stipe usually keep some purple. The cap skin is a cutis or an ixocutis of hyphae 2–8 μm wide, with clamp connections.",
        hymenium: "The gills are crowded and 6–10 mm broad. They are sinuate to emarginate and often attached by a small tooth. They are violet or lilac at first, then buff, flesh brown, or brown, and they detach easily from the cap. The basidia are clavate and four-spored, 15–26 × 4–8 μm. Cystidia are absent.",
        stipe: "The stipe is 2–11 cm tall and 1–3 cm thick. It is solid and firm, cylindrical, and often clavate or bulbous at the base. The surface is fibrillose. It is violet or lilac at first, then grey-blue, and later nearly whitish, sometimes rusty brown below. The upper part is often whitish and pruinose, and small scales may sit in a zigzag. There is no ring. White to lilac mycelium binds the litter, so clumps of the substrate stay on the base.",
        flesh: "The flesh is thick, lilac to whitish, firm when young, and softer with age. It does not change colour when cut. The smell is sweet and fragrant, at times faintly of anise or fruit, and sometimes perfumed, and it has been compared to frozen orange juice. The taste is mild, pleasant, and mushroomy or slightly nutty. Potassium hydroxide does not change the colour of the cap or the flesh.",
        sporePrint: "Pale pinkish buff to flesh pink. A fresh deposit can look white, with an ochre-pink tint, and it becomes pinker or more ochre as it dries. The spores are ellipsoidal, finely verrucose to minutely spiny, inamyloid, and cyanophilic, 5.5–9 × 3–5.5 μm, with a length-to-width ratio of about 1.2–1.9.",
        habitat: "The main fruiting is from August to December. In Britain it runs from August into December. In Slovakia the fruit bodies come from the end of September through November and often continue into December frosts. In Siberia the window is August to mid-October. Spring fruit bodies occur in May, and in a mild winter fruiting can continue. It grows on humus and leaf litter in deciduous and coniferous woods, in hedgerows, parks, gardens, avenues, and orchards, on compost, in grassland and dune slacks, and among urban debris, often in rings or rows, including fairy rings under spruce and pine. It occurs from the lowlands into the mountains. In the introduced range it grows with eucalyptus and gorse, and the fruit bodies differ a little from those in Europe.",
        uses: "It is a choice edible mushroom when thoroughly cooked, and it is not eaten raw. The raw flesh contains a heat-sensitive haemolysin that breaks red blood cells and is destroyed by thorough cooking. A minority of people still get digestive upset from fruit bodies that have been well cooked. Young caps are preferred. They are sautéed, cooked in butter or a cream sauce, or used in omelettes, pasta, rice, cheese dishes, pale meat, and stews, including with leeks or onions. They are also dried, or blanched and kept in olive oil or white vinegar. Wild fruit bodies take up heavy metals more readily than many mushrooms and are eaten in moderation. The mushroom is sold in France, Spain, and Portugal, and more widely in European markets. Cultivated fruit bodies, grown in Britain, the Netherlands, and France, are said to taste less good than wild ones. Chopped and boiled in an iron pot, it dyes cloth or paper grass green. It has been reported to inhibit bacteria and yeasts and to lower blood sugar in people with diabetes. Fruit bodies that froze while they were still sound can be cooked as soon as they thaw.",
        confusion: "Cortinarius species that share the violet colours, including Cortinarius violaceus, Cortinarius alboviolaceus, Cortinarius traganus, and the uncommon Cortinarius camphoratus, have a rusty-brown spore print and a cortina. A ring zone is often left on the stipe, and brown spores dust it. Cortinarius violaceus has a darker violet cap with a felty skin. Some of these species smell unpleasant. Lepista sordida is smaller and more slender, pinkish violet, strongly hygrophanous, and quick to fade. It is often umbonate, the stipe is thin, and it usually grows alone or in small groups, more often in grass and meadows. Lepista personata, also named Lepista saeva and Collybia personata, has violet only on the stipe. The cap and the gills are not lilac, and it grows in grassland outside woods. Lepista glaucocana is usually very pale lilac to whitish and does not turn brown, though fruit bodies in western Siberia can be larger and sometimes brightly coloured. Some authors treat it as a variety. It is rare in woods, especially calcareous beech woods. Laccaria amethystina is much more slender, with a thin stipe and a cap depressed in the centre.",
        notes: "A 2015 study finds this species is not close to Lepista densifolia."},
      sk: {
        description: "Mäsitá saprotrofná huba, ktorá rastie v opadanke lesov, parkov a záhrad, často v kruhoch alebo v radoch. Pôvodná je v miernom pásme Európy a Severnej Ameriky, uvádza sa z Ázie, severnej Afriky a Južnej Ameriky a zavlečená je v Austrálii a na Novom Zélande, kde je čoraz hojnejšia.",
        cap: "Klobúk má 2,5–15 cm, výnimočne až 20 cm. Za mladi je klenutý, s dlho podvinutým okrajom, neskôr plochý alebo slabo preliačený, často zvlnený, a okraj sa môže zdvihnúť. Povrch je hladký a slabo hygrofánny, za vlhka lepkavý alebo slizký, a mladý okraj môže pôsobiť ojínene. Mladé klobúky sú fialové, lilavé alebo purpurovomodré. Farba bledne od stredu do plavej, okrovej alebo hnedej a niektoré klobúky sú hnedé alebo svetloplavé od začiatku. Severoamerické plodnice sú často matnejšie plavé, kým lupene a hlúbik si zvyčajne ponechajú niečo fialového. Pokožka klobúka je kutis alebo ixokutis z hýf širokých 2–8 μm, so spojkami.",
        hymenium: "Lupene sú husté a široké 6–10 mm. Sú vykrojené až vykrajované a často pripojené malým zúbkom. Za mladi sú fialové alebo lilavé, potom plavé, mäsovohnedé alebo hnedé, a od klobúka sa ľahko odtrhávajú. Bazídiá sú kyjačikovité a štvorvýtrusné, veľké 15–26 × 4–8 μm. Cystidy chýbajú.",
        stipe: "Hlúbik je vysoký 2–11 cm a hrubý 1–3 cm. Je plný a pevný, valcovitý a na báze často kyjačikovitý alebo hľuznatý. Povrch je vláknitý. Za mladi je fialový alebo lilavý, potom sivomodrý a neskôr takmer belavý, niekedy dolu hrdzavohnedý. Horná časť je často belavá a ojínená a drobné šupiny môžu byť usporiadané kľukato. Prsteň chýba. Biele až lilavé podhubie zväzuje opadanku, takže chumáče substrátu ostávajú na báze.",
        flesh: "Dužina je hrubá, lilavá až belavá, za mladi pevná a vekom mäkkne. Na reze nemení farbu. Vôňa je sladká a príjemná, občas slabo anízová alebo ovocná a niekedy parfumovaná; prirovnáva sa k mrazenému pomarančovému džúsu. Chuť je mierna, príjemná, hubová alebo slabo oriešková. Hydroxid draselný nemení farbu klobúka ani dužiny.",
        sporePrint: "Bledoružovkastoplavý až mäsovoružový. Čerstvý výtrusný prach môže vyzerať bielo, s okrovoružovým nádychom, a pri schnutí ružovie alebo okrovie. Výtrusy sú elipsoidné, jemne bradavičnaté až jemne ostnité, neamyloidné a cyanofilné, veľké 5,5–9 × 3–5,5 μm, s pomerom dĺžky k šírke približne 1,2–1,9.",
        habitat: "Hlavné plodenie trvá od augusta do decembra, vo Veľkej Británii v tom istom období. Na Slovensku prichádzajú plodnice od konca septembra do novembra a často pokračujú aj v decembrových mrazoch. Na Sibíri trvá od augusta do polovice októbra. Jarné plodnice sa objavujú v máji a v miernej zime môže plodenie pokračovať. Rastie na humuse a v opadanke listnatých aj ihličnatých lesov, v živých plotoch, parkoch, záhradách, alejach a sadoch, na komposte, v trávnatých porastoch a v medzidunových zníženinách a medzi mestským odpadom, často v kruhoch alebo v radoch, aj v čarovných kruhoch pod smrekom a borovicou. Vyskytuje sa od nížin po hory. V zavlečenom areáli rastie s eukalyptom a hlodášom a plodnice sa od európskych trochu líšia.",
        uses: "Je to výborná jedlá huba, ak je dôkladne tepelne upravená, a za surova sa neje. Surová dužina obsahuje termolabilný hemolyzín, ktorý rozkladá červené krvinky a dôkladnou tepelnou úpravou sa ničí. Menšine ľudí spôsobia dobre uvarené plodnice aj tak tráviace ťažkosti. Prednosť majú mladé klobúky. Restujú sa, dusia sa na masle alebo v smotanovej omáčke, alebo sa dávajú do praženice, cestovín, ryže, syrových jedál, svetlého mäsa a dusených jedál, aj s pórkom alebo cibuľou. Sušia sa, alebo sa blanšírujú a uchovávajú v olivovom oleji či v bielom octe. Voľne rastúce plodnice prijímajú ťažké kovy ľahšie ako mnohé iné huby a jedia sa s mierou. Huba sa predáva vo Francúzsku, Španielsku a Portugalsku a širšie aj na európskych trhoch. Pestované plodnice z Veľkej Británie, Holandska a Francúzska vraj chutia horšie ako voľne rastúce. Nasekaná a uvarená v železnom hrnci farbí látku alebo papier na trávovozeleno. Uvádza sa, že potláča baktérie a kvasinky a že znižuje hladinu cukru v krvi u ľudí s cukrovkou. Plodnice, ktoré zmrzli ešte zdravé, možno hneď po rozmrazení tepelne upraviť.",
        confusion: "Pavučinovce fialových farieb, medzi nimi pavučinovec fialový (Cortinarius violaceus), pavučinovec (Cortinarius alboviolaceus), pavučinovec smradľavý (Cortinarius traganus) a zriedkavý pavučinovec (Cortinarius camphoratus), majú hrdzavohnedý výtrusný prach a pavučinku. Na hlúbiku často ostáva prsteňovitá zóna a hnedé výtrusy ju poprášia. Pavučinovec fialový (Cortinarius violaceus) má tmavší fialový klobúk s plstnatou pokožkou. Niektoré z týchto druhov nepríjemne páchnu. Jedlá pôvabnica ružovkastá (Lepista sordida) je menšia a štíhlejšia, ružovofialová, silno hygrofánna a rýchlo bledne. Často má hrboľ, hlúbik je tenký a zvyčajne rastie jednotlivo alebo v malých skupinách, častejšie v tráve a na lúkach. Jedlá pôvabnica dvojfarebná (Lepista personata), uvádzaná aj ako Lepista saeva a Collybia personata, má fialový len hlúbik. Klobúk a lupene nie sú lilavé a rastie v trávnatých porastoch mimo lesa. Pôvabnica (Lepista glaucocana) je zvyčajne veľmi bledo lilavá až belavá a nehnedne, hoci plodnice v západnej Sibíri môžu byť väčšie a niekedy výrazne sfarbené. Niektorí autori ju považujú za odrodu. V lesoch je zriedkavá, najmä vo vápencových bučinách. Jedlá lakovka ametystová (Laccaria amethystina) je oveľa štíhlejšia, s tenkým hlúbikom a s klobúkom v strede preliačeným.",
        notes: "Štúdia z roku 2015 zisťuje, že tento druh nie je blízky druhu Lepista densifolia. Na Slovensku je tento druh všeobecne rozšírený od nížin po hory.",
      }
    },
    sources: {
      en: [
        { group: "text", name: "Wikipedia", href: "https://en.wikipedia.org/wiki/Collybia_nuda" },
        { group: "text", name: "First Nature", href: "https://www.first-nature.com/fungi/lepista-nuda.php" },
        { group: "text", name: "MushroomExpert", href: "https://www.mushroomexpert.com/clitocybe_nuda.html" },
        { group: "text", name: "Slovak Wikipedia", href: "https://sk.wikipedia.org/wiki/P%C3%B4vabnica_fialov%C3%A1" },
        { group: "text", name: "nahuby.sk", href: "https://www.nahuby.sk/atlas-hub/Lepista-nuda/povabnica-fialova/ciruvka-fialova/ID507" },
        { group: "text", name: "Грибы Сибири", href: "https://mycology.su/lepista-nuda.html" },
        { group: "text", name: "myko.cz", href: "https://www.myko.cz/myko-atlas/Lepista-nuda/" },
        { group: "text", name: "Fungipedia", href: "https://www.fungipedia.org/en/hongos/lepista-nuda.html" },
        { group: "text", name: "grzyby.pl", href: "https://grzyby.pl/gatunki/Lepista_nuda.htm" },
        { group: "text", name: "Wikimedia Commons", href: "https://commons.wikimedia.org/wiki/File:Coloured_Figures_of_English_Fungi_or_Mushrooms_-_t._209.png", detail: "Sowerby plate 209" },
        { group: "name", name: "Index Fungorum", href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=356735", detail: "356735" },
        { group: "name", name: "Species Fungorum", href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=356735", detail: "356735" },
        { group: "name", name: "Species Fungorum", href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=189538", detail: "189538" },
        { group: "name", name: "Index Fungorum", href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=17943", detail: "17943" },
        { group: "name", name: "MycoBank", href: "https://www.mycobank.org/page/Name%20details%20page/name/Lepista%20nuda" },
        { group: "name", name: "GBIF", href: "https://www.gbif.org/species/5242048", detail: "5242048" }
      ],
      sk: [
        { group: "text", name: "Slovak Wikipedia", href: "https://sk.wikipedia.org/wiki/P%C3%B4vabnica_fialov%C3%A1", detail: "pôvabnica fialová" },
        { group: "text", name: "nahuby.sk", href: "https://www.nahuby.sk/atlas-hub/Lepista-nuda/povabnica-fialova/ciruvka-fialova/ID507", detail: "pôvabnica fialová" }
      ]
    },
    synonyms: ["Agaricus nudus Bull.", "Cortinarius nudus (Bull.) Gray", "Paxillus nudus (Bull.) Kalchbr.", "Tricholoma nudum (Bull.) P. Kumm.", "Gyrophila nuda (Bull.) Quél.", "Rhodopaxillus nudus (Bull.) Maire", "Clitocybe nuda (Bull.) H.E. Bigelow & A.H. Sm.", "Collybia nuda (Bull.) Z.M. He & Zhu L. Yang", "Agaricus bulbosus Bolton", "Agaricus bicolor Pers.", "Cortinarius bicolor Gray", "Agaricus tyrianthinus Fr.", "Clitocybe tyrianthina (Fr.) P. Karst.", "Omphalia tyrianthina (Fr.) Quél.", "Collybia lilacea Quél.", "Agaricus lilaceus (Quél.) Quél."]
  };

  var ARTOMYCES_MEDIA = "photos/Russulales/Auriscalpiaceae/Artomyces_pyxidatus/";
  var ARTOMYCES = {
    id: 36,
    name: "Artomyces pyxidatus",
    author: "(Pers.) Jülich",
    family: "Auriscalpiaceae",
    genus: "Artomyces",
    order: "Russulales",
    edibility: "inedible",
    hymenium: "smooth",
    path: ["Fungi", "Dikarya", "Basidiomycota", "Agaricomycotina", "Agaricomycetes", "Incertae sedis", "Russulales", "Auriscalpiaceae", "Artomyces"],
    summary: ["Russulales", "Auriscalpiaceae", "Artomyces"],
    added: "2026-10-23",
    plate: STORAGE + ARTOMYCES_MEDIA + "Artomyces_pyxidatus@1600.webp",
    plateGrid: STORAGE + ARTOMYCES_MEDIA + "Artomyces_pyxidatus@400.webp",
    plateCredit: {
      author: "Gemini",
      license: "not stated"
    },
    photos: [
      {
        src: STORAGE + ARTOMYCES_MEDIA + "ap1.webp",
        author: "Matej Frančeškin",
        license: "CC BY 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Artomyces_pyxidatus_429672967.jpg"
      },
      {
        src: STORAGE + ARTOMYCES_MEDIA + "ap2.webp",
        author: "Tijs Vanlaere",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Artomyces_pyxidatus_2.jpg"
      },
      {
        src: STORAGE + ARTOMYCES_MEDIA + "ap3.webp",
        author: "Larry Jensen",
        license: "CC BY 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Artomyces_pyxidatus_308595844.jpg"
      },
      {
        src: STORAGE + ARTOMYCES_MEDIA + "ap4.webp",
        author: "Vihane",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:2016-05-25_Artomyces_pyxidatus_(Pers.)_Jülich_696049.jpg"
      },
      {
        src: STORAGE + ARTOMYCES_MEDIA + "ap5.webp",
        author: "Damon Smith",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:2010-06-12_Artomyces_pyxidatus_(Pers.)_Jülich_89108.jpg"
      }
    ],
    capFrom: 2,
    capTo: 10,
    stipeHeightFrom: 1,
    stipeHeightTo: 3,
    stipeThickTo: 1,
    fruitingFrom: 5,
    fruitingTo: 10,
    label: {
      en: "crown-tipped coral",
      sk: "korunovec svietnikovitý"
    },
    names: {
      en: ["crown-tipped coral fungus", "crown coral"]
    },
    text: {
      en: {
        description: "A saprotrophic coral fungus of rotten wood across the temperate Northern Hemisphere. It is widespread in Europe, Asia, and North America, uncommon in much of western Europe, and rare in Britain. In North America it occurs in the east, the Rocky Mountains, and Mexico, and it is absent or rare on the Pacific coast.",
        cap: "The fruit body is about 2–13 cm tall and 2–10 cm across, and it is commonly 4–12 cm tall. Upright branches, about 1–5 mm thick, rise repeatedly from a short base and join below into thicker limbs. They stand close together. Each tip opens into a shallow cup with about 3–6 short points on the rim, and the same whorl is repeated down the branch ranks. The colour is whitish, cream, or pale flesh-pink at first, then yellowish or ochre, sometimes with a pinkish cast. The tips often turn brown with age. Dried fruit bodies become cinnamon to brown.",
        hymenium: "The fertile surface is smooth and clothes the branches. The basidia are clavate and four-spored, with a clamp at the base, and measure about 16–30 × 3.6–5.2 μm. Cystidia are fusoid, cylindrical, capitate, or club-shaped, up to about 50 × 9 μm, and often barely project. Thin-walled leptocystidia about 3–5 μm wide are also present. Gloeoplerous hyphae may end in the hymenium as gloeocystidia that project by up to 15 μm.",
        stipe: "A short base is often present, about 1–3 cm long and up to 1 cm thick. It is whitish, pinkish, or brownish, and finely fuzzy. It may be almost hidden, or it may enter the wood a little. A mycelial pad at the attachment is white to rust-coloured.",
        flesh: "The flesh is whitish to yellowish, elastic, and fairly tough, and it browns when rubbed. The odour is strongly spicy, faintly earthy, or like freshly dug potatoes, and it may be indistinct. The taste is mild, slightly bitter, or peppery, and the heat comes after the flesh is chewed. The hyphal system is monomitic. Generative hyphae bear clamp connections and reach about 12–16 μm wide. Gloeoplerous hyphae about 3–8 μm wide are scattered through the flesh. Iron salts leave the branches and the base unchanged, or turn them grayish to brownish.",
        sporePrint: "White. The spores are ellipsoid to elongate-ellipsoid, about 3.6–5.5 × 2–3 μm, minutely warted or pitted, often with a small apiculus and an oil drop. They are amyloid.",
        habitat: "Fruit bodies appear mainly from July to September in central Europe and from June to September farther east in Europe, with records from May and into October. In eastern North America they fruit from spring through fall, and from June to September in many accounts. They grow alone or in groups on rotten stumps and fallen trunks, especially of aspen and other poplars, willow, beech, oak, lime, hornbeam, and maple, and also on birch, alder, ash, elder, and sweet chestnut. Conifer wood is less usual. Pine and silver fir are recorded, and recent finds in the North German lowlands are mostly on pine. In northern Europe the usual hosts are birch, poplar, and willow. Tulip tree is a frequent host in eastern North America.",
        uses: "It is treated as inedible in central Europe. Some North American accounts call it edible when fresh, and it has also been called edible raw, though better cooked. As of 2014 it stood on none of the German lists of food mushrooms, of mushrooms with a disputed food value, or of poisonous mushrooms. The fruit bodies are often small.",
        confusion: "Ramaria stricta also grows on wood and has upright branches. Its tips are not crowned, it has white root-like mycelial strands, and the taste does not turn acrid as the flesh is chewed. Other species of Ramaria grow on the ground and do not end in cups. Species of Clavulinopsis lack cup-like tips. Artomyces microsporus is similar in form, with branches packed tightly from the base to the top, shorter spores about 3–3.8 μm long, and a preference for dead pine. Artomyces cristatus is small, and its fruit bodies are unbranched or only rarely branched twice.",
        notes: "Pyxidatols A–C, tsuicoline E, and omphadiol have been obtained from liquid culture. In Poland it is treated as vulnerable, linked to the loss of riparian broadleaf woods."},
      sk: {
        description: "Saprotrofná koralovitá huba tlejúceho dreva v miernom pásme severnej pologule. Rozšírená je v Európe, Ázii a Severnej Amerike, v značnej časti západnej Európy je nehojná a v Británii vzácna. V Severnej Amerike rastie na východe, v Skalnatých vrchoch a v Mexiku a na tichomorskom pobreží chýba alebo je vzácna.",
        cap: "Plodnica je vysoká asi 2–13 cm a široká 2–10 cm a zvyčajne meria 4–12 cm na výšku. Vzpriamené konáre hrubé asi 1–5 mm vyrastajú opakovane z krátkej bázy a nadol sa spájajú do hrubších ramien. Stoja husto pri sebe. Každý koniec sa otvára do plytkej čiašky s asi 3–6 krátkymi hrotmi na okraji a ten istý praslen sa opakuje na nižších poschodiach konárov. Sfarbenie je najprv belavé, krémové alebo bledo mäsovoružové, potom žltkasté alebo okrové, niekedy s ružovkastým nádychom. Konce vekom často hnednú. Usušené plodnice sa sfarbia do škoricova až do hneda.",
        hymenium: "Plodný povrch je hladký a pokrýva konáre. Bazídiá sú kyjačkovité a štvorvýtrusné, na báze so spojkou, a merajú asi 16–30 × 3,6–5,2 μm. Cystidy sú vretenovité, valcovité, hlavičkaté alebo kyjačkovité, veľké až asi 50 × 9 μm, a často sotva vyčnievajú. Prítomné sú aj tenkostenné leptocystidy široké asi 3–5 μm. Gloeopleurózne hýfy môžu v hyméniu končiť ako gloeocystidy, ktoré vyčnievajú až o 15 μm.",
        stipe: "Krátka báza býva často prítomná, dlhá asi 1–3 cm a hrubá až 1 cm. Je belavá, ružovkastá alebo hnedastá a jemne plstnatá. Môže byť takmer skrytá, alebo môže trochu vnikať do dreva. Mycéliový vankúšik v mieste prirastenia je biely až hrdzavý.",
        flesh: "Dužina je belavá až žltkastá, pružná a pomerne húževnatá a po pošúchaní hnedne. Vôňa je výrazne korenistá, slabo zemitá alebo ako čerstvo vykopané zemiaky a môže byť nevýrazná. Chuť je mierna, slabo horká alebo pieprová a pálivosť sa dostaví až po rozžutí dužiny. Hýfový systém je monomitický. Generatívne hýfy majú spojky a dosahujú šírku asi 12–16 μm. Gloeopleurózne hýfy široké asi 3–8 μm sú v dužine roztrúsené. Soli železa nechávajú konáre a bázu bez zmeny, alebo ich sfarbia na sivasté až hnedasté.",
        sporePrint: "Biely. Výtrusy sú elipsoidné až podlhovasto elipsoidné, veľké asi 3,6–5,5 × 2–3 μm, drobne bradavičnaté alebo jamkovité, často s malým apikulom a olejovou kvapkou. Sú amyloidné.",
        habitat: "Plodnice sa v strednej Európe objavujú najmä od júla do septembra a ďalej na východe Európy od júna do septembra, so záznamami od mája až do októbra. Na východe Severnej Ameriky sa objavujú od jari do jesene a v mnohých opisoch od júna do septembra. Rastú jednotlivo alebo v skupinách na tlejúcich pňoch a ležiacich kmeňoch, najmä osiky a iných topoľov, vŕby, buka, duba, lipy, hrabu a javora, a tiež brezy, jelše, jaseňa, bazy a gaštana jedlého. Drevo ihličnanov je menej obvyklé. Ako hostitelia sa uvádzajú borovica a jedľa biela a novšie nálezy v severonemeckej nížine sú väčšinou na borovici. V severnej Európe sú obvyklými hostiteľmi breza, topoľ a vŕba. Na východe Severnej Ameriky je častým hostiteľom ľaliovník tulipánokvetý.",
        uses: "V strednej Európe sa považuje za nejedlú. Niektoré severoamerické opisy ju označujú za jedlú v čerstvom stave a uvádzajú ju aj ako jedlú za surova, hoci lepšie tepelne upravenú. K roku 2014 nebola na žiadnom z nemeckých zoznamov jedlých húb, húb so spornou potravinovou hodnotou ani jedovatých húb. Plodnice bývajú často malé.",
        confusion: "Strapačka vzpriamená (Ramaria stricta) tiež rastie na dreve a má vzpriamené konáre. Jej konce nemajú korunku, má biele koreňovité mycéliové povrazce a chuť pri žuvaní dužiny neprechádza do pálivej. Ostatné druhy strapačky (Ramaria) rastú na zemi a nekončia sa čiaškami. Druhy rodu Clavulinopsis nemajú čiaškovité konce. Korunkovec (Artomyces microsporus) je tvarom podobný, s konármi husto natlačenými od bázy až po vrchol, s kratšími výtrusmi dlhými asi 3–3,8 μm a s väzbou na odumretú borovicu. Artomyces cristatus je malý a jeho plodnice sú nerozkonárené, alebo len zriedka dvakrát rozkonárené.",
        notes: "Z tekutej kultúry boli získané pyxidatoly A–C, tsuicoline E a omphadiol. V Poľsku sa považuje za zraniteľný druh (Vulnerable), spájaný s úbytkom lužných listnatých lesov. Na Slovensku sa uvádza na silno rozložených ležiacich kmeňoch listnáčov, aj od apríla."}
    },
    sources: {
      en: [
        {
          group: "text",
          name: "MushroomExpert",
          href: "https://www.mushroomexpert.com/artomyces_pyxidatus.html"
        },
        {
          group: "text",
          name: "MushroomExpert",
          href: "https://mushroomexpert.com/fungionwood/club%20and%20coral/species%20pages/Artomyces%20pyxidatus.htm",
          detail: "fungi on wood"
        },
        {
          group: "text",
          name: "Wikipedia",
          href: "https://en.wikipedia.org/wiki/Artomyces_pyxidatus"
        },
        {
          group: "text",
          name: "de.wikipedia",
          href: "https://de.wikipedia.org/wiki/Verzweigte_Becherkoralle"
        },
        {
          group: "text",
          name: "myko.cz",
          href: "https://www.myko.cz/myko-atlas/Artomyces-pyxidatus/"
        },
        {
          group: "text",
          name: "grzyby.pl",
          href: "https://www.grzyby.pl/gatunki/Clavicorona_pyxidata.htm"
        },
        {
          group: "text",
          name: "nahuby.sk",
          href: "https://www.nahuby.sk/atlas-hub/Artomyces-pyxidatus/korunovec-svietnikovity/korunokyjka-svicnovita/ID984"
        },
        {
          group: "text",
          name: "Asturnatura",
          href: "https://www.asturnatura.com/en/nature/species/artomyces-pyxidatus"
        },
        {
          group: "text",
          name: "Cryptogamie Mycologie",
          href: "https://sciencepress.mnhn.fr/sites/default/files/articles/pdf/cryptogamie-mycologie2008v29f3a2.pdf"
        },
        {
          group: "text",
          name: "Ukrainian Botanical Journal",
          href: "https://ukrbotj.co.ua/archive/81/4/271"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=110490",
          detail: "110490"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/Synonymy.asp?RecordID=110490",
          detail: "110490"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=181559",
          detail: "181559"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=17104",
          detail: "17104"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/110490"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/2550493",
          detail: "2550493"
        },
        {
          group: "name",
          name: "BHL",
          href: "https://www.biodiversitylibrary.org/page/4338455",
          detail: "Syst. mycol. 1: 470"
        }
      ],
      sk: [
        {
          group: "text",
          name: "nahuby.sk",
          href: "https://www.nahuby.sk/atlas-hub/Artomyces-pyxidatus/korunovec-svietnikovity/korunokyjka-svicnovita/ID984",
          detail: "korunovec svietnikovitý"
        },
        {
          group: "text",
          name: "Poľovníctvo a rybárstvo",
          href: "https://polovnictvo-rybarstvo.pluska.sk/na-hubach/koraly-sa-ukryvaju-aj-v-nasich-lesoch-kde-ich-hladat",
          detail: "Slovensko"
        }
      ]
    },
    synonyms: [
      "Clavaria pyxidata Pers.",
      "Merisma pyxidatum (Pers.) Spreng.",
      "Ramaria pyxidata (Pers.) Quél.",
      "Clavicorona pyxidata (Pers.) Doty",
      "Clavaria coronata Schwein.",
      "Clavicorona coronata (Schwein.) Doty",
      "Clavaria petersii Berk. & M.A. Curtis",
      "Calocera digitata Cooke & Massee"
    ]
  };

  var POLYPORUS_MEDIA = "photos/Polyporales/Polyporaceae/Polyporus_umbellatus/";
  var POLYPORUS = {
    id: 37,
    name: "Polyporus umbellatus",
    author: "(Pers.) Fr.",
    family: "Polyporaceae",
    genus: "Polyporus",
    order: "Polyporales",
    edibility: "choice",
    hymenium: "tubes",
    path: ["Fungi", "Dikarya", "Basidiomycota", "Agaricomycotina", "Agaricomycetes", "Incertae sedis", "Polyporales", "Polyporaceae", "Polyporus"],
    summary: ["Polyporales", "Polyporaceae", "Polyporus"],
    added: "2026-10-23",
    plate: STORAGE + POLYPORUS_MEDIA + "Polyporus_umbellatus@1600.webp",
    plateGrid: STORAGE + POLYPORUS_MEDIA + "Polyporus_umbellatus@400.webp",
    plateCredit: {
      author: "M. Rössler",
      license: "not stated"
    },
    photos: [
      {
        src: STORAGE + POLYPORUS_MEDIA + "pu1.webp",
        author: "Svencapoeira",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Nabatorik.jpg"
      },
      {
        src: STORAGE + POLYPORUS_MEDIA + "pu2.webp",
        author: "Lebrac",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Eichhase.jpg"
      },
      {
        src: STORAGE + POLYPORUS_MEDIA + "pu3.webp",
        author: "László Németh",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Polyporus_umbellatus.jpg"
      },
      {
        src: STORAGE + POLYPORUS_MEDIA + "pu4.webp",
        author: "Katja Schulz",
        license: "CC BY 2.0",
        licenseUrl: "https://creativecommons.org/licenses/by/2.0",
        source: "https://commons.wikimedia.org/wiki/File:Umbrella_Polypore_(29737859636).jpg"
      },
      {
        src: STORAGE + POLYPORUS_MEDIA + "pu5.webp",
        author: "Geoff Balme",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Polyporus_umbellatus_Pers._ex_Fr_614641_2016-05-02.jpg"
      }
    ],
    capFrom: 10,
    capTo: 50,
    stipeHeightFrom: 2.5,
    stipeHeightTo: 8,
    stipeThickFrom: 2,
    stipeThickTo: 4,
    fruitingFrom: 5,
    fruitingTo: 11,
    label: {
      en: "umbrella polypore",
      sk: "trúdnik klobúčkatý"
    },
    names: {
      en: ["lumpy bracket"],
      sk: ["barania hlava"]
    },
    text: {
      en: {
        description: "A white-rot fungus of deciduous woods, parasitic on living roots and saprotrophic on the stump. It has a temperate distribution in the Northern Hemisphere, from central and eastern Europe north to southern Fennoscandia, across North America, and through the Caucasus and Siberia to Pakistan. In Britain it is rare and mostly southern.",
        cap: "The fruit body is a thick, fleshy, branching trunk that bears many small, round, centrally stalked caps, sometimes several hundred, and it arises from an underground sclerotium. The whole cluster is commonly 10–50 cm across and may weigh several kilograms. Individual caps are 1–5 cm across, most often 2–4 cm. They are thin, broadly convex or plano-convex at first, then flat to shallowly depressed, umbilicate, or funnel-shaped, with a thin wavy margin. The surface is cream, pale ochre, greyish brown, pale yellow-brown, smoky brown, or whitish, often with greyish or grey-brown fibrous scales or fine radial fibrils, especially when young, and it turns ochre and then brown with age. The margin may bruise yellow. The fruit body is short-lived and collapses in wet weather.",
        hymenium: "The tubes are white to cream, about 1–2 mm deep, and deeply decurrent onto the stems. The pores are the same colour, round at first and then angular, about 0.5–1 mm wide, with 1–2 per millimetre. Hymenial cystidia are absent.",
        stipe: "Each cap has a whitish to cream central stem, cylindrical and often widened where it meets the cap. The stems stay separate just beneath the caps and fuse below into one or more thicker branches. The common trunk is thick and fleshy, about 2.5–8 cm tall and 2–4 cm thick, and rusty brown near the base.",
        flesh: "The flesh is white. Young flesh is juicy and soft, then fibrous and brittle, and the colour does not change when it is cut. Older flesh is tough and fibrous, and when dry it is hard and brittle. Young flesh smells pleasant, mealy or faintly sweet, and the taste is mild. With age the smell becomes unpleasant and the taste bitter or acrid. The hyphal system is dimitic, with clamp connections. Potassium hydroxide gives no colour change on the flesh or on the cap.",
        sporePrint: "White or whitish. The spores are cylindrical, smooth, thin-walled, and hyaline, inamyloid, about 7–10 × 2.5–3.5 μm.",
        habitat: "Fruit bodies appear from late May, after rain, through November, mainly from July to September. Slovak records run from June to September, British ones through summer and autumn, and eastern North American ones from May to September or from spring into autumn. They grow singly or up to about six together, at the base of living hardwoods and of stumps, and also some metres away, from a black-brown knobby sclerotium just under the soil, often around thin living roots. The sclerotium has a thin wrinkled rind and a tough corky cream or white interior. Oak and beech are the usual hosts, together with hornbeam, ash, and other hardwoods. It prefers warm sites on calcium-rich or base-rich soils and avoids poor acid sand and clay. Fruit bodies may return in the same place for many years, or skip years. After felling, the fungus may persist on the stump for up to about 30 years, and a host switch to spruce is sometimes reported.",
        uses: "Young, fresh fruit bodies are excellent in soups and sauces, or dried. Older fruit bodies become bitter or unpleasant.",
        confusion: "Grifola frondosa has larger, fan-shaped or leaf-like fronds with a lateral stalk, where this species has many small, round, centrally stalked caps. Meripilus giganteus has thicker, spatulate fronds with an eccentric stalk and grows mainly with beech. Sparassis crispa is paler, with curled lobes, and grows with conifers, especially Scots pine. Armillaria tabescens has gills. Polyporus tuberaster also fruits from a sclerotium, and its fruit body is a single cap.",
        notes: "In nature the underground sclerotium is reported to form where the mycelium of an Armillaria is present, including Armillaria gallica and Armillaria cepistipes. The sclerotium has been used in Chinese medicine as a diuretic for more than 2000 years. The fungus is uncommon, and some accounts say the fruit bodies should be left unpicked."},
      sk: {
        description: "Huba listnatých lesov spôsobujúca bielu hnilobu, parazitická na živých koreňoch a saprotrofná na pni. Rozšírená je v miernom pásme severnej pologule, od strednej a východnej Európy na sever po južnú Fennoskandiu, cez Severnú Ameriku a cez Kaukaz a Sibír až po Pakistan. V Británii je zriedkavá a prevažne južná.",
        cap: "Plodnica je hrubý, mäsitý a rozkonárený kmeň, ktorý nesie veľa malých, okrúhlych klobúkov so stredovým hlúbikom, niekedy aj niekoľko stoviek, a vyrastá z podzemného sklerócia. Celý trs meria zvyčajne 10–50 cm v priemere a môže vážiť niekoľko kilogramov. Jednotlivé klobúky majú v priemere 1–5 cm, najčastejšie 2–4 cm. Sú tenké, najprv široko klenuté alebo plocho klenuté, potom ploché až plytko preliačené, pupkovité alebo lievikovité, s tenkým zvlneným okrajom. Povrch je krémový, bledookrový, sivohnedý, bledožltohnedý, dymovohnedý alebo belavý, často so sivastými alebo sivohnedými vláknitými šupinkami alebo jemnými lúčovitými vláknami, najmä za mladi, a vekom prechádza do okrovej a potom hnedej farby. Okraj môže po otlačení zožltnúť. Plodnica je krátkoveká a vo vlhkom počasí sa rozpadá.",
        hymenium: "Rúrky sú biele až krémové, hlboké asi 1–2 mm a hlboko zbiehajú na hlúbiky. Póry majú rovnakú farbu, najprv sú okrúhle a potom hranaté, široké asi 0,5–1 mm, v počte 1–2 na milimeter. Hyméniové cystidy chýbajú.",
        stipe: "Každý klobúk má belavý až krémový stredový hlúbik, valcovitý a v mieste prechodu do klobúka často rozšírený. Tesne pod klobúkmi ostávajú hlúbiky oddelené a nižšie zrastajú do jednej alebo viacerých hrubších vetiev. Spoločný kmeň je hrubý a mäsitý, vysoký asi 2,5–8 cm a hrubý 2–4 cm, pri báze hrdzavohnedý.",
        flesh: "Dužina je biela. Za mladi je šťavnatá a mäkká, potom vláknitá a krehká a po prerezaní nemení farbu. Staršia dužina je tuhá a vláknitá a po vyschnutí tvrdá a krehká. Mladá dužina vonia príjemne, múčne alebo jemne sladkasto, a chuť je mierna. Vekom sa vôňa stáva nepríjemnou a chuť horkou alebo štipľavou. Hýfový systém je dimitický, so spojkami. Hydroxid draselný nemení farbu dužiny ani klobúka.",
        sporePrint: "Biely alebo belavý. Výtrusy sú valcovité, hladké, tenkostenné a hyalínne, neamyloidné, veľké asi 7–10 × 2,5–3,5 μm.",
        habitat: "Plodnice sa objavujú od konca mája, po daždi, do novembra, najmä od júla do septembra. Slovenské nálezy sú od júna do septembra, britské cez leto a jeseň a východoamerické od mája do septembra alebo od jari do jesene. Plodnice rastú jednotlivo alebo až asi po šesť spolu, pri báze živých listnáčov a na pňoch, a tiež niekoľko metrov od nich, z čiernohnedého hrboľatého sklerócia tesne pod povrchom pôdy, často okolo tenkých živých koreňov. Sklerócium má tenkú zvráskavenú kôru a tuhé korkovité krémové alebo biele vnútro. Obvyklými hostiteľmi sú dub a buk, spolu s hrabom, jaseňom a inými listnáčmi. Huba uprednostňuje teplé stanovištia na vápnitých alebo zásaditých pôdach a vyhýba sa chudobnému kyslému piesku a ílu. Plodnice sa môžu na tom istom mieste vracať mnoho rokov, alebo niektoré roky vynechať. Po výrube môže huba na pni pretrvávať až okolo 30 rokov a niekedy sa uvádza prechod hostiteľa na smrek.",
        uses: "Mladé, čerstvé plodnice sú výborné do polievok a omáčok, alebo sa sušia. Staršie plodnice horknú alebo sú nepríjemné.",
        confusion: "Trsovnica lupeňovitá (Grifola frondosa) má väčšie, vejárovité alebo listovité úkrojky s bočným hlúbikom, kým tento druh má veľa malých, okrúhlych klobúkov so stredovým hlúbikom. Vejárovec obrovský (Meripilus giganteus) má hrubšie, lopatkovité úkrojky s excentrickým hlúbikom a rastie najmä pri buku. Kučierka veľká (Sparassis crispa) je bledšia, s kučeravými lalokmi, a rastie pri ihličnanoch, najmä pri borovici lesnej. Podpňovka bezprsteňová (Armillaria tabescens) má lupene. Trúdnik hľuzovitý (Polyporus tuberaster) tiež vyrastá zo sklerócia a jeho plodnica je jeden klobúk.",
        notes: "V prírode sa uvádza, že podzemné sklerócium vzniká tam, kde je prítomné mycélium niektorého druhu rodu Armillaria, vrátane Armillaria gallica a Armillaria cepistipes. Sklerócium sa v čínskej medicíne používa ako močopudný prostriedok viac ako 2000 rokov. Huba je nehojná a podľa niektorých opisov sa plodnice nemajú zbierať."}
    },
    sources: {
      en: [
        { group: "text", name: "First Nature", href: "https://www.first-nature.com/fungi/polyporus-umbellatus.php" },
        { group: "text", name: "Wikipedia", href: "https://en.wikipedia.org/wiki/Polyporus_umbellatus" },
        { group: "text", name: "MushroomExpert", href: "https://www.mushroomexpert.com/polyporus_umbellatus.html" },
        { group: "text", name: "de.wikipedia", href: "https://de.wikipedia.org/wiki/Eichhase" },
        { group: "text", name: "nahuby.sk", href: "https://www.nahuby.sk/atlas-hub/Polyporus-umbellatus/trudnik-klobuckaty/choros-oris/ID753" },
        { group: "text", name: "Fungipedia", href: "https://www.fungipedia.org/en/hongos/polyporus-umbellatus.html" },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=240963",
          detail: "240963"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=240963",
          detail: "240963"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/240963"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/5246840",
          detail: "5246840"
        },
        {
          group: "name",
          name: "BHL",
          href: "https://www.biodiversitylibrary.org/page/4338396",
          detail: "Syst. mycol. 1: 354"
        }
      ],
      sk: [
        {
          group: "text",
          name: "nahuby.sk",
          href: "https://www.nahuby.sk/atlas-hub/Polyporus-umbellatus/trudnik-klobuckaty/choros-oris/ID753",
          detail: "trúdnik klobúčkatý"
        }
      ]
    },
    synonyms: [
      "Boletus umbellatus Pers.",
      "Merisma umbellatum (Pers.) Gillet",
      "Merisma umbellata (Pers.) Gillet",
      "Polypilus umbellatus (Pers.) P. Karst.",
      "Cladomeris umbellata (Pers.) Quél.",
      "Cerioporus umbellatus (Pers.) Quél.",
      "Pocillaria umbellata (Pers.) Kuntze",
      "Cladodendron umbellatum (Pers.) Lázaro Ibiza",
      "Grifola umbellata (Pers.) Pilát",
      "Dendropolyporus umbellatus (Pers.) Jülich",
      "Boletus ramosissimus Scop.",
      "Fungus ramosissimus (Scop.) Paulet",
      "Polyporus ramosissimus (Scop.) J. Schröt.",
      "Grifola ramosissima (Scop.) Murrill",
      "Polypilus ramosissimus (Scop.) Bondartsev & Singer",
      "Boletus ramosus Vahl",
      "Sclerotium giganteum Rostr.",
      "Polyporus chuling Shirai"
    ]
  };

  var ALBOSTIPITATUM_MEDIA = "photos/Boletales/Boletaceae/Leccinum_albostipitatum/";
  var ALBOSTIPITATUM = {
    id: 38,
    name: "Leccinum albostipitatum",
    author: "den Bakker & Noordel.",
    family: "Boletaceae",
    genus: "Leccinum",
    order: "Boletales",
    edibility: "edible",
    hymenium: "tubes",
    path: ["Fungi", "Dikarya", "Basidiomycota", "Agaricomycotina", "Agaricomycetes", "Agaricomycetidae", "Boletales", "Boletaceae", "Leccinum"],
    summary: ["Boletales", "Boletaceae", "Leccinum"],
    added: "2026-10-23",
    plate: STORAGE + ALBOSTIPITATUM_MEDIA + "Leccinum_albostipitatum@1600.webp",
    plateGrid: STORAGE + ALBOSTIPITATUM_MEDIA + "Leccinum_albostipitatum@400.webp",
    plateCredit: {
      author: "J. Kops",
      license: "public domain",
      source: "https://commons.wikimedia.org/wiki/File:Boletus_rufus_—_Flora_Batava_—_Volume_v15.jpg"
    },
    photos: [
      {
        src: STORAGE + ALBOSTIPITATUM_MEDIA + "la1.webp",
        author: "Jerzy Opioła",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
        source: "https://commons.wikimedia.org/wiki/File:Lrccinum_albostipitatum_G8.jpg"
      },
      {
        src: STORAGE + ALBOSTIPITATUM_MEDIA + "la2.webp",
        author: "Holger Krisp",
        license: "CC BY 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by/3.0/",
        source: "https://commons.wikimedia.org/wiki/File:Espen-Rotkappe_Leccinum_leucopodium.JPG"
      },
      {
        src: STORAGE + ALBOSTIPITATUM_MEDIA + "la3.webp",
        author: "Bubulcus",
        license: "CC BY 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by/3.0/",
        source: "https://commons.wikimedia.org/wiki/File:Leccinum-aurantiacum-anglars.jpg"
      },
      {
        src: STORAGE + ALBOSTIPITATUM_MEDIA + "la4.webp",
        author: "Kora27",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
        source: "https://commons.wikimedia.org/wiki/File:Weißstielige_Rotkappe_(Leccinum_leucopodium)._2H1A0513WI.jpg"
      }
    ],
    capFrom: 3,
    capTo: 25,
    stipeHeightFrom: 5,
    stipeHeightTo: 27,
    stipeThickFrom: 1.2,
    stipeThickTo: 5,
    fruitingFrom: 5,
    fruitingTo: 11,
    label: {
      en: "aspen bolete",
      sk: "kozák osikový"
    },
    names: {
      sk: ["kozák", "červený kozák", "janko", "červený janko", "janík", "janek", "červenák", "husár", "honvéd", "osikovec", "osičniak", "osičník", "osikáč", "červený pán"]
    },
    text: {
      en: {
        description: "An ectomycorrhizal mushroom of aspen and poplar woods, growing singly or in loose groups. It is common in Scandinavia and in the mountains of central Europe, rarer in the lowlands and toward the south and west, and uncommon in Britain. It is also recorded from northern Asia and, rarely, North America.",
        cap: "The cap is 3–25 cm across. It is hemispherical at first, then convex, and later cushion-shaped to nearly flat, sometimes with the margin turned up. The surface is dry and finely felty or fibrillose, vivid orange to orange-red or orange-brown when young, sometimes brick-red or dark red, and it fades or cracks with age, especially in rain. The margin is thin, and the skin hangs over the tubes as a flap, up to about 4–6 mm in young fruit bodies. The cap cuticle is a cutis of narrow cylindrical hyphae.",
        hymenium: "The tubes are 7–30 mm long, ventricose, and adnexed to deeply emarginate at the stipe. They are whitish to yellowish white at first, then greyish with an olive or yellow-grey tint. The pores are small and round, about 0.5 mm across, and the same colour as the tubes. Bruised pores turn brown, violet-grey, or violet-black. The basidia are 25–35 × 7.5–11 μm and two- or four-spored. The cystidia are lageniform to clavate or fusiform, about 20–50 × 7–15 μm, often with a drawn-out tip. Clamp connections are absent.",
        stipe: "The stipe is 5–27 cm long and 1.2–5 cm thick, swollen or ventricose when young, then cylindrical or slightly club-shaped and narrower toward the top, with no ring. It is white to greyish, with fine granular scales often set in rough longitudinal lines. The scales are white at first, then orange-brown to chestnut from the base upward, and in age dark grey-brown, while the upper stipe can stay pale for a long time. Handling may bruise the base blue or blue-green. The caulocystidia are clavate to fusiform, about 15–65 × 10–16 μm.",
        flesh: "The flesh is white and thick. It is firm when young, then spongy in the cap, fibrous in the stipe, and almost woody at the base. Cut flesh flushes slate-lilac, wine-red, or violet, then brown-red, grey, or violet-black to nearly black. The base may already be greenish or bluish, and it can bruise blue. The taste is mild and the smell is slight. Ferrous sulphate turns the flesh grey-green, and formalin turns it dirty rose and then brownish violet.",
        sporePrint: "Brown, ochre-brown, or olivaceous brown. The spores are fusiform to spindle-shaped, with a conical apex and a shallow suprahilar depression, about (9.5–)11–18 × 4–5.5 μm.",
        habitat: "Fruit bodies appear from May to November, most often from June to October, and from August to November in Britain. They grow on the ground with aspen (Populus tremula), and some accounts also include other poplars, in mixed woods, at edges and in clearings, and in moist places, more often on acid soil than on dry or basic ground.",
        uses: "Firm young fruit bodies are edible when thoroughly cooked. The flesh is considered good, and it turns dark on cooking; that colour does not fade and is harmless. It should not be eaten raw.",
        confusion: "Leccinum aurantiacum has reddish-brown stipe scales already when young, denser and darker than the pale scales here, and a cap that is often redder or, in some accounts, greenish-tinted. Accounts place it with oak, or with aspen. Leccinum versipelle grows with birch, is more robust, has a yellow-ochre cap and coarse black scales, and bruises blackish without a red phase. Leccinum piceinum grows with spruce and has a greenish tint on the cap.",},
      sk: {
        description: "Ektomykorízna huba osikových a topoľových lesov, rastúca jednotlivo alebo vo voľných skupinách. V Škandinávii a v horách strednej Európy je hojná, v nížinách a smerom na juh a západ redšia a v Británii nehojná. Známa je aj zo severnej Ázie a zriedkavo zo Severnej Ameriky.",
        cap: "Klobúk má 3–25 cm v priemere. Za mladi je polguľovitý, potom klenutý a neskôr vankúšovitý až takmer plochý, niekedy s nadvihnutým okrajom. Povrch je suchý a jemne plstnatý alebo vláknitý, za mladi živo oranžový až oranžovočervený alebo oranžovohnedý, niekedy tehlovočervený alebo tmavočervený, a vekom bledne alebo puká, najmä za dažďa. Okraj je tenký a pokožka previsá nad rúrky ako blanka, pri mladých plodniciach do 4–6 mm. Pokožka klobúka je kutis z úzkych valcovitých hýf.",
        hymenium: "Rúrky sú 7–30 mm dlhé, bruchaté a pri hlúbiku pripojené až hlboko vykrojené. Za mladi sú belavé až žltkastobiele, potom sivasté s olivovým alebo žltosivým odtieňom. Póry sú drobné a okrúhle, asi 0,5 mm, a majú rovnakú farbu ako rúrky. Otlačené póry hnednú, fialovosivejú alebo fialovočernejú. Bazídiá merajú 25–35 × 7,5–11 μm a sú dvoj- alebo štvorvýtrusové. Cystidy sú fľaškovité až kyjačikovité alebo vretenovité, asi 20–50 × 7–15 μm, často s vyťahnutým hrotom. Spojky chýbajú.",
        stipe: "Hlúbik je 5–27 cm dlhý a 1,2–5 cm hrubý, za mladi vzdutý alebo bruchatý, potom valcovitý alebo slabo kyjakovitý a smerom nahor zúžený, bez prsteňa. Je biely až sivastý, s jemnými zrnitými šupinkami často v hrubých pozdĺžnych radoch. Šupinky sú za mladi biele, potom od bázy nahor oranžovohnedé až gaštanové a v starobe tmavosivohnedé, kým horná časť hlúbika môže dlho zostať bledá. Otlačením môže báza zmodrieť alebo zmodrozelenieť. Kaulocystidy sú kyjačikovité až vretenovité, asi 15–65 × 10–16 μm.",
        flesh: "Dužina je biela a hrubá. Za mladi je pevná, potom v klobúku špongiovitá, v hlúbiku vláknitá a na báze takmer drevnatá. Na reze sa najprv sfarbí na bridlicovolilovo, vínovočerveno alebo fialovo, potom na hnedočerveno, sivo alebo fialovočierno až takmer načierno. Báza môže byť už zelenkastá alebo modrastá a môže zmodrieť. Chuť je mierna a vôňa slabá. Síran železnatý farbí dužinu na sivozeleno a formalín najprv na špinavoružovo a potom na hnedofialovo.",
        sporePrint: "Hnedý, okrovohnedý alebo olivovohnedý. Výtrusy sú vretenovité, s kužeľovitým vrcholom a plytkou priehlbinou nad hilom, asi (9,5–)11–18 × 4–5,5 μm.",
        habitat: "Plodnice sa objavujú od mája do novembra, najčastejšie od júna do októbra a v Británii od augusta do novembra. Rastú na zemi s osikou (Populus tremula) a podľa niektorých údajov aj s inými topoľmi, v zmiešaných lesoch, na okrajoch a čistinách a na vlhkých miestach, častejšie na kyslej pôde ako na suchej alebo zásaditej.",
        uses: "Pevné mladé plodnice sú jedlé po dôkladnej tepelnej úprave. Dužina sa považuje za dobrú a pri varení tmavne; táto farba nezmizne a je neškodná. Surová dužina sa jesť nemá.",
        confusion: "Kozák dubový (Leccinum aurantiacum) má už za mladi červenohnedé šupinky na hlúbiku, hustejšie a tmavšie ako bledé šupinky tohto druhu, a klobúk býva často červenší alebo podľa niektorých údajov so zelenkastým odtieňom. Údaje ho viažu na dub alebo na osiku. Kozák žltooranžový (Leccinum versipelle) rastie s brezou, je mohutnejší, má žltookerový klobúk a hrubé čierne šupinky a otlačením černie bez červeného medzistupňa. Kozák smrekový (Leccinum piceinum) rastie so smrekom a má na klobúku zelenkastý odtieň.",}
    },
    sources: {
      en: [
        { group: "text", name: "Wikipedia", href: "https://en.wikipedia.org/wiki/Leccinum_albostipitatum" },
        { group: "text", name: "Wild Food UK", href: "https://www.wildfooduk.com/mushroom-guide/leccinum-albostipitatum/" },
        { group: "text", name: "de.wikipedia", href: "https://de.wikipedia.org/wiki/Weißstielige_Rotkappe" },
        { group: "text", name: "nahuby.sk", href: "https://www.nahuby.sk/atlas-hub/Leccinum-albostipitatum/kozak-osikovy/kremenac-osikovy-belotrenovy/ID210" },
        { group: "text", name: "botany.cz", href: "https://botany.cz/cs/leccinum-albostipitatum/" },
        { group: "text", name: "MycoDB", href: "https://www.mycodb.fr/fiche.php?genre=Leccinum&espece=albostipitatum" },
        { group: "text", name: "mycology.su", href: "https://mycology.su/leccinum-albostipitatum.html" },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=344338",
          detail: "344338"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=344338",
          detail: "344338"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/344338"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/7869532",
          detail: "7869532"
        },
        {
          group: "name",
          name: "Persoonia",
          href: "http://www.repository.naturalis.nl/document/570067",
          detail: "18(4): 536"
        }
      ],
      sk: [
        {
          group: "text",
          name: "Wikipedia",
          href: "https://sk.wikipedia.org/wiki/Kozák_osikový",
          detail: "kozák osikový"
        },
        {
          group: "text",
          name: "nahuby.sk",
          href: "https://www.nahuby.sk/atlas-hub/Leccinum-albostipitatum/kozak-osikovy/kremenac-osikovy-belotrenovy/ID210",
          detail: "kozák osikový"
        }
      ]
    },
    synonyms: [
      "Leccinum rufum (Schaeff.) Kreisel",
      "Boletus rufus Schaeff.",
      "Gyroporus rufus (Schaeff.) Quél.",
      "Boletopsis rufa (Schaeff.) Henn.",
      "Tubiporus rufus (Schaeff.) Ricken",
      "Krombholziella rufa Schaeff. ex Alessio"
    ]
  };

  var HYGROPHOROPSIS_MEDIA = "photos/Boletales/Hygrophoropsidaceae/Hygrophoropsis_aurantiaca/";
  var HYGROPHOROPSIS = {
    id: 39,
    name: "Hygrophoropsis aurantiaca",
    author: "(Wulfen) Maire ex Martin-Sans",
    family: "Hygrophoropsidaceae",
    genus: "Hygrophoropsis",
    order: "Boletales",
    edibility: "inedible",
    hymenium: "gills",
    path: [
      "Fungi",
      "Dikarya",
      "Basidiomycota",
      "Agaricomycotina",
      "Agaricomycetes",
      "Agaricomycetidae",
      "Boletales",
      "Hygrophoropsidaceae",
      "Hygrophoropsis"
    ],
    summary: [
      "Boletales",
      "Hygrophoropsidaceae",
      "Hygrophoropsis"
    ],
    added: "2026-10-24",
    plate: STORAGE + HYGROPHOROPSIS_MEDIA + "Hygrophoropsis_aurantiaca@1600.webp",
    plateGrid: STORAGE + HYGROPHOROPSIS_MEDIA + "Hygrophoropsis_aurantiaca@400.webp",
    plateCredit: {
      author: "L. Dufour",
      license: "public domain",
      source: "https://www.biodiversitylibrary.org/page/3270673"
    },
    photos: [
      {
        src: STORAGE + HYGROPHOROPSIS_MEDIA + "ha1.webp",
        author: "Holger Krisp",
        license: "CC BY 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by/3.0",
        source: "https://commons.wikimedia.org/wiki/File:False_Chanterelle_Hygrophoropsis_aurantiaca.jpg"
      },
      {
        src: STORAGE + HYGROPHOROPSIS_MEDIA + "ha2.webp",
        author: "Dr. Hans-Günter Wagner",
        license: "CC BY-SA 2.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
        source: "https://commons.wikimedia.org/wiki/File:Hygrophoropsis_aurantiaca_(1)_(40208365173).jpg"
      },
      {
        src: STORAGE + HYGROPHOROPSIS_MEDIA + "ha3.webp",
        author: "Stephan van Helden",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Falscher_Pfifferling_(Hygrophoropsis_aurantiaca)_nahe_der_Silberquelle_an_der_Stra%C3%9Fe_vom_Silberhaus_nach_Nagel.jpg"
      },
      {
        src: STORAGE + HYGROPHOROPSIS_MEDIA + "ha4.webp",
        author: "Bubulcus",
        license: "CC BY 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Hygrophoropsis_aurantiaca_anglars.jpg"
      },
      {
        src: STORAGE + HYGROPHOROPSIS_MEDIA + "ha5.webp",
        author: "Anneli Salo",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Hygrophoropsis_aurantiaca_Valevahvero_C_IMG_6188.jpg"
      }
    ],
    capFrom: 2,
    capTo: 10,
    stipeHeightFrom: 1.5,
    stipeHeightTo: 8,
    stipeThickFrom: 0.3,
    stipeThickTo: 1,
    fruitingFrom: 7,
    fruitingTo: 1,
    label: {
      en: "false chanterelle",
      sk: "líška oranžová"
    },
    names: {
      sk: [
        "tanečnica",
        "divé kuriatko"
      ]
    },
    text: {
      en: {
        description: "A saprotrophic mushroom of conifer and mixed woods, heaths, and woodchip beds, growing singly or in groups and sometimes in rings. It is widespread in temperate Europe, North America, and northern Asia, and it is recorded from Central and South America, Australia, and New Zealand.",
        cap: "The cap is 2–10 cm across. It is convex at first, then flat, and later depressed or funnel-shaped. The margin stays inrolled for a long time and later becomes wavy or lobed. The surface is dry and finely velvety to felty, sometimes finely scaly. The colour runs from pale yellow through orange to orange-red or orange-brown. The centre is often darker or olive-brown in age, and some fruit bodies are very pale. The cap cuticle is either a trichoderm of hyphae 4–15 μm wide or a layer of repent or tangled clamped hyphae about 7–12 μm wide. Potassium hydroxide on the cap is negative to reddish.",
        hymenium: "The gills are true, crowded, and thin, and they fork repeatedly. They run far down the stipe and can be pulled away from the flesh. They are often a brighter orange than the cap, from yellow through orange to brick-red, and they may be slightly crimped where they meet the stipe. Young gills are thicker, and later the edges are thin. They are about 1.5–4 mm wide. The basidia are 25–40 × 5–8 μm and bear two, three, or four spores. Cystidia are absent. Clamp connections are present.",
        stipe: "The stipe is 1.5–8 cm long and 0.3–1 cm thick. It has no ring, and it is often slightly off centre. It is solid at first and later hollow. It is orange, yellow, or brick-orange. Some fruit bodies are darker or blackish at the base, or brown there with handling and age. British fruit bodies are paler toward the base and slightly scaly near the apex. White mycelium may cover the base.",
        flesh: "The flesh is thin and soft, later cottony, and dry. It is white, yellowish, pale orange, or golden-orange, and it is brownish in the stipe. The smell is slight and mushroomy or unremarkable, and sometimes fragrant. The taste is unremarkable, slightly bitter or sharp, or unpleasantly sweetish to bitter.",
        sporePrint: "White to cream. The spores are ellipsoid, smooth, and colourless, about 5–8.5 × 2.5–5 μm, and they have no germ pore. The walls may thicken with age. They are usually dextrinoid, though a print may contain both dextrinoid and inamyloid spores, and they are cyanophilous.",
        habitat: "In central Europe fruit bodies appear from August to December, and in Slovakia from September to November. In Britain and Ireland they appear from August to November, in eastern North America from July to October, and on the Pacific coast from September into January, including early autumn into late winter in California. They are often plentiful after dry summers. They grow singly, scattered, or in groups, sometimes in rings, on the ground in litter, on decaying conifer wood, stumps, buried cones, and woodchips, and on heath and burned ground. They are less often in pure broadleaf woods, and they favour poor or acid soil. On wood they cause a brown rot.",
        uses: "It was long regarded as poisonous. It is not known as a serious poison, but the flavour is poor and it is not recommended as food. Some people have stomach upset, usually mild, after a large meal, and hallucinations have been reported. Serious cases have been read as a confusion with Omphalotus or as an uncommon individual reaction. It is sold in France and Belgium and eaten in France and Spain, and also by Zapotec and Tepehuán people. Advice in Italy is to leave it because of poisonous lookalikes.",
        confusion: "Cantharellus cibarius is thicker and firmer, pale yellow, with blunt ridges rather than true gills, and it smells of apricots. Cantharellus friesii is more orange, but it still has ridges and firmer flesh. Omphalotus olearius and Omphalotus illudens are poisonous. They grow in clusters on hardwood such as olive, oak, or chestnut, with thicker fruit bodies and true gills that do not fork. Hygrophoropsis rufa has a browner cap and stipe and a brown velvety or scaly surface. Hygrophoropsis macrospora has cream gills and a cream stipe, and longer spores. Hygrophoropsis fuscosquamula has fine brown scales on a dull orange cap, longer spores, and a trichoderm. Aphroditeola olida is smaller and pinkish, with a candy-like odour and smaller inamyloid spores. Chrysomphalina chrysophylla has a yellow-brown cap and unforked yellow gills. Haasiella splendidissima has a pink spore print and unforked gills. Infundibulicybe gibba is paler and has white unforked gills. A pale form of this species may have white gills as well, and those gills are still forked and easy to separate from the flesh.",
        notes: "Two former varieties are now the separate species Hygrophoropsis macrospora and Hygrophoropsis rufa. Fruit bodies filed under this name in California belong to an undescribed complex. Club-shaped fruit bodies with convoluted gill tissue, and a morel-like form, occur occasionally."},
      sk: {
        description: "Saprotrofná huba ihličnatých a zmiešaných lesov, vresovísk a plôch s drevnou štiepkou. Rastie jednotlivo alebo v skupinách a niekedy v kruhoch. Rozšírená je v miernom pásme Európy, Severnej Ameriky a severnej Ázie a zaznamenaná je aj zo Strednej a Južnej Ameriky, z Austrálie a z Nového Zélandu.",
        cap: "Klobúk má 2–10 cm v priemere. Za mladi je klenutý, potom plochý a neskôr preliačený alebo lievikovitý. Okraj ostáva dlho podvinutý a neskôr býva zvlnený alebo laločnatý. Povrch je suchý, jemne zamatový až plstnatý, niekedy jemne šupinkatý. Farba prechádza od bledožltej cez oranžovú po oranžovočervenú alebo oranžovohnedú. Stred býva vekom často tmavší alebo olivovohnedý a niektoré plodnice sú veľmi bledé. Pokožka klobúka je buď trichoderm z hýf širokých 4–15 μm, alebo vrstva pritisnutých či poprepletaných hýf so spojkami, širokých asi 7–12 μm. Hydroxid draselný na klobúku nereaguje, alebo ho sfarbí do červena.",
        hymenium: "Lupene sú pravé, husté a tenké a opakovane sa vidlicovito rozkonárujú. Zbiehajú ďaleko na hlúbik a dajú sa od dužiny odtiahnuť. Bývajú často sýtejšie oranžové ako klobúk, od žltej cez oranžovú po tehlovočervenú, a pri hlúbiku môžu byť mierne pokrčené. Mladé lupene sú hrubšie a neskôr majú tenké ostrie. Široké sú asi 1,5–4 mm. Bazídiá merajú 25–40 × 5–8 μm a nesú dva, tri alebo štyri výtrusy. Cystidy chýbajú. Spojky sú prítomné.",
        stipe: "Hlúbik je dlhý 1,5–8 cm a hrubý 0,3–1 cm. Nemá prsteň a býva často mierne mimostredový. Najprv je plný a neskôr dutý. Je oranžový, žltý alebo tehlovooranžový. Niektoré plodnice sú na báze tmavšie až černasté, alebo tam otlačením a vekom hnednú. Britské plodnice sú smerom k báze bledšie a pri vrchole jemne šupinkaté. Bázu môže pokrývať biele mycélium.",
        flesh: "Dužina je tenká a mäkká, neskôr vatovitá a suchá. Je biela, žltkastá, bledo oranžová alebo zlatooranžová a v hlúbiku hnedastá. Vôňa je slabá, hubová alebo nevýrazná, niekedy voňavá. Chuť je nevýrazná, mierne horká alebo ostrá, prípadne nepríjemne nasladlá až horká.",
        sporePrint: "Biely až krémový. Výtrusy sú elipsoidné, hladké a bezfarebné, veľké asi 5–8,5 × 2,5–5 μm, a nemajú klíčny pór. Steny môžu vekom zhrubnúť. Zvyčajne sú dextrinoidné, hoci jeden výtrusný prach môže obsahovať aj dextrinoidné, aj neamyloidné výtrusy, a sú cyanofilné.",
        habitat: "V strednej Európe sa plodnice objavujú od augusta do decembra a na Slovensku od septembra do novembra. V Británii a Írsku sa objavujú od augusta do novembra, na východe Severnej Ameriky od júla do októbra a na tichomorskom pobreží od septembra do januára, v Kalifornii od skorej jesene do neskorej zimy. Po suchých letách bývajú často hojné. Rastú jednotlivo, roztrúsene alebo v skupinách, niekedy v kruhoch, na zemi v hrabanke, na tlejúcom dreve ihličnanov, na pňoch, zahrabaných šiškách a drevnej štiepke, aj na vresoviskách a spáleniskách. V čistých listnatých lesoch sú zriedkavejšie a uprednostňujú chudobnú alebo kyslú pôdu. Na dreve spôsobujú hnedú hnilobu.",
        uses: "Dlho sa považovala za jedovatú. Ako vážny jed nie je známa, chuť je však zlá a na jedenie sa neodporúča. Niektorí ľudia majú po výdatnom jedle žalúdočné ťažkosti, zvyčajne mierne, a hlásené boli aj halucinácie. Závažné prípady sa považujú za zámenu s rodom Omphalotus alebo za nezvyčajnú individuálnu reakciu. Predáva sa vo Francúzsku a v Belgicku a jedia ju vo Francúzsku a v Španielsku, aj Zapotekovia a Tepehuáni. V Taliansku sa radí nechať ju, lebo má jedovaté podobné druhy.",
        confusion: "Kuriatko jedlé (Cantharellus cibarius) je hrubšie a tuhšie, bledožlté, má tupé lišty namiesto pravých lupeňov a vonia po marhuliach. Jedlé kuriatko oranžové (Cantharellus friesii) je oranžovejšie, no stále má lišty a tuhšiu dužinu. Jedovaté sú hliva olivová (Omphalotus olearius) a Omphalotus illudens. Rastú v trsoch na dreve listnáčov, napríklad olivy, duba alebo gaštana, majú hrubšie plodnice a pravé lupene, ktoré sa nevetvia. Líška hrdzavá (Hygrophoropsis rufa) má hnedší klobúk aj hlúbik a hnedý zamatový alebo šupinkatý povrch. Líška veľkovýtrusná (Hygrophoropsis macrospora) má krémové lupene aj krémový hlúbik a dlhšie výtrusy. Hygrophoropsis fuscosquamula má na tlmeno oranžovom klobúku jemné hnedé šupiny, dlhšie výtrusy a trichoderm. Aphroditeola olida je menšia a ružovkastá, s vôňou po cukríkoch a s menšími neamyloidnými výtrusmi. Chrysomphalina chrysophylla má žltohnedý klobúk a nevetvené žlté lupene. Haasiella splendidissima má ružový výtrusný prach a nevetvené lupene. Infundibulicybe gibba je bledšia a má biele nevetvené lupene. Bledá forma tohto druhu môže mať tiež biele lupene, tie sú však stále vidlicovité a ľahko sa oddelia od dužiny.",
        notes: "Dve niekdajšie odrody sú dnes samostatné druhy Hygrophoropsis macrospora a Hygrophoropsis rufa. Plodnice vedené pod týmto menom v Kalifornii patria k neopísanému komplexu. Občas sa vyskytnú kyjačkovité plodnice s poprehýbaným lupeňovým pletivom a aj forma podobná smrčku. Na Slovensku rastie v nížinách aj v podhorských krajoch, najmä v podhorí, a zvyčajne vo veľkých skupinách."}
    },
    sources: {
      en: [
        {
          group: "text",
          name: "Wikipedia",
          href: "https://en.wikipedia.org/wiki/Hygrophoropsis_aurantiaca"
        },
        {
          group: "text",
          name: "First Nature",
          href: "https://www.first-nature.com/fungi/hygrophoropsis-aurantiaca.php"
        },
        {
          group: "text",
          name: "MushroomExpert",
          href: "https://www.mushroomexpert.com/hygrophoropsis_aurantiaca.html"
        },
        {
          group: "text",
          name: "MykoWeb",
          href: "https://www.mykoweb.com/CAF/species/Hygrophoropsis_aurantiaca.html"
        },
        {
          group: "text",
          name: "Mushrooms Up",
          href: "https://explore.beatymuseum.ubc.ca/mushroomsup/H_aurantiaca.html"
        },
        {
          group: "text",
          name: "de.wikipedia",
          href: "https://de.wikipedia.org/wiki/Falscher_Pfifferling"
        },
        {
          group: "text",
          name: "nahuby.sk",
          href: "https://www.nahuby.sk/atlas-hub/Hygrophoropsis-aurantiaca/liska-oranzova/listicka-pomerancova/ID250"
        },
        {
          group: "text",
          name: "botany.cz",
          href: "https://botany.cz/cs/hygrophoropsis-aurantica/"
        },
        {
          group: "text",
          name: "MycoDB",
          href: "https://www.mycodb.fr/fiche.php?genre=Hygrophoropsis&espece=aurantiaca"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=357220",
          detail: "357220"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=357220",
          detail: "357220"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/357220"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/2525710",
          detail: "2525710"
        }
      ],
      sk: [
        {
          group: "text",
          name: "nahuby.sk",
          href: "https://www.nahuby.sk/atlas-hub/Hygrophoropsis-aurantiaca/liska-oranzova/listicka-pomerancova/ID250",
          detail: "líška oranžová"
        }
      ]
    },
    synonyms: [
      "Agaricus aurantiacus Wulfen",
      "Merulius aurantiacus (Wulfen) J.F. Gmel.",
      "Cantharellus aurantiacus (Wulfen) Fr.",
      "Clitocybe aurantiaca (Wulfen) Stud.-Steinh.",
      "Merulius nigripes Pers.",
      "Agaricus subcantharellus Sowerby",
      "Cantharellus brachypodus Chevall.",
      "Merulius brachypodus (Chevall.) Kuntze",
      "Cantharellus rufescens Fr.",
      "Merulius rufescens (Fr.) Kuntze",
      "Cantharellus aurantiacus Krombh.",
      "Cantharellus ravenelii Berk. & M.A. Curtis",
      "Merulius ravenelii (Berk. & M.A. Curtis) Kuntze"
    ]
  };

  var ENTOLOMA_MEDIA = "photos/Agaricales/Entolomataceae/Entoloma_sinuatum/";
  var ENTOLOMA = {
    id: 40,
    name: "Entoloma sinuatum",
    author: "(Bull.) P. Kumm.",
    family: "Entolomataceae",
    genus: "Entoloma",
    order: "Agaricales",
    edibility: "poisonous",
    hymenium: "gills",
    path: [
      "Fungi",
      "Dikarya",
      "Basidiomycota",
      "Agaricomycotina",
      "Agaricomycetes",
      "Agaricomycetidae",
      "Agaricales",
      "Entolomataceae",
      "Entoloma"
    ],
    summary: [
      "Agaricales",
      "Entolomataceae",
      "Entoloma"
    ],
    added: "2026-10-24",
    plate: STORAGE + ENTOLOMA_MEDIA + "Entoloma_sinuatum@1600.webp",
    plateGrid: STORAGE + ENTOLOMA_MEDIA + "Entoloma_sinuatum@400.webp",
    plateCredit: {
      author: "L. Dufour",
      license: "public domain",
      source: "https://www.biodiversitylibrary.org/page/3270648"
    },
    photos: [
      {
        src: STORAGE + ENTOLOMA_MEDIA + "es1.webp",
        author: "Archenzo",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Entoloma_sinuatum_group.JPG"
      },
      {
        src: STORAGE + ENTOLOMA_MEDIA + "es2.webp",
        author: "Gerhard Koller",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Entoloma_sinuatum_40542.jpg"
      },
      {
        src: STORAGE + ENTOLOMA_MEDIA + "es3.webp",
        author: "Holger Krisp",
        license: "CC BY 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Riesen-R%C3%B6tling_Entoloma_sinuatum.JPG"
      },
      {
        src: STORAGE + ENTOLOMA_MEDIA + "es4.webp",
        author: "zaca",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:2013-11-02_Entoloma_sinuatum_(Bull.)_P._Kumm_393814.jpg"
      },
      {
        src: STORAGE + ENTOLOMA_MEDIA + "es5.webp",
        author: "Jose Angel Urquia Goitia",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Entoloma_sinuatum_4.jpg"
      }
    ],
    capFrom: 5,
    capTo: 20,
    stipeHeightFrom: 5,
    stipeHeightTo: 15,
    stipeThickFrom: 1,
    stipeThickTo: 3,
    fruitingFrom: 5,
    fruitingTo: 11,
    label: {
      en: "livid pinkgill",
      sk: "hodvábnica veľká"
    },
    names: {
      en: [
        "livid entoloma",
        "livid agaric",
        "leaden entoloma",
        "lead poisoner",
        "grey pinkgill"
      ],
      sk: [
        "zvonovec veľký",
        "zvonovec olovový"
      ]
    },
    text: {
      en: {
        description: "A mushroom of warmer broadleaf woods, most often with oak and beech. It is treated as mycorrhizal with those trees and with willow, though a saprotrophic habit is allowed. It ranges from the Mediterranean to Denmark, southern Norway, Estonia, and Belarus, and it is reported from North America and northern Asia.",
        cap: "The cap is commonly 5–20 cm across, and a width of 30 cm has been recorded. It begins hemispherical, conical, or bell-shaped, with an inrolled margin, then becomes convex and later flattened and wavy, often with a broad blunt umbo. The surface is smooth, silky, and finely innate-fibrillose, sometimes spotted or netted with fibres, and slightly sticky when young. The thin skin can be peeled. It is not hygrophanous. Colours run from ivory and whitish through yellowish, grey-ochre, pale grey-brown, and ochre, sometimes with a faint lilac-grey tint, and the cap darkens with age. The margin is thin, later wavy, and it may split in hot weather. Pigment in the cap cuticle is intracellular.",
        hymenium: "The gills are distant, broad, and fairly thick, about 8–15 mm wide and short relative to the cap. They are sinuate to adnexed or adnate, sometimes almost free, and sometimes with a small decurrent tooth, and they are not truly decurrent. Cross-veins run at the base, and short gills are mixed in. They are whitish at first and stay yellowish or cream for a long time, then become yellowish salmon-pink to flesh-pink, and later flesh-red or brownish pink. A form without yellow in the gills is rare and is known from widely separated places. The basidia are four-spored and clamped, about 27–35 × 7.5–9.5 μm. Cystidia are absent from the gill edge. Clamp connections are frequent on the hyphal septa.",
        stipe: "The stipe is commonly 5–15 cm long and 1–3 cm thick. Published extremes run from about 3–20 cm long and 0.5–4 cm thick. It is white to ivory and later cream-yellowish. It is cylindrical and stout, often club-shaped or bulbous at the base, and it has no ring. The surface is fibrous, grooved, and shiny, pruinose at the apex and white-felted at the base. The stipe is solid and firm at first, later spongy or hollow, and brittle.",
        flesh: "The flesh is white, thick, firm, and shiny, and it does not change when cut. Young fruit bodies smell and taste of fresh meal. With age the smell becomes unpleasant and may turn sour, radish-like, sweetish, or rancid. The taste is mild when young.",
        sporePrint: "The print is flesh-pink to pink or flesh-reddish, and one account calls it reddish-brown. The spores are angular and subisodiametric to weakly heterodiametric, with five to seven angles and often six. They are mostly 8–11.5 × 7–9.5 μm, commonly about 9–11 × 8–9 μm, with a length-to-width ratio of about 1.0–1.3 and a mean near 1.2. They are smooth and pale yellowish pink, and each has one large oil drop.",
        habitat: "In central Europe fruit bodies appear mainly from June to September or October, and in Germany mainly from August to October, rarely in early summer or later. In Slovakia they run from early July, rarely from late May, into September, in warmer open deciduous woods, especially oak woods, and also on pond banks and along tree lines. The species favours warmth and is absent from colder mountain districts and from more acid soils. In Britain and Ireland it fruits from early summer to late autumn, and around the Mediterranean it can continue into winter. In North America it fruits in summer and autumn. Fruit bodies grow singly or in groups, often in rings, in open beech, oak-hornbeam, and beech-fir woods, at woodland edges, and in hedges, parks, and meadows. The soils are fresh to moist or alternately wet, clayey or calcareous, and moderately rich in nutrients. The usual partners are beech and oak, and also hornbeam, hazel, birch, and willow.",
        uses: "It causes severe gastrointestinal poisoning. Symptoms begin from about half an hour to four hours after a meal and include nausea, vomiting, colicky pain, diarrhoea, and headache, with loss of fluid and salts, cramps, and sometimes circulatory collapse. The illness can last about two days, or several days. Acute liver toxicity and psychiatric symptoms, including a change of mood, delirium, confusion, and depression, are uncommon, and the depression may last for months. The poisoning can be fatal, especially in children and in frail people, though it is often severe and not fatal. Deaths of adults and of children have been reported. It accounts for a large share of mushroom poisonings in Europe, about a tenth in one reckoning, including 70 hospital cases in Geneva in 1983 and 33 of 145 cases over five years at one hospital in Parma. The toxins have not been isolated. Vinylglycine has been suspected, lectins that clump type-A blood cells have been reported, and an insecticidal effect on fruit flies has been recorded.",
        confusion: "Calocybe gambosa has crowded white gills that never turn pink, a white spore print, and a stronger mealy smell, and it fruits mainly in spring. The two can grow together at a woodland edge. Entoloma sepium also fruits earlier, in that same spring season. Clitopilus prunulus has decurrent gills and a mealy smell, and its gills are whitish and then pink. Clitocybe nebularis has crowded whitish decurrent gills that do not turn pink, a sweetish smell, and a later season. Entoloma lividoalbum has a hygrophanous cap. Tricholoma columbetta is white, with a satiny cap and stipe, a faint smell that is not mealy, and a white spore print. Agaricus campestris has a ring, gills that turn from pink to chocolate brown, and a dark brown spore print. Clitocybe multiceps grows in the Pacific Northwest, has white spores, and generally grows in clumps. Other species of Entoloma are generally smaller, and Tricholoma has white spores.",
        notes: "Fruit bodies once distinguished as Entoloma eulividum, with an ochre cap and gills that lack yellow, are included here."},
      sk: {
        description: "Huba teplejších listnatých lesov, najčastejšie s dubom a bukom. Pokladá sa za ektomykoríznu s týmito drevinami a s vŕbou, hoci sa pripúšťa aj saprotrofný spôsob života. Siaha od Stredomoria po Dánsko, južné Nórsko, Estónsko a Bielorusko a udáva sa zo Severnej Ameriky a zo severnej Ázie.",
        cap: "Klobúk máva v priemere 5–20 cm a zaznamenaná je aj šírka 30 cm. Za mladi je polguľovitý, kužeľovitý alebo zvoncovitý, s podvinutým okrajom, potom klenutý a neskôr sploštený a vlnitý, často so širokým tupým hrboľom. Povrch je hladký, hodvábny a jemne vrostlo vláknitý, niekedy škvrnitý alebo popretkávaný vláknami, a za mladi mierne lepkavý. Tenká pokožka sa dá stiahnuť. Nie je hygrofánny. Farba prechádza od slonovinovej a belavej cez žltkastú, sivookrovú, bledosivohnedú a okrovú, niekedy so slabým lilavosivým nádychom, a klobúk vekom tmavne. Okraj je tenký, neskôr vlnitý a v horúcom počasí sa môže trhať. Pigment v pokožke klobúka je vnútrobunkový.",
        hymenium: "Lupene sú riedke, široké a pomerne hrubé, asi 8–15 mm široké a v pomere ku klobúku krátke. Sú vykrojené až úzko prirastené alebo prirastené, niekedy takmer voľné a niekedy s malým zbiehavým zúbkom, a nie sú naozaj zbiehavé. Pri báze ich spájajú priečne žilky a primiešané sú krátke lupene. Najprv sú belavé a dlho ostávajú žltkasté alebo krémové, potom žltkasto lososovoružové až mäsovoružové a neskôr mäsovočervené alebo hnedoružové. Forma bez žltej farby v lupeňoch je zriedkavá a pozná sa z navzájom vzdialených miest. Bazídiá sú štvorvýtrusové a na báze so spojkou, veľké asi 27–35 × 7,5–9,5 μm. Na ostrí lupenov cystidy chýbajú. Spojky sú na priehradkách hýf časté.",
        stipe: "Hlúbik býva dlhý 5–15 cm a hrubý 1–3 cm. Uverejnené krajné hodnoty sú asi 3–20 cm na dĺžku a 0,5–4 cm na hrúbku. Je biely až slonovinový a neskôr krémovožltkastý. Je valcovitý a mohutný, často kyjakovitý alebo na báze hľuzovitý, a nemá prsteň. Povrch je vláknitý, ryhovaný a lesklý, na vrchole oinovatený a na báze bielo plstnatý. Najprv je plný a pevný, neskôr špongiovitý alebo dutý a krehký.",
        flesh: "Dužina je biela, hrubá, pevná a lesklá a na reze sa nemení. Mladé plodnice majú vôňu a chuť čerstvej múky. Vekom sa vôňa stáva nepríjemnou a môže byť kyslastá, reďkovkovitá, sladkastá alebo žluknutá. Chuť je za mladi mierna.",
        sporePrint: "Výtrusný prach je mäsovoružový až ružový alebo mäsovočervenkastý a jeden údaj ho označuje za červenohnedý. Výtrusy sú hranaté a takmer izodiametrické až slabo heterodiametrické, s piatimi až siedmimi uhlami, často so šiestimi. Merajú väčšinou 8–11,5 × 7–9,5 μm, bežne asi 9–11 × 8–9 μm, s pomerom dĺžky k šírke asi 1,0–1,3 a so strednou hodnotou blízko 1,2. Sú hladké a bledožltoružové a každý má jednu veľkú olejovú kvapku.",
        habitat: "V strednej Európe sa plodnice objavujú najmä od júna do septembra alebo októbra a v Nemecku najmä od augusta do októbra, zriedka na začiatku leta alebo neskôr. Na Slovensku rastú od začiatku júla, zriedka od konca mája, do septembra, v teplejších otvorených listnatých lesoch, najmä v dubinách, a aj na brehoch rybníkov a v stromoradiach. Druh uprednostňuje teplo a chýba v chladnejších horských oblastiach a na kyslejších pôdach. V Británii a Írsku plodí od skorého leta do neskorej jesene a v okolí Stredomoria môže pokračovať do zimy. V Severnej Amerike plodí v lete a na jeseň. Plodnice rastú jednotlivo alebo v skupinách, často v kruhoch, v otvorených bučinách, dubovo-hrabových a bukovo-jedľových lesoch, na okrajoch lesov, v živých plotoch, parkoch a na lúkach. Pôdy sú čerstvé až vlhké alebo striedavo mokré, ílovité alebo vápnité a stredne bohaté na živiny. Obvyklými partnermi sú buk a dub, a tiež hrab, lieska, breza a vŕba.",
        uses: "Spôsobuje ťažkú žalúdočno-črevnú otravu. Príznaky nastupujú asi od pol hodiny do štyroch hodín po jedle a zahŕňajú nevoľnosť, vracanie, kolikovitú bolesť, hnačku a bolesť hlavy, so stratou tekutín a solí, s kŕčmi a niekedy s obehovým kolapsom. Choroba môže trvať asi dva dni, prípadne niekoľko dní. Akútna toxicita pečene a psychiatrické príznaky, vrátane zmeny nálady, delíria, zmätenosti a depresie, sú nezvyčajné a depresia môže trvať mesiace. Otrava môže byť smrteľná, najmä u detí a u oslabených ľudí, hoci často býva ťažká a nie smrteľná. Zaznamenané sú úmrtia dospelých aj detí. Podieľa sa na veľkej časti otráv hubami v Európe, podľa jedného výpočtu asi na desatine, vrátane 70 nemocničných prípadov v Ženeve v roku 1983 a 33 zo 145 prípadov za päť rokov v jednej nemocnici v Parme. Toxíny neboli izolované. Vinylglycín je podozrivý, boli hlásené lektíny, ktoré zhlukujú červené krvinky skupiny A, a zaznamenaný bol insekticídny účinok na octomilky.",
        confusion: "Čírovnica májová (Calocybe gambosa) má husté biele lupene, ktoré nikdy nezružovejú, biely výtrusný prach a výraznejšiu múčnu vôňu a plodí najmä na jar. Obe môžu rásť spolu na okraji lesa. Entoloma sepium plodí tiež skôr, v tom istom jarnom období. Machovka obyčajná (Clitopilus prunulus) má zbiehavé lupene a múčnu vôňu a jej lupene sú najprv belavé a potom ružové. Strmuľka inovaťová (Clitocybe nebularis) má husté belavé zbiehavé lupene, ktoré nezružovejú, sladkastú vôňu a neskoršiu sezónu. Hodvábnica šedobiela (Entoloma lividoalbum) má hygrofánny klobúk. Čírovka hodvábna (Tricholoma columbetta) je biela, s hodvábne lesklým klobúkom a hlúbikom, so slabou vôňou, ktorá nie je múčna, a s bielym výtrusným prachom. Pečiarka poľná (Agaricus campestris) má prsteň, lupene prechádzajúce z ružovej do čokoládovohnedej a tmavohnedý výtrusný prach. Clitocybe multiceps rastie na pacifickom severozápade, má biele výtrusy a zvyčajne rastie v trsoch. Ostatné druhy rodu hodvábnica (Entoloma) bývajú menšie a rod čírovka (Tricholoma) má biele výtrusy.",
        notes: "Plodnice kedysi odlíšené ako Entoloma eulividum, s okrovým klobúkom a s lupeňmi bez žltej farby, sú sem zahrnuté."}
    },
    sources: {
      en: [
        {
          group: "text",
          name: "Wikipedia",
          href: "https://en.wikipedia.org/wiki/Entoloma_sinuatum"
        },
        {
          group: "text",
          name: "First Nature",
          href: "https://www.first-nature.com/fungi/entoloma-sinuatum.php"
        },
        {
          group: "text",
          name: "Fungipedia",
          href: "https://www.fungipedia.org/en/hongos/entoloma-sinuatum.html"
        },
        {
          group: "text",
          name: "de.wikipedia",
          href: "https://de.wikipedia.org/wiki/Riesen-Rötling"
        },
        {
          group: "text",
          name: "sk.wikipedia",
          href: "https://sk.wikipedia.org/wiki/Hodvábnica_veľká"
        },
        {
          group: "text",
          name: "cs.wikipedia",
          href: "https://cs.wikipedia.org/wiki/Závojenka_olovová"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=224074",
          detail: "224074"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=224074",
          detail: "224074"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/224074"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/2539308",
          detail: "2539308"
        },
        {
          group: "name",
          name: "NCBI",
          href: "https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=285111",
          detail: "285111"
        }
      ],
      sk: [
        {
          group: "text",
          name: "Wikipedia",
          href: "https://sk.wikipedia.org/wiki/Hodvábnica_veľká",
          detail: "hodvábnica veľká"
        }
      ]
    },
    synonyms: [
      "Agaricus sinuatus Bull.",
      "Rhodophyllus sinuatus (Bull.) Quél.",
      "Hyporrhodius sinuatus (Bull.) Mig.",
      "Agaricus lividus Bull.",
      "Entoloma lividum Quél.",
      "Entoloma camelinum (Lasch) P. Kumm.",
      "Agaricus arenarius (Laterrade) Lév.",
      "Rhodophyllus lividus (Quél.) Quél.",
      "Hyporrhodius lividus (Quél.) J. Schröt.",
      "Entoloma eulividum Noordel."
    ]
  };

  var PHALLUS_MEDIA = "photos/Phallales/Phallaceae/Phallus_impudicus/";
  var PHALLUS = {
    id: 41,
    name: "Phallus impudicus",
    author: "L.",
    family: "Phallaceae",
    genus: "Phallus",
    order: "Phallales",
    edibility: "edible",
    hymenium: "gleba",
    path: [
      "Fungi",
      "Dikarya",
      "Basidiomycota",
      "Agaricomycotina",
      "Agaricomycetes",
      "Phallomycetidae",
      "Phallales",
      "Phallaceae",
      "Phallus"
    ],
    summary: [
      "Phallales",
      "Phallaceae",
      "Phallus"
    ],
    added: "2026-10-24",
    plate: STORAGE + PHALLUS_MEDIA + "Phallus_impudicus@1600.webp",
    plateGrid: STORAGE + PHALLUS_MEDIA + "Phallus_impudicus@400.webp",
    plateCredit: {
      author: "L. Dufour",
      license: "public domain",
      source: "https://www.biodiversitylibrary.org/page/3270863"
    },
    photos: [
      {
        src: STORAGE + PHALLUS_MEDIA + "ph1.webp",
        author: "Jörg Hempel",
        license: "CC BY-SA 3.0 de",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/de/",
        source: "https://commons.wikimedia.org/wiki/File:Phallus_impudicus_LC0235.jpg"
      },
      {
        src: STORAGE + PHALLUS_MEDIA + "ph2.webp",
        author: "Federmaus",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Aufrecht.jpg"
      },
      {
        src: STORAGE + PHALLUS_MEDIA + "ph3.webp",
        author: "Danny S.",
        license: "CC BY-SA 2.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
        source: "https://commons.wikimedia.org/wiki/File:Phallus-impudicus027_(cropped).jpg"
      },
      {
        src: STORAGE + PHALLUS_MEDIA + "ph4.webp",
        author: "Danny S.",
        license: "CC BY-SA 2.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
        source: "https://commons.wikimedia.org/wiki/File:Phallus-impudicus028.jpg"
      },
      {
        src: STORAGE + PHALLUS_MEDIA + "ph5.webp",
        author: "Bautsch",
        license: "CC0",
        licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
        source: "https://commons.wikimedia.org/wiki/File:Stinkmorchel.ohne.Fliegen.P1094311.jpg"
      }
    ],
    capFrom: 2.5,
    capTo: 5,
    stipeHeightFrom: 10,
    stipeHeightTo: 30,
    stipeThickFrom: 2,
    stipeThickTo: 5,
    fruitingFrom: 5,
    fruitingTo: 11,
    label: {
      en: "common stinkhorn",
      sk: "hadovka smradľavá"
    },
    names: {
      en: [
        "stinkhorn",
        "witch's egg"
      ]
    },
    text: {
      en: {
        description: "A saprotrophic fungus of humus-rich soil and rotting wood in woods, parks, and gardens. It is widespread from the Mediterranean through central Europe to Ireland, Scotland, and Scandinavia, and it is reported from much of North America and from parts of Asia, Africa, Central America, south-eastern Australia, and Iceland.",
        cap: "The young fruit body is an egg, commonly 3–6 cm high and 3–6 cm across, sometimes to about 8 cm across. It is whitish to cream or pinkish, and sometimes yellowish or purplish, on white mycelial cords that may themselves be purplish. The mature head is thimble- or bell-shaped, about 2–4.5 cm high and 2.5–5 cm across, and about 3–6 cm high in central North America, with a small white disc at the tip. Under the slime the surface is a white honeycomb of deep pits. After insects remove the slime the head is pale to yellowish and pitted, and the bare stalk can persist for several days.",
        hymenium: "The fertile surface is a gleba, a dark olive-green to greenish-brown slime over the pitted head, dark brown in some North American collections. It smells strongly of carrion. Flies eat it and carry the spores away, so that within a few hours the white honeycomb shows through. In the unopened egg the gleba is the greenish layer around the developing head, inside a thick white jelly. There are no gills and no tubes.",
        stipe: "The stalk is white, hollow, and brittle, with a spongy wall of small chambers, about one to three per millimetre. It is commonly 10–25 cm tall and 2–4 cm thick, and a fully expanded fruit body can reach about 30 cm tall and 4–5 cm thick. Central North American stems are often shorter, about 7–11 cm tall and 2–3 cm thick. A volva of two or three lobes, about 3–5 cm high and left from the egg, clasps the base. European collections are usually whitish to cream. North American collections are described as whitish, yellowish, pinkish, purplish, or reddish brown.",
        flesh: "The stalk flesh is white, fragile, and about 2–5 mm thick. Apart from the gleba the odour is earthy or sweet, and the taste is indistinct. The unopened egg smells of radish. The carrion smell of an expanded fruit body comes from the gleba. Iron salts and potassium hydroxide give no colour change on the surfaces.",
        sporePrint: "There is no ordinary spore print. The spores remain in the olive gleba, where they look pale yellow to greenish yellow, until insects carry them off. They are smooth and oblong-ellipsoid to subcylindric. Central European measurements are about 3.5–5 × 1.5–2 μm. A wider published range is 3–5 × 1.5–2.5 μm, and central North American collections are smaller, about 3–4 × 1–1.5 μm.",
        habitat: "Fruit bodies appear from May to November. In Britain and Ireland the open ones are mostly June to October, while the eggs may be present through the year and usually open in summer. In central Europe the season runs from early summer into autumn, commonly June to September, with occasional winter finds. In warmer parts of North America it can fruit from spring through autumn, or into winter. It grows on humus-rich soil and on rotting wood, often beside stumps, in spruce, beech, beech-fir, oak-hornbeam, floodplain, and alder woods, and in scrub, parks, hedges, gardens, lawns, shrubberies, and along paths. It is particularly frequent in coniferous woods. Damp, nitrogen-rich ground is typical, sometimes beside streams, and fruit bodies are often gregarious.",
        uses: "The unopened egg is eaten. The skin and the jelly are peeled away, and the firm white centre is eaten raw, crisp and tasting of radish, or breaded and fried. In France and Germany the eggs are pickled or put into sausages. Accounts of the taste do not all agree. The expanded fruit body is left because of the smell.",
        confusion: "Phallus hadriani has a pink to violet egg and volva and a shorter stalk. In Britain it grows on sand dunes, and elsewhere on sandy soil in warm districts. In North America the volva of this species varies from whitish through yellowish and pinkish to purplish or reddish brown, so a purple volva alone does not separate the two. Some western North American accounts still use a purplish volva for Phallus hadriani. Mutinus caninus is much smaller, smells more weakly, and has an orange honeycomb under the gleba rather than a white honeycomb on a separate head. Mutinus ravenelii is separated in the same way, and a Mutinus stalk does not break cleanly out of the egg. A coarse white net or lace-like skirt under the head is treated as a variety of this species, as var. pseudoduplicatus or var. togatus. British accounts have applied Dictyophora duplicata to that veiled form. Central European accounts keep the netted fungus as a variety rather than as a separate American species. Once the gleba has been removed, the pitted head can resemble Morchella esculenta. The remaining volva, the hollow spongy stalk, traces of slime, and fruiting in summer and autumn rather than spring separate them. Phallus ravenelii is more common east of the Mississippi, and this species is reported more often to the west.",
        notes: "After the egg opens the stalk can lengthen by 10–15 cm in an hour, and the expanding fruit body can exert about 1.33 kPa, enough to push up through asphalt. Blow-flies, among them Calliphora vicina, Lucilia caesar, and Lucilia ampullacea, and the fly Dryomyza anilis eat the gleba and soon drop spore-filled liquid faeces. The beetles Oeceoptoma thoracica and Meligethes viridescens are attracted and feed more on the tissue."},
      sk: {
        description: "Saprotrofná huba humóznej pôdy a tlejúceho dreva v lesoch, parkoch a záhradách. Rozšírená je od Stredomoria cez strednú Európu po Írsko, Škótsko a Škandináviu a zaznamenaná je z veľkej časti Severnej Ameriky aj z častí Ázie, Afriky, Strednej Ameriky, juhovýchodnej Austrálie a Islandu.",
        cap: "Mladá plodnica je vajce, zvyčajne vysoké 3–6 cm a široké 3–6 cm, niekedy až asi 8 cm. Je belavá až krémová alebo ružovkastá, niekedy žltkastá alebo purpurová, na bielych mycélových povrázkoch, ktoré samy môžu byť purpurové. Dospelý klobúk je náprstkovitý alebo zvoncovitý, vysoký asi 2–4,5 cm a široký 2,5–5 cm, v strednej časti Severnej Ameriky vysoký asi 3–6 cm, s malým bielym diskom na vrchole. Pod slizom je povrch biela voština z hlbokých jamiek. Keď hmyz sliz odstráni, klobúk je bledý až žltkastý a jamkovitý a holý hlúbik môže pretrvať niekoľko dní.",
        hymenium: "Plodnú vrstvu tvorí gléba, tmavý olivovozelený až zelenohnedý sliz na jamkovitom klobúku, v niektorých severoamerických zberoch tmavohnedý. Silno páchne po zdochine. Muchy ju požierajú a roznášajú výtrusy, takže v priebehu niekoľkých hodín presvitá biela voština. V neotvorenom vajci je gléba zelenkastá vrstva okolo vyvíjajúceho sa klobúka, vnútri hrubého bieleho rôsolu. Lupene ani rúrky nemá.",
        stipe: "Hlúbik je biely, dutý a krehký, s hubovitou stenou z malých komôrok, asi jednej až troch na milimeter. Zvyčajne je vysoký 10–25 cm a hrubý 2–4 cm a úplne rozvinutá plodnica môže dosiahnuť asi 30 cm výšky a 4–5 cm hrúbky. Hlúbiky v strednej časti Severnej Ameriky bývajú často kratšie, asi 7–11 cm vysoké a 2–3 cm hrubé. Pošva z dvoch alebo troch lalokov, vysoká asi 3–5 cm a zostávajúca z vajca, objíma bázu. Európske zbery bývajú zvyčajne belavé až krémové. Severoamerické zbery sa opisujú ako belavé, žltkasté, ružovkasté, purpurové alebo červenohnedé.",
        flesh: "Dužina hlúbika je biela, krehká a hrubá asi 2–5 mm. Okrem gléby je vôňa zemitá alebo sladká a chuť nevýrazná. Neotvorené vajce vonia po reďkovke. Zápach zdochliny rozvinutej plodnice pochádza z gléby. Soli železa ani hydroxid draselný nespôsobia na povrchoch zmenu farby.",
        sporePrint: "Bežný výtrusný prach sa netvorí. Výtrusy ostávajú v olivovej glébe, kde vyzerajú bledožlté až zelenkastožlté, kým ich hmyz neodnesie. Sú hladké a podlhovasto elipsoidné až takmer valcovité. Stredoeurópske miery sú asi 3,5–5 × 1,5–2 μm. Širší uverejnený rozsah je 3–5 × 1,5–2,5 μm a zbery zo strednej časti Severnej Ameriky sú menšie, asi 3–4 × 1–1,5 μm.",
        habitat: "Plodnice sa objavujú od mája do novembra. V Británii a Írsku sú otvorené plodnice najmä od júna do októbra, kým vajcia môžu byť prítomné po celý rok a zvyčajne sa otvárajú v lete. V strednej Európe trvá sezóna od skorého leta do jesene, zvyčajne od júna do septembra, s ojedinelými zimnými nálezmi. V teplejších častiach Severnej Ameriky môže plodiť od jari do jesene, prípadne do zimy. Rastie na humóznej pôde a na tlejúcom dreve, často pri pňoch, v smrekových, bukových, bukovo-jedľových, dubovo-hrabových, lužných a jelšových lesoch, aj v krovinách, parkoch, živých plotoch, záhradách, na trávnikoch, v kroviskách a pozdĺž ciest. Najhojnejšia je v ihličnatých lesoch. Typická je vlhká pôda bohatá na dusík, niekedy pri potokoch, a plodnice bývajú často v skupinách.",
        uses: "Je sa neotvorené vajce. Koža a rôsol sa olúpnu a pevný biely stred sa je surový, chrumkavý, s chuťou reďkovky, alebo sa obalí a vypráža. Vo Francúzsku a v Nemecku sa vajcia nakladajú alebo dávajú do klobás. Výklady chuti sa nezhodujú. Rozvinutá plodnica sa necháva pre zápach.",
        confusion: "Hadovka Hadriánova (Phallus hadriani) má ružové až fialové vajce a pošvu a kratší hlúbik. V Británii rastie na pieskových dunách a inde na piesočnatej pôde v teplých krajoch. V Severnej Amerike sa pošva tohto druhu mení od belavej cez žltkastú a ružovkastú po purpurovú alebo červenohnedú, takže samotná purpurová pošva tieto dve huby neoddelí. Niektoré západoamerické výklady stále používajú purpurovú pošvu na oddelenie hadovky Hadriánovej. Psovka obyčajná (Mutinus caninus) je oveľa menšia, zapácha slabšie a pod glébou má oranžovú voštinu, nie bielu voštinu na oddelenom klobúku. Mutinus ravenelii sa oddeľuje rovnako a hlúbik rodu Mutinus sa z vajca čisto neodlomí. Hrubá biela sieť alebo čipkovitá suknička pod klobúkom sa považuje za odrodu tohto druhu, za var. pseudoduplicatus alebo var. togatus. Britské výklady na túto závojnatú formu použili meno Dictyophora duplicata. Stredoeurópske výklady ponechávajú sieťovanú hubu ako odrodu, nie ako samostatný americký druh. Po odstránení gléby môže jamkovitý klobúk pripomínať smrčok jedlý (Morchella esculenta). Oddelí ich zostávajúca pošva, dutý hubovitý hlúbik, stopy slizu a plodnie v lete a na jeseň, nie na jar. Phallus ravenelii je častejšia na východ od Mississippi a tento druh sa uvádza častejšie na západ od nej.",
        notes: "Po otvorení vajca sa hlúbik môže predĺžiť o 10–15 cm za hodinu a rozpínajúca sa plodnica môže vyvinúť tlak asi 1,33 kPa, dosť na to, aby sa pretlačila cez asfalt. Bzučivky, medzi nimi Calliphora vicina, Lucilia caesar a Lucilia ampullacea, a mucha Dryomyza anilis požierajú glébu a čoskoro vypúšťajú tekuté výkaly plné výtrusov. Chrobáky Oeceoptoma thoracica a Meligethes viridescens sú priťahované a viac sa živia pletivom. Na Slovensku rastie v lesoch takmer ako burinný druh a často aj na úkor iných druhov."}
    },
    sources: {
      en: [
        {
          group: "text",
          name: "First Nature",
          href: "https://www.first-nature.com/fungi/phallus-impudicus.php"
        },
        {
          group: "text",
          name: "Wikipedia",
          href: "https://en.wikipedia.org/wiki/Phallus_impudicus"
        },
        {
          group: "text",
          name: "MushroomExpert",
          href: "https://www.mushroomexpert.com/phallus_impudicus.html"
        },
        {
          group: "text",
          name: "de.wikipedia",
          href: "https://de.wikipedia.org/wiki/Gemeine_Stinkmorchel"
        },
        {
          group: "text",
          name: "myko.cz",
          href: "https://www.myko.cz/myko-atlas/Phallus-impudicus/"
        },
        {
          group: "text",
          name: "grzyby.pl",
          href: "https://grzyby.pl/gatunki/Phallus_impudicus.htm"
        },
        {
          group: "text",
          name: "pl.wikipedia",
          href: "https://pl.wikipedia.org/wiki/Sromotnik_smrodliwy"
        },
        {
          group: "text",
          name: "sk.wikipedia",
          href: "https://sk.wikipedia.org/wiki/Hadovka_smradľavá"
        },
        {
          group: "text",
          name: "Encyclopaedia Beliana",
          href: "https://beliana.sav.sk/heslo/hadovka"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=245934",
          detail: "245934"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=245934",
          detail: "245934"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/245934"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/3314876",
          detail: "3314876"
        }
      ],
      sk: [
        {
          group: "text",
          name: "Encyclopaedia Beliana",
          href: "https://beliana.sav.sk/heslo/hadovka",
          detail: "hadovka smradľavá"
        },
        {
          group: "text",
          name: "Wikipedia",
          href: "https://sk.wikipedia.org/wiki/Hadovka_smradľavá",
          detail: "hadovka smradľavá"
        }
      ]
    },
    synonyms: [
      "Morellus impudicus (L.) Eaton",
      "Ithyphallus impudicus (L.) Fr.",
      "Phallus volvatus Batsch",
      "Phallus foetidus Sowerby",
      "Hymenophallus togatus Kalchbr.",
      "Kirchbaumia imperialis Schulzer ex De Toni",
      "Ithyphallus mauritianus (Lloyd) Sacc. & Traverso",
      "Phallus mauritianus Lloyd"
    ]
  };

  var FOMES_MEDIA = "photos/Polyporales/Polyporaceae/Fomes_fomentarius/";
  var FOMES = {
    id: 42,
    name: "Fomes fomentarius",
    author: "(L.) Fr.",
    family: "Polyporaceae",
    genus: "Fomes",
    order: "Polyporales",
    edibility: "inedible",
    hymenium: "tubes",
    path: ["Fungi", "Dikarya", "Basidiomycota", "Agaricomycotina", "Agaricomycetes", "Incertae sedis", "Polyporales", "Polyporaceae", "Fomes"],
    summary: ["Polyporales", "Polyporaceae", "Fomes"],
    added: "2026-10-24",
    plate: STORAGE + FOMES_MEDIA + "Fomes_fomentarius@1600.webp",
    plateGrid: STORAGE + FOMES_MEDIA + "Fomes_fomentarius@400.webp",
    plateCredit: {
      author: "F. E. Köhler",
      license: "public domain",
      source: "https://commons.wikimedia.org/wiki/File:Fomes_fomentarius_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-111.jpg"
    },
    photos: [
      {
        src: STORAGE + FOMES_MEDIA + "ff1.webp",
        author: "George Chernilevsky",
        license: "CC BY 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Fomes_fomentarius_2025_G1.jpg"
      },
      {
        src: STORAGE + FOMES_MEDIA + "ff2.webp",
        author: "Heinonlein",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Echte_tonderzwam_(Fomes_fomentarius)_09.JPG"
      },
      {
        src: STORAGE + FOMES_MEDIA + "ff3.webp",
        author: "George Chernilevsky",
        license: "public domain",
        source: "https://commons.wikimedia.org/wiki/File:Fomes_fomentarius_inside_2009_G1.jpg"
      },
      {
        src: STORAGE + FOMES_MEDIA + "ff4.webp",
        author: "Gilles San Martin",
        license: "CC BY-SA 2.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
        source: "https://commons.wikimedia.org/wiki/File:Fomes_fomentarius_(49558623491).jpg"
      },
      {
        src: STORAGE + FOMES_MEDIA + "ff5.webp",
        author: "Heinonlein",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Echte_tonderzwam_(Fomes_fomentarius)_05.JPG"
      }
    ],
    capFrom: 10,
    capTo: 50,
    fruitingFrom: 1,
    fruitingTo: 12,
    label: {
      en: "tinder fungus",
      sk: "práchnovec kopytovitý"
    },
    names: {
      en: ["hoof fungus", "tinder conk", "tinder polypore", "ice man fungus", "false tinder fungus", "tinder bracket"],
      sk: ["hubáň", "hubaňa", "vakalia", "bakalia", "trud"]
    },
    text: {
      en: {
        description: "A perennial white-rot bracket of hardwoods, parasitic on the living trunk and saprotrophic on dead wood and stumps. It ranges through temperate Europe, North Africa, the Canary Islands, and Asia, including India and Pakistan, to eastern North America, and it occurs in southern Africa. It is rare in southern Britain and Ireland and common in Scotland.",
        cap: "The fruit body is perennial and sessile, hoof-shaped or a thick bracket, and attached along its full width. It is often solitary, and sometimes tiered or fused. The width is commonly 10–40 cm, with large fruit bodies to about 50 cm and exceptional ones to 60 cm. On birch it is usually smaller, often to about 20 cm across. The height is commonly about 7–15 cm and reaches about 20–25 cm in old fruit bodies, with a thickness of about 20 cm at the attachment. After the first years the bracket thickens more than it widens. The surface is a hard, dull crust about 1–3 mm thick, black and glossy in section, concentrically ridged, and not varnished. It is pale grey, grey-brown, grey-ochre, dirty yellowish brown, or nut-brown when young, and silvery grey to nearly black when old. Young fruit bodies and the growing zone are yellow, reddish brown, rust-brown, or leather-yellow. The margin is blunt and rounded, and paler than the crust behind it.",
        hymenium: "The tubes are rusty brown to brown and laid down in layers. Each layer is about 2–10 mm thick. Several growth flushes in a year, often two, mean that the number of layers is not the age, and the lowest layer is the youngest. If the trunk falls, new growth turns the pores downward. Older tubes become stuffed with whitish material. The pores are round and thick-walled, cream, whitish, pale grey, ochre, or brown, about 2–5 per mm and most often 2–4, with a diameter of about 0.2–0.4 mm. They darken or turn slightly brown when bruised, and the pore surface may be slightly concave. During growth the hymenium may exude clear droplets. Cystidia are absent. The basidia are clavate, hyaline, and four-spored, with a basal clamp.",
        stipe: "There is no stipe. The bracket is attached directly along its full width.",
        flesh: "The flesh is hard, corky to woody, and fibrous, pale brown, yellowish brown, tawny, or rust-brown. Near the attachment there is a granular, brown-and-white marbled core, under a tougher yellow-brown fibrous layer about 2–5 cm thick. The context is often thin beside the tube layers. The smell is faintly fruity or mild, and the taste is acrid, bitter, or unpleasant. The hyphal system is trimitic. The generative hyphae are thin-walled, hyaline, and clamped, and the skeletal and binding hyphae are thick-walled and yellow-brown to golden brown, the binding hyphae branched. Alkali turns the crust dark blood red, from fomentariol, and potassium hydroxide turns the trama black.",
        sporePrint: "The deposit is white to lemon yellow. Some accounts call the powder white or whitish, and others pale lemon to bright lemon yellow. In dry weather it can show as a white powder. The spores are cylindrical to oblong-ellipsoid, smooth, thin-walled, and inamyloid, hyaline to pale yellow. Published measurements run about 12–23 × 4–8 μm, most often 15–20 × 5–7 μm. Spores from the epitype are (12.5–)13.5–18(–20.5) × 4.5–6.5(–7.5) μm.",
        habitat: "Fruit bodies are present all year, and growth is strongest from early summer into autumn. Spores are released mainly in spring, with a smaller autumn flush, at comparatively low temperatures. A fruit body may shed up to about 887 million basidiospores in an hour at the spring peak. The brackets grow on living and dead hardwood trunks, stumps, and fallen logs, and they enter through damaged bark. Birch is the usual host in the north and on bogs and heaths. Beech is the main host in central Europe, including mountain beech woods. Farther south, oak is the usual Mediterranean host, and poplar is also reported as a southern host. Other hosts include willow, maple, lime, hornbeam, cherry, hickory, sycamore, walnut, and alder. Conifers are exceptional. The mycelium may remain latent in living beech stems. The rot is a white rot that leaves the wood pale and fibrous, and the decayed wood breaks into small flakes and threads. Fruit bodies last up to about 30 years. After the tree dies, growth may stop while the brackets remain attached.",
        uses: "The fruit body is inedible. It is too woody, and the flesh is bitter or acrid. The fibrous trama has long been made into amadou, used as tinder and as a slow match, and beaten into a leather-like material for caps, gloves, and breeches, and also used to dry fishing flies. Ötzi carried four pieces, used as tinder. The flesh was sold as a styptic wound dressing. Powder, tea, and schnapps made from it were still taken internally in the twentieth century. In ancient and medieval texts the names agaricum and Polyporus officinalis usually mean the larch polypore rather than this species.",
        confusion: "Fomitopsis pinicola grows more often on conifers, has a paler trama, and has pores that do not discolour when bruised. Fomitopsis betulina is annual, grows on birch, and has a much smoother upper surface. Ganoderma applanatum is flatter, often with a strongly brown upper surface, a brown spore deposit, and warty spores, and its pores darken strongly when pressed. Phellinus igniarius is darker, with a hard woody crust that does not dent, and the crust does not turn blood red in alkali. Fomes fasciatus usually has about 4–5 pores per mm and smaller spores, about 7.5–16 × 2.5–6 μm. Fomes inzengae is a separate species of warmer southern and lowland sites, including parts of central Europe, and the two can grow in the same region. Pore density, spore size, and the width of the skeletal hyphae overlap, so those characters do not separate them. A 2019 study reported much smaller spores for Fomes inzengae, about 9–12.5 × 2.8–3.8 μm, but later measurements from central Europe found spores in the same range as this species.",},
      sk: {
        description: "Trváca drevokazná huba listnáčov s bielou hnilobou, parazitická na živom kmeni a saprotrofná na mŕtvom dreve a pňoch. Vyskytuje sa v miernom pásme Európy, v severnej Afrike, na Kanárskych ostrovoch a v Ázii, vrátane Indie a Pakistanu, až po východ Severnej Ameriky, a rastie aj v južnej Afrike. V južnej Británii a v Írsku je zriedkavá a v Škótsku hojná.",
        cap: "Plodnica je trváca a sediaca, kopytovitá alebo hrubo konzolovitá, prirastená celou šírkou. Často rastie jednotlivo, niekedy poschodovito nad sebou alebo zrastená s ďalšími. Šírka býva zvyčajne 10–40 cm, veľké plodnice dosahujú asi 50 cm a výnimočné asi 60 cm. Na breze býva zvyčajne menšia, často len asi do 20 cm. Výška býva zvyčajne asi 7–15 cm a pri starých plodniciach dosahuje asi 20–25 cm. Pri mieste prirastania je hrubá asi 20 cm. Po prvých rokoch hrubne viac, ako sa rozširuje. Povrch tvorí tvrdá matná kôra hrubá asi 1–3 mm, na reze čierna a lesklá, sústredne ryhovaná a bez lakovej vrstvy. Za mladi je bledosivá, sivohnedá, sivookrová, špinavo žltkastohnedá alebo orieškovohnedá a v starobe striebristosivá až takmer čierna. Mladé plodnice a rastová zóna sú žlté, červenohnedé, hrdzavohnedé alebo kožovožlté. Okraj je tupý, zaoblený a bledší ako kôra za ním.",
        hymenium: "Rúrky sú hrdzavohnedé až hnedé a ukladajú sa vo vrstvách. Každá vrstva je hrubá asi 2–10 mm. Niekoľko prírastkov za rok, často dva, znamená, že počet vrstiev nie je vek a najspodnejšia vrstva je najmladšia. Ak kmeň spadne, nový prírastok otočí póry nadol. Staršie rúrky sa upchávajú belavou hmotou. Póry sú okrúhle a hrubostenné, krémové, belavé, bledosivé, okrové alebo hnedé, asi 2–5 na mm a najčastejšie 2–4, s priemerom asi 0,2–0,4 mm. Po otlačení tmavnú alebo slabo hnednú a povrch pórov môže byť mierne preliačený. Počas rastu môže hyménium vylučovať číre kvapky. Cystidy chýbajú. Bazídiá sú kyjakovité, hyalínne a štvorvýtrusové, s bazálnou spônkou.",
        stipe: "Hlúbik chýba. Plodnica je prirastená priamo celou šírkou.",
        flesh: "Dužina je tvrdá, korkovitá až drevnatá a vláknitá, bledohnedá, žltkastohnedá, plavohnedá alebo hrdzavohnedá. Pri mieste prirastania je zrnitá, hnedo-bielo mramorovaná jadrová časť, pod tuhšou žltohnedou vláknitou vrstvou hrubou asi 2–5 cm. Vedľa vrstiev rúrok býva dužina často tenká. Vôňa je slabo ovocná alebo nevýrazná a chuť štipľavá, horká alebo nepríjemná. Hyfový systém je trimitický. Generatívne hýfy sú tenkostenné, hyalínne a so spônkami, skeletové a väzbové hýfy sú hrubostenné, žltohnedé až zlatohnedé, a väzbové hýfy sú rozkonárené. Zásada sfarbuje kôru na tmavo krvavočerveno pôsobením fomentariolu a hydroxid draselný sfarbuje tramu načierno.",
        sporePrint: "Výtrusný prach je biely až citrónovožltý, od belavého po bledo- až žiarivo citrónovožltý, a za sucha sa môže javiť ako biely poprašok. Výtrusy sú valcovité až podlhovasto elipsoidné, hladké, tenkostenné a neamyloidné, hyalínne až bledožlté. Rozmery bývajú asi 12–23 × 4–8 μm, najčastejšie 15–20 × 5–7 μm. Výtrusy z epitypu majú (12,5–)13,5–18(–20,5) × 4,5–6,5(–7,5) μm.",
        habitat: "Plodnice sú prítomné po celý rok a rast je najsilnejší od začiatku leta do jesene. Výtrusy sa uvoľňujú najmä na jar, s menšou jesennou vlnou, pri pomerne nízkych teplotách. Jedna plodnica môže v jarnom vrchole uvoľniť až asi 887 miliónov bazídiospór za hodinu. Rastú na živých aj mŕtvych kmeňoch listnáčov, na pňoch a spadnutých kmeňoch a vnikajú cez poškodenú kôru. Na severe a na rašeliniskách a vresoviskách je obvyklým hostiteľom breza. V strednej Európe, aj v horských bučinách, je hlavným hostiteľom buk. Ďalej na juh je v Stredomorí obvyklým hostiteľom dub a ako južný hostiteľ sa uvádza aj topoľ. Ďalšími hostiteľmi sú vŕba, javor, lipa, hrab, čerešňa, orechovec, javor horský, orech a jelša. Ihličnany sú výnimočné. Mycélium môže v živých kmeňoch buka zostať latentné. Hniloba je biela, drevo zostáva svetlé a vláknité a rozpadnuté drevo sa láme na drobné lupienky a nitky. Plodnice vytrvávajú až asi 30 rokov. Po odumretí stromu môže rast prestať, kým plodnice zostávajú prirastené.",
        uses: "Plodnica je nejedlá. Je príliš drevnatá a dužina je horká alebo štipľavá. Vláknitá trama sa oddávna spracúvala na amadou, ktoré slúžilo ako kresadlo a pomaly tlejúci knôt, po ubití ako materiál podobný koži na čiapky, rukavice a nohavice, a aj na sušenie muškárskych mušiek. Ötzi mal pri sebe štyri kusy použité ako kresadlo. Dužina sa predávala ako prostriedok na zastavenie krvácania z rán. Prášok, čaj a pálenka z nej sa vnútorne užívali ešte v dvadsiatom storočí. V antických a stredovekých textoch mená agaricum a Polyporus officinalis zvyčajne označujú Laricifomes officinalis, nie tento druh.",
        confusion: "Práchnovček pásikavý (Fomitopsis pinicola) rastie častejšie na ihličnanoch, má bledšiu tramu a póry po otlačení nemenia farbu. Brezovník obyčajný (Fomitopsis betulina) je jednoročný, rastie na breze a má oveľa hladší vrchný povrch. Lesklokôrovka plochá (Ganoderma applanatum) je plochejšia, často so silno hnedým vrchným povrchom, hnedým výtrusným prachom a bradavičnatými výtrusmi, a jej póry po stlačení výrazne tmavnú. Ohňovec obyčajný (Phellinus igniarius) je tmavší, s tvrdou drevnatou kôrou, ktorá sa nevtláča, a kôra v zásade neprechádza do krvavočervena. Fomes fasciatus máva okolo 4–5 pórov na mm a menšie výtrusy, asi 7,5–16 × 2,5–6 μm. Fomes inzengae je samostatný druh teplejších južných a nížinných miest, aj v častiach strednej Európy, a oba druhy môžu rásť v tej istej oblasti. Hustota pórov, veľkosť výtrusov a šírka skeletových hýf sa prekrývajú, takže tieto znaky ich neoddeľujú. Merania z roku 2019 uviedli pre Fomes inzengae oveľa menšie výtrusy, asi 9–12,5 × 2,8–3,8 μm, no neskoršie merania zo strednej Európy našli výtrusy v tom istom rozpätí ako pri tomto druhu.",
        notes: "Na Slovensku sa vyskytuje na celom území, na listnatých drevinách."}
    },
    sources: {
      en: [
        { group: "text", name: "First Nature", href: "https://www.first-nature.com/fungi/fomes-fomentarius.php" },
        { group: "text", name: "Wikipedia", href: "https://en.wikipedia.org/wiki/Fomes_fomentarius" },
        { group: "text", name: "MushroomExpert", href: "https://www.mushroomexpert.com/fomes_fomentarius.html" },
        { group: "text", name: "de.wikipedia", href: "https://de.wikipedia.org/wiki/Zunderschwamm" },
        { group: "text", name: "nahuby.sk", href: "https://www.nahuby.sk/atlas-hub/Fomes-fomentarius/prachnovec-kopytovity/troudnatec-kopytovity/ID516" },
        { group: "text", name: "Fungipedia", href: "https://www.fungipedia.org/en/hongos/fomes-fomentarius.html" },
        { group: "text", name: "cs.wikipedia", href: "https://cs.wikipedia.org/wiki/Troudnatec_kopytovit%C3%BD" },
        { group: "text", name: "IMA Fungus", href: "https://doi.org/10.1186/s43008-019-0016-4", detail: "2019" },
        { group: "text", name: "Mycological Progress", href: "https://doi.org/10.1007/s11557-023-01928-y", detail: "2023" },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=194860",
          detail: "194860"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=194860",
          detail: "194860"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/194860"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/8068867",
          detail: "8068867"
        }
      ],
      sk: [
        {
          group: "text",
          name: "nahuby.sk",
          href: "https://www.nahuby.sk/atlas-hub/Fomes-fomentarius/prachnovec-kopytovity/troudnatec-kopytovity/ID516",
          detail: "práchnovec kopytovitý"
        }
      ]
    },
    synonyms: [
      "Boletus fomentarius L.",
      "Agaricus fomentarius (L.) Lam.",
      "Pyrenium fomentarium (L.) Paulet",
      "Polyporus fomentarius (L.) Fr.",
      "Placodes fomentarius (L.) Quél.",
      "Ochroporus fomentarius (L.) J. Schröt.",
      "Scindalma fomentarium (L.) Kuntze",
      "Ungulina fomentaria (L.) Pat.",
      "Elfvingia fomentaria (L.) Murrill",
      "Elfvingiella fomentaria (L.) Murrill",
      "Pyropolyporus fomentarius (L.) Teng",
      "Fomes excavatus (Berk.) Sacc.",
      "Ungularia populina Lázaro Ibiza",
      "Ungularia albescens Lázaro Ibiza"
    ]
  };

  var AURICULARIA_MEDIA = "photos/Auriculariales/Auriculariaceae/Auricularia_auricula-judae/";
  var AURICULARIA = {
    id: 43,
    name: "Auricularia auricula-judae",
    author: "(Bull.) Quél.",
    family: "Auriculariaceae",
    genus: "Auricularia",
    order: "Auriculariales",
    edibility: "edible",
    hymenium: "smooth",
    path: [
      "Fungi",
      "Dikarya",
      "Basidiomycota",
      "Agaricomycotina",
      "Agaricomycetes",
      "Auriculariomycetidae",
      "Auriculariales",
      "Auriculariaceae",
      "Auricularia"
    ],
    summary: [
      "Auriculariales",
      "Auriculariaceae",
      "Auricularia"
    ],
    added: "2026-10-24",
    plate: STORAGE + AURICULARIA_MEDIA + "Auricularia_auricula-judae@1600.webp",
    plateGrid: STORAGE + AURICULARIA_MEDIA + "Auricularia_auricula-judae@400.webp",
    plateCredit: {
      author: "L. Dufour & Gemini",
      license: "not stated"
    },
    photos: [
      {
        src: STORAGE + AURICULARIA_MEDIA + "aa1.webp",
        author: "gailhampshire",
        license: "CC BY 2.0",
        licenseUrl: "https://creativecommons.org/licenses/by/2.0",
        source: "https://commons.wikimedia.org/wiki/File:Auricularia_auricula_-_Flickr_-_gailhampshire.jpg"
      },
      {
        src: STORAGE + AURICULARIA_MEDIA + "aa2.webp",
        author: "Svdmolen",
        license: "CC BY 2.5",
        licenseUrl: "https://creativecommons.org/licenses/by/2.5",
        source: "https://commons.wikimedia.org/wiki/File:Auricularia_auricula-judae_(xndr).jpg"
      },
      {
        src: STORAGE + AURICULARIA_MEDIA + "aa3.webp",
        author: "Björn Sothmann",
        license: "CC BY-SA 2.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
        source: "https://commons.wikimedia.org/wiki/File:Auricularia_auricula-judae_(34548638132).jpg"
      },
      {
        src: STORAGE + AURICULARIA_MEDIA + "aa4.webp",
        author: "Lukas",
        license: "CC BY-SA 2.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
        source: "https://commons.wikimedia.org/wiki/File:Auricularia_auricula-judae_(32081561276).jpg"
      },
      {
        src: STORAGE + AURICULARIA_MEDIA + "aa5.webp",
        author: "Albarubescens",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Auricula-judae.JPG"
      }
    ],
    capFrom: 3,
    capTo: 13,
    fruitingFrom: 1,
    fruitingTo: 12,
    label: {
      en: "jelly ear",
      sk: "uchovec bazový"
    },
    names: {
      en: [
        "Judas's ear",
        "Jew's ear",
        "wood ear",
        "ear fungus",
        "common ear fungus"
      ]
    },
    text: {
      en: {
        description: "A wood-rotting jelly fungus of living and dead broadleaf wood, growing singly, in groups, or in crowded clusters, as a weak parasite and a saprotroph. In the strict sense it is a European species. Older accounts treated it as widespread across the northern temperate zone.",
        cap: "The fruit body is 3–12 cm across, occasionally to 13 cm, and about 1–3 mm thick. It is cup-shaped or ear-shaped at first and later irregularly lobed, and it is attached at one side or by a very short base. The outer surface is reddish tan to brown, often with a purplish tint, and finely downy. It is smoother when young, then folded and wrinkled, and it darkens with age, sometimes nearly to black when dry. The inner surface is paler, grey-brown to flesh brown, smooth or veined, and sometimes glossy. Rare fruit bodies lack pigment and grow among the ordinary brown ones. Hairs on the outer surface are about 100–150 μm long, sometimes to 250 μm, and 5–7.5 μm wide. They are hyaline and thick-walled, with a narrow lumen, a slightly swollen base, and an acute or blunt tip, and they often grow in tufts.",
        hymenium: "The hymenium covers the inner or lower surface. It is smooth or veined, paler than the outer surface, from pale greyish or grey-brown to flesh brown, and it may carry a fine white bloom. The basidia are cylindrical to club-shaped, 65–85 × 4–5.5 μm, and divided by three cross-walls into four cells. The sterigmata are long and are rarely seen. Cystidia are absent. The hyphae are strongly gelatinized. Clamp connections are reported on hyphae 1–5 μm wide, and the context hyphae are also described as mostly without clamps, profusely branched, and swollen into nodules. A medulla may be present or absent. When present, it usually lies near the hymenium. Crystals are usually scattered in the hymenium.",
        stipe: "There is no true stipe. The fruit body is sessile, or nearly so, and is attached at the side or by a short narrow base.",
        flesh: "The flesh is reddish brown, tough, gelatinous, and elastic when fresh, and about 1–3 mm thick. Dried fruit bodies harden, turn brittle, and become almost black. They can shrink to about a tenth of the fresh size. After rain or soaking they take up water, swell, regain their shape, and may continue to grow. A fruit body that has dried until it has lost most of its weight can return to three or four times that dried size. The smell is not distinctive, or sometimes musty and earthy. The taste is mild, or practically none.",
        sporePrint: "White. The spores are sausage-shaped to cylindrical, or narrowly kidney-shaped, smooth, colourless, and thin-walled, usually with one or two large droplets. They are inamyloid and not cyanophilous. The usual range is about 15–22 × 5–7 μm, and published extremes run about 13–23 × 4–8 μm. Length varies within the species, and some British collections are longer and broader than other European ones.",
        habitat: "Fruit bodies occur through the year. In Britain they are most common in autumn, and they also appear in winter and spring. In central Europe they are most often found from March to November, especially after heavy rain, and they continue through winter, including frost. They grow singly, in groups, or in clusters, often in large numbers, on older branches and trunks. They are a weak parasite of living wood and a saprotroph of dead wood, and on dead wood they cause a white rot. The usual host is elder. They also grow on sycamore, beech, ash, spindle, maple, willow, alder, birch, black locust, elm, and walnut, and rarely on spruce or other conifers.",
        uses: "It is edible once cooked, and it is not eaten raw. The taste and smell are mild, and it is kept for a firm, cartilaginous texture rather than for flavour. It is not widely eaten, though in Poland it is commonly eaten. Dried fruit bodies can be soaked and return to a larger size, sometimes three or four times the dried size. Spawn is sold for growing it on hardwood logs or on a sterile substitute. The fungus used in East Asian cooking and medicine is a related species.",
        confusion: "Auricularia mesenterica grows in thicker, bracket-like tiers. Its upper surface is zoned and more coarsely felted, and the hymenium is often darker or purplish. Auricularia cerrina is darker grey to almost black, with greyer to whitish hairs, a line of medulla through the flesh, and smaller spores. It was described from Turkey oak in Czechia, and both species can occur on oak. Auricularia cornea is hairier and more leathery, with a distinct medulla line, smaller spores, and a colour that varies. Auricularia heimuer is very similar and grows in East Asia. Its basidia are shorter, and its spores are about 11–13 × 4–5 μm. Auricularia angiospermarum grows on North American broadleaf wood. Its basidia are shorter, and its spores are about 13–15 × 4.8–5.5 μm. Auricularia americana grows on North American conifers and has shorter spores, about 14–16.5 × 4.5–5.4 μm. Exidia recisa grows on thin twigs. It is more translucent, it does not become shell-shaped, and the sharp margin is ribbed. Exidia glandulosa is darker, and its sterile surface is granular and warty. Phaeotremella frondosa forms clustered, brain-like folds, never a distinct ear, and the surface is completely smooth. Tremella foliacea has the same form: clustered brain-like folds, no distinct ear, and a completely smooth surface. Schizophyllum amplum is smaller, whitish and felted on the outside, prefers poplar and willow, and has one-celled basidia. Peziza badia is cup-shaped, with a short stipe and opaque flesh, and it usually grows near the ground.",
        notes: "Unpigmented fruit bodies have been named at species rank as Auricularia lactea and are not a separate species. A study of DNA sequences confined this species to Europe. North American and East Asian fungi formerly filed under this name are other species. A fruit body that has dried until it has lost most of its weight can still release some spores. In the 19th century it was used in folk medicine for sore throats, sore eyes, and jaundice, and as an astringent."}
    },
    sources: {
      en: [
        {
          group: "text",
          name: "Wikipedia",
          href: "https://en.wikipedia.org/wiki/Auricularia_auricula-judae"
        },
        {
          group: "text",
          name: "First Nature",
          href: "https://www.first-nature.com/fungi/auricularia-auricula-judae.php"
        },
        {
          group: "text",
          name: "de.wikipedia",
          href: "https://de.wikipedia.org/wiki/Judasohr"
        },
        {
          group: "text",
          name: "myko.cz",
          href: "https://www.myko.cz/myko-atlas/Auricularia-auricula-judae/"
        },
        {
          group: "text",
          name: "botany.cz",
          href: "https://botany.cz/cs/auricularia-auricula-judae/"
        },
        {
          group: "text",
          name: "Journal of Fungi",
          href: "https://www.mdpi.com/2309-608X/7/11/933",
          detail: "2021"
        },
        {
          group: "text",
          name: "Mycological Progress",
          href: "https://doi.org/10.1007/s11557-015-1113-4",
          detail: "2015"
        },
        {
          group: "text",
          name: "Fungipedia",
          href: "https://www.fungipedia.org/en/microscopias/josep/auricularia-auricula-judae"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=102281",
          detail: "102281"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=102281",
          detail: "102281"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/102281"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/5249271",
          detail: "5249271"
        }
      ]
    },
    synonyms: [
      "Tremella auricula-judae Bull.",
      "Peziza auricula-judae (Bull.) Bolton",
      "Exidia auricula-judae (Bull.) Fr.",
      "Hirneola auricula-judae (Bull.) Berk.",
      "Tremella auricula L.",
      "Peziza auricula (L.) Lightf.",
      "Merulius auricula (L.) Roth",
      "Exidia auricula (L.) Wallr.",
      "Auricularia auricula (L.) Underw.",
      "Tremella caraganae (Pers.) H. Mart.",
      "Gyraria auricularis Gray",
      "Auricula auricularis (Gray) Kuntze",
      "Auricularia auricularis (Gray) G.W. Martin",
      "Hirneola auricularis (Gray) Donk",
      "Auricularia sambuci Pers.",
      "Laschia tremellosa Fr.",
      "Auricularia tremellosa (Fr.) Pat.",
      "Auricula tremellosa (Fr.) Kuntze",
      "Auricularia albicans Berk.",
      "Auricularia lactea (Quél.) Bigeard & H. Guill."
    ]
  };

  var TYLOPILUS_MEDIA = "photos/Boletales/Boletaceae/Tylopilus_felleus/";
  var TYLOPILUS = {
    id: 44,
    name: "Tylopilus felleus",
    author: "(Bull.) P. Karst.",
    family: "Boletaceae",
    genus: "Tylopilus",
    order: "Boletales",
    edibility: "inedible",
    hymenium: "tubes",
    path: [
      "Fungi",
      "Dikarya",
      "Basidiomycota",
      "Agaricomycotina",
      "Agaricomycetes",
      "Agaricomycetidae",
      "Boletales",
      "Boletaceae",
      "Tylopilus"
    ],
    summary: [
      "Boletales",
      "Boletaceae",
      "Tylopilus"
    ],
    added: "2026-10-24",
    plate: STORAGE + TYLOPILUS_MEDIA + "Tylopilus_felleus@1600.webp",
    plateGrid: STORAGE + TYLOPILUS_MEDIA + "Tylopilus_felleus@400.webp",
    plateCredit: {
      author: "L. Dufour",
      license: "public domain",
      source: "https://www.biodiversitylibrary.org/page/3270758"
    },
    photos: [
      {
        src: STORAGE + TYLOPILUS_MEDIA + "tf1.webp",
        author: "Holger Krisp",
        license: "CC BY 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Gemeine_Gallenr%C3%B6hrling_Tylopilus_felleus.jpg"
      },
      {
        src: STORAGE + TYLOPILUS_MEDIA + "tf2.webp",
        author: "Thomas Pruß",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Gallenr%C3%B6hrling.jpg"
      },
      {
        src: STORAGE + TYLOPILUS_MEDIA + "tf3.webp",
        author: "Jose Angel Urquia Goitia",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Onddo_mingotsak.jpg"
      },
      {
        src: STORAGE + TYLOPILUS_MEDIA + "tf4.webp",
        author: "Christine Braaten",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:2012-06-09_Tylopilus_felleus_(Bull.)_P._Karst_226780.jpg"
      },
      {
        src: STORAGE + TYLOPILUS_MEDIA + "tf5.webp",
        author: "Karelj",
        license: "public domain",
        source: "https://commons.wikimedia.org/wiki/File:H%C5%99ib_%C5%BElu%C4%8Dn%C3%ADk_1.jpg"
      },
    ],
    capFrom: 4,
    capTo: 15,
    stipeHeightFrom: 4,
    stipeHeightTo: 15,
    stipeThickFrom: 1,
    stipeThickTo: 4,
    fruitingFrom: 6,
    fruitingTo: 11,
    label: {
      en: "bitter bolete",
      sk: "podhríb žlčový"
    },
    names: {
      en: [
        "bitter tylopilus"
      ],
      sk: [
        "horkáč",
        "štiplák"
      ]
    },
    text: {
      en: {
        description: "An ectomycorrhizal bolete of deciduous and coniferous woods. It is widespread in Europe and in eastern North America south into Mexico and Central America, and it is recorded in China, Korea, and Pakistan. It is occasional in Britain and Ireland and more frequent farther north. A 2025 assessment lists it as Least Concern.",
        cap: "The cap is typically 4–15 cm across, sometimes to 18 or 20 cm, and some North American caps reach about 30 cm. It starts hemispherical, becomes convex or cushion-shaped, and is usually flat at maturity, sometimes with a shallow central depression. The colour runs from yellow-brown, ochre, and sometimes yellow-orange through grey-brown and walnut brown to dark brown, sometimes with an olive cast, and it fades toward tan. Young caps are downy, velvety, or finely felted. Older caps are smooth and matte, and they sometimes crack. The surface is slightly sticky and shiny only when wet. The skin is difficult to peel, and bruised places can blacken.",
        hymenium: "The tubes are about 1.5–2 cm deep, and in the middle they may reach 2–3 cm. They are deeply notched at the stipe, or adnate and then notched, white or pale cream at first and later pink, grey-pink, flesh-pink, or coral pink. They separate easily from the cap flesh. The pores are small and round to angular, about 1–2 per millimetre, white, then weakly pink and at maturity pale pink to flesh-pink. Bruised pores turn flesh-brown, pinkish brown, carmine, or rusty brown. Older pore surfaces develop rusty spots and may bulge downward. The basidia are club-shaped and four-spored, about 18–26 × 7–10 μm. Pleurocystidia are fusiform, often swollen in the middle or drawn to a small point, thin-walled, about 30–44 × 8–11 μm. Cheilocystidia are similar, about 25–44 × 7–11 μm.",
        stipe: "The stipe is 4–15 cm long, rarely to 20 cm, and about 1–4 cm thick. British fruit bodies are often 4–8 × 1–1.8 cm, and central European accounts give a thickness of 2–6 cm, the base sometimes reaching 6 cm. Young stipes are ventricose or barrel-shaped. Mature stipes are club-shaped to cylindrical, often curved, and thicker toward the base. The apex is whitish, then lemon yellow to olive-yellow, and the rest is brownish. A coarse raised net of large elongated meshes, brown on a paler ground, usually runs to the base. White mycelium clothes the base. There is no ring.",
        flesh: "The flesh is white to cream and pink just beneath the cap cuticle. Cut surfaces usually stay unchanged, though they sometimes turn slightly pink. Young flesh is firm. Older flesh softens, and the stipe flesh is fibrous. The odour is inconspicuous, sometimes pleasant and sometimes faintly unpleasant. The taste is usually very bitter, and cooking makes the bitterness stronger. Insects rarely infest the fruit bodies.",
        sporePrint: "Pink, clay-pink, flesh-pink, or brownish pink. The basidiospores are smooth, subfusiform to narrowly fusiform or almost cylindrical, about 10–17.5 × 3–5 μm.",
        habitat: "Fruit bodies appear from June into November, and in Britain and Ireland from August to November. They grow singly or in small groups, sometimes two or three joined at the base, from the lowlands to the mountains. Central European collections are most often under pine and spruce, in mixed woods, or under broadleaf trees, on non-calcareous soil. British and Irish collections are usually under oak, beech, or other broadleaf trees and only occasionally under conifers. The ground is well drained and sandy, gravelly, or peaty, and on chalk the fungus is limited to wet places with deep leaf litter. Fruiting sites include cavities of old trees, old conifer stumps, and buried rotten wood. Numbers follow the rainfall, and dry spells are tolerated.",
        uses: "The bitterness is strong enough that the mushroom is treated as inedible, and a single fruit body can spoil a dish. It is not regarded as poisonous. Cooking strengthens the bitterness. Fruit bodies are sold in Mexican markets. In parts of France, Romania, and the former East Germany they have been stewed in skimmed milk and then eaten, or dried and powdered as a flavouring. Dried fruit bodies are used in place of pepper in some countries. People who cannot taste certain bitter compounds may not notice the bitterness. The compound itself has not been identified. A beta-glucan from the fruit bodies has been cytotoxic in laboratory tests and has stimulated phagocytosis, and other extracts have inhibited pancreatic lipase or shown mild antibacterial activity. Those laboratory results are not established as medical uses.",
        confusion: "Young fruit bodies can look almost the same, at a glance, as young Boletus edulis, which has a pale stipe with a white net and pores that become yellow-olive rather than pink. Imleria badia has yellow tubes that bruise blue and lacks a coarse dark net. Xerocomus subtomentosus has yellow pores and a more slender stipe. Tylopilus rubrobrunneus grows with hardwoods in eastern North America, has a purplish to purple-brown cap, and is also bitter. Tylopilus variobrunneus has a reddish-brown to chestnut cap, olive tones when young, spores typically about 9–13 × 3–4.5 μm, and a mild to slightly bitter taste. Tylopilus rhoadsiae, of the southeastern United States, has a paler cap that remains smaller, to about 9 cm. Tylopilus indecisus and Tylopilus ferrugineus have less strongly netted stipes. Tylopilus neofelleus, of deciduous woods in China, New Guinea, Japan, and Taiwan, has a vinaceous-brown cap, a pinkish-brown to vinaceous stipe, spores about 11–14 × 4–5 μm, and longer pleurocystidia, about 49–107 × 14–24 μm. Australian collections with consistently smaller spores belong to Tylopilus brevisporus.",
        notes: "It is the only species of the genus in Europe. A 2025 assessment places it as Least Concern. North American fruit bodies filed under this name may not be the European species, except possibly those with naturalized Norway spruce. Australian collections with consistently smaller spores are Tylopilus brevisporus. Fruit bodies take up caesium-137 from contaminated soil and have only a limited capacity to accumulate polonium-210. Mycelium grows in axenic culture and can form small, often deformed fruit bodies, with caps frequently 0.5–1 cm across and often without a stipe, under a 12-hour day. Few species in Boletaceae fruit without a host. Paenibacillus tylopili, isolated from the mycorrhizosphere, breaks down chitin. In North America the scuttle fly Megaselia pygmaeoides can infest the fruit bodies; in Europe that fly prefers other boletes. The mould Sepedonium ampullosporum can parasitize them. On the cap flesh, formaldehyde turns the tissue pinkish and iron salts turn it greyish green. Potassium hydroxide usually turns the cap cuticle orange."},
      sk: {
        description: "Ektomykorízna huba listnatých a ihličnatých lesov. Je rozšírená v Európe a vo východnej Severnej Amerike na juh po Mexiko a Strednú Ameriku a zaznamenaná je aj v Číne, Kórei a Pakistane. V Británii a Írsku je príležitostná a severnejšie hojnejšia. Hodnotenie z roku 2025 ju zaraďuje medzi málo dotknuté druhy (Least Concern).",
        cap: "Klobúk máva v priemere 4–15 cm, niekedy až 18 alebo 20 cm, a niektoré severoamerické klobúky dosahujú asi 30 cm. Najprv je polguľovitý, potom klenutý alebo vankúšovitý a v dospelosti zvyčajne plochý, niekedy s plytkou stredovou priehlbinou. Farba prechádza od žltohnedej, okrovej a niekedy žltooranžovej cez sivohnedú a orechovohnedú po tmavohnedú, niekedy s olivovým nádychom, a bledne do plavohneda. Mladé klobúky sú páperisté, zamatové alebo jemne plstnaté. Staršie sú hladké a matné a niekedy pukajú. Povrch je mierne lepkavý a lesklý len za vlhka. Pokožka sa ťažko lúpe a otlačené miesta môžu černieť.",
        hymenium: "Rúrky sú asi 1,5–2 cm dlhé a v strede môžu dosiahnuť 2–3 cm. Pri hlúbiku sú hlboko vykrojené, alebo prirastené a potom vykrojené. Najprv sú biele alebo bledokrémové, neskôr ružové, sivoružové, mäsovoružové alebo koralovoružové. Od dužiny klobúka sa ľahko oddeľujú. Póry sú drobné, okrúhle až hranaté, asi 1–2 na milimeter, najprv biele, potom slabo ružové a v dospelosti bledo ružové až mäsovoružové. Otlačené póry hnednú do mäsova, ružovohneda, karmínu alebo hrdzavohneda. Staršie povrchy pórov dostávajú hrdzavé škvrny a môžu sa vydúvať nadol. Bazídiá sú kyjačkovité a štvorvýtrusné, asi 18–26 × 7–10 μm. Pleurocystidy sú vretenovité, často v strede napuchnuté alebo zúžené do malej špičky, tenkostenné, asi 30–44 × 8–11 μm. Cheilocystidy sú podobné, asi 25–44 × 7–11 μm.",
        stipe: "Hlúbik je 4–15 cm dlhý, zriedka až 20 cm, a asi 1–4 cm hrubý. Britské plodnice majú často 4–8 × 1–1,8 cm a v strednej Európe býva hrúbka 2–6 cm, pričom báza niekedy dosahuje 6 cm. Mladé hlúbiky sú bruchaté alebo súdkovité. Dospelé sú kyjakovité až valcovité, často prehnuté a smerom k báze hrubšie. Vrchol je belavý, potom citrónovožltý až olivovožltý, a zvyšok je hnedastý. Hrubá vystúpená sieťka z veľkých pretiahnutých ôk, hnedá na bledšom podklade, zvyčajne siaha až k báze. Bázu pokrýva biele mycélium. Prsteň chýba.",
        flesh: "Dužina je biela až krémová a tesne pod pokožkou klobúka ružová. Rezná plocha zvyčajne nemení farbu, hoci niekedy slabo zružovie. Mladá dužina je pevná. Staršia mäkne a dužina hlúbika je vláknitá. Vôňa je nenápadná, niekedy príjemná a niekedy slabo nepríjemná. Chuť býva zvyčajne veľmi horká a varením horkosť silnie. Hmyz plodnice napáda len zriedka.",
        sporePrint: "Výtrusný prach je ružový, hlinovoružový, mäsovoružový alebo hnedastoružový. Bazídiospóry sú hladké, takmer vretenovité až úzko vretenovité alebo takmer valcovité, asi 10–17,5 × 3–5 μm.",
        habitat: "Plodnice sa objavujú od júna do novembra a v Británii a Írsku od augusta do novembra. Rastú jednotlivo alebo v malých skupinách, niekedy dve alebo tri zrastené na báze, od nížin po hory. V strednej Európe bývajú najčastejšie pod borovicou a smrekom, v zmiešaných lesoch alebo pod listnáčmi, na nevápenatej pôde. V Británii a Írsku rastú zvyčajne pod dubom, bukom alebo inými listnáčmi a len príležitostne pod ihličnanmi. Pôda je dobre priepustná, piesočnatá, štrkovitá alebo rašelinová a na kriede je huba obmedzená na vlhké miesta s hlbokým opadom. Plodí aj v dutinách starých stromov, na starých pňoch ihličnanov a na zahrabanom spráchnivenom dreve. Početnosť sleduje zrážky a suché obdobia znáša.",
        uses: "Horkosť je taká silná, že sa huba pokladá za nejedlú, a jediná plodnica dokáže pokaziť jedlo. Za jedovatú sa nepovažuje. Varením horkosť silnie. Plodnice sa predávajú na mexických trhoch. V častiach Francúzska, Rumunska a bývalého východného Nemecka ich dusili v odstredenom mlieku a potom jedli, alebo sušili a mleli na práškové dochucovadlo. Sušené plodnice sa v niektorých krajinách používajú namiesto čierneho korenia. Ľudia, ktorí nevnímajú niektoré horké látky, horkosť nemusia cítiť. Samotná látka nebola identifikovaná. Betaglukán z plodníc bol v laboratórnych skúškach cytotoxický a povzbudzoval fagocytózu a iné výťažky tlmili pankreatickú lipázu alebo vykazovali miernu antibakteriálnu aktivitu. Tieto laboratórne výsledky nie sú uznané ako lekárske použitie.",
        confusion: "Mladé plodnice sa na prvý pohľad takmer nelíšia od mladého hríba smrekového (Boletus edulis), ktorý má bledý hlúbik s bielou sieťkou a póry, ktoré žltnú do olivova, a nie do ružova. Suchohríb hnedý (Imleria badia) má žlté rúrky, ktoré po otlačení modrejú, a nemá hrubú tmavú sieťku. Suchohríb plstnatý (Xerocomus subtomentosus) má žlté póry a štíhlejší hlúbik. Tylopilus rubrobrunneus rastie s listnáčmi vo východnej Severnej Amerike, má purpurový až purpurovohnedý klobúk a je tiež horký. Tylopilus variobrunneus má červenohnedý až gaštanovohnedý klobúk, za mladi olivové tóny, výtrusy zvyčajne asi 9–13 × 3–4,5 μm a miernu až slabo horkú chuť. Tylopilus rhoadsiae z juhovýchodu Spojených štátov má bledší klobúk, ktorý zostáva menší, asi do 9 cm. Tylopilus indecisus a Tylopilus ferrugineus majú menej výrazne sieťkované hlúbiky. Tylopilus neofelleus z listnatých lesov Číny, Novej Guiney, Japonska a Taiwanu má vínovohnedý klobúk, ružovohnedý až vínový hlúbik, výtrusy asi 11–14 × 4–5 μm a dlhšie pleurocystidy, asi 49–107 × 14–24 μm. Austrálske zbery s trvalo menšími výtrusmi patria druhu Tylopilus brevisporus.",
        notes: "Tento druh je jediným druhom rodu v Európe. Hodnotenie z roku 2025 ho zaraďuje medzi málo dotknuté druhy (Least Concern). Severoamerické plodnice vedené pod týmto menom nemusia patriť európskemu druhu, s možnou výnimkou tých pri splanievanom smreku obyčajnom. Austrálske zbery s trvalo menšími výtrusmi sú Tylopilus brevisporus. Plodnice prijímajú cézium-137 z kontaminovanej pôdy a polónium-210 hromadia len obmedzene. Mycélium rastie v axenickej kultúre a pri dvanásťhodinovom dni dokáže tvoriť malé, často deformované plodnice, s klobúkmi často s priemerom 0,5–1 cm a často bez hlúbika. Len málo druhov čeľade Boletaceae plodí bez hostiteľa. Paenibacillus tylopili, izolovaný z mykorizosféry, rozkladá chitín. V Severnej Amerike môže plodnice napádať mucha Megaselia pygmaeoides; v Európe táto mucha uprednostňuje iné hríby. Pleseň Sepedonium ampullosporum ich môže parazitovať. Na dužine klobúka formaldehyd sfarbuje pletivo doružova a soli železa do sivozelena. Hydroxid draselný zvyčajne sfarbuje pokožku klobúka do oranžova. Na Slovensku je tento druh veľmi hojný v borových, smrekových a zmiešaných lesoch."}
    },
    sources: {
      en: [
        {
          group: "text",
          name: "First Nature",
          href: "https://www.first-nature.com/fungi/tylopilus-felleus.php"
        },
        {
          group: "text",
          name: "Wikipedia",
          href: "https://en.wikipedia.org/wiki/Tylopilus_felleus"
        },
        {
          group: "text",
          name: "MushroomExpert",
          href: "https://www.mushroomexpert.com/tylopilus_felleus.html"
        },
        {
          group: "text",
          name: "Boletales.com",
          href: "https://boletales.com/genera/tylopilus/t-felleus/"
        },
        {
          group: "text",
          name: "IUCN",
          href: "https://www.iucnredlist.org/species/228712563/277338286"
        },
        {
          group: "text",
          name: "nahuby.sk",
          href: "https://www.nahuby.sk/atlas-hub/Tylopilus-felleus/Podhrib-zlcovy/Hrib-zlucnik/ID490"
        },
        {
          group: "text",
          name: "myko.cz",
          href: "https://www.myko.cz/myko-atlas/Tylopilus-felleus/"
        },
        {
          group: "text",
          name: "botany.cz",
          href: "https://botany.cz/cs/tylopilus-felleus/"
        },
        {
          group: "text",
          name: "Internet Archive",
          href: "https://archive.org/details/atlasdeschampign00dufo"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=122480",
          detail: "122480"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/Synonymy.asp?RecordID=122480",
          detail: "122480"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/122480"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/2524910",
          detail: "2524910"
        }
      ],
      sk: [
        {
          group: "text",
          name: "nahuby.sk",
          href: "https://www.nahuby.sk/atlas-hub/Tylopilus-felleus/Podhrib-zlcovy/Hrib-zlucnik/ID490",
          detail: "podhríb žlčový"
        }
      ]
    },
    synonyms: [
      "Boletus felleus Bull.",
      "Dictyopus felleus (Bull.) Quél.",
      "Suillus felleus (Bull.) Kuntze",
      "Boletus alutarius Fr.",
      "Tylopilus alutarius (Fr.) Henn.",
      "Suillus alutarius (Fr.) Kuntze",
      "Boletus alutarius Rostk."
    ]
  };

  var CHLOROPHYLLUM_MEDIA = "photos/Agaricales/Agaricaceae/Chlorophyllum_rhacodes/";
  var CHLOROPHYLLUM = {
    id: 45,
    name: "Chlorophyllum rhacodes",
    author: "(Vittad.) Vellinga",
    family: "Agaricaceae",
    genus: "Chlorophyllum",
    order: "Agaricales",
    edibility: "edible_with_caution",
    hymenium: "gills",
    path: [
      "Fungi",
      "Dikarya",
      "Basidiomycota",
      "Agaricomycotina",
      "Agaricomycetes",
      "Agaricomycetidae",
      "Agaricales",
      "Agaricaceae",
      "Chlorophyllum"
    ],
    summary: [
      "Agaricales",
      "Agaricaceae",
      "Chlorophyllum"
    ],
    added: "2026-10-24",
    plate: STORAGE + CHLOROPHYLLUM_MEDIA + "Chlorophyllum_rhacodes@1600.webp",
    plateGrid: STORAGE + CHLOROPHYLLUM_MEDIA + "Chlorophyllum_rhacodes@400.webp",
    plateCredit: {
      author: "J. E. Lange",
      license: "public domain"
    },
    photos: [
      {
        src: STORAGE + CHLOROPHYLLUM_MEDIA + "chr1.webp",
        author: "Rasbak",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Chlorophyllum_rhacodes_-_20091030.jpg",
      },
      {
        src: STORAGE + CHLOROPHYLLUM_MEDIA + "chr2.webp",
        author: "Accuruss",
        license: "Public domain",
        source: "https://commons.wikimedia.org/wiki/File:Chlorophyllum_rhacodes_2009-09-06_-_top_view.jpg",
      },
      {
        src: STORAGE + CHLOROPHYLLUM_MEDIA + "chr3.webp",
        author: "zaca",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Chlorophyllum_rhacodes_(Vittadini)_Vellinga_183362.jpg",
      },
      {
        src: STORAGE + CHLOROPHYLLUM_MEDIA + "chr4.webp",
        author: "S. Rae",
        license: "CC BY 2.0",
        licenseUrl: "https://creativecommons.org/licenses/by/2.0",
        source: "https://commons.wikimedia.org/wiki/File:Chlorophyllum_rhacodes_-_Flickr_-_S._rae.jpg",
      },
      {
        src: STORAGE + CHLOROPHYLLUM_MEDIA + "chr5.webp",
        author: "Jerzy Opioła",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Chlorophyllum_rachodes_a1_(3).JPG",
      }
    ],
    capFrom: 5,
    capTo: 18,
    stipeHeightFrom: 5,
    stipeHeightTo: 21,
    stipeThickFrom: 1,
    stipeThickTo: 3.5,
    fruitingFrom: 6,
    fruitingTo: 11,
    label: {
      en: "shaggy parasol",
      sk: "bedľa červenejúca"
    },
    names: {},
    text: {
      en: {
        description: "A large saprobic agaric of woods, hedges, and humus-rich disturbed ground. It is frequent in Britain and Ireland and widespread through Europe and North America, where it is more often found from the Rocky Mountains eastward. Fruit bodies grow alone, scattered, or in troops and rings.",
        cap: "The cap is 5–18 cm across. It starts egg-shaped or nearly round, then becomes bell-shaped or convex, and later flat or very broadly bell-shaped, often with an umbo. It is rarely fully flat. The surface is dry and soft. A young cap is smooth and brown to orange-brown. The cuticle then breaks into large brown scales over a whitish, cream, or pale brown fibrillose ground. The scales are shaggy and tile-like, and darker than the ground, while the centre stays smooth or cracked and brown. At the centre and on the scales the pileipellis is a trichoderm, and on the pale fibrillose surface it is a cutis. Potassium hydroxide on the cap is negative, or pinkish on the brown areas, and ammonia is negative.",
        hymenium: "The gills are free, crowded, and ventricose, narrowed toward the stipe, and about 12–15 mm broad. Short gills are frequent. They are white to cream. The edges may become reddish or brownish, and the faces bruise reddish. A cottony veil covers them when young. The cheilocystidia are club-shaped to nearly spherical, sometimes with a short stalk, hyaline and thin-walled, about 15–50 × 10–17.5 μm. Pleurocystidia are absent.",
        stipe: "The stipe is 5–21 cm long and 1–3.5 cm thick, with a gradual bulb up to about 5 cm across. The bulb is not rimmed. The stipe is club-shaped to nearly cylindrical, narrowed above, and hollow, and it breaks cleanly out of the cap flesh. It is smooth and bare, whitish to cream above and brownish to reddish brown below, and it bruises brown or red. White mycelium may cover the base. A cottony, movable ring sits in the upper third. The ring is whitish, double-edged, brownish on the lower edge, and it may slip down to the base.",
        flesh: "The flesh is white and thick. Cut flesh stains orange or saffron within seconds, then red, and then rusty brown. The change is strongest near the top of the stipe. Older flesh in the cap is cottony, and the flesh in the stipe is almost woody. The smell is pleasant and mushroomy, sometimes strongly aromatic. The taste is not distinctive, or pleasantly mushroomy, and it is less good than that of Macrolepiota procera. Accounts of the fungus under this name give that smell. The original description gives an unpleasant taste and smell.",
        sporePrint: "White to pale cream. The spores are smooth, colourless, and dextrinoid, with a germ pore, about 8–13 × 5–8 μm. They are ellipsoid to broadly ellipsoid, and also globose, pear-shaped, or somewhat almond-shaped, sometimes with a truncated end.",
        habitat: "In Britain and Ireland fruit bodies appear from June to October, in central Europe from July to November, and in North America from spring through autumn. They grow in woods of all kinds, more often under broadleaved trees, on richer soils and not in a deep litter layer. They also grow in hedges, on humus-rich disturbed ground, lawns, gardens, roadsides, and field edges, often near spruces. In southern Slovakia they are locally abundant under black locust. They grow alone, scattered, or in troops and rings, in the lowlands and the hills.",
        uses: "It is widely cooked and eaten, and it is less good than Macrolepiota procera. It has also caused serious gastric illness. Some of the reported trouble is treated as an individual reaction, and some accounts no longer recommend it. It was removed from the Czech list of market mushrooms in 2023.",
        confusion: "Macrolepiota procera has smaller scales and a brown-and-white snakeskin pattern on the stipe, and the flesh does not redden. Chlorophyllum brunneum has a rimmed basal bulb, a simple ring rather than a double ring, and a shorter, thicker stipe. It grows in gardens, on compost, and on manured ground. Its spores are consistently truncated, and its cheilocystidia are longer and narrower. Chlorophyllum olivieri has scales that do not contrast with the grey-brown ground of the cap. It is common in conifer litter, the bulb is less developed, and the spores are slightly smaller, about 8–11 × 5–7 μm. Chlorophyllum molybdites has green gills and a green spore print when mature, and it is poisonous. Agaricus augustus can look similar in the field and has a dark brown or purplish-brown spore print.",
        notes: "Fruit bodies have a gradual bulb and a double ring. Chlorophyllum brunneum has a marginate bulb."},
      sk: {
        description: "Veľká saprotrofná huba lesov, živých plotov a narušených pôd bohatých na humus. V Británii a Írsku je častá a rozšírená je v Európe aj v Severnej Amerike, kde sa častejšie vyskytuje od Skalnatých vrchov na východ. Plodnice rastú jednotlivo, roztrúsene alebo v skupinách a v kruhoch.",
        cap: "Klobúk má 5–18 cm v priemere. Za mladi je vajcovitý alebo takmer guľovitý, potom zvoncovitý alebo klenutý a neskôr plochý alebo veľmi široko zvoncovitý, často s hrboľom. Celkom plochý je len zriedka. Povrch je suchý a mäkký. Mladý klobúk je hladký, hnedý až oranžovohnedý. Pokožka sa potom rozpukáva na veľké hnedé šupiny na belavom, krémovom alebo svetlohnedom vláknitom podklade. Šupiny sú strapaté a škridlicovité, tmavšie než podklad, a stred ostáva hladký alebo popukaný a hnedý. V strede a na šupinách je pokožka klobúka trichoderm, na bledom vláknitom povrchu cutis. Hydroxid draselný na klobúku nereaguje, na hnedých miestach však môže ružovieť, a amoniak nereaguje.",
        hymenium: "Lupene sú voľné, husté a bruškaté, smerom k hlúbiku zúžené a široké asi 12–15 mm. Krátke lupienky sú časté. Sú biele až krémové. Ostrie môže červenať alebo hnednúť a plochy po otlačení červenejú. Za mladi ich kryje vatovitý závoj. Cheilocystidy sú kyjačkovité až takmer guľovité, niekedy s krátkou stopkou, hyalínne a tenkostenné, veľké asi 15–50 × 10–17,5 μm. Pleurocystidy chýbajú.",
        stipe: "Hlúbik je 5–21 cm dlhý a 1–3,5 cm hrubý, s postupne sa rozširujúcou hľuzou širokou až asi 5 cm. Hľuza nie je obrúbená. Hlúbik je kyjakovitý až takmer valcovitý, hore zúžený a dutý a z dužiny klobúka sa čisto vylomí. Je hladký a holý, hore belavý až krémový a dole hnedastý až červenohnedý, a po otlačení hnedne alebo červenie. Bázu môže pokrývať biele mycélium. Vo vrchnej tretine sedí vatovitý posuvný prsteň. Prsteň je belavý, s dvojitým okrajom, na dolnom okraji hnedastý a môže skĺznuť až k báze.",
        flesh: "Dužina je biela a hrubá. Rezaná dužina sa v priebehu niekoľkých sekúnd sfarbí na oranžovo alebo šafranovo, potom na červeno a napokon na hrdzavohnedo. Najvýraznejšie sa mení pri vrchole hlúbika. Staršia dužina v klobúku je vatovitá a dužina v hlúbiku takmer drevnatá. Vôňa je príjemná a hubová, niekedy výrazne aromatická. Chuť je nevýrazná alebo príjemne hubová a je horšia než chuť bedle vysokej (Macrolepiota procera). Opisy huby pod týmto menom uvádzajú túto vôňu. Pôvodný opis udáva nepríjemnú chuť a vôňu.",
        sporePrint: "Výtrusný prach je biely až bledokrémový. Výtrusy sú hladké, bezfarebné a dextrinoidné, s klíčnym pórom, veľké asi 8–13 × 5–8 μm. Sú elipsoidné až široko elipsoidné, guľovité, hruškovité alebo trocha mandľovité, niekedy s uťatým koncom.",
        habitat: "V Británii a Írsku sa plodnice objavujú od júna do októbra, v strednej Európe od júla do novembra a v Severnej Amerike od jari do jesene. Rastú v lesoch všetkých typov, častejšie pod listnáčmi, na bohatších pôdach a nie v hlbokej vrstve opadu, ďalej v živých plotoch, na narušených miestach bohatých na humus, na trávnikoch, v záhradách, pri cestách a na okrajoch polí, často pri smrekoch. Na južnom Slovensku sú miestami hojné pod agátom bielym. Vyskytujú sa jednotlivo, roztrúsene alebo v skupinách a v kruhoch, v nížinách aj v pahorkatinách.",
        uses: "Bežne sa varí a konzumuje a je menej chutná než bedľa vysoká (Macrolepiota procera). Spôsobila aj vážne žalúdočné ťažkosti. Časť hlásených ťažkostí sa pokladá za individuálnu reakciu a niektoré opisy ju už neodporúčajú. V roku 2023 bola vyradená z českého zoznamu trhových húb.",
        confusion: "Bedľa vysoká (Macrolepiota procera) má menšie šupiny, na hlúbiku hnedobiely hadovitý vzor a dužina jej nečervenie. Bedľa červenejúca záhradná (Chlorophyllum brunneum) má na báze obrúbenú hľuzu, jednoduchý prsteň namiesto dvojitého a kratší, hrubší hlúbik. Rastie v záhradách, na komposte a na hnojenej pôde. Výtrusy má trvalo uťaté a cheilocystidy dlhšie a užšie. Bedľa Olivierova (Chlorophyllum olivieri) má šupiny, ktoré nekontrastujú so sivohnedým podkladom klobúka. Je hojná v opade ihličnanov, hľuzu má menej vyvinutú a výtrusy o niečo menšie, asi 8–11 × 5–7 μm. Jedovatý druh Chlorophyllum molybdites má v dospelosti zelené lupene a zelený výtrusný prach. Pečiarka obrovská (Agaricus augustus) môže v teréne vyzerať podobne a má tmavohnedý alebo purpurovohnedý výtrusný prach.",
        notes: "Plodnice majú postupne sa rozširujúcu hľuzu a dvojitý prsteň. Chlorophyllum brunneum má obrúbenú hľuzu."}
    },
    sources: {
      en: [
        {
          group: "text",
          name: "First Nature",
          href: "https://www.first-nature.com/fungi/chlorophyllum-rhacodes.php"
        },
        {
          group: "text",
          name: "MushroomExpert",
          href: "https://www.mushroomexpert.com/chlorophyllum_rhacodes.html"
        },
        {
          group: "text",
          name: "Wikipedia",
          href: "https://en.wikipedia.org/wiki/Chlorophyllum_rhacodes"
        },
        {
          group: "text",
          name: "botany.cz",
          href: "https://botany.cz/cs/chlorophyllum-rhacodes/"
        },
        {
          group: "text",
          name: "myko.cz",
          href: "https://www.myko.cz/myko-atlas/Chlorophyllum-rachodes/"
        },
        {
          group: "text",
          name: "nahuby.sk",
          href: "https://www.nahuby.sk/atlas-hub/Chlorophyllum-rhacodes/bedla-cervenejuca/bedla-cervenajici/ID1"
        },
        {
          group: "text",
          name: "cs.wikipedia",
          href: "https://cs.wikipedia.org/wiki/Bedla_červenající"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=374433",
          detail: "374433"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=374433",
          detail: "374433"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/374433"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/5955395",
          detail: "5955395"
        }
      ],
      sk: [
        {
          group: "text",
          name: "nahuby.sk",
          href: "https://www.nahuby.sk/atlas-hub/Chlorophyllum-rhacodes/bedla-cervenejuca/bedla-cervenajici/ID1",
          detail: "bedľa červenejúca"
        }
      ]
    },
    synonyms: [
      "Agaricus rhacodes Vittad.",
      "Lepiota rhacodes (Vittad.) Quél.",
      "Mastocephalus rhacodes (Vittad.) Kuntze",
      "Leucocoprinus rhacodes (Vittad.) Pat.",
      "Macrolepiota rhacodes (Vittad.) Singer"
    ]
  };

  var EMETICA_MEDIA = "photos/Russulales/Russulaceae/Russula_emetica/";
  var EMETICA = {
    id: 46,
    name: "Russula emetica",
    author: "(Schaeff.) Pers.",
    family: "Russulaceae",
    genus: "Russula",
    order: "Russulales",
    edibility: "poisonous",
    hymenium: "gills",
    path: ["Fungi", "Dikarya", "Basidiomycota", "Agaricomycotina", "Agaricomycetes", "Incertae sedis", "Russulales", "Russulaceae", "Russula"],
    summary: ["Russulales", "Russulaceae", "Russula"],
    added: "2026-10-24",
    plate: STORAGE + EMETICA_MEDIA + "Russula_emetica@1600.webp",
    plateGrid: STORAGE + EMETICA_MEDIA + "Russula_emetica@400.webp",
    plateCredit: {
      author: "L. Dufour",
      license: "not stated"
    },
    photos: [
      {
        src: STORAGE + EMETICA_MEDIA + "re1.webp",
        author: "Thomas Pruß",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Fichtenspeitaeubling.jpg"
      },
      {
        src: STORAGE + EMETICA_MEDIA + "re2.webp",
        author: "MichalPL",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Russula_emetica_in_Poland.jpg"
      },
      {
        src: STORAGE + EMETICA_MEDIA + "re3.webp",
        author: "peupleloup",
        license: "CC BY-SA 2.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
        source: "https://commons.wikimedia.org/wiki/File:Russula_emetica_The_sickener.jpg"
      },
      {
        src: STORAGE + EMETICA_MEDIA + "re4.webp",
        author: "Agnieszka Kwiecień",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Russula_emetica_Gołąbek_wymiotny_2016-07-09_Grzybnica_01.jpg"
      },
      {
        src: STORAGE + EMETICA_MEDIA + "re5.webp",
        author: "Piotr J",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Russula_emetica1.JPG"
      }
    ],
    capFrom: 3,
    capTo: 10,
    stipeHeightFrom: 4,
    stipeHeightTo: 10,
    stipeThickFrom: 1,
    stipeThickTo: 2.5,
    fruitingFrom: 6,
    fruitingTo: 11,
    label: {
      en: "sickener",
      sk: "plávka škodlivá"
    },
    names: {
      en: [
        "emetic russula",
        "vomiting russula"
      ]
    },
    text: {
      en: {
        description: "An ectomycorrhizal mushroom of damp conifer woods and sphagnum bogs, most often with spruce and pine. It is widespread in Europe from the Mediterranean to northern Fennoscandia, including Britain and Ireland, and it is reported from North Africa, northern Asia, and parts of North and Central America.",
        cap: "The cap is commonly 3–10 cm across, and some accounts start near 2.5 cm. It is hemispherical, then convex, and later flat and shallowly depressed, sometimes with a low umbo. The surface is smooth, sticky, and shiny when wet. It is scarlet to cherry red, sometimes darker at the centre and less often pink. The pigment is water-soluble and fades to pink, orange, or white blotches. The margin stays smooth for a long time and later becomes shortly grooved for about 2–7 mm, and it may turn wavy or knobbly. The cuticle peels about halfway in some accounts and from two thirds to almost the centre, often nearly completely, in others. The flesh under the cuticle is pink. The cap skin bears pileocystidia about 4.5–14 μm wide, with one to three septa, and they stain in sulfobenzaldehyde and sulfovanillin.",
        hymenium: "The gills are white to pale cream, though mature gills are sometimes described as deep cream-yellow. They are crowded and later sometimes a little more distant, thin and brittle, about 4–9 mm deep, narrowly attached to free, sometimes emarginate, and occasionally slightly decurrent. Some are forked, short gills occur, and cross-veins may join them. The edge is even. The basidia are clavate and four-spored, about 38–50 × 11–13 μm in European fruit bodies and about 33–50 × 9–11.6 μm in a North American account under this name. Cheilocystidia are fusiform. European ones are about 35–75 × 7–12 μm and not or barely constricted at the tip, while the North American account gives much shorter ones, about 14–24 × 4.4–7.3 μm. Pleurocystidia are about 55–100 × 10–14 μm in the European account and about 35–88 × 7.3–12.4 μm in the North American account. The cystidia stain in sulfobenzaldehyde and sulfovanillin. Clamp connections are absent.",
        stipe: "The stipe is white, dry, and shiny, sometimes faintly longitudinally grooved, and it may yellow slightly, especially at the base. It is cylindrical or slightly clavate and has no ring. European fruit bodies are commonly about 4–10 cm long and 1–2.5 cm thick, and published extremes run from about 3 cm to about 10.5 cm long and down to about 0.7 cm thick. It is firm and solid at first, then spongy or partly hollow.",
        flesh: "The flesh is white and brittle, soon spongy, pink under the cuticle, and it may yellow faintly with age. It does not change colour when cut. The odour is faint and fruity or slightly spicy, and it may be almost absent. The taste is immediately and sharply acrid. Iron sulfate turns the flesh pink, phenol turns it brown, and guaiac is negative or nearly negative.",
        sporePrint: "White to very pale cream. The spores are subglobose to broadly ellipsoid, about 7.4–11 × 6.5–9 μm, with a length-to-width ratio about 1.1–1.3. They bear coarse amyloid warts, mostly conical and up to about 1.2 μm high, that are largely joined into a net. The apiculus is about 1.5–1.62 × 1.25 μm, and the amyloid hilar spot is irregular, about 3 × 3.75 μm.",
        habitat: "In central Europe fruit bodies appear from June to October, in Germany from July to November, and in Britain and Ireland from August to October. They grow singly or in groups on damp to waterlogged acid ground in conifer woods, especially with spruce and pine, often in moss, in sphagnum bogs, and on wet heath. They occasionally sit on humus or on very rotten wood.",
        uses: "Raw or undercooked fruit bodies cause nausea, vomiting, colicky abdominal pain, and diarrhoea, usually within about half an hour to three hours, and sometimes within about an hour. The poisoning is generally gastrointestinal. Extreme cases have included cramps and coma, and a fatal outcome is unlikely except in frail, immunocompromised, or very young people. The irritants are thought to be sesquiterpenes, among them lactarorufin A, furandiol, methoxyfuranalcohol, and an unnamed compound. Parboiling or pickling, as practised in Russia and eastern Europe, is said to remove the peppery taste and much of the toxicity, and thorough cooking is also said to destroy the toxins. The acrid taste has also led some accounts to call the mushroom inedible.",
        confusion: "Russula nobilis grows with beech, stays more convex when mature, has firmer flesh, and its cuticle peels only about one third of the way, or only at the margin. Russula silvestris is a little less acrid and grows on drier ground under oak and pine. Russula betularum is smaller and more fragile, its pink cap fades quickly, its spores are a little larger, and it usually grows with birch. Russula aquosa grows in peat and its flesh is almost mild. Russula paludosa shares wet conifer sites, is at most slightly acrid in the young gills, usually has a reddish stipe, and has a pale ochre spore print. Russula sanguinaria has a reddish flush in the stipe. Russula aurea has yellow in the stipe, the gills, and the flesh. Russula badia has a red-brown cap, a resinous odour, firmer flesh, an acrid taste only after a delay, an ochre to yellow spore print, and a stipe that is sometimes pinkish. Russula fragilis has notched gills, and its stipe stains blue with naphthol. Russula nana grows in arctic and subarctic highland meadows with dwarf willow or alpine bearberry. In the eastern and northern United States, Russula rugulosa has a wrinkled, pimpled cuticle, cream spores, and a mild taste.",
        notes: "A 2025 assessment places it as Least Concern. It forms ectomycorrhiza with members of the pine family across the northern hemisphere. Australian records belong to Russula persanguinea. Some South American records have been treated cautiously. North American records are uncertain, and some belong to other species."},
      sk: {
        description: "Ektomykorízna huba vlhkých ihličnatých lesov a rašelinísk s rašelinníkom, najčastejšie so smrekom a borovicou. Je rozšírená v Európe od Stredomoria po severnú Fennoskandiu, vrátane Británie a Írska, a uvádza sa zo severnej Afriky, severnej Ázie a z častí Severnej a Strednej Ameriky.",
        cap: "Klobúk máva v priemere 3–10 cm a niektoré opisy začínajú pri asi 2,5 cm. Za mladi je polguľovitý, potom klenutý a neskôr sploštený až plytko preliačený, niekedy s nízkym hrbčekom. Povrch je hladký, za vlhka lepkavý a lesklý. Je šarlátový až višňovočervený, niekedy v strede tmavší a zriedkavejšie ružový. Farbivo je rozpustné vo vode a vybledá do ružových, oranžových alebo bielych škvŕn. Okraj ostáva dlho hladký a neskôr je krátko ryhovaný, ryhy sú asi 2–7 mm dlhé, a môže byť zvlnený alebo hrboľatý. Pokožka sa podľa opisov lúpe asi do polovice, alebo od dvoch tretín takmer po stred a často takmer celá. Dužina pod pokožkou je ružová. V pokožke sú pileocystidy široké asi 4,5–14 μm, s jednou až tromi priehradkami, a sfarbujú sa v sulfobenzaldehyde a v sulfovanilíne.",
        hymenium: "Lupene sú biele až bledokrémové, hoci zrelé lupene sa niekedy opisujú ako sýto krémovožlté. Sú husté a neskôr niekedy o niečo redšie, tenké a krehké, široké asi 4–9 mm, úzko pripojené až voľné, niekedy vykrojené a občas mierne zbiehavé. Niektoré sú vidlicovité, primiešané sú krátke lupene a spájať ich môžu priečne žilky. Ostria je rovná. Bazídiá sú kyjakovité a štvorvýtrusové, pri európskych plodniciach asi 38–50 × 11–13 μm a v severoamerickom opise pod týmto menom asi 33–50 × 9–11,6 μm. Cheilocystidy sú vretenovité. Európske merajú asi 35–75 × 7–12 μm a na hrote nie sú stiahnuté alebo sú sotva stiahnuté, kým severoamerický opis uvádza oveľa kratšie, asi 14–24 × 4,4–7,3 μm. Pleurocystidy merajú v európskom opise asi 55–100 × 10–14 μm a v severoamerickom asi 35–88 × 7,3–12,4 μm. Cystidy sa sfarbujú v sulfobenzaldehyde a v sulfovanilíne. Spojky chýbajú.",
        stipe: "Hlúbik je biely, suchý a lesklý, niekedy slabo pozdĺžne ryhovaný, a môže slabo žltnúť, najmä pri báze. Je valcovitý alebo mierne kyjakovitý a nemá prsteň. Európske plodnice sú bežne asi 4–10 cm dlhé a 1–2,5 cm hrubé a uverejnené krajnosti siahajú od asi 3 cm do asi 10,5 cm dĺžky a po hrúbku asi 0,7 cm. Najprv je pevný a plný, neskôr špongiovitý alebo sčasti dutý.",
        flesh: "Dužina je biela a krehká, čoskoro špongiovitá, pod pokožkou ružová a vekom môže slabo žltnúť. Na reze nemení farbu. Vôňa je slabá, ovocná alebo mierne korenistá a môže takmer chýbať. Chuť je hneď ostro štipľavá. Síran železnatý sfarbuje dužinu do ružova, fenol do hneda a guajak je negatívny alebo takmer negatívny.",
        sporePrint: "Biely až veľmi bledokrémový. Výtrusy sú takmer guľovité až široko elipsoidné, asi 7,4–11 × 6,5–9 μm, s pomerom dĺžky k šírke asi 1,1–1,3. Nesú hrubé amyloidné bradavice, prevažne kužeľovité a vysoké až asi 1,2 μm, z veľkej časti pospájané do siete. Apikulus meria asi 1,5–1,62 × 1,25 μm a amyloidná hilová škvrna je nepravidelná, asi 3 × 3,75 μm.",
        habitat: "V strednej Európe sa plodnice objavujú od júna do októbra, v Nemecku od júla do novembra a v Británii a Írsku od augusta do októbra. Rastú jednotlivo alebo v skupinách na vlhkej až podmáčanej kyslej pôde v ihličnatých lesoch, najmä so smrekom a borovicou, často v machu, na rašeliniskách s rašelinníkom a na vlhkých vresoviskách. Občas vyrastajú na humuse alebo na veľmi spráchnivenom dreve.",
        uses: "Surové alebo nedostatočne tepelne upravené plodnice spôsobujú nevoľnosť, vracanie, kolikovitú bolesť brucha a hnačku, zvyčajne do pol hodiny až troch hodín a niekedy už do jednej hodiny. Otrava je spravidla žalúdočno-črevná. V krajných prípadoch sa objavili kŕče a kóma a smrteľný priebeh je nepravdepodobný okrem slabých ľudí, ľudí s oslabenou imunitou a veľmi malých detí. Za dráždivé látky sa považujú seskviterpény, medzi nimi laktarorufín A, furándiol, metoxyfuranalkohol a jedna nepomenovaná zlúčenina. Predvarenie alebo nakladanie, ako sa robí v Rusku a vo východnej Európe, vraj odstraňuje štipľavú chuť a veľkú časť jedovatosti a dôkladná tepelná úprava vraj toxíny tiež rozkladá. Pre štipľavú chuť ju niektoré opisy označujú aj za nejedlú.",
        confusion: "Russula nobilis rastie s bukom, v dospelosti ostáva klenutejšia, má pevnejšiu dužinu a pokožka sa jej lúpe len asi do tretiny alebo len pri okraji. Russula silvestris je o niečo menej štipľavá a rastie na suchšej pôde pod dubom a borovicou. Russula betularum je menšia a krehkejšia, ružový klobúk jej rýchlo bledne, výtrusy má o niečo väčšie a zvyčajne rastie s brezou. Russula aquosa rastie na rašeline a dužinu má takmer miernu. Russula paludosa má podobné vlhké ihličnaté stanovištia, v mladých lupeňoch je nanajvýš slabo štipľavá, hlúbik máva červenkastý a výtrusný prach bledookrový. Russula sanguinaria má v hlúbiku červenkastý nádych. Russula aurea má žltú farbu v hlúbiku, v lupeňoch aj v dužine. Russula badia má červenohnedý klobúk, živicovú vôňu, pevnejšiu dužinu, štipľavá chuť sa dostaví až s oneskorením, výtrusný prach má okrový až žltý a hlúbik niekedy ružovkastý. Russula fragilis má vykrojené lupene a hlúbik sa jej s naftolom sfarbuje do modra. Russula nana rastie na arktických a subarktických horských lúkach so zakrpatenou vŕbou alebo s medvedicou alpínskou. Na východe a severe Spojených štátov má Russula rugulosa zvráskavenú bradavičnatú pokožku, krémové výtrusy a miernu chuť.",
        notes: "Hodnotenie z roku 2025 ho zaraďuje ako málo dotknutý druh (Least Concern). Tvorí ektomykorízu s drevinami z čeľade borovicovité na severnej pologuli. Austrálske nálezy patria druhu Russula persanguinea. Niektoré juhoamerické údaje sa posudzujú opatrne. V podhorských oblastiach je dosť hojná.",
      }
    },
    sources: {
      en: [
        {
          group: "text",
          name: "First Nature",
          href: "https://www.first-nature.com/fungi/russula-emetica.php"
        },
        {
          group: "text",
          name: "Wikipedia",
          href: "https://en.wikipedia.org/wiki/Russula_emetica"
        },
        {
          group: "text",
          name: "de.wikipedia",
          href: "https://de.wikipedia.org/wiki/Kirschroter_Spei-Täubling"
        },
        {
          group: "text",
          name: "myko.cz",
          href: "http://www.myko.cz/myko-atlas/Russula-emetica/"
        },
        {
          group: "text",
          name: "nahuby.sk",
          href: "https://www.nahuby.sk/atlas-hub/Russula-emetica/plavka-skodliva/holubinka-vrhavka/ID470",
          detail: "plávka škodlivá"
        },
        {
          group: "text",
          name: "MycoBank",
          href: "https://www.mycobank.org/details/26/38695"
        },
        {
          group: "text",
          name: "IUCN Red List",
          href: "https://www.iucnredlist.org/species/260332962/260426845"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=191650",
          detail: "191650"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=191650",
          detail: "191650"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=226395",
          detail: "226395"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/191650"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/2551213",
          detail: "2551213"
        }
      ],
      sk: [
        {
          group: "text",
          name: "nahuby.sk",
          href: "https://www.nahuby.sk/atlas-hub/Russula-emetica/plavka-skodliva/holubinka-vrhavka/ID470",
          detail: "plávka škodlivá"
        }
      ]
    },
    synonyms: [
      "Agaricus emeticus Schaeff.",
      "Amanita rubra Lam.",
      "Agaricus ruber (Lam.) Fr.",
      "Russula rubra (Lam.) Fr.",
      "Agaricus fallax Fr.",
      "Russula clusii (Fr.) Sacc.",
      "Russula truncigena Britzelm.",
      "Russula alpestris (Boud.) Singer",
      "Russula alpina (A. Blytt & Rostr.) F.H. Møller & Jul. Schäff.",
      "Russula gregaria (Kauffman) Moënne-Locc. & Reumaux",
      "Russula atropurpurina (Singer) Crawshay",
      "Russula alnijorullensis (Singer) Singer"
    ]
  };

  var TRICHOLOMA_MEDIA = "photos/Agaricales/Tricholomataceae/Tricholoma_equestre/";
  var TRICHOLOMA = {
    id: 47,
    name: "Tricholoma equestre",
    author: "(L.) P. Kumm.",
    family: "Tricholomataceae",
    genus: "Tricholoma",
    order: "Agaricales",
    edibility: "poisonous",
    hymenium: "gills",
    path: [
      "Fungi",
      "Dikarya",
      "Basidiomycota",
      "Agaricomycotina",
      "Agaricomycetes",
      "Agaricomycetidae",
      "Agaricales",
      "Tricholomataceae",
      "Tricholoma",
    ],
    summary: ["Agaricales", "Tricholomataceae", "Tricholoma"],
    added: "2026-10-24",
    plate: STORAGE + TRICHOLOMA_MEDIA + "Tricholoma_equestre@1600.webp",
    plateGrid: STORAGE + TRICHOLOMA_MEDIA + "Tricholoma_equestre@400.webp",
    plateCredit: {
      author: "J. Kops",
      license: "public domain",
      source: "https://commons.wikimedia.org/wiki/File:Agaricus_equestris_—_Flora_Batava_—_Volume_v15.jpg"
    },
    photos: [
      {
        src: STORAGE + TRICHOLOMA_MEDIA + "te1.webp",
        author: "Alan Rockefeller",
        license: "CC BY 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Tricholoma_equestre_5771556.jpg"
      },
      {
        src: STORAGE + TRICHOLOMA_MEDIA + "te2.webp",
        author: "Svencapoeira",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Hobuheinik2.jpg"
      },
      {
        src: STORAGE + TRICHOLOMA_MEDIA + "te3.webp",
        author: "Jerzy Opioła",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Tricholoma_equestre_G7.jpg"
      },
      {
        src: STORAGE + TRICHOLOMA_MEDIA + "te4.webp",
        author: "Jerzy Opioła",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Tricholoma_equestre_G6.JPG"
      },
      {
        src: STORAGE + TRICHOLOMA_MEDIA + "te5.webp",
        author: "Nick Kleinschmidt",
        license: "CC BY 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Tricholoma_equestre_165481726.jpg"
      },
    ],
    capFrom: 4,
    capTo: 15,
    stipeHeightFrom: 3,
    stipeHeightTo: 10,
    stipeThickFrom: 0.6,
    stipeThickTo: 3,
    fruitingFrom: 7,
    fruitingTo: 12,
    label: { en: "yellow knight", sk: "čírovka zelenkastá" },
    names: { en: ["man on horseback", "saddle-shaped tricholoma"], sk: ["sviňurka", "sviňúvka", "zelenka", "sviňúrka"] },
    text: {
      en: {
        description: "A fleshy ectomycorrhizal mushroom of sandy pine woods, often in groups or rings, with the fruit bodies half buried in sand, moss, or needle litter. It is native across the temperate northern hemisphere, in Europe and North America, and it is reported from Asia and Central America.",
        cap: "The cap is 4–15 cm across. It is convex, hemispherical, or broadly conical, with the margin long inrolled, and later flattened, wavy, or slightly depressed, often with a low broad umbo. The colour runs from lemon yellow, chrome yellow, and greenish yellow to honey yellow, brownish yellow, or olive brown, and the centre is darker brown. Appressed orange-brown to umber scales or fibrils sit at the centre, without prominent blackish radiating fibrils. The surface is viscid when wet and soon dry, and it is usually encrusted with sand. Areas that stayed under the litter remain paler. The skin can be peeled. Accounts describe either a cutis passing into a trichoderm, with cylindrical hyphae about 20–45 × 2–7 μm, cylindrical or club-shaped tips, and brown pigment, or a smoother ixocutis of hyphae 2.5–5 μm wide that is hyaline to reddish in potassium hydroxide. Potassium hydroxide does not change the cap colour. Clamp connections are absent throughout the fruit body.",
        hymenium: "The gills are notched to adnexed, often with a small tooth, and rather sparse to crowded, most often moderately close. They are pale yellow to bright sulphur yellow, and sometimes yellow-green or yellow-orange. Short gills are frequent. The edge is usually smooth, and it can be slightly serrate while remaining yellow. The basidia are mostly four-spored, 25–40 × 6–10 μm, and they lack a basal clamp. Cystidia are absent.",
        stipe: "The stipe is 3–10 cm tall and 0.6–3 cm thick. It is solid, cylindrical, and often club-shaped or slightly enlarged below, sometimes tapering. There is no ring. The surface is whitish to pale yellow near the apex and more chrome yellow, sulphur yellow, greenish yellow, or brownish yellow below. It is longitudinally fibrillose, almost bare, and sometimes has small orange-brown scales. The base can be tinged violet. The basal mycelium is white to pale yellow and often hard to see under sand and litter. The stipe is often almost entirely buried, and the base is caked in sand.",
        flesh: "The flesh is thick and compact. It is white to pale yellow, lemon yellow under the cap skin, and paler than the exterior. It does not change colour when cut. The smell is weak. It is often mealy, like fresh flour, and stronger in the cut flesh, though some fruit bodies have little odour. The taste is mild and mealy, or sweetish and nutty, and it has been called simply mushroomy.",
        sporePrint: "White. The spores are ellipsoid, smooth, and hyaline, with a pronounced hilar appendage, inamyloid, 5–9.5 × 3–6 μm. The length-to-width ratio is about 1.1–2.0, commonly near 1.5–1.6.",
        habitat: "Fruiting runs from July to December. In Britain and Ireland it is July to October, earlier in Scandinavia and later in southern Europe. In Slovakia it runs from the end of September into early December, and in Poland from September into late autumn, with a peak after the first frosts. In Siberia it is July to October. In North America it fruits in summer and autumn. It is ectomycorrhizal with pine, especially on very nutrient-poor sandy soil, often in groups or rings. The fruit bodies are often almost hidden under moss, needles, or sand, so that only part of the cap shows. In Britain it is occasional with birch and oak. It is common in northern Scotland under Scots pine and rare in southern Britain and Ireland. Siberian records from dark conifer and fir woods may belong to Tricholoma frondosae.",
        uses: "It was long collected and sold as a good edible mushroom, and some regional accounts still rate it highly, a judgement now disputed. Eaten in quantity it has caused rhabdomyolysis. Twelve French cases from 1992 to 2000 included three deaths, and later cases are known from Poland and elsewhere. The toxin is not known. Sale is banned in France. In Germany the official advice is not to eat it. A 2018 Polish trial of one fried meal of 300 g, in ten volunteers, found no effect, and sale there is still permitted under a 2008 regulation, but later reviews advise against harvesting it.",
        confusion: "Tricholoma sulphureum lacks the brown-olive cap centre, has distant gills, a thinner stipe, sulphur-yellow flesh, and a strong smell of coal gas or sulphur. Tricholoma sejunctum has white to faintly yellowish gills, blackish innate radial fibrils, and a bitter or acrid taste. Tricholoma subsejunctum and Tricholoma viridilutescens also have white gills and grow in mixed forests. Tricholoma aestuans has a more conical cap and a distinctly sharp, burning taste, with whitish flesh and an indistinct smell, and it grows at higher elevations under conifers. Tricholoma frondosae is a more intense yellow-olive, slimmer, with stronger scales on the cap and smaller spores, and it prefers poplars and aspen on richer soil, whereas this species grows on very nutrient-poor sand under pines. Tricholoma chrysophyllum grows with holm oak and has a slightly scaly stipe and a more olive, more scaly cap. Tricholoma arvernense can share the brown, mustard, and yellow-green cap tones and sometimes the same woods, but its gills are white and lack yellow. Amanita phalloides has white gills, a volva, usually a ring, and a sweetish smell of artificial honey. Entoloma luridum, in the upper Midwest and the east of North America, shares the habitat, but the mature gills and the spore print are brownish pink and the odour is not mealy.",
        notes: "Some authors still separate a more robust umbonate dune form, pending a revision of the complex. Japanese material of that dune form sits on its own branch, apart from European fruit bodies of this species and from European material under the same name. North American records cover diverse ecosystems, and poisoning is not reported there. West Coast material filed as Tricholoma flavovirens may include more than one species. Tricholoma ulvenii is paler lemon, with slightly smaller spores and broader hyphae in the gill trama, and north-European ITS sequences do not separate it from this species. In Germany the species is legally protected from collecting. A 2016 assessment ranks it secure. A Polish red-list entry places it in category I, threat undetermined.",
      },
      sk: {
        description: "Mäsitá ektomykorízna huba piesočnatých borovicových lesov, často v skupinách alebo v kruhoch, s plodnicami napoly zahrabanými v piesku, machu alebo v ihličnatom opade. Pôvodná je v miernom pásme severnej pologule, v Európe a v Severnej Amerike, a uvádza sa z Ázie a zo Strednej Ameriky.",
        cap: "Klobúk má 4–15 cm v priemere. Je klenutý, polguľovitý alebo široko kužeľovitý, s okrajom dlho podvinutým, a neskôr sploštený, zvlnený alebo slabo preliačený, často s nízkym širokým hrboľom. Farba prechádza od citrónovožltej, chrómovožltej a zelenožltej po medovožltú, hnedožltú alebo olivovohnedú a stred je tmavšie hnedý. V strede sú pritisnuté oranžovohnedé až umbrové šupiny alebo vlákna, bez nápadných černastých lúčovitých vlákien. Povrch je za vlhka slizký a čoskoro suchý a zvyčajne je obalený pieskom. Miesta, ktoré ostali pod opadom, ostávajú bledšie. Pokožku možno olúpať. Opisy uvádzajú buď kutis prechádzajúcu do trichodermu, s valcovitými hýfami asi 20–45 × 2–7 μm, s valcovitými alebo kyjačkovitými koncami a s hnedým pigmentom, alebo hladší ixokutis z hýf širokých 2,5–5 μm, ktoré sú v hydroxide draselnom hyalínne až červenkasté. Hydroxid draselný farbu klobúka nemení. Spojky v celej plodnici chýbajú.",
        hymenium: "Lupene sú vykrojené až úzko prirastené, často s malým zúbkom, a od pomerne riedkych po husté, najčastejšie stredne husté. Sú bledožlté až živo sírovožlté a niekedy žltozelené alebo žltooranžové. Krátke lupene sú časté. Ostrie je zvyčajne hladké a môže byť jemne pílkovité, pričom ostáva žlté. Bazídiá sú prevažne štvorvýtrusové, veľké 25–40 × 6–10 μm, a na báze nemajú spojku. Cystidy chýbajú.",
        stipe: "Hlúbik je 3–10 cm vysoký a 0,6–3 cm hrubý. Je plný, valcovitý a často kyjakovitý alebo dolu mierne rozšírený, niekedy sa zužuje. Prsteň nemá. Povrch je pri vrchole belavý až bledožltý a nižšie skôr chrómovožltý, sírovožltý, zelenožltý alebo hnedožltý. Je pozdĺžne vláknitý, takmer holý a niekedy má drobné oranžovohnedé šupiny. Báza môže mať fialový nádych. Bazálne mycélium je biele až bledožlté a pod pieskom a opadom ho často ťažko vidieť. Hlúbik býva často takmer celý zahrabaný a báza je obalená pieskom.",
        flesh: "Dužina je hrubá a kompaktná. Je biela až bledožltá, pod pokožkou klobúka citrónovožltá a bledšia než povrch. Na reze nemení farbu. Vôňa je slabá. Často je múčna, ako čerstvá múka, a v prerezanej dužine silnejšia, hoci niektoré plodnice takmer nevoňajú. Chuť je mierna a múčna, alebo sladkastá a oriešková, a opisuje sa aj jednoducho ako hubová.",
        sporePrint: "Biely. Výtrusy sú elipsoidné, hladké a hyalínne, s výrazným hilárnym príveskom, neamyloidné, veľké 5–9,5 × 3–6 μm. Pomer dĺžky k šírke je asi 1,1–2,0, bežne blízko 1,5–1,6.",
        habitat: "Plodí od júla do decembra. V Británii a Írsku od júla do októbra, v Škandinávii skôr a v južnej Európe neskôr. Na Slovensku od konca septembra do začiatku decembra a v Poľsku od septembra do neskorej jesene, s vrcholom po prvých mrazoch. Na Sibíri od júla do októbra. V Severnej Amerike plodí v lete a na jeseň. Je ektomykorízna s borovicou, najmä na piesočnatej pôde veľmi chudobnej na živiny, často v skupinách alebo v kruhoch. Plodnice bývajú takmer celé ukryté pod machom, ihličím alebo pieskom, takže nad povrch vyčnieva len časť klobúka. V Británii sa občas vyskytuje aj s brezou a s dubom. Na severe Škótska je hojná pod borovicou lesnou a na juhu Británie a v Írsku je zriedkavá. Sibírske nálezy z tmavých ihličnatých a jedľových lesov môžu patriť druhu Tricholoma frondosae.",
        uses: "Dlho sa zbierala a predávala ako dobrá jedlá huba a niektoré krajové opisy ju dodnes vysoko cenia, no tento úsudok je dnes sporný. Vo väčšom množstve spôsobila rabdomyolýzu. Dvanásť francúzskych prípadov z rokov 1992 až 2000 zahŕňalo tri úmrtia a neskoršie prípady sú známe z Poľska aj z iných krajín. Toxín nie je známy. Predaj je vo Francúzsku zakázaný. V Nemecku úradné odporúčanie znie nejesť ju. Poľská skúška z roku 2018, jedno vyprážané jedlo s hmotnosťou 300 g u desiatich dobrovoľníkov, nenašla žiadny účinok a predaj tam podľa predpisu z roku 2008 stále povoľujú, no neskoršie prehľady radia hubu nezbierať.",
        confusion: "Čírovka sírovožltá (Tricholoma sulphureum) nemá hnedoolivový stred klobúka, má riedke lupene, tenší hlúbik, sírovožltú dužinu a silný zápach po svietiplyne alebo síre. Čírovka zelenohnedastá (Tricholoma sejunctum) má biele až slabo žltkasté lupene, černasté vrastené lúčovité vlákna a horkú alebo štipľavú chuť. Tricholoma subsejunctum a čírovka olivovohnedá (Tricholoma viridilutescens) majú tiež biele lupene a rastú v zmiešaných lesoch. Čírovka severská (Tricholoma aestuans) má kužeľovitejší klobúk a výrazne ostrú, pálivú chuť, belavú dužinu a nevýraznú vôňu a rastie vo vyšších polohách pod ihličnanmi. Čírovka osiková (Tricholoma frondosae) má sýtejšiu žltoolivovú farbu, je štíhlejšia, s výraznejšími šupinami na klobúku a s menšími výtrusmi, a uprednostňuje topole a osiku na bohatšej pôde, kým tento druh rastie na piesku veľmi chudobnom na živiny pod borovicami. Tricholoma chrysophyllum rastie s dubom cezmínovým a má mierne šupinkatý hlúbik a olivovejší, šupinatejší klobúk. Čírovka ihličinová (Tricholoma arvernense) môže mať rovnaké hnedé, horčicové a žltozelené tóny klobúka a niekedy aj rovnaké lesy, no lupene má biele, bez žltej farby. Smrteľne jedovatá muchotrávka zelená (Amanita phalloides) má biele lupene, pošvu, zvyčajne prsteň a sladkastú vôňu po umelom mede. Entoloma luridum, na hornom Stredozápade a na východe Severnej Ameriky, zdieľa stanovište, no zrelé lupene aj výtrusný prach sú hnedoružové a vôňa nie je múčna.",
        notes: "Niektorí autori stále oddeľujú mohutnejšiu hrboľatú dunovú formu, kým sa komplex nereviduje. Japonský materiál tej dunovej formy stojí na vlastnej vetve, oddelene od európskych plodníc tohto druhu aj od európskeho materiálu vedeného pod tým istým menom. Tricholoma ulvenii má bledšie citrónové sfarbenie, o niečo menšie výtrusy a širšie hýfy v trame lupeňov a severoeurópske sekvencie ITS ju od tohto druhu neoddeľujú. V Nemecku je druh zákonom chránený pred zberom. Hodnotenie z roku 2016 ho zaraďuje ako zabezpečený. Poľský červený zoznam ho zaraďuje do kategórie I, s neurčeným ohrozením.",
      }
    },
    sources: {
      en: [
        { group: "text", name: "Wikipedia", href: "https://en.wikipedia.org/wiki/Tricholoma_equestre" },
        { group: "text", name: "First Nature", href: "https://www.first-nature.com/fungi/tricholoma-equestre.php" },
        { group: "text", name: "MushroomExpert", href: "https://www.mushroomexpert.com/tricholoma_equestre.html" },
        { group: "text", name: "nahuby.sk", href: "https://www.nahuby.sk/atlas-hub/Tricholoma-equestre/cirovka-zelenkasta/ciruvka-zelanka/ID52" },
        { group: "text", name: "German Wikipedia", href: "https://de.wikipedia.org/wiki/Grünling_(Pilz)" },
        { group: "text", name: "Fungipedia", href: "https://www.fungipedia.org/en/hongos/tricholoma-equestre.html" },
        { group: "text", name: "grzyby.pl", href: "https://grzyby.pl/gatunki/Tricholoma_equestre.htm" },
        { group: "text", name: "Грибы Сибири", href: "https://mycology.su/tricholoma-equestre.html" },
        { group: "text", name: "Wikimedia Commons", href: "https://commons.wikimedia.org/wiki/File:Agaricus_equestris_—_Flora_Batava_—_Volume_v15.jpg", detail: "Flora Batava 15" },
        { group: "name", name: "Index Fungorum", href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=176119", detail: "176119" },
        { group: "name", name: "Index Fungorum", href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=194817", detail: "194817" },
        { group: "name", name: "Species Fungorum", href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=176119", detail: "176119" },
        { group: "name", name: "Species Fungorum", href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=100578", detail: "100578" },
        { group: "name", name: "Species Fungorum", href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=18677", detail: "18677" },
        { group: "name", name: "MycoBank", href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/176119", detail: "176119" },
        { group: "name", name: "GBIF", href: "https://www.gbif.org/species/3324883", detail: "3324883" },
      ],
      sk: [
        { group: "text", name: "nahuby.sk", href: "https://www.nahuby.sk/atlas-hub/Tricholoma-equestre/cirovka-zelenkasta/ciruvka-zelanka/ID52", detail: "čírovka zelenkastá" }
      ]
    },
    synonyms: ["Agaricus equestris L.", "Amanita equestris (L.) Roussel", "Hypophyllum equestre (L.) Paulet", "Gyrophila equestris (L.) Quél.", "Glutinaster equestris (L.) Earle", "Melanoleuca equestris (L.) Murrill", "Agaricus aureus Schaeff.", "Agaricus auratus Paulet", "Tricholoma auratum Gillet", "Agaricus flavovirens Pers.", "Gymnopus flavovirens (Pers.) Zaw.", "Tricholoma flavovirens (Pers.) S. Lundell", "Gyrophila aurata (Gillet) Quél."]
  };

  var LYCOPERDON_MEDIA = "photos/Agaricales/Lycoperdaceae/Lycoperdon_perlatum/";
  var LYCOPERDON = {
    id: 48,
    name: "Lycoperdon perlatum",
    author: "Pers.",
    family: "Lycoperdaceae",
    genus: "Lycoperdon",
    order: "Agaricales",
    edibility: "edible",
    hymenium: "gleba",
    path: [
      "Fungi",
      "Dikarya",
      "Basidiomycota",
      "Agaricomycotina",
      "Agaricomycetes",
      "Agaricomycetidae",
      "Agaricales",
      "Lycoperdaceae",
      "Lycoperdon"
    ],
    summary: [
      "Agaricales",
      "Lycoperdaceae",
      "Lycoperdon"
    ],
    added: "2026-10-24",
    plate: STORAGE + LYCOPERDON_MEDIA + "Lycoperdon_perlatum@1600.webp",
    plateGrid: STORAGE + LYCOPERDON_MEDIA + "Lycoperdon_perlatum@400.webp",
    plateCredit: {
      author: "L. Dufour",
      license: "public domain",
      source: "https://www.biodiversitylibrary.org/page/3270622"
    },
    photos: [
      {
        src: STORAGE + LYCOPERDON_MEDIA + "lp1.webp",
        author: "Daniel Ullrich",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Single_lycoperdon_perlatum.jpg"
      },
      {
        src: STORAGE + LYCOPERDON_MEDIA + "lp2.webp",
        author: "Achim Lammerts",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:2025-10-15_D500-1015_Achim-Lammerts_Lycoperdon-perlatum.jpg"
      },
      {
        src: STORAGE + LYCOPERDON_MEDIA + "lp3.webp",
        author: "Stu's Images",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Common_Puffball,_Lycoperdon_perlatum,_Enfield,_UK.jpg"
      },
      {
        src: STORAGE + LYCOPERDON_MEDIA + "lp4.webp",
        author: "Dwergenpaartje",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Lycoperdon_perlatum_sideview_and_cross_section.JPG"
      },
      {
        src: STORAGE + LYCOPERDON_MEDIA + "lp5.webp",
        author: "Dan Molter",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Lycoperdon_perlatum_64509.jpg"
      }
    ],
    capFrom: 1.5,
    capTo: 7,
    stipeThickFrom: 1.2,
    stipeThickTo: 2.2,
    fruitingFrom: 6,
    fruitingTo: 11,
    label: {
      en: "common puffball",
      sk: "prášnica bradavičnatá"
    },
    names: {
      en: [
        "warted puffball",
        "gem-studded puffball",
        "gemmed puffball",
        "devil's snuff-box"
      ],
      sk: [
        "prašivka",
        "fúkavičná huba",
        "čertov tabak"
      ]
    },
    text: {
      en: {
        description: "A saprotrophic fungus of woodland litter and grassy ground. It is common across Europe, including Britain, Ireland, and Slovakia, and through temperate North America from Alaska to Mexico, and it is reported from parts of Asia, Africa, Australia, New Zealand, South America, Greenland, and Iceland.",
        cap: "The fruit body is pear-shaped or club-shaped, sometimes nearly round, with a rounded or flattened head on a narrower sterile base. It is commonly 2–6 cm across and 4–9 cm tall. Published measurements run from about 1.5 cm across and 3 cm tall to about 7 cm across and 10 cm tall, and the fertile head is about 2–5 cm across. Young fruit bodies are white to cream. Short firm cone-shaped spines about 1 mm high cover the head, often with smaller spines or granules around the larger ones. The spines are whitish, grey, or brown, and the tips are often ochre or brown. They rub off and leave round scars, often in a net that is clearest on the head and weaker toward the base. The surface then turns yellowish, ochre, grey-brown, or olive-brown. A small pore opens at the top. The outer skin is paper thin.",
        hymenium: "The gleba fills the head. When young it is white and firm, and its minute chambers are lined with the hymenium. It then turns yellow and olive and becomes soft, and at maturity it is an olive-brown to dark brown powder. A pore at the top lets the powder out. There are no gills. The basidia are four-spored. European collections have short club-shaped basidia about 7–10 × 4–5 μm, with unequal sterigmata about 5–10 μm long. North American collections have been described with smaller, nearly round basidia about 5–6 × 5–6 μm and sterigmata about 3 μm long. The capillitial threads are yellow-brown to brown, without septa, about 2–7.5 μm wide, with scattered pores.",
        stipe: "The sterile base is a broad stalk-like pedestal, not a true slender stipe. When young it is white and spongy or cottony, and the spines on it are smaller than those on the head. It is about 1.2–2.2 cm thick. With age it becomes yellowish, brown, or grey-brown, and it remains after the powder has gone. Thin white cords attach it to the ground.",
        flesh: "The young gleba and the sterile base are both white. The gleba is firm, and the base is spongy or cottony. Fresh flesh is mild or pleasantly mushroomy, and some descriptions call the smell and taste spicy. The smell can also be strong enough that the fungus is better not mixed with other mushrooms. Once the interior turns yellow, olive, or brown, the fruit body is left.",
        sporePrint: "The spore mass is olive-brown and becomes dark brown. It stays in the gleba until it is puffed out through the pore. The spores are globose, thick-walled, and finely warted. European spores are about 3.5–4.5 μm across, within a wider published range of 3–4.5 μm. North American collections are about 4–5 μm and appear greenish yellow in potassium hydroxide.",
        habitat: "Fruit bodies appear from June to November across much of Europe, from July to November in Britain and Ireland, and into December in Poland. In temperate North America they appear from late spring through autumn, and in warm climates through the winter. The fungus is saprotrophic on soil, leaf litter, and needle litter, and only rarely on well-rotted wood. It grows in coniferous and broadleaf woods, including beech and oak-hornbeam woods, and in scrub, heath, parks, pastures, and roadsides, sometimes in grass or on sheep-grazed stable dunes. Fruit bodies stand alone, scattered, or in groups and clusters, and sometimes in rings. In Slovakia it is the commonest species of the genus and grows in woods of every kind.",
        uses: "Only fruit bodies whose interior is still white and firm are eaten. The tough skin is peeled off. While the interior is white the fungus can be eaten raw, fried briefly in butter until golden, or used in an omelette or a soup. Boiling makes it tough. It is also stewed. Once the interior is yellow, olive, or brown, it is left. Accounts of the flavour disagree: some call it good, and the smell can be too strong to mix with other mushrooms.",
        confusion: "Apioperdon pyriforme has few or no prominent spines, grows on rotting wood, and does not leave a net when the spines fall. Buried wood can make it look as if it were growing on soil. Lycoperdon echinatum is darker, often with a reddish tinge, and has much longer spines. Lycoperdon nigrescens is darker. Its spines stand in groups, with tips that converge, and they are composite and do not leave a net. Lycoperdon umbrinum has softer, thinner spines that do not leave scars. Its mature gleba is dark brown to purple-brown, and the base is purple-tinged. Lycoperdon marginatum sheds its spines in irregular sheets. Lycoperdon excipuliforme is larger and greyer. Its finer spines do not leave a pattern, and at maturity the upper part breaks down completely. Lycoperdon mammiforme breaks into large cream scales rather than short conical spines. Scleroderma citrinum has a thick peridium, and the interior starts pale grey and becomes brown or black. A young Amanita, including Amanita muscaria and Amanita phalloides, shows a cap outline, gills, and a volva in a vertical cut. This fungus has no gill initials.",
        notes: "A 2019 assessment lists it as Least Concern. Fruit bodies accumulate cadmium, lead, mercury, and selenium and have been used to indicate soil pollution. Fruit bodies collected in 1977 from grassy ground beside a highway in Connecticut held high concentrations of cadmium and lead. Lycoperdic acid has been isolated from the fruit bodies."},
      sk: {
        description: "Saprotrofná huba lesnej hrabanky a trávnatých miest. Hojná je v Európe vrátane Británie, Írska a Slovenska a v miernom pásme Severnej Ameriky od Aljašky po Mexiko. Uvádza sa aj z častí Ázie, Afriky, Austrálie, Nového Zélandu, Južnej Ameriky, Grónska a Islandu.",
        cap: "Plodnica je hruškovitá alebo kyjakovitá, niekedy takmer guľovitá, s oblou alebo sploštenou hlavou na užšej neplodnej báze. Zvyčajne meria 2–6 cm v priemere a 4–9 cm na výšku. Uverejnené rozmery siahajú od asi 1,5 cm v priemere a 3 cm na výšku po asi 7 cm v priemere a 10 cm na výšku, pričom plodná hlava má asi 2–5 cm v priemere. Mladé plodnice sú biele až krémové. Hlavu pokrývajú krátke pevné kužeľovité ostne vysoké asi 1 mm, často s menšími ostňami alebo zrnkami okolo väčších. Ostne sú belavé, sivé alebo hnedé a ich hroty bývajú okrové alebo hnedé. Ošúchajú sa a zanechávajú okrúhle jazvy, často v sieti, ktorá je najzreteľnejšia na hlave a smerom k báze slabne. Povrch potom nadobúda žltkastú, okrovú, sivohnedú alebo olivovohnedú farbu. Na vrchole sa otvára malý pór. Vonkajšia pokožka je tenká ako papier.",
        hymenium: "Gléba vypĺňa hlavu. Za mladi je biela a pevná a jej drobné komôrky sú vystlané hyméniom. Potom žltne, nadobúda olivovú farbu, mäkne a v zrelosti je olivovohnedým až tmavohnedým prachom. Pór na vrchole prach vypúšťa. Lupene nemá. Bazídiá sú štvorvýtrusné. Európske zbery majú krátke kyjakovité bazídiá veľké asi 7–10 × 4–5 μm, s nerovnakými sterigmami dlhými asi 5–10 μm. Severoamerické zbery boli opísané s menšími, takmer guľovitými bazídiami veľkými asi 5–6 × 5–6 μm a so sterigmami dlhými asi 3 μm. Vlákna kapilícia sú žltohnedé až hnedé, bez priehradiek, široké asi 2–7,5 μm, s roztrúsenými pórmi.",
        stipe: "Neplodná báza je široký stopkovitý podstavec, nie pravý štíhly hlúbik. Za mladi je biela a hubovitá alebo vatovitá a ostne na nej sú menšie než na hlave. Hrubá je asi 1,2–2,2 cm. Vekom žltne, hnedne alebo sivohnedne a ostáva aj po vyprašeni prachu. K zemi ju pripájajú tenké biele povrázky.",
        flesh: "Mladá gléba aj neplodná báza sú biele. Gléba je pevná a báza je hubovitá alebo vatovitá. Čerstvá dužina je mierna alebo príjemne hubová a niektoré opisy označujú vôňu a chuť za korenistú. Vôňa môže byť aj natoľko silná, že hubu je lepšie nemiešať s inými hubami. Keď vnútro zožltne, nadobudne olivovú farbu alebo zhnedne, plodnica sa necháva.",
        sporePrint: "Výtrusná masa je olivovohnedá a neskôr tmavohnedá. Zostáva v glébe, kým sa cez pór nevypraší. Výtrusy sú guľovité, hrubostenné a jemne bradavičnaté. Európske výtrusy majú v priemere asi 3,5–4,5 μm, v širšom uverejnenom rozpätí 3–4,5 μm. Severoamerické zbery majú asi 4–5 μm a v hydroxide draselnom sa javia zelenkastožlté.",
        habitat: "Plodnice sa objavujú od júna do novembra vo veľkej časti Európy, od júla do novembra v Británii a Írsku a v Poľsku až do decembra. V miernom pásme Severnej Ameriky rastú od neskorej jari do jesene a v teplom podnebí aj cez zimu. Huba je saprotrofná na pôde, v listovej hrabanke a v opadanom ihličí a len zriedka na dobre zotletom dreve. Rastie v ihličnatých aj listnatých lesoch, vrátane bučín a dubovo-hrabových lesov, a tiež v krovinách, na vresoviskách, v parkoch, na pasienkoch a pri cestách, niekedy v tráve alebo na stabilných dunách spásaných ovcami. Plodnice stoja jednotlivo, roztrúsene alebo v skupinách a trsoch, niekedy v kruhoch. Na Slovensku je to najhojnejší druh rodu a rastie v lesoch každého typu.",
        uses: "Jedia sa len plodnice, ktorých vnútro je ešte biele a pevné. Tvrdá pokožka sa zlúpe. Kým je vnútro biele, hubu možno jesť surovú, krátko osmažiť na masle do zlatista alebo pridať do omelety či polievky. Varením stvrdne. Pripravuje sa aj dusením. Keď je vnútro žlté, olivové alebo hnedé, necháva sa. Údaje o chuti sa rozchádzajú: niektoré ju označujú za dobrú a vôňa môže byť príliš silná na to, aby sa miešala s inými hubami.",
        confusion: "Jedlá prášnica hruškovitá (Apioperdon pyriforme) má málo výrazných ostňov alebo nijaké, rastie na hnijúcom dreve a po opadaní ostňov nezanecháva sieť. Zahrabané drevo môže budiť dojem, že rastie na pôde. Lycoperdon echinatum je tmavšia, často s červenkastým nádychom, a má oveľa dlhšie ostne. Lycoperdon nigrescens je tmavšia. Jej ostne stoja v skupinách, ich konce sa zbiehajú, ostne sú zložené a sieť nezanechávajú. Prášnica huňatá (Lycoperdon umbrinum) má mäkšie a tenšie ostne, ktoré nezanechávajú jazvy. Jej zrelá gléba je tmavohnedá až purpurovohnedá a báza má purpurový nádych. Lycoperdon marginatum zhadzuje ostne v nepravidelných plátoch. Lycoperdon excipuliforme je väčšia a sivejšia. Jej jemnejšie ostne nezanechávajú vzor a v zrelosti sa horná časť úplne rozpadne. Jedlá prášnica závojová (Lycoperdon mammiforme) sa rozpadá na veľké krémové šupiny, nie na krátke kužeľovité ostne. Jedovatý pestrec obyčajný (Scleroderma citrinum) má hrubé perídium a vnútro je najprv bledosivé a potom hnedé alebo čierne. Mladá muchotrávka, vrátane jedovatej muchotrávky červenej (Amanita muscaria) a smrteľne jedovatej muchotrávky zelenej (Amanita phalloides), má na zvislom reze obrys klobúka, lupene a pošvu. Táto huba zárodky lupeňov nemá.",
        notes: "Hodnotenie z roku 2019 ho zaraďuje ako málo dotknutý druh (Least Concern). Plodnice hromadia kadmium, olovo, ortuť a selén a používali sa ako ukazovateľ znečistenia pôdy. Z plodníc bola izolovaná kyselina lykoperdová."}
    },
    sources: {
      en: [
        {
          group: "text",
          name: "First Nature",
          href: "https://www.first-nature.com/fungi/lycoperdon-perlatum.php"
        },
        {
          group: "text",
          name: "Wikipedia",
          href: "https://en.wikipedia.org/wiki/Lycoperdon_perlatum"
        },
        {
          group: "text",
          name: "MushroomExpert",
          href: "https://www.mushroomexpert.com/lycoperdon_perlatum.html"
        },
        {
          group: "text",
          name: "de.wikipedia",
          href: "https://de.wikipedia.org/wiki/Flaschen-Stäubling"
        },
        {
          group: "text",
          name: "grzyby.pl",
          href: "https://grzyby.pl/gatunki/Lycoperdon_perlatum.htm"
        },
        {
          group: "text",
          name: "sk.wikipedia",
          href: "https://sk.wikipedia.org/wiki/Prášnica_bradavičnatá"
        },
        {
          group: "text",
          name: "Poľovníctvo a rybárstvo",
          href: "https://polovnictvo-rybarstvo.pluska.sk/na-hubach/prasnica-bradavicnata-je-vyborna-jedla-huba-viete-vsak-cim-je-pozoruhodna",
          detail: "2 Aug 2023"
        },
        {
          group: "text",
          name: "Poľovníctvo a rybárstvo",
          href: "https://polovnictvo-rybarstvo.pluska.sk/na-hubach/prasnicu-bielou-tvrdou-duzi-nou-mozno-bez-obav-konzumovat-co-este-hodi",
          detail: "23 Nov 2023"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=220647",
          detail: "220647"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=220647",
          detail: "220647"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/220647"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/5243258",
          detail: "5243258"
        }
      ],
      sk: [
        {
          group: "text",
          name: "Wikipedia",
          href: "https://sk.wikipedia.org/wiki/Prášnica_bradavičnatá",
          detail: "prášnica bradavičnatá"
        },
        {
          group: "text",
          name: "Poľovníctvo a rybárstvo",
          href: "https://polovnictvo-rybarstvo.pluska.sk/na-hubach/prasnica-bradavicnata-je-vyborna-jedla-huba-viete-vsak-cim-je-pozoruhodna",
          detail: "2 Aug 2023"
        },
        {
          group: "text",
          name: "Poľovníctvo a rybárstvo",
          href: "https://polovnictvo-rybarstvo.pluska.sk/na-hubach/prasnicu-bielou-tvrdou-duzi-nou-mozno-bez-obav-konzumovat-co-este-hodi",
          detail: "23 Nov 2023"
        }
      ]
    },
    synonyms: [
      "Lycoperdon gemmatum Batsch",
      "Lycoperdon lacunosum Bull.",
      "Lycoperdon bonordenii Massee"
    ]
  };

  var AURANTIACUM_MEDIA = "photos/Boletales/Boletaceae/Leccinum_aurantiacum/";
  var AURANTIACUM = {
    id: 49,
    name: "Leccinum aurantiacum",
    author: "(Bull.) Gray",
    family: "Boletaceae",
    genus: "Leccinum",
    order: "Boletales",
    edibility: "edible",
    hymenium: "tubes",
    path: ["Fungi", "Dikarya", "Basidiomycota", "Agaricomycotina", "Agaricomycetes", "Agaricomycetidae", "Boletales", "Boletaceae", "Leccinum"],
    summary: ["Boletales", "Boletaceae", "Leccinum"],
    added: "2026-10-24",
    plate: STORAGE + AURANTIACUM_MEDIA + "Leccinum_aurantiacum@1600.webp",
    plateGrid: STORAGE + AURANTIACUM_MEDIA + "Leccinum_aurantiacum@400.webp",
    plateCredit: {
      author: "J. Sowerby",
      license: "public domain",
      source: "https://commons.wikimedia.org/wiki/File:Coloured_Figures_of_English_Fungi_or_Mushrooms_-_t._110.png"
    },
    photos: [
      {
        src: STORAGE + AURANTIACUM_MEDIA + "au1.webp",
        author: "Jean-Pol Grandmont",
        license: "CC BY 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by/3.0",
        source: "https://commons.wikimedia.org/wiki/File:0_Bolet_orang%C3%A9_-_Leccinum_aurantiacum_-_Havr%C3%A9_(1).JPG"
      },
      {
        src: STORAGE + AURANTIACUM_MEDIA + "au2.webp",
        author: "Jean-Pol Grandmont",
        license: "CC BY 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by/3.0",
        source: "https://commons.wikimedia.org/wiki/File:0_Bolet_orang%C3%A9_-_Leccinum_aurantiacum_-_Havr%C3%A9_(4).JPG"
      },
      {
        src: STORAGE + AURANTIACUM_MEDIA + "au3.webp",
        author: "Jean-Pol Grandmont",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:0_Bolet_orang%C3%A9_-_Leccinum_aurantiacum_-_Havr%C3%A9_(3).JPG"
      },
      {
        src: STORAGE + AURANTIACUM_MEDIA + "au4.webp",
        author: "Hans Hillewaert",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Leccinum_aurantiacum.jpg"
      },
      {
        src: STORAGE + AURANTIACUM_MEDIA + "au5.webp",
        author: "Coyau",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Bolet_roux_18.jpg"
      }
    ],
    capFrom: 4,
    capTo: 15,
    stipeHeightFrom: 5,
    stipeHeightTo: 25,
    stipeThickFrom: 1.5,
    stipeThickTo: 5,
    fruitingFrom: 7,
    fruitingTo: 11,
    label: { en: "orange oak bolete", sk: "kozák dubový" },
    names: { en: ["red-capped scaber stalk", "orange bolete", "copper-top", "orange-capped bolete"], sk: ["kozák hrdzavejúci"] },
    text: {
      en: {
        description: "An ectomycorrhizal mushroom of broadleaf woods and their edges. It is uncommon but widespread in Britain and Ireland, fairly common through northern and central mainland Europe, and abundant in Scandinavia, becoming rarer farther south in the lowlands. Records under this name in North America may belong to other species.",
        cap: "The cap is 4–15 cm across. It is nearly globose at first, with the skin pressed to the stipe, then hemispherical to convex, and it may flatten or become misshapen. The surface is finely felty when young and smoother or finely scaly later, dry, and only slightly tacky in wet weather, in brick red, orange-red, or date brown. The margin is blunt and overhangs the pores by about 2–4 mm, often as ragged flaps. The cap skin is a trichoderm of partly erect hyphae about 7–13 μm wide, with brown pigment.",
        hymenium: "The tubes are 1–3 cm long and broadly adnexed or adnate. They are whitish to cream and become greyish or pale brown. The pores are minute, under 0.5 mm, and angular. They may be creamy white and later pale brown, or ochre to brown when young and paler later. Bruised pores turn pinkish and then grey or dark. The basidia are ventricose to clavate, about 22–26 × 10–12 μm, and four-spored, without clamp connections. The cheilocystidia are fusiform to ventricose and beaked, about 28–50 × 7–12 μm. Pleurocystidia are absent.",
        stipe: "The stipe is 5–25 cm long and 1.5–5 cm thick, often barrel-shaped when young and later nearly cylindrical, tapering slightly upward, sometimes slightly club-shaped at the base, and without a ring. It is white to buff. Descriptions differ on the scales: they are reddish brown to rusty from early on, or whitish at first and soon russet from the base. They darken to dark brown and are denser toward the base. The base is sometimes spotted blue-green.",
        flesh: "The flesh is whitish, thick, and firm when young. With age the cap flesh becomes soft and the stipe fibrous. Cut flesh in the cap reddens, or flushes burgundy, and then turns grey to blackish. Toward the base it often blues slightly or turns blue-green. The odour and taste are mild and pleasant.",
        sporePrint: "Brown to olivaceous buff, sometimes with a yellowish-green cast. The spores are fusiform, smooth, and thick-walled, about 12–20 × 3–6 μm.",
        habitat: "Fruit bodies appear from July to November. They grow on the ground, singly or in groups, in woods and at their edges, most often with aspen, other poplars, and oak, and less often with beech, birch, chestnut, willow, or lime. In Europe the species is not known with conifers.",
        uses: "Young, firm fruit bodies are eaten after thorough cooking. The flesh is softer than that of Boletus edulis and turns very dark in the pan, and the fruit bodies are also dried. Undercooked fruit bodies have caused vomiting, and some people report gastrointestinal upset. Delayed illness reported in North America may involve other orange-capped species.",
        confusion: "Leccinum albostipitatum has stipe scales that are white when young and only later redden, and a cap that is more purely orange. It grows with aspen and poplar. Leccinum versipelle grows with birch, has an orange to yellow-ochre cap and coarse black scales from the start, and bruises blue-green to blackish in the stipe base. Leccinum vulpinum grows with pine, and Leccinum piceinum grows with spruce and has grey pores when young. Not every treatment keeps those conifer species separate. In North America, Leccinum insigne grows with aspen or birch, and Leccinum atrostipitatum grows with birch.",},
      sk: {
        description: "Ektomykorízna huba listnatých lesov a ich okrajov. V Británii a Írsku je nehojná, ale rozšírená, v severnej a strednej kontinentálnej Európe pomerne hojná a v Škandinávii hojná, južnejšie v nížinách redšia. Záznamy pod týmto menom zo Severnej Ameriky môžu patriť iným druhom.",
        cap: "Klobúk má 4–15 cm v priemere. Za mladi je takmer guľovitý, s pokožkou pritlačenou k hlúbiku, potom polguľovitý až klenutý a môže sa sploštiť alebo zdeformovať. Povrch je za mladi jemne plstnatý, neskôr hladší alebo jemne šupinkatý, suchý a za vlhka len mierne lepkavý, tehlovočervený, oranžovočervený alebo datľovohnedý. Okraj je tupý a previsá nad póry asi o 2–4 mm, často ako ostrapkané blanky. Pokožka klobúka je trichoderm z čiastočne vzpriamených hýf širokých asi 7–13 μm, s hnedým farbivom.",
        hymenium: "Rúrky sú 1–3 cm dlhé a široko pripojené alebo prirastené. Sú belavé až krémové a neskôr sivasté alebo svetlohnedé. Póry sú drobné, pod 0,5 mm, a hranaté. Bývajú krémovobiele a neskôr svetlohnedé, alebo za mladi okrové až hnedé a neskôr bledšie. Otlačené póry ružovejú a potom sivejú alebo tmavnú. Bazídiá sú bruchaté až kyjačikovité, asi 22–26 × 10–12 μm, štvorvýtrusové, bez spojok. Cheilocystidy sú vretenovité až bruchaté a zobáčikaté, asi 28–50 × 7–12 μm. Pleurocystidy chýbajú.",
        stipe: "Hlúbik je 5–25 cm dlhý a 1,5–5 cm hrubý, za mladi často súdkovitý, neskôr takmer valcovitý, smerom nahor mierne zúžený, na báze niekedy mierne kyjakovitý, bez prsteňa. Je biely až plavý. Údaje o šupinkách sa rozchádzajú: sú už zavčasu červenohnedé až hrdzavé, alebo najprv belavé a čoskoro od bázy hrdzavejú. Tmavnú do tmavohneda a smerom k báze sú hustejšie. Báza býva niekedy modrozeleno škvrnitá.",
        flesh: "Dužina je belavá, hrubá a za mladi pevná. Vekom mäkkne v klobúku a v hlúbiku ostáva vláknitá. Dužina klobúka na reze červenie alebo sa sfarbí na vínovočerveno a potom siveje až černie. Smerom k báze často slabo zmodrie alebo zmodrozelenie. Vôňa a chuť sú mierne a príjemné.",
        sporePrint: "Hnedý až olivovoplavý, niekedy so žltkastozeleným nádychom. Výtrusy sú vretenovité, hladké a hrubostenné, asi 12–20 × 3–6 μm.",
        habitat: "Plodnice sa objavujú od júla do novembra. Rastú na zemi, jednotlivo alebo v skupinách, v lesoch a na ich okrajoch, najčastejšie s osikou, inými topoľmi a dubom, zriedkavejšie s bukom, brezou, gaštanom, vŕbou alebo lipou. V Európe nie je známy výskyt s ihličnanmi.",
        uses: "Mladé pevné plodnice sa jedia po dôkladnej tepelnej úprave. Dužina je mäkšia ako dužina Boletus edulis a na panvici veľmi stmavne; plodnice sa aj sušia. Nedostatočne tepelne upravené plodnice spôsobili vracanie a niektorí ľudia uvádzajú žalúdočné a črevné ťažkosti. Oneskorené ochorenie hlásené zo Severnej Ameriky môže súvisieť s inými oranžovoklobúkatými druhmi.",
        confusion: "Kozák osikový (Leccinum albostipitatum) má šupinky na hlúbiku za mladi biele a až neskôr červenejúce a klobúk čistejšie oranžový. Rastie s osikou a topoľom. Kozák žltooranžový (Leccinum versipelle) rastie s brezou, má oranžový až žltookerový klobúk a od začiatku hrubé čierne šupinky a v báze hlúbika sa otlačením farbí na modrozeleno až černasto. Kozák sosnový (Leccinum vulpinum) rastie s borovicou a kozák smrekový (Leccinum piceinum) so smrekom a má za mladi sivé póry. Nie každé spracovanie tieto ihličnanové druhy oddeľuje. V Severnej Amerike rastie Leccinum insigne s osikou alebo brezou a Leccinum atrostipitatum s brezou.",
        notes: "Na Slovensku rastie v listnatých lesoch, najmä pod dubmi a inými listnáčmi, občas aj pod osikami."}
    },
    sources: {
      en: [
      { group: "text", name: "First Nature", href: "https://www.first-nature.com/fungi/leccinum-aurantiacum.php" },
      { group: "text", name: "Wikipedia", href: "https://en.wikipedia.org/wiki/Leccinum_aurantiacum" },
      { group: "text", name: "MycoDB", href: "https://www.mycodb.fr/fiche.php?genre=Leccinum&espece=aurantiacum" },
      { group: "text", name: "myko.cz", href: "https://www.myko.cz/myko-atlas/Leccinum-aurantiacum/" },
      { group: "name", name: "Index Fungorum", href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=101071", detail: "101071" },
      { group: "name", name: "Species Fungorum", href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=101071", detail: "101071" },
      { group: "name", name: "Species Fungorum", href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=101071", detail: "101071" },
      { group: "name", name: "Species Fungorum", href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=452868", detail: "452868" },
      { group: "name", name: "Species Fungorum", href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=17918", detail: "17918" },
      { group: "name", name: "MycoBank", href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/101071", detail: "101071" },
      { group: "name", name: "GBIF", href: "https://www.gbif.org/species/2524513", detail: "2524513" }
      ],
      sk: [
        { group: "text", name: "iNaturalist", href: "https://www.inaturalist.org/taxa/124085-Leccinum-aurantiacum", detail: "kozák dubový" },
        { group: "text", name: "Quark", href: "https://www.quark.sk/vynimocne-kozaky/", detail: "kozák hrdzavejúci" },
        { group: "text", name: "Poľovníctvo a rybárstvo", href: "https://polovnictvo-rybarstvo.pluska.sk/na-hubach/kozakov-je-nasich-lesoch-dost-ako-nich-vyznat-2", detail: "kozák dubový" }
      ]
    },
    synonyms: ["Boletus aurantiacus Bull.", "Krombholzia aurantiaca (Roques ex Bull.) E.J. Gilbert", "Krombholziella aurantiaca (Bull.) Maire", "Trachypus aurantiacus (Bull.) Romagn.", "Leccinum populinum M. Korhonen", "Leccinum salicicola Watling"]
  };

  var CITRINA_MEDIA = "photos/Agaricales/Amanitaceae/Amanita_citrina/";
  var CITRINA = {
    id: 50,
    name: "Amanita citrina",
    author: "Pers.",
    family: "Amanitaceae",
    genus: "Amanita",
    order: "Agaricales",
    edibility: "poisonous",
    hymenium: "gills",
    path: ["Fungi", "Dikarya", "Basidiomycota", "Agaricomycotina", "Agaricomycetes", "Agaricomycetidae", "Agaricales", "Amanitaceae", "Amanita"],
    summary: ["Agaricales", "Amanitaceae", "Amanita"],
    added: "2026-10-24",
    plate: STORAGE + CITRINA_MEDIA + "Amanita_citrina@1600.webp",
    plateGrid: STORAGE + CITRINA_MEDIA + "Amanita_citrina@400.webp",
    plateCredit: {
      author: "L. Dufour",
      license: "public domain",
      source: "https://www.biodiversitylibrary.org/item/22673"
    },
    photos: [
      {
        src: STORAGE + CITRINA_MEDIA + "ci1.webp",
        author: "Norbert Nagel",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Amanita_citrina_-_Gelber_Knollenbl%C3%A4tterpilz_-_false_death_cap_-_Citron_Amanita_-_Amanita_citrina_-_01.jpg"
      },
      {
        src: STORAGE + CITRINA_MEDIA + "ci2.webp",
        author: "Holger Krisp",
        license: "CC BY 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Gelber_Knollenbl%C3%A4tterpilz_Amanita_citrina.jpg"
      },
      {
        src: STORAGE + CITRINA_MEDIA + "ci3.webp",
        author: "Jean-Marc Pascolo",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Amanita_citrina_%C3%A0_Carling.jpg"
      },
      {
        src: STORAGE + CITRINA_MEDIA + "ci4.webp",
        author: "Reinhold Möller",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Gelber_Knollenbl%C3%A4tterpilz_Bruderwald-20241025-RM-170802.jpg"
      },
      {
        src: STORAGE + CITRINA_MEDIA + "ci5.webp",
        author: "Andreas Gminder",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:2006-08-09_Amanita_citrina_46465.jpg"
      },
    ],
    capFrom: 3,
    capTo: 12,
    stipeHeightFrom: 4,
    stipeHeightTo: 15,
    stipeThickFrom: 1,
    stipeThickTo: 2,
    fruitingFrom: 6,
    fruitingTo: 11,
    label: {
      en: "false deathcap",
      sk: "muchotrávka citrónovožltá"
    },
    names: {
      en: ["false death cap", "false death-cap", "citron amanita"]
    },
    text: {
      en: {
        description: "An ectomycorrhizal mushroom of coniferous and broadleaf woodland. It is frequent from the Mediterranean to the Hebrides and southern Scandinavia, and east through central Europe to Belarus and Estonia. It is also reported from the Caucasus, Korea, Japan, the Canary Islands, Australia, and South Africa.",
        cap: "The cap is usually 4–10 cm across, and it can be as small as 3 cm or, in the white form, as wide as 12 cm. It is pale lemon yellow, yellow-green, greyish, or whitish, always in a light shade. A white form lacks the yellow pigment and can grow among the yellow fruit bodies. Young caps are rounded or egg-shaped, then convex, and at length flat, with the margin staying downturned, smooth, and not lined. The surface is greasy and shiny in wet weather. Thick flaky veil patches, white, cream, grey, or brownish, usually lie on the cap and are often denser toward the centre. They can wash off, or be missing altogether.",
        hymenium: "The gills are free, crowded, and about 6–12 mm broad. They are white, sometimes with a yellow tint.",
        stipe: "The stipe is 4–15 cm long and 1–2 cm thick, whitish to pale yellow, smooth or finely floccose, and hollow when mature. A membranous ring hangs from the upper stipe. It is white to yellowish and persistent, and its upper face may be smooth or finely striate. The base is an abrupt bulb in a pot-like volva that stays attached and ends in a sharp rim or gutter, rather than opening into a free sack.",
        flesh: "The flesh is white, soft, and cottony in the stipe, and it does not change colour when cut. It smells of raw potato or of potato sprouts, and it can also smell earthy, of radish, or of rapeseed. Older fruit bodies may have little smell. The taste is unpleasant, of the same raw-potato kind.",
        sporePrint: "White. The spores are smooth, colourless, and amyloid, globose to broadly ellipsoid. Nearly spherical spores measure about 6.5–10 μm. Ellipsoid measurements are about 7.5–11 × 7–9 μm, and round spores are also given as 8–10 × 7–8 μm.",
        habitat: "Fruit bodies appear mainly from August to November, and in central Europe they can begin in June. In Britain and Ireland the season is August to November. It grows with conifers and with broadleaf trees. In central Europe the usual partner is spruce, then beech, and also pine, oak, and birch, on acid, base-poor, nutrient-poor ground that stays moderately moist. In Britain and Ireland it is especially frequent with beech on alkaline or neutral soil, and less often where the ground is strongly acid.",
        uses: "Raw fruit bodies are mildly poisonous. The compound usually reported in them is bufotenin, which some accounts say heating destroys, and a low concentration of alpha-amanitin has also been reported. The smell and the taste are unpleasant, and the fruit body is easily mistaken for deadly amanitas, so it is left uneaten.",
        confusion: "Amanita phalloides has a free, lobed volva and a radially fibrillose cap that usually lacks thick veil patches. Its colours run from white to olive and lack a yellow tint, and mature fruit bodies smell sweet. Amanita virosa and Amanita verna also have a free sac-like volva. Amanita virosa rarely keeps veil patches at maturity, the cap stays somewhat domed, and the ring is thin and set high on the stipe. Amanita gemmata has a deeper yellow cap with a lined margin, thinner white veil patches, and a ring that soon disappears, and it lacks the raw-potato smell. Amanita strobiliformis is larger, with a white to ochre cap, thick fringed veil remnants, and a ring that breaks into flocks, and it also lacks that smell.",
        notes: "Pale yellow amanitas in eastern North America that have been filed under this name are other species, and the measurements here are for European fruit bodies."},
      sk: {
        description: "Ektomykorízna huba ihličnatých a listnatých lesov. Hojná je od Stredomoria po Hebridy a južnú Škandináviu a na východ cez strednú Európu po Bielorusko a Estónsko. Zaznamenaná je z Kaukazu, Kórey, Japonska, Kanárskych ostrovov, Austrálie a Južnej Afriky.",
        cap: "Klobúk máva zvyčajne 4–10 cm, môže mať len 3 cm a biela forma až 12 cm. Je bledo citrónovožltý, žltozelený, sivastý alebo belavý, vždy vo svetlom odtieni. Biela forma nemá žlté farbivo a môže rásť medzi žltými plodnicami. Za mladi je klobúk zaoblený alebo vajcovitý, potom klenutý a napokon plochý. Okraj ostáva podvinutý, hladký a neryhovaný. Povrch je za vlhka mastný a lesklý. Hrubé vločkovité útržky plachtičky, biele, krémové, sivé alebo hnedasté, zvyčajne ležia na klobúku, často hustejšie pri strede. Môžu sa zmývať a niekedy chýbajú úplne.",
        hymenium: "Lupene sú voľné, husté a široké asi 6–12 mm. Sú biele, niekedy so žltým nádychom.",
        stipe: "Hlúbik je dlhý 4–15 cm a hrubý 1–2 cm, belavý až bledožltý, hladký alebo jemne vločkatý a v dospelosti dutý. Z hornej časti hlúbika visí blanitý prsteň. Je biely až žltkastý a vytrvalý. Horná strana môže byť hladká alebo jemne ryhovaná. Báza je náhla hľuza v prirastenej obriezkovitej pošve, ktorá končí ostrým okrajom alebo žliabkom a neotvára sa do voľného vreca.",
        flesh: "Dužina je biela, mäkká a v hlúbiku vatovitá a na reze nemení farbu. Voní ako surové zemiaky alebo zemiakové klíčky, niekedy zemito, reďkovkovo alebo ako repka. Staršie plodnice môžu voňať slabo. Chuť je nepríjemná, rovnako po surových zemiakoch.",
        sporePrint: "Výtrusný prach je biely. Výtrusy sú hladké, bezfarebné a amyloidné, guľovité až široko elipsoidné. Takmer guľovité merajú asi 6,5–10 μm, elipsoidné asi 7,5–11 × 7–9 μm a zaokrúhlené 8–10 × 7–8 μm.",
        habitat: "Plodnice sa objavujú najmä od augusta do novembra. V strednej Európe môžu začínať už v júni, kým v Británii a Írsku trvá sezóna od augusta do novembra. Rastie s ihličnanmi aj s listnáčmi. V strednej Európe je obvyklým partnerom smrek, potom buk a tiež borovica, dub a breza, na kyslej, bázami chudobnej a živinami chudobnej pôde, ktorá ostáva primerane vlhká. V Británii a Írsku je zvlášť hojná s bukom na zásaditej alebo neutrálnej pôde a zriedkavejšie na silno kyslej pôde.",
        uses: "Surové plodnice sú mierne jedovaté. Obvykle uvádzanou látkou je bufotenín. Niektoré správy hovoria, že ho zahrievanie ničí. V nízkej koncentrácii sa uvádza alfa-amanitín. Vôňa a chuť sú nepríjemné, plodnica sa ľahko zamieňa so smrteľne jedovatými muchotrávkami, a preto ostáva nejedená.",
        confusion: "Smrteľne jedovatá muchotrávka zelená (Amanita phalloides) má voľnú laločnatú pošvu a lúčovito vláknitý klobúk, na ktorom hrubé útržky plachtičky zvyčajne chýbajú. Jej farby siahajú od bielej po olivovú, bez žltého nádychu, a dospelé plodnice voňajú sladkasto. Muchotrávka končistá (Amanita virosa) a muchotrávka biela (Amanita verna) sú smrteľne jedovaté a majú tiež voľnú vreckovitú pošvu. Muchotrávka končistá si v dospelosti zriedka ponecháva útržky plachtičky, klobúk ostáva mierne klenutý a prsteň je tenký, vysoko na hlúbiku. Muchotrávka slamovožltá (Amanita gemmata) má sýtejšie žltý klobúk s ryhovaným okrajom, tenšie biele útržky plachtičky a prsteň, ktorý čoskoro mizne, a nemá vôňu surových zemiakov. Muchotrávka šiškovitá (Amanita strobiliformis) je väčšia, s bielym až okrovým klobúkom, hrubými strapkatými zvyškami plachtičky a prsteňom, ktorý sa rozpadá na vločky, a ani ona tú vôňu nemá.",}
    },
    sources: {
      en: [
        {
          group: "text",
          name: "First Nature",
          href: "https://www.first-nature.com/fungi/amanita-citrina.php"
        },
        {
          group: "text",
          name: "Wikipedia",
          href: "https://en.wikipedia.org/wiki/Amanita_citrina"
        },
        {
          group: "text",
          name: "de.wikipedia",
          href: "https://de.wikipedia.org/wiki/Gelber_Knollenbl%C3%A4tterpilz"
        },
        {
          group: "text",
          name: "myko.cz",
          href: "https://www.myko.cz/myko-atlas/Amanita-citrina/"
        },
        {
          group: "text",
          name: "botany.cz",
          href: "https://botany.cz/cs/amanita-citrina/"
        },
        {
          group: "text",
          name: "Fungipedia",
          href: "https://www.fungipedia.org/en/hongos/amanita-citrina.html"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=205574",
          detail: "205574"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=205574",
          detail: "205574"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/Synonymy.asp?RecordID=205574",
          detail: "205574"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/205574",
          detail: "205574"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/3328320",
          detail: "3328320"
        },
      ],
      sk: [
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=205574",
          detail: "205574"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=205574",
          detail: "205574"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/205574",
          detail: "205574"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/3328320",
          detail: "3328320"
        },
        {
          group: "text",
          name: "botany.cz",
          href: "https://botany.cz/cs/amanita-citrina/",
          detail: "muchotrávka citrónovožltá"
        },
      ]
    },
    synonyms: ["Agaricus citrinus Schaeff.", "Amanitina citrina (Pers.) E.-J. Gilbert", "Agaricus mappa Batsch", "Amanita mappa (Batsch) Bertill.", "Venenarius mappa (Batsch) Murrill", "Agaricus mappa Willd.", "Agaricus bulbosus Bull.", "Amanita bulbosa Pers.", "Agaricus olivaceus Krombh.", "Amanita citrina Gonn. & Rabenh."]
  };

  var PARDINUM_MEDIA = "photos/Agaricales/Tricholomataceae/Tricholoma_pardinum/";
  var PARDINUM = {
    id: 51,
    name: "Tricholoma pardinum",
    author: "(Pers.) Quél.",
    family: "Tricholomataceae",
    genus: "Tricholoma",
    order: "Agaricales",
    edibility: "poisonous",
    hymenium: "gills",
    path: ["Fungi", "Dikarya", "Basidiomycota", "Agaricomycotina", "Agaricomycetes", "Agaricomycetidae", "Agaricales", "Tricholomataceae", "Tricholoma"],
    summary: ["Agaricales", "Tricholomataceae", "Tricholoma"],
    added: "2026-10-24",
    plate: STORAGE + PARDINUM_MEDIA + "Tricholoma_pardinum@1600.webp",
    plateGrid: STORAGE + PARDINUM_MEDIA + "Tricholoma_pardinum@400.webp",
    plateCredit: {
      author: "G. Bresadola",
      license: "public domain",
      source: "https://commons.wikimedia.org/wiki/File:Bresadola_-_Tricholoma_tigrinum.png"
    },
    photos: [
      {
        src: STORAGE + PARDINUM_MEDIA + "tp1.webp",
        author: "Jerzy Opioła",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Tricholoma_pardinum_(1).JPG"
      },
      {
        src: STORAGE + PARDINUM_MEDIA + "tp2.webp",
        author: "Jerzy Opioła",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Tricholoma_pardinum_a1.JPG"
      },
      {
        src: STORAGE + PARDINUM_MEDIA + "tp3.webp",
        author: "Jose Angel Urquia Goitia",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Tricholoma_pardinum_4.jpg"
      },
      {
        src: STORAGE + PARDINUM_MEDIA + "tp4.webp",
        author: "Jose Angel Urquia Goitia",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Tricholoma_pardinum_3.jpg"
      },
      {
        src: STORAGE + PARDINUM_MEDIA + "tp5.webp",
        author: "Sava Krstic",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Tricholoma_pardinum_112561_cropped.jpg"
      }
    ],
    capFrom: 3,
    capTo: 20,
    stipeHeightFrom: 3,
    stipeHeightTo: 15,
    stipeThickFrom: 1.5,
    stipeThickTo: 4,
    fruitingFrom: 5,
    fruitingTo: 11,
    label: {
      en: "tiger tricholoma",
      sk: "čírovka tigrovaná"
    },
    names: {
      en: ["spotted tricholoma", "leopard knight", "tigertop", "dirty trich", "striped tricholoma", "poison trich"]
    },
    text: {
      en: {
        description: "A large fleshy ectomycorrhizal mushroom of calcareous broadleaf and conifer woodland, growing alone or in groups and sometimes in rings. It is native across Europe, where it is more common in the south and in the mountains, and it is reported from south-western Turkey, China, Japan, and temperate North America.",
        cap: "The cap is 5–15 cm across, sometimes only 3 cm and occasionally as much as 20 cm. It starts hemispherical, bell-shaped, or broadly conical, with the margin long inrolled, and later flattens, often with a broad low umbo and a wavy or lobed edge. The ground colour is whitish, silvery grey, cream-grey, or pale ochre. Dark grey, grey-brown, sepia, or blackish scales lie in concentric rings, larger toward the centre and finer toward the margin. The surface is dry, and the skin is hard to peel. It can extend a little past the gills. The cuticle is a cutis to a trichoderm of cylindrical hyphae 2–9 μm wide, with club-shaped tips up to 11 μm wide, bundled in the scales. The pigment is both internal and incrusting, and the incrustation is stronger toward the subcutis. Clamp connections are present.",
        hymenium: "The gills are notched, often with a small tooth, though some accounts call them free. Spacing runs from distant to crowded and is most often moderately close. They are thick and up to about 12 mm broad, with short gills frequent. They are white at first, then cream or dull grey, sometimes with a yellow, olive, or greenish tint, and the edge can become jagged. In wet weather the edge often sheds clear watery droplets, as can the top of the stipe. The basidia are cylindrical to club-shaped, mostly four-spored and sometimes two-spored, about 39–50 × 8–9.6 μm. Hairs on the gill edge are sparse and look like basidioles or are misshapen. Cystidia on the gill face are absent.",
        stipe: "The stipe is 3–12 cm tall, occasionally to 15 cm, and 1.5–4 cm thick. It is solid and stout, cylindrical, club-shaped, or bulbous, and sometimes spindle-shaped, often about twice as thick at the base as at the apex. There is no ring. The surface is white, cream, pale grey, or pale brown, finely fibrillose to velvety, and sometimes finely hairy or weakly dotted. The apex may carry watery droplets when young. The base stains ochre, dirty brown, or yellow where bruised or with age, and it can be slightly pinkish brown.",
        flesh: "The flesh is thick and firm. It is whitish, greyish under the cap skin, and yellowish to rusty in the lower stipe, where it is sometimes pink. It does not change colour when cut, apart from that base. The smell is mealy, like fresh flour, and in some fruit bodies it is grassy, earthy, or spermatic, weak at first and then unpleasant. The taste is mild and mealy. Under ultraviolet light the flesh fluoresces a lilac violet.",
        sporePrint: "White. The spores are ellipsoid to oval, occasionally nearly subglobose, smooth, and hyaline, with a pronounced hilar appendage, inamyloid, 7.5–10 × 5–7 μm, with records to 12 × 8 μm. The length-to-width ratio is about 1.2–1.7, commonly near 1.3–1.5.",
        habitat: "Fruiting runs from August to October, and records extend from May into November. It is ectomycorrhizal on calcareous or otherwise alkaline soil, alone, in groups, or in rings, with beech, fir, spruce, and oak, more often at some elevation. In the Jura it can be abundant. It has not been recorded from the Netherlands or the British Isles. In Slovakia it fruits from August to October in broadleaf and mixed woods, under beech and sometimes oak, spruce, or fir. In the Czech Republic it is rare, mainly with beech and fir. In Poland it is frequent only on calcareous or alkaline soil, under beech and under spruce and fir, in summer and autumn. In Germany it is scattered, chiefly in the south and in southern Mecklenburg. In North America the name is used for a northern and montane mushroom with conifers, and also for a coastal Californian mushroom with tanoak, madrone, and live oak that may not be the same species. Fruit bodies under that coastal name appear in winter as well. Some montane reports from the western mountains may belong to Tricholoma smithii.",
        uses: "Eaten even in small quantity, it causes severe gastroenteritis. Nausea, dizziness, vomiting, diarrhoea, abdominal cramps, sweating, and anxiety begin within about half an hour to two hours. The acute illness often lasts two to six hours, and recovery usually takes four to six days. Cramp in the calves and a disturbance of liver function have been recorded, though lasting injury is not the usual result. In one shared meal, two caps made seven people and a cat severely ill. The toxin is unknown. It inflames the lining of the stomach and intestine. Death from circulatory collapse and fluid loss is not excluded, and fatal cases are exceptional. In the first half of the twentieth century it accounted for more than a fifth of the mushroom poisonings recorded in Switzerland, many of them in the Jura. The pleasant smell and taste add to the risk.",
        confusion: "Tricholoma terreum is smaller, darker, and less robust, lacks the mealy smell, and has smaller spores, 5–7.5 × 4–5 μm. Tricholoma argyraceum has finer scales, and its gills and bruised places yellow with age. It fruits at lower elevations. Tricholoma scalpturatum is smaller and more delicate, and the cap is fibrillose rather than covered with large scales. Tricholoma atrosquamosum is smaller and darker and smells peppery. Tricholoma orirubens has fine dark scales, pinkish gills, and brittle flesh, and it is generally smaller. Tricholoma myomyces is smaller, young fruit bodies have a thin fibrous partial veil, and the spores are 5–6 × 3.5–4 μm. Tricholoma portentosum is a similar size, but the cap is an even grey and is never scaly. Tricholoma nigrum, and streaked forms of Tricholoma virgatum, have streaked caps rather than spotted ones. A pale form can be nearly white with pale scales and can be mistaken for Tricholoma resplendens, which lacks those scales. Tricholoma venenatum is more tan and has clamp connections. Tricholoma huronense has narrower gills, drops of reddish liquid on the gills and stipe, and an ash-grey scaly stipe. Tricholoma filamentosum is smaller and paler, with a silky fibrillose cap rather than contrasting scales, and clamp connections are present there as well. Tricholoma bresadolanum is a little smaller and less scaly, almost without smell, with an acrid taste, and it grows under broadleaf trees. Tricholoma tumidum is browner and has smaller spores. Other grey species in the genus lack clamp connections.",
        notes: "The species sits in subgenus Pardinicutis, a group with grey, brown, or pallid caps that are woolly or finely scaly, spores about 8–11 μm long, and abundant clamp connections. It is close to Tricholoma huronense, Tricholoma mutabile, and Tricholoma venenatum. Tricholoma pardinum var. filamentosum is uncommon in southern Europe with chestnut and spruce and has a more fibrillose cap and stipe, with a mealy smell and a cucumber-like taste. A greasier, slighter form occurs. A 2006 assessment places the species as endangered in the Czech Republic. A North American account reports thin-walled cheilocystidia with a short stalk and a round tip, 29–41 × 12–21 μm, and no cystidia on the gill face. A California collection filed under this name had neither cheilocystidia nor pleurocystidia, and its spores measured 7–9 × 4–5 μm."},
      sk: {
        description: "Veľká mäsitá ektomykorízna huba vápnitých listnatých a ihličnatých lesov, rastúca jednotlivo, v skupinách a niekedy v kruhoch. Pôvodná je v celej Európe, hojnejšia na juhu a v horách, a uvádza sa z juhozápadného Turecka, Číny, Japonska a z mierneho pásma Severnej Ameriky.",
        cap: "Klobúk má 5–15 cm, niekedy len 3 cm a výnimočne až 20 cm. Za mladi je polguľovitý, zvoncovitý alebo široko kužeľovitý, s okrajom dlho podvinutým, a neskôr sa splošťuje, často s nízkym širokým hrboľom a so zvlneným alebo laločnatým okrajom. Základná farba je belavá, striebristosivá, krémovosivá alebo bledookrová. Tmavosivé, sivohnedé, sépiové alebo černasté šupiny ležia v sústredných kruhoch, väčšie pri strede a jemnejšie smerom k okraju. Povrch je suchý a pokožka sa ťažko lúpe. Môže kúsok presahovať lupene. Kutikula je kutis až trichoderm z valcovitých hýf širokých 2–9 μm, s kyjačkovitými koncami širokými až 11 μm, v šupinách zoskupenými do zväzkov. Pigment je vnútrobunkový aj inkrustujúci a inkrustácia je silnejšia smerom k subkutis. Spojky sú prítomné.",
        hymenium: "Lupene sú vykrojené, často s malým zúbkom, hoci niektoré opisy ich uvádzajú ako voľné. Hustota siaha od riedkych po husté a najčastejšie sú stredne husté. Sú hrubé a široké až asi 12 mm, s častými krátkymi lupeňmi. Najprv sú biele, potom krémové alebo matne sivé, niekedy so žltým, olivovým alebo zelenkastým nádychom, a ostrie môže byť zúbkaté. Za vlhkého počasia ostrie často vylučuje číre vodnaté kvapôčky, podobne ako vrchol hlúbika. Bazídiá sú valcovité až kyjačkovité, prevažne štvorvýtrusové a niekedy dvojvýtrusové, veľké asi 39–50 × 8–9,6 μm. Chĺpky na ostrí lupeňov sú riedke a vyzerajú ako bazidioly, alebo sú nepravidelné. Cystidy na ploche lupeňov chýbajú.",
        stipe: "Hlúbik je vysoký 3–12 cm, výnimočne až 15 cm, a hrubý 1,5–4 cm. Je plný a mohutný, valcovitý, kyjakovitý alebo hľuzovitý a niekedy vretenovitý, pri báze často asi dvakrát hrubší než pri vrchole. Prsteň nemá. Povrch je biely, krémový, bledosivý alebo bledohnedý, jemne vláknitý až zamatový a niekedy jemne chĺpkatý alebo slabo bodkovaný. Vrchol môže za mladi niesť vodnaté kvapôčky. Báza po otlačení alebo s vekom hnedne do okrova, špinavej hnedej alebo žltej a môže byť slabo ružovohnedá.",
        flesh: "Dužina je hrubá a pevná. Je belavá, pod pokožkou klobúka sivastá a v dolnej časti hlúbika nažltlá až hrdzavá, kde býva niekedy ružová. Na reze nemení farbu, okrem tej bázy. Vôňa je múčna, ako čerstvá múka, a u niektorých plodníc trávovitá, zemitá alebo spermatická, spočiatku slabá a potom nepríjemná. Chuť je mierna a múčna. Pod ultrafialovým svetlom dužina fluoreskuje ľaliovofialovo.",
        sporePrint: "Výtrusný prach je biely. Výtrusy sú elipsoidné až oválne, občas takmer guľovité, hladké a hyalínne, s výrazným hilárnym príveskom, neamyloidné, veľké 7,5–10 × 5–7 μm, so záznamami až do 12 × 8 μm. Pomer dĺžky k šírke je asi 1,2–1,7, bežne blízko 1,3–1,5.",
        habitat: "Plodí od augusta do októbra a záznamy siahajú od mája do novembra. Je ektomykorízna na vápnitej alebo inak zásaditej pôde, jednotlivo, v skupinách alebo v kruhoch, s bukom, jedľou, smrekom a dubom, častejšie vo vyššej polohe. V Jure môže byť hojná. Z Holandska ani z Britských ostrovov nie je zaznamenaná. Na Slovensku plodí od augusta do októbra v listnatých a zmiešaných lesoch, pod bukom a niekedy pod dubom, smrekom alebo jedľou. V Česku je zriedkavá, najmä s bukom a jedľou. V Poľsku je hojná len na vápnitej alebo zásaditej pôde, pod bukom a pod smrekom a jedľou, v lete a na jeseň. V Nemecku je roztrúsená, najmä na juhu a v južnom Meklenbursku. V Severnej Amerike sa meno používa pre severskú a horskú hubu s ihličnanmi a tiež pre hubu pri pobreží Kalifornie s tanovým dubom, madroňou a vždyzeleným dubom, ktorá nemusí byť ten istý druh. Plodnice pod tým pobrežným menom sa objavujú aj v zime. Niektoré horské údaje zo západných pohorí môžu patriť druhu Tricholoma smithii.",
        uses: "Aj v malom množstve spôsobuje ťažkú gastroenteritídu. Nevoľnosť, závrat, vracanie, hnačka, kŕče v bruchu, potenie a úzkosť začínajú asi do pol hodiny až dvoch hodín. Akútna choroba trvá často dve až šesť hodín a zotavenie zvyčajne štyri až šesť dní. Zaznamenané boli kŕče v lýtkach a porucha funkcie pečene, hoci trvalé poškodenie nie je obvyklý výsledok. Pri jednom spoločnom jedle dva klobúky ťažko otrávili sedem ľudí a mačku. Toxín nie je známy. Zanieti sliznicu žalúdka a čreva. Smrť z obehového kolapsu a zo straty tekutín nie je vylúčená a smrteľné prípady sú výnimočné. V prvej polovici dvadsiateho storočia tvorila viac ako pätinu zaznamenaných otráv hubami vo Švajčiarsku, mnohé z nich v Jure. Príjemná vôňa a chuť riziko zvyšujú.",
        confusion: "Čírovka zemná (Tricholoma terreum) je menšia, tmavšia a menej mohutná, nemá múčnu vôňu a má menšie výtrusy, 5–7,5 × 4–5 μm. Čírovka postriebrená (Tricholoma argyraceum) má jemnejšie šupiny a jej lupene aj otlačené miesta s vekom žltnú. Plodí v nižších polohách. Čírovka sivookrová (Tricholoma scalpturatum) je menšia a jemnejšia a klobúk je vláknitý, nie pokrytý veľkými šupinami. Tricholoma atrosquamosum je menšia a tmavšia a vonia po korení. Čírovka červenejúca (Tricholoma orirubens) má jemné tmavé šupiny, ružovkasté lupene a krehkú dužinu a je celkovo menšia. Tricholoma myomyces je menšia, mladé plodnice majú tenký vláknitý čiastočný závoj a výtrusy majú 5–6 × 3,5–4 μm. Čírovka sivá (Tricholoma portentosum) je podobne veľká, ale klobúk je rovnomerne sivý a nikdy nie je šupinatý. Tricholoma nigrum a žíhané formy čírovky štipľavej (Tricholoma virgatum) majú žíhané klobúky, nie škvrnité. Bledá forma môže byť takmer biela s bledými šupinami a dá sa zameniť s Tricholoma resplendens, ktorej tie šupiny chýbajú. Tricholoma venenatum je skôr plavá a má spojky. Tricholoma huronense má užšie lupene, kvapky červenkastej tekutiny na lupeňoch a na hlúbiku a popolavosivý šupinatý hlúbik. Tricholoma filamentosum je menšia a bledšia, s hodvábne vláknitým klobúkom namiesto kontrastných šupín, a spojky má tiež. Tricholoma bresadolanum je o niečo menšia a menej šupinatá, takmer bez vône, so štipľavou chuťou, a rastie pod listnáčmi. Tricholoma tumidum je hnedšia a má menšie výtrusy. Ostatné sivé druhy rodu spojky nemajú.",
        notes: "Druh patrí do podrodu Pardinicutis, skupiny so sivými, hnedými alebo bledými klobúkmi, vlnatými alebo jemne šupinatými, s výtrusmi dlhými asi 8–11 μm a s hojnými spojkami. Blízky je druhom Tricholoma huronense, Tricholoma mutabile a Tricholoma venenatum. Tricholoma pardinum var. filamentosum je v južnej Európe nezvyčajná, s gaštanom a smrekom, a má vláknitejší klobúk a hlúbik, múčnu vôňu a uhorkovitú chuť. Vyskytuje sa aj mastnejšia a útlejšia forma. Hodnotenie z roku 2006 zaraďuje druh v Česku ako ohrozený."}
    },
    sources: {
      en: [
        {
          group: "text",
          name: "Wikipedia",
          href: "https://en.wikipedia.org/wiki/Tricholoma_pardinum"
        },
        {
          group: "text",
          name: "German Wikipedia",
          href: "https://de.wikipedia.org/wiki/Tiger-Ritterling"
        },
        {
          group: "text",
          name: "nahuby.sk",
          href: "https://www.nahuby.sk/atlas-hub/Tricholoma-pardinum/cirovka-tigrovana/ciruvka-tigrovana/ID13008"
        },
        {
          group: "text",
          name: "grzyby.pl",
          href: "https://grzyby.pl/gatunki/Tricholoma_pardinum.htm"
        },
        {
          group: "text",
          name: "myko.cz",
          href: "https://www.myko.cz/myko-atlas/Tricholoma-pardinum/"
        },
        {
          group: "text",
          name: "MycoDB",
          href: "https://www.mycodb.fr/fiche.php?genre=Tricholoma&espece=pardinum"
        },
        {
          group: "text",
          name: "MushroomExpert",
          href: "https://www.mushroomexpert.com/tricholoma_pardinum.html"
        },
        {
          group: "text",
          name: "Wikimedia Commons",
          href: "https://commons.wikimedia.org/wiki/File:Bresadola_-_Tricholoma_tigrinum.png",
          detail: "Iconographia Mycologica 2"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=356853",
          detail: "356853"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=461533",
          detail: "461533"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=356853",
          detail: "356853"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=652571",
          detail: "652571"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=461547",
          detail: "461547"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=626285",
          detail: "626285"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=231607",
          detail: "231607"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=18677",
          detail: "18677"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/356853",
          detail: "356853"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/7242174",
          detail: "7242174"
        }
      ],
      sk: [
        {
          group: "text",
          name: "nahuby.sk",
          href: "https://www.nahuby.sk/atlas-hub/Tricholoma-pardinum/cirovka-tigrovana/ciruvka-tigrovana/ID13008",
          detail: "čírovka tigrovaná"
        }
      ]
    },
    synonyms: ["Agaricus myomyces var. pardinus Pers.", "Agaricus pardinus (Pers.) Quél.", "Agaricus unguentatus Fr.", "Cortinellus unguentatus (Fr.) P. Karst.", "Tricholoma unguentatum (Fr.) Sacc."]
  };

  var CALVATIA_MEDIA = "photos/Agaricales/Lycoperdaceae/Calvatia_gigantea/";
  var CALVATIA = {
    id: 52,
    name: "Calvatia gigantea",
    author: "(Batsch) Lloyd",
    family: "Lycoperdaceae",
    genus: "Calvatia",
    order: "Agaricales",
    edibility: "edible",
    hymenium: "gleba",
    path: [
      "Fungi",
      "Dikarya",
      "Basidiomycota",
      "Agaricomycotina",
      "Agaricomycetes",
      "Agaricomycetidae",
      "Agaricales",
      "Lycoperdaceae",
      "Calvatia"
    ],
    summary: [
      "Agaricales",
      "Lycoperdaceae",
      "Calvatia"
    ],
    added: "2026-10-24",
    plate: STORAGE + CALVATIA_MEDIA + "Calvatia_gigantea@1600.webp",
    plateGrid: STORAGE + CALVATIA_MEDIA + "Calvatia_gigantea@400.webp",
    plateCredit: {
      author: "J. Sowerby",
      license: "public domain",
      source: "https://commons.wikimedia.org/wiki/File:Coloured_Figures_of_English_Fungi_or_Mushrooms_-_t._332.png"
    },
    photos: [
      {
        src: STORAGE + CALVATIA_MEDIA + "cg1.webp",
        author: "AnRo0002",
        license: "CC0 1.0",
        licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
        source: "https://commons.wikimedia.org/wiki/File:20120629Calvatia_gigantea3.jpg"
      },
      {
        src: STORAGE + CALVATIA_MEDIA + "cg2.webp",
        author: "Peter van der Sluijs",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Big_white_mushroom_Giants_bovist_Holland.jpg"
      },
      {
        src: STORAGE + CALVATIA_MEDIA + "cg3.webp",
        author: "AnRo0002",
        license: "CC0 1.0",
        licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
        source: "https://commons.wikimedia.org/wiki/File:20120629Calvatia_gigantea1.jpg"
      },
      {
        src: STORAGE + CALVATIA_MEDIA + "cg4.webp",
        author: "Hans-Martin Scheibner",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Riesenbovist_(Calvatia_gigantea)_-_Querschnitt._Solange_der_Fruchtk%C3%B6rper_noch_so_wei%C3%9F_ist,_sehr_schmackhaft_-_hms(1).jpg"
      },
      {
        src: STORAGE + CALVATIA_MEDIA + "cg5.webp",
        author: "Oberator",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Riesenbovist_Hexenring.JPG"
      }
    ],
    capFrom: 10,
    capTo: 80,
    fruitingFrom: 6,
    fruitingTo: 11,
    label: {
      en: "giant puffball",
      sk: "vatovec obrovský"
    },
    names: {
      sk: ["vatovec"]
    },
    text: {
      en: {
        description: "A saprotrophic fungus of nutrient-rich meadows, pastures, and open ground. It is local in Britain and Ireland and occurs through temperate Europe, including Slovakia, from the Great Plains eastward in North America, where surveys have not found it in Arizona or Florida, and in parts of Asia and the southern hemisphere.",
        cap: "The fruit body is sessile, a slightly flattened or irregular globe, sometimes lobed or split down one side, and there is no distinct cap. It is commonly 10–50 cm across. Fruit bodies over 50 cm are not rare, and the usual upper size is about 80 cm. Published extremes include a diameter of 150 cm and a weight of 23.3 kg, and weights above 20 kg are on record. The outer skin is thin, smooth, and leathery. Measurements of it run from under 1 mm to about 2–3 mm. It is finely velvety when young and later bald, sometimes with only faint scales. The colour is white at first, then cream or yellowish, and in age greenish yellow, olive-brown, reddish brown, or dark brown. The top cracks into irregular patches. The thin inner skin is fragile and breaks up, and the outer skin falls away in pieces. The base may be wrinkled.",
        hymenium: "The gleba fills the fruit body. A sterile base is absent, or it is only a very thin compact layer of the same texture as the gleba. When young the gleba is white, firm, and compact. It softens and turns yellow, then greenish or olive, and at maturity it is a yellowish-brown to olive-brown or brown powder. There are no gills. The skin does not open by one lasting pore. It cracks and falls away, and the powder is released as the fruit body breaks up. The capillitial threads are brown to yellowish, long, and branched, about 2.5–5 μm wide, with walls about 0.5–1 μm thick. They are sometimes septate and sometimes pitted.",
        stipe: "There is no true stipe. A thick white mycelial cord attaches the base to the ground and hardens with age. The cord can reach about 6 cm long and 2 cm thick. It often breaks, and the fruit body can then roll and shed spores once the skin has split.",
        flesh: "The young gleba is white, firm, and elastic or cottony. The smell of a fresh fruit body is faint and pleasant, or not distinctive, and the taste is mild. Potassium hydroxide gives no colour change on the surface. As the spores ripen the interior turns yellow, olive, and brown, and riper fruit bodies can smell unpleasantly of urine. Once the interior is no longer white, the fruit body is left.",
        sporePrint: "There is no ordinary spore print while the fruit body is closed. The mature spore mass is olive-brown to brown, and some accounts call it brownish olive-grey or reddish brown. The spores are globose to subglobose and thick-walled, smooth or minutely warted, and they sometimes carry a short pedicel. European spores are about 3.5–5 μm across. Collections from central Illinois are about 2.5–4 μm and look hyaline to yellowish in potassium hydroxide.",
        habitat: "Fruit bodies appear from June to October in Slovakia and through much of central Europe, from July to November in Britain and Ireland, and in late summer and early autumn from the Great Plains eastward in North America. One older British account extends the season back to May. They often follow prolonged rain. The fungus is saprotrophic on nutrient-rich or manured soil, in meadows, pastures, gardens, orchards, field edges, and roadsides, among nettles and other rank vegetation, and sometimes in open woodland or in light, rather dry pine woods. Fruit bodies stand alone, in small groups, or in rings. Rings more than 10 m across have been seen in old orchards, and one pasture ring held 27 fruit bodies, each about 1.5–5 kg, in a circle about 6 m across. Brown cottony remains can persist into the next season. In a known place the fungus often returns for years.",
        uses: "Only fruit bodies whose interior is still white and elastic are eaten. The skin is peeled and the flesh is sliced. The slices are fried in the manner of a schnitzel, dipped in beaten egg and breadcrumbs and fried with bacon, or added to a casserole or a soup. The cooked flesh is compared to tofu or to processed cheese. Accounts of the flavour disagree: some call it mild, and others call it excellent. Once the interior is yellow, olive, or brown, the fruit body is left. Fruit bodies from busy roadsides are best left, because exhaust can contaminate them.",
        confusion: "Bovistella utriformis is much smaller, about 6–15 cm across, and is shaped like a squashed pear or a pestle. Its outer skin is warty or breaks into a mosaic, and it has a sterile base. Lycoperdon excipuliforme can be fairly large. Its surface is warty or floccose rather than smooth, and it has a sterile stalk-like base. Calvatia booniana, in western North America, can exceed 60 cm, but the surface breaks into large polygonal scales. Species of Bovista stay much smaller, and the outer skin is not always smooth. Scleroderma citrinum is much smaller and firmer, and the interior turns dark purple-black, with white marbling, while the fruit body is still young. A young Amanita shows gills and a stalk in a vertical cut. An unopened stinkhorn has a gelatinous layer inside the egg. This fungus has a uniform white interior and no gill initials.",
        notes: "One large fruit body produces spores in the trillions, in one count more than seven trillion. The fungus has been cut into strips to stop bleeding, kept as tinder, and set smouldering to quiet bees. In New Zealand it has been used to stem bleeding and to treat burns. The protein calvacin, from the fruit bodies, was tested against tumours in the 1960s. Repeated doses caused allergic reactions in dogs and monkeys, and the work stopped because of its toxicity."
      },
      sk: {
        description: "Saprotrofná huba živinami bohatých lúk, pasienkov a otvorených miest. V Británii a Írsku je miestna a vyskytuje sa v miernom pásme Európy vrátane Slovenska, v Severnej Amerike od Veľkých planín na východ, kde ju prieskumy nenašli v Arizone ani na Floride, a v častiach Ázie a na južnej pologuli.",
        cap: "Plodnica je prisadnutá, mierne sploštená alebo nepravidelne guľovitá, niekedy laločnatá alebo na jednej strane rozštiepená, a zreteľný klobúk nemá. Bežne má 10–50 cm v priemere. Plodnice nad 50 cm nie sú zriedkavé a obvyklá horná veľkosť je asi 80 cm. Uverejnené extrémy zahŕňajú priemer 150 cm a hmotnosť 23,3 kg a zaznamenané sú aj hmotnosti nad 20 kg. Vonkajšia pokožka je tenká, hladká a kožovitá. Jej hrúbka siaha od menej ako 1 mm po asi 2–3 mm. Za mladi je jemne zamatová a neskôr holá, niekedy len s nevýraznými šupinami. Farba je najprv biela, potom krémová alebo žltkastá a v starobe zelenkastožltá, olivovohnedá, červenohnedá alebo tmavohnedá. Temeno sa rozpukáva na nepravidelné políčka. Tenká vnútorná pokožka je krehká a rozpadá sa a vonkajšia pokožka odpadáva po kusoch. Báza môže byť zvráskavená.",
        hymenium: "Gléba vypĺňa plodnicu. Neplodná báza chýba, alebo je len veľmi tenkou hutnou vrstvou rovnakej štruktúry ako gléba. Za mladi je gléba biela, pevná a hutná. Mäkne a žltne, potom nadobúda zelenkastú alebo olivovú farbu a v zrelosti je žltohnedým až olivovohnedým alebo hnedým prachom. Lupene nemá. Pokožka sa neotvára jedným trvalým pórom. Rozpukáva sa a odpadáva a prach sa uvoľňuje, keď sa plodnica rozpadá. Vlákna kapilícia sú hnedé až žltkasté, dlhé a rozkonárené, široké asi 2,5–5 μm, so stenami hrubými asi 0,5–1 μm. Niekedy majú priehradky a niekedy jamky.",
        stipe: "Pravý hlúbik chýba. Hrubý biely mycéliový povrázok pripája bázu k zemi a vekom tvrdne. Môže dosiahnuť asi 6 cm na dĺžku a 2 cm na hrúbku. Často sa odlomí a plodnica sa potom môže gúľať a vyprašovať výtrusy, keď sa pokožka rozštiepi.",
        flesh: "Mladá gléba je biela, pevná a pružná alebo vatovitá. Vôňa čerstvej plodnice je slabá a príjemná, alebo nevýrazná, a chuť je mierna. Hydroxid draselný na povrchu farbu nemení. Ako výtrusy dozrievajú, vnútro žltne, nadobúda olivovú farbu a hnedne a zrelšie plodnice môžu nepríjemne páchnuť po moči. Keď vnútro už nie je biele, plodnica sa necháva.",
        sporePrint: "Kým je plodnica uzavretá, bežný výtrusný prach sa netvorí. Zrelá výtrusná masa je olivovohnedá až hnedá a niektoré opisy ju označujú za hnedasto olivovosivú alebo červenohnedú. Výtrusy sú guľovité až takmer guľovité a hrubostenné, hladké alebo jemne bradavičnaté, a niekedy nesú krátky pedicel. Európske výtrusy majú v priemere asi 3,5–5 μm. Zbery zo stredného Illinois majú asi 2,5–4 μm a v hydroxide draselnom sa javia hyalínne až žltkasté.",
        habitat: "Plodnice sa objavujú od júna do októbra na Slovensku a vo veľkej časti strednej Európy, od júla do novembra v Británii a Írsku a koncom leta a začiatkom jesene v Severnej Amerike od Veľkých planín na východ. Starší britský opis predlžuje sezónu dozadu až do mája. Často vyrastajú po dlhotrvajúcom daždi. Huba je saprotrofná na živinami bohatej alebo hnojenej pôde, na lúkach, pasienkoch, v záhradách, sadoch, na okrajoch polí a pri cestách, medzi pŕhľavou a inou bujnou vegetáciou a niekedy v otvorenom lese alebo vo svetlých, pomerne suchých borovicových lesoch. Plodnice stoja jednotlivo, v malých skupinách alebo v kruhoch. V starých sadoch boli videné kruhy s priemerom viac ako 10 m a jeden pasienkový kruh niesol 27 plodníc, každú s hmotnosťou asi 1,5–5 kg, v kruhu s priemerom asi 6 m. Hnedé vatovité zvyšky môžu pretrvať do ďalšej sezóny. Na známom mieste sa huba často vracia celé roky.",
        uses: "Jedia sa len plodnice, ktorých vnútro je ešte biele a pružné. Pokožka sa zlúpe a dužina sa nakrája na plátky. Plátky sa oprážajú ako rezeň, obalené v rozšľahanom vajíčku a v strúhanke a osmažené so slaninou, alebo sa pridajú do zapekačky či do polievky. Tepelne upravená dužina sa prirovnáva k tofu alebo k tavenému syru. Údaje o chuti sa rozchádzajú: niektoré ju označujú za miernu a iné za výbornú. Keď je vnútro žlté, olivové alebo hnedé, plodnica sa necháva. Plodnice z rušných ciest je lepšie nechať, lebo výfukové plyny ich môžu znečistiť.",
        confusion: "Rozpadavec dlabaný (Bovistella utriformis) je oveľa menší, asi 6–15 cm v priemere, a má tvar sploštenej hrušky alebo piestu. Vonkajšia pokožka je bradavičnatá alebo sa rozpadá na mozaiku a má neplodnú bázu. Lycoperdon excipuliforme môže byť pomerne veľká. Povrch má bradavičnatý alebo vločkatý, nie hladký, a má neplodnú stopkovitú bázu. Calvatia booniana na západe Severnej Ameriky môže presiahnuť 60 cm, no povrch sa jej rozpadá na veľké mnohouholníkové šupiny. Druhy rodu fúkavec (Bovista) ostávajú oveľa menšie a vonkajšia pokožka nie je vždy hladká. Jedovatý pestrec obyčajný (Scleroderma citrinum) je oveľa menší a tvrdší a vnútro mu tmavne do purpurovočiernej farby s bielym mramorovaním, kým je plodnica ešte mladá. Mladá muchotrávka (Amanita) má na zvislom reze lupene a hlúbik. Neotvorená hadovka (Phallus) má vo vajíčku rôsolovitú vrstvu. Táto huba má rovnomerne biele vnútro a zárodky lupeňov nemá.",
        notes: "Jedna veľká plodnica tvorí výtrusy v biliónoch, podľa jedného sčítania viac ako sedem biliónov. Huba sa krájala na prúžky na zastavenie krvácania, uchovávala sa ako práchno a tlejúce kúsky sa používali na upokojenie včiel. Na Novom Zélande sa ňou zastavovalo krvácanie a ošetrovali sa ňou popáleniny. Bielkovina kalvacín z plodníc sa v 60. rokoch 20. storočia skúšala proti nádorom. Opakované dávky vyvolali alergické reakcie u psov a opíc a práce sa zastavili pre jej toxicitu. V sedemdesiatych rokoch 20. storočia bol v Štiavnických vrchoch zaznamenaný nález o niečo menší, než je rekordná plodnica z českého Liberce, ktorá mala viac ako 20 kg a obvod väčší ako 2 m."
      }
    },
    sources: {
      en: [
        {
          group: "text",
          name: "First Nature",
          href: "https://www.first-nature.com/fungi/calvatia-gigantea.php"
        },
        {
          group: "text",
          name: "Wikipedia",
          href: "https://en.wikipedia.org/wiki/Calvatia_gigantea"
        },
        {
          group: "text",
          name: "MushroomExpert",
          href: "https://www.mushroomexpert.com/calvatia_gigantea.html"
        },
        {
          group: "text",
          name: "de.wikipedia",
          href: "https://de.wikipedia.org/wiki/Riesenbovist"
        },
        {
          group: "text",
          name: "myko.cz",
          href: "https://www.myko.cz/myko-atlas/Calvatia-gigantea/"
        },
        {
          group: "text",
          name: "Treking.cz",
          href: "https://www.treking.cz/priroda/pychavka-obrovska.htm"
        },
        {
          group: "text",
          name: "Fungipedia",
          href: "https://www.fungipedia.org/en/hongos/calvatia-gigantea.html"
        },
        {
          group: "text",
          name: "nahuby.sk",
          href: "https://www.nahuby.sk/atlas-hub/Calvatia-gigantea/vatovec-obrovsky/vatovec-obrovsky/ID783"
        },
        {
          group: "text",
          name: "Poľovníctvo a rybárstvo",
          href: "https://polovnictvo-rybarstvo.pluska.sk/na-hubach/nasli-ste-uz-na-hubach-giganta-vatovce-si-nemozno-nevsimnut",
          detail: "9 Sep 2025"
        },
        {
          group: "text",
          name: "British Basidiomycetae",
          href: "https://archive.org/details/britishbasidiomy00reac"
        },
        {
          group: "text",
          name: "Mycological Writings",
          href: "https://archive.org/details/mycologicalwriti01lloy"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=265958",
          detail: "265958"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=265958",
          detail: "265958"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/265958",
          detail: "265958"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/2536058",
          detail: "2536058"
        }
      ],
      sk: [
        {
          group: "text",
          name: "nahuby.sk",
          href: "https://www.nahuby.sk/atlas-hub/Calvatia-gigantea/vatovec-obrovsky/vatovec-obrovsky/ID783",
          detail: "vatovec obrovský"
        },
        {
          group: "text",
          name: "Poľovníctvo a rybárstvo",
          href: "https://polovnictvo-rybarstvo.pluska.sk/na-hubach/nasli-ste-uz-na-hubach-giganta-vatovce-si-nemozno-nevsimnut",
          detail: "9 Sep 2025"
        }
      ]
    },
    synonyms: [
      "Lycoperdon giganteum Batsch",
      "Bovista gigantea (Batsch) Gray",
      "Langermannia gigantea (Batsch) Rostk.",
      "Globaria gigantea (Batsch) Quél.",
      "Bovistaria gigantea (Batsch) P. Karst.",
      "Lasiosphaera gigantea (Batsch) F. Šmarda"
    ]
  };

  var CLITOCYBE_MEDIA = "photos/Agaricales/Clitocybaceae/Clitocybe_nebularis/";
  var CLITOCYBE = {
    id: 53,
    name: "Clitocybe nebularis",
    author: "(Batsch) P. Kumm.",
    family: "Clitocybaceae",
    genus: "Clitocybe",
    order: "Agaricales",
    edibility: "edible_with_caution",
    hymenium: "gills",
    path: ["Fungi", "Dikarya", "Basidiomycota", "Agaricomycotina", "Agaricomycetes", "Agaricomycetidae", "Agaricales", "Clitocybaceae", "Clitocybe"],
    summary: ["Agaricales", "Clitocybaceae", "Clitocybe"],
    added: "2026-10-24",
    plate: STORAGE + CLITOCYBE_MEDIA + "Clitocybe_nebularis@1600.webp",
    plateGrid: STORAGE + CLITOCYBE_MEDIA + "Clitocybe_nebularis@400.webp",
    plateCredit: {
      author: "L. Dufour",
      license: "public domain",
      source: "https://www.biodiversitylibrary.org/page/3270719"
    },
    photos: [
      {
        src: STORAGE + CLITOCYBE_MEDIA + "cn1.webp",
        author: "Lucian Clanet",
        license: "CC BY 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Clitocybe_nebularis_01.jpg"
      },
      {
        src: STORAGE + CLITOCYBE_MEDIA + "cn2.webp",
        author: "The Brook",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Clitocybe_nebularis_-_Sonvilier,_Les_Sauges.jpg"
      },
      {
        src: STORAGE + CLITOCYBE_MEDIA + "cn3.webp",
        author: "Dominicus Johannes Bergsma",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Nevelzwam_(nebularis)_tussen_afgevallen_beukenblad_(d.j.b.)_01.jpg"
      },
      {
        src: STORAGE + CLITOCYBE_MEDIA + "cn4.webp",
        author: "Lukas",
        license: "CC BY-SA 2.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
        source: "https://commons.wikimedia.org/wiki/File:Clitocybe_nebularis_(30933177390).jpg"
      },
      {
        src: STORAGE + CLITOCYBE_MEDIA + "cn5.webp",
        author: "DidierFy",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Clitocybe_nebularis_10.2024_(1).jpg"
      },
    ],
    capFrom: 5,
    capTo: 25,
    stipeHeightFrom: 5,
    stipeHeightTo: 15,
    stipeThickFrom: 1.5,
    stipeThickTo: 5,
    fruitingFrom: 8,
    fruitingTo: 12,
    label: {
      en: "clouded funnel",
      sk: "strmuľka inovaťová"
    },
    names: {
      en: ["clouded agaric", "cloudy clitocybe", "cloud funnel", "clouded funnel cap"]
    },
    text: {
      en: {
        description: "A fleshy saprobic mushroom of leaf litter in conifer and broadleaf woods, often in rings or troops. It is widespread in Europe from the Mediterranean and North Africa to the Arctic Circle and east to Belarus, and it is reported from North America and Japan and introduced in New Zealand.",
        cap: "The cap is commonly 5–20 cm across. Published widths also run from 5 cm to 25 cm, and a Californian account gives 4–30 cm. It begins convex, sometimes conical, with an inrolled margin, then becomes flat, wavy, or slightly depressed, and it may turn shallowly funnel-shaped while the margin stays downturned. A broad umbo is occasional, and the margin can become lobed with age. The surface is dry to moist, smooth or matte, and radially fibrillose, and it is not hygrophanous. In wet weather it can feel slightly greasy. Young caps carry a whitish bloom over the whole surface, and the bloom later remains only at the centre. The colour is cloud grey, ash grey, or grey-brown, usually paler toward the margin, from beige to nearly white. Wet weather darkens it to grey or grey-brown, and dry weather fades it to pale grey or whitish grey-brown. Some fruit bodies are whitish from the start. The thin skin peels as far as the centre. The cap skin is a cutis of branching hyphae about 1.5–7 μm wide, with clamp connections, and some cells carry brown pigment. Potassium hydroxide does not change the colour of the cap.",
        hymenium: "The gills are crowded. One count gives about 60–90 on a cap. They are 3–7 mm broad and can reach about 10 mm in age. They are broadly adnate to slightly or shortly decurrent, and they separate easily from the cap flesh. They are white or whitish at first, then cream, pale ochre, or yellowish, sometimes with a brownish tint. Dried specimens can turn bright brownish orange. Short gills are mixed in, and the gills are usually forked. The basidia are four-spored and have a clamp at the base. A European account gives them as cylindrical to clavate and 20–25 × 5–6.5 μm. A North American account gives them as subclavate and 33–36 × 4–6 μm. Cystidia are absent.",
        stipe: "The stipe is commonly 5–15 cm long and 1.5–5 cm thick. A Californian account gives 4–9 × 1.5–3 cm. It is cylindrical and often club-shaped or swollen at the base, especially when young. There is no ring. The surface is dry, smooth or fibrillose, sometimes with longitudinal grey-brown fibres. It is whitish, pale grey, or slightly brownish, and paler than the cap. It may darken brownish where it is handled. It is solid and firm at first, then loosely stuffed, and later hollow. White mycelium covers the base and binds the litter.",
        flesh: "The flesh is white and thick. It is firm when young and later soft, spongy, or cottony in the cap, and fibrous in the stipe. It does not change colour when cut. The smell is strong and characteristic. Young fruit bodies are aromatic, sweet, fruity, or mealy, and the scent has been compared to orange blossom. The same smell is often called foul, rancid, skunky, of bedbugs, of turnip, of mouldy cheese, or of coal tar, and it becomes more unpleasant with age. The taste is mild, mushroomy, sweet, sour, or bitterish. Some accounts find no distinctive taste, and others call the raw flesh unpleasant.",
        sporePrint: "White, cream, creamy white, pale buff, or pale yellow. A thin deposit can look whitish, and a thick one more yellow. The spores are ellipsoidal, smooth, and hyaline, mostly 5–8.5 × 3–5 μm, with a length-to-width ratio of about 1.5–2 where it has been measured. They are inamyloid, and the spore wall is cyanophilous.",
        habitat: "The main fruiting is from August to December. In Britain it runs from August into early December. In central Europe the fruit bodies come from September, sometimes from the end of August, into November or December. In Slovakia they run from the end of September through November. In Siberia the window is August to October. In California they seldom appear before December, and in a warm climate fruiting can continue through winter. It grows on soil and in deep humus, among leaves and needles, in deciduous and coniferous woods. Mull-rich beech woods are a favourite, and it also grows in spruce plantations, oak-hornbeam woods, hedgerows, parks, gardens, and lawns, and under cypress, oak, and hazel, including in towns. Fruit bodies stand singly or in large groups, rows, or fairy rings. The soils are fresh to moderately moist and not too poor, often loam, and the species tolerates a wide range of pH. It avoids sand, gravel, bogs, and swamps. Near-natural stands are mostly broadleaf, and young to middle-aged woods are preferred.",
        uses: "It is eaten in parts of Europe, including the French and Swiss Jura, Castile and León, the Basque Country, Navarre, and central Europe, and it is also reported as food in Russia, Ukraine, China, Mexico, and Chile. Young fruit bodies are the ones used. They are cooked for a long time, boiled and drained, added in small amounts to a mixture of other mushrooms, or pickled in vinegar. Many people tolerate them. Others get nausea, vomiting, and diarrhoea, sometimes from a small portion and sometimes after thorough cooking, and severe gastrointestinal poisonings are on record. Raw fruit bodies cause strong digestive upset. The fruit bodies contain nebularine, isolated in 1953, together with other antibiotic and antifungal substances. Nebularine is heat-stable, so boiling does not remove it. Swiss official mushroom inspectors have treated the species as inedible since 2017, and that view was restated in 2023. In France it is now treated as inedible or as strongly suspected of being toxic. German, Austrian, Italian, and Nordic advice is against eating it, or places it among mushrooms whose food value is judged inconsistently. The smell alone puts many people off. Older fruit bodies can still look sound after they have started to decay, including after a frost.",
        confusion: "Entoloma sinuatum has gills that are notched or sinuate rather than decurrent. They are yellowish and then salmon-pink, the spore print is pink, the smell is mealy, and it fruits earlier, mainly in warm calcareous broadleaf woods. Clitopilus prunulus also has decurrent gills, but the flesh is very fragile, the smell is strongly of meal, and the spore print is pink. Clitocybe phyllophila is poisonous and whitish, and the strong sweetish smell separates this species from it. Several smaller whitish species of Clitocybe, with caps under about 10 cm, are violently poisonous, so a faded whitish cap is the one most easily confused with them. Ampulloclitocybe clavipes is smaller, usually with a darker grey cap, and the stipe stays strongly club-shaped or conical when the fruit body is mature. Clitocybe alexandri has a somewhat darker cap, grows at higher elevations, and prefers alkaline soils. Infundibulicybe geotropa is more slender, and the mature cap is strongly funnel-shaped. Lepista irina and Lepista panaeolus have gills that are not decurrent and spores that are ornamented. Lepista panaeolus usually has concentric watery spots on the cap and only a weak mealy smell. Lepista nuda has lilac gills that are sinuate. Lepista glaucocana is larger and has bluish-lilac tints. Lepista singeri, described from Norway and also found in central Europe, has gills with an upturned attachment and a somewhat cream cap. Tricholoma portentosum has emarginate gills and a stipe that yellows. Tricholoma saponaceum has an olive-brown cap and a soapy, fruity smell. Leucopaxillus albissimus is paler, slower to decay, and has a white spore print. Clitocybe robusta has a more solidly white cap.",
        notes: "A white form has a milk-white cap and stipe. Collections in North America, especially outside the Pacific Northwest, may not all be the species described from Germany. Older fruit bodies are sometimes deformed by Volvariella surrecta, which covers them with white mycelium.",
      },
      sk: {
        description: "Mäsitá saprotrofná huba opadanky ihličnatých a listnatých lesov, často v kruhoch alebo v húfoch. V Európe je rozšírená od Stredomoria a severnej Afriky po severný polárny kruh a na východ po Bielorusko, uvádza sa zo Severnej Ameriky a z Japonska a zavlečená je na Novom Zélande.",
        cap: "Klobúk má bežne 5–20 cm. Uverejnené šírky siahajú od 5 cm do 25 cm a kalifornský opis uvádza 4–30 cm. Za mladi je klenutý, niekedy kužeľovitý, s podvinutým okrajom, potom plochý, zvlnený alebo slabo preliačený a môže sa stať plytko lievikovitým, kým okraj ostáva sklopený. Široký hrboľ je občasný a okraj môže byť vekom laločnatý. Povrch je suchý až vlhký, hladký alebo matný a radiálne vláknitý a nie je hygrofánny. Za vlhka môže byť mierne mastný. Mladé klobúky nesú belavý oinovatený povlak po celom povrchu a neskôr ostáva len v strede. Farba je oblačnosivá, popolavosivá alebo sivohnedá, k okraju zvyčajne bledšia, od béžovej takmer po bielu. Vlhké počasie ju stmaví do siva alebo sivohneda a sucho ju vybledne do bledosiva alebo belavosivohneda. Niektoré plodnice sú belavé od začiatku. Tenká pokožka sa lúpe až po stred. Pokožka klobúka je kutis z rozkonárených hýf širokých asi 1,5–7 μm, so spojkami, a niektoré bunky nesú hnedé farbivo. Hydroxid draselný nemení farbu klobúka.",
        hymenium: "Lupene sú husté. Na jednom klobúku ich býva asi 60–90. Sú široké 3–7 mm a vekom môžu dosiahnuť asi 10 mm. Sú široko prirastené až slabo alebo krátko zbiehavé a od dužiny klobúka sa ľahko oddeľujú. Najprv sú biele alebo belavé, potom krémové, svetlookrové alebo žltkasté, niekedy s hnedastým odtieňom. Usušené plodnice môžu dostať jasne hnedooranžovú farbu. Primiešané sú krátke lupene a lupene bývajú vidlicovité. Bazídiá sú štvorvýtrusné a na báze majú spojku. Európsky opis ich uvádza ako valcovité až kyjačikovité, 20–25 × 5–6,5 μm. Severoamerický opis ich uvádza ako slabo kyjačikovité, 33–36 × 4–6 μm. Cystidy chýbajú.",
        stipe: "Hlúbik je bežne dlhý 5–15 cm a hrubý 1,5–5 cm. Kalifornský opis uvádza 4–9 × 1,5–3 cm. Je valcovitý a často kyjačikovitý alebo na báze zhrubnutý, najmä za mladi. Prsteň chýba. Povrch je suchý, hladký alebo vláknitý, niekedy s pozdĺžnymi sivohnedými vláknami. Je belavý, bledosivý alebo slabo hnedastý a bledší ako klobúk. Na dotykových miestach môže hnednúť. Najprv je plný a pevný, potom riedko vypchatý a neskôr dutý. Biele podhubie pokrýva bázu a zväzuje opadanku.",
        flesh: "Dužina je biela a hrubá. Za mladi je pevná a neskôr v klobúku mäkká, špongiovitá alebo vatovitá a v hlúbiku vláknitá. Na reze nemení farbu. Vôňa je silná a charakteristická. Mladé plodnice sú aromatické, sladké, ovocné alebo múčne a vôňa sa prirovnáva k pomarančovým kvetom. Tá istá vôňa sa často opisuje ako nepríjemná, žltnutá, po skunkovi, plošticová, po kvake, po plesnivom syre alebo po kamenouhoľnom dechte a vekom je nepríjemnejšia. Chuť je mierna, hubová, sladkastá, kyslastá alebo horkastá. Niektoré opisy nenachádzajú výraznú chuť a iné označujú surovú dužinu za nepríjemnú.",
        sporePrint: "Biely, krémový, krémovobiely, bledoplavý alebo bledožltý. Tenký nános môže vyzerať belavo a hrubší viac žlto. Výtrusy sú elipsoidné, hladké a hyalinné, väčšinou 5–8,5 × 3–5 μm, s pomerom dĺžky k šírke asi 1,5–2 tam, kde sa meral. Sú neamyloidné a stena výtrusu je cyanofilná.",
        habitat: "Hlavné plodenie trvá od augusta do decembra. Vo Veľkej Británii prebieha od augusta do začiatku decembra. V strednej Európe prichádzajú plodnice od septembra, niekedy od konca augusta, do novembra alebo decembra. Na Slovensku trvajú od konca septembra do novembra. Na Sibíri plodí od augusta do októbra. V Kalifornii sa zriedka objavujú pred decembrom a v teplom podnebí môže plodenie pokračovať aj cez zimu. Rastie na pôde a v hlbokom humuse, medzi lístím a ihličím, v listnatých aj ihličnatých lesoch. Obľubuje bukové lesy s bohatým mulom a rastie aj v smrekových výsadbách, v dubovo-hrabových lesoch, v živých plotoch, parkoch, záhradách a na trávnikoch, aj pod cyprusom, dubom a lieskou, vrátane miest. Plodnice stoja jednotlivo alebo vo veľkých skupinách, v radoch alebo v čarovných kruhoch. Pôdy sú svieže až mierne vlhké a nie príliš chudobné, často hlinité, a druh znáša široké rozpätie pH. Vyhýba sa piesku, štrku, rašeliniskám a močiarom. V prirodzených porastoch prevládajú listnáče a uprednostňuje mladé až strednoveké lesy.",
        uses: "Jedáva sa v častiach Európy, aj vo francúzskom a švajčiarskom Jure, v Kastílii a Leóne, v Baskicku, v Navarre a v strednej Európe, a ako potrava sa uvádza aj z Ruska, Ukrajiny, Číny, Mexika a Čile. Používajú sa mladé plodnice. Varia sa dlho, prevaria sa a voda sa vyleje, pridávajú sa v malom množstve do zmesi iných húb alebo sa nakladajú do octu. Mnohí ich znášajú. Iným spôsobujú nevoľnosť, vracanie a hnačku, niekedy už po malej porcii a niekedy aj po dôkladnom varení, a ťažké žalúdočno-črevné otravy sú zaznamenané. Surové plodnice spôsobujú silné tráviace ťažkosti. Plodnice obsahujú nebularín, izolovaný v roku 1953, spolu s ďalšími antibiotickými a antimykotickými látkami. Nebularín je teplovzdorný, takže varenie ho neodstráni. Švajčiarski úradní kontrolóri húb ju od roku 2017 pokladajú za nejedlú a tento postoj zopakovali v roku 2023. Vo Francúzsku sa teraz pokladá za nejedlú alebo za silno podozrivú z jedovatosti. Nemecké, rakúske, talianske a severské odporúčania radia nejesť ju, alebo ju zaraďujú medzi huby, ktorých potravinová hodnota sa posudzuje nejednotne. Samotná vôňa mnohých odradí. Staršie plodnice môžu vyzerať zdravé aj po tom, čo sa začali kaziť, aj po mraze.",
        confusion: "Hodvábnica veľká (Entoloma sinuatum) má lupene vykrojené alebo vykrajované, nie zbiehavé. Sú žltkasté a potom lososovoružové, výtrusný prach je ružový, vôňa je múčna a plodí skôr, najmä v teplých vápencových listnatých lesoch. Machovka obyčajná (Clitopilus prunulus) má tiež zbiehavé lupene, ale dužina je veľmi krehká, vôňa je výrazne múčna a výtrusný prach je ružový. Strmuľka hrabanková (Clitocybe phyllophila) je jedovatá a belavá a od tohto druhu ju oddeľuje jeho silná sladkastá vôňa. Niekoľko menších belavých druhov rodu Clitocybe, s klobúkom pod asi 10 cm, je prudko jedovatých, takže vyblednutý belavý klobúk sa s nimi zamieňa najľahšie. Strmuľka kyjakovitá (Ampulloclitocybe clavipes) je menšia, zvyčajne s tmavším sivým klobúkom, a hlúbik ostáva aj v dospelosti výrazne kyjakovitý alebo kužeľovitý. Clitocybe alexandri má o niečo tmavší klobúk, rastie vo vyšších polohách a uprednostňuje zásadité pôdy. Strmuľka veľká (Infundibulicybe geotropa) je štíhlejšia a dospelý klobúk je výrazne lievikovitý. Lepista irina a Lepista panaeolus majú lupene, ktoré nie sú zbiehavé, a výtrusy s ornamentikou. Lepista panaeolus máva na klobúku sústredené vodnaté škvrny a len slabú múčnu vôňu. Pôvabnica fialová (Lepista nuda) má lilavé lupene, ktoré sú vykrojené. Pôvabnica (Lepista glaucocana) je väčšia a má modrolilavé odtiene. Lepista singeri, opísaná z Nórska a nájdená aj v strednej Európe, má lupene s nahor obráteným pripojením a trochu krémový klobúk. Čírovka sivá (Tricholoma portentosum) má vykrojené lupene a hlúbik, ktorý žltne. Čírovka mydlová (Tricholoma saponaceum) má olivovohnedý klobúk a mydlovú, ovocnú vôňu. Leucopaxillus albissimus je bledší, pomalšie sa rozkladá a má biely výtrusný prach. Clitocybe robusta má súvislejšie biely klobúk.",
        notes: "Biela forma má mliečnobiely klobúk a hlúbik. Staršie plodnice niekedy deformuje Volvariella surrecta, ktorá ich pokrýva bielym podhubím. Na Slovensku je všade veľmi rozšírená.",
      }
    },
    sources: {
      en: [
        {
          group: "text",
          name: "Wikipedia",
          href: "https://en.wikipedia.org/wiki/Clitocybe_nebularis",
        },
        {
          group: "text",
          name: "First Nature",
          href: "https://www.first-nature.com/fungi/clitocybe-nebularis.php",
        },
        {
          group: "text",
          name: "MushroomExpert",
          href: "https://www.mushroomexpert.com/clitocybe_nebularis.html",
        },
        {
          group: "text",
          name: "MykoWeb",
          href: "https://www.mykoweb.com/CAF/species/Clitocybe_nebularis.html",
        },
        {
          group: "text",
          name: "de.wikipedia",
          href: "https://de.wikipedia.org/wiki/Nebelgrauer_Trichterling",
        },
        {
          group: "text",
          name: "Slovak Wikipedia",
          href: "https://sk.wikipedia.org/wiki/Strmu%C4%BEka_inova%C5%A5ov%C3%A1",
        },
        {
          group: "text",
          name: "cs.wikipedia",
          href: "https://cs.wikipedia.org/wiki/Strm%C4%9Blka_ml%C5%BEenka",
        },
        {
          group: "text",
          name: "myko.cz",
          href: "https://www.myko.cz/myko-atlas/Clitocybe-nebularis/",
        },
        {
          group: "text",
          name: "Fungipedia",
          href: "https://www.fungipedia.org/en/hongos/clitocybe-nebularis.html",
        },
        {
          group: "text",
          name: "Грибы Сибири",
          href: "https://mycology.su/clitocybe-nebularis.html",
        },
        {
          group: "text",
          name: "fr.wikipedia",
          href: "https://fr.wikipedia.org/wiki/Clitocybe_n%C3%A9buleux",
        },
        {
          group: "text",
          name: "BHL",
          href: "https://www.biodiversitylibrary.org/page/3270719",
          detail: "Dufour plate",
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=164796",
          detail: "164796",
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=164796",
          detail: "164796",
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/NamesRecord.asp?RecordID=457121",
          detail: "457121",
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=17328",
          detail: "17328",
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/164796",
          detail: "164796",
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/2531072",
          detail: "2531072",
        },
      ],
      sk: [
        {
          group: "text",
          name: "Slovak Wikipedia",
          href: "https://sk.wikipedia.org/wiki/Strmu%C4%BEka_inova%C5%A5ov%C3%A1",
          detail: "strmuľka inovaťová",
        },
        {
          group: "text",
          name: "nahuby.sk",
          href: "https://www.nahuby.sk/atlas-hub/Clitocybe-nebularis/strmulka-inovatova/strmelka-mlzenka/ID659",
        },
      ]
    },
    synonyms: ["Agaricus nebularis Batsch", "Gymnopus nebularis (Batsch) Gray", "Omphalia nebularis (Batsch) Quél.", "Lepista nebularis (Batsch) Harmaja", "Clitocybe stenophylla P. Karst.", "Clitocybe alba (Bataille) Singer"]
  };

  var TRAMETES_MEDIA = "photos/Polyporales/Polyporaceae/Trametes_versicolor/";
  var TRAMETES = {
    id: 54,
    name: "Trametes versicolor",
    author: "(L.) Lloyd",
    family: "Polyporaceae",
    genus: "Trametes",
    order: "Polyporales",
    edibility: "inedible",
    hymenium: "tubes",
    path: [
      "Fungi",
      "Dikarya",
      "Basidiomycota",
      "Agaricomycotina",
      "Agaricomycetes",
      "Incertae sedis",
      "Polyporales",
      "Polyporaceae",
      "Trametes"
    ],
    summary: [
      "Polyporales",
      "Polyporaceae",
      "Trametes"
    ],
    added: "2026-10-24",
    plate: STORAGE + TRAMETES_MEDIA + "Trametes_versicolor@1600.webp",
    plateGrid: STORAGE + TRAMETES_MEDIA + "Trametes_versicolor@400.webp",
    plateCredit: {
      author: "L. Dufour",
      license: "public domain",
      source: "https://www.viagallica.com/f/_champignons_-_planches_dufour/champignons_-_planche_dufour_050.htm"
    },
    photos: [
      {
        src: STORAGE + TRAMETES_MEDIA + "tv1.webp",
        author: "Cody Hough",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
        source: "https://commons.wikimedia.org/wiki/File:Many-colored_Polypore.jpg"
      },
      {
        src: STORAGE + TRAMETES_MEDIA + "tv2.webp",
        author: "Jose Angel Urquia Goitia",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Larruki_koloreanitza_azpitik.jpg"
      },
      {
        src: STORAGE + TRAMETES_MEDIA + "tv3.webp",
        author: "Björn Sothmann",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Gruga-0043.jpg"
      },
      {
        src: STORAGE + TRAMETES_MEDIA + "tv4.webp",
        author: "Hjart",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Broget_l%C3%A6derporesvamp_2026.jpg"
      },
      {
        src: STORAGE + TRAMETES_MEDIA + "tv5.webp",
        author: "ElDule",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        source: "https://commons.wikimedia.org/wiki/File:Coriolus_versicolor1.jpg"
      }
    ],
    capFrom: 2,
    capTo: 10,
    fruitingFrom: 1,
    fruitingTo: 12,
    label: {
      en: "turkey tail",
      sk: "trúdnikovec pestrý"
    },
    names: {
      en: [
        "turkeytail",
        "many-zoned polypore"
      ]
    },
    text: {
      en: {
        description: "A thin annual white-rot bracket of hardwood, saprotrophic on dead wood and sometimes a weak parasite of living trees. It is probably worldwide, and it is common through Europe from Scandinavia to the Mediterranean, including Britain and Ireland, and through Asia, North America, and Australia.",
        cap: "The fruit body is annual and sessile, fan-shaped, semicircular, kidney-shaped, or rosette-like. Caps often fuse side by side and in tiers. The attachment may narrow, or the cap may run a short way down the wood. Young fruit bodies are rarely effused-reflexed, and a very young one can be a lumpy crust. The width is commonly 2–8 cm and reaches about 10 cm, though many central-European fruit bodies stay within 2–6 cm. The depth is about 1–4 cm. The cap is about 1–3 mm thick, and the flesh at the attachment is up to about 3 mm. It is flexible when fresh. The surface is finely velvety to hairy, with hairy zones alternating with smoother, silky, or glossy ones. The zones run through white, cream, ochre, yellow, cinnamon, rust, brown, grey, blue-grey, blue, and black, and sometimes orange or olive. The margin is paler, whitish to ochre when young, wavy, and thin. Older fruit bodies blacken, and they are often greened by algae. Green is also reported as a zone colour.",
        hymenium: "The tubes are short, about 1.5–3 mm deep. The pores are small, about 3–6 per mm and sometimes more, round to angular, and they become labyrinthine and grey with age. The pore surface is white, whitish, cream, or pale brown, and it does not stain much when bruised. Cystidia were not found. The basidia are clavate, about 18–20 × 3–4.5 μm, four-spored, and clamped at the base.",
        stipe: "There is no stipe. The cap is attached directly, sometimes by a narrowed base, and it can run a short way down the wood.",
        flesh: "The flesh is thin and whitish, tough and fibrous when fresh and leathery when dry. A thin black line in section separates the hairy surface from the context. Smell and taste are not distinctive. Potassium hydroxide on the flesh is negative to yellowish or yellow. The hyphal system is trimitic. The decay is a white rot of the sapwood, and the fungus degrades lignin.",
        sporePrint: "The deposit is white to whitish. One account includes yellow. The spores are cylindrical to slightly curved, smooth, thin-walled, hyaline, and inamyloid. Published measurements run about 4–7 × 1.5–2.5 μm, most often about 4.5–6 × 1.5–2.5 μm.",
        habitat: "Fruit bodies are present all year. In Britain and Ireland they are most often found in autumn and winter, when the spores are released. In central Europe the fresh fruit bodies appear mainly from late May into August. They grow on dead hardwood logs, stumps, stacked wood, fallen branches and twigs, standing dead wood, and living trees, which they enter through small wounds. Beech is the main host in central Europe, and oak is a favoured host. Other hosts include birch, hornbeam, hazel, willow, cherry and other fruit trees, and many further hardwoods. Conifers are an uncommon host, though they are not rare in central Europe. It also grows outside woodland, on garden timber in contact with the soil and on stored or built wood. The fruit bodies survive dry spells. Growth is fast enough that Armillaria does not displace it.",
        uses: "The fruit body is inedible. It is too tough to eat. Dried fruit bodies are used in floral arrangements, and they were formerly worn as hat ornaments and set on brooches and buckles. Extracts have a long use in traditional Chinese, Japanese, and Korean medicine. Polysaccharide-K is approved in Japan as an adjuvant in cancer treatment and is not approved in the United States for any clinical condition. Studies have reported some adjuvant effect in some cancers in vitro and partly in vivo. Supplements have been linked to diarrhoea, darkened stool, and darkened nails. In 2020, in the United States, two firms were ordered to stop marketing products of this fungus as cancer drugs or immune stimulants.",
        confusion: "Stereum ostrea, Stereum hirsutum, Stereum subtomentosum, and other Stereum species have a smooth hymenium and no pores. Trametes hirsuta is thicker, and the fresh cap is whitish to grey and coarsely hairy rather than finely velvety. Trametes pubescens lacks starkly contrasting colour zones. Trametes ochracea is rigid rather than thin and flexible, thicker at the attachment, to about 10 mm, with less varied ochre and yellow-brown bands and without silky or glossy zones, and it forms less crowded clusters. Trametes ochracea often shares a trunk with this fungus, and the two are not always easy to separate. Trametes suaveolens is much paler and usually does not grow in overlapping tiers. Other Trametes species with only about 1–3 pores per mm are separated by that pore size.",
        notes: "The fruit bodies are eaten by the moth Nemaxera betulinella and by the flies Polyporivora picta and Mycetophila luctuosa. The fungus can damage stored timber and structural timber, including mine timbers and railway sleepers."
      }
    },
    sources: {
      en: [
        {
          group: "text",
          name: "First Nature",
          href: "https://www.first-nature.com/fungi/trametes-versicolor.php"
        },
        {
          group: "text",
          name: "Wikipedia",
          href: "https://en.wikipedia.org/wiki/Trametes_versicolor"
        },
        {
          group: "text",
          name: "MushroomExpert",
          href: "https://www.mushroomexpert.com/trametes_versicolor.html"
        },
        {
          group: "text",
          name: "de.wikipedia",
          href: "https://de.wikipedia.org/wiki/Schmetterlings-Tramete"
        },
        {
          group: "text",
          name: "botany.cz",
          href: "https://botany.cz/cs/trametes-versicolor/"
        },
        {
          group: "text",
          name: "myko.cz",
          href: "https://www.myko.cz/myko-atlas/Trametes-versicolor"
        },
        {
          group: "text",
          name: "cs.wikipedia",
          href: "https://cs.wikipedia.org/wiki/Outkovka_pestr%C3%A1"
        },
        {
          group: "name",
          name: "Index Fungorum",
          href: "https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=281625",
          detail: "281625"
        },
        {
          group: "name",
          name: "Species Fungorum",
          href: "https://www.speciesfungorum.org/Names/SynSpecies.asp?RecordID=281625",
          detail: "281625"
        },
        {
          group: "name",
          name: "MycoBank",
          href: "https://www.mycobank.org/page/Name%20details%20page/field/Mycobank%20%23/281625"
        },
        {
          group: "name",
          name: "GBIF",
          href: "https://www.gbif.org/species/2548311",
          detail: "2548311"
        }
      ],
      sk: [
        {
          group: "text",
          name: "botany.cz",
          href: "https://botany.cz/cs/trametes-versicolor/",
          detail: "trúdnikovec pestrý"
        }
      ]
    },
    synonyms: [
      "Boletus versicolor L.",
      "Poria versicolor (L.) Scop.",
      "Agaricus versicolor (L.) Lam.",
      "Agarico-suber versicolor (L.) Paulet",
      "Polyporus versicolor (L.) Fr.",
      "Sistotrema versicolor (L.) Tratt.",
      "Pleuropus versicolor (L.) Zaw.",
      "Polystictus versicolor (L.) Fr.",
      "Hansenia versicolor (L.) P. Karst.",
      "Bjerkandera versicolor (L.) P. Karst.",
      "Coriolus versicolor (L.) Quél.",
      "Microporus versicolor (L.) Kuntze",
      "Boletus atrofuscus Schaeff.",
      "Cellularia cyathiformis Bull.",
      "Boletus cyaneus Pers.",
      "Polyporus fuscatus Fr.",
      "Polystictus fuscatus (Fr.) Cooke",
      "Microporus fuscatus (Fr.) Kuntze",
      "Polyporus argyraceus Pers.",
      "Polyporus nummularius Pers.",
      "Polyporus hirsutulus Schwein.",
      "Polystictus hirsutulus (Schwein.) Cooke",
      "Microporus hirsutulus (Schwein.) Kuntze",
      "Coriolus hirsutulus (Schwein.) Murrill",
      "Polyporus subflavus Lév.",
      "Polystictus subflavus (Lév.) Cooke",
      "Microporus subflavus (Lév.) Kuntze",
      "Polyporus pectunculus Lév.",
      "Polystictus pectunculus (Lév.) Cooke",
      "Microporus pectunculus (Lév.) Kuntze",
      "Coriolus pectunculus (Lév.) Pat.",
      "Polyporus apophysatus Rostk.",
      "Polystictus apophysatus (Rostk.) Sacc.",
      "Microporus apophysatus (Rostk.) Kuntze",
      "Polystictus azureus Fr.",
      "Microporus azureus (Fr.) Kuntze",
      "Coriolus azureus (Fr.) G. Cunn.",
      "Trametes azurea (Fr.) G. Cunn.",
      "Polyporus pictilis Berk.",
      "Polystictus pictilis (Berk.) Cooke",
      "Microporus pictilis (Berk.) Kuntze",
      "Antrodia pictilis (Berk.) Teng",
      "Polyporus nigricans Lasch",
      "Polystictus nigricans Sacc.",
      "Polyporus cristulatus Speg.",
      "Polystictus cristulatus (Speg.) Sacc.",
      "Microporus cristulatus (Speg.) Kuntze",
      "Polyporus caesioglaucus Cooke",
      "Polystictus caesioglaucus (Cooke) Cooke",
      "Microporus caesioglaucus (Cooke) Kuntze",
      "Trametes picta Berk.",
      "Coriolus pictus (Berk.) G. Cunn.",
      "Polystictus neaniscus Berk. ex Cooke",
      "Microporus neaniscus (Berk. ex Cooke) Kuntze",
      "Polyporus neaniscus (Berk. ex Cooke) Sacc. & Trotter",
      "Coriolus neaniscus (Berk. ex Cooke) Imazeki",
      "Polyporus antarcticus Speg.",
      "Polystictus antarcticus (Speg.) Sacc.",
      "Microporus antarcticus (Speg.) Kuntze",
      "Coriolus antarcticus (Speg.) J.E. Wright & J.R. Deschamps",
      "Microporus nigricans (Sacc.) Kuntze",
      "Polystictus inversus Lázaro Ibiza",
      "Polystictoides castaneicola Lázaro Ibiza",
      "Polystictus castaneicola (Lázaro Ibiza) Sacc. & Trotter",
      "Polystictus corylicola Lázaro Ibiza",
      "Polyporus irpiciformis Velen.",
      "Polyporus picicola Velen.",
      "Polyporus reisneri Velen.",
      "Polyporus rohlenae Velen.",
      "Polyporus carpineus Velen.",
      "Polystictus doidgeae Lloyd"
    ]
  };

  var CATALOG = [SPECIES, AMANITA, CHANTERELLE, RETICULATUS, PROCERA, PHALLOIDES, PANTHERINA, MORCHELLA, PLEUROTUS, LAETIPORUS, IMLERIA, ARMILLARIA, COPRINUS, GYROMITRA, RUBESCENS, HYPHOLOMA, AGARICUS, LECCINUM, SUILLUS, LACTARIUS, VIROSA, RUBROBOLETUS, CORTINARIUS, CRATERELLUS, FISTULINA, NEOBOLETUS, CALOCYBE, INOSPERMA, HYDNUM, SARCODON, RUSSULA, KUEHNEROMYCES, GALERINA, SPARASSIS, PAXILLUS, LEPISTA, ARTOMYCES, POLYPORUS, ALBOSTIPITATUM, HYGROPHOROPSIS, ENTOLOMA, PHALLUS, FOMES, AURICULARIA, TYLOPILUS, CHLOROPHYLLUM, EMETICA, TRICHOLOMA, LYCOPERDON, AURANTIACUM, CITRINA, PARDINUM, CALVATIA, CLITOCYBE, TRAMETES];

  // Field key. Underside is species.hymenium. Season is the fruiting months.
  // where: wood, ground (with trees), grass. color uses the cap colours the text names.
  var KEY = {
    "Boletus edulis": { where: ["ground"], color: ["brown"] },
    "Amanita muscaria": { where: ["ground"], color: ["red", "yellow"] },
    "Cantharellus cibarius": { where: ["ground"], color: ["yellow"] },
    "Boletus reticulatus": { where: ["ground"], color: ["brown"] },
    "Macrolepiota procera": { where: ["ground", "grass"], color: ["brown", "white"] },
    "Amanita phalloides": { where: ["ground"], color: ["white", "yellow", "green", "brown"] },
    "Amanita pantherina": { where: ["ground"], color: ["brown"] },
    "Morchella esculenta": { where: ["ground"], color: ["yellow", "brown"] },
    "Pleurotus ostreatus": { where: ["wood"], color: ["white", "brown", "dark"] },
    "Laetiporus sulphureus": { where: ["wood"], color: ["yellow"] },
    "Imleria badia": { where: ["ground", "wood"], color: ["brown", "red"] },
    "Armillaria mellea": { where: ["wood"], color: ["yellow", "brown"] },
    "Coprinus comatus": { where: ["grass"], color: ["white", "brown"] },
    "Gyromitra esculenta": { where: ["ground"], color: ["brown", "red"] },
    "Amanita rubescens": { where: ["ground"], color: ["white", "red", "brown", "dark"] },
    "Hypholoma fasciculare": { where: ["wood", "grass"], color: ["yellow", "brown"] },
    "Agaricus campestris": { where: ["grass"], color: ["white"] },
    "Leccinum scabrum": { where: ["ground"], color: ["brown", "dark"] },
    "Suillus luteus": { where: ["ground"], color: ["brown"] },
    "Lactarius deliciosus": { where: ["ground"], color: ["yellow", "red"] },
    "Amanita virosa": { where: ["ground"], color: ["white"] },
    "Rubroboletus satanas": { where: ["ground"], color: ["white", "green", "brown"] },
    "Cortinarius rubellus": { where: ["ground"], color: ["brown", "yellow"] },
    "Craterellus cornucopioides": { where: ["ground"], color: ["dark", "brown"] },
    "Fistulina hepatica": { where: ["wood"], color: ["red", "brown"] },
    "Neoboletus luridiformis": { where: ["ground"], color: ["brown"] },
    "Calocybe gambosa": { where: ["grass", "ground"], color: ["white", "yellow"] },
    "Inosperma erubescens": { where: ["ground", "grass"], color: ["white", "red"] },
    "Hydnum repandum": { where: ["ground"], color: ["white", "yellow"] },
    "Sarcodon imbricatus": { where: ["ground"], color: ["brown"] },
    "Russula cyanoxantha": { where: ["ground"], color: ["purple", "green", "dark", "brown"] },
    "Kuehneromyces mutabilis": { where: ["wood"], color: ["brown"] },
    "Galerina marginata": { where: ["wood"], color: ["brown"] },
    "Sparassis crispa": { where: ["wood", "ground"], color: ["white", "yellow"] },
    "Paxillus involutus": { where: ["ground", "grass", "wood"], color: ["brown"] },
    "Lepista nuda": { where: ["ground", "grass"], color: ["purple", "brown"] },
    "Artomyces pyxidatus": { where: ["wood"], color: ["white", "yellow", "brown"] },
    "Polyporus umbellatus": { where: ["ground", "wood"], color: ["white", "yellow", "brown", "dark"] },
    "Leccinum albostipitatum": { where: ["ground"], color: ["yellow", "red"] },
    "Hygrophoropsis aurantiaca": { where: ["ground", "wood"], color: ["yellow"] },
    "Entoloma sinuatum": { where: ["ground", "grass"], color: ["white", "yellow", "dark"] },
    "Phallus impudicus": { where: ["ground", "wood", "grass"], color: ["white", "dark"] },
    "Fomes fomentarius": { where: ["wood"], color: ["brown", "dark"] },
    "Auricularia auricula-judae": { where: ["wood"], color: ["brown", "dark"] },
    "Tylopilus felleus": { where: ["ground"], color: ["brown"] },
    "Chlorophyllum rhacodes": { where: ["ground", "grass"], color: ["brown", "white"] },
    "Russula emetica": { where: ["ground"], color: ["red"] },
    "Tricholoma equestre": { where: ["ground"], color: ["yellow", "brown"] },
    "Lycoperdon perlatum": { where: ["ground", "grass"], color: ["white", "brown"] },
    "Leccinum aurantiacum": { where: ["ground"], color: ["yellow", "red"] },
    "Amanita citrina": { where: ["ground"], color: ["yellow", "white", "green"] },
    "Tricholoma pardinum": { where: ["ground"], color: ["white", "brown", "dark"] },
    "Calvatia gigantea": { where: ["ground", "grass"], color: ["white", "brown"] },
    "Clitocybe nebularis": { where: ["ground", "grass"], color: ["dark", "brown", "white"] },
    "Trametes versicolor": { where: ["wood"], color: ["white", "yellow", "red", "brown", "green", "dark"] }
  };

  function t(lang) {
    return COPY[lang] || COPY.en;
  }

  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
    });
  }

  function fold(value) {
    return String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
  }

  function displayName(label, fallback, lang) {
    var value = String(label || fallback || "").trim();
    if (!value) return "";
    if (lang === "sk") return value.charAt(0).toLocaleLowerCase() + value.slice(1);
    return value;
  }

  function countLabel(n, lang) {
    var copy = t(lang);
    if (lang === "sk") {
      if (n === 1) return copy.one;
      if (n >= 2 && n <= 4) return copy.few.replace("{n}", String(n));
      return copy.many.replace("{n}", String(n));
    }
    return (n === 1 ? copy.one : copy.many).replace("{n}", String(n));
  }

  function href(path, lang) {
    var clean = path || "/";
    if (clean.charAt(0) !== "/") clean = "/" + clean;
    if (clean.length > 1 && clean.charAt(clean.length - 1) === "/") clean = clean.slice(0, -1);
    if (lang === "sk") clean = clean === "/" ? "/sk" : "/sk" + clean;
    if (clean === "/") return "/";
    return clean + "/";
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
    var locale = lang === "sk" ? "sk" : "en";
    CATALOG.forEach(function (species) {
      var name = kind === "family" ? species.family : species.genus;
      if (seen[name]) return;
      seen[name] = true;
      names.push(name);
    });
    names.sort(function (a, b) {
      return taxonTitle(a, locale).localeCompare(taxonTitle(b, locale), locale);
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
    return new Intl.DateTimeFormat(lang === "sk" ? "sk" : "en", {
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
  var seasonOpen = false;

  function keyChoices(axis) {
    if (axis === "under") return KEY_UNDER;
    if (axis === "where") return KEY_WHERE;
    if (axis === "color") return KEY_COLOR;
    return KEY_SEASON;
  }

  function readSelection() {
    var params = new URLSearchParams(location.search);
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
    var row = KEY[species.name];
    if (!row) return false;
    return (axis === "where" ? row.where : row.color).indexOf(value) >= 0;
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
      var row = KEY[species.name];
      if (!row) return;
      (axis === "where" ? row.where : row.color).forEach(function (id) {
        if (counts[id] != null) counts[id] += 1;
      });
    });
    return counts;
  }

  function keyGlyph(kind) {
    var habitat = kind === "wood" || kind === "ground" || kind === "grass";
    var pen = 'fill="none" stroke="currentColor" stroke-width="' + (habitat ? "2.6" : "1.7") + '" stroke-linecap="round" stroke-linejoin="round"';
    var ink = 'fill="currentColor"';
    var body = {
      gills: '<path ' + pen + ' d="M14 30c2-14 42-14 44 0"/><path ' + pen + ' d="M36 30v28"/><path ' + pen + ' d="M22 31v11M29 30v16M36 30v16M43 30v16M50 31v11"/>',
      tubes: '<path ' + pen + ' d="M14 30c2-14 42-14 44 0"/><path ' + pen + ' d="M36 44v14"/><circle ' + ink + ' cx="24" cy="38" r="1.7"/><circle ' + ink + ' cx="32" cy="38" r="1.7"/><circle ' + ink + ' cx="40" cy="38" r="1.7"/><circle ' + ink + ' cx="48" cy="38" r="1.7"/><circle ' + ink + ' cx="28" cy="45" r="1.7"/><circle ' + ink + ' cx="36" cy="45" r="1.7"/><circle ' + ink + ' cx="44" cy="45" r="1.7"/>',
      ridges: '<path ' + pen + ' d="M16 26c6 8 10 22 20 32 10-10 14-24 20-32"/><path ' + pen + ' d="M28 34c4 8 6 16 8 24M44 34c-4 8-6 16-8 24M36 28v28"/>',
      teeth: '<path ' + pen + ' d="M14 28c2-12 42-12 44 0"/><path ' + pen + ' d="M22 30v12M29 30v16M36 30v18M43 30v16M50 30v12"/>',
      pits: '<path ' + pen + ' d="M24 16h24l8 14-8 14H24l-8-14z"/><path ' + pen + ' d="M24 16l8 14-8 14M40 16l-8 14 8 14M16 30h40"/><path ' + pen + ' d="M36 44v14"/>',
      smooth: '<path ' + pen + ' d="M22 40c-6-14 4-26 14-22 6-8 18-6 20 6 8 2 10 16 2 22-2 8-12 12-20 8-10 4-18 0-16-14z"/>',
      gleba: '<circle ' + pen + ' cx="36" cy="30" r="16"/><path ' + pen + ' d="M28 44c2 10 14 10 16 0"/><circle ' + ink + ' cx="30" cy="28" r="1.4"/><circle ' + ink + ' cx="38" cy="24" r="1.4"/><circle ' + ink + ' cx="42" cy="32" r="1.4"/>',
      wood: '<path ' + pen + ' d="M8 20h36c14 0 20 8 20 16s-6 16-20 16H8"/><ellipse ' + pen + ' cx="22" cy="36" rx="14" ry="16"/><path ' + pen + ' d="M14 36h16M22 26v20"/>',
      ground: '<path ' + pen + ' d="M6 58h60"/><path ' + pen + ' d="M14 58 30 10l16 48M22 38h16"/><path ' + pen + ' d="M36 58l14-34 14 34M44 40h12"/>',
      grass: '<path ' + pen + ' d="M8 60c6-30 12-30 14 0M24 60c4-40 14-40 16 0M44 60c6-34 12-34 14 0M60 60c2-24 8-24 8 0"/>'
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

  function identifyPage(lang) {
    var copy = t(lang);
    var selection = readSelection();
    var locale = lang === "sk" ? "sk" : "en";
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
                '<button type="button" class="region-toggle' + (selection.season ? " on" : "") + '" data-season-toggle aria-expanded="' + (seasonOpen ? "true" : "false") + '" aria-controls="identify-season-panel">' +
                  esc(seasonName) +
                  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>' +
                (active
                  ? '<div class="key-chips">' + chips +
                    '<button type="button" class="any-btn" data-key="clear">' + esc(copy.startOver) + "</button></div>"
                  : "") +
              "</div>" +
              (seasonOpen
                ? '<div class="region-panel" id="identify-season-panel"><h2>' + esc(copy.seasonQuestion) + "</h2>" +
                  '<p class="key-note">' + esc(copy.seasonNote) + '</p><div role="radiogroup" aria-label="' + esc(copy.seasonQuestion) + '">' +
                  '<button type="button" role="radio" class="region-row" data-key="season" data-id="" aria-checked="' + (!selection.season ? "true" : "false") + '">' +
                    '<span class="radio" aria-hidden="true"></span><span class="lbl">' + esc(copy.anySeason) + '</span><span class="num">' + number(anySeasonCount) + "</span></button>" +
                  seasonRows +
                  "</div></div>"
                : "") +
            "</div>" +
            (matches.length ? '<div class="grid">' + grid + "</div>" : '<p class="center-msg">' + esc(copy.keyEmpty) + "</p>") +
          "</section>" +
        "</div>" +
        '<a class="identify-dock" href="#identify-results">' + esc(countLabel(matches.length, lang)) + "</a>" +
      "</div>";
    return { title: copy.keyTitle + " — " + copy.app, description: copy.keyLede, html: shell(lang, page, "identify") };
  }

  function parse() {
    var parts = location.pathname.split("/").filter(Boolean);
    var lang = "en";
    if (parts[0] === "sk") {
      lang = "sk";
      parts = parts.slice(1);
    }
    if (!parts.length) return { lang: lang, view: "home" };
    if (parts[0] === "identify" && parts.length === 1) return { lang: lang, view: "identify" };
    if (parts[0] === "about" && parts.length === 1) return { lang: lang, view: "about" };
    if (parts[0] === "families" && parts.length === 1) return { lang: lang, view: "families" };
    if (parts[0] === "genera" && parts.length === 1) return { lang: lang, view: "genera" };
    if (parts[0] === "family" && parts[1]) return { lang: lang, view: "family", key: decodeURIComponent(parts[1]) };
    if (parts[0] === "genus" && parts[1]) return { lang: lang, view: "genus", key: decodeURIComponent(parts[1]) };
    if (parts[0] === "mushroom" && parts[1]) {
      return { lang: lang, view: "mushroom", key: decodeURIComponent(parts[1]).replace(/_/g, " ") };
    }
    return { lang: lang, view: "missing" };
  }

  function go(url) {
    var here = location.pathname + location.search;
    if (url === here) {
      render();
      return;
    }
    history.pushState(null, "", url);
    render();
    window.scrollTo(0, 0);
  }

  var pendingFocus = "";

  function writeSelection(selection) {
    var next = location.pathname + selectionSearch(selection);
    var here = location.pathname + location.search;
    if (next !== here) history.replaceState(null, "", next);
    render({ keepScroll: true });
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
            '<option value="en"' + (lang === "en" ? " selected" : "") + ">English</option>" +
            '<option value="sk"' + (lang === "sk" ? " selected" : "") + ">Slovenčina</option>" +
          "</select>" +
        "</nav>" +
      "</header>" +
      page +
      '<footer class="site-foot"><span>' + esc(countLabel(CATALOG.length, lang)) + "</span><span>" +
        '<a href="' + href("/identify", lang) + '">' + esc(copy.keyTitle) + "</a> · " +
        '<a href="' + href("/about", lang) + '">' + esc(copy.about) + "</a>" +
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

  function cell(species, lang, third, spoken) {
    var label = displayName(species.label[lang], species.name, lang);
    return (
      '<a class="cell" href="' + href("/mushroom/" + encodeURIComponent(species.name), lang) + '">' +
        '<div class="art"><img src="' + species.plateGrid + '" alt="' + esc(label + ", " + species.name) + '"></div>' +
        '<div class="n">' + esc(label) + "</div>" +
        '<div class="l latin">' + esc(species.name) + "</div>" +
        '<div class="g' + (spoken ? " spoken" : "") + '">' + esc(third) + "</div>" +
      "</a>"
    );
  }

  function searchHits(query, lang) {
    var needle = fold(query);
    if (needle.length < 2) return [];
    var hits = [];
    taxonNames("family").concat(taxonNames("genus")).forEach(function (name) {
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
        return (
          '<a class="result" href="' + href("/mushroom/" + encodeURIComponent(hit.name), lang) + '">' +
            "<span><b>" + esc(displayName(hit.label, hit.name, lang)) + '</b> <span class="latin">' + esc(hit.name) + "</span></span>" +
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
    return { title: copy.app, description: copy.homeDesc, html: shell(lang, page, true), focusSearch: true };
  }

  function indexPage(lang, kind) {
    var copy = t(lang);
    var title = kind === "family" ? copy.families : copy.genera;
    var names = taxonNames(kind);
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
    (species.sources[lang] || []).forEach(function (item) {
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

  function photoBand(species, lang) {
    var copy = t(lang);
    var photos = species.photos;
    var figs = photos.map(function (photo, index) {
      var caption = photoCaption(copy, index + 1, photos.length);
      return (
        "<figure>" +
          '<button type="button" class="photo-open" data-index="' + index + '" aria-label="' + esc(caption) + '">' +
            '<img src="' + esc(photo.src) + '" alt="" loading="lazy">' +
          "</button>" +
          '<figcaption class="dark-cap">' + esc(caption) + "</figcaption>" +
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
      return {
        src: img ? img.getAttribute("src") : "",
        caption: button.getAttribute("aria-label") || ""
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
          '<div class="lightbox-body"><img alt="' + esc(item.caption) + '"><p></p></div>' +
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

  function mushroomPage(lang, key) {
    var copy = t(lang);
    var species = findSpecies(key);
    if (!species) return missing(lang);
    var text = species.text[lang] || {};
    var label = displayName(species.label[lang], species.name, lang);
    var familySpoken = taxonLabel(species.family, lang);
    var orderSpoken = taxonLabel(species.order, lang);
    var genusSpoken = taxonLabel(species.genus, lang);
    var aka = species.names[lang] || [];
    var edible = species.edibility === "choice" || species.edibility === "edible" || species.edibility === "edible_with_caution";
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
          '<div class="plate"><img src="' + species.plate + '" alt="' + esc(label + ", " + species.name) + '"><div class="cap">' + esc(copy.plate) + "</div></div>" +
          '<div class="copy">' +
            '<div class="kicker">' + esc(species.family) + " · " + esc(species.order) + "</div>" +
            '<h1 class="common">' + esc(label) + "</h1>" +
            '<div class="binomen latin">' + esc(species.name) + ' <span class="author">' + esc(species.author) + "</span></div>" +
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
    return {
      title: label + " (" + species.name + ") — " + copy.app,
      description: text.description || "",
      html: shell(lang, page, true)
    };
  }

  var ABOUT_SPECIES = "Boletus edulis";

  function aboutPage(lang) {
    var copy = t(lang);
    var species = findSpecies(ABOUT_SPECIES);
    var label = species ? displayName(species.label[lang], species.name, lang) : "";
    var toSpecies = species ? href("/mushroom/" + encodeURIComponent(species.name), lang) : "";
    var alt = species ? label + ", " + species.name : "";
    var photos = "";
    if (species) {
      photos = species.photos.slice(0, 3).map(function (photo) {
        return '<a href="' + toSpecies + '"><img src="' + esc(photo.src) + '" alt="' + esc(alt) + '"></a>';
      }).join("");
    }
    var plate = species
      ? '<div class="plate"><a href="' + toSpecies + '"><img src="' + esc(species.plate) + '" alt="' + esc(alt) + '"></a><div class="cap">' + esc(copy.plate) + "</div></div>"
      : "";
    var langs = [
      { code: "en", name: "English" },
      { code: "sk", name: "Slovenčina" }
    ].map(function (item) {
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
          '<div class="fact"><div class="k">' + esc(copy.aboutFactLanguages) + '</div><div class="v">2</div></div>' +
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
          '<div class="band-h"><h2>' + esc(copy.aboutLangsTitle) + "</h2><p>" + esc(copy.aboutLangsLede.replace("{n}", "2")) + "</p></div>" +
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
        "</section>" +
      "</div>";
    return { title: copy.about + " — " + copy.app, description: copy.aboutSeo, html: shell(lang, page, "about") };
  }

  function missing(lang) {
    var copy = t(lang);
    var page = '<div class="page"><p class="center-msg">' + esc(copy.missing) + ' <a href="' + href("/", lang) + '">' + esc(copy.nav) + "</a></p></div>";
    return { title: copy.app, description: copy.homeDesc, html: shell(lang, page, false) };
  }

  function viewModel(route) {
    if (route.view === "home") return home(route.lang);
    if (route.view === "identify") return identifyPage(route.lang);
    if (route.view === "about") return aboutPage(route.lang);
    if (route.view === "families") return indexPage(route.lang, "family");
    if (route.view === "genera") return indexPage(route.lang, "genus");
    if (route.view === "family") return taxonPage(route.lang, "family", route.key);
    if (route.view === "genus") return taxonPage(route.lang, "genus", route.key);
    if (route.view === "mushroom") return mushroomPage(route.lang, route.key);
    return missing(route.lang);
  }

  function setMeta(model, lang) {
    document.title = model.title;
    document.documentElement.lang = lang;
    var desc = model.description.slice(0, 240);
    var tag = document.querySelector('meta[name="description"]');
    if (tag) tag.setAttribute("content", desc);
    var og = document.querySelector('meta[property="og:description"]');
    if (og) og.setAttribute("content", desc);
    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", model.title);
    var canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://whatsthatmushroom.app" + location.pathname);
  }

  function render(options) {
    var keep = options && options.keepScroll;
    var filterScroll = 0;
    var y = window.scrollY;
    if (keep) {
      var filters = document.querySelector(".identify-filters");
      if (filters) filterScroll = filters.scrollTop;
    } else {
      seasonOpen = false;
    }
    closeLightbox();
    var route = parse();
    var model = viewModel(route);
    document.getElementById("app").innerHTML = model.html;
    setMeta(model, route.lang);
    if (keep) {
      window.scrollTo(0, y);
      var nextFilters = document.querySelector(".identify-filters");
      if (nextFilters) nextFilters.scrollTop = filterScroll;
      if (pendingFocus) {
        var focused = document.querySelector(pendingFocus);
        pendingFocus = "";
        if (focused) focused.focus();
      }
    }
    var input = document.getElementById("q");
    if (input) input.addEventListener("input", function () {
      var box = document.getElementById("results");
      if (box) box.innerHTML = resultsHtml(input.value, route.lang);
    });
  }

  document.addEventListener("click", function (event) {
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
    var seasonToggle = event.target.closest("[data-season-toggle]");
    if (seasonToggle) {
      seasonOpen = !seasonOpen;
      pendingFocus = "[data-season-toggle]";
      render({ keepScroll: true });
      return;
    }
    var keyBtn = event.target.closest("[data-key]");
    if (keyBtn) {
      var axis = keyBtn.getAttribute("data-key");
      var id = keyBtn.getAttribute("data-id") || "";
      if (axis === "clear") {
        seasonOpen = false;
        writeSelection({ under: "", where: "", color: "", season: "" });
        return;
      }
      var selection = readSelection();
      selection[axis] = selection[axis] === id ? "" : id;
      if (axis === "season") {
        seasonOpen = false;
        pendingFocus = "[data-season-toggle]";
      } else {
        pendingFocus = '[data-key="' + axis + '"][data-id="' + id + '"]';
      }
      writeSelection(selection);
      return;
    }
    var link = event.target.closest("a");
    if (!link) return;
    var url = new URL(link.href, location.origin);
    if (url.origin !== location.origin) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    if (url.pathname === location.pathname && url.hash) return;
    event.preventDefault();
    go(url.pathname + url.search);
  });

  document.addEventListener("change", function (event) {
    if (!event.target.classList || !event.target.classList.contains("lang-select")) return;
    var route = parse();
    var path = location.pathname;
    if (route.lang === "sk") path = path.replace(/^\/sk(?=\/|$)/, "") || "/";
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
    if (event.key === "Escape" && seasonOpen) {
      event.preventDefault();
      seasonOpen = false;
      pendingFocus = "[data-season-toggle]";
      render({ keepScroll: true });
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

  window.addEventListener("popstate", render);
  render();
})();
