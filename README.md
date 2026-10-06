# abit. studio · website

The studio website for **abit. studio**, published at **https://witkowskidesign.com**.
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

### 1. Prepare the photos

- **Format:** JPG (best for photos and renders). PNG and WebP also work.
- **Size:** any size is fine. Full-size camera photos or 6000 px renders can be uploaded as they
  are: when the site publishes, every photo is turned the right way up, shrunk to 2400 px on its
  longest side and compressed (your originals stay untouched in the repository).
  The only limit is GitHub's: **25 MB per file** when uploading in the browser.
- **Names:** lowercase, no spaces, and exactly as you will write them in the list
  (`cover.jpg` and `Cover.JPG` are different files for the website).
  - `cover.jpg` is the big main photo. It fills the whole screen on the home page and on the
    project page, so a **landscape** photo works best.
  - `01.jpg`, `02.jpg`, `03.jpg`, ... are the gallery, shown in that order.

### 2. Upload them

1. On github.com open the repository and click the **projects** folder.
2. Click **Add file** → **Upload files**.
3. Drag the photos in. To put them in a new folder, first type the folder name and a slash in the
   file name box at the top, for example `villa-garda/` (the "slug": lowercase, dashes between
   words; it becomes the address `witkowskidesign.com/work/villa-garda/`).
4. Click **Commit changes**.

To **replace** a grey placeholder, open its folder and upload a photo with exactly the same name
(for example `cover.jpg`); GitHub replaces the old file.

### 3. Add the project to the list

Open `content/projects.js`, click the **pencil icon**, copy one of the `{ ... },` blocks, paste it
where you want the project to appear (the order in the file is the order on the site) and edit it:

```js
{
  slug: "villa-garda",                          // the folder name from step 2
  title: "Villa on Lake Garda",                 // one text for all languages...
  categories: ["interiors", "visualisation"],   // interiors, yachts, products, visualisation, branding
  featured: true,                               // also show it in the home page slideshow
  year: "2026",
  client: "Private",
  place: { en: "Lake Garda, Italy", it: "Lago di Garda, Italia", pl: "Jezioro Garda, Włochy" }, // ...or one per language
  scope: { en: "Interior design", it: "Progetto d'interni", pl: "Projekt wnętrza" },
  summary: { en: "One sentence for Google and link previews.", it: "...", pl: "..." },
  text: {
    en: ["First paragraph.", "Second paragraph."],
    it: ["Primo paragrafo.", "Secondo paragrafo."],
    pl: ["Pierwszy akapit.", "Drugi akapit."]
  },
  cover: "cover.jpg",
  images: ["01.jpg", "02.jpg", "03.jpg"]
},
```

Click **Commit changes**. In a minute or two the project is on the Projects page (Images and List
views, and its category filter), has its own page in all three languages, and is in the sitemap.

**Optional extras for an image** (write it as `{ ... }` instead of just the name):

```js
images: [
  { file: "01.jpg", wide: true },                     // spans the full width of the gallery
  { file: "02.jpg", alt: { en: "Saloon at dusk", it: "Salone al tramonto", pl: "Salon o zmierzchu" } },
  "03.jpg"
],
cover: { file: "cover.jpg", focus: "50% 70%" }        // which part stays visible when cropped (left/right, top/bottom)
```

`alt` is a short description of the photo for blind visitors and for Google; without it the
project title is used.

**Remove a placeholder project:** delete its `{ ... },` block from `content/projects.js` and its
folder in `projects/`. Placeholder projects have `placeholder: true` and a "Placeholder" tag.

**Lamare Pola Negri** (folder `projects/lamare-pola-negri/`) is a real project with its
cover photo. Add its gallery photos to that folder and list them in `images: [...]` in its entry.

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

**Logo.** The "abit." logo is built into the site as a drawing, so it can be white over photos and
black on white pages. To use your own logo files instead, upload a dark and a white version to
`assets/img/` and set `logo` and `logoLight` in `content/site.js`.

To show your portrait on the Studio page, upload a photo to `assets/img/` (for example
`assets/img/portrait.jpg`, portrait format) and set `portrait: "/assets/img/portrait.jpg"`.

**Timbro banner.** The Timbro band on the Studio page sits on `assets/img/timbro-banner.jpg`
(computers, keep the middle free for the text) and `assets/img/timbro-banner-tall.jpg` (phones).
They show Timbro's own stamp cards, drawn with the Timbro site's code. To use other pictures,
replace those two files and keep the names; the site darkens them so the text stays readable.

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
- The typeface is Poppins (Light, Regular, Medium and Light Italic), self-hosted from `assets/fonts/`
  (SIL Open Font License). The logo is drawn from Octarine Bold
  by Alexander Slobzheninov (only the letter shapes are used; the font file is not published).
  No requests go to Google or any other third party.
