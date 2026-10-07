/*
  abit. studio · site renderer
  Builds every page from content/site.js, content/text.js and content/projects.js.
  The same code runs in the browser and in tools/build.js (which pre-renders the
  HTML for search engines), so there is only one place where markup is defined.
*/
(function (root) {
  "use strict";

  var SITE = root.WD_SITE, TEXT = root.WD_TEXT, PROJECTS = root.WD_PROJECTS;
  var LANGS = ["en", "it", "pl"];
  var PREFIX = { en: "", it: "/it", pl: "/pl" };
  var PATHS = { home: "/", work: "/work/", services: "/services/", about: "/about/", contact: "/contact/", privacy: "/privacy/", notfound: "/404.html" };
  var CATS = ["interiors", "yachts", "products", "visualisation", "branding"];
  var NAV = ["work", "services", "about", "contact"];
  var ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];
  // Pages that open on a full-screen photo: the menu sits on top of the image.
  var HERO_PAGES = { home: true, project: true };

  // "abit." logo, drawn as a vector so it can be white over photos and black on white pages.
  var LOGO_SVG = '<svg class="logo" viewBox="0 0 437 155" aria-hidden="true" focusable="false">' +
    '<path fill="currentColor" d="M57 44.4C23.6 44.4 0 67.6 0 99.8C0 132.4 20.6 155 50.4 155C64.6 155 76.8 149.2 85.2 138.8L85.2 151L114.4 151L114.4 99.8C114.4 67.6 90.4 44.4 57 44.4M57.2 72.4C72 72.4 82.6 83.8 82.6 99.8C82.6 115.6 72 127 57.2 127C42.4 127 31.8 115.6 31.8 99.8C31.8 83.8 42.4 72.4 57.2 72.4M135.2 2.4L135.2 103.6C135.2 133.4 158.4 155 190.6 155C224 155 248.2 131.8 248.2 99.8C248.2 67.8 226.2 44.4 196.2 44.4C184.6 44.4 174.4 48.6 167 55.6L167 2.4L135.2 2.4M216.4 99.8C216.4 115.6 205.8 127 191 127C176.4 127 165.8 115.6 165.8 99.8C165.8 83.8 176.4 72.4 191 72.4C205.8 72.4 216.4 83.8 216.4 99.8M269.4 151L301.2 151L301.2 48.4L269.4 48.4L269.4 151M267 17.8C267 28 274.6 35.4 285.2 35.4C296 35.4 303.6 28 303.6 17.8C303.6 7.4 296 0 285.2 0C274.6 0 267 7.4 267 17.8M318 72.4L332.2 72.4L332.2 116.8C332.2 139.8 345.8 155 366 155C373 155 381.4 153.8 387.6 151.8L387.6 125.6C384.2 126.6 380 127 376.8 127C369 127 364 121.4 364 113L364 72.4L386.8 72.4L386.8 48.4L364 48.4L364 26.4L332.2 26.4L332.2 48.4L318 48.4M400 136.6C400 147 407.6 154.2 418.2 154.2C429 154.2 436.6 147 436.6 136.6C436.6 126.2 429 118.8 418.2 118.8C407.6 118.8 400 126.2 400 136.6"/></svg>';

  /* ------------------------------------------------------------ helpers */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  // A project field can be a plain string or { en, it, pl }.
  function loc(v, lang) {
    if (v == null) return "";
    if (typeof v === "string" || typeof v === "number" || Array.isArray(v)) return v;
    return v[lang] != null ? v[lang] : (v.en != null ? v.en : "");
  }
  // Site root. "/" on the live site; a relative root (with explicit index.html) for offline previews.
  function base() { return root.WD_ROOT || "/"; }
  function url(lang, page, slug) {
    var path = page === "project" ? "work/" + slug + "/" : (PATHS[page] || "/").slice(1);
    var full = (PREFIX[lang] ? PREFIX[lang].slice(1) + "/" : "") + path;
    if (root.WD_INDEX && (full === "" || full.slice(-1) === "/")) full += "index.html";
    return base() + full;
  }
  function img(slug, file) { return base() + "projects/" + slug + "/" + file; }
  // Paths written in content/site.js like "/assets/img/portrait.jpg" follow the site root too.
  function asset(path) { return /^\//.test(path) ? base() + path.slice(1) : path; }
  function find(slug) {
    for (var i = 0; i < PROJECTS.length; i++) if (PROJECTS[i].slug === slug) return PROJECTS[i];
    return null;
  }
  function catsLabel(p, T) {
    return (p.categories || []).map(function (c) { return T.cats[c] || c; }).join(", ");
  }
  function imgTag(src, alt, ratio, opts) {
    opts = opts || {};
    // width/height only when the ratio is known; otherwise the browser uses the photo's own shape
    var size = ratio ? ' width="1600" height="' + Math.round(1600 / ratio) + '"' : "";
    return '<img src="' + esc(src) + '" alt="' + esc(alt) + '"' + size +
      (opts.eager ? ' fetchpriority="high"' : ' loading="lazy"') +
      (opts.focus ? ' style="object-position:' + esc(opts.focus) + '"' : "") + ' decoding="async">';
  }
  // A project image can be written as just a file name ("01.jpg") or as { file, alt, wide, focus, ratio }.
  function pic(p, v, lang) {
    if (!v) v = "cover.jpg";
    if (typeof v === "string") v = { file: v };
    return { src: img(p.slug, v.file), alt: loc(v.alt, lang) || loc(p.title, lang), ratio: v.ratio, wide: v.wide, focus: v.focus };
  }
  function picTag(p, v, lang, opts) {
    var c = pic(p, v, lang);
    opts = opts || {};
    opts.focus = c.focus;
    return imgTag(c.src, c.alt, c.ratio, opts);
  }
  function waLink() { return "https://wa.me/" + SITE.contact.whatsapp; }
  function telLink() { return "tel:" + SITE.contact.phone.replace(/[^\d+]/g, ""); }
  function logo() {
    if (SITE.logo) {
      return '<img class="logo logo--dark" src="' + esc(asset(SITE.logo)) + '" alt="">' +
        '<img class="logo logo--light" src="' + esc(asset(SITE.logoLight || SITE.logo)) + '" alt="">';
    }
    return LOGO_SVG;
  }
  function brand(lang) {
    return '<a class="brand" href="' + url(lang, "home") + '" aria-label="' + esc(SITE.studio) + ', ' + esc(TEXT[lang].nav.home) + '">' + logo() + "</a>";
  }
  function arrow() { return '<span class="arrow" aria-hidden="true">→</span>'; }

  /* ------------------------------------------------------------ chrome */
  function langLinks(lang, page, slug) {
    return LANGS.map(function (l) {
      return '<a href="' + url(l, page === "notfound" ? "home" : page, slug) + '" hreflang="' + l + '" lang="' + l + '" aria-label="' + esc(TEXT[l].langName) + '"' +
        (l === lang ? ' aria-current="true"' : "") + ">" + l.toUpperCase() + "</a>";
    }).join("");
  }
  function header(lang, page, slug) {
    var T = TEXT[lang];
    var active = page === "project" ? "work" : page;
    var links = NAV.map(function (k) {
      return '<a href="' + url(lang, k) + '"' + (k === active ? ' aria-current="page"' : "") + ">" + T.nav[k] + "</a>";
    }).join("");
    var over = HERO_PAGES[page] && (page !== "project" || find(slug));
    return '<a class="skip" href="#main">' + T.nav.skip + "</a>" +
      '<header class="site-header' + (over ? " is-over" : "") + '" id="top">' +
      '<button class="burger" type="button" aria-expanded="false" aria-controls="menu"><span></span><span></span><span class="sr-only">' + T.nav.menu + "</span></button>" +
      '<nav class="nav" aria-label="' + T.nav.main + '">' + links + "</nav>" +
      brand(lang) +
      '<div class="langs" role="group" aria-label="' + T.nav.language + '">' + langLinks(lang, page, slug) + "</div>" +
      "</header>" +
      '<div class="menu" id="menu" role="dialog" aria-modal="true" aria-label="' + T.nav.menu + '">' +
      '<div class="menu__top"><button class="menu-close" type="button">' + T.nav.close + "</button>" + brand(lang) + "<span></span></div>" +
      '<nav class="menu__links" aria-label="' + T.nav.main + '">' +
      '<a href="' + url(lang, "home") + '"' + (active === "home" ? ' aria-current="page"' : "") + ">" + T.nav.home + "</a>" + links +
      "</nav>" +
      '<div class="menu__foot"><div class="langs" role="group" aria-label="' + T.nav.language + '">' + langLinks(lang, page, slug) + "</div>" +
      '<a href="mailto:' + SITE.contact.email + '">' + SITE.contact.email + "</a>" +
      '<a href="' + url(lang, "privacy") + '">' + T.footer.privacy + "</a></div>" +
      "</div>";
  }
  function footer(lang) {
    var T = TEXT[lang], c = SITE.contact, year = new Date().getFullYear();
    var social = "";
    if (SITE.social && SITE.social.instagram) social += '<a href="' + esc(SITE.social.instagram) + '" rel="noopener">Instagram</a>';
    if (SITE.social && SITE.social.linkedin) social += '<a href="' + esc(SITE.social.linkedin) + '" rel="noopener">LinkedIn</a>';
    return '<footer class="site-footer"><div class="wrap foot">' +
      "<p>© " + year + " " + esc(SITE.studio) + " · " + esc(c.cities) + "</p>" +
      '<nav aria-label="' + T.nav.contact + '"><a href="mailto:' + c.email + '">' + c.email + '</a><a href="' + telLink() + '">' + esc(c.phone) + '</a><a href="' + waLink() + '" rel="noopener">WhatsApp</a>' + social +
      '<a href="' + SITE.kawka.url + '" rel="noopener">kawka.</a>' +
      '<a href="' + SITE.timbro.url + '" rel="noopener">Timbro</a>' +
      '<a href="' + url(lang, "privacy") + '">' + T.footer.privacy + "</a></nav>" +
      "</div></footer>";
  }

  /* ------------------------------------------------------------ shared blocks */
  function caption(p, lang, T) {
    var meta = catsLabel(p, T) + (p.year ? " · " + esc(p.year) : "");
    return '<span class="cap"><span class="cap__title">' + esc(loc(p.title, lang)) + "</span>" +
      '<span class="cap__meta">' + meta + "</span>" +
      (p.placeholder ? '<span class="tag">' + T.common.placeholder + "</span>" : "") + "</span>";
  }
  function card(p, lang, extra) {
    var T = TEXT[lang];
    return '<a class="card reveal' + (extra ? " " + extra : "") + '" href="' + url(lang, "project", p.slug) + '">' +
      '<span class="card__img">' + picTag(p, p.cover, lang) + "</span>" +
      caption(p, lang, T) + "</a>";
  }
  function row(p, lang) {
    var T = TEXT[lang];
    return '<a class="row reveal" href="' + url(lang, "project", p.slug) + '">' +
      '<span class="row__title">' + esc(loc(p.title, lang)) + (p.placeholder ? ' <span class="tag">' + T.common.placeholder + "</span>" : "") + "</span>" +
      '<span class="row__meta">' + catsLabel(p, T) + "</span>" +
      '<span class="row__place">' + esc(loc(p.place, lang)) + "</span>" +
      '<span class="row__year">' + esc(p.year || "") + "</span></a>";
  }
  function contactBlock(lang) {
    var T = TEXT[lang], c = SITE.contact;
    return '<section class="contact-band reveal" aria-labelledby="cta-title"><div class="wrap center">' +
      '<p class="eyebrow">' + T.nav.contact + "</p>" +
      '<h2 class="statement" id="cta-title">' + T.home.contactTitle + "</h2>" +
      '<p class="muted narrow">' + T.home.contactText + "</p>" +
      '<p class="big-link"><a href="mailto:' + c.email + '">' + c.email + "</a></p>" +
      '<p class="inline-links"><a href="' + telLink() + '">' + esc(c.phone) + '</a><a href="' + waLink() + '" rel="noopener">' + T.contact.whatsappAction + "</a></p>" +
      "</div></section>";
  }
  function pageTop(title, lead) {
    return '<section class="page-top wrap center"><h1 class="page-title">' + title + "</h1>" +
      (lead ? '<p class="page-lead">' + lead + "</p>" : "") + "</section>";
  }

  /* ------------------------------------------------------------ pages */
  var pages = {};

  pages.home = function (lang) {
    var T = TEXT[lang], H = T.home;
    var featured = PROJECTS.filter(function (p) { return p.featured; });
    if (!featured.length) featured = PROJECTS.slice(0, 1);
    var slides = featured.map(function (p, i) {
      return '<figure class="slide' + (i === 0 ? " is-active" : "") + '"' + (i ? ' aria-hidden="true"' : "") + ">" +
        picTag(p, p.cover, lang, { eager: i === 0 }) + "</figure>";
    }).join("");
    var caps = featured.map(function (p, i) {
      return '<a class="hero__cap' + (i === 0 ? " is-active" : "") + '" href="' + url(lang, "project", p.slug) + '"' + (i ? ' tabindex="-1" aria-hidden="true"' : "") + ">" +
        '<span class="hero__title">' + esc(loc(p.title, lang)) + '</span><span class="hero__meta">' + esc(loc(p.place, lang)) + "</span></a>";
    }).join("");
    // The home page is one screen: the full-screen photographs and the menu, nothing to scroll.
    return '<section class="hero hero--home" aria-label="' + esc(H.selected) + '">' +
      '<h1 class="sr-only">' + esc(T.meta.home.title) + "</h1>" +
      '<div class="hero__slides">' + slides + "</div>" +
      (H.tagline ? '<p class="hero__tagline">' + H.tagline + "</p>" : "") +
      '<div class="hero__bar">' + '<div class="hero__caps">' + caps + "</div>" +
      (featured.length > 1 ? '<button class="hero__pause" type="button" data-pause="' + esc(H.pause) + '" data-play="' + esc(H.play) + '" aria-label="' + esc(H.pause) + '"><span aria-hidden="true"></span></button>' : "") +
      "</div></section>";
  };

  function kawkaBlock(lang) {
    var H = TEXT[lang].home, K = SITE.kawka;
    // The reel plays behind the section (silent, looping); it only starts loading once the section is on screen.
    var video = K.video
      ? '<video class="kawka__video" muted loop playsinline preload="none" poster="' + asset(K.poster) + '" data-start="' + (K.posterTime || 0) + '" aria-hidden="true" tabindex="-1">' +
        '<source src="' + asset(K.video) + '" type="video/mp4"></video>' +
        '<button class="kawka__pause" type="button" data-pause="' + esc(H.kawkaPause) + '" data-play="' + esc(H.kawkaPlay) + '" aria-label="' + esc(H.kawkaPause) + '"><span aria-hidden="true"></span></button>'
      : "";
    return '<section class="kawka' + (K.video ? " kawka--video" : "") + '" id="kawka" aria-labelledby="kawka-title">' + video +
      '<div class="wrap center kawka__inner reveal">' +
      '<p class="eyebrow">' + H.productEyebrow + "</p>" +
      '<div class="kawka__title"><h2 class="kawka__name" id="kawka-title">kawka.</h2>' +
      '<p class="kawka__stamp">' + H.kawkaStamp + "<small>Milano</small></p></div>" +
      '<p class="narrow">' + H.kawkaText + "</p>" +
      '<p class="product-links"><a class="text-link" href="' + K.url + '" rel="noopener">' + H.kawkaLink + " " + arrow() + "</a>" +
      '<a class="text-link" href="' + K.instagram + '" rel="noopener">' + esc(K.handle) + "</a></p></div></section>";
  }

  /* Timbro's banner, built from separate pieces so the cards can float and the stamps can turn.
     Positions are in px on a fixed canvas (wide: computers, tall: phones) that is scaled to cover the section.
     Cards: [image, centre x, top y, rotation, card height]; stamps: [x, y, size, rotation]. */
  var TIMBRO_ART = {
    wide: { w: 1820, h: 700,
      cards: [["gelato", 40, 340, -15, 284.4], ["bottega", 235, 120, -10, 254.1], ["navigli", 465, 55, -3, 263.6], ["brera", 395, 375, 7, 253],
              ["kyoto", 1355, 85, 4, 231.8], ["pane", 1585, 60, 12, 284.4], ["salone", 1450, 385, -8, 231.8], ["minimal", 1775, 380, 14, 231.8]],
      stamps: [[-10, 560, 190, -12], [655, 505, 150, 14], [1615, 545, 170, 10], [1680, -60, 160, -8]] },
    tall: { w: 600, h: 780,
      cards: [["brera", 150, -185, 10, 253], ["navigli", 470, -150, -8, 263.6], ["kyoto", 140, 630, -6, 231.8], ["bottega", 465, 655, 9, 254.1]],
      stamps: [[-60, 140, 150, -10], [495, 560, 140, 12]] }
  };
  function timbroArt(kind) {
    var A = TIMBRO_ART[kind], html = "";
    A.stamps.forEach(function (s, i) {
      html += '<img class="timbro__stamp" src="' + asset("/assets/img/timbro/stamp.webp") + '" alt="" loading="lazy" decoding="async" style="left:' + (s[0] - s[2] * 0.02) + "px;top:" + (s[1] - s[2] * 0.02) +
        "px;width:" + s[2] * 1.04 + "px;--r:" + s[3] + "deg;animation-direction:" + (i % 2 ? "reverse" : "normal") + '">';
    });
    A.cards.forEach(function (c, i) {
      // each picture has 40px of room around the card (90px below, for its shadow); the card turns around a point below its middle
      var oy = ((40 + 1.2 * c[4]) / (c[4] + 130) * 100).toFixed(1);
      html += '<span class="timbro__card" style="left:' + (c[1] - 165) + "px;top:" + (c[2] - 40) + "px;--t:" + (4.6 + (i * 0.7) % 2.2).toFixed(1) + "s;--d:-" + (i * 1.3 % 4).toFixed(1) + 's">' +
        '<img src="' + asset("/assets/img/timbro/card-" + c[0] + ".webp") + '" alt="" loading="lazy" decoding="async" style="transform:rotate(' + c[3] + "deg);transform-origin:50% " + oy + '%"></span>';
    });
    return '<div class="timbro__art timbro__art--' + kind + '" aria-hidden="true"><div class="timbro__canvas" style="width:' + A.w + "px;height:" + A.h + 'px">' + html + "</div></div>";
  }

  function timbroBlock(lang) {
    var H = TEXT[lang].home;
    return '<section class="timbro" id="timbro" aria-labelledby="timbro-title">' + timbroArt("wide") + timbroArt("tall") + '<div class="wrap center reveal">' +
      '<p class="eyebrow">' + H.productEyebrow + '</p><h2 class="timbro__name" id="timbro-title">Timbro</h2>' +
      '<p class="narrow">' + H.timbroText + "</p>" +
      '<p><a class="text-link" href="' + SITE.timbro.url + '" rel="noopener">' + H.timbroLink + " " + arrow() + "</a></p></div></section>";
  }

  pages.work = function (lang) {
    var T = TEXT[lang], W = T.work;
    var counts = { all: PROJECTS.length };
    CATS.forEach(function (c) { counts[c] = PROJECTS.filter(function (p) { return (p.categories || []).indexOf(c) > -1; }).length; });
    var filters = ["all"].concat(CATS).map(function (c) {
      return '<button type="button" data-cat="' + c + '" aria-pressed="' + (c === "all") + '">' + T.cats[c] + " <sup>" + counts[c] + "</sup></button>";
    }).join("");
    return pageTop(W.title, W.intro) +
      '<div class="wrap work-tools">' +
      '<div class="filters" role="group" aria-label="' + W.filterLabel + '">' + filters + "</div>" +
      '<div class="views" role="group" aria-label="' + W.view + '"><button type="button" data-view="grid" aria-pressed="true">' + W.viewImages + '</button><button type="button" data-view="list" aria-pressed="false">' + W.viewList + "</button></div>" +
      '<p class="sr-only work-count" aria-live="polite">' + countText(lang, PROJECTS.length) + "</p>" +
      "</div>" +
      '<section class="wrap work"><div class="work-grid">' + PROJECTS.map(function (p) { return card(p, lang); }).join("") + "</div></section>";
  };
  function countText(lang, n) {
    var W = TEXT[lang].work;
    return n === 1 ? W.showingOne : W.showing.replace("{n}", n);
  }

  pages.project = function (lang, slug) {
    var T = TEXT[lang], P = T.project, p = find(slug);
    if (!p) {
      return pageTop(P.missingTitle, P.missingText) + '<section class="wrap center pad-bottom"><a class="text-link" href="' + url(lang, "work") + '">' + P.back + " " + arrow() + "</a></section>";
    }
    var idx = PROJECTS.indexOf(p), next = PROJECTS[(idx + 1) % PROJECTS.length];
    var rows = [["client", loc(p.client, lang)], ["place", loc(p.place, lang)], ["year", p.year], ["scope", loc(p.scope, lang)], ["category", catsLabel(p, T)]]
      .filter(function (r) { return r[1]; })
      .map(function (r) { return "<div><dt>" + P[r[0]] + "</dt><dd>" + esc(r[1]) + "</dd></div>"; }).join("");
    var text = loc(p.text, lang) || [];
    if (typeof text === "string") text = [text];
    var gallery = (p.images || []).map(function (im) {
      return '<figure class="reveal' + (pic(p, im, lang).wide ? " wide" : "") + '">' + picTag(p, im, lang) + "</figure>";
    }).join("");
    return '<section class="hero hero--project">' +
      '<div class="hero__slides"><figure class="slide is-active">' + picTag(p, p.cover, lang, { eager: true }) + "</figure></div>" +
      '<div class="hero__bar"><div class="hero__caps"><div class="hero__cap is-active">' +
      '<h1 class="hero__title">' + esc(loc(p.title, lang)) + "</h1>" +
      '<span class="hero__meta">' + esc(loc(p.place, lang)) + "</span>" +
      (p.placeholder ? '<span class="tag tag--light">' + T.common.placeholder + "</span>" : "") +
      "</div></div></div></section>" +
      '<section class="wrap project-info">' +
      '<p class="back-row"><a class="text-link" href="' + url(lang, "work") + '"><span aria-hidden="true">←</span> ' + P.back + "</a></p>" +
      '<dl class="facts">' + rows + "</dl>" +
      '<div class="project-text">' + text.map(function (t) { return "<p>" + esc(t) + "</p>"; }).join("") + "</div>" +
      "</section>" +
      (gallery ? '<section class="wrap gallery">' + gallery + "</section>" : "") +
      (next && next !== p ? '<a class="next" href="' + url(lang, "project", next.slug) + '">' +
        '<span class="next__img">' + picTag(next, next.cover, lang) + "</span>" +
        '<span class="next__text"><span class="eyebrow">' + P.next + '</span><span class="next__title">' + esc(loc(next.title, lang)) + "</span></span></a>" : "") +
      contactBlock(lang);
  };

  pages.services = function (lang) {
    var T = TEXT[lang], S = T.services;
    var blocks = CATS.map(function (k) {
      var it = S.items[k];
      return '<article class="service reveal" id="' + k + '"><h2 class="service__name">' + it.name + "</h2>" +
        '<div class="service__body"><p>' + it.text + '</p><p class="service__list"><span class="eyebrow">' + S.deliverables + "</span>" +
        it.list.join(" · ") + "</p></div></article>";
    }).join("");
    var steps = S.steps.map(function (s, i) {
      return '<li><span class="step__num">' + ROMAN[i] + '</span><h3 class="step__name">' + s.name + "</h3><p>" + s.text + "</p></li>";
    }).join("");
    return pageTop(S.title, S.intro) +
      '<div class="wrap services">' + blocks + "</div>" +
      '<section class="process wrap reveal" aria-labelledby="proc-title"><div class="center"><h2 class="eyebrow" id="proc-title">' + S.processTitle + '</h2><p class="statement statement--small">' + S.processIntro + "</p></div>" +
      '<ol class="steps">' + steps + "</ol>" +
      '<p class="center"><a class="btn" href="' + url(lang, "contact") + '">' + S.cta + "</a></p></section>" +
      contactBlock(lang);
  };

  pages.about = function (lang) {
    var T = TEXT[lang], A = T.about;
    return pageTop(A.title) +
      '<section class="wrap about">' +
      (SITE.portrait
        ? '<figure class="portrait reveal">' + imgTag(asset(SITE.portrait), SITE.portraitAlt || SITE.legal.owner || SITE.contact.name, 4 / 5) + "</figure>"
        : '<div class="portrait portrait--empty reveal" role="img" aria-label="' + A.photoNote + '"><span>' + A.photoNote + "</span></div>") +
      '<div class="about__text reveal"><p class="statement statement--left">' + A.lead + "</p>" + A.bio.map(function (b) { return "<p>" + b + "</p>"; }).join("") + "</div>" +
      "</section>" +
      '<section class="wrap principles-wrap" aria-labelledby="appr-title"><h2 class="eyebrow center" id="appr-title">' + A.approachTitle + "</h2>" +
      '<ul class="principles reveal">' + A.principles.map(function (p) { return "<li><h3>" + p.name + "</h3><p>" + p.text + "</p></li>"; }).join("") + "</ul></section>" +
      '<section class="wrap principles-wrap" aria-labelledby="bases-title"><h2 class="eyebrow center" id="bases-title">' + A.basesTitle + "</h2>" +
      '<ul class="principles principles--two reveal">' + A.bases.map(function (p) { return "<li><h3>" + p.name + "</h3><p>" + p.text + "</p></li>"; }).join("") + "</ul></section>" +
      kawkaBlock(lang) +
      timbroBlock(lang) +
      contactBlock(lang);
  };

  pages.contact = function (lang) {
    var T = TEXT[lang], C = T.contact, c = SITE.contact;
    var opts = C.types.map(function (t) { return "<option>" + t + "</option>"; }).join("");
    return pageTop(C.title, C.intro) +
      '<section class="wrap center contact-direct reveal">' +
      '<p class="big-link"><a href="mailto:' + c.email + '">' + c.email + "</a></p>" +
      '<dl class="contact-list">' +
      "<div><dt>" + C.phone + '</dt><dd><a href="' + telLink() + '">' + esc(c.phone) + "</a></dd></div>" +
      "<div><dt>" + C.whatsapp + '</dt><dd><a href="' + waLink() + '" rel="noopener">' + C.whatsappAction + "</a></dd></div>" +
      "<div><dt>" + C.based + "</dt><dd>" + esc(c.cities) + "</dd></div>" +
      "</dl></section>" +
      '<section class="wrap form-wrap reveal">' +
      '<form class="form" id="contact-form" novalidate data-email="' + esc(c.email) + '">' +
      '<h2 class="eyebrow center">' + C.formTitle + "</h2>" +
      '<div class="form__row">' +
      '<div class="field"><label for="f-name">' + C.name + '</label><input id="f-name" name="name" autocomplete="name" required aria-describedby="e-name"><p class="err" id="e-name"></p></div>' +
      '<div class="field"><label for="f-email">' + C.yourEmail + '</label><input id="f-email" name="email" type="email" autocomplete="email" required aria-describedby="e-email"><p class="err" id="e-email"></p></div>' +
      "</div>" +
      '<div class="field"><label for="f-type">' + C.type + '</label><select id="f-type" name="type">' + opts + "</select></div>" +
      '<div class="field"><label for="f-msg">' + C.message + '</label><textarea id="f-msg" name="message" required aria-describedby="e-msg"></textarea><p class="err" id="e-msg"></p></div>' +
      '<p class="center"><button class="btn" type="submit">' + C.send + "</button></p>" +
      '<p class="note center">' + C.note + '</p><p class="status center" role="status" aria-live="polite"></p>' +
      "</form></section>";
  };

  pages.privacy = function (lang) {
    var T = TEXT[lang], P = T.privacy, L = SITE.legal;
    var facts = ["company", "owner", "address", "vat", "email", "country"].map(function (k) {
      var v = L[k];
      return "<div><dt>" + P.fields[k] + "</dt><dd>" + (v ? esc(v) : '<span class="todo">' + T.common.todo + "</span>") + "</dd></div>";
    }).join("");
    return pageTop(P.title, P.lead) +
      '<section class="wrap prose pad-bottom">' +
      P.sections.map(function (s) { return "<h2>" + s.title + "</h2><p>" + s.text + "</p>"; }).join("") +
      "<h2>" + P.controllerTitle + '</h2><dl class="facts facts--legal">' + facts + "</dl>" +
      '<p class="muted small">' + P.updated + "</p></section>";
  };

  pages.notfound = function (lang) {
    var T = TEXT[lang], N = T.notfound;
    return '<section class="page-top wrap center nf"><p class="eyebrow">404</p><h1 class="statement">' + N.title + '</h1><p class="page-lead">' + N.text + "</p>" +
      '<p><a class="btn" href="' + url(lang, "home") + '">' + N.home + "</a></p></section>";
  };

  /* ------------------------------------------------------------ public API */
  function meta(lang, page, slug) {
    var T = TEXT[lang], m = T.meta[page] || T.meta.home;
    var out = { title: m.title, description: m.description, image: base() + "assets/img/og-image.jpg" };
    if (page === "project") {
      var p = find(slug);
      if (p) {
        out.title = loc(p.title, lang) + " · " + SITE.studio;
        out.description = String(loc(p.summary, lang)).replace(/^\[[^\]]*\]\s*/, "");
        out.image = pic(p, p.cover, lang).src;
      }
    }
    return out;
  }
  function render(lang, page, slug) {
    var fn = pages[page] || pages.notfound;
    return header(lang, page, slug) + '<main id="main" tabindex="-1">' + fn(lang, slug) + "</main>" + (page === "home" ? "" : footer(lang));
  }
  root.WD = { LANGS: LANGS, PREFIX: PREFIX, url: url, render: render, meta: meta, find: find, img: img };

  /* ------------------------------------------------------------ browser behaviour */
  if (typeof document === "undefined") return;

  var docEl = document.documentElement;
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function detect() {
    var body = document.body;
    var lang = LANGS.indexOf(docEl.lang) > -1 ? docEl.lang : "en";
    var page = body.getAttribute("data-page") || "home";
    var slug = body.getAttribute("data-slug") || "";
    if (page === "notfound") {
      // Fallback for projects that have no generated page yet: /work/<slug>/ or /it/work/<slug>/
      // path relative to the site root (the site may live in a sub-folder, e.g. on github.io)
      var b = base().charAt(0) === "/" ? base() : "/";
      var rel = location.pathname.indexOf(b) === 0 ? "/" + location.pathname.slice(b.length) : location.pathname;
      var m = rel.match(/^\/(?:(it|pl)\/)?work\/([^\/]+)\/?$/);
      var pm = rel.match(/^\/(it|pl)(\/|$)/);
      if (pm) lang = pm[1];
      if (m && find(m[2])) { page = "project"; slug = m[2]; }
      docEl.lang = lang;
    }
    return { lang: lang, page: page, slug: slug };
  }

  function setMeta(ctx) {
    var m = meta(ctx.lang, ctx.page, ctx.slug);
    document.title = m.title;
    var d = document.querySelector('meta[name="description"]');
    if (d) d.setAttribute("content", m.description);
  }

  function bindHeader() {
    var head = document.querySelector(".site-header");
    var hero = document.querySelector(".hero");
    var menu = document.getElementById("menu");
    var openBtn = head.querySelector(".burger");
    var closeBtn = menu.querySelector(".menu-close");
    var canOver = head.classList.contains("is-over") && hero;
    var lastY = window.scrollY;

    function onScroll() {
      var y = window.scrollY;
      if (canOver) head.classList.toggle("is-over", y < hero.offsetHeight - head.offsetHeight);
      head.classList.toggle("is-solid", !head.classList.contains("is-over") && y > 4);
      var hide = y > window.innerHeight * 0.6 && y > lastY + 2 && !head.contains(document.activeElement);
      if (y < lastY - 2 || y < 80) hide = false;
      if (Math.abs(y - lastY) > 2) head.classList.toggle("is-hidden", hide);
      lastY = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    function open() {
      menu.classList.add("is-open");
      openBtn.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
      var first = menu.querySelector(".menu__links a");
      // wait one frame: the panel must be visible before it can take focus
      setTimeout(function () { if (first) first.focus(); }, 30);
    }
    function close() {
      menu.classList.remove("is-open");
      openBtn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
      openBtn.focus();
    }
    openBtn.addEventListener("click", open);
    closeBtn.addEventListener("click", close);
    document.addEventListener("keydown", function (e) {
      if (!menu.classList.contains("is-open")) return;
      if (e.key === "Escape") return close();
      if (e.key !== "Tab") return;
      var f = menu.querySelectorAll("a, button");
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });
  }

  function bindSlideshow() {
    var slides = document.querySelectorAll(".hero--home .slide");
    if (slides.length < 2) return;
    var caps = document.querySelectorAll(".hero__cap");
    var btn = document.querySelector(".hero__pause");
    var i = 0, timer = null, playing = !reduce;
    function show(n) {
      slides[i].classList.remove("is-active"); slides[i].setAttribute("aria-hidden", "true");
      caps[i].classList.remove("is-active"); caps[i].setAttribute("aria-hidden", "true"); caps[i].setAttribute("tabindex", "-1");
      i = (n + slides.length) % slides.length;
      slides[i].classList.add("is-active"); slides[i].removeAttribute("aria-hidden");
      caps[i].classList.add("is-active"); caps[i].removeAttribute("aria-hidden"); caps[i].removeAttribute("tabindex");
      var im = slides[i].querySelector("img");
      if (im && im.loading === "lazy") im.loading = "eager";
    }
    function start() { stop(); timer = setInterval(function () { show(i + 1); }, 4500); }
    function stop() { if (timer) clearInterval(timer); timer = null; }
    function sync() {
      btn.classList.toggle("is-paused", !playing);
      btn.setAttribute("aria-label", btn.getAttribute(playing ? "data-pause" : "data-play"));
      document.querySelector(".hero").classList.toggle("is-paused", !playing);
    }
    // preload the next images once the first one is shown
    window.addEventListener("load", function () {
      slides.forEach(function (s) { var im = s.querySelector("img"); if (im) im.loading = "eager"; });
    });
    btn.addEventListener("click", function () { playing = !playing; if (playing) start(); else stop(); sync(); });
    document.addEventListener("visibilitychange", function () { if (document.hidden) stop(); else if (playing) start(); });
    if (playing) start();
    sync();
  }

  // kawka. reel: plays only while the section is on screen, never for people who asked for less motion
  // or to save data, and can be paused with its button.
  function bindKawkaVideo() {
    var video = document.querySelector(".kawka__video");
    if (!video) return;
    var btn = document.querySelector(".kawka__pause");
    var saveData = navigator.connection && navigator.connection.saveData;
    var wanted = !reduce && !saveData, visible = !("IntersectionObserver" in window), started = false;
    video.muted = true;
    function sync() {
      if (wanted && visible) {
        // the first time, carry on from the moment shown in the still instead of the reel's dark opening
        if (!started) {
          started = true;
          var at = parseFloat(video.getAttribute("data-start")) || 0;
          if (video.readyState > 0) video.currentTime = at;
          else video.addEventListener("loadedmetadata", function () { video.currentTime = at; }, { once: true });
        }
        var p = video.play();
        if (p && p.catch) p.catch(function () { /* autoplay refused: the poster stays */ });
      } else {
        video.pause();
      }
      btn.classList.toggle("is-paused", !wanted);
      btn.setAttribute("aria-label", btn.getAttribute(wanted ? "data-pause" : "data-play"));
    }
    btn.addEventListener("click", function () { wanted = !wanted; sync(); });
    if (!visible) {
      new IntersectionObserver(function (entries) {
        visible = entries[0].isIntersecting;
        sync();
      }, { rootMargin: "200px 0px" }).observe(video.parentNode);
    }
    sync();
  }

  // scale the Timbro banner canvas so it covers the section, like a background image would
  function bindTimbroArt() {
    var sec = document.querySelector(".timbro");
    if (!sec) return;
    var arts = sec.querySelectorAll(".timbro__art");
    function fit() {
      arts.forEach(function (a) {
        var c = a.firstChild, s = Math.max(sec.offsetWidth / c.offsetWidth, sec.offsetHeight / c.offsetHeight);
        if (isFinite(s) && s > 0) c.style.setProperty("--s", s.toFixed(4));
      });
    }
    fit();
    if ("ResizeObserver" in window) new ResizeObserver(fit).observe(sec);
    else window.addEventListener("resize", fit);
  }

  function bindReveal() {
    var els = document.querySelectorAll(".reveal");
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("is-in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.06 });
    els.forEach(function (el) { io.observe(el); });
  }

  function bindWork(ctx) {
    var bar = document.querySelector(".filters");
    if (!bar) return;
    var views = document.querySelector(".views");
    var section = document.querySelector(".work");
    var countEl = document.querySelector(".work-count");
    var T = TEXT[ctx.lang];
    var state = { cat: "all", view: "grid" };
    try { state.view = localStorage.getItem("wd-view") === "list" ? "list" : "grid"; } catch (e) { /* storage blocked */ }
    function draw(push) {
      bar.querySelectorAll("button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-cat") === state.cat)); });
      views.querySelectorAll("button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-view") === state.view)); });
      var list = PROJECTS.filter(function (p) { return state.cat === "all" || (p.categories || []).indexOf(state.cat) > -1; });
      var inner = !list.length ? '<p class="empty center">' + T.work.empty + "</p>" :
        state.view === "list" ? '<div class="work-list">' + list.map(function (p) { return row(p, ctx.lang); }).join("") + "</div>" :
        '<div class="work-grid">' + list.map(function (p) { return card(p, ctx.lang); }).join("") + "</div>";
      section.innerHTML = inner;
      section.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("is-in"); });
      countEl.textContent = countText(ctx.lang, list.length);
      if (push && history.replaceState) {
        try {
          var u = new URL(location.href);
          if (state.cat === "all") u.searchParams.delete("c"); else u.searchParams.set("c", state.cat);
          history.replaceState(null, "", u.pathname + u.search);
        } catch (err) { /* address bar not writable (preview frame) */ }
      }
    }
    bar.addEventListener("click", function (e) {
      var b = e.target.closest("button");
      if (!b) return;
      state.cat = CATS.indexOf(b.getAttribute("data-cat")) > -1 ? b.getAttribute("data-cat") : "all";
      draw(true);
    });
    views.addEventListener("click", function (e) {
      var b = e.target.closest("button");
      if (!b) return;
      state.view = b.getAttribute("data-view") === "list" ? "list" : "grid";
      try { localStorage.setItem("wd-view", state.view); } catch (err) { /* storage blocked */ }
      draw(false);
    });
    var initial = new URLSearchParams(location.search).get("c");
    if (CATS.indexOf(initial) > -1) state.cat = initial;
    if (state.cat !== "all" || state.view !== "grid") draw(false);
  }

  function bindForm(ctx) {
    var form = document.getElementById("contact-form");
    if (!form) return;
    var C = TEXT[ctx.lang].contact, to = form.getAttribute("data-email");
    function set(id, input, msg) {
      document.getElementById(id).textContent = msg || "";
      input.setAttribute("aria-invalid", msg ? "true" : "false");
      return !msg;
    }
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.elements.name, email = form.elements.email, msg = form.elements.message, type = form.elements.type;
      var ok = [
        set("e-name", name, name.value.trim() ? "" : C.errName),
        set("e-email", email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()) ? "" : C.errEmail),
        set("e-msg", msg, msg.value.trim() ? "" : C.errMessage)
      ];
      var firstBad = [name, email, msg][ok.indexOf(false)];
      if (firstBad) { firstBad.focus(); return; }
      var subject = C.subject + " · " + type.value + " · " + name.value.trim();
      var body = msg.value.trim() + "\n\n" + name.value.trim() + "\n" + email.value.trim();
      window.location.href = "mailto:" + to + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      form.querySelector(".status").textContent = C.opened.replace("{email}", to);
    });
  }

  function start() {
    var ctx = detect();
    var app = document.getElementById("app");
    if (!app) return;
    app.innerHTML = render(ctx.lang, ctx.page, ctx.slug);
    document.body.classList.toggle("has-hero", ctx.page === "home" || (ctx.page === "project" && !!find(ctx.slug)));
    document.body.classList.toggle("is-home", ctx.page === "home");
    if (ctx.page === "project" || document.body.getAttribute("data-page") === "notfound") setMeta(ctx);
    bindHeader();
    bindSlideshow();
    bindKawkaVideo();
    bindTimbroArt();
    bindReveal();
    bindWork(ctx);
    bindForm(ctx);
    if (location.hash && location.hash.length > 1) {
      var target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (target) target.scrollIntoView();
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})(typeof window !== "undefined" ? window : globalThis);
