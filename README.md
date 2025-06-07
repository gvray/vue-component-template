# Vue Components

一个基于 Vite + Vue 3 + TypeScript 的组件库模板，适用于快速开发、调试和发布 Vue 组件库。你只需 clone 项目即可开始愉快地写组件。

## ✨ 特性

- 🚀 **Vue 3 支持** - 基于 Vue 3 Composition API 开发
- 📦 **按需引入** - 支持 Tree Shaking，只打包使用的组件
- 🎨 **主题定制** - 基于 SCSS 和 CSS 变量，轻松定制主题
- 📱 **响应式设计** - 组件支持响应式设计，适配各种屏幕尺寸
- 🔧 **TypeScript** - 使用 TypeScript 开发，提供完整的类型定义
- 📖 **详细文档** - 基于 VitePress 的文档系统

## 📦 项目结构

```
vue-component-template/
├── docs/                    # 文档站点 (VitePress)
├── internal/                # 内部构建工具
│   ├── build/              # 构建脚本
│   └── build-utils/        # 构建工具库
├── packages/                # 包目录
│   ├── components/         # 组件库
│   ├── theme-chalk/        # 默认主题
│   ├── utils/              # 工具库
│   ├── hooks/              # Vue Hooks
│   ├── tokens/             # 设计令牌
│   └── vue-components/     # 主包
├── play/                   # 组件演练场
└── scripts/                # 脚本文件
```

## 🚀 快速开始

### 安装

```bash
# 使用 npm
npm install vue-components

# 使用 yarn
yarn add vue-components

# 使用 pnpm
pnpm add vue-components
```

### 完整引入

```typescript
import { createApp } from 'vue'
import VueComponents from 'vue-components'
import 'vue-components/theme-chalk/index.css'

const app = createApp(App)
app.use(VueComponents)
```

### 按需引入

```typescript
import { VcButton, VcInput } from 'vue-components'
import 'vue-components/theme-chalk/button.css'
import 'vue-components/theme-chalk/input.css'
```

## 🛠️ 开发

### 环境要求

- Node.js >= 18
- pnpm >= 8

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
# 启动组件演练场
pnpm dev:play

# 启动文档站点
pnpm dev:docs
```

### 构建

```bash
# 构建所有包
pnpm build

# 构建组件库
pnpm build:components

# 构建主题
pnpm build:theme

# 构建工具库
pnpm build:utils
```

## 📚 组件

### 基础组件

- [x] Button 按钮
- [x] Input 输入框
- [ ] Icon 图标
- [ ] Link 链接

### 表单组件

- [ ] Form 表单
- [ ] Select 选择器
- [ ] Checkbox 多选框
- [ ] Radio 单选框
- [ ] Switch 开关

### 数据展示

- [ ] Table 表格
- [ ] Tag 标签
- [ ] Progress 进度条
- [ ] Tree 树形控件

### 反馈组件

- [ ] Alert 警告
- [ ] Loading 加载
- [ ] Message 消息提示
- [ ] Notification 通知

### 导航组件

- [ ] Menu 导航菜单
- [ ] Breadcrumb 面包屑
- [ ] Pagination 分页
- [ ] Steps 步骤条

### 布局组件

- [ ] Layout 布局
- [ ] Container 布局容器
- [ ] Grid 栅格
- [ ] Space 间距

## 🎨 主题定制

组件库使用 SCSS 和 CSS 变量进行主题定制：

```scss
// 自定义主题变量
:root {
  --vc-color-primary: #409eff;
  --vc-color-success: #67c23a;
  --vc-color-warning: #e6a23c;
  --vc-color-danger: #f56c6c;
}
```

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

### 开发流程

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

[MIT](./LICENSE) License © 2024

## 🙏 致谢

本项目参考了 [Element Plus](https://github.com/element-plus/element-plus) 的架构设计和最佳实践。
