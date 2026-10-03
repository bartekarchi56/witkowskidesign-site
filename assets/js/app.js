/*
  Witkowski Design · site renderer
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
  function url(lang, page, slug) {
    if (page === "project") return PREFIX[lang] + "/work/" + slug + "/";
    return PREFIX[lang] + (PATHS[page] || "/");
  }
  function img(slug, file) { return "/projects/" + slug + "/" + file; }
  function find(slug) {
    for (var i = 0; i < PROJECTS.length; i++) if (PROJECTS[i].slug === slug) return PROJECTS[i];
    return null;
  }
  function catsLabel(p, T) {
    return (p.categories || []).map(function (c) { return T.cats[c] || c; }).join(", ");
  }
  function imgTag(src, alt, ratio, opts) {
    opts = opts || {};
    var w = 1600, h = Math.round(w / (ratio || 1.5));
    return '<img src="' + esc(src) + '" alt="' + esc(alt) + '" width="' + w + '" height="' + h + '"' +
      (opts.eager ? ' fetchpriority="high"' : ' loading="lazy"') + ' decoding="async"' +
 + ">";
  }
  var LEVEL = '<svg viewBox="0 0 14 12" aria-hidden="true" focusable="false"><path d="M1.5 1.5h11L7 10.5z" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M0 11h14" stroke="currentColor" stroke-width="1.2"/></svg>';
  function datum(left, right) {
    return '<div class="datum" aria-hidden="true"><span class="datum__mark label">' + LEVEL + esc(left) + '</span><span class="datum__line"></span>' +
      (right ? '<span class="datum__end label">' + right + "</span>" : "") + "</div>";
  }
  function waLink() { return "https://wa.me/" + SITE.contact.whatsapp; }
  function telLink() { return "tel:" + SITE.contact.phone.replace(/[^\d+]/g, ""); }

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
      return '<li><a href="' + url(lang, k) + '"' + (k === active ? ' aria-current="page"' : "") + ">" + T.nav[k] + "</a></li>";
    }).join("");
    return '<a class="skip" href="#main">' + T.nav.skip + "</a>" +
      '<header class="site-header" id="top"><div class="wrap site-header__in">' +
      '<a class="wordmark" href="' + url(lang, "home") + '">Witkowski <em>Design</em></a>' +
      '<nav class="nav" aria-label="' + T.nav.main + '"><ul class="nav__links">' + links + "</ul>" +
      '<div class="langs" role="group" aria-label="' + T.nav.language + '">' + langLinks(lang, page, slug) + "</div></nav>" +
      '<button class="menu-btn" type="button" aria-expanded="false" aria-controls="menu">' + T.nav.menu + "</button>" +
      "</div></header>" +
      '<div class="menu" id="menu" role="dialog" aria-modal="true" aria-label="' + T.nav.menu + '">' +
      '<div class="menu__top"><a class="wordmark" href="' + url(lang, "home") + '">Witkowski <em>Design</em></a>' +
      '<button class="menu-btn menu-close" type="button">' + T.nav.close + "</button></div>" +
      '<nav class="menu__links" aria-label="' + T.nav.main + '">' +
      NAV.map(function (k) { return '<a href="' + url(lang, k) + '"' + (k === active ? ' aria-current="page"' : "") + ">" + T.nav[k] + "</a>"; }).join("") +
      "</nav>" +
      '<div class="menu__foot"><a class="label" href="mailto:' + SITE.contact.email + '">' + SITE.contact.email + "</a>" +
      '<div class="langs" role="group" aria-label="' + T.nav.language + '">' + langLinks(lang, page, slug) + "</div></div>" +
      "</div>";
  }
  function footer(lang) {
    var T = TEXT[lang], c = SITE.contact, year = new Date().getFullYear();
    var social = "";
    if (SITE.social && SITE.social.instagram) social += '<a href="' + esc(SITE.social.instagram) + '" rel="noopener">Instagram</a>';
    if (SITE.social && SITE.social.linkedin) social += '<a href="' + esc(SITE.social.linkedin) + '" rel="noopener">LinkedIn</a>';
    return '<footer class="site-footer"><div class="wrap">' +
      '<div class="grid">' +
      '<div class="foot-brand"><a class="wordmark" href="' + url(lang, "home") + '">Witkowski <em>Design</em></a><p class="label">' + esc(c.cities) + "</p></div>" +
      '<nav class="foot-nav" aria-label="Footer">' + NAV.map(function (k) { return '<a href="' + url(lang, k) + '">' + T.nav[k] + "</a>"; }).join("") + "</nav>" +
      '<div class="foot-contact"><a href="mailto:' + c.email + '">' + c.email + '</a><a href="' + telLink() + '">' + esc(c.phone) + '</a><a href="' + waLink() + '" rel="noopener">WhatsApp</a>' + social + "</div>" +
      "</div>" +
      '<div class="foot-base label"><span>© ' + year + " Witkowski Design. " + T.footer.rights + "</span>" +
      '<nav aria-label="Legal"><a href="' + url(lang, "privacy") + '">' + T.footer.privacy + '</a><a href="#top">' + T.footer.top + " ↑</a></nav></div>" +
      "</div></footer>";
  }

  /* ------------------------------------------------------------ shared blocks */
  function card(p, lang, ratio, i) {
    var T = TEXT[lang];
    var title = loc(p.title, lang);
    var meta = catsLabel(p, T) + (p.year ? " · " + esc(p.year) : "");
    return '<a class="card reveal" href="' + url(lang, "project", p.slug) + '">' +
      '<div class="card__img">' + imgTag(img(p.slug, p.cover.file), loc(p.cover.alt, lang), p.cover.ratio) + "</div>" +
      '<div class="card__cap"><div><h3 class="card__title">' + esc(title) + '</h3><p class="card__meta label">' + meta + "</p></div>" +
      (p.placeholder ? '<span class="tag">' + T.common.placeholder + "</span>" : "") + "</div></a>";
  }
  function cta(lang) {
    var T = TEXT[lang], c = SITE.contact;
    return '<section class="cta wrap reveal" aria-labelledby="cta-title">' +
      '<p class="label">' + T.nav.contact + "</p>" +
      '<h2 class="h1" id="cta-title" style="margin-top:1rem">' + T.home.contactTitle + "</h2>" +
      "<p>" + T.home.contactText + "</p>" +
      '<div class="cta__row">' +
      '<div><span class="label">' + T.contact.email + '</span><a href="mailto:' + c.email + '">' + c.email + "</a></div>" +
      '<div><span class="label">' + T.contact.phone + '</span><a href="' + telLink() + '">' + esc(c.phone) + "</a></div>" +
      '<div><span class="label">' + T.contact.whatsapp + '</span><a href="' + waLink() + '" rel="noopener">' + T.contact.whatsappAction + ' <span class="arrow">→</span></a></div>' +
      "</div></section>";
  }
  function pageHead(title, lead, left, right) {
    return '<section class="page-head wrap"><h1 class="h1">' + title + "</h1>" +
      (lead ? '<p class="lead">' + lead + "</p>" : "") + datum(left || "±0.00", right) + "</section>";
  }

  /* ------------------------------------------------------------ pages */
  var pages = {};

  pages.home = function (lang) {
    var T = TEXT[lang], H = T.home;
    var featured = PROJECTS.filter(function (p) { return p.featured; }).slice(0, 4);
    var hero = featured[0] || PROJECTS[0];
    var ratios = [3 / 2, 4 / 5, 4 / 5, 3 / 2];
    var services = CATS.map(function (k) {
      return '<li><a href="' + url(lang, "services") + "#" + k + '"><span class="disc__name">' + T.services.items[k].name + '</span><span class="disc__text">' + H.services[k] + '</span><span class="arrow" aria-hidden="true">→</span></a></li>';
    }).join("");
    var stamps = "";
    for (var i = 0; i < 10; i++) stamps += '<span class="' + (i < 7 ? "on" : "") + '"></span>';

    return '<section class="hero wrap">' +
      '<div class="hero__row"><p class="label">' + H.eyebrow + '</p><p class="label">' + esc(SITE.contact.cities) + "</p></div>" +
      '<h1 class="display hero__title">' + H.title + "</h1>" +
      datum("±0.00", "Witkowski Design") + "</section>" +
      (hero ? '<figure class="hero__media" style="margin:0">' + imgTag(img(hero.slug, hero.cover.file), loc(hero.cover.alt, lang), hero.cover.ratio, { eager: true }) + "</figure>" +
        '<div class="wrap hero__caption"><a class="label" href="' + url(lang, "project", hero.slug) + '">' + H.caption + ' <span class="arrow">→</span></a></div>' : "") +

      '<section class="section wrap grid statement reveal"><p class="label">' + T.nav.about + '</p><p class="lead">' + H.statement + "</p></section>" +

      '<section class="section wrap" aria-labelledby="sel-title"><div class="section-head"><div><p class="label">' + T.nav.work + '</p><h2 class="h2" id="sel-title">' + H.selected + "</h2></div>" +
      '<a class="more" href="' + url(lang, "work") + '">' + H.allWork + ' <span class="arrow">→</span></a></div>' +
      '<div class="grid selected">' + featured.map(function (p, i) { return card(p, lang, ratios[i], i); }).join("") + "</div></section>" +

      '<section class="section wrap" aria-labelledby="srv-title"><div class="section-head"><div><p class="label">' + T.nav.services + '</p><h2 class="h2" id="srv-title">' + H.servicesTitle + "</h2></div>" +
      '<a class="more" href="' + url(lang, "services") + '">' + H.servicesLink + ' <span class="arrow">→</span></a></div>' +
      '<ul class="disc reveal">' + services + "</ul></section>" +

      '<section class="timbro on-dark" aria-labelledby="timbro-title"><div class="wrap grid">' +
      '<div class="timbro__text reveal"><p class="label">' + H.timbroEyebrow + '</p><h2 class="h1" id="timbro-title"><em>Timbro</em></h2><p>' + H.timbroText + "</p>" +
      '<a class="btn" href="' + SITE.timbro.url + '" rel="noopener">' + H.timbroLink + ' <span class="arrow">→</span></a></div>' +
      '<div class="timbro__visual reveal" aria-hidden="true"><div class="pass"><div class="pass__top"><span class="pass__brand">Timbro</span><span class="label">7 / 10</span></div>' +
      '<p class="pass__name">' + H.timbroCard + '</p><div class="stamps">' + stamps + '</div><div class="pass__foot"><span class="label">Apple Wallet</span><span class="label">Google Wallet</span></div></div></div>' +
      "</div></section>" +

      cta(lang);
  };

  pages.work = function (lang) {
    var T = TEXT[lang], W = T.work;
    var counts = { all: PROJECTS.length };
    CATS.forEach(function (c) { counts[c] = PROJECTS.filter(function (p) { return (p.categories || []).indexOf(c) > -1; }).length; });
    var filters = ["all"].concat(CATS).map(function (c) {
      return '<button type="button" data-cat="' + c + '" aria-pressed="' + (c === "all") + '">' + T.cats[c] + "<sup>" + counts[c] + "</sup></button>";
    }).join("");
    return '<section class="page-head wrap"><h1 class="h1">' + W.title + '</h1><p class="lead">' + W.intro + "</p>" +
      '<div class="filters" role="group" aria-label="' + W.filterLabel + '">' + filters + "</div>" +
      datum("±0.00", '<span class="work-count" aria-live="polite">' + countText(lang, PROJECTS.length) + "</span>") + "</section>" +
      '<section class="wrap section--last"><div class="work-grid">' + PROJECTS.map(function (p) { return card(p, lang, 1.5); }).join("") + "</div></section>";
  };
  function countText(lang, n) {
    var W = TEXT[lang].work;
    return n === 1 ? W.showingOne : W.showing.replace("{n}", n);
  }

  pages.project = function (lang, slug) {
    var T = TEXT[lang], P = T.project, p = find(slug);
    if (!p) {
      return pageHead(P.missingTitle, P.missingText) + '<section class="wrap section--last"><a class="more" href="' + url(lang, "work") + '">' + P.back + ' <span class="arrow">→</span></a></section>';
    }
    var idx = PROJECTS.indexOf(p), next = PROJECTS[(idx + 1) % PROJECTS.length];
    var rows = [["client", loc(p.client, lang)], ["place", loc(p.place, lang)], ["year", p.year], ["scope", loc(p.scope, lang)], ["category", catsLabel(p, T)]]
      .filter(function (r) { return r[1]; })
      .map(function (r) { return '<div><dt class="label">' + P[r[0]] + "</dt><dd>" + esc(r[1]) + "</dd></div>"; }).join("");
    var text = (loc(p.text, lang) || []);
    if (typeof text === "string") text = [text];
    var gallery = (p.images || []).map(function (im) {
      return '<figure class="reveal' + (im.wide ? " wide" : "") + '">' + imgTag(img(p.slug, im.file), loc(im.alt, lang), im.ratio, {}) + "</figure>";
    }).join("");
    return '<section class="page-head project-head wrap">' +
      '<a class="back" href="' + url(lang, "work") + '"><span aria-hidden="true">←</span> ' + P.back + "</a>" +
      '<h1 class="h1">' + esc(loc(p.title, lang)) + "</h1>" +
      (p.placeholder ? '<span class="tag">' + T.common.placeholder + "</span>" : "") +
      '<p class="lead">' + esc(loc(p.summary, lang)) + "</p>" +
      datum("±0.00", esc(catsLabel(p, T))) + "</section>" +
      '<figure class="wrap project-hero-wrap" style="margin-top:0"><div class="project-hero">' + imgTag(img(p.slug, p.cover.file), loc(p.cover.alt, lang), p.cover.ratio, { eager: true }) + "</div></figure>" +
      '<section class="wrap grid project-body">' +
      '<dl class="titleblock"><div class="titleblock__head"><span class="label">Witkowski Design</span><span class="label">' + esc(p.year || "") + "</span></div>" + rows + "</dl>" +
      '<div class="project-text">' + text.map(function (t) { return "<p>" + esc(t) + "</p>"; }).join("") + "</div>" +
      "</section>" +
      '<section class="wrap gallery">' + gallery + "</section>" +
      (next && next !== p ? '<section class="wrap section"><a class="next" href="' + url(lang, "project", next.slug) + '"><div><p class="label">' + P.next + '</p><p class="h2">' + esc(loc(next.title, lang)) + ' <span class="arrow" aria-hidden="true">→</span></p></div>' +
        '<div class="next__img">' + imgTag(img(next.slug, next.cover.file), loc(next.cover.alt, lang), next.cover.ratio) + "</div></a></section>" : "") +
      cta(lang);
  };

  pages.services = function (lang) {
    var T = TEXT[lang], S = T.services;
    var blocks = CATS.map(function (k) {
      var it = S.items[k];
      return '<article class="service grid reveal" id="' + k + '"><div class="service__head"><span class="label">' + T.cats[k] + '</span><h2 class="h2">' + it.name + "</h2></div>" +
        '<div class="service__body"><p>' + it.text + '</p><span class="label">' + S.deliverables + '</span><ul class="deliver">' +
        it.list.map(function (li) { return "<li>" + li + "</li>"; }).join("") + "</ul></div></article>";
    }).join("");
    var steps = S.steps.map(function (s, i) {
      return '<li><span class="num label">0' + (i + 1) + '</span><h3 class="h3">' + s.name + "</h3><p>" + s.text + "</p></li>";
    }).join("");
    return pageHead(S.title, S.intro, "±0.00", CATS.length + " · " + S.steps.length) +
      '<div class="wrap">' + blocks + "</div>" +
      '<section class="section wrap" aria-labelledby="proc-title"><p class="label">' + S.processIntro + '</p><h2 class="h1" id="proc-title" style="margin-top:1rem">' + S.processTitle + "</h2>" +
      '<ol class="process reveal">' + steps + "</ol>" +
      '<p style="margin-top:2rem"><a class="btn" href="' + url(lang, "contact") + '">' + S.cta + ' <span class="arrow">→</span></a></p></section>' +
      cta(lang);
  };

  pages.about = function (lang) {
    var T = TEXT[lang], A = T.about;
    return '<section class="page-head wrap"><h1 class="h1">' + A.title + "</h1>" + datum("±0.00", esc(SITE.contact.cities)) + "</section>" +
      '<section class="wrap grid about-top">' +
      (SITE.portrait
        ? '<figure class="portrait portrait--photo reveal">' + imgTag(SITE.portrait, SITE.legal.owner || SITE.contact.name, 4 / 5) + "</figure>"
        : '<div class="portrait reveal" role="img" aria-label="' + A.photoNote + '"><span class="label">' + A.photoNote + "</span></div>") +
      '<div class="about-text reveal"><p class="h3">' + A.lead + "</p>" + A.bio.map(function (b) { return "<p>" + b + "</p>"; }).join("") + "</div>" +
      "</section>" +
      '<section class="section wrap" aria-labelledby="appr-title"><h2 class="h2" id="appr-title" style="margin-bottom:2.5rem">' + A.approachTitle + "</h2>" +
      '<ul class="principles reveal">' + A.principles.map(function (p) { return '<li><h3 class="h3">' + p.name + "</h3><p>" + p.text + "</p></li>"; }).join("") + "</ul></section>" +
      '<section class="section wrap" aria-labelledby="bases-title"><h2 class="h2" id="bases-title" style="margin-bottom:2.5rem">' + A.basesTitle + "</h2>" +
      '<ul class="bases reveal">' + A.bases.map(function (p) { return '<li><h3 class="h3">' + p.name + "</h3><p>" + p.text + "</p></li>"; }).join("") + "</ul></section>" +
      cta(lang);
  };

  pages.contact = function (lang) {
    var T = TEXT[lang], C = T.contact, c = SITE.contact;
    var opts = C.types.map(function (t) { return "<option>" + t + "</option>"; }).join("");
    return pageHead(C.title, C.intro, "±0.00", esc(c.name)) +
      '<section class="wrap grid contact-grid section--last">' +
      '<ul class="contact-list reveal">' +
      '<li><span class="label">' + C.email + '</span><a href="mailto:' + c.email + '">' + c.email + "</a></li>" +
      '<li><span class="label">' + C.phone + '</span><a href="' + telLink() + '">' + esc(c.phone) + "</a></li>" +
      '<li><span class="label">' + C.whatsapp + '</span><a href="' + waLink() + '" rel="noopener">' + C.whatsappAction + ' <span class="arrow">→</span></a></li>' +
      '<li><span class="label">' + C.based + '</span><span class="v">' + esc(c.cities) + "</span></li>" +
      "</ul>" +
      '<form class="form reveal" id="contact-form" novalidate data-email="' + esc(c.email) + '">' +
      '<h2 class="h3">' + C.formTitle + "</h2>" +
      '<div class="field"><label class="label" for="f-name">' + C.name + '</label><input id="f-name" name="name" autocomplete="name" required aria-describedby="e-name"><p class="err" id="e-name"></p></div>' +
      '<div class="field"><label class="label" for="f-email">' + C.yourEmail + '</label><input id="f-email" name="email" type="email" autocomplete="email" required aria-describedby="e-email"><p class="err" id="e-email"></p></div>' +
      '<div class="field"><label class="label" for="f-type">' + C.type + '</label><select id="f-type" name="type">' + opts + "</select></div>" +
      '<div class="field"><label class="label" for="f-msg">' + C.message + '</label><textarea id="f-msg" name="message" required aria-describedby="e-msg"></textarea><p class="err" id="e-msg"></p></div>' +
      '<button class="btn" type="submit">' + C.send + ' <span class="arrow" aria-hidden="true">→</span></button>' +
      '<p class="note">' + C.note + '</p><p class="status" role="status" aria-live="polite"></p>' +
      "</form></section>";
  };

  pages.privacy = function (lang) {
    var T = TEXT[lang], P = T.privacy, L = SITE.legal;
    var facts = ["company", "owner", "address", "vat", "email", "country"].map(function (k) {
      var v = L[k];
      return '<div><dt class="label">' + P.fields[k] + "</dt><dd>" + (v ? esc(v) : '<span class="todo">' + T.common.todo + "</span>") + "</dd></div>";
    }).join("");
    return pageHead(P.title, P.lead) +
      '<section class="wrap section--last"><div class="prose">' +
      P.sections.map(function (s) { return "<h2>" + s.title + "</h2><p>" + s.text + "</p>"; }).join("") +
      "<h2>" + P.controllerTitle + '</h2><dl class="facts">' + facts + "</dl>" +
      '<p class="label" style="margin-top:2.5rem">' + P.updated + "</p></div></section>";
  };

  pages.notfound = function (lang) {
    var T = TEXT[lang], N = T.notfound;
    return '<section class="page-head wrap nf"><p class="label">404</p><h1 class="h1" style="margin-top:1rem;max-width:14ch">' + N.title + '</h1><p class="lead">' + N.text + "</p>" +
      datum("±0.00") + '<p style="margin-top:2.5rem"><a class="btn" href="' + url(lang, "home") + '">' + N.home + ' <span class="arrow">→</span></a></p></section>';
  };

  /* ------------------------------------------------------------ public API */
  function meta(lang, page, slug) {
    var T = TEXT[lang], m = T.meta[page] || T.meta.home;
    var out = { title: m.title, description: m.description, image: "/assets/img/og-image.jpg" };
    if (page === "project") {
      var p = find(slug);
      if (p) {
        out.title = loc(p.title, lang) + " · Witkowski Design";
        out.description = String(loc(p.summary, lang)).replace(/^\[[^\]]*\]\s*/, "");
        out.image = img(p.slug, p.cover.file);
      }
    }
    return out;
  }
  function render(lang, page, slug) {
    var fn = pages[page] || pages.notfound;
    return header(lang, page, slug) + '<main id="main" tabindex="-1">' + fn(lang, slug) + "</main>" + footer(lang);
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
      var m = location.pathname.match(/^\/(?:(it|pl)\/)?work\/([^\/]+)\/?$/);
      var pm = location.pathname.match(/^\/(it|pl)(\/|$)/);
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
    var menu = document.getElementById("menu");
    var openBtn = document.querySelector(".site-header .menu-btn");
    var closeBtn = menu && menu.querySelector(".menu-close");
    var lastY = window.scrollY;
    window.addEventListener("scroll", function () {
      var y = window.scrollY;
      head.classList.toggle("is-scrolled", y > 8);
      var hide = y > 480 && y > lastY && !head.contains(document.activeElement);
      head.classList.toggle("is-hidden", hide);
      lastY = y;
    }, { passive: true });

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
    if (openBtn && menu) {
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
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    els.forEach(function (el) { io.observe(el); });
  }

  function bindFilters(ctx) {
    var bar = document.querySelector(".filters");
    if (!bar) return;
    var grid = document.querySelector(".work-grid");
    var countEl = document.querySelector(".work-count");
    var T = TEXT[ctx.lang];
    function apply(cat, push) {
      if (CATS.indexOf(cat) < 0) cat = "all";
      bar.querySelectorAll("button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-cat") === cat)); });
      var list = PROJECTS.filter(function (p) { return cat === "all" || (p.categories || []).indexOf(cat) > -1; });
      grid.innerHTML = list.length ? list.map(function (p) { return card(p, ctx.lang, 1.5); }).join("") : '<p class="empty">' + T.work.empty + "</p>";
      grid.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("is-in"); });
      grid.classList.remove("work-grid--fade"); void grid.offsetWidth; grid.classList.add("work-grid--fade");
      countEl.textContent = countText(ctx.lang, list.length);
      if (push && history.replaceState) {
        var u = new URL(location.href);
        if (cat === "all") u.searchParams.delete("c"); else u.searchParams.set("c", cat);
        history.replaceState(null, "", u.pathname + u.search);
      }
    }
    bar.addEventListener("click", function (e) {
      var b = e.target.closest("button");
      if (b) apply(b.getAttribute("data-cat"), true);
    });
    var initial = new URLSearchParams(location.search).get("c");
    if (initial) apply(initial, false);
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
    if (ctx.page === "project" || document.body.getAttribute("data-page") === "notfound") setMeta(ctx);
    bindHeader();
    bindReveal();
    bindFilters(ctx);
    bindForm(ctx);
    if (location.hash && location.hash.length > 1) {
      var target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (target) target.scrollIntoView();
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})(typeof window !== "undefined" ? window : globalThis);
