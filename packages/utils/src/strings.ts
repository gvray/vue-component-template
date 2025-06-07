export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function camelize(str: string): string {
  return str.replace(/-(\w)/g, (_, c) => (c ? c.toUpperCase() : ''))
}

export function hyphenate(str: string): string {
  return str.replace(/\B([A-Z])/g, '-$1').toLowerCase()
}

export function kebabCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()
}

export function pascalCase(str: string): string {
  return camelize(capitalize(str))
}

export function isString(val: unknown): val is string {
  return typeof val === 'string'
}

export function isNumber(val: unknown): val is number {
  return typeof val === 'number'
}

export function isBoolean(val: unknown): val is boolean {
  return typeof val === 'boolean'
}

export function isFunction(val: unknown): val is Function {
  return typeof val === 'function'
}

export function isArray(val: unknown): val is Array<unknown> {
  return Array.isArray(val)
}

export function isUndefined(val: unknown): val is undefined {
  return val === undefined
}

export function isNull(val: unknown): val is null {
  return val === null
}

export function isDefined<T>(val: T | undefined | null): val is T {
  return val !== undefined && val !== null
}
