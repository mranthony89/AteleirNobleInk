import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Rende la build apribile anche con doppio clic su index.html (file://):
// i browser bloccano gli script di tipo "module" quando la pagina non passa da un server,
// quindi in build usiamo uno script classico (IIFE) invece del modulo.
const classicScriptBuild = () => ({
  name: 'classic-script-build',
  apply: 'build',
  enforce: 'post',
  transformIndexHtml(html) {
    return html
      .replace(/<script type="module" crossorigin/g, '<script defer')
      .replace(/<link rel="stylesheet" crossorigin/g, '<link rel="stylesheet"')
  },
})

export default defineConfig({
  plugins: [react(), classicScriptBuild()],
  base: './',
  build: {
    modulePreload: false,
    rollupOptions: {
      output: { format: 'iife', inlineDynamicImports: true },
    },
  },
})
