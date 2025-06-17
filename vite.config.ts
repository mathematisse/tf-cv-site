import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';

// Configure the base path so asset URLs work correctly when
// deployed to GitHub Pages under the "tf-cv-site" repository.

export default defineConfig({
  root: '.',
  base: '/tf-cv-site/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    exclude: [...configDefaults.exclude, 'dist/**'],
  },
});
