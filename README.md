# Philipp Schroer CV

This is a self-contained LaTeX CV. Its color palette follows the Caesar
Verifier website's Docusaurus theme, centered on `#146c59`.

Build it with:

```sh
make
```

The generated PDF is `pdf/philipp-schroer-cv.pdf`.

The portrait image used in the header is `philipp-schroer-portrait.png`.

## Contact Override

For a CV with extra contact fields, copy `cv-contact.example.tex` to
`cv-contact.tex`, fill in the fields, and run:

```sh
make cv-contact
```

The override file and generated contact PDF are ignored by Git.

## Website

The website lives in `site/`. It is an Astro + React + TypeScript static site
with reusable `.tsx` components. The generated static output is written to the
ignored `_site/` directory.

Run the development server with:

```sh
cd site
pnpm run dev
```

Build the static site with:

```sh
cd site
pnpm run build
```

The site is configured for `https://pschroer.de/`.
Publication support files are generated from `site/public/`, including
`.nojekyll`, `CNAME`, `robots.txt`, and `sitemap.xml`.

GitHub Pages deploys the site through
`.github/workflows/deploy-pages.yml`. The workflow builds the Astro site and
publishes the ignored `_site/` directory as a Pages artifact.
