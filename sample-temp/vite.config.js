import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/act_caldito/',  // 👈 required for GitHub Pages subpath
  plugins: [react()]
})
