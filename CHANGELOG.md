# Changelog

All notable changes to this site are documented here.

## 2026-07-15 - Site Redesign 2026

Rebuilt the site from the ground up as a hand-built, single-page static site
(plain HTML/CSS/JS), replacing the Jekyll/Minimal Mistakes theme. Content now
leads with industry experience (Quantum-Si, CognitiveScale) ahead of academic
research, targeting AI x Bio / biotech employers. Visual design moved to a
custom, science-inspired minimal aesthetic.

### Added
- `index.html`, `css/style.css`, `js/script.js` — the new single-page site (hero, about, experience, research & publications, skills, education, contact).
- `.nojekyll` so GitHub Pages serves the site as static files without a Jekyll build step.
- `assets/resume/Shorya_Consul_Resume.pdf` as the downloadable resume.
- NextVir (PLOS Computational Biology, 2025) added to publications; XVir updated from preprint to its published Journal of Computational Biology entry; Certifai (IJCAI-20) added.
- This changelog.

### Removed
- Jekyll/Minimal Mistakes theme scaffolding (`_layouts`, `_includes`, `_sass`, `_data`, `_pages`, `_config.yml`, `Gemfile`, `Rakefile`, `.travis.yml`, `staticman.yml`, `package.json`).
- Unused theme assets (academicons, lunr search, jQuery plugins, old profile photo).

### Fixed
- `index.html`, `css/style.css`, and `js/script.js` were built and reviewed but not committed before PR #2 was merged, leaving `master` without a homepage. Committed directly to `master` as a follow-up fix.
