export const isClient = typeof window !== 'undefined'

export const isElement = (e: unknown): e is Element => {
  if (typeof Element === 'undefined') return false
  return e instanceof Element
}

export const isHTMLElement = (e: unknown): e is HTMLElement => {
  if (typeof HTMLElement === 'undefined') return false
  return e instanceof HTMLElement
}

export function getStyle(element: HTMLElement, styleName: keyof CSSStyleDeclaration): string {
  if (!isClient || !element || !styleName) return ''

  let key = styleName as string
  if (key === 'float') {
    key = 'cssFloat'
  }
  try {
    const style = (element.style as Record<string, string>)[key]
    if (style) return style
    const computed = document.defaultView?.getComputedStyle(element, '')
    return computed ? (computed[key as keyof CSSStyleDeclaration] as string) : ''
  } catch {
    return (element.style as Record<string, string>)[key]
  }
}

export function setStyle(
  element: HTMLElement,
  styleName: CSSStyleDeclaration | string,
  value?: string,
) {
  if (!element || !styleName) return

  if (typeof styleName === 'object') {
    Object.entries(styleName).forEach(([prop, val]) => {
      setStyle(element, prop, val)
    })
  } else {
    ;(element.style as Record<string, string>)[styleName] = value || ''
  }
}

export function removeClass(el: Element, cls: string) {
  if (!el || !cls) return
  const classes = cls.split(' ')

  let curClass = ` ${el.className} `

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.remove(clsName)
    } else {
      curClass = curClass.replace(` ${clsName} `, ' ')
    }
  }
  if (!el.classList) {
    el.className = curClass.trim()
  }
}

export function addClass(el: Element, cls: string) {
  if (!el) return
  let curClass = el.className

  const classes = (cls || '').split(' ')

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.add(clsName)
    } else if (!hasClass(el, clsName)) {
      curClass += ` ${clsName}`
    }
  }
  if (!el.classList) {
    el.className = curClass
  }
}

export function hasClass(el: Element, cls: string): boolean {
  if (!el || !cls) return false
  if (cls.includes(' ')) throw new Error('className should not contain space.')
  if (el.classList) {
    return el.classList.contains(cls)
  }
  return ` ${el.className} `.includes(` ${cls} `)
}
