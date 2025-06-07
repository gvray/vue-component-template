import type { App, Plugin } from 'vue'

export type SFCWithInstall<T> = T & Plugin

export const withInstall = <T, E extends Record<string, unknown>>(
  main: T,
  extra?: E,
): SFCWithInstall<T> & E => {
  ;(main as SFCWithInstall<T>).install = (app: App): void => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component(comp.name, comp)
    }
  }

  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      ;(main as Record<string, unknown>)[key] = comp
    }
  }
  return main as SFCWithInstall<T> & E
}

export const withNoopInstall = <T>(component: T) => {
  ;(component as SFCWithInstall<T>).install = () => {}
  return component as SFCWithInstall<T>
}
