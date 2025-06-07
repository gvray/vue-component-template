import type { App } from 'vue'

// 导入组件
export * from '../button'
export * from '../input'

// 导入组件实例
import { VcButton } from '../button'
import { VcInput } from '../input'

// 组件列表
const components = [VcButton, VcInput]

// 全量安装函数
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
