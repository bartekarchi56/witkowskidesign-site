#!/usr/bin/env node
/*
  Witkowski Design · page generator (optional)

  The site works without this script: every page renders itself in the browser
  from the files in content/. This script writes ready-made HTML for every page,
  every language and every project, so that Google, WhatsApp and LinkedIn see
  full text, the right title and the right preview image.

  It runs automatically on GitHub after every change (see .github/workflows/pages.yml).
  To run it yourself:  node tools/build.js
*/
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const ctx = { console };
ctx.window = ctx;
vm.createContext(ctx);
for (const f of ["content/site.js", "content/text.js", "content/projects.js", "assets/js/app.js"]) {
  vm.runInContext(fs.readFileSync(path.join(ROOT, f), "utf8"), ctx, { filename: f });
}
const { WD, WD_SITE: SITE, WD_TEXT: TEXT, WD_PROJECTS: PROJECTS } = ctx;
// Where the site is published. On GitHub the workflow passes the real address, so the site works
// both at https://<user>.github.io/<repo>/ (before the domain is connected) and at the domain.
const BASE = (process.env.SITE_BASE || "").replace(/\/$/, "");           // "" or "/Lamare"
const DOMAIN = (process.env.SITE_ORIGIN || SITE.domain).replace(/\/$/, ""); // https://witkowskidesign.com
ctx.WD_ROOT = BASE + "/";
const A = (p) => BASE + p; // asset path
const PAGES = ["home", "work", "services", "about", "contact", "privacy"];
const LOCALE = { en: "en_GB", it: "it_IT", pl: "pl_PL" };

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function head(lang, page, slug, opts = {}) {
  const m = WD.meta(lang, page, slug);
  const self = DOMAIN + WD.url(lang, page, slug);
  const alternates = opts.noAlternates ? "" :
    WD.LANGS.map((l) => `<link rel="alternate" hreflang="${l}" href="${DOMAIN + WD.url(l, page, slug)}">`).join("\n  ") +
    `\n  <link rel="alternate" hreflang="x-default" href="${DOMAIN + WD.url("en", page, slug)}">`;
  const ld = page === "home" && lang === "en" ? `
  <script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE.studio,
    url: DOMAIN + A("/"),
    image: DOMAIN + A("/assets/img/og-image.jpg"),
    email: SITE.contact.email,
    telephone: SITE.contact.phone,
    founder: { "@type": "Person", name: SITE.legal.owner || "Bartosz Witkowski" },
    areaServed: "Worldwide",
    address: [{ "@type": "PostalAddress", addressLocality: "Milan", addressCountry: "IT" }, { "@type": "PostalAddress", addressCountry: "PL" }],
    knowsAbout: ["Interior design", "Yacht interior design", "Product design", "Industrial design", "3D visualisation", "Branding", "Graphic design"]
  })}</script>` : "";
  return `<!doctype html>
<html lang="${lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(m.title)}</title>
  <meta name="description" content="${esc(m.description)}">
  ${opts.noindex ? '<meta name="robots" content="noindex">' : `<link rel="canonical" href="${self}">`}
  ${alternates}
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Witkowski Design">
  <meta property="og:title" content="${esc(m.title)}">
  <meta property="og:description" content="${esc(m.description)}">
  <meta property="og:url" content="${self}">
  <meta property="og:image" content="${DOMAIN + m.image}">
  <meta property="og:locale" content="${LOCALE[lang]}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="theme-color" content="#fcfcfb">
  <link rel="icon" href="${A("/assets/img/favicon.svg")}" type="image/svg+xml">
  <link rel="apple-touch-icon" href="${A("/assets/img/apple-touch-icon.png")}">
  <link rel="preload" href="${A("/assets/fonts/cormorant-latin-wght-normal.woff2")}" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="${A("/assets/css/style.css")}">
  <script>document.documentElement.classList.add("js")</script>
  ${BASE ? `<script>window.WD_ROOT = ${JSON.stringify(BASE + "/")}</script>\n  ` : ""}<script src="${A("/content/site.js")}" defer></script>
  <script src="${A("/content/text.js")}" defer></script>
  <script src="${A("/content/projects.js")}" defer></script>
  <script src="${A("/assets/js/app.js")}" defer></script>${ld}
</head>`;
}

function page(lang, name, slug, opts = {}) {
  const body = WD.render(lang, name, slug);
  return `${head(lang, name, slug, opts)}
<body data-page="${name}"${slug ? ` data-slug="${slug}"` : ""}${name === "home" ? ' class="has-hero is-home"' : name === "project" ? ' class="has-hero"' : ""}>
<div id="app">${body}</div>
</body>
</html>
`;
}

function write(rel, html) {
  const file = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}

const out = (lang, name, slug) => {
  const u = WD.url(lang, name, slug).slice(BASE.length); // file path inside the repository
  return (u.endsWith("/") ? u + "index.html" : u).replace(/^\//, "");
};

// Remove generated project pages for projects that no longer exist
for (const prefix of ["", "it/", "pl/"]) {
  const dir = path.join(ROOT, prefix + "work");
  if (!fs.existsSync(dir)) continue;
  for (const d of fs.readdirSync(dir, { withFileTypes: true })) {
    if (d.isDirectory() && !WD.find(d.name)) fs.rmSync(path.join(dir, d.name), { recursive: true });
  }
}

let count = 0;
for (const lang of WD.LANGS) {
  for (const name of PAGES) { write(out(lang, name), page(lang, name)); count++; }
  for (const p of PROJECTS) { write(out(lang, "project", p.slug), page(lang, "project", p.slug)); count++; }
}
write("404.html", page("en", "notfound", "", { noindex: true, noAlternates: true }));

// sitemap.xml
const today = new Date().toISOString().slice(0, 10);
const entries = [];
for (const name of PAGES.concat(PROJECTS.map((p) => "project:" + p.slug))) {
  const [n, slug] = name.startsWith("project:") ? ["project", name.slice(8)] : [name];
  for (const lang of WD.LANGS) {
    entries.push(`  <url>
    <loc>${DOMAIN + WD.url(lang, n, slug)}</loc>
    <lastmod>${today}</lastmod>
${WD.LANGS.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${DOMAIN + WD.url(l, n, slug)}"/>`).join("\n")}
    <xhtml:link rel="alternate" hreflang="x-default" href="${DOMAIN + WD.url("en", n, slug)}"/>
  </url>`);
  }
}
write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join("\n")}
</urlset>
`);

console.log(`Wrote ${count} pages, 404.html and sitemap.xml (${entries.length} URLs).`);
