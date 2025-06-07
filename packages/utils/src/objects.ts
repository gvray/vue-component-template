export const hasOwnProperty = Object.prototype.hasOwnProperty

export const hasOwn = (obj: object, key: string | number | symbol): boolean =>
  hasOwnProperty.call(obj, key)

export function getProp(
  obj: Record<string, unknown>,
  path: string,
  defaultValue?: unknown,
): unknown {
  const travel = (regexp: RegExp) =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce(
        (res, key) => (res !== null && res !== undefined ? res[key as keyof typeof res] : res),
        obj,
      )

  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/)
  return result === undefined || result === obj ? defaultValue : result
}

export function deepMerge<T = Record<string, unknown>>(
  src: Record<string, unknown> = {},
  target: Record<string, unknown> = {},
): T {
  let key: string
  const res: Record<string, unknown> = { ...src }
  for (key in target) {
    res[key] = isObject(res[key])
      ? deepMerge(res[key] as Record<string, unknown>, target[key] as Record<string, unknown>)
      : (res[key] = target[key])
  }
  return res as T
}

export function isObject(val: unknown): val is Record<string, unknown> {
  return val !== null && typeof val === 'object'
}

export function isEmpty(val: unknown): boolean {
  if (
    (!val && val !== 0) ||
    (Array.isArray(val) && val.length === 0) ||
    (isObject(val) && !Object.keys(val).length)
  ) {
    return true
  }
  return false
}

export function isEqual(a: unknown, b: unknown): boolean {
  if (a === b) return true
  if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime()
  if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) return a === b
  return isEqualObj(a, b)
}

function isEqualObj(a: Record<string, unknown>, b: Record<string, unknown>): boolean {
  const keys = Object.keys(a)
  if (keys.length !== Object.keys(b).length) return false
  return keys.every((k) => isEqual(a[k], b[k]))
}
