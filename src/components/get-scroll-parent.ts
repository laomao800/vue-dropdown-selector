const root = window

function getStyleComputedProperty (element: Element, property: any) {
  const css = root.getComputedStyle(element)
  return css[property]
}

export default function getScrollParent (element: Element | Node): Element {
  const parent: Document | Element | Node | null = element.parentNode

  if (!parent) {
    return element as Element
  }

  if (parent === root.document) {
    if (root.document.body.scrollTop || root.document.body.scrollLeft) {
      return root.document.body
    } else {
      return root.document.documentElement
    }
  }

  if (
    ['scroll', 'auto'].indexOf(getStyleComputedProperty(parent as Element, 'overflow')) !== -1 ||
    ['scroll', 'auto'].indexOf(getStyleComputedProperty(parent as Element, 'overflow-x')) !== -1 ||
    ['scroll', 'auto'].indexOf(getStyleComputedProperty(parent as Element, 'overflow-y')) !== -1
  ) {
    return parent as Element
  }
  return getScrollParent(element.parentNode as Element)
}
