# Changelog

All notable changes to this site are documented here.

## [Unreleased] - Site Redesign 2026

### Changed
- Rebuilding the site from the ground up as a hand-built, single-page static site (plain HTML/CSS/JS), replacing the Jekyll/Minimal Mistakes theme.
- Content will be restructured to lead with industry experience (Quantum-Si, CognitiveScale) ahead of academic research, targeting AI x Bio / biotech employers.
- Visual design moving to a custom, science-inspired minimal aesthetic.

### Removed
- Jekyll/Minimal Mistakes theme scaffolding (`_layouts`, `_includes`, `_sass`, `_data`, `_pages`, `_config.yml`, `Gemfile`, `Rakefile`, `.travis.yml`, `staticman.yml`, `package.json`).
- Unused theme assets (academicons, lunr search, jQuery plugins, old profile photo).

### Added
- `.nojekyll` so GitHub Pages serves the site as static files without a Jekyll build step.
- `assets/resume/Shorya_Consul_Resume.pdf` as the downloadable resume.
- This changelog.
