import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'eugenio-moira-lowell.ngrok-free.dev',
      '.ngrok-free.dev', // Allow all ngrok-free.dev subdomains
    ],
  },
})


