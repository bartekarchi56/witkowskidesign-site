/*
  WITKOWSKI DESIGN · SITE TEXTS
  -----------------------------
  All words on the site, in English (en), Italian (it) and Polish (pl).
  Edit the text between the quotes. Keep the quotes and commas.
  <em>...</em> makes words italic. Please avoid long dashes in copy.

  Project texts live in content/projects.js.
  Contact details and company data live in content/site.js.
*/
window.WD_TEXT = {
  /* ================================================================ ENGLISH */
  en: {
    langName: "English",
    meta: {
      home: { title: "Witkowski Design · Interior, yacht and product design", description: "Witkowski Design is an interior, yacht interior and product design studio working between Milan and Poland, with 3D visualisation and branding." },
      work: { title: "Work · Witkowski Design", description: "Selected interiors, yacht interiors, products, visualisations and identities by Witkowski Design." },
      project: { title: "Project · Witkowski Design", description: "A project by Witkowski Design." },
      services: { title: "Services · Witkowski Design", description: "Interior design, yacht interior design, product design, 3D visualisation and branding. One studio, one way of working." },
      about: { title: "About · Witkowski Design", description: "Witkowski Design is the studio of Bartek Witkowski, working between Milan and Poland for clients across Europe." },
      contact: { title: "Contact · Witkowski Design", description: "Write, call or send a WhatsApp message to Witkowski Design about your interior, yacht or product." },
      privacy: { title: "Privacy · Witkowski Design", description: "Privacy note for witkowskidesign.com. No tracking cookies, no analytics." },
      notfound: { title: "Page not found · Witkowski Design", description: "This page does not exist." }
    },
    nav: { home: "Home", work: "Work", services: "Services", about: "About", contact: "Contact", menu: "Menu", close: "Close", skip: "Skip to content", language: "Language", main: "Main" },
    cats: { all: "All", interiors: "Interiors", yachts: "Yachts", products: "Products", visualisation: "Visualisation", branding: "Branding" },
    common: { placeholder: "Placeholder", viewProject: "View project", todo: "to be completed" },

    home: {
      eyebrow: "Interiors · Yachts · Products",
      title: "Calm spaces,<br> on land <em>and at sea.</em>",
      caption: "La Mare · yacht cabin · 3D visualisation",
      statement: "I'm Bartek, and Witkowski Design is my studio between Milan and Poland. I design homes, yacht interiors and objects, and every one of them is drawn, modelled and rendered before it is built, so you see the result first.",
      selected: "Selected work",
      allWork: "See all work",
      servicesTitle: "What the studio does",
      servicesLink: "How I work",
      services: {
        interiors: "Homes and hospitality spaces, from the layout to the last handle.",
        yachts: "Cabins, saloons and refits where every centimetre is planned.",
        products: "Furniture, lighting and objects, drawn for production.",
        visualisation: "Photorealistic renders that let you walk through a space before it exists.",
        branding: "Identities, print and signage that belong to the places they serve."
      },
      timbroEyebrow: "A product by Witkowski Design",
      timbroText: "A digital loyalty stamp card for cafés. Guests add it to Apple Wallet or Google Wallet in one tap: no app to download, no paper card to lose.",
      timbroLink: "Visit Timbro",
      timbroCard: "Coffee card",
      contactTitle: "Tell me about <em>your space.</em>",
      contactText: "A home, a cabin, an object. Send a few lines and a photo or a plan if you have one. I reply personally."
    },

    work: {
      title: "Work",
      intro: "Interiors, yachts, products, visualisations and identities. Choose a category to narrow the list.",
      filterLabel: "Filter projects by category",
      showing: "{n} projects",
      showingOne: "1 project",
      empty: "No projects in this category yet."
    },

    project: {
      client: "Client",
      place: "Place",
      year: "Year",
      scope: "Scope",
      category: "Category",
      back: "All work",
      next: "Next project",
      missingTitle: "Project not found",
      missingText: "This project may have been renamed or removed."
    },

    services: {
      title: "Services",
      intro: "Five disciplines, one way of working. Every project moves through the same five steps, so you always know what comes next.",
      deliverables: "What you receive",
      items: {
        interiors: {
          name: "Interior design",
          text: "Private homes, apartments and small hospitality spaces. I plan the layout, choose the materials and draw the custom furniture and joinery, then follow the work on site.",
          list: ["Layout and space planning", "Materials and finishes", "Custom joinery and furniture", "Lighting plan", "Technical drawings", "Site supervision"]
        },
        yachts: {
          name: "Yacht interior design",
          text: "Cabins, saloons and full refits for motor and sailing yachts. Within the limits of weight, curves and class rules, I design interiors that feel calm and generous in a small volume.",
          list: ["Layout studies", "Materials and soft furnishings", "Joinery details", "Lighting", "Renders for owner approval", "Coordination with the shipyard"]
        },
        products: {
          name: "Product and industrial design",
          text: "Furniture, lighting and objects, from the first sketch to a model ready for production. I design with the maker in mind, so the object can really be built.",
          list: ["Concept sketches", "3D CAD models", "Prototypes and samples", "Production drawings", "Product renders"]
        },
        visualisation: {
          name: "3D visualisation and rendering",
          text: "Photorealistic images of interiors, yachts and products, for my own projects and for architects, developers, shipyards and brands.",
          list: ["Interior renders", "Yacht and exterior renders", "Product images", "360° views", "Short animations"]
        },
        branding: {
          name: "Branding and graphic design",
          text: "Identities, printed matter and signage, often for the same places I design. A café, a showroom or a boat can share one visual language, from the logo to the menu.",
          list: ["Logo and identity", "Typography and colour", "Print and stationery", "Signage", "Packaging"]
        }
      },
      processTitle: "How I work",
      processIntro: "The same five steps for a cabin, a kitchen or a lamp.",
      steps: [
        { name: "Brief", text: "We meet in person or online. I listen to how you live, work or sail, and we agree on scope, timing and budget." },
        { name: "Concept", text: "Mood boards, first sketches and a layout. One clear idea before any detail." },
        { name: "Design", text: "Materials, furniture, light and technical drawings. Everything decided, measured and specified." },
        { name: "Visualisation", text: "Photorealistic renders of the design, so you can see the space and adjust it while changes are still easy." },
        { name: "Delivery", text: "Drawings for builders, shipyards or manufacturers, and follow-up until the work is finished." }
      ],
      cta: "Start a project"
    },

    about: {
      title: "About",
      lead: "Witkowski Design is the studio of Bartosz Witkowski, Bartek to everyone he works with.",
      photoNote: "Portrait coming soon",
      bio: [
        "The studio works between Milan and Poland, for clients across Europe and beyond. It designs homes, yacht interiors and objects, and creates the images and identities that go with them.",
        "Keeping the interior, the furniture, the renders and the brand under one roof means fewer handovers and one idea carried from the first sketch to the finished room.",
        "Alongside client work the studio builds its own products. The first one is Timbro, a digital loyalty card for cafés."
      ],
      approachTitle: "Approach",
      principles: [
        { name: "Calm before impressive", text: "A good room is one you want to stay in. Fewer materials, used well." },
        { name: "Drawn to the millimetre", text: "On a yacht every centimetre is planned. Homes and objects get the same care." },
        { name: "See it first", text: "Every project is rendered before it is built, so decisions are made with your own eyes." }
      ],
      basesTitle: "Between two places",
      bases: [
        { name: "Milan", text: "Italian design culture, makers and suppliers, and the yachting coast within reach." },
        { name: "Poland", text: "Joinery workshops, craftspeople and production partners." }
      ]
    },

    contact: {
      title: "Contact",
      intro: "Write, call or send a WhatsApp message. Tell me what you are planning, where it is and roughly when.",
      email: "Email",
      phone: "Phone",
      whatsapp: "WhatsApp",
      whatsappAction: "Message on WhatsApp",
      based: "Based in",
      formTitle: "Send a message",
      name: "Your name",
      yourEmail: "Your email",
      type: "Project type",
      types: ["Interior", "Yacht", "Product", "Visualisation", "Branding", "Something else"],
      message: "Message",
      send: "Write email",
      note: "The button opens your email app with the message ready to send. Nothing is stored on this website.",
      errName: "Add your name.",
      errEmail: "Add a valid email address so I can reply.",
      errMessage: "Write a few words about the project.",
      opened: "Your email app should now be open. If nothing happened, write directly to {email}.",
      subject: "Project enquiry"
    },

    privacy: {
      title: "Privacy",
      lead: "This website does not use tracking cookies, analytics or advertising. Here is what that means in practice.",
      sections: [
        { title: "What this site collects", text: "Nothing by itself. There are no cookies, no analytics and no third-party trackers. Fonts and images are served from this website, so no other company sees your visit." },
        { title: "Hosting", text: "The site is hosted on GitHub Pages by GitHub, Inc. Like any web server, it may log technical data such as your IP address for security. See the <a href=\"https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement\" rel=\"noopener\">GitHub privacy statement</a>." },
        { title: "When you get in touch", text: "If you write an email, call or send a WhatsApp message, your details are used only to answer you and, if we work together, to run the project. They are not shared or used for marketing. The contact form sends nothing to this website: it only opens your own email app." },
        { title: "Your rights", text: "Under the GDPR you can ask to see, correct or delete the personal data held about you, and you can complain to your data protection authority. To make a request, write to the email address below." }
      ],
      controllerTitle: "Data controller",
      fields: { company: "Company", owner: "Owner", address: "Address", vat: "VAT / NIP", email: "Email", country: "Country" },
      updated: "Last updated: October 2026"
    },

    footer: { rights: "All rights reserved.", privacy: "Privacy", top: "Back to top" },

    notfound: { title: "This page is not on the drawings.", text: "The link may be old or mistyped.", home: "Go to the home page" }
  },

  /* ================================================================ ITALIANO */
  it: {
    langName: "Italiano",
    meta: {
      home: { title: "Witkowski Design · Design d'interni, yacht e prodotto", description: "Witkowski Design è uno studio di interior design, design di interni per yacht e design di prodotto tra Milano e la Polonia, con visualizzazione 3D e branding." },
      work: { title: "Progetti · Witkowski Design", description: "Una selezione di interni, yacht, prodotti, visualizzazioni e identità di Witkowski Design." },
      project: { title: "Progetto · Witkowski Design", description: "Un progetto di Witkowski Design." },
      services: { title: "Servizi · Witkowski Design", description: "Interior design, interni per yacht, design di prodotto, visualizzazione 3D e branding. Uno studio, un solo metodo." },
      about: { title: "Studio · Witkowski Design", description: "Witkowski Design è lo studio di Bartek Witkowski, tra Milano e la Polonia, per clienti in tutta Europa." },
      contact: { title: "Contatti · Witkowski Design", description: "Scrivi, chiama o manda un messaggio WhatsApp a Witkowski Design per il tuo interno, yacht o prodotto." },
      privacy: { title: "Privacy · Witkowski Design", description: "Informativa privacy di witkowskidesign.com. Nessun cookie di tracciamento, nessuna analisi." },
      notfound: { title: "Pagina non trovata · Witkowski Design", description: "Questa pagina non esiste." }
    },
    nav: { home: "Home", work: "Progetti", services: "Servizi", about: "Studio", contact: "Contatti", menu: "Menu", close: "Chiudi", skip: "Vai al contenuto", language: "Lingua", main: "Principale" },
    cats: { all: "Tutti", interiors: "Interni", yachts: "Yacht", products: "Prodotti", visualisation: "Visualizzazione", branding: "Branding" },
    common: { placeholder: "Segnaposto", viewProject: "Vedi il progetto", todo: "da completare" },

    home: {
      eyebrow: "Interni · Yacht · Prodotti",
      title: "Spazi calmi,<br> a terra <em>e in mare.</em>",
      caption: "La Mare · cabina di yacht · visualizzazione 3D",
      statement: "Sono Bartek, e Witkowski Design è il mio studio tra Milano e la Polonia. Progetto case, interni di yacht e oggetti, e ognuno viene disegnato, modellato e renderizzato prima di essere costruito, così vedi il risultato per primo.",
      selected: "Progetti scelti",
      allWork: "Tutti i progetti",
      servicesTitle: "Cosa fa lo studio",
      servicesLink: "Come lavoro",
      services: {
        interiors: "Case e spazi per l'ospitalità, dalla pianta all'ultima maniglia.",
        yachts: "Cabine, saloni e refit dove ogni centimetro è pensato.",
        products: "Arredi, lampade e oggetti, disegnati per la produzione.",
        visualisation: "Rendering fotorealistici per attraversare uno spazio prima che esista.",
        branding: "Identità, stampa e segnaletica che appartengono ai luoghi per cui nascono."
      },
      timbroEyebrow: "Un prodotto di Witkowski Design",
      timbroText: "Una carta fedeltà digitale a timbri per i caffè. I clienti la aggiungono ad Apple Wallet o Google Wallet con un tocco: nessuna app da scaricare, nessuna tessera di carta da perdere.",
      timbroLink: "Scopri Timbro",
      timbroCard: "Carta caffè",
      contactTitle: "Raccontami <em>il tuo spazio.</em>",
      contactText: "Una casa, una cabina, un oggetto. Scrivi due righe e allega una foto o una pianta, se ce l'hai. Rispondo personalmente."
    },

    work: {
      title: "Progetti",
      intro: "Interni, yacht, prodotti, visualizzazioni e identità. Scegli una categoria per filtrare l'elenco.",
      filterLabel: "Filtra i progetti per categoria",
      showing: "{n} progetti",
      showingOne: "1 progetto",
      empty: "Ancora nessun progetto in questa categoria."
    },

    project: {
      client: "Cliente",
      place: "Luogo",
      year: "Anno",
      scope: "Ambito",
      category: "Categoria",
      back: "Tutti i progetti",
      next: "Progetto successivo",
      missingTitle: "Progetto non trovato",
      missingText: "Questo progetto potrebbe essere stato rinominato o rimosso."
    },

    services: {
      title: "Servizi",
      intro: "Cinque discipline, un solo metodo. Ogni progetto attraversa le stesse cinque fasi, così sai sempre cosa viene dopo.",
      deliverables: "Cosa ricevi",
      items: {
        interiors: {
          name: "Interior design",
          text: "Case private, appartamenti e piccoli spazi per l'ospitalità. Disegno la pianta, scelgo i materiali e progetto arredi e falegnameria su misura, poi seguo i lavori in cantiere.",
          list: ["Pianta e distribuzione degli spazi", "Materiali e finiture", "Arredi e falegnameria su misura", "Progetto illuminotecnico", "Disegni tecnici", "Direzione artistica in cantiere"]
        },
        yachts: {
          name: "Interni per yacht",
          text: "Cabine, saloni e refit completi per yacht a motore e a vela. Nei limiti di pesi, curve e regolamenti, progetto interni che risultano calmi e generosi anche in un piccolo volume.",
          list: ["Studi di layout", "Materiali e tessili", "Dettagli di falegnameria", "Illuminazione", "Rendering per l'approvazione dell'armatore", "Coordinamento con il cantiere"]
        },
        products: {
          name: "Design di prodotto e industriale",
          text: "Arredi, lampade e oggetti, dal primo schizzo al modello pronto per la produzione. Progetto pensando a chi produce, perché l'oggetto si possa davvero realizzare.",
          list: ["Schizzi di concept", "Modelli 3D CAD", "Prototipi e campioni", "Disegni esecutivi", "Rendering di prodotto"]
        },
        visualisation: {
          name: "Visualizzazione 3D e rendering",
          text: "Immagini fotorealistiche di interni, yacht e prodotti, per i miei progetti e per architetti, sviluppatori immobiliari, cantieri e marchi.",
          list: ["Rendering d'interni", "Rendering di yacht ed esterni", "Immagini di prodotto", "Viste a 360°", "Brevi animazioni"]
        },
        branding: {
          name: "Branding e graphic design",
          text: "Identità, stampati e segnaletica, spesso per gli stessi luoghi che progetto. Un caffè, uno showroom o una barca possono condividere un solo linguaggio visivo, dal logo al menu.",
          list: ["Logo e identità", "Tipografia e colore", "Stampa e cancelleria", "Segnaletica", "Packaging"]
        }
      },
      processTitle: "Come lavoro",
      processIntro: "Le stesse cinque fasi per una cabina, una cucina o una lampada.",
      steps: [
        { name: "Brief", text: "Ci incontriamo di persona oppure online. Ascolto come vivi, lavori o navighi, e definiamo insieme ambito, tempi e budget." },
        { name: "Concept", text: "Moodboard, primi schizzi e una pianta. Un'idea chiara prima di ogni dettaglio." },
        { name: "Progetto", text: "Materiali, arredi, luce e disegni tecnici. Tutto deciso, misurato e specificato." },
        { name: "Visualizzazione", text: "Rendering fotorealistici del progetto, per vedere lo spazio e modificarlo quando cambiare è ancora semplice." },
        { name: "Consegna", text: "Disegni per imprese, cantieri o produttori, e assistenza fino alla fine dei lavori." }
      ],
      cta: "Inizia un progetto"
    },

    about: {
      title: "Studio",
      lead: "Witkowski Design è lo studio di Bartosz Witkowski, Bartek per chiunque lavori con lui.",
      photoNote: "Ritratto in arrivo",
      bio: [
        "Lo studio lavora tra Milano e la Polonia, per clienti in Europa e oltre. Progetta case, interni di yacht e oggetti, e crea le immagini e le identità che li accompagnano.",
        "Tenere insieme interno, arredi, rendering e marchio significa meno passaggi di mano e una sola idea, dal primo schizzo alla stanza finita.",
        "Accanto ai progetti per i clienti, lo studio sviluppa prodotti propri. Il primo è Timbro, una carta fedeltà digitale per i caffè."
      ],
      approachTitle: "Approccio",
      principles: [
        { name: "Calma prima dell'effetto", text: "Una bella stanza è una stanza in cui vuoi restare. Pochi materiali, usati bene." },
        { name: "Disegnato al millimetro", text: "Su uno yacht ogni centimetro è pensato. Case e oggetti ricevono la stessa cura." },
        { name: "Vederlo prima", text: "Ogni progetto viene renderizzato prima di essere costruito, così si decide con i propri occhi." }
      ],
      basesTitle: "Tra due luoghi",
      bases: [
        { name: "Milano", text: "La cultura del design italiano, artigiani e fornitori, e la costa dello yachting a portata di mano." },
        { name: "Polonia", text: "Laboratori di falegnameria, artigiani e partner di produzione." }
      ]
    },

    contact: {
      title: "Contatti",
      intro: "Scrivi, chiama o manda un messaggio WhatsApp. Raccontami cosa hai in mente, dove si trova e più o meno quando.",
      email: "Email",
      phone: "Telefono",
      whatsapp: "WhatsApp",
      whatsappAction: "Scrivi su WhatsApp",
      based: "Sede",
      formTitle: "Invia un messaggio",
      name: "Il tuo nome",
      yourEmail: "La tua email",
      type: "Tipo di progetto",
      types: ["Interni", "Yacht", "Prodotto", "Visualizzazione", "Branding", "Altro"],
      message: "Messaggio",
      send: "Scrivi l'email",
      note: "Il pulsante apre il tuo programma di posta con il messaggio pronto da inviare. Questo sito non conserva nulla.",
      errName: "Aggiungi il tuo nome.",
      errEmail: "Aggiungi un indirizzo email valido per ricevere la risposta.",
      errMessage: "Scrivi qualche parola sul progetto.",
      opened: "Il tuo programma di posta dovrebbe essersi aperto. Se non è successo nulla, scrivi direttamente a {email}.",
      subject: "Richiesta di progetto"
    },

    privacy: {
      title: "Privacy",
      lead: "Questo sito non usa cookie di tracciamento, strumenti di analisi o pubblicità. Ecco cosa significa in pratica.",
      sections: [
        { title: "Cosa raccoglie questo sito", text: "Nulla, di per sé. Nessun cookie, nessuna analisi, nessun tracker di terze parti. Font e immagini sono serviti da questo sito, quindi nessun'altra azienda vede la tua visita." },
        { title: "Hosting", text: "Il sito è ospitato su GitHub Pages da GitHub, Inc. Come ogni server web, può registrare dati tecnici come l'indirizzo IP per motivi di sicurezza. Vedi l'<a href=\"https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement\" rel=\"noopener\">informativa privacy di GitHub</a>." },
        { title: "Quando mi contatti", text: "Se scrivi un'email, chiami o mandi un messaggio WhatsApp, i tuoi dati servono solo per risponderti e, se lavoriamo insieme, per gestire il progetto. Non vengono condivisi né usati per marketing. Il modulo di contatto non invia nulla a questo sito: apre soltanto il tuo programma di posta." },
        { title: "I tuoi diritti", text: "In base al GDPR puoi chiedere di vedere, correggere o cancellare i dati personali che ti riguardano, e puoi presentare reclamo all'autorità per la protezione dei dati. Per una richiesta, scrivi all'indirizzo email qui sotto." }
      ],
      controllerTitle: "Titolare del trattamento",
      fields: { company: "Società", owner: "Titolare", address: "Indirizzo", vat: "Partita IVA / NIP", email: "Email", country: "Paese" },
      updated: "Ultimo aggiornamento: ottobre 2026"
    },

    footer: { rights: "Tutti i diritti riservati.", privacy: "Privacy", top: "Torna su" },

    notfound: { title: "Questa pagina non è nei disegni.", text: "Il link potrebbe essere vecchio o sbagliato.", home: "Vai alla home" }
  },

  /* ================================================================ POLSKI */
  pl: {
    langName: "Polski",
    meta: {
      home: { title: "Witkowski Design · Projektowanie wnętrz, jachtów i produktów", description: "Witkowski Design to studio projektowania wnętrz, wnętrz jachtów i produktów działające między Mediolanem a Polską, z wizualizacjami 3D i brandingiem." },
      work: { title: "Projekty · Witkowski Design", description: "Wybrane wnętrza, jachty, produkty, wizualizacje i identyfikacje Witkowski Design." },
      project: { title: "Projekt · Witkowski Design", description: "Projekt Witkowski Design." },
      services: { title: "Usługi · Witkowski Design", description: "Projektowanie wnętrz, wnętrz jachtów, produktów, wizualizacje 3D i branding. Jedno studio, jeden sposób pracy." },
      about: { title: "O studiu · Witkowski Design", description: "Witkowski Design to studio Bartka Witkowskiego, działające między Mediolanem a Polską dla klientów z całej Europy." },
      contact: { title: "Kontakt · Witkowski Design", description: "Napisz, zadzwoń lub wyślij wiadomość na WhatsAppie do Witkowski Design w sprawie wnętrza, jachtu lub produktu." },
      privacy: { title: "Prywatność · Witkowski Design", description: "Informacja o prywatności witkowskidesign.com. Bez śledzących ciasteczek i analityki." },
      notfound: { title: "Nie znaleziono strony · Witkowski Design", description: "Ta strona nie istnieje." }
    },
    nav: { home: "Start", work: "Projekty", services: "Usługi", about: "O studiu", contact: "Kontakt", menu: "Menu", close: "Zamknij", skip: "Przejdź do treści", language: "Język", main: "Główna" },
    cats: { all: "Wszystkie", interiors: "Wnętrza", yachts: "Jachty", products: "Produkty", visualisation: "Wizualizacje", branding: "Branding" },
    common: { placeholder: "Przykład", viewProject: "Zobacz projekt", todo: "do uzupełnienia" },

    home: {
      eyebrow: "Wnętrza · Jachty · Produkty",
      title: "Spokojne wnętrza,<br> na lądzie <em>i na morzu.</em>",
      caption: "La Mare · kabina jachtu · wizualizacja 3D",
      statement: "Nazywam się Bartek, a Witkowski Design to moje studio między Mediolanem a Polską. Projektuję domy, wnętrza jachtów i przedmioty. Każdy projekt rysuję, modeluję i renderuję, zanim powstanie, więc widzisz efekt jako pierwszy.",
      selected: "Wybrane projekty",
      allWork: "Wszystkie projekty",
      servicesTitle: "Czym zajmuje się studio",
      servicesLink: "Jak pracuję",
      services: {
        interiors: "Domy i wnętrza gościnne, od układu funkcjonalnego po ostatnią klamkę.",
        yachts: "Kabiny, salony i refity, w których każdy centymetr jest przemyślany.",
        products: "Meble, oświetlenie i przedmioty, rysowane z myślą o produkcji.",
        visualisation: "Fotorealistyczne wizualizacje, dzięki którym przejdziesz przez wnętrze, zanim powstanie.",
        branding: "Identyfikacje, druki i oznakowanie, które pasują do miejsc, dla których powstają."
      },
      timbroEyebrow: "Produkt Witkowski Design",
      timbroText: "Cyfrowa karta lojalnościowa z pieczątkami dla kawiarni. Goście dodają ją do Apple Wallet lub Google Wallet jednym dotknięciem: bez aplikacji do pobrania i bez papierowej karty do zgubienia.",
      timbroLink: "Poznaj Timbro",
      timbroCard: "Karta kawowa",
      contactTitle: "Opowiedz mi <em>o swoim wnętrzu.</em>",
      contactText: "Dom, kabina, przedmiot. Napisz kilka zdań i dołącz zdjęcie lub rzut, jeśli je masz. Odpowiadam osobiście."
    },

    work: {
      title: "Projekty",
      intro: "Wnętrza, jachty, produkty, wizualizacje i identyfikacje. Wybierz kategorię, aby zawęzić listę.",
      filterLabel: "Filtruj projekty według kategorii",
      showing: "Projekty: {n}",
      showingOne: "Projekty: 1",
      empty: "W tej kategorii nie ma jeszcze projektów."
    },

    project: {
      client: "Klient",
      place: "Miejsce",
      year: "Rok",
      scope: "Zakres",
      category: "Kategoria",
      back: "Wszystkie projekty",
      next: "Następny projekt",
      missingTitle: "Nie znaleziono projektu",
      missingText: "Ten projekt mógł zmienić nazwę lub zostać usunięty."
    },

    services: {
      title: "Usługi",
      intro: "Pięć dziedzin, jeden sposób pracy. Każdy projekt przechodzi przez te same pięć etapów, więc zawsze wiesz, co będzie dalej.",
      deliverables: "Co otrzymujesz",
      items: {
        interiors: {
          name: "Projektowanie wnętrz",
          text: "Domy, mieszkania i niewielkie wnętrza gościnne. Planuję układ, dobieram materiały i projektuję meble oraz zabudowy na wymiar, a potem czuwam nad realizacją.",
          list: ["Układ funkcjonalny", "Materiały i wykończenia", "Zabudowy i meble na wymiar", "Projekt oświetlenia", "Rysunki techniczne", "Nadzór autorski"]
        },
        yachts: {
          name: "Projektowanie wnętrz jachtów",
          text: "Kabiny, salony i pełne refity jachtów motorowych i żaglowych. W granicach wagi, krzywizn i przepisów klasyfikacyjnych projektuję wnętrza, które są spokojne i przestronne nawet w małej kubaturze.",
          list: ["Studia układu", "Materiały i tkaniny", "Detale stolarskie", "Oświetlenie", "Wizualizacje do akceptacji armatora", "Koordynacja ze stocznią"]
        },
        products: {
          name: "Wzornictwo i projektowanie produktu",
          text: "Meble, oświetlenie i przedmioty, od pierwszego szkicu do modelu gotowego do produkcji. Projektuję z myślą o wykonawcy, tak aby przedmiot dało się naprawdę zrobić.",
          list: ["Szkice koncepcyjne", "Modele 3D CAD", "Prototypy i próbki", "Rysunki wykonawcze", "Wizualizacje produktu"]
        },
        visualisation: {
          name: "Wizualizacje i rendering 3D",
          text: "Fotorealistyczne obrazy wnętrz, jachtów i produktów, dla moich projektów oraz dla architektów, deweloperów, stoczni i marek.",
          list: ["Wizualizacje wnętrz", "Wizualizacje jachtów i budynków", "Zdjęcia produktowe", "Widoki 360°", "Krótkie animacje"]
        },
        branding: {
          name: "Branding i projektowanie graficzne",
          text: "Identyfikacje, druki i oznakowanie, często dla tych samych miejsc, które projektuję. Kawiarnia, showroom czy jacht mogą mówić jednym językiem wizualnym, od logo po menu.",
          list: ["Logo i identyfikacja", "Typografia i kolor", "Druki i materiały firmowe", "Oznakowanie", "Opakowania"]
        }
      },
      processTitle: "Jak pracuję",
      processIntro: "Te same pięć etapów dla kabiny, kuchni czy lampy.",
      steps: [
        { name: "Brief", text: "Spotykamy się osobiście lub online. Słucham, jak mieszkasz, pracujesz lub żeglujesz, i ustalamy zakres, terminy oraz budżet." },
        { name: "Koncepcja", text: "Moodboardy, pierwsze szkice i układ. Jedna jasna idea, zanim pojawią się detale." },
        { name: "Projekt", text: "Materiały, meble, światło i rysunki techniczne. Wszystko ustalone, zwymiarowane i opisane." },
        { name: "Wizualizacja", text: "Fotorealistyczne wizualizacje projektu: widzisz wnętrze i możesz je zmienić, póki zmiany są jeszcze łatwe." },
        { name: "Realizacja", text: "Rysunki dla wykonawców, stoczni lub producentów oraz wsparcie aż do zakończenia prac." }
      ],
      cta: "Zacznijmy projekt"
    },

    about: {
      title: "O studiu",
      lead: "Witkowski Design to studio Bartosza Witkowskiego, dla wszystkich, z którymi pracuje, po prostu Bartka.",
      photoNote: "Portret wkrótce",
      bio: [
        "Studio działa między Mediolanem a Polską, dla klientów z Europy i spoza niej. Projektuje domy, wnętrza jachtów i przedmioty, a także tworzy obrazy i identyfikacje, które im towarzyszą.",
        "Wnętrze, meble, wizualizacje i marka w jednych rękach to mniej przekazywania pracy dalej i jedna idea prowadzona od pierwszego szkicu do gotowego wnętrza.",
        "Obok projektów dla klientów studio tworzy własne produkty. Pierwszym jest Timbro, cyfrowa karta lojalnościowa dla kawiarni."
      ],
      approachTitle: "Podejście",
      principles: [
        { name: "Spokój ponad efekt", text: "Dobre wnętrze to takie, w którym chce się zostać. Mniej materiałów, dobrze użytych." },
        { name: "Narysowane co do milimetra", text: "Na jachcie każdy centymetr jest zaplanowany. Domy i przedmioty dostają tę samą uwagę." },
        { name: "Zobacz najpierw", text: "Każdy projekt powstaje w wizualizacji, zanim zostanie zbudowany, więc decyzje zapadają na podstawie tego, co widzisz." }
      ],
      basesTitle: "Między dwoma miejscami",
      bases: [
        { name: "Mediolan", text: "Włoska kultura designu, rzemieślnicy i dostawcy, a wybrzeże jachtowe w zasięgu ręki." },
        { name: "Polska", text: "Pracownie stolarskie, rzemieślnicy i partnerzy produkcyjni." }
      ]
    },

    contact: {
      title: "Kontakt",
      intro: "Napisz, zadzwoń lub wyślij wiadomość na WhatsAppie. Opowiedz, co planujesz, gdzie i mniej więcej kiedy.",
      email: "E-mail",
      phone: "Telefon",
      whatsapp: "WhatsApp",
      whatsappAction: "Napisz na WhatsAppie",
      based: "Siedziba",
      formTitle: "Wyślij wiadomość",
      name: "Imię i nazwisko",
      yourEmail: "Twój e-mail",
      type: "Rodzaj projektu",
      types: ["Wnętrze", "Jacht", "Produkt", "Wizualizacja", "Branding", "Coś innego"],
      message: "Wiadomość",
      send: "Napisz e-mail",
      note: "Przycisk otwiera Twój program pocztowy z gotową wiadomością. Ta strona niczego nie zapisuje.",
      errName: "Podaj swoje imię.",
      errEmail: "Podaj poprawny adres e-mail, abym mógł odpowiedzieć.",
      errMessage: "Napisz kilka słów o projekcie.",
      opened: "Twój program pocztowy powinien się otworzyć. Jeśli nic się nie stało, napisz bezpośrednio na {email}.",
      subject: "Zapytanie o projekt"
    },

    privacy: {
      title: "Prywatność",
      lead: "Ta strona nie używa śledzących plików cookie, analityki ani reklam. Oto, co to oznacza w praktyce.",
      sections: [
        { title: "Co zbiera ta strona", text: "Sama z siebie nic. Nie ma plików cookie, analityki ani zewnętrznych narzędzi śledzących. Czcionki i obrazy są serwowane z tej strony, więc żadna inna firma nie widzi Twojej wizyty." },
        { title: "Hosting", text: "Strona jest hostowana w GitHub Pages przez GitHub, Inc. Jak każdy serwer, może zapisywać dane techniczne, na przykład adres IP, ze względów bezpieczeństwa. Zobacz <a href=\"https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement\" rel=\"noopener\">oświadczenie o prywatności GitHub</a>." },
        { title: "Gdy się ze mną kontaktujesz", text: "Jeśli piszesz e-mail, dzwonisz lub wysyłasz wiadomość na WhatsAppie, Twoje dane służą wyłącznie do odpowiedzi, a jeśli zaczniemy współpracę, do prowadzenia projektu. Nie są nikomu przekazywane ani używane do marketingu. Formularz kontaktowy niczego nie wysyła do tej strony: otwiera tylko Twój program pocztowy." },
        { title: "Twoje prawa", text: "Zgodnie z RODO możesz poprosić o wgląd, poprawienie lub usunięcie swoich danych osobowych oraz złożyć skargę do organu ochrony danych (w Polsce: Prezes UODO). Aby złożyć wniosek, napisz na adres e-mail poniżej." }
      ],
      controllerTitle: "Administrator danych",
      fields: { company: "Firma", owner: "Właściciel", address: "Adres", vat: "NIP / VAT", email: "E-mail", country: "Kraj" },
      updated: "Ostatnia aktualizacja: październik 2026"
    },

    footer: { rights: "Wszelkie prawa zastrzeżone.", privacy: "Prywatność", top: "Do góry" },

    notfound: { title: "Tej strony nie ma na rysunkach.", text: "Link może być nieaktualny lub błędnie wpisany.", home: "Przejdź na stronę główną" }
  }
};
