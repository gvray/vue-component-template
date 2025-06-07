#!/usr/bin/env node

/**
 * 智能清理脚本
 * 用于清理项目的构建产物、缓存和依赖
 */

import { execSync } from 'child_process'
import { existsSync, statSync, readdirSync } from 'fs'
import { join } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const projectRoot = join(__dirname, '..')

// 颜色工具
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  gray: '\x1b[90m',
}

function colorize(text, color) {
  return `${colors[color]}${text}${colors.reset}`
}

// 获取目录大小
function getDirSize(dirPath) {
  if (!existsSync(dirPath)) return 0

  let size = 0
  try {
    const files = readdirSync(dirPath)
    for (const file of files) {
      const filePath = join(dirPath, file)
      const stats = statSync(filePath)
      if (stats.isDirectory()) {
        size += getDirSize(filePath)
      } else {
        size += stats.size
      }
    }
  } catch {
    // 忽略权限错误等
  }
  return size
}

// 格式化文件大小
function formatBytes(bytes) {
  if (bytes === 0) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

// 执行命令
function exec(command) {
  try {
    execSync(command, { cwd: projectRoot, stdio: 'inherit' })
    return true
  } catch {
    console.error(colorize(`Error executing: ${command}`, 'red'))
    return false
  }
}

// 计算清理项目大小
function calculateCleanSize(type) {
  const paths = {
    build: [
      'dist',
      'packages/components/dist',
      'packages/components/es',
      'packages/components/lib',
      'packages/utils/dist',
      'packages/utils/es',
      'packages/utils/lib',
      'packages/hooks/dist',
      'packages/hooks/es',
      'packages/hooks/lib',
      'packages/tokens/dist',
      'packages/tokens/es',
      'packages/tokens/lib',
      'packages/theme-chalk/dist',
      'packages/theme-chalk/lib',
      'internal/build/dist',
      'internal/build-utils/dist',
      'docs/.vitepress/dist',
      'play/dist',
    ],
    cache: ['.vite', '.turbo', 'node_modules/.cache', '.eslintcache'],
    deps: [
      'node_modules',
      'packages/components/node_modules',
      'packages/utils/node_modules',
      'packages/hooks/node_modules',
      'packages/tokens/node_modules',
      'packages/theme-chalk/node_modules',
      'packages/vue-components/node_modules',
      'internal/build/node_modules',
      'internal/build-utils/node_modules',
      'docs/node_modules',
      'play/node_modules',
    ],
  }

  let totalSize = 0
  const existingPaths = []

  const targetPaths = type === 'all' ? [...paths.build, ...paths.cache, ...paths.deps] : paths[type]

  for (const path of targetPaths) {
    const fullPath = join(projectRoot, path)
    if (existsSync(fullPath)) {
      const size = getDirSize(fullPath)
      totalSize += size
      existingPaths.push({ path, size })
    }
  }

  return { totalSize, existingPaths }
}

// 显示清理信息
function showCleanInfo(type) {
  console.log(colorize(`\n🔍 正在分析 ${type} 清理项目...`, 'cyan'))

  const { totalSize, existingPaths } = calculateCleanSize(type)

  if (existingPaths.length === 0) {
    console.log(colorize('✨ 没有找到需要清理的文件', 'green'))
    return false
  }

  console.log(colorize('\n📊 发现以下文件/目录:', 'yellow'))
  existingPaths.forEach(({ path, size }) => {
    console.log(colorize(`  - ${path}`, 'gray') + colorize(` (${formatBytes(size)})`, 'blue'))
  })

  console.log(colorize(`\n📦 总计可释放空间: ${formatBytes(totalSize)}`, 'magenta'))

  return true
}

// 主函数
function main() {
  const args = process.argv.slice(2)
  const command = args[0] || 'help'

  console.log(colorize('🧹 Vue Components 清理工具', 'cyan'))
  console.log(colorize('==============================', 'gray'))

  switch (command) {
    case 'build':
      if (showCleanInfo('build')) {
        console.log(colorize('\n🗑️  开始清理构建产物...', 'yellow'))
        exec('pnpm run clean:build')
        console.log(colorize('✅ 构建产物清理完成!', 'green'))
      }
      break

    case 'cache':
      if (showCleanInfo('cache')) {
        console.log(colorize('\n🗑️  开始清理缓存...', 'yellow'))
        exec('pnpm run clean:cache')
        console.log(colorize('✅ 缓存清理完成!', 'green'))
      }
      break

    case 'deps':
      if (showCleanInfo('deps')) {
        console.log(colorize('\n⚠️  即将删除所有依赖，这是不可逆操作!', 'red'))
        console.log(colorize('🗑️  开始清理依赖...', 'yellow'))
        exec('pnpm run clean:deps')
        console.log(colorize('✅ 依赖清理完成! 记得运行 pnpm install 重新安装依赖', 'green'))
      }
      break

    case 'all':
      if (showCleanInfo('all')) {
        console.log(colorize('\n⚠️  即将执行完全清理，这是不可逆操作!', 'red'))
        console.log(colorize('🗑️  开始完全清理...', 'yellow'))
        exec('pnpm run clean:all')
        console.log(colorize('✅ 完全清理完成! 记得运行 pnpm install 重新安装依赖', 'green'))
      }
      break

    case 'reset':
      if (showCleanInfo('all')) {
        console.log(colorize('\n🔄 开始重置项目...', 'yellow'))
        exec('pnpm run reset')
        console.log(colorize('✅ 项目重置完成!', 'green'))
      }
      break

    case 'help':
    default:
      console.log(colorize('\n📖 使用方法:', 'cyan'))
      console.log(colorize('  node scripts/clean.js <command>', 'white'))
      console.log(colorize('\n🎯 可用命令:', 'cyan'))
      console.log(colorize('  build   - 清理构建产物', 'white'))
      console.log(colorize('  cache   - 清理缓存文件', 'white'))
      console.log(colorize('  deps    - 清理依赖 (谨慎使用)', 'white'))
      console.log(colorize('  all     - 完全清理 (谨慎使用)', 'white'))
      console.log(colorize('  reset   - 清理并重新安装依赖', 'white'))
      console.log(colorize('  help    - 显示此帮助信息', 'white'))

      console.log(colorize('\n💡 示例:', 'cyan'))
      console.log(colorize('  node scripts/clean.js build', 'gray'))
      console.log(colorize('  node scripts/clean.js cache', 'gray'))
      console.log(colorize('  node scripts/clean.js reset', 'gray'))

      console.log(colorize('\n🚀 或者直接使用 npm scripts:', 'cyan'))
      console.log(colorize('  pnpm clean', 'gray'))
      console.log(colorize('  pnpm run clean:cache', 'gray'))
      console.log(colorize('  pnpm run reset', 'gray'))
      break
  }
}

main()
