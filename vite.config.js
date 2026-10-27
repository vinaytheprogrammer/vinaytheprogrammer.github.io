import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        tutor: resolve(__dirname, 'tutor/index.html'),
        freelancer: resolve(__dirname, 'freelancer/index.html'),
      },
    },
  },
  server: {
    port: 3000,
    open: false,
  },
});
