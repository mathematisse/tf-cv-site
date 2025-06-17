# tf-cv-site

This project provides a simple TypeScript setup powered by [Vite](https://vitejs.dev/) for building a static website that can be published to GitHub Pages.

A small Leaflet demo map is included. Points of interest are loaded from `src/pois.yaml` and displayed with marker clustering.

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

Map appearance can be tweaked through `src/style.css`. For example, the `--map-tint` CSS variable controls a filter applied to each tile. Marker icon images are located in `src/assets`. Replace these files to customize the pins shown on the map.
