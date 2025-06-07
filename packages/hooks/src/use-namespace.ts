import { computed } from 'vue'

const defaultNamespace = 'vc'

export const useNamespace = (block: string, namespace = defaultNamespace) => {
  const b = (blockSuffix = '') => `${namespace}-${block}${blockSuffix ? `-${blockSuffix}` : ''}`
  const e = (element: string) => `${b()}__${element}`
  const m = (modifier: string) => `${b()}--${modifier}`
  const be = (blockSuffix: string, element: string) => `${b(blockSuffix)}__${element}`
  const em = (element: string, modifier: string) => `${e(element)}--${modifier}`
  const bm = (blockSuffix: string, modifier: string) => `${b(blockSuffix)}--${modifier}`
  const bem = (blockSuffix: string, element: string, modifier: string) =>
    `${be(blockSuffix, element)}--${modifier}`
  const is = (name: string, state?: boolean) => (state ? `is-${name}` : '')

  return {
    namespace: computed(() => namespace),
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is,
  }
}
