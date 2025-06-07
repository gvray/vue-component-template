import type { ExtractPropTypes } from 'vue'

export const buttonProps = {
  type: {
    type: String,
    default: 'default',
    validator: (val: string) => {
      return ['default', 'primary', 'success', 'warning', 'danger'].includes(val)
    }
  },
  size: {
    type: String,
    default: 'default',
    validator: (val: string) => {
      return ['small', 'default', 'large'].includes(val)
    }
  },
  disabled: {
    type: Boolean,
    default: false
  }
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>

export type ButtonType = ButtonProps['type']
export type ButtonSize = ButtonProps['size']
