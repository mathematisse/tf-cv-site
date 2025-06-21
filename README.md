# tf-cv-site

This project provides a simple TypeScript setup powered by [Vite](https://vitejs.dev/) for building a static website that can be published to GitHub Pages.

A small Leaflet demo map is included. Points of interest are loaded from `src/pois.yaml` and displayed with marker clustering.

The site is organised as three pages accessible from the navigation menu:
`cv.html`, `map.html` and `portfolio.html`.

## Development

```bash
npm run dev
```

Open `http://localhost:5173` to view the site during development.

## Build

```bash
npm run build
```

The build output is generated in the `dist` directory.

## Test

```bash
npm test
```

Runs the Vitest test suite.

## Deploy to GitHub Pages

```bash
npm run deploy
```

This builds the site and publishes the contents of `dist` to the `gh-pages` branch using the `gh-pages` package.

## Customization

Map appearance and typography can be tweaked through `src/style.css` which
defines a set of CSS variables. The `--map-tint` variable controls a filter
applied to each tile and defaults to a pastel palette. Variables like
`--font-family`, `--font-size`, `--bg-color` and `--text-color` let you adjust
the site's global look and feel. Marker icon images are located in
`src/assets`; replace these files to customize the pins shown on the map.

## Responsive Design

`src/style.css` includes a mobile breakpoint to stack the navigation menu and
adjust padding. When extending the site, favour relative units and flexbox so
layouts adapt smoothly across screen sizes. Add media queries where necessary to
maintain usability on narrow screens.
