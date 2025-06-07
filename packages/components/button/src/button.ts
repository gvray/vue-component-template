import type { ExtractPropTypes, PropType } from 'vue'

export const buttonTypes = [
  'default',
  'primary',
  'success',
  'warning',
  'info',
  'danger',
  'text',
] as const
export const buttonSizes = ['large', 'default', 'small'] as const
export const buttonNativeTypes = ['button', 'submit', 'reset'] as const

export type ButtonType = (typeof buttonTypes)[number]
export type ButtonSize = (typeof buttonSizes)[number]
export type ButtonNativeType = (typeof buttonNativeTypes)[number]

export const buttonProps = {
  type: {
    type: String as PropType<ButtonType>,
    default: 'default',
    validator: (val: string): val is ButtonType => buttonTypes.includes(val as ButtonType),
  },
  size: {
    type: String as PropType<ButtonSize>,
    default: 'default',
    validator: (val: string): val is ButtonSize => buttonSizes.includes(val as ButtonSize),
  },
  nativeType: {
    type: String as PropType<ButtonNativeType>,
    default: 'button',
    validator: (val: string): val is ButtonNativeType =>
      buttonNativeTypes.includes(val as ButtonNativeType),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  plain: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
  circle: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: '',
  },
} as const

export const buttonEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonEmits = typeof buttonEmits
