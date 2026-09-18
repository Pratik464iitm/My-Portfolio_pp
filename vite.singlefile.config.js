import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// This config is ONLY used to produce a single self-contained HTML preview
// file (for sharing / quick viewing). The real project should be built and
// deployed with the standard `npm run build` (vite.config.js).
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  build: {
    outDir: 'dist-preview',
    cssCodeSplit: false,
    assetsInlineLimit: 100000000,
  },
})
