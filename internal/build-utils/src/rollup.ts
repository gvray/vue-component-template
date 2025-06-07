import type { Plugin } from 'rollup'

export interface BuildConfigOptions {
  input: string
  output: {
    file?: string
    dir?: string
    format: 'es' | 'cjs' | 'umd' | 'iife'
    name?: string
    exports?: 'auto' | 'default' | 'named' | 'none'
  }
  external?: (string | RegExp)[]
  plugins?: Plugin[]
}

/**
 * 默认的外部依赖
 */
export const DEFAULT_EXTERNALS = [
  'vue',
  '@vue/shared',
  '@vue/reactivity',
  'vue-router',
  /^@vue\//,
  /^lodash/,
  /^dayjs/,
  /^async-validator/,
]

/**
 * 创建构建配置
 */
export function createBuildConfig(options: BuildConfigOptions) {
  return {
    input: options.input,
    external: [...DEFAULT_EXTERNALS, ...(options.external || [])],
    output: options.output,
    plugins: options.plugins || [],
  }
}
