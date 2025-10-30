import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwind from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'node:path';
import { fileURLToPath, URL } from 'node:url';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig(() => ({
  plugins: [
    react(),
    tailwind(),
    svgr(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/icons')],
      symbolId: 'icon-[name]',
      svgoOptions: true,
    }),
    ViteImageOptimizer({
      png:  { quality: 80 },
      jpeg: { quality: 75, progressive: true },
      webp: { quality: 70 },
      avif: { quality: 45 },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@routes': fileURLToPath(new URL('./src/routes', import.meta.url)),
      '@data': fileURLToPath(new URL('./src/data', import.meta.url)),
      '@types': fileURLToPath(new URL('./src/types', import.meta.url)),
      '@lib': fileURLToPath(new URL('./src/lib', import.meta.url)),
    },
  },
  build: {
    assetsInlineLimit: 0,
  },
}));
