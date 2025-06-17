# Contributor Guide

This repository contains a small TypeScript website powered by [Vite](https://vitejs.dev/). Use the following conventions when working here.

## Getting Started
- Install dependencies with `npm install`.
- Run `npm run dev` to start the development server and open `http://localhost:5173` to preview changes.
- Source files live in the `src/` directory. Keep edits focused there unless updating configuration.

## Build and Deploy
- Build the production bundle with `npm run build`. The output is placed in the `dist/` folder.
- Run `npm run deploy` to publish `dist/` to the `gh-pages` branch for GitHub Pages hosting.

## Testing
- Automated tests are not yet configured. Before sending a PR, run `npm run build` to confirm the site compiles.
- If you add new functionality, consider adding tests under a new `tests/` directory.

## Pull Requests
- Keep pull requests small and clearly describe the motivation for the change.
- Summarize the manual testing you performed (e.g., "site builds successfully").
- Title format: `<area>: <short description>`.
