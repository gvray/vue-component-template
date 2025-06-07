# 清理脚本说明

本项目提供了多个级别的清理脚本，帮助你管理项目的各种文件和缓存。

## 📦 清理脚本

### 🧹 普通清理

```bash
# 清理构建产物（推荐日常使用）
pnpm clean
# 或
pnpm run clean:build
```

**清理内容:**

- `dist/` - 根目录构建产物
- `packages/*/dist/` - 各包的dist目录
- `packages/*/es/` - ESM构建产物
- `packages/*/lib/` - CJS构建产物
- `internal/*/dist/` - 内部工具构建产物
- `docs/.vitepress/dist/` - 文档构建产物
- `play/dist/` - 演示应用构建产物

### 🗑️ 缓存清理

```bash
# 清理各种缓存文件
pnpm run clean:cache
```

**清理内容:**

- `.vite/` - Vite缓存
- `.turbo/` - Turbo缓存
- `node_modules/.cache/` - npm缓存
- `.eslintcache` - ESLint缓存
- `*.tsbuildinfo` - TypeScript增量编译信息

### 💣 深度清理

```bash
# 清理所有依赖（谨慎使用）
pnpm run clean:deps
```

**清理内容:**

- `node_modules/` - 所有依赖
- `packages/*/node_modules/` - 各包依赖
- `internal/*/node_modules/` - 内部工具依赖
- `docs/node_modules/` - 文档依赖
- `play/node_modules/` - 演示应用依赖
- `pnpm-lock.yaml` - 锁定文件

### 🔄 完全重置

```bash
# 清理所有内容（构建产物 + 缓存 + 依赖）
pnpm run clean:all

# 清理并重新安装依赖
pnpm run reset
```

## 🚨 使用建议

### 日常开发

```bash
# 遇到构建问题时
pnpm clean

# 遇到缓存问题时
pnpm run clean:cache
```

### 故障排查

```bash
# 遇到依赖问题时
pnpm run reset
```

### CI/CD环境

```bash
# 确保干净环境
pnpm run clean:all
pnpm install
```

## ⚡ 脚本性能

| 脚本          | 耗时 | 磁盘空间释放      | 使用频率 |
| ------------- | ---- | ----------------- | -------- |
| `clean:build` | ~1s  | ~50MB             | 高       |
| `clean:cache` | ~2s  | ~100MB            | 中       |
| `clean:deps`  | ~5s  | ~500MB            | 低       |
| `clean:all`   | ~8s  | ~650MB            | 低       |
| `reset`       | ~30s | ~650MB → 重新下载 | 低       |

## 🔧 自定义清理

你可以根据需要添加自定义清理命令：

```json
{
  "scripts": {
    "clean:logs": "rimraf logs/ *.log",
    "clean:temp": "rimraf temp/ *.tmp",
    "clean:custom": "rimraf your-custom-files/"
  }
}
```

## 💡 最佳实践

1. **开发前清理**: `pnpm clean` - 确保构建产物是最新的
2. **遇到问题时**: `pnpm run clean:cache` - 清理可能的缓存问题
3. **依赖更新后**: `pnpm run reset` - 确保依赖安装正确
4. **定期维护**: 每周运行一次 `pnpm run clean:all` 释放磁盘空间
5. **CI/CD**: 使用 `pnpm run clean:all` 确保环境干净

## 🚧 注意事项

- `clean:deps` 会删除所有依赖，需要重新安装
- `clean:all` 是破坏性操作，请确保没有未保存的工作
- `reset` 会重新下载所有依赖，需要网络连接
- 在执行深度清理前，建议先提交代码到git
