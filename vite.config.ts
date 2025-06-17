import { defineConfig } from 'vite';

// Configure the base path so asset URLs work correctly when
// deployed to GitHub Pages under the "tf-cv-site" repository.

export default defineConfig({
  root: '.',
  // Set the base path so that assets resolve correctly when the site
  // is served from the "tf-cv-site" subpath on GitHub Pages.
  base: '/tf-cv-site/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
