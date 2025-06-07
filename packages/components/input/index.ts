import { withInstall } from '@vue-components/utils'
import Input from './src/input.vue'

export const VcInput = withInstall(Input)
export default VcInput

export * from './src/input'
export type { InputInstance } from './src/instance'

// 为了类型推导
declare module 'vue' {
  export interface GlobalComponents {
    VcInput: typeof VcInput
  }
}
