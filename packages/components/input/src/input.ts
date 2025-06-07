import type { ExtractPropTypes, PropType } from 'vue'

export const inputTypes = ['text', 'password', 'email', 'number', 'tel', 'url'] as const
export const inputSizes = ['large', 'default', 'small'] as const

export type InputType = (typeof inputTypes)[number]
export type InputSize = (typeof inputSizes)[number]

export const inputProps = {
  modelValue: {
    type: [String, Number],
    default: '',
  },
  type: {
    type: String as PropType<InputType>,
    default: 'text',
    validator: (val: string): val is InputType => inputTypes.includes(val as InputType),
  },
  size: {
    type: String as PropType<InputSize>,
    default: 'default',
    validator: (val: string): val is InputSize => inputSizes.includes(val as InputSize),
  },
  placeholder: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
} as const

export const inputEmits = {
  'update:modelValue': (value: string | number) =>
    typeof value === 'string' || typeof value === 'number',
  input: (value: string | number) => typeof value === 'string' || typeof value === 'number',
  focus: (evt: FocusEvent) => evt instanceof FocusEvent,
  blur: (evt: FocusEvent) => evt instanceof FocusEvent,
}

export type InputProps = ExtractPropTypes<typeof inputProps>
export type InputEmits = typeof inputEmits
