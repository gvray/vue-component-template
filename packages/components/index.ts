import type { App } from 'vue'

// 导出单个组件
export * from './button'

// 导出所有组件的类型
export * from './components'

// 组件列表
import { GButton } from './button'

// 组件安装器
const components = [GButton]

// 全局注册方法
const install = (app: App) => {
  components.forEach((component) => {
    if (component.install) {
      app.use(component)
    } else if (component.name) {
      app.component(component.name, component)
    }
  })
  return app
}

export { GButton, install }

export default {
  install,
}
