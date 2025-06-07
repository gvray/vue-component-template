import { computed, inject, unref } from 'vue'
import type { InjectionKey, Ref } from 'vue'

export type IdInjectionContext = {
  prefix: number
  current: number
}

const defaultIdInjection = {
  prefix: Math.floor(Math.random() * 10000),
  current: 0,
}

export const ID_INJECTION_KEY: InjectionKey<IdInjectionContext> = Symbol('elIdInjection')

export const useId = (deterministicId?: Ref<string> | string): Ref<string> => {
  const idInjection = inject(ID_INJECTION_KEY, defaultIdInjection)

  if (!deterministicId) {
    deterministicId = `vc-id-${idInjection.prefix}-${idInjection.current++}`
  }

  const namespace = useNamespace('id')
  return computed(
    () =>
      unref(deterministicId) || `${namespace.b()}-${idInjection.prefix}-${idInjection.current++}`,
  )
}

// 简化版本，避免循环依赖
const useNamespace = (block: string) => {
  const b = () => `vc-${block}`
  return { b }
}
