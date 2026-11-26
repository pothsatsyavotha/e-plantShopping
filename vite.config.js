import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base must match your GitHub repo name for GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/e-plantShopping/',
});
