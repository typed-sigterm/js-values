import pluginUnocss from 'unocss/vite';
import { defineConfig } from 'vite';
import pluginSolid from 'vite-plugin-solid';

export default defineConfig({
  plugins: [
    pluginUnocss(),
    pluginSolid(),
  ],
  server: {
    port: 7308,
  },
  build: {
    target: 'esnext',
  },
});
