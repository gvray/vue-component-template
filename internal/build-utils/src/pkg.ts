import { readFileSync } from 'fs'
import { resolve } from 'path'

export const PKG_PREFIX = '@vue-components'
export const PKG_NAME = 'vue-components'

export interface Package {
  name: string
  version: string
  description: string
  main?: string
  module?: string
  types?: string
  exports?: Record<string, unknown>
  dependencies?: Record<string, string>
  peerDependencies?: Record<string, string>
  devDependencies?: Record<string, string>
}

/**
 * 获取根目录 package.json
 */
export const getPackageJson = (pkgPath?: string): Package => {
  const path = pkgPath ?? resolve(process.cwd(), 'package.json')
  return JSON.parse(readFileSync(path, 'utf-8'))
}

/**
 * 获取项目根目录
 */
export const getProjectRoot = (): string => {
  return resolve(__dirname, '../../..')
}

/**
 * 获取包目录
 */
export const getPackageRoot = (): string => {
  return resolve(getProjectRoot(), 'packages')
}

/**
 * 获取内部构建目录
 */
export const getInternalRoot = (): string => {
  return resolve(getProjectRoot(), 'internal')
}

/**
 * 获取组件包名
 */
export const getPackageName = (name: string): string => {
  return `${PKG_PREFIX}/${name}`
}

/**
 * 获取输出目录
 */
export const getDistRoot = (): string => {
  return resolve(getProjectRoot(), 'dist')
}
