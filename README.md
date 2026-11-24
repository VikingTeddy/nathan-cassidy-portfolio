# Nathan Cassidy: Portfolio

A static portfolio site (HTML, CSS and JavaScript, no build step) designed to be hosted on GitHub and deployed to Render.

## Structure

```
index.html          page structure
css/style.css       all styling
js/data.js          ALL your content: edit this to update the site
js/main.js          builds the page from data.js
assets/             CV PDF, project media, your photo
render.yaml         optional Render blueprint
```

## Before the first deploy

1. Add your portrait to `assets/` named `photo.jpg` (until then, an initials placeholder shows).
2. Open `js/data.js` and check every line, especially the Students as Co-Creators project: add your own role to its `role` list.
3. Add your GitHub profile URL to `github` in `js/data.js` if you want it shown.

## Put it on GitHub

1. Create a new empty repository on github.com (for example `portfolio`).
2. In this folder:
   ```
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
   git push -u origin main
   ```

## Deploy on Render

1. Render dashboard → **New** → **Static Site** → connect the GitHub repo.
2. Build command: leave blank. Publish directory: `.`
3. Click **Create Static Site**. Render gives you a `.onrender.com` URL and redeploys on every push.

> **Careful with your existing site.** `https://scc-site-i62y.onrender.com/` currently hosts the Students as Co-Creators project site. If you point that same Render service at this repo, the old site is replaced. Either create a new Static Site for the portfolio, or move the old files into a `scc/` folder in this repo first.

## Keeping it up to date

Everything lives in `js/data.js`:

- **New project:** copy a block in `projects`, paste it at the top, edit the text, then push.
- **New job or course:** add an entry to `experience` or `education`.
- **New skill:** add it to `skills`.
- **New CV:** replace `assets/Nathan_Cassidy_CV.pdf` (keep the name).
- Update `lastUpdated` so the footer date changes.

```
git add .
git commit -m "Add new project"
git push
```

Render redeploys within a minute or two.

## Project images and video

Put screenshots or GIFs in `assets/` and set `media: "assets/your-file.gif"` on the project. Keep files under about 2 MB so the page stays fast.

## Confidentiality

Keep client names, proposal details and anything covered by an NDA out of this repository. A public repo can be read by anyone, including its history.

## Update (Nov 2026): Showreel redesign
The site is now three plain HTML pages with inline styles: `index.html` (home), `datacentre.html` and `moon-miner.html` (case studies). Edit text directly in those files. Items in [BRACKETS] are placeholders to replace with your own details and screenshots. The old `css/` and `js/` data-driven version is no longer used by these pages.
