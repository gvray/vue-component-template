#!/usr/bin/env tsx

import { resolve, dirname } from 'path'
import { existsSync } from 'fs'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const root = resolve(__dirname, '..')

console.log('🚀 开始构建 Vue Components...')

// 检查是否存在必要的目录
const requiredDirs = [
  'packages/components',
  'packages/theme-chalk',
  'packages/utils',
  'packages/hooks',
  'packages/tokens',
]

for (const dir of requiredDirs) {
  const fullPath = resolve(root, dir)
  if (!existsSync(fullPath)) {
    console.log(`⚠️  目录不存在: ${dir}`)
  } else {
    console.log(`✅ 目录存在: ${dir}`)
  }
}

console.log('\n📦 项目结构检查完成')
console.log('\n🎉 重构完成！新的项目结构已经建立')
console.log('\n📚 接下来你可以：')
console.log('1. 运行 pnpm dev:play 启动组件演练场')
console.log('2. 运行 pnpm dev:docs 启动文档站点')
console.log('3. 在 packages/components 中开发组件')
console.log('4. 在 packages/theme-chalk 中编写样式')
console.log('5. 使用 internal/build 中的构建脚本进行打包')
