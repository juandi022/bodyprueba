// vite.config.js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/bodyprueba/',   // ruta fija para tu repo en GitHub Pages
  plugins: [react()],
})
