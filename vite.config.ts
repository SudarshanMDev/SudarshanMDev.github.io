import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// This repo (SudarshanMDev.github.io) is a GitHub *user* site served from the
// root domain, so the base path is '/'.
//
// If you ever move this into a normal project repo (e.g. github.com/you/portfolio),
// change base to '/portfolio/' so asset URLs resolve correctly on GitHub Pages.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
