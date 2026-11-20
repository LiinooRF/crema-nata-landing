import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // base relativo: funciona en GitHub Pages (/repo/) y en dominio propio
  base: '',
  plugins: [react()],
})
