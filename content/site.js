/*
  WITKOWSKI DESIGN · SITE SETTINGS
  ---------------------------------
  Contact details and company data live here, and only here.
  Change a value, save, and every page picks it up.

  Leave a legal field as "" (empty) and the Privacy page will show it
  highlighted as "to be completed" until you fill it in.
*/
window.WD_SITE = {
  studio: "Witkowski Design",
  handle: "witkowskidesign",
  domain: "https://witkowskidesign.com",

  contact: {
    name: "Bartek Witkowski",
    email: "bartek.archi56@gmail.com",
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

  // Logo in the menu. Leave both "" to use the built-in "Witkoś" logo (it turns white over photos).
  // To use your own file instead, upload it to assets/img/ and write the paths here:
  // logo = dark version for white pages, logoLight = white version for use over photos.
  logo: "",
  logoLight: "",

  // Portrait on the About page. Upload a photo (portrait format, about 1200 x 1500 px)
  // to assets/img/ and write its path here, e.g. "/assets/img/portrait.jpg". Leave "" for the placeholder.
  portrait: "",

  timbro: {
    url: "https://timbro.witkowskidesign.com"
  },

  // Shown on the Privacy page. Empty fields are flagged "to be completed".
  legal: {
    company: "Witkowski Design",
    owner: "Bartosz Witkowski",
    address: "",
    vat: "",          // VAT / NIP / Partita IVA
    email: "bartek.archi56@gmail.com",
    country: ""
  }
};
