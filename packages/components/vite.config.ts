import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'
import dts from 'vite-plugin-dts'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  plugins: [
    vue(),
    dts({
      include: ['./**/*.ts', './**/*.vue'],
      exclude: ['./node_modules/**', './play/**'],
      outDir: ['es', 'lib'],
      tsconfigPath: '../../tsconfig.json',
    }),
  ],
  build: {
    target: 'modules',
    minify: false,
    outDir: 'es',
    lib: {
      entry: 'index.ts',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['vue'],
      input: ['index.ts'],
      output: [
        {
          format: 'es',
          dir: 'es',
          entryFileNames: '[name].mjs',
          preserveModules: true,
          preserveModulesRoot: '.',
        },
        {
          format: 'cjs',
          dir: 'lib',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: '.',
        },
      ],
    },
  },
})
