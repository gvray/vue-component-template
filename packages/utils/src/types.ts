export type Awaitable<T> = T | PromiseLike<T>

export type Nullable<T> = T | null

export type Arrayable<T> = T | T[]

export type Fn<T = void> = () => T

export type AnyFn<T = any> = (...args: any[]) => T

export type PromiseFn<T = any> = (...args: any[]) => Promise<T>

export type ComponentSize = 'large' | 'default' | 'small'

export type ComponentType = 'primary' | 'success' | 'warning' | 'danger' | 'info'

export type Mutable<T> = {
  -readonly [P in keyof T]: T[P]
}

export type HTMLElementCustomized<T> = HTMLElement & T

export type Recordable<T = any> = Record<string, T>

export type ReadonlyRecordable<T = any> = {
  readonly [key: string]: T
}

export type Indexable<T = any> = {
  [key: string]: T
}

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

export type TimeoutHandle = ReturnType<typeof setTimeout>

export type IntervalHandle = ReturnType<typeof setInterval>
