/*
  WITKOWSKI DESIGN · PROJECTS
  ---------------------------
  Every project on the site comes from this list. To add one:

  1. Make a folder:  projects/<slug>/       (slug = short name, lowercase, dashes, e.g. "villa-garda")
  2. Put the images in it: cover.jpg plus any gallery images (01.jpg, 02.jpg, ...)
     Export them about 2000 px on the long side, JPEG quality 75 to 80.
  3. Copy one entry below, paste it at the top of the list and edit it.

  Texts can be one string (used for all languages) or { en, it, pl }.
  Categories: "interiors", "yachts", "products", "visualisation", "branding"
  featured: true  -> shown on the home page (the first four featured ones)
  placeholder: true -> shows a "Placeholder" tag; delete that line for real projects
  wide: true on an image -> it spans the full width in the gallery
  ratio: width / height of the image, e.g. 3/2 or 4/5 (keeps the layout steady while loading)
*/
window.WD_PROJECTS = [
  {
    slug: "la-mare",
    title: "La Mare",
    categories: ["visualisation", "yachts"],
    featured: true,
    year: "",
    client: { en: "Private", it: "Privato", pl: "Klient prywatny" },
    place: { en: "Yacht cabin", it: "Cabina di yacht", pl: "Kabina jachtu" },
    scope: {
      en: "Interior concept, 3D modelling, rendering",
      it: "Concept d'interni, modellazione 3D, rendering",
      pl: "Koncepcja wnętrza, modelowanie 3D, rendering"
    },
    summary: {
      en: "A 3D visualisation of a yacht cabin, where every surface follows the curve of the hull.",
      it: "Una visualizzazione 3D di una cabina di yacht, dove ogni superficie segue la curva dello scafo.",
      pl: "Wizualizacja 3D kabiny jachtu, w której każda powierzchnia podąża za krzywizną kadłuba."
    },
    text: {
      en: [
        "La Mare is a study of a guest cabin below deck: a small room asked to feel open, quiet and warm at the same time.",
        "Light timber lines the curved walls, the berth sits low under the portholes, and indirect light follows the joinery so the space reads as one continuous surface. The renders were built to let the owner walk through the cabin before a single panel was cut."
      ],
      it: [
        "La Mare è lo studio di una cabina ospiti sottocoperta: una stanza piccola che deve sembrare aperta, silenziosa e calda allo stesso tempo.",
        "Il legno chiaro riveste le pareti curve, il letto è basso sotto gli oblò e la luce indiretta segue gli arredi, così lo spazio si legge come un'unica superficie continua. I rendering sono stati pensati per far attraversare la cabina all'armatore prima di tagliare un solo pannello."
      ],
      pl: [
        "La Mare to studium kabiny gościnnej pod pokładem: małego pomieszczenia, które ma być jednocześnie otwarte, ciche i ciepłe.",
        "Jasne drewno pokrywa zakrzywione ściany, koja leży nisko pod iluminatorami, a światło pośrednie biegnie wzdłuż zabudowy, dzięki czemu wnętrze czyta się jak jedna ciągła powierzchnia. Wizualizacje powstały po to, by armator mógł przejść przez kabinę, zanim zostanie wycięty pierwszy panel."
      ]
    },
    cover: { file: "cover.jpg", ratio: 3 / 2, alt: { en: "La Mare: guest cabin with curved timber walls and portholes, 3D render", it: "La Mare: cabina ospiti con pareti curve in legno e oblò, rendering 3D", pl: "La Mare: kabina gościnna z zakrzywionymi drewnianymi ścianami i iluminatorami, wizualizacja 3D" } },
    images: [
      { file: "01.jpg", ratio: 3 / 2, wide: true, alt: { en: "Berth under a row of portholes", it: "Letto sotto una fila di oblò", pl: "Koja pod rzędem iluminatorów" } },
      { file: "02.jpg", ratio: 4 / 5, alt: { en: "Detail of curved timber panelling", it: "Dettaglio della boiserie curva in legno", pl: "Detal zakrzywionej boazerii" } },
      { file: "03.jpg", ratio: 4 / 5, alt: { en: "Porthole and indirect light along the joinery", it: "Oblò e luce indiretta lungo gli arredi", pl: "Iluminator i światło pośrednie wzdłuż zabudowy" } }
    ]
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
    cover: { file: "cover.jpg", ratio: 3 / 2, alt: { en: "Placeholder image: living room with an arched opening", it: "Immagine segnaposto: soggiorno con apertura ad arco", pl: "Obraz przykładowy: salon z łukowym przejściem" } },
    images: [
      { file: "01.jpg", ratio: 4 / 5, alt: { en: "Placeholder image: hallway in soft light", it: "Immagine segnaposto: corridoio in luce morbida", pl: "Obraz przykładowy: korytarz w miękkim świetle" } },
      { file: "02.jpg", ratio: 4 / 5, alt: { en: "Placeholder image: detail of a stone bench", it: "Immagine segnaposto: dettaglio di una panca in pietra", pl: "Obraz przykładowy: detal kamiennej ławy" } },
      { file: "03.jpg", ratio: 3 / 2, wide: true, alt: { en: "Placeholder image: open plan living area", it: "Immagine segnaposto: zona giorno open space", pl: "Obraz przykładowy: otwarta strefa dzienna" } }
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
    cover: { file: "cover.jpg", ratio: 3 / 2, alt: { en: "Placeholder image: yacht saloon facing the sea", it: "Immagine segnaposto: salone di yacht vista mare", pl: "Obraz przykładowy: salon jachtu z widokiem na morze" } },
    images: [
      { file: "01.jpg", ratio: 3 / 2, wide: true, alt: { en: "Placeholder image: owner's suite", it: "Immagine segnaposto: suite armatoriale", pl: "Obraz przykładowy: apartament armatora" } },
      { file: "02.jpg", ratio: 4 / 5, alt: { en: "Placeholder image: stair detail", it: "Immagine segnaposto: dettaglio della scala", pl: "Obraz przykładowy: detal schodów" } },
      { file: "03.jpg", ratio: 4 / 5, alt: { en: "Placeholder image: porthole and berth", it: "Immagine segnaposto: oblò e letto", pl: "Obraz przykładowy: iluminator i koja" } }
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
    cover: { file: "cover.jpg", ratio: 3 / 2, alt: { en: "Placeholder image: stairwell with daylight from above", it: "Immagine segnaposto: vano scala con luce dall'alto", pl: "Obraz przykładowy: klatka schodowa ze światłem z góry" } },
    images: [
      { file: "01.jpg", ratio: 4 / 5, alt: { en: "Placeholder image: kitchen niche", it: "Immagine segnaposto: nicchia cucina", pl: "Obraz przykładowy: wnęka kuchenna" } },
      { file: "02.jpg", ratio: 4 / 5, alt: { en: "Placeholder image: bedroom wall", it: "Immagine segnaposto: parete della camera", pl: "Obraz przykładowy: ściana sypialni" } },
      { file: "03.jpg", ratio: 3 / 2, wide: true, alt: { en: "Placeholder image: dining room", it: "Immagine segnaposto: sala da pranzo", pl: "Obraz przykładowy: jadalnia" } }
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
    cover: { file: "cover.jpg", ratio: 3 / 2, alt: { en: "Placeholder image: sailing yacht cabin with portholes", it: "Immagine segnaposto: cabina di barca a vela con oblò", pl: "Obraz przykładowy: kabina jachtu żaglowego z iluminatorami" } },
    images: [
      { file: "01.jpg", ratio: 3 / 2, wide: true, alt: { en: "Placeholder image: saloon table", it: "Immagine segnaposto: tavolo del salone", pl: "Obraz przykładowy: stół w salonie" } },
      { file: "02.jpg", ratio: 4 / 5, alt: { en: "Placeholder image: forward cabin", it: "Immagine segnaposto: cabina di prua", pl: "Obraz przykładowy: kabina dziobowa" } }
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
    cover: { file: "cover.jpg", ratio: 3 / 2, alt: { en: "Placeholder image: table lamp on a plinth", it: "Immagine segnaposto: lampada da tavolo su un piedistallo", pl: "Obraz przykładowy: lampa stołowa na postumencie" } },
    images: [
      { file: "01.jpg", ratio: 4 / 5, alt: { en: "Placeholder image: lamp detail", it: "Immagine segnaposto: dettaglio della lampada", pl: "Obraz przykładowy: detal lampy" } },
      { file: "02.jpg", ratio: 4 / 5, alt: { en: "Placeholder image: lamp, side view", it: "Immagine segnaposto: lampada, vista laterale", pl: "Obraz przykładowy: lampa, widok z boku" } }
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
    cover: { file: "cover.jpg", ratio: 3 / 2, alt: { en: "Placeholder image: stationery and cards on a table", it: "Immagine segnaposto: cancelleria e biglietti su un tavolo", pl: "Obraz przykładowy: materiały firmowe i wizytówki na stole" } },
    images: [
      { file: "01.jpg", ratio: 4 / 5, alt: { en: "Placeholder image: cup with logo", it: "Immagine segnaposto: tazza con logo", pl: "Obraz przykładowy: kubek z logo" } },
      { file: "02.jpg", ratio: 4 / 5, alt: { en: "Placeholder image: business cards", it: "Immagine segnaposto: biglietti da visita", pl: "Obraz przykładowy: wizytówki" } }
    ]
  }
];
