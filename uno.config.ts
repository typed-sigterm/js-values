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
    }),
  ],
});
