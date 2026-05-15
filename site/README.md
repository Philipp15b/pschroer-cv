# Philipp Schröer Website

Astro + React + TypeScript static personal website.

```sh
pnpm install
pnpm run dev
pnpm run build
```

`pnpm run build` writes static output to the ignored `../_site` directory. The
site is configured for `https://pschroer.de/`.

## Publishing

GitHub Pages deploys this site through
`../.github/workflows/deploy-pages.yml`. The workflow builds the Astro site and
publishes `../_site` as a Pages artifact.

For manual publishing:

1. Run `pnpm run build` from this directory.
2. Publish the contents of `../_site`.
3. Keep `public/.nojekyll`, `public/CNAME`, `robots.txt`, and `sitemap.xml` in
   sync with the configured public URL.

If the site moves away from `https://pschroer.de/`, update
`astro.config.mjs`, `public/CNAME`, `public/robots.txt`, and
`public/sitemap.xml`.
