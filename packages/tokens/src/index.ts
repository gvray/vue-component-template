// Design Tokens - 设计令牌系统
// 参考 Ant Design、Material Design 等现代设计系统

// ===== 颜色系统 =====
export const colors = {
  // 主题色
  primary: '#409eff',
  success: '#67c23a',
  warning: '#e6a23c',
  danger: '#f56c6c',
  info: '#909399',

  // 中性色
  white: '#ffffff',
  black: '#000000',

  // 文本色
  text: {
    primary: '#303133',
    regular: '#606266',
    secondary: '#909399',
    placeholder: '#c0c4cc',
    disabled: '#c0c4cc',
  },

  // 边框色
  border: {
    lighter: '#f2f6fc',
    light: '#e4e7ed',
    base: '#dcdfe6',
    dark: '#c0c4cc',
    darker: '#b4bccc',
  },

  // 背景色
  background: {
    base: '#f5f7fa',
    light: '#fafafa',
    lighter: '#ffffff',
  },
} as const

// ===== 字体系统 =====
export const typography = {
  fontFamily: {
    sans: [
      'Helvetica Neue',
      'Helvetica',
      'PingFang SC',
      'Hiragino Sans GB',
      'Microsoft YaHei',
      '微软雅黑',
      'Arial',
      'sans-serif',
    ],
    mono: ['Menlo', 'Monaco', 'Consolas', 'Courier', 'monospace'],
  },

  fontSize: {
    xs: '12px', // 辅助文字
    sm: '13px', // 标签文字
    base: '14px', // 正文（小）
    md: '16px', // 正文
    lg: '18px', // 正文（大）
    xl: '20px', // 标题文字
    '2xl': '24px', // 主标题
    '3xl': '28px', // 特大标题
  },

  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  lineHeight: {
    tight: 1.2,
    base: 1.5,
    relaxed: 1.75,
  },
} as const

// ===== 间距系统 =====
export const spacing = {
  '0': '0px',
  '1': '4px', // xs
  '2': '8px', // sm
  '3': '12px', // md
  '4': '16px', // lg
  '5': '20px', // xl
  '6': '24px', // 2xl
  '8': '32px', // 3xl
  '10': '40px', // 4xl
  '12': '48px', // 5xl
  '16': '64px', // 6xl
  '20': '80px', // 7xl
  '24': '96px', // 8xl
} as const

// ===== 尺寸系统 =====
export const sizes = {
  large: 'large',
  default: 'default',
  small: 'small',
} as const

export const componentSizes = {
  large: {
    height: '40px',
    padding: '12px 20px',
    fontSize: typography.fontSize.md,
  },
  default: {
    height: '32px',
    padding: '8px 16px',
    fontSize: typography.fontSize.base,
  },
  small: {
    height: '24px',
    padding: '4px 12px',
    fontSize: typography.fontSize.sm,
  },
} as const

// ===== 圆角系统 =====
export const borderRadius = {
  none: '0px',
  sm: '2px',
  base: '4px',
  md: '6px',
  lg: '8px',
  xl: '12px',
  '2xl': '16px',
  '3xl': '24px',
  full: '9999px',
} as const

// ===== 阴影系统 =====
export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  none: 'none',
} as const

// ===== 动画系统 =====
export const animation = {
  duration: {
    fast: '150ms',
    base: '200ms',
    slow: '300ms',
    slower: '500ms',
  },

  easing: {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
  },
} as const

// ===== 断点系统 =====
export const breakpoints = {
  xs: '0px',
  sm: '576px', // ≥576px
  md: '768px', // ≥768px
  lg: '992px', // ≥992px
  xl: '1200px', // ≥1200px
  '2xl': '1400px', // ≥1400px
} as const

// ===== 类型定义 =====
export type ComponentSize = keyof typeof sizes
export type ComponentType = keyof Pick<
  typeof colors,
  'primary' | 'success' | 'warning' | 'danger' | 'info'
>
export type SpacingKey = keyof typeof spacing
export type FontSizeKey = keyof typeof typography.fontSize
export type ShadowKey = keyof typeof shadows
export type BorderRadiusKey = keyof typeof borderRadius

// ===== 工具函数 =====
/**
 * 获取CSS变量名
 */
export function getCSSVar(token: string): string {
  return `var(--vc-${token})`
}

/**
 * 生成CSS变量定义
 */
export function generateCSSVars() {
  const vars: Record<string, string> = {}

  // 颜色变量
  Object.entries(colors).forEach(([key, value]) => {
    if (typeof value === 'string') {
      vars[`--vc-color-${key}`] = value
    } else {
      Object.entries(value).forEach(([subKey, subValue]) => {
        vars[`--vc-color-${key}-${subKey}`] = subValue
      })
    }
  })

  // 字体变量
  Object.entries(typography.fontSize).forEach(([key, value]) => {
    vars[`--vc-font-size-${key}`] = value
  })

  // 间距变量
  Object.entries(spacing).forEach(([key, value]) => {
    vars[`--vc-spacing-${key}`] = value
  })

  // 圆角变量
  Object.entries(borderRadius).forEach(([key, value]) => {
    vars[`--vc-border-radius-${key}`] = value
  })

  // 阴影变量
  Object.entries(shadows).forEach(([key, value]) => {
    vars[`--vc-shadow-${key}`] = value
  })

  return vars
}
