import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'VueComponentsHooks',
      fileName: 'index',
      formats: ['cjs'],
    },
    outDir: 'lib',
    rollupOptions: {
      external: ['vue', '@vue-components/utils'],
      output: {
        globals: {
          vue: 'Vue',
          '@vue-components/utils': 'VueComponentsUtils',
        },
      },
    },
  },
})
