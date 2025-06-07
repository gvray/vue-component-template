import { defineConfig } from 'vite'
// @ts-expect-error vue plugin import issue
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'VueComponents',
      fileName: 'index',
      formats: ['cjs'],
    },
    outDir: 'lib',
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
