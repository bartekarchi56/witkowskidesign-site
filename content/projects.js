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
    slug: "apartment-brera",
    placeholder: true,
    title: { en: "Apartment in Brera", it: "Appartamento a Brera", pl: "Apartament na Brerze" },
    categories: ["interiors", "visualisation"],
    featured: true,
    year: "2025",
    client: { en: "[Placeholder] Private client", it: "[Segnaposto] Cliente privato", pl: "[Przykład] Klient prywatny" },
    place: { en: "Milan, Italy", it: "Milano, Italia", pl: "Mediolan, Włochy" },
    scope: { en: "Interior design, furniture, renders", it: "Progetto d'interni, arredi, rendering", pl: "Projekt wnętrza, meble, wizualizacje" },
    summary: {
      en: "[Placeholder text] A 1900s apartment opened up around one long oak wall.",
      it: "[Testo segnaposto] Un appartamento del Novecento aperto attorno a una lunga parete in rovere.",
      pl: "[Tekst przykładowy] Kamienicowe mieszkanie otwarte wokół jednej długiej dębowej ściany."
    },
    text: {
      en: ["[Placeholder text] Replace this with a short description of the project: the brief, the main idea and one detail you are proud of. Two or three short paragraphs are enough."],
      it: ["[Testo segnaposto] Sostituisci questo testo con una breve descrizione del progetto: la richiesta, l'idea principale e un dettaglio di cui sei orgoglioso. Bastano due o tre paragrafi brevi."],
      pl: ["[Tekst przykładowy] Zastąp ten tekst krótkim opisem projektu: założeniami, główną ideą i jednym detalem, z którego jesteś dumny. Wystarczą dwa lub trzy krótkie akapity."]
    },
    cover: { file: "cover.jpg", alt: { en: "Placeholder image: living room with an arched opening", it: "Immagine segnaposto: soggiorno con apertura ad arco", pl: "Obraz przykładowy: salon z łukowym przejściem" } },
    images: [
      { file: "01.jpg", alt: { en: "Placeholder image: hallway in soft light", it: "Immagine segnaposto: corridoio in luce morbida", pl: "Obraz przykładowy: korytarz w miękkim świetle" } },
      { file: "02.jpg", alt: { en: "Placeholder image: detail of a stone bench", it: "Immagine segnaposto: dettaglio di una panca in pietra", pl: "Obraz przykładowy: detal kamiennej ławy" } },
      { file: "03.jpg", wide: true, alt: { en: "Placeholder image: open plan living area", it: "Immagine segnaposto: zona giorno open space", pl: "Obraz przykładowy: otwarta strefa dzienna" } }
    ]
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
    slug: "townhouse-krakow",
    placeholder: true,
    title: { en: "Townhouse in Kraków", it: "Casa a Cracovia", pl: "Kamienica w Krakowie" },
    categories: ["interiors"],
    featured: true,
    year: "2024",
    client: { en: "[Placeholder] Private client", it: "[Segnaposto] Cliente privato", pl: "[Przykład] Klient prywatny" },
    place: { en: "Kraków, Poland", it: "Cracovia, Polonia", pl: "Kraków, Polska" },
    scope: { en: "Full interior design, custom joinery", it: "Progetto d'interni completo, falegnameria su misura", pl: "Pełny projekt wnętrza, zabudowy na wymiar" },
    summary: {
      en: "[Placeholder text] Three floors, one material palette, light from above.",
      it: "[Testo segnaposto] Tre piani, una sola palette di materiali, luce dall'alto.",
      pl: "[Tekst przykładowy] Trzy kondygnacje, jedna paleta materiałów, światło z góry."
    },
    text: {
      en: ["[Placeholder text] Replace this with a short description of the project."],
      it: ["[Testo segnaposto] Sostituisci questo testo con una breve descrizione del progetto."],
      pl: ["[Tekst przykładowy] Zastąp ten tekst krótkim opisem projektu."]
    },
    cover: { file: "cover.jpg", alt: { en: "Placeholder image: stairwell with daylight from above", it: "Immagine segnaposto: vano scala con luce dall'alto", pl: "Obraz przykładowy: klatka schodowa ze światłem z góry" } },
    images: [
      { file: "01.jpg", alt: { en: "Placeholder image: kitchen niche", it: "Immagine segnaposto: nicchia cucina", pl: "Obraz przykładowy: wnęka kuchenna" } },
      { file: "02.jpg", alt: { en: "Placeholder image: bedroom wall", it: "Immagine segnaposto: parete della camera", pl: "Obraz przykładowy: ściana sypialni" } },
      { file: "03.jpg", wide: true, alt: { en: "Placeholder image: dining room", it: "Immagine segnaposto: sala da pranzo", pl: "Obraz przykładowy: jadalnia" } }
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
