import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'VueComponentsTokens',
      fileName: 'index',
      formats: ['es'],
    },
    outDir: 'es',
    rollupOptions: {
      external: [],
    },
  },
})
