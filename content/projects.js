/*
  WITKOWSKI DESIGN · PROJECTS
  ---------------------------
  Every project on the site comes from this list. To add one:

  1. Make a folder:  projects/<slug>/       (slug = short name, lowercase, dashes, e.g. "villa-garda")
  2. Upload the photos into it: cover.jpg (the big main photo) plus the gallery (01.jpg, 02.jpg, ...).
     Full-size photos are fine: the site shrinks and compresses them automatically when it publishes.
  3. Copy one entry below, paste it where you want it in the list and edit it.

  Texts can be one string (used for all languages) or { en, it, pl }.
  Categories: "interiors", "yachts", "products", "visualisation", "branding"
  featured: true     -> shown in the full-screen slideshow on the home page
  placeholder: true  -> shows a "Placeholder" tag; delete that line for real projects

  Images can be just file names:   images: ["01.jpg", "02.jpg", "03.jpg"]
  or, to add a description (alt text), a full-width image or a crop point:
    { file: "01.jpg", wide: true, focus: "50% 70%", alt: { en: "...", it: "...", pl: "..." } }
  wide: true   -> the image spans the full width of the gallery
  focus        -> which part of the photo stays visible when it is cropped (left/right, then top/bottom)
*/
window.WD_PROJECTS = [
  {
    slug: "lamare-pola-negri",
    title: "Lamare Club Pola Negri",
    categories: ["interiors", "yachts"],
    featured: true,
    year: "",
    client: "LAMARE Houseboats",
    place: { en: "Houseboat, Lamare Club", it: "Houseboat, Lamare Club", pl: "Dom na wodzie, Lamare Club" },
    scope: { en: "Interior design", it: "Progetto d'interni", pl: "Projekt wnętrza" },
    summary: {
      en: "A houseboat interior for LAMARE Houseboats at Lamare Club Pola Negri.",
      it: "Un interno di houseboat per LAMARE Houseboats al Lamare Club Pola Negri.",
      pl: "Wnętrze domu na wodzie dla LAMARE Houseboats w Lamare Club Pola Negri."
    },
    text: {
      en: [
        "A houseboat interior for LAMARE Houseboats, Lamare Club Pola Negri.",
        "Oak laid in a chevron pattern, dark timber wall panels and full-height windows that bring the light and the movement of the water inside."
      ],
      it: [
        "Un interno di houseboat per LAMARE Houseboats, Lamare Club Pola Negri.",
        "Rovere posato a spina ungherese, pannelli a parete in legno scuro e finestre a tutta altezza che portano dentro la luce e il movimento dell'acqua."
      ],
      pl: [
        "Wnętrze domu na wodzie dla LAMARE Houseboats, Lamare Club Pola Negri.",
        "Dąb ułożony w jodełkę francuską, ciemne drewniane panele ścienne i okna od podłogi do sufitu, które wpuszczają do środka światło i ruch wody."
      ]
    },
    cover: {
      file: "cover.jpg",
      focus: "50% 58%",
      alt: {
        en: "Oak chevron floor, dark timber wall and a full-height window onto the water",
        it: "Pavimento in rovere a spina ungherese, parete in legno scuro e finestra a tutta altezza sull'acqua",
        pl: "Dębowa podłoga w jodełkę francuską, ciemna drewniana ściana i okno od podłogi do sufitu z widokiem na wodę"
      }
    },
    images: []
  },

  {
    slug: "kitchen-sokole-kuznica",
    title: { en: "Kitchen, Sokole Kuźnica", it: "Cucina, Sokole Kuźnica", pl: "Kuchnia, Sokole Kuźnica" },
    categories: ["interiors", "visualisation"],
    featured: true,
    year: "",
    client: "",
    place: { en: "Residential complex, Sokole Kuźnica", it: "Complesso residenziale, Sokole Kuźnica", pl: "Osiedle mieszkaniowe, Sokole Kuźnica" },
    scope: { en: "Kitchen design, 3D visualisation", it: "Progetto della cucina, visualizzazione 3D", pl: "Projekt kuchni, wizualizacja 3D" },
    summary: {
      en: "Kitchen design and 3D visualisation for a home in a residential complex in Sokole Kuźnica.",
      it: "Progetto e visualizzazione 3D di una cucina per un'abitazione in un complesso residenziale a Sokole Kuźnica.",
      pl: "Projekt i wizualizacja 3D kuchni dla mieszkania na osiedlu Sokole Kuźnica."
    },
    text: {
      en: [
        "A kitchen for a home in a residential complex in Sokole Kuźnica.",
        "A veined stone island with waterfall sides, dark wood joinery and copper fittings under a cluster of glass pendants. Tall steel-framed windows open the room to the garden."
      ],
      it: [
        "Una cucina per un'abitazione in un complesso residenziale a Sokole Kuźnica.",
        "Un'isola in pietra venata con fianchi a cascata, arredi in legno scuro e finiture in rame sotto un grappolo di sospensioni in vetro. Alte finestre con telaio in acciaio aprono la stanza sul giardino."
      ],
      pl: [
        "Kuchnia dla mieszkania na osiedlu Sokole Kuźnica.",
        "Wyspa z żyłkowanego kamienia z bokami w formie wodospadu, ciemna drewniana zabudowa i miedziane dodatki pod kompozycją szklanych lamp. Wysokie okna w stalowych ramach otwierają wnętrze na ogród."
      ]
    },
    cover: {
      file: "cover.jpg",
      alt: {
        en: "Kitchen with a veined stone island, dark wood cabinets, copper bar stools and glass pendant lights, 3D render",
        it: "Cucina con isola in pietra venata, mobili in legno scuro, sgabelli in rame e lampade a sospensione in vetro, rendering 3D",
        pl: "Kuchnia z wyspą z żyłkowanego kamienia, ciemną zabudową, miedzianymi hokerami i szklanymi lampami, wizualizacja 3D"
      }
    },
    images: []
  },

  {
    slug: "metaphysical-vessel",
    title: "Metaphysical Vessel",
    categories: ["yachts", "visualisation"],
    featured: true,
    year: "",
    client: "",
    place: { en: "70 m yacht", it: "Yacht di 70 m", pl: "Jacht 70 m" },
    scope: { en: "Yacht interior design, 3D visualisation", it: "Interni per yacht, visualizzazione 3D", pl: "Projekt wnętrz jachtu, wizualizacja 3D" },
    summary: {
      en: "Interior concept and 3D visualisation for a 70 metre yacht.",
      it: "Concept degli interni e visualizzazione 3D per uno yacht di 70 metri.",
      pl: "Koncepcja wnętrz i wizualizacja 3D jachtu o długości 70 metrów."
    },
    text: {
      en: [
        "Interior concept for a 70 metre yacht.",
        "The main saloon runs the full beam between walls of glass: a long stone dining table at the centre, lounges on either side, and a sculpted spiral stair rising through an oval opening in the timber ceiling. Mirror-polished columns reflect the sea back into the room."
      ],
      it: [
        "Concept degli interni per uno yacht di 70 metri.",
        "Il salone principale occupa tutto il baglio tra pareti di vetro: un lungo tavolo da pranzo in pietra al centro, salotti ai lati e una scala elicoidale scultorea che sale attraverso un'apertura ovale nel soffitto in legno. Colonne a specchio riflettono il mare all'interno."
      ],
      pl: [
        "Koncepcja wnętrz jachtu o długości 70 metrów.",
        "Główny salon zajmuje całą szerokość jachtu między szklanymi ścianami: długi kamienny stół w centrum, strefy wypoczynku po obu stronach i rzeźbiarskie schody spiralne wznoszące się przez owalny otwór w drewnianym suficie. Lustrzane kolumny odbijają morze z powrotem do wnętrza."
      ]
    },
    cover: {
      file: "cover.jpg",
      alt: {
        en: "Main saloon of a 70 metre yacht with a long dining table, lounges, a spiral staircase and glass walls onto the sea, 3D render",
        it: "Salone principale di uno yacht di 70 metri con lungo tavolo da pranzo, salotti, scala elicoidale e pareti di vetro sul mare, rendering 3D",
        pl: "Główny salon jachtu 70 m z długim stołem, strefami wypoczynku, schodami spiralnymi i szklanymi ścianami z widokiem na morze, wizualizacja 3D"
      }
    },
    images: []
  },

  {
    slug: "kitchen-apartment-bydgoszcz",
    title: { en: "Apartment kitchen, Bydgoszcz", it: "Cucina di un appartamento, Bydgoszcz", pl: "Kuchnia w mieszkaniu, Bydgoszcz" },
    categories: ["interiors", "visualisation"],
    featured: true,
    year: "",
    client: "",
    place: { en: "Bydgoszcz, Poland", it: "Bydgoszcz, Polonia", pl: "Bydgoszcz, Polska" },
    scope: { en: "Kitchen design, 3D visualisation", it: "Progetto della cucina, visualizzazione 3D", pl: "Projekt kuchni, wizualizacja 3D" },
    summary: {
      en: "Kitchen design and 3D visualisation for an apartment in Bydgoszcz.",
      it: "Progetto e visualizzazione 3D della cucina di un appartamento a Bydgoszcz.",
      pl: "Projekt i wizualizacja 3D kuchni w mieszkaniu w Bydgoszczy."
    },
    text: {
      en: [
        "A kitchen for an apartment in Bydgoszcz.",
        "A white stone island runs into a timber dining table on glass legs, so cooking and eating share one long surface. Handleless white cabinetry, glass-fronted upper cupboards in black frames and a wire pendant keep the room light."
      ],
      it: [
        "Una cucina per un appartamento a Bydgoszcz.",
        "Un'isola in pietra bianca prosegue in un tavolo in legno su gambe di vetro, così cucinare e mangiare condividono un unico lungo piano. Mobili bianchi senza maniglie, pensili in vetro con telaio nero e una sospensione in filo metallico mantengono la stanza luminosa."
      ],
      pl: [
        "Kuchnia w mieszkaniu w Bydgoszczy.",
        "Wyspa z białego kamienia przechodzi w drewniany stół na szklanych nogach, więc gotowanie i jedzenie dzielą jeden długi blat. Białe fronty bez uchwytów, przeszklone górne szafki w czarnych ramach i druciana lampa sprawiają, że wnętrze pozostaje jasne."
      ]
    },
    cover: {
      file: "cover.jpg",
      alt: {
        en: "Kitchen with a white stone island, a timber dining table on glass legs and a large wire pendant, 3D render",
        it: "Cucina con isola in pietra bianca, tavolo in legno su gambe di vetro e grande sospensione in filo metallico, rendering 3D",
        pl: "Kuchnia z wyspą z białego kamienia, drewnianym stołem na szklanych nogach i dużą drucianą lampą, wizualizacja 3D"
      }
    },
    images: []
  },


  {
    slug: "gucci-restaurant-secret-manor",
    title: "Gucci Restaurant, The Secret Manor",
    categories: ["interiors", "visualisation"],
    featured: true,
    year: "",
    client: "",
    place: { en: "The Secret Manor, Milan", it: "The Secret Manor, Milano", pl: "The Secret Manor, Mediolan" },
    scope: { en: "Restaurant interior design, 3D visualisation", it: "Progetto d'interni del ristorante, visualizzazione 3D", pl: "Projekt wnętrza restauracji, wizualizacja 3D" },
    summary: {
      en: "Restaurant and bar interior and 3D visualisation, The Secret Manor, Milan.",
      it: "Interni e visualizzazione 3D di un ristorante con bar, The Secret Manor, Milano.",
      pl: "Projekt i wizualizacja 3D wnętrza restauracji z barem, The Secret Manor w Mediolanie."
    },
    text: {
      en: [
        "Restaurant and bar interior, The Secret Manor, Milan.",
        "A round bar stands at the centre under a fluted copper canopy that holds the bottles. The counter glows through red stone above a base of green glazed tiles, ringed by a brass footrest. Persian rugs, red velvet and arched floral booths keep the room warm and theatrical."
      ],
      it: [
        "Interno di ristorante e bar, The Secret Manor, Milano.",
        "Un bancone circolare al centro, sotto un baldacchino in rame scanalato che ospita le bottiglie. Il piano si illumina attraverso la pietra rossa, sopra una base di piastrelle verdi smaltate cinta da un poggiapiedi in ottone. Tappeti persiani, velluto rosso e nicchie ad arco con tessuti floreali rendono la sala calda e teatrale."
      ],
      pl: [
        "Wnętrze restauracji i baru, The Secret Manor w Mediolanie.",
        "Okrągły bar stoi w centrum pod żłobionym miedzianym baldachimem, na którym stoją butelki. Blat z czerwonego kamienia jest podświetlony od środka, a podstawę z zielonych glazurowanych płytek otacza mosiężny podnóżek. Perskie dywany, czerwony aksamit i łukowe loże w kwiatowych tkaninach nadają sali ciepły, teatralny charakter."
      ]
    },
    cover: {
      file: "cover.jpg",
      alt: {
        en: "Round bar under a copper canopy with a red stone counter, green tiles and velvet stools on Persian rugs, 3D render",
        it: "Bancone circolare sotto un baldacchino in rame, con piano in pietra rossa, piastrelle verdi e sgabelli in velluto su tappeti persiani, rendering 3D",
        pl: "Okrągły bar pod miedzianym baldachimem z blatem z czerwonego kamienia, zielonymi płytkami i aksamitnymi hokerami na perskich dywanach, wizualizacja 3D"
      }
    },
    images: []
  },

  {
    slug: "onda-lamp",
    placeholder: true,
    title: { en: "Onda lamp", it: "Lampada Onda", pl: "Lampa Onda" },
    categories: ["products", "visualisation"],
    year: "2025",
    client: { en: "[Placeholder] Lighting brand", it: "[Segnaposto] Marchio di illuminazione", pl: "[Przykład] Marka oświetleniowa" },
    place: { en: "Product design", it: "Design di prodotto", pl: "Projekt produktu" },
    scope: { en: "Industrial design, prototyping, product renders", it: "Design industriale, prototipazione, rendering di prodotto", pl: "Wzornictwo przemysłowe, prototyp, wizualizacje produktu" },
    summary: {
      en: "[Placeholder text] A table lamp in turned brass and opal glass.",
      it: "[Testo segnaposto] Una lampada da tavolo in ottone tornito e vetro opale.",
      pl: "[Tekst przykładowy] Lampa stołowa z toczonego mosiądzu i szkła opalowego."
    },
    text: {
      en: ["[Placeholder text] Replace this with a short description of the product."],
      it: ["[Testo segnaposto] Sostituisci questo testo con una breve descrizione del prodotto."],
      pl: ["[Tekst przykładowy] Zastąp ten tekst krótkim opisem produktu."]
    },
    cover: { file: "cover.jpg", alt: { en: "Placeholder image: table lamp on a plinth", it: "Immagine segnaposto: lampada da tavolo su un piedistallo", pl: "Obraz przykładowy: lampa stołowa na postumencie" } },
    images: [
      { file: "01.jpg", alt: { en: "Placeholder image: lamp detail", it: "Immagine segnaposto: dettaglio della lampada", pl: "Obraz przykładowy: detal lampy" } },
      { file: "02.jpg", alt: { en: "Placeholder image: lamp, side view", it: "Immagine segnaposto: lampada, vista laterale", pl: "Obraz przykładowy: lampa, widok z boku" } }
    ]
  },

  {
    slug: "cafe-identity",
    placeholder: true,
    title: { en: "Café identity", it: "Identità per un caffè", pl: "Identyfikacja kawiarni" },
    categories: ["branding"],
    year: "2025",
    client: { en: "[Placeholder] Specialty café", it: "[Segnaposto] Caffetteria specialty", pl: "[Przykład] Kawiarnia specialty" },
    place: { en: "Warsaw, Poland", it: "Varsavia, Polonia", pl: "Warszawa, Polska" },
    scope: { en: "Name, logo, packaging, signage", it: "Naming, logo, packaging, insegne", pl: "Nazwa, logo, opakowania, szyldy" },
    summary: {
      en: "[Placeholder text] A small identity that works on a cup, a sign and a phone.",
      it: "[Testo segnaposto] Una piccola identità che funziona su una tazza, un'insegna e un telefono.",
      pl: "[Tekst przykładowy] Niewielka identyfikacja, która działa na kubku, szyldzie i w telefonie."
    },
    text: {
      en: ["[Placeholder text] Replace this with a short description of the project."],
      it: ["[Testo segnaposto] Sostituisci questo testo con una breve descrizione del progetto."],
      pl: ["[Tekst przykładowy] Zastąp ten tekst krótkim opisem projektu."]
    },
    cover: { file: "cover.jpg", alt: { en: "Placeholder image: stationery and cards on a table", it: "Immagine segnaposto: cancelleria e biglietti su un tavolo", pl: "Obraz przykładowy: materiały firmowe i wizytówki na stole" } },
    images: [
      { file: "01.jpg", alt: { en: "Placeholder image: cup with logo", it: "Immagine segnaposto: tazza con logo", pl: "Obraz przykładowy: kubek z logo" } },
      { file: "02.jpg", alt: { en: "Placeholder image: business cards", it: "Immagine segnaposto: biglietti da visita", pl: "Obraz przykładowy: wizytówki" } }
    ]
  }
];
