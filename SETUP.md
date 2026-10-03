# Putting the site online at witkowskidesign.com

About 15 minutes of clicking, then some waiting while DNS and the security certificate switch on.
You need to be logged in to **GitHub** and **Cloudflare**.

> **Your existing records stay as they are.** In Cloudflare you only add records for the root
> domain (`witkowskidesign.com`, shown as `@`) and for `www`. Do **not** edit or delete:
> `timbro` (CNAME, the Timbro site), `resend._domainkey`, `send`, `rsend`, `_dmarc`
> (Resend email), or any MX or TXT records.

---

## Step 1 · Put the new site on the main branch

The site was built on a separate branch. Merge it into `main`:

1. Open https://github.com/bartekarchi56/lamare
2. Click **Pull requests** → **New pull request**.
3. Set **base: main** and **compare: claude/ecstatic-wright-1dtnmy**.
4. Click **Create pull request**, then **Merge pull request** → **Confirm merge**.

## Step 2 · Turn on GitHub Pages

1. In the repository click **Settings** (top right of the repository menu).
2. In the left column click **Pages**.
3. Under **Build and deployment** → **Source**, choose **GitHub Actions**.
   (On a free GitHub plan the repository must be **public** for Pages to work.
   If it is private: Settings → General → scroll to **Danger Zone** → **Change visibility** → Public.)
4. Click the **Actions** tab at the top. Click **Publish site** on the left,
   then **Run workflow** → **Run workflow**. Wait for the green tick (about one minute).

## Step 3 · Tell GitHub the domain

1. Back in **Settings** → **Pages**, find **Custom domain**.
2. Type `witkowskidesign.com` and click **Save**.
   It will say the DNS check is in progress or failed. That is normal until Step 4 is done.

## Step 4 · Add the DNS records in Cloudflare

1. Log in at https://dash.cloudflare.com and click **witkowskidesign.com**.
2. In the left menu click **DNS** → **Records**.
3. **Look first.** If there is already an `A`, `AAAA` or `CNAME` record whose name is
   `witkowskidesign.com` (or `@`) or `www`, it is an old placeholder: click **Edit** → **Delete**
   on those only. Leave every other record alone (see the list at the top of this page).
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

## Step 5 · Switch on HTTPS

1. Wait 10 to 30 minutes (occasionally a few hours).
2. Go to GitHub → **Settings** → **Pages**. When it shows **DNS check successful**,
   tick **Enforce HTTPS**. If the box is greyed out, the certificate is still being made:
   try again a bit later (it can take up to an hour).

## Step 6 · Check

- https://witkowskidesign.com opens the new site.
- https://www.witkowskidesign.com goes to the same site.
- https://timbro.witkowskidesign.com still opens Timbro.
- Email sent through Resend still works (nothing changed there).

---

## Optional but recommended

**Verify the domain in GitHub** (stops anyone else from using it on GitHub Pages):
GitHub → your profile picture → **Settings** → **Pages** → **Add a domain** → type
`witkowskidesign.com`. GitHub shows a `TXT` record (name starting with `_github-pages-challenge-`).
Add it in Cloudflare as a new **TXT** record exactly as shown, then click **Verify**.
This adds one record and does not touch the others.

**Tell Google about the site:** at https://search.google.com/search-console add the domain,
then under **Sitemaps** submit `https://witkowskidesign.com/sitemap.xml`.

## After that

Every change you commit to the `main` branch is published automatically in a minute or two.
See [README.md](README.md) for adding projects and editing texts.
