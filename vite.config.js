import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8808,  // set your desired port here
    strictPort: true, // will fail if the port is already in use
  },
});
