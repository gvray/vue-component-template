import { spawn } from 'child_process'
import chalk from 'chalk'
import { consola } from 'consola'

export const LOG_PREFIX = '[VueComponents]'

export const logger = {
  info: (msg: string) => consola.info(`${LOG_PREFIX} ${msg}`),
  success: (msg: string) => consola.success(`${LOG_PREFIX} ${chalk.green(msg)}`),
  warn: (msg: string) => consola.warn(`${LOG_PREFIX} ${chalk.yellow(msg)}`),
  error: (msg: string) => consola.error(`${LOG_PREFIX} ${chalk.red(msg)}`),
}

/**
 * 执行命令
 */
export function run(command: string, args: string[] = [], cwd?: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd,
      stdio: 'inherit',
      shell: process.platform === 'win32',
    })

    child.on('close', (code) => {
      if (code !== 0) {
        reject(new Error(`Command failed with exit code ${code}`))
      } else {
        resolve()
      }
    })

    child.on('error', reject)
  })
}

/**
 * 确保字符串以 / 结尾
 */
export function ensureTrailingSlash(path: string): string {
  return path.endsWith('/') ? path : `${path}/`
}

/**
 * 移除字符串开头的 /
 */
export function removeLeadingSlash(path: string): string {
  return path.startsWith('/') ? path.slice(1) : path
}

/**
 * 将 kebab-case 转换为 PascalCase
 */
export function kebabToPascal(str: string): string {
  return str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}

/**
 * 将 PascalCase 转换为 kebab-case
 */
export function pascalToKebab(str: string): string {
  return str
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '')
}
