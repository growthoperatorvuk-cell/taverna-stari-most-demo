// Svi podaci o restoranu na jednom mestu. Za novog klijenta menja se samo ovaj fajl + frames/.
window.SITE = {
  name: "Taverna Stari Most",
  city: "Vrbas",
  tagline: { sr: "Tradicija i moderna kuhinja, na obali kanala.", en: "Tradition meets modern cuisine, by the canal." },
  phone: "+381622224242",
  phoneLabel: "062 / 22-42-42",
  email: "info@tavernastarimost.rs",
  address: "Ise Sekickog 33, 21460 Vrbas",
  geo: [45.570072, 19.654779],
  hours: { sr: "Svaki dan 08:00 – 22:30", en: "Every day 08:00 – 22:30" },
  delivery: { sr: "Dostava 08–23h · 280 RSD po Vrbasu", en: "Delivery 08–23h · 280 RSD within Vrbas" },
  orderUrl: "https://www.tavernastarimost.rs/", // postojeći Sky POS — ne diramo ga
  instagram: "https://www.instagram.com/taverna.starimost/",
  facebook: "https://www.facebook.com/p/Taverna-Stari-Most-61559095730301/",
  sister: { name: "Riblja čarda Stari Most", url: "https://www.instagram.com/ribljacarda.starimost/" },
  rating: { score: "4.8", count: 133, source: "Restaurant Guru", url: "https://restaurantguru.com/Taverna-Stari-Most-Vrbas" },

  // Obilazak: kadrovi sa terena (26.09.2026), sređeni u Higgsfield-u (GPT Image 2.5), prelazi Kling 3.0 pro.
  // video/pK.mp4 = scena K-1 → K, video/nK.mp4 = unazad, video/sK.webp = mirni kadar scene K.
  tour: { dir: "video/", rate: 1.5 },
  scenes: [
    { label: { sr: "Ise Sekickog 33 · Vrbas", en: "Ise Sekickog 33 · Vrbas" }, hero: true,
      title: { sr: "Taverna<br><em>Stari Most</em>", en: "Taverna<br><em>Stari Most</em>" },
      text: { sr: "Tradicija i moderna kuhinja, na obali kanala.", en: "Tradition meets modern cuisine, by the canal." } },
    { label: { sr: "Terasa", en: "The terrace" },
      title: { sr: "Veče pod<br><em>toplim svetlima.</em>", en: "Evenings under<br><em>warm lights.</em>" },
      text: { sr: "Pravo kroz sredinu terase, do kliznih vrata.", en: "Straight through the terrace, to the sliding doors." } },
    { label: { sr: "Sala", en: "The hall" },
      title: { sr: "Pod drvenim<br><em>gredama.</em>", en: "Under the<br><em>wooden beams.</em>" },
      text: { sr: "Luster, drvo i šank — prva sala.", en: "Chandelier, wood and the bar — the first hall." } },
    { label: { sr: "Za vaše društvo", en: "For your company" }, end: true,
      title: { sr: "Toplo, kao<br><em>kod kuće.</em>", en: "Warm, like<br><em>at home.</em>" },
      text: { sr: "Svaki dan 08:00 – 22:30<br>Rezervacije 062 / 22-42-42", en: "Every day 08:00 – 22:30<br>Bookings 062 / 22-42-42" } }
  ],

  // img: privremeno sa njihovog Instagrama (640px) — zameniti profi fotkama
  signature: [
    { name: { sr: "Brancin i orada sa roštilja", en: "Grilled sea bass & bream" }, note: { sr: "sveža riba · 100 g", en: "fresh fish · 100 g" }, price: 470, img: "img/riba-rostilj.webp" },
    { name: { sr: "Mediteraneo paelja", en: "Mediterranean paella" }, note: { sr: "za dve osobe", en: "for two" }, price: 3400, img: "img/paelja.webp" },
    { name: { sr: "Jagnjeće pečenje sa ražnja", en: "Spit-roasted lamb" }, note: { sr: "po kilogramu", en: "per kilogram" }, price: 3600 },
    { name: { sr: "Mix buzara", en: "Seafood buzara" }, note: { sr: "800 g", en: "800 g" }, price: 3600 },
    { name: { sr: "Smuđ sa dalmatinskim varivom", en: "Zander, Dalmatian stew" }, note: { sr: "rečna riba", en: "river fish" }, price: 1650 },
    { name: { sr: "Hobotnica", en: "Octopus" }, note: { sr: "200 g", en: "200 g" }, price: 2100 },
    { name: { sr: "Selekcija sushija", en: "Sushi selection" }, note: { sr: "32 kom · subotom", en: "32 pcs · Saturdays" }, price: 3800 }
  ],

  chef: {
    name: "Petar Savić",
    img: "img/sef-petar-savic.webp",
    intro: { sr: "Jela koja se završavaju pred vama — flambiranje, filetiranje i serviranje za stolom. Svako jelo najavite najmanje 24h unapred.",
             en: "Dishes finished at your table — flambéed, filleted and served in front of you. Please order at least 24h in advance." },
    items: [
      { name: { sr: "Iberico špansko prase", en: "Ibérico suckling pig" }, serves: { sr: "4–5 osoba", en: "serves 4–5" }, price: 25000,
        text: { sr: "Prase od 5–6 kg, pečeno do savršenstva. Seče se tanjirom pred gostima — hrskava korica, sočno meso.", en: "A 5–6 kg pig roasted to perfection, carved with a plate at your table — crisp skin, juicy meat." } },
      { name: { sr: "Riba u kori od soli", en: "Salt-crusted fish" }, serves: { sr: "3–4 osobe", en: "serves 3–4" }, price: 12000,
        text: { sr: "Brancin, orada ili zubatac od oko 2 kg, pečen u soli. Flambiranje, razbijanje kore i filiranje pred gostima.", en: "Sea bass, bream or dentex (~2 kg) baked in salt, flambéed and filleted at the table." } },
      { name: { sr: "Riba na azijski način", en: "Asian-style whole fish" }, serves: { sr: "3–4 osobe", en: "serves 3–4" }, price: 12000,
        text: { sr: "Brancin, romb ili zubatac na pari sa povrćem, sakeom i terijaki sosom. Flambiranje i serviranje pred gostima.", en: "Sea bass, turbot or dentex steamed with vegetables, sake and teriyaki, flambéed at the table." } },
      { name: { sr: "Taljatele sa jastogom i morskim plodovima", en: "Tagliatelle with lobster & seafood" }, serves: { sr: "2–3 osobe", en: "serves 2–3" }, price: 12000,
        text: { sr: "Jastog od oko 1 kg u mediteranskom sosu, sa svežim taljatelama i školjkama. Završava se pred gostima.", en: "A ~1 kg lobster in Mediterranean sauce with fresh tagliatelle and clams, finished at the table." } },
      { name: { sr: "Jagnjeća plećka dry age ispod sača", en: "Dry-aged lamb shoulder under the sač" }, serves: { sr: "2–3 osobe", en: "serves 2–3" }, price: 10000,
        text: { sr: "Spora obrada pod sačem daje izuzetnu sočnost i aromu. Tranšira se pred gostima, uz tradicionalne priloge.", en: "Slow-cooked under the sač for exceptional tenderness, carved at the table with traditional sides." } },
      { name: { sr: "Hobotnica sa povrćem ispod sača", en: "Octopus & vegetables under the sač" }, serves: { sr: "2 osobe", en: "serves 2" }, price: 4900,
        text: { sr: "Spoj mora i zemlje — hobotnica i povrće, lagano pečeni ispod sača.", en: "Sea meets land — octopus and vegetables slowly baked under the sač." } },
      { name: { sr: "Sushi plata", en: "Sushi platter" }, serves: { sr: "najava 5h ranije", en: "order 5h ahead" }, price: 3600,
        text: { sr: "Dragon, Philadelphia, California i Tuna Spicy roll.", en: "Dragon, Philadelphia, California and spicy tuna rolls." } }
    ]
  },

  // galerija ambijenta — kadrovi sa terena (26.09.2026), sređeni u Higgsfield-u; vlasnik treba da odobri
  gallery: ["img/ambijent-sala.webp", "img/ambijent-terasa.webp", "img/ambijent-basta.webp", "img/ambijent-kuca.webp", "img/ambijent-enterijer.webp", "img/ambijent-ulica.webp"],

  eventsImg: "img/svirka-basta.webp",
  events: [
    { date: "2026-10-04", time: "17:00", title: { sr: "Ljubav ima svoj zvuk", en: "Love has its own sound" },
      text: { sr: "Veče sa Vesnom Dedić uz zvuke saksofona.", en: "An evening with Vesna Dedić and saxophone." } },
    { weekly: { sr: "Svake subote", en: "Every Saturday" }, title: { sr: "Azija & sushi", en: "Asia & sushi" },
      text: { sr: "Rolnice, nigiri i azijski specijaliteti.", en: "Rolls, nigiri and Asian specials." } }
  ],

  menu: [
    { cat: { sr: "Doručak", en: "Breakfast" }, items: [
      ["Benedikt jaje, hrskava slanina", "250 g", 650],
      ["Benedikt jaje, dimljeni losos", "250 g", 950],
      ["Benedikt jaje, pršut", "250 g", 750],
      ["Jaja i slanina", "200 g", 420],
      ["Vojvođanski doručak", "", 650]
    ]},
    { cat: { sr: "Hladna predjela", en: "Cold starters" }, items: [
      ["Bruskete Montenegro", "200 g", 490],
      ["Bruskete Taverna, losos", "200 g", 750],
      ["Carpaccio tuna i losos", "", 1280],
      ["Plata raznovrsnih sireva", "200 g", 650],
      ["Tartar biftek", "200 g", 1500],
      ["Carpaccio bif", "150 g", 1150],
      ["Tartar losos", "200 g", 1350],
      ["Tartar tuna", "200 g", 1600]
    ]},
    { cat: { sr: "Topla predjela i finger food", en: "Warm starters & finger food" }, items: [
      ["Punjene paprike sa sirom", "300 g", 770],
      ["Šogan dolma", "300 g", 750],
      ["Bufalo pileća krilca u ljutom sosu", "", 680],
      ["Pohovane lignje sa pomfritom", "", 1150],
      ["Girice", "450 g", 650],
      ["Pileći štapići u panko prezli", "", 680]
    ]},
    { cat: { sr: "Supe i čorbe", en: "Soups" }, items: [
      ["Jagnjeća čorba", "450 ml", 560],
      ["Pileća supa", "400 ml", 450],
      ["Potaž dana", "400 ml", 450],
      ["Riblji paprikaš", "600 ml", 750]
    ]},
    { cat: { sr: "Roštilj i ražanj", en: "Grill & spit roast" }, items: [
      ["Jagnjeće pečenje", "1 kg", 3600],
      ["Praseće pečenje", "1 kg", 2500],
      ["Roštilj mix za 3 osobe", "", 3500],
      ["Svinjski tomahawk", "", 1600]
    ]},
    { cat: { sr: "Šefov mesni meni", en: "Chef's meat dishes" }, items: [
      ["Dimljena svinjska rebarca", "450 g", 1200],
      ["Karađorđeva šnicla", "450 g", 1400],
      ["Njeguški stek", "", 1300],
      ["Piletina Mediteraneo", "450 g", 1250],
      ["Svinjski medaljoni u sosu od pečuraka", "", 1300],
      ["Valdo piletina", "450 g", 1050]
    ]},
    { cat: { sr: "Za gurmane", en: "For the gourmet" }, items: [
      ["Chili con carne", "", 1250],
      ["Juneći gulaš", "350 ml", 1100],
      ["Juneći repovi u saftu", "350 g", 1890],
      ["Pohovani svinjski mozak", "250 g", 760],
      ["Teleća džigerica", "300 g", 890],
      ["Teleće brizle", "300 g", 850],
      ["Vojvođanska paelja za dve osobe", "", 4500],
      ["Žablji bataci", "250 g", 1500]
    ]},
    { cat: { sr: "Rečna riba", en: "River fish" }, items: [
      ["Dimljeni file pastrmke / šarana", "", 1350],
      ["Pastrmka punjena azijskom rižom", "", 1200],
      ["Šaran potkovica, dalmatinsko varivo", "", 1100],
      ["Smuđ, dalmatinsko varivo", "", 1650]
    ]},
    { cat: { sr: "Morska riba", en: "Sea fish" }, items: [
      ["Brancin", "100 g", 470],
      ["Orada", "100 g", 470],
      ["Losos", "100 g", 680],
      ["Rombac", "100 g", 680],
      ["Tuna", "100 g", 680],
      ["Riba I kategorije", "100 g", 470],
      ["Riblji file extra kategorije", "", 680],
      ["Fileti dimljene skuše", "", 1200]
    ]},
    { cat: { sr: "Školjke i morski plodovi", en: "Shellfish & seafood" }, items: [
      ["Crni špageti vongole", "250 g", 1120],
      ["Crni rižoto", "250 g", 980],
      ["Gambori", "200 g", 1450],
      ["Panko gambori", "300 g", 1200],
      ["Hobotnica", "200 g", 2100],
      ["Lignje", "220 g", 1600],
      ["Mediteraneo paelja za dve osobe", "", 3400],
      ["Mix buzara", "800 g", 3600],
      ["Mušlje na buzaru", "400 g", 890],
      ["Šafran rižoto sa gamborima", "", 1200]
    ]},
    { cat: { sr: "Paste i rižota", en: "Pasta & risotto" }, items: [
      ["Lingvini carbonara", "250 g", 790],
      ["Lingvini plodovi mora", "250 g", 1100],
      ["Njoke gorgonzola", "250 g", 850],
      ["Taljatele bolonjeze", "250 g", 850],
      ["Rižoto sa morskim plodovima", "", 1050],
      ["Rižoto, piletina i gorgonzola", "", 850],
      ["Rižoto, piletina i kari", "", 850],
      ["Rižoto, piletina i spanać", "", 850]
    ]},
    { cat: { sr: "Sushi i Azija", en: "Sushi & Asian" }, items: [
      ["California roll", "8 kom", 1200],
      ["Green Dragon roll", "8 kom", 1200],
      ["Philadelphia roll", "8 kom", 1200],
      ["Samurai roll", "8 kom", 1200],
      ["Spicy tuna roll", "8 kom", 1200],
      ["Nigiri", "", 350],
      ["Selekcija sushija", "32 kom", 3800],
      ["Kung pao piletina", "400 g", 1290],
      ["Tuna tataki", "200 g", 1350]
    ]},
    { cat: { sr: "Salate", en: "Salads" }, items: [
      ["Beef salata", "450 g", 890],
      ["Cezar salata", "450 g", 850],
      ["Tuna salata", "300 g", 990],
      ["Caprese", "250 g", 450],
      ["Grčka salata", "250 g", 460],
      ["Šopska salata", "270 g", 390],
      ["Srpska salata", "", 370],
      ["Sezonska salata za 2 osobe", "", 550],
      ["Pečena paprika, slatka / ljuta", "2 kom", 250]
    ]},
    { cat: { sr: "Sendviči i tortilje", en: "Sandwiches & wraps" }, items: [
      ["Burito, jagnjeće / juneće meso", "", 680],
      ["Čimičanga", "350 g", 750],
      ["Croque sendvič", "250 g", 450]
    ]},
    { cat: { sr: "Vegan", en: "Vegan" }, items: [
      ["Grilovano / bareno povrće", "300 g", 650],
      ["Humus bruskete", "150 g", 750],
      ["Pirinač sa povrćem", "300 g", 650],
      ["Vegito burito", "350 g", 650]
    ]},
    { cat: { sr: "Prilozi", en: "Sides" }, items: [
      ["Dalmatinsko varivo / riža sa povrćem", "", 250],
      ["Grilovano povrće", "", 250],
      ["Pire krompir", "", 250]
    ]},
    { cat: { sr: "Dezerti", en: "Desserts" }, items: [
      ["Domaća baklava", "", 350],
      ["Čurosi sa čokoladnim umakom", "", 490],
      ["Sladoled, kugla", "1 kom", 120]
    ]}
  ]
};
