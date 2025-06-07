import { withInstall } from '@vue-components/utils'
import Button from './src/button.vue'

export const VcButton = withInstall(Button)
export default VcButton

export * from './src/button'
export type { ButtonInstance } from './src/instance'

// 为了类型推导
declare module 'vue' {
  export interface GlobalComponents {
    VcButton: typeof VcButton
  }
}
