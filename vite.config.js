import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  plugins: [
    preact(),
    copy({
      targets: [
        { src: 'public/_redirects', dest: 'dist' }
      ],
      hook: 'writeBundle'
    })
  ]
});