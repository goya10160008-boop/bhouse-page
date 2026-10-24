# A&B Boarding House website

A simple one-page website. No tools to install: you edit plain text files and upload them.

## What each file does

- `index.html` - the page itself: all the words, prices, and links.
- `styles.css` - colors, fonts, spacing (how it looks).
- `script.js` - the phone Menu button. Nothing else.
- `images/` - your photos go here.
- `robots.txt` - tells Google it may visit the site.
- `sitemap.xml` - tells Google which pages exist.
- `.github/workflows/deploy.yml` - the robot that publishes the site (see "How publishing works").
- `content.md`, `BRIEF.md`, `PLAN.md` - planning notes. Not part of what visitors see. `content.md` has your checklist of missing info.

## 1. Edit text and prices

1. Open `index.html` in any text editor (Notepad, or VS Code).
2. Search (Ctrl+F) for `[TODO`. Every missing detail is marked like `[TODO mobile number]`.
3. Replace the whole marker, including the `<span class="todo">...</span>` around it, with your real text. Example: `₱[TODO]/month` becomes `₱1,500/month`.
4. Save, then open `index.html` by double-clicking it to check how it looks.

## 2. Swap photos

1. Put your photos in the `images` folder. Use JPG, keep each under about 300 KB (resize big phone photos first).
2. Suggested names and sizes: `hero.jpg` (1200x800), `room-1.jpg`, `building-1.jpg`, `common-1.jpg` (each 800x600), `share.jpg` (1200x630, for link previews on Facebook).
3. In `index.html`, find the grey placeholder `<img ... src="data:image/svg+xml...">` and replace the `src="..."` with `src="images/room-1.jpg"`.
4. Rewrite the `alt="..."` text to describe the photo (for example `Bedspace room with two bunk beds`). Screen readers and Google use it.
5. For the link-preview photo, find `TODO: add og:image` near the top of `index.html` and add this line under it, using your real address once known: `<meta property="og:image" content="https://YOURNAME.github.io/REPO/images/share.jpg">`

## 3. Fill in contact links

In `index.html`, find the `<section id="contact">` area (search for `CONTACT`). Each button has an `href="#contact"` for now, which just scrolls to that section. Replace it:

- Call: `href="tel:+639XXXXXXXXX"` (your number, with +63 and no spaces or leading 0)
- Messenger: `href="https://m.me/yourpagename"`
- Facebook: `href="https://www.facebook.com/yourpage"`
- Email: `href="mailto:you@example.com"`

Also delete the matching `[TODO ...]` text beside each button and the small `TEMP` comment above it.

## 4. Google Maps

1. Open Google Maps, search for your boarding house, and pick the pin.
2. Click Share > Embed a map > COPY HTML.
3. In `index.html`, find `<iframe class="map"` and replace the whole `<iframe ...></iframe>` with the copied HTML. Keep `class="map"` in it so it is sized correctly.

## 5. Publish on GitHub Pages (free)

1. Create a free account at github.com.
2. Click New repository. Name it (for example `bhouse-page`), keep it Public, and click Create.
3. Upload the files: on the new repo page click "uploading an existing file", drag in everything from this folder (including the `.github` folder and `images`), then click Commit changes. If the `.github` folder will not upload by drag and drop, use GitHub Desktop or `git push` instead, since that folder is required.
4. Go to Settings > Pages. Under Build and deployment, set Source to GitHub Actions.
5. Click the Actions tab and watch the "Deploy to GitHub Pages" run. A green check means it is live (about a minute).
6. Your address is `https://YOURNAME.github.io/REPO-NAME/` (also shown in Settings > Pages and on the finished Actions run).
7. Tell search engines: in `robots.txt`, remove the `#` before `Sitemap:` and put your address, for example `Sitemap: https://YOURNAME.github.io/bhouse-page/sitemap.xml`. In `sitemap.xml`, replace `[TODO GitHub Pages URL]` with the same address. Commit both.

## How publishing works (plain English)

Your files live in a GitHub repository (an online folder with history). The file `deploy.yml` is a recipe: "whenever someone saves a change to the `main` branch, copy the folder to a temporary computer, package it, and put it on the web." That is CI/CD (automatic build and deploy). So your routine is just: edit a file, commit it on GitHub (pencil icon > Commit changes), wait about a minute, refresh your site.
