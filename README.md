# shoryaconsul.github.io

Personal site for Shorya Consul, served via GitHub Pages.

## Stack

Hand-built static HTML/CSS/JS — no build step, no framework. `.nojekyll` tells
GitHub Pages to serve the files as-is.

## Structure

- `index.html` — single-page site (hero, about, experience, research, skills, education, contact)
- `css/` — stylesheet(s)
- `js/` — small scripts (expand/collapse, smooth scroll)
- `assets/images/` — favicons and site icons
- `assets/resume/` — downloadable resume PDF

## Local preview

Any static file server works, e.g.:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

Pushes to `master` are served automatically by GitHub Pages.

See `CHANGELOG.md` for a history of notable changes.
