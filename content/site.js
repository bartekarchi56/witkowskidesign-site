/*
  ABIT. STUDIO · SITE SETTINGS
  ---------------------------------
  Contact details and company data live here, and only here.
  Change a value, save, and every page picks it up.

  Leave a legal field as "" (empty) and the Privacy page will show it
  highlighted as "to be completed" until you fill it in.
*/
window.WD_SITE = {
  studio: "abit. studio",
  handle: "witkowskidesign",
  domain: "https://witkowskidesign.com",

  contact: {
    name: "Bartek Witkowski",
    email: "abit@witkowskidesign.com",
    phone: "+48 530 340 988",
    // WhatsApp number: digits only, with country code, no spaces or "+"
    whatsapp: "48530340988",
    cities: "Milan · Poland"
  },

  // Optional links. Leave "" to hide.
  social: {
    instagram: "",   // e.g. "https://www.instagram.com/witkowskidesign/"
    linkedin: ""
  },

  // Logo in the menu. Leave both "" to use the built-in "abit." logo (it turns white over photos).
  // To use your own file instead, upload it to assets/img/ and write the paths here:
  // logo = dark version for white pages, logoLight = white version for use over photos.
  logo: "",
  logoLight: "",

  // Portrait on the About page. Upload a photo (portrait format, about 1200 x 1500 px)
  // to assets/img/ and write its path here, e.g. "/assets/img/portrait.jpg". Leave "" for the placeholder.
  portrait: "/assets/img/portrait.jpg",
  portraitAlt: "Amina Tilesheva and Bartosz Witkowski",

  // Our own products, shown on the Studio page and in the footer.
  kawka: {
    url: "https://waitlist.kawka.coffee",
    instagram: "https://www.instagram.com/kawka.app/",
    handle: "@kawka.app",
    // The reel that plays behind the kawka. section (a silent MP4) and the still shown before it plays.
    video: "/assets/video/kawka-reel.mp4",
    poster: "/assets/img/kawka-reel-poster.jpg",
    posterTime: 6.5   // the moment of the reel the still is taken from: playback starts there, so nothing jumps
  },
  timbro: {
    url: "https://timbro.witkowskidesign.com"
  },

  // Shown on the Privacy page. Empty fields are flagged "to be completed".
  legal: {
    company: "abit. studio",
    owner: "Bartosz Witkowski",
    address: "",
    vat: "",          // VAT / NIP / Partita IVA
    email: "abit@witkowskidesign.com",
    country: ""
  }
};
