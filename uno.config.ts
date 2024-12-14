import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local';
import { defineConfig, presetIcons, presetUno, presetWebFonts } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetWebFonts({
      fonts: {
        inconsolata: {
          name: 'inconsolata',
          provider: 'bunny',
        },
        satoshi: {
          name: 'satoshi',
          provider: 'fontshare',
        },
      },
      processors: createLocalFontProcessor({
        cacheDir: 'node_modules/.cache/unocss/fonts',
        fontAssetsDir: 'public/assets/fonts',
        fontServeBaseUrl: '/assets/fonts',
      }),
    }),
  ],
});
