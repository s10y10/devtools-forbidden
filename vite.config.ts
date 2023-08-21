import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    reportCompressedSize: false,
    target: 'es2015',
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      name: 'DevtoolsForbidden',
    },
  },
});
