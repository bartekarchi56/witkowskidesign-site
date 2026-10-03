# Witkowski Design · website

The studio website for **Witkowski Design**, published at **https://witkowskidesign.com**.
Plain HTML, CSS and JavaScript. No accounts, no paid services, no tracking.

> First time? Follow **[SETUP.md](SETUP.md)** to switch on GitHub Pages and connect the domain in Cloudflare.

---

## Where things are

| What you want to change | File |
| --- | --- |
| Any text on the site (English, Italian, Polish) | `content/text.js` |
| Projects (titles, texts, images) | `content/projects.js` and the `projects/` folder |
| Email, phone, WhatsApp, company details, logo, portrait | `content/site.js` |
| Colours and layout | `assets/css/style.css` |

You can edit every file directly on github.com: open the file, click the **pencil icon** (Edit),
make the change, then click **Commit changes**. The live site updates by itself in about one or two minutes.

---

## Add a project

1. **Choose a short name** (the "slug"): lowercase, no spaces, dashes between words.
   Example: `villa-garda`. It becomes the web address: `witkowskidesign.com/work/villa-garda/`.

2. **Upload the images** into a new folder `projects/villa-garda/`
   (on GitHub: open the `projects` folder → **Add file** → **Upload files**; in the file name box
   you can type `villa-garda/` to create the folder).
   - `cover.jpg`: the main image (landscape works best, 3:2)
   - `01.jpg`, `02.jpg`, ... : the gallery
   - Export about **2400 px** on the long side for the cover (it fills the whole screen) and
     **2000 px** for the gallery, JPEG quality **75 to 80**, ideally under 500 KB each.
     The free tool [squoosh.app](https://squoosh.app) does this in the browser.

3. **Add an entry** in `content/projects.js`: copy one of the existing `{ ... },` blocks, paste it
   at the top of the list (the order in the file is the order on the site) and edit it:

   ```js
   {
     slug: "villa-garda",
     title: "Villa on Lake Garda",                // one text for all languages...
     categories: ["interiors", "visualisation"],  // interiors, yachts, products, visualisation, branding
     featured: true,                              // show on the home page (first four featured)
     year: "2026",
     client: "Private",
     place: { en: "Lake Garda, Italy", it: "Lago di Garda, Italia", pl: "Jezioro Garda, Włochy" }, // ...or one per language
     scope: { en: "Interior design", it: "Progetto d'interni", pl: "Projekt wnętrza" },
     summary: { en: "One sentence for the card and for Google.", it: "...", pl: "..." },
     text: {
       en: ["First paragraph.", "Second paragraph."],
       it: ["Primo paragrafo.", "Secondo paragrafo."],
       pl: ["Pierwszy akapit.", "Drugi akapit."]
     },
     cover: { file: "cover.jpg", ratio: 3 / 2, alt: { en: "Describe the image", it: "...", pl: "..." } },
     images: [
       { file: "01.jpg", ratio: 3 / 2, wide: true, alt: { en: "Describe the image", it: "...", pl: "..." } },
       { file: "02.jpg", ratio: 4 / 5, alt: { en: "...", it: "...", pl: "..." } }
     ]
   },
   ```

   - `ratio` is width ÷ height of the image (`3 / 2` landscape, `4 / 5` portrait, `1` square).
   - Optional `focus: "50% 70%"` on the cover or an image chooses which part stays visible when
     the photo is cropped (for example on a phone screen): left/right, then top/bottom.
   - `wide: true` makes a gallery image span the full width.
   - `alt` is a short description for people using screen readers, and for Google.

4. **Commit.** That is all. The project appears on the Projects page (in both the Images and
   the List view, and in its category filter), gets its own page in all three languages and is
   added to the sitemap. Projects with `featured: true` also appear in the full-screen slideshow
   on the home page, in the order of the file.

**Remove a placeholder project:** delete its `{ ... },` block from `content/projects.js` and delete
its folder in `projects/`. Placeholder projects are the ones with `placeholder: true`
(they show a "Placeholder" tag on the site).

**La Mare** is a real project with placeholder pictures. Upload the real renders into
`projects/la-mare/` with the same names (`cover.jpg`, `01.jpg`, `02.jpg`, `03.jpg`), and fill in
the `year` in its entry. Add or remove gallery images as you like.

---

## Edit texts

Open `content/text.js`. It has three parts: `en`, `it`, `pl`, in the same order.
Change the words between the quotes and keep the quotes, commas and brackets as they are.

- `<em>...</em>` puts words in italics (used in the big headlines).
- `<br>` forces a line break (used in the home page headline).
- Please do not use long dashes in the copy.
- Page titles and Google descriptions are under `meta` at the top of each language.

## Contact and company details

All in `content/site.js`, in one place. The email is used everywhere on the site, including the
contact form. Fill in `address`, `vat` and `country` under `legal` and they appear on the Privacy page;
until then they are highlighted there as "to be completed".

**Logo.** The "Witkoś" logo is built into the site as a drawing, so it can be white over photos and
black on white pages. To use your own logo files instead, upload a dark and a white version to
`assets/img/` and set `logo` and `logoLight` in `content/site.js`.

To show your portrait on the Studio page, upload a photo to `assets/img/` (for example
`assets/img/portrait.jpg`, portrait format) and set `portrait: "/assets/img/portrait.jpg"`.

---

## How it works (for developers)

- Every page renders from the `content/` files with `assets/js/app.js`.
- `tools/build.js` uses the same renderer to write ready-made HTML for every page, language and
  project (good for Google and for link previews on WhatsApp or LinkedIn) plus `sitemap.xml`.
  GitHub runs it automatically on every push to `main` (`.github/workflows/pages.yml`) before
  publishing. You can also run it yourself with `node tools/build.js` (Node 18 or newer).
- If a project has no generated page yet, `404.html` still shows it from the data.
- Languages: English at `/`, Italian at `/it/`, Polish at `/pl/`, linked with `hreflang`.
- Preview on your computer: `npx serve .` in this folder, then open the address it prints.
- The typeface is Cormorant, self-hosted from `assets/fonts/` (SIL Open Font License).
  No requests go to Google or any other third party.
