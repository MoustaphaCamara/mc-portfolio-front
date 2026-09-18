import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  base: '/mc-portfolio-front/',
  plugins: [react()],
  server: {
    port: parseInt(process.env.VITE_PORT || '5173'),
  },
});
