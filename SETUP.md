# Putting the site online

Two parts:

- **Part A** puts the site online now, for free, at
  **https://bartekarchi56.github.io/witkowskidesign-site/** (about 5 minutes).
- **Part B** moves it to **https://witkowskidesign.com** whenever you are ready
  (about 15 minutes, then some waiting while DNS updates).

You need to be logged in to **GitHub** (and to **Cloudflare** for Part B).

---

## Part A · Online now at github.io

The site lives in the repository **https://github.com/bartekarchi56/witkowskidesign-site**
(public, which GitHub Pages needs on a free plan).

### A1 · Turn on GitHub Pages

1. Open https://github.com/bartekarchi56/witkowskidesign-site/settings/pages
2. Under **Build and deployment** → **Source**, choose **GitHub Actions**.

### A2 · Publish

1. Click the **Actions** tab of the repository.
2. Click **Publish site** on the left → **Run workflow** → **Run workflow**.
   (A run may already be there with a red cross: that one started before Pages was switched on.
   Running it again fixes it.)
3. Wait for the green tick (one or two minutes), then open
   **https://bartekarchi56.github.io/witkowskidesign-site/**

From now on, every change saved on the `main` branch (a new project, new photos, text edits)
goes live by itself in a minute or two.

---

## Part B · Move it to witkowskidesign.com

> **Your existing records stay as they are.** In Cloudflare you only add records for the root
> domain (`witkowskidesign.com`, shown as `@`) and for `www`. Do **not** edit or delete:
> `timbro` (CNAME, the Timbro site), `resend._domainkey`, `send`, `rsend`, `_dmarc`
> (Resend email), or any MX or TXT records.

### B1 · Add the DNS records in Cloudflare

1. Log in at https://dash.cloudflare.com and click **witkowskidesign.com**.
2. In the left menu click **DNS** → **Records**.
3. **Look first.** If there is already an `A`, `AAAA` or `CNAME` record whose name is
   `witkowskidesign.com` (or `@`) or `www`, it is an old placeholder: delete only those.
   Leave every other record alone (see the list above).
4. Click **Add record** and add these, one at a time. For each one set **Proxy status** to
   **DNS only** (click the orange cloud so it turns **grey**). TTL: Auto.

   | Type | Name | Content (IPv4 / IPv6 / Target) | Proxy |
   | --- | --- | --- | --- |
   | A | `@` | `185.199.108.153` | DNS only |
   | A | `@` | `185.199.109.153` | DNS only |
   | A | `@` | `185.199.110.153` | DNS only |
   | A | `@` | `185.199.111.153` | DNS only |
   | AAAA | `@` | `2606:50c0:8000::153` | DNS only |
   | AAAA | `@` | `2606:50c0:8001::153` | DNS only |
   | AAAA | `@` | `2606:50c0:8002::153` | DNS only |
   | AAAA | `@` | `2606:50c0:8003::153` | DNS only |
   | CNAME | `www` | `bartekarchi56.github.io` | DNS only |

   Why grey (DNS only)? GitHub must see these addresses directly to issue the free HTTPS
   certificate for your domain.

### B2 · Tell GitHub the domain

1. GitHub → the repository → **Settings** → **Pages** → **Custom domain**.
2. Type `witkowskidesign.com` and click **Save**. Wait until it says **DNS check successful**
   (usually 10 to 30 minutes, occasionally a few hours).
3. Tick **Enforce HTTPS**. If the box is greyed out, the certificate is still being made:
   try again a bit later (up to an hour).

### B3 · Publish once more

The site needs one new publish so its links point to the domain instead of `/witkowskidesign-site/`:
**Actions** tab → **Publish site** → **Run workflow** → **Run workflow**.

### B4 · Check

- https://witkowskidesign.com opens the site.
- https://www.witkowskidesign.com goes to the same site.
- https://bartekarchi56.github.io/witkowskidesign-site/ now forwards to witkowskidesign.com.
- https://timbro.witkowskidesign.com still opens Timbro, and email through Resend still works.

---

## Optional but recommended

**Verify the domain in GitHub** (stops anyone else from using it on GitHub Pages):
GitHub → your profile picture → **Settings** → **Pages** → **Add a domain** → type
`witkowskidesign.com`. GitHub shows a `TXT` record (name starting with `_github-pages-challenge-`).
Add it in Cloudflare as a new **TXT** record exactly as shown, then click **Verify**.
This adds one record and does not touch the others.

**Tell Google about the site:** at https://search.google.com/search-console add the domain,
then under **Sitemaps** submit `https://witkowskidesign.com/sitemap.xml`.

See [README.md](README.md) for adding projects and photos and for editing texts.
