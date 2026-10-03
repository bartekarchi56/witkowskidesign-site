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
    slug: "motor-yacht-maestrale",
    placeholder: true,
    title: { en: "Motor yacht Maestrale", it: "Motor yacht Maestrale", pl: "Jacht motorowy Maestrale" },
    categories: ["yachts", "interiors"],
    featured: true,
    year: "2025",
    client: { en: "[Placeholder] Shipyard", it: "[Segnaposto] Cantiere", pl: "[Przykład] Stocznia" },
    place: { en: "24 m motor yacht", it: "Motor yacht di 24 m", pl: "Jacht motorowy 24 m" },
    scope: { en: "Saloon and owner's suite, materials, lighting", it: "Salone e suite armatoriale, materiali, illuminazione", pl: "Salon i apartament armatora, materiały, oświetlenie" },
    summary: {
      en: "[Placeholder text] A saloon in pale oak and linen, built around the view.",
      it: "[Testo segnaposto] Un salone in rovere chiaro e lino, costruito attorno alla vista.",
      pl: "[Tekst przykładowy] Salon z jasnego dębu i lnu, zbudowany wokół widoku."
    },
    text: {
      en: ["[Placeholder text] Replace this with a short description of the project: the boat, the owner's wishes and how the interior answers them."],
      it: ["[Testo segnaposto] Sostituisci questo testo con una breve descrizione del progetto: la barca, i desideri dell'armatore e come l'interno risponde."],
      pl: ["[Tekst przykładowy] Zastąp ten tekst krótkim opisem projektu: jachtu, oczekiwań armatora i tego, jak wnętrze na nie odpowiada."]
    },
    cover: { file: "cover.jpg", alt: { en: "Placeholder image: yacht saloon facing the sea", it: "Immagine segnaposto: salone di yacht vista mare", pl: "Obraz przykładowy: salon jachtu z widokiem na morze" } },
    images: [
      { file: "01.jpg", wide: true, alt: { en: "Placeholder image: owner's suite", it: "Immagine segnaposto: suite armatoriale", pl: "Obraz przykładowy: apartament armatora" } },
      { file: "02.jpg", alt: { en: "Placeholder image: stair detail", it: "Immagine segnaposto: dettaglio della scala", pl: "Obraz przykładowy: detal schodów" } },
      { file: "03.jpg", alt: { en: "Placeholder image: porthole and berth", it: "Immagine segnaposto: oblò e letto", pl: "Obraz przykładowy: iluminator i koja" } }
    ]
  },


  {
    slug: "sailing-yacht-tramontana",
    placeholder: true,
    title: { en: "Sailing yacht Tramontana", it: "Barca a vela Tramontana", pl: "Jacht żaglowy Tramontana" },
    categories: ["yachts", "visualisation"],
    year: "2024",
    client: { en: "[Placeholder] Private owner", it: "[Segnaposto] Armatore privato", pl: "[Przykład] Armator prywatny" },
    place: { en: "18 m sailing yacht, refit", it: "Barca a vela di 18 m, refit", pl: "Jacht żaglowy 18 m, refit" },
    scope: { en: "Interior refit, renders for approval", it: "Refit degli interni, rendering per approvazione", pl: "Refit wnętrza, wizualizacje do akceptacji" },
    summary: {
      en: "[Placeholder text] A classic hull with a lighter, quieter interior.",
      it: "[Testo segnaposto] Uno scafo classico con un interno più leggero e silenzioso.",
      pl: "[Tekst przykładowy] Klasyczny kadłub z jaśniejszym, spokojniejszym wnętrzem."
    },
    text: {
      en: ["[Placeholder text] Replace this with a short description of the project."],
      it: ["[Testo segnaposto] Sostituisci questo testo con una breve descrizione del progetto."],
      pl: ["[Tekst przykładowy] Zastąp ten tekst krótkim opisem projektu."]
    },
    cover: { file: "cover.jpg", alt: { en: "Placeholder image: sailing yacht cabin with portholes", it: "Immagine segnaposto: cabina di barca a vela con oblò", pl: "Obraz przykładowy: kabina jachtu żaglowego z iluminatorami" } },
    images: [
      { file: "01.jpg", wide: true, alt: { en: "Placeholder image: saloon table", it: "Immagine segnaposto: tavolo del salone", pl: "Obraz przykładowy: stół w salonie" } },
      { file: "02.jpg", alt: { en: "Placeholder image: forward cabin", it: "Immagine segnaposto: cabina di prua", pl: "Obraz przykładowy: kabina dziobowa" } }
    ]
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
