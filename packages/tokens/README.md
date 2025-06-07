# @vue-components/tokens

Vue Components 的设计令牌（Design Tokens）系统。

## 什么是 Design Tokens？

Design Tokens 是存储设计决策的最小单位，包括颜色、字体、间距、阴影等视觉属性。它们是现代设计系统的基础，确保整个产品的视觉一致性。

## 为什么需要 Tokens？

### ✅ 优势

1. **中心化管理** - 所有设计决策都在一个地方定义
2. **类型安全** - TypeScript 提供完整的类型检查
3. **多平台一致性** - 可以生成 CSS 变量、SCSS 变量、移动端配置等
4. **易于维护** - 修改一处，全局生效
5. **设计与开发协同** - 设计师和开发者使用同一套语言

### vs Element Plus 的方式

```scss
// Element Plus - 在 SCSS 中硬编码
$--color-primary: #409eff;
$--font-size-base: 14px;
```

```typescript
// Vue Components - 现代化 tokens 系统
import { colors, typography } from '@vue-components/tokens'

const primaryColor = colors.primary // '#409eff'
const baseFontSize = typography.fontSize.base // '14px'
```

## 使用方式

### 1. 在 TypeScript/JavaScript 中使用

```typescript
import { colors, typography, spacing, shadows, getCSSVar } from '@vue-components/tokens'

// 直接使用值
const buttonStyle = {
  backgroundColor: colors.primary,
  fontSize: typography.fontSize.base,
  padding: spacing['4'],
  boxShadow: shadows.md,
}

// 或者使用 CSS 变量
const buttonStyle2 = {
  backgroundColor: getCSSVar('color-primary'),
  fontSize: getCSSVar('font-size-base'),
}
```

### 2. 在 Vue 组件中使用

```vue
<template>
  <button :style="buttonStyle">点击我</button>
</template>

<script setup lang="ts">
import { colors, spacing, shadows } from '@vue-components/tokens'

const buttonStyle = {
  backgroundColor: colors.primary,
  padding: `${spacing['2']} ${spacing['4']}`,
  boxShadow: shadows.base,
  border: 'none',
  borderRadius: '4px',
  color: colors.white,
  cursor: 'pointer',
}
</script>
```

### 3. 生成 CSS 变量

```typescript
import { generateCSSVars } from '@vue-components/tokens'

// 生成所有 CSS 变量
const cssVars = generateCSSVars()

// 输出:
// {
//   '--vc-color-primary': '#409eff',
//   '--vc-color-success': '#67c23a',
//   '--vc-font-size-base': '14px',
//   '--vc-spacing-4': '16px',
//   ...
// }
```

### 4. 在 CSS/SCSS 中使用生成的变量

```css
.my-button {
  background-color: var(--vc-color-primary);
  font-size: var(--vc-font-size-base);
  padding: var(--vc-spacing-2) var(--vc-spacing-4);
  box-shadow: var(--vc-shadow-base);
}
```

## Token 分类

### 🎨 颜色系统

- **主题色**: primary, success, warning, danger, info
- **中性色**: white, black
- **文本色**: primary, regular, secondary, placeholder, disabled
- **边框色**: lighter, light, base, dark, darker
- **背景色**: base, light, lighter

### 📝 字体系统

- **字体族**: sans, mono
- **字体大小**: xs, sm, base, md, lg, xl, 2xl, 3xl
- **字体重量**: normal, medium, semibold, bold
- **行高**: tight, base, relaxed

### 📏 间距系统

- **标准间距**: 0, 1(4px), 2(8px), 3(12px), 4(16px), 5(20px), 6(24px), 8(32px), 10(40px), 12(48px), 16(64px), 20(80px), 24(96px)

### 📱 尺寸系统

- **组件尺寸**: large, default, small
- **组件具体尺寸**: height, padding, fontSize

### 🎯 圆角系统

- **圆角大小**: none, sm, base, md, lg, xl, 2xl, 3xl, full

### 🌟 阴影系统

- **阴影层级**: sm, base, md, lg, xl, 2xl, inner, none

### ⚡ 动画系统

- **持续时间**: fast, base, slow, slower
- **缓动函数**: linear, ease, easeIn, easeOut, easeInOut

### 📱 断点系统

- **响应式断点**: xs, sm, md, lg, xl, 2xl

## 类型定义

```typescript
// 组件尺寸类型
type ComponentSize = 'large' | 'default' | 'small'

// 组件类型（主题色）
type ComponentType = 'primary' | 'success' | 'warning' | 'danger' | 'info'

// 间距键名
type SpacingKey = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '8' | '10' | '12' | '16' | '20' | '24'

// 字体大小键名
type FontSizeKey = 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'

// 阴影键名
type ShadowKey = 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl' | 'inner' | 'none'

// 圆角键名
type BorderRadiusKey = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full'
```

## 与现代设计系统对比

| 特性            | Element Plus | Vue Components | Ant Design | Material Design |
| --------------- | ------------ | -------------- | ---------- | --------------- |
| Design Tokens   | ❌           | ✅             | ✅         | ✅              |
| TypeScript 类型 | 部分         | ✅             | ✅         | ✅              |
| CSS 变量生成    | 手动         | ✅ 自动        | ✅         | ✅              |
| 多平台支持      | ❌           | ✅             | ✅         | ✅              |
| 工具函数        | ❌           | ✅             | ✅         | ✅              |

## 扩展性

你可以轻松扩展 tokens 系统：

```typescript
// 添加新的颜色
export const customColors = {
  ...colors,
  brand: '#ff6b35',
  accent: '#4ecdc4',
}

// 添加新的间距
export const customSpacing = {
  ...spacing,
  '7': '28px',
  '9': '36px',
}
```

这就是为什么我们采用 tokens 系统的原因 - 它让我们的组件库更加现代化、可维护和可扩展！
