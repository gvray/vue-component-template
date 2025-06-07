import type { App } from 'vue'

// 导入所有组件
export * from '@vue-components/components'
export * from '@vue-components/utils'
export * from '@vue-components/hooks'
export * from '@vue-components/tokens'

// 导入组件
import { VcButton } from '@vue-components/components/button'
import { VcInput } from '@vue-components/components/input'

// 组件列表
const components = [VcButton, VcInput]

// 全量安装
const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name || component.__name, component)
  })
}

export {
  // 组件
  VcButton,
  VcInput,
  // 安装函数
  install,
}

export default {
  install,
}

// 版本信息
export const version = '1.0.0'
