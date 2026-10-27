import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'build',
    emptyOutDir: true,
  },
  server: {
    port: 8766,
    strictPort: true,
  },
});
