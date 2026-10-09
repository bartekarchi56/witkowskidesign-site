/*
  ABIT. STUDIO · PROJECTS
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
    slug: "unos-lounge-chair",
    title: "UNOS lounge chair",
    categories: ["products", "visualisation"],
    year: "2025",
    client: { en: "Concept for Cappellini", it: "Concept per Cappellini", pl: "Koncepcja dla Cappellini" },
    place: { en: "Concept lounge chair", it: "Chaise longue concept", pl: "Koncepcyjny leżak" },
    scope: { en: "Product design, 3D visualisation", it: "Design di prodotto, visualizzazione 3D", pl: "Projekt produktu, wizualizacja 3D" },
    summary: {
      en: "UNOS, a concept lounge chair for Cappellini that seems to float above a steel base.",
      it: "UNOS, una chaise longue concept per Cappellini che sembra fluttuare sopra una base in acciaio.",
      pl: "UNOS, koncepcyjny leżak dla Cappellini, który zdaje się unosić nad stalową podstawą."
    },
    text: {
      en: [
        "UNOS, a concept lounge chair for Cappellini, part of Dusha, a collection of calm, sculptural pieces for a spa.",
        "Unos is a Polish word for a moment of gentle rising, a small escape from everyday gravity. The chair is made to feel like that: one fluid curve of frosted acrylic with fabric cushions, held above a round base of brushed steel so that it seems to float. The base is shaped like a drop landing on water.",
        "It comes in four colours, Still Shadow, Soft Rise, Lift Red and Drift Blue, and measures 1830 by 620 mm, 1050 mm high."
      ],
      it: [
        "UNOS, una chaise longue concept per Cappellini, parte di Dusha, una collezione di pezzi calmi e scultorei pensata per una spa.",
        "Unos è una parola polacca che indica un momento di lieve sollevamento, una piccola fuga dalla gravità di ogni giorno. La seduta nasce per dare questa sensazione: un'unica curva fluida in acrilico satinato con cuscini in tessuto, sospesa sopra una base rotonda in acciaio spazzolato, così da sembrare sospesa nell'aria. La base ricorda una goccia che cade sull'acqua.",
        "È disponibile in quattro colori, Still Shadow, Soft Rise, Lift Red e Drift Blue, e misura 1830 per 620 mm, con un'altezza di 1050 mm."
      ],
      pl: [
        "UNOS, koncepcyjny leżak dla Cappellini, część Dusha, kolekcji spokojnych, rzeźbiarskich mebli do spa.",
        "Unos to chwila łagodnego uniesienia, małe oderwanie od codziennej grawitacji. Taki ma być ten leżak: jedna płynna krzywizna z matowego akrylu z tapicerowanymi poduszkami, uniesiona nad okrągłą podstawą ze szczotkowanej stali, tak że zdaje się unosić w powietrzu. Podstawa przypomina kroplę spadającą na wodę.",
        "Powstał w czterech kolorach, Still Shadow, Soft Rise, Lift Red i Drift Blue, i ma wymiary 1830 na 620 mm przy wysokości 1050 mm."
      ]
    },
    cover: {
      file: "cover.jpg",
      alt: {
        en: "UNOS lounge chair with dark fabric cushions on a curved frosted acrylic body above a round brushed steel base, 3D render",
        it: "Chaise longue UNOS con cuscini in tessuto scuro su un corpo curvo in acrilico satinato sopra una base rotonda in acciaio spazzolato, rendering 3D",
        pl: "Leżak UNOS z ciemnymi tapicerowanymi poduszkami na wygiętym korpusie z matowego akrylu nad okrągłą podstawą ze szczotkowanej stali, wizualizacja 3D"
      }
    },
    images: [
      { file: "01.jpg", ratio: 1.5, focus: "50% 80%", alt: { en: "Two people resting on UNOS chairs in a dark, round zero-gravity room with beams of light", it: "Due persone su chaise longue UNOS in una stanza rotonda e buia a gravità zero, attraversata da fasci di luce", pl: "Dwie osoby odpoczywają na leżakach UNOS w ciemnym, okrągłym pokoju zero grawitacji z promieniami światła" } },
      { file: "02.jpg", ratio: 1.5, focus: "15% 50%", alt: { en: "Side view of a person lying back in UNOS, with hand-drawn arrows showing the chair lifting above its base", it: "Vista laterale di una persona distesa su UNOS, con frecce disegnate a mano che mostrano la seduta sollevarsi dalla base", pl: "Widok z boku osoby półleżącej na UNOS, z odręcznymi strzałkami pokazującymi unoszenie się leżaka nad podstawą" } },
      { file: "03.jpg", wide: true, alt: { en: "Close-up of the acrylic body curving over the steel base with its water-drop ripples", it: "Dettaglio del corpo in acrilico che si curva sopra la base in acciaio con le increspature a goccia d'acqua", pl: "Zbliżenie akrylowego korpusu wygiętego nad stalową podstawą z falami jak od kropli wody" } },
      { file: "04.jpg", wide: true, alt: { en: "The four colours of UNOS in a row: blue, red, white and black", it: "I quattro colori di UNOS in fila: blu, rosso, bianco e nero", pl: "Cztery kolory UNOS w rzędzie: niebieski, czerwony, biały i czarny" } },
      { file: "drawing.jpg", wide: true, alt: { en: "Technical drawing of UNOS: side, front and top views with dimensions", it: "Disegno tecnico di UNOS: viste laterale, frontale e dall'alto con le misure", pl: "Rysunek techniczny UNOS: widok z boku, z przodu i z góry z wymiarami" } },
      { file: "sketches.jpg", wide: true, alt: { en: "Concept sketches of UNOS and the water-drop effect on its steel base", it: "Schizzi di concept di UNOS e dell'effetto goccia d'acqua sulla base in acciaio", pl: "Szkice koncepcyjne UNOS i efektu kropli wody na stalowej podstawie" } }
    ]
  },

  {
    slug: "lamare-pola-negri",
    title: "Lamare Pola Negri Club",
    categories: ["interiors", "yachts"],
    featured: true,
    year: "",
    client: "LAMARE Houseboats",
    place: { en: "Houseboat, Lamare", it: "Houseboat, Lamare", pl: "Dom na wodzie, Lamare" },
    scope: { en: "Interior design", it: "Progetto d'interni", pl: "Projekt wnętrza" },
    summary: {
      en: "A houseboat interior for LAMARE Houseboats at Lamare Pola Negri Club.",
      it: "Un interno di houseboat per LAMARE Houseboats al Lamare Pola Negri Club.",
      pl: "Wnętrze domu na wodzie dla LAMARE Houseboats w Lamare Pola Negri Club."
    },
    text: {
      en: [
        "A houseboat interior for LAMARE Houseboats, Lamare Pola Negri Club.",
        "Oak laid in a chevron pattern, dark timber wall panels and full-height windows that bring the light and the movement of the water inside."
      ],
      it: [
        "Un interno di houseboat per LAMARE Houseboats, Lamare Pola Negri Club.",
        "Rovere posato a spina ungherese, pannelli a parete in legno scuro e finestre a tutta altezza che portano dentro la luce e il movimento dell'acqua."
      ],
      pl: [
        "Wnętrze domu na wodzie dla LAMARE Houseboats, Lamare Pola Negri Club.",
        "Dąb ułożony w jodełkę francuską, ciemne drewniane panele ścienne i okna od podłogi do sufitu, które wpuszczają do środka światło i ruch wody."
      ]
    },
    cover: {
      file: "cover.jpg",
      alt: {
        en: "The main room in the evening: dark timber walls, a warm light line, herringbone floor and the kitchen island",
        it: "La stanza principale di sera: pareti in legno scuro, una linea di luce calda, parquet a spina di pesce e l'isola della cucina",
        pl: "Główne pomieszczenie wieczorem: ciemne drewniane ściany, ciepła linia światła, podłoga w jodełkę i wyspa kuchenna"
      }
    },
    images: [
      { file: "exterior.jpg", wide: true, alt: {
        en: "The house on the water: a white frame with a black organic pattern on the side, a glazed front opening onto the deck and a roof terrace",
        it: "La casa sull'acqua: telaio bianco con un motivo organico nero sul fianco, facciata vetrata aperta sul deck e terrazza sul tetto",
        pl: "Dom na wodzie: biała rama z czarnym organicznym wzorem na boku, przeszklony front otwarty na taras i taras na dachu" } },
      { file: "01.jpg", wide: true, alt: {
        en: "View through the full-height window of the finished house, across the river to red brick granaries and moored pedal boats",
        it: "Vista dalla vetrata a tutta altezza della casa finita, oltre il fiume verso i granai in mattoni rossi e i pedalò ormeggiati",
        pl: "Widok przez przeszkloną ścianę gotowego domu na rzekę, ceglane spichrze i zacumowane rowerki wodne" } },
      { file: "02.jpg", alt: {
        en: "Double-height living space with tall glazing over the water, herringbone oak floor and the kitchen wall behind",
        it: "Soggiorno a doppia altezza con grandi vetrate sull'acqua, parquet a spina di pesce e la parete cucina sul fondo",
        pl: "Salon o podwójnej wysokości z wysokimi przeszkleniami nad wodą, podłogą w jodełkę i ścianą kuchenną w głębi" } },
      { file: "03.jpg", alt: {
        en: "Sunlight through the corner glazing casting window shadows across the floor, with the helm by the door",
        it: "Il sole attraverso la vetrata d'angolo disegna l'ombra dei serramenti sul pavimento, con il timone accanto alla porta",
        pl: "Słońce przez narożne przeszklenie rysuje cienie ram na podłodze, obok drzwi stoi ster" } },
      { file: "04.jpg", alt: {
        en: "Kitchen detail: dark wood cabinets with under-cabinet light, marble-look worktop and induction hob",
        it: "Dettaglio della cucina: mobili in legno scuro con luce sottopensile, piano effetto marmo e piano a induzione",
        pl: "Detal kuchni: ciemne drewniane szafki z podświetleniem, blat imitujący marmur i płyta indukcyjna" } },
      { file: "detail.jpg", alt: {
        en: "Oak chevron floor, dark timber wall and a full-height window onto the water",
        it: "Pavimento in rovere a spina ungherese, parete in legno scuro e finestra a tutta altezza sull'acqua",
        pl: "Dębowa podłoga w jodełkę francuską, ciemna drewniana ściana i okno od podłogi do sufitu z widokiem na wodę" } }
    ]
  },

  {
    slug: "modern-house-35-lamare",
    title: "Modern House 35, Lamare",
    categories: ["architecture", "interiors", "visualisation"],
    featured: true,
    year: "",
    client: "Lamare",
    place: { en: "Compact house", it: "Casa compatta", pl: "Kompaktowy dom" },
    scope: { en: "House design, interior, 3D visualisation", it: "Progetto della casa, interni, visualizzazione 3D", pl: "Projekt domu, wnętrze, wizualizacja 3D" },
    summary: {
      en: "Design and 3D visualisation of Modern House 35, a compact house for Lamare.",
      it: "Progetto e visualizzazione 3D di Modern House 35, una casa compatta per Lamare.",
      pl: "Projekt i wizualizacja 3D Modern House 35, kompaktowego domu dla Lamare."
    },
    text: {
      en: [
        "Modern House 35, a compact house for Lamare.",
        "Vertical timber cladding sits inside a black steel frame that reaches past the walls to frame the deck. Full-height sliding doors open the living room and kitchen onto the terrace, with outdoor dining on one side and a lounge on the other."
      ],
      it: [
        "Modern House 35, una casa compatta per Lamare.",
        "Il rivestimento verticale in legno è racchiuso in un telaio in acciaio nero che si estende oltre le pareti e incornicia la terrazza. Porte scorrevoli a tutta altezza aprono soggiorno e cucina sul deck, con il pranzo all'aperto da un lato e un salotto dall'altro."
      ],
      pl: [
        "Modern House 35, kompaktowy dom dla Lamare.",
        "Pionowe drewniane okładziny zamyka czarna stalowa rama, która wychodzi poza ściany i obramowuje taras. Przesuwne drzwi od podłogi do sufitu otwierają salon i kuchnię na taras, z miejscem do jedzenia po jednej stronie i strefą wypoczynku po drugiej."
      ]
    },
    cover: {
      file: "cover.jpg",
      alt: {
        en: "Compact house with vertical timber cladding, a black steel frame and a deck with outdoor dining and lounge at sunset, 3D render",
        it: "Casa compatta con rivestimento verticale in legno, telaio in acciaio nero e terrazza con pranzo e salotto all'aperto al tramonto, rendering 3D",
        pl: "Kompaktowy dom z pionową drewnianą okładziną, czarną stalową ramą i tarasem z jadalnią i strefą wypoczynku o zachodzie słońca, wizualizacja 3D"
      }
    },
    images: [
      { file: "01.jpg", wide: true, alt: { en: "Living room with a round dining table, a curved green sofa and a glossy black ceiling, opening onto the deck", it: "Soggiorno con tavolo rotondo, divano curvo verde e soffitto nero lucido, aperto sulla terrazza", pl: "Salon z okrągłym stołem, zaokrągloną zieloną sofą i czarnym błyszczącym sufitem, otwarty na taras" } },
      { file: "02.jpg", alt: { en: "Bedroom with a timber bed, linen walls and a glass door to the deck", it: "Camera con letto in legno, pareti in lino e porta vetrata sulla terrazza", pl: "Sypialnia z drewnianym łóżkiem, lnianymi ścianami i szklanymi drzwiami na taras" } },
      { file: "03.jpg", alt: { en: "The bedroom seen from the bed, towards the window and the curtain", it: "La camera vista dal letto, verso la finestra e la tenda", pl: "Sypialnia widziana od łóżka, w stronę okna i zasłony" } },
      { file: "04.jpg", wide: true, alt: { en: "Second room with a black sofa bed, a brush painting and a glass door to the deck", it: "Seconda stanza con divano letto nero, un dipinto a pennello e porta vetrata sulla terrazza", pl: "Drugi pokój z czarną sofą rozkładaną, obrazem malowanym pędzlem i szklanymi drzwiami na taras" } }
    ]
  },

  {
    slug: "duplex",
    title: "Duplex",
    categories: ["interiors", "visualisation"],
    featured: true,
    year: "2024",
    place: { en: "Two-level home", it: "Casa su due livelli", pl: "Dom dwupoziomowy" },
    scope: { en: "Interior design, 3D visualisation", it: "Progetto d'interni, visualizzazione 3D", pl: "Projekt wnętrza, wizualizacja 3D" },
    summary: {
      en: "Duplex: a double-height living room behind a wall of glass, a brass and amber screen along the stair, and warm wood below the mezzanine.",
      it: "Duplex: un soggiorno a doppia altezza dietro una parete di vetro, uno schermo in ottone e ambra lungo la scala e legno caldo sotto il soppalco.",
      pl: "Duplex: salon o podwójnej wysokości za szklaną ścianą, mosiężno-bursztynowy parawan wzdłuż schodów i ciepłe drewno pod antresolą."
    },
    text: {
      en: [
        "A two-level home built around one tall room. The living space rises the full height of the house behind a wall of glass, so the trees outside become part of the interior.",
        "A screen of brass loops and amber glass follows the floating stair up to the mezzanine and catches the low sun. Under the mezzanine the mood changes: wood panelling, an orange banquette, a planter of tall grasses, the kitchen and a coffee corner, lit low and warm in the evening."
      ],
      it: [
        "Una casa su due livelli costruita attorno a un'unica stanza alta. Il soggiorno sale per tutta l'altezza della casa dietro una parete di vetro, così gli alberi fuori diventano parte degli interni.",
        "Uno schermo di anelli in ottone e vetro ambra accompagna la scala sospesa fino al soppalco e cattura il sole basso. Sotto il soppalco l'atmosfera cambia: boiserie in legno, una panca arancione, una fioriera di erbe alte, la cucina e un angolo caffè, con una luce bassa e calda la sera."
      ],
      pl: [
        "Dwupoziomowy dom zbudowany wokół jednego wysokiego pomieszczenia. Salon sięga przez całą wysokość domu za szklaną ścianą, więc drzewa na zewnątrz stają się częścią wnętrza.",
        "Parawan z mosiężnych pętli i bursztynowego szkła prowadzi wzdłuż wiszących schodów na antresolę i łapie niskie słońce. Pod antresolą nastrój się zmienia: drewniane panele, pomarańczowa ława, donica z wysokimi trawami, kuchnia i kącik kawowy, wieczorem w niskim, ciepłym świetle."
      ]
    },
    cover: { file: "cover.jpg", alt: { en: "Double-height living room with a tan leather sofa, a glass wall onto the trees and a brass and amber screen by the stair", it: "Soggiorno a doppia altezza con divano in pelle color cuoio, una parete di vetro sugli alberi e uno schermo in ottone e ambra accanto alla scala", pl: "Salon o podwójnej wysokości z kanapą z jasnobrązowej skóry, szklaną ścianą na drzewa i mosiężno-bursztynowym parawanem przy schodach" } },
    images: [
      { file: "01.jpg", wide: true, alt: { en: "The living room at dusk, looking through the brass screen to the mezzanine and the lounge beyond", it: "Il soggiorno al tramonto, con vista attraverso lo schermo in ottone verso il soppalco e il salotto oltre", pl: "Salon o zmierzchu, widok przez mosiężny parawan na antresolę i strefę wypoczynku za nim" } },
      { file: "02.jpg", alt: { en: "Kitchen and orange banquette under the mezzanine, with wood panelling and a planter of grasses", it: "Cucina e panca arancione sotto il soppalco, con boiserie in legno e una fioriera di erbe", pl: "Kuchnia i pomarańczowa ława pod antresolą, z drewnianymi panelami i donicą z trawami" } },
      { file: "03.jpg", alt: { en: "Dining corner with an orange banquette, red cushions and a glass pendant light", it: "Angolo pranzo con panca arancione, cuscini rossi e una lampada a sospensione in vetro", pl: "Kącik jadalny z pomarańczową ławą, czerwonymi poduszkami i szklaną lampą wiszącą" } },
      { file: "04.jpg", wide: true, alt: { en: "Brass loops and amber glass along the floating stair, with the coffee corner behind", it: "Anelli in ottone e vetro ambra lungo la scala sospesa, con l'angolo caffè dietro", pl: "Mosiężne pętle i bursztynowe szkło wzdłuż wiszących schodów, za nimi kącik kawowy" } }
    ]
  },
  {
    slug: "apartment-sokole-kuznica",
    title: { en: "Apartment, Sokole Kuźnica", it: "Appartamento, Sokole Kuźnica", pl: "Mieszkanie, Sokole Kuźnica" },
    categories: ["interiors", "visualisation"],
    featured: true,
    year: "",
    client: "",
    place: { en: "Residential complex, Sokole Kuźnica", it: "Complesso residenziale, Sokole Kuźnica", pl: "Osiedle mieszkaniowe, Sokole Kuźnica" },
    scope: { en: "Interior design, 3D visualisation", it: "Progetto d'interni, visualizzazione 3D", pl: "Projekt wnętrz, wizualizacja 3D" },
    summary: {
      en: "Interior design and 3D visualisation for an apartment in a residential complex in Sokole Kuźnica.",
      it: "Progetto d'interni e visualizzazione 3D di un appartamento in un complesso residenziale a Sokole Kuźnica.",
      pl: "Projekt i wizualizacja 3D wnętrz mieszkania na osiedlu Sokole Kuźnica."
    },
    text: {
      en: [
        "An apartment in a residential complex in Sokole Kuźnica.",
        "The kitchen is built around a veined stone island with waterfall sides under a cluster of glass pendants, with dark wood joinery, copper fittings and tall steel-framed windows onto the garden. It opens to a living area with a deep-seated cream sofa, all on a dark chevron floor.",
        "The large central room has its own bar: a round-ended counter clad in green glazed tiles and topped with stone, on a white tiled floor dotted with black. Behind it, lit dark wood shelving frames an arched niche lined with wallpaper of birds and branches.",
        "The bedroom is quieter and darker: a channelled upholstered bed, a green marble lamp on a stone-topped side table, a desk topped in the same stone, and a steel-framed glass door that carries the line of the kitchen through the home."
      ],
      it: [
        "Un appartamento in un complesso residenziale a Sokole Kuźnica.",
        "La cucina ruota attorno a un'isola in pietra venata con fianchi a cascata, tra arredi in legno scuro e finiture in rame, sotto un grappolo di sospensioni in vetro, con alte finestre in acciaio sul giardino. Si apre su una zona giorno con un ampio divano color crema, il tutto su un parquet scuro a spina ungherese.",
        "Il grande soggiorno centrale ha un proprio bar: un bancone arrotondato in piastrelle verdi smaltate con piano in pietra, su un pavimento bianco con tozzetti neri, davanti a scaffali in legno scuro e a una nicchia ad arco rivestita di carta da parati con uccelli e rami.",
        "La camera è più raccolta e scura: un letto con testiera imbottita a canne, una lampada in marmo verde su un comodino con piano in pietra, una scrivania nella stessa pietra e una porta vetrata con telaio in acciaio che riprende, come in tutta la casa, la linea della cucina."
      ],
      pl: [
        "Mieszkanie na osiedlu Sokole Kuźnica.",
        "Kuchnia powstała wokół wyspy z żyłkowanego kamienia z bokami w formie wodospadu, nad którą wisi lampa ze szklanych kul. Wnętrze dopełniają ciemna drewniana zabudowa, miedziane dodatki i wysokie okna w stalowych ramach z widokiem na ogród. Kuchnia otwiera się na strefę dzienną z głęboką kremową sofą, a całość łączy ciemna podłoga w jodełkę francuską.",
        "Duży centralny salon ma własny bar: zaokrągloną ladę wyłożoną zielonymi glazurowanymi płytkami, z kamiennym blatem, ustawioną na białej posadzce z drobnymi czarnymi wstawkami. Tło tworzą regały z ciemnego drewna i łukowa wnęka wyklejona tapetą w ptaki i gałęzie.",
        "Sypialnia jest spokojniejsza i ciemniejsza: łóżko z pikowanym zagłówkiem, lampa z zielonego marmuru, stolik nocny i biurko z kamiennymi blatami oraz przeszklone drzwi w stalowej ramie, które przenoszą motyw z kuchni na całe mieszkanie."
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
    images: [
      {
        file: "plan.jpg",
        wide: true,
        alt: {
          en: "Overhead view of the furnished floor plan in its garden: a large central living room with the bar, the kitchen with its island, bedrooms and bathrooms, 3D render",
          it: "Vista dall'alto della pianta arredata, circondata dal giardino: un ampio soggiorno centrale con il bar, la cucina con l'isola, le camere e i bagni, rendering 3D",
          pl: "Widok z góry na umeblowane mieszkanie otoczone ogrodem: duży centralny salon z barem, kuchnia z wyspą, sypialnie i łazienki, wizualizacja 3D"
        }
      },
      {
        file: "01.jpg",
        alt: {
          en: "Kitchen seen from the front: a veined stone island with three copper-framed bar stools, a cluster of glass pendants and steel-framed windows onto the trees, 3D render",
          it: "Cucina vista di fronte: isola in pietra venata con tre sgabelli con struttura in rame, un grappolo di sospensioni in vetro e finestre con telaio in acciaio sugli alberi, rendering 3D",
          pl: "Kuchnia od frontu: wyspa z żyłkowanego kamienia z trzema kremowymi hokerami na miedzianych nogach, lampa ze szklanych kul i okna w stalowych ramach z widokiem na drzewa, wizualizacja 3D"
        }
      },
      {
        file: "02.jpg",
        alt: {
          en: "View from above the kitchen to the living area: the stone island, a copper sink, a cream sofa and a glass bubble pendant over a dark chevron floor, 3D render",
          it: "Vista dall'alto dalla cucina alla zona giorno: l'isola in pietra, il lavello in rame, un divano color crema e una sospensione a bolle di vetro sopra il parquet scuro a spina ungherese, rendering 3D",
          pl: "Widok z góry od strony kuchni na strefę dzienną: kamienna wyspa, miedziany zlew, kremowa sofa, lampa ze szklanych kul i ciemna podłoga w jodełkę francuską, wizualizacja 3D"
        }
      },
      {
        file: "bar.jpg",
        wide: true,
        alt: {
          en: "Home bar with a round-ended counter in green glazed tiles and a stone top, green upholstered stools, globe pendants and a wallpapered arched niche with shelves between lit dark wood shelving, 3D render",
          it: "Angolo bar con bancone arrotondato in piastrelle verdi smaltate e piano in pietra, sgabelli imbottiti verdi, sospensioni a globo e una nicchia ad arco con carta da parati e mensole tra scaffali illuminati in legno scuro, rendering 3D",
          pl: "Domowy bar z zaokrągloną ladą wyłożoną zielonymi glazurowanymi płytkami, z kamiennym blatem, zielonymi tapicerowanymi hokerami i kulistymi lampami wiszącymi, na tle łukowej wnęki z tapetą i półkami między podświetlonymi regałami z ciemnego drewna, wizualizacja 3D"
        }
      },
      {
        file: "03.jpg",
        alt: {
          en: "Bedroom at night with a channelled upholstered bed, a green marble lamp on a side table, a stone-topped desk and a steel-framed glass door, 3D render",
          it: "Camera da letto di sera con letto dalla testiera imbottita, lampada in marmo verde sul comodino, scrivania con piano in pietra e porta vetrata con telaio in acciaio, rendering 3D",
          pl: "Sypialnia wieczorem, z łóżkiem z pikowanym zagłówkiem, lampą z zielonego marmuru na stoliku nocnym, biurkiem z kamiennym blatem i przeszklonymi drzwiami w stalowej ramie, wizualizacja 3D"
        }
      },
      {
        file: "04.jpg",
        alt: {
          en: "Detail of the bedside: a green marble table lamp with a tilted dark shade on a stone-topped side table, 3D render",
          it: "Dettaglio del comodino con piano in pietra: lampada da tavolo in marmo verde con paralume scuro inclinato, rendering 3D",
          pl: "Detal przy łóżku: lampa stołowa z zielonego marmuru z pochylonym ciemnym kloszem na stoliku z kamiennym blatem, wizualizacja 3D"
        }
      }
    ]
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
    images: [
      {
        file: "01.jpg",
        wide: true,
        alt: {
          en: "View along the timber dining table on glass legs towards the stone island and tall curtained windows, with built-in ovens and a wine fridge on the right, 3D render",
          it: "Vista lungo il tavolo in legno su gambe di vetro verso l'isola in pietra e le alte finestre con tende, con forni a incasso e cantinetta per il vino a destra, rendering 3D",
          pl: "Widok wzdłuż drewnianego stołu na szklanych nogach w stronę kamiennej wyspy i wysokich okien z zasłonami, z piekarnikami w zabudowie i chłodziarką do wina po prawej, wizualizacja 3D"
        }
      }
    ]
  },

  {
    slug: "chain-moray",
    title: "Chain Moray",
    categories: ["yachts", "interiors", "visualisation"],
    featured: true,
    year: "",
    client: "",
    place: { en: "Yacht interior, 43 m, Saudi Arabia", it: "Interni di yacht, 43 m, Arabia Saudita", pl: "Wnętrze jachtu, 43 m, Arabia Saudyjska" },
    scope: { en: "Yacht interior design, 3D visualisation", it: "Interni per yacht, visualizzazione 3D", pl: "Projekt wnętrz jachtu, wizualizacja 3D" },
    summary: {
      en: "Interior design and 3D visualisation for Chain Moray, a 43 metre yacht, Saudi Arabia.",
      it: "Progetto degli interni e visualizzazione 3D per Chain Moray, yacht di 43 metri, Arabia Saudita.",
      pl: "Projekt i wizualizacja 3D wnętrz Chain Moray, jachtu o długości 43 metrów, Arabia Saudyjska."
    },
    text: {
      en: [
        "Interior design for Chain Moray, a 43 metre yacht, Saudi Arabia.",
        "The saloon is lined in pale oak and opens to the sea through long windows on both sides. Two deep textured sofas face a dark marble table, and behind them a long dining table sits under a light sculpture that drifts like a ribbon."
      ],
      it: [
        "Progetto degli interni di Chain Moray, yacht di 43 metri, Arabia Saudita.",
        "Il salone è rivestito in rovere chiaro e si apre sul mare con lunghe finestre su entrambi i lati. Due profondi divani in tessuto materico si affacciano su un tavolino in marmo scuro e, alle loro spalle, un lungo tavolo da pranzo sta sotto una scultura luminosa che fluttua come un nastro."
      ],
      pl: [
        "Projekt wnętrz Chain Moray, jachtu o długości 43 metrów, Arabia Saudyjska.",
        "Salon wyłożony jasnym dębem otwiera się na morze długimi oknami po obu stronach. Dwie głębokie sofy z fakturowej tkaniny stoją wokół stolika z ciemnego marmuru, a za nimi długi stół jadalny pod świetlną rzeźbą, która unosi się jak wstęga."
      ]
    },
    cover: {
      file: "cover.jpg",
      alt: {
        en: "Yacht saloon in pale oak with two large sofas, a dark marble table, a dining table and windows onto the sea on both sides, 3D render",
        it: "Salone di yacht in rovere chiaro con due grandi divani, tavolino in marmo scuro, tavolo da pranzo e finestre sul mare su entrambi i lati, rendering 3D",
        pl: "Salon jachtu w jasnym dębie z dwiema dużymi sofami, stolikiem z ciemnego marmuru, stołem jadalnym i oknami na morze po obu stronach, wizualizacja 3D"
      }
    },
    images: [
      {
        file: "01.jpg",
        wide: true,
        alt: {
          en: "Saloon seen from the sofas: textured sofas around a dark marble table, the dining table under a ribbon light sculpture and a long window onto the sea, 3D render",
          it: "Il salone visto dai divani: divani in tessuto materico attorno a un tavolino in marmo scuro, il tavolo da pranzo sotto una scultura luminosa a nastro e una lunga vetrata sul mare, rendering 3D",
          pl: "Salon widziany od strony sof: sofy z fakturowej tkaniny wokół stolika z ciemnego marmuru, stół jadalny pod świetlną rzeźbą w kształcie wstęgi i długie okno z widokiem na morze, wizualizacja 3D"
        }
      },
      {
        file: "02.jpg",
        wide: true,
        alt: {
          en: "Lobby with curved oak wall panels, a herringbone floor and a low cabinet along the window, leading out to the deck, 3D render",
          it: "Corridoio con pannelli curvi in rovere, pavimento a spina di pesce e un mobile basso lungo la finestra, verso il ponte, rendering 3D",
          pl: "Korytarz z zaokrąglonymi dębowymi panelami, podłogą w jodełkę i niską szafką wzdłuż okna, prowadzący na pokład, wizualizacja 3D"
        }
      },
      {
        file: "03.jpg",
        alt: {
          en: "Stateroom with an upholstered bed, a desk and a window seat facing the sea, under a curved lit ceiling, 3D render",
          it: "Cabina con letto imbottito, scrivania e seduta lungo la finestra sul mare, sotto un soffitto curvo illuminato, rendering 3D",
          pl: "Kabina z tapicerowanym łóżkiem, biurkiem i siedziskiem przy oknie z widokiem na morze, pod zaokrąglonym podświetlonym sufitem, wizualizacja 3D"
        }
      },
      {
        file: "04.jpg",
        alt: {
          en: "Cabin in oak with a carved stone panel behind the bed, glass globe pendants and a curved desk, 3D render",
          it: "Cabina in rovere con pannello in pietra scolpita dietro il letto, sospensioni a sfera in vetro e scrivania curva, rendering 3D",
          pl: "Kabina w dębie z rzeźbionym kamiennym panelem za łóżkiem, szklanymi lampami w kształcie kul i zaokrąglonym biurkiem, wizualizacja 3D"
        }
      },
      {
        file: "05.jpg",
        wide: true,
        alt: {
          en: "Deck with a spa pool set into curved sunpads, teak steps and an open view of the sea, 3D render",
          it: "Ponte con vasca idromassaggio incassata tra prendisole curvi, gradini in teak e vista aperta sul mare, rendering 3D",
          pl: "Pokład z wanną z hydromasażem wpuszczoną między zaokrąglone leżanki, tekowymi stopniami i otwartym widokiem na morze, wizualizacja 3D"
        }
      }
    ]
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
    images: [
      {
        file: "01.jpg",
        wide: true,
        alt: {
          en: "Entrance with a curved reception desk with a horsebit detail, red light washing the walls and a glimpse of the bar through the curtains, 3D render",
          it: "Ingresso con banco reception curvo con dettaglio a morsetto, luce rossa sulle pareti e uno scorcio del bar tra le tende, rendering 3D",
          pl: "Wejście z zaokrągloną ladą recepcji z detalem w kształcie wędzidła, czerwonym światłem na ścianach i widokiem na bar między zasłonami, wizualizacja 3D"
        }
      },
      {
        file: "02.jpg",
        alt: {
          en: "View from the entrance past the bar stools and a Persian rug to the lounge, with red velvet armchairs, arched floral booths and hexagonal ceiling lights, 3D render",
          it: "Vista dall'ingresso oltre gli sgabelli e il tappeto persiano verso il lounge, con poltrone in velluto rosso, nicchie ad arco con tessuti floreali e luci esagonali a soffitto, rendering 3D",
          pl: "Widok od wejścia, obok hokerów i perskiego dywanu, w stronę strefy lounge z czerwonymi aksamitnymi fotelami, łukowymi lożami w kwiatowych tkaninach i sześciokątnymi światłami na suficie, wizualizacja 3D"
        }
      },
      {
        file: "03.jpg",
        alt: {
          en: "Red velvet curtains open onto the lounge: round marble tables, red velvet armchairs and the glowing bar beyond, 3D render",
          it: "Tende di velluto rosso aperte sul lounge: tavolini rotondi in marmo, poltrone in velluto rosso e il bancone illuminato sullo sfondo, rendering 3D",
          pl: "Czerwone aksamitne zasłony odsłaniają strefę lounge: okrągłe marmurowe stoliki, czerwone aksamitne fotele i podświetlony bar w głębi, wizualizacja 3D"
        }
      },
      {
        file: "04.jpg",
        wide: true,
        alt: {
          en: "Dining room with set marble tables and red velvet armchairs facing the curved bar, framed by lit wine shelves under a hexagonal ceiling, 3D render",
          it: "Sala da pranzo con tavoli in marmo apparecchiati e poltrone in velluto rosso davanti al bancone curvo, tra scaffali illuminati per il vino sotto un soffitto a esagoni, rendering 3D",
          pl: "Sala jadalna z nakrytymi marmurowymi stołami i czerwonymi aksamitnymi fotelami przed łukowym barem, między podświetlonymi regałami na wino pod sześciokątnym sufitem, wizualizacja 3D"
        }
      }
    ]
  },

  {
    slug: "kawka",
    title: "kawka.",
    categories: ["branding"],
    year: "2026",
    client: { en: "abit. studio, own product", it: "abit. studio, prodotto proprio", pl: "abit. studio, własny produkt" },
    place: { en: "Milan, Italy", it: "Milano, Italia", pl: "Mediolan, Włochy" },
    scope: { en: "Name, identity, app design", it: "Naming, identità, design dell'app", pl: "Nazwa, identyfikacja, projekt aplikacji" },
    summary: {
      en: "kawka., our guide to Milan's best cafés: a name, a bold wordmark and an app in espresso tones.",
      it: "kawka., la nostra guida ai migliori caffè di Milano: un nome, un logotipo deciso e un'app nei toni dell'espresso.",
      pl: "kawka., nasz przewodnik po najlepszych kawiarniach Mediolanu: nazwa, wyrazisty logotyp i aplikacja w kolorach espresso."
    },
    text: {
      en: [
        "kawka. is our own product: a guide to Milan's best cafés, picked by hand. A calm map, a page for every café, and a coffee passport that collects a stamp at every one you visit.",
        "We gave it a short, friendly name, a heavy rounded wordmark with a full stop, and a dark palette of espresso, cream and a warm red. The same language runs from the logo to every screen of the app."
      ],
      it: [
        "kawka. è un nostro prodotto: una guida ai migliori caffè di Milano, scelti uno per uno. Una mappa essenziale, una pagina per ogni locale e un passaporto del caffè dove raccogli un timbro in ogni posto che visiti.",
        "Le abbiamo dato un nome breve e amichevole, un logotipo pieno e arrotondato con il punto finale e una palette scura di espresso, crema e un rosso caldo. Lo stesso linguaggio va dal logo a ogni schermata dell'app."
      ],
      pl: [
        "kawka. to nasz własny produkt: przewodnik po najlepszych kawiarniach Mediolanu, starannie wybranych. Spokojna mapa, osobna strona dla każdej kawiarni i kawowy paszport, w którym zbierasz pieczątkę w każdym odwiedzonym miejscu.",
        "Nadaliśmy jej krótką, przyjazną nazwę, mocny, zaokrąglony logotyp z kropką i ciemną paletę espresso, kremu i ciepłej czerwieni. Ten sam język prowadzi od logo po każdy ekran aplikacji."
      ]
    },
    link: { url: "https://waitlist.kawka.coffee", label: { en: "Join the waitlist", it: "Iscriviti alla lista d'attesa", pl: "Zapisz się na listę oczekujących" } },
    cover: { file: "cover.jpg", alt: { en: "The kawka. wordmark with a coming soon stamp next to the app open on a foldable phone", it: "Il logotipo kawka. con il timbro in arrivo accanto all'app aperta su un telefono pieghevole", pl: "Logotyp kawka. z pieczątką już wkrótce obok aplikacji otwartej na składanym telefonie" } },
    images: [
      { file: "01.jpg", alt: { en: "kawka. on a phone: search, filters and the map of Milan", it: "kawka. sul telefono: ricerca, filtri e la mappa di Milano", pl: "kawka. na telefonie: wyszukiwarka, filtry i mapa Mediolanu" } },
      { file: "02.jpg", alt: { en: "A café page in kawka., with photos, opening hours and directions", it: "La pagina di un caffè in kawka., con foto, orari e indicazioni", pl: "Strona kawiarni w kawka., ze zdjęciami, godzinami otwarcia i trasą" } },
      { file: "03.jpg", alt: { en: "The coffee passport, with stamps collected at Milan cafés", it: "Il passaporto del caffè, con i timbri raccolti nei caffè di Milano", pl: "Kawowy paszport z pieczątkami zebranymi w kawiarniach Mediolanu" } },
      { file: "04.jpg", alt: { en: "The coffee passport on a phone", it: "Il passaporto del caffè sul telefono", pl: "Kawowy paszport na telefonie" } }
    ]
  },
  {
    slug: "timbro",
    title: "Timbro",
    categories: ["branding"],
    year: "2026",
    client: { en: "abit. studio, own product", it: "abit. studio, prodotto proprio", pl: "abit. studio, własny produkt" },
    place: { en: "Milan, Italy", it: "Milano, Italia", pl: "Mediolan, Włochy" },
    scope: { en: "Name, identity, stamp cards", it: "Naming, identità, carte timbro", pl: "Nazwa, identyfikacja, karty z pieczątkami" },
    summary: {
      en: "Timbro, our digital loyalty stamp card for cafés: a name, a rubber stamp and a set of cards for every kind of place.",
      it: "Timbro, la nostra carta fedeltà digitale per i caffè: un nome, un timbro e una serie di carte per ogni tipo di locale.",
      pl: "Timbro, nasza cyfrowa karta lojalnościowa dla kawiarni: nazwa, pieczątka i zestaw kart dla każdego rodzaju lokalu."
    },
    text: {
      en: [
        "Timbro is our own product: a digital loyalty stamp card for cafés. Guests add it to Apple Wallet or Google Wallet in one tap: no app to download, no paper card to lose.",
        "The identity starts from the old rubber stamp, \"timbro\" in Italian. Each place gets its own card, with its colours, its type and its own stamp, from a Milan bakery to a cocktail bar or a beauty salon."
      ],
      it: [
        "Timbro è un nostro prodotto: una carta fedeltà digitale per i caffè. I clienti la aggiungono ad Apple Wallet o Google Wallet con un tocco: nessuna app da scaricare, nessuna carta di carta da perdere.",
        "L'identità parte dal vecchio timbro di gomma. Ogni locale ha la sua carta, con i suoi colori, il suo carattere e il suo timbro, da un forno milanese a un cocktail bar o a un salone di bellezza."
      ],
      pl: [
        "Timbro to nasz własny produkt: cyfrowa karta lojalnościowa z pieczątkami dla kawiarni. Goście dodają ją do Apple Wallet lub Google Wallet jednym dotknięciem: bez aplikacji do pobrania i bez papierowej karty do zgubienia.",
        "Identyfikacja wychodzi od starej gumowej pieczątki, po włosku \"timbro\". Każde miejsce dostaje własną kartę, z własnymi kolorami, krojem i pieczątką, od mediolańskiej piekarni po bar koktajlowy czy salon urody."
      ]
    },
    link: { url: "https://timbro.witkowskidesign.com", label: { en: "Visit Timbro", it: "Scopri Timbro", pl: "Poznaj Timbro" } },
    cover: { file: "cover.jpg", alt: { en: "The Timbro name on blue among stamp cards and a rubber stamp", it: "Il nome Timbro su blu tra carte timbro e un timbro di gomma", pl: "Nazwa Timbro na niebieskim tle wśród kart z pieczątkami i gumowej pieczątki" } },
    images: [
      { file: "01.jpg", wide: true, alt: { en: "Four Timbro stamp cards: a café, a bakery, a Japanese café and a cocktail bar", it: "Quattro carte Timbro: un caffè, un forno, un caffè giapponese e un cocktail bar", pl: "Cztery karty Timbro: kawiarnia, piekarnia, japońska kawiarnia i bar koktajlowy" } },
      { file: "02.jpg", wide: true, alt: { en: "Four more Timbro cards, each with its own colours and stamp", it: "Altre quattro carte Timbro, ognuna con i suoi colori e il suo timbro", pl: "Kolejne cztery karty Timbro, każda z własnymi kolorami i pieczątką" } }
    ]
  }
];
