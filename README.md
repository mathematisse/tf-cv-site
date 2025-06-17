# tf-cv-site

This project provides a simple TypeScript setup powered by [Vite](https://vitejs.dev/) for building a static website that can be published to GitHub Pages.

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

## Deploy to GitHub Pages

```bash
npm run deploy
```

This builds the site and publishes the contents of `dist` to the `gh-pages` branch using the `gh-pages` package.
