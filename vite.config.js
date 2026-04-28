import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// vite.config.js - Vite build configuration for React
// vite.config.js - Configuration de build Vite pour React
// Defines the development and production bundling for the app.
// Définit le bundling de l'application en développement et production.
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
