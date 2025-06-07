import { resolve } from 'path'

export const projRoot = resolve(process.cwd())
export const buildRoot = resolve(projRoot, 'internal', 'build')
export const buildUtilsRoot = resolve(projRoot, 'internal', 'build-utils')
export const pkgRoot = resolve(projRoot, 'packages')
export const distRoot = resolve(projRoot, 'dist')
export const docsRoot = resolve(projRoot, 'docs')
export const playRoot = resolve(projRoot, 'play')

// 组件相关路径
export const componentsRoot = resolve(pkgRoot, 'components')
export const themeRoot = resolve(pkgRoot, 'theme-chalk')
export const utilsRoot = resolve(pkgRoot, 'utils')
export const hooksRoot = resolve(pkgRoot, 'hooks')
export const tokensRoot = resolve(pkgRoot, 'tokens')
export const iconsRoot = resolve(pkgRoot, 'icons')
