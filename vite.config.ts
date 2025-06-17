import { defineConfig } from 'vite';

// Configure the base path so asset URLs work correctly when
// deployed to GitHub Pages under the "tf-cv-site" repository.

export default defineConfig({
  root: '.',
  base: '/tf-cv-site/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
