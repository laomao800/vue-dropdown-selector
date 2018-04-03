import { VNode } from 'vue'
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import hasValue from 'has-values'
import ClickOutside from './click-out-side'
import getScrollParent from './get-scroll-parent'

const isEmpty = (val: any) => !hasValue(val)

@Component({
  directives: {
    ClickOutside
  }
})
export default class DropdownSelector extends Vue {
  @Prop({ default: (): Array<Object> => [] })
  public selection!: any

  @Prop({ type: Boolean, default: true })
  public multilple!: boolean

  @Prop({ type: String, default: '' })
  public placeholder!: string

  @Prop({ type: Boolean, default: false })
  public dropdownVisible!: boolean

  @Prop({ type: Number })
  public width!: number

  @Prop({ type: Number })
  public dropdownWidth!: number

  @Prop({ type: Number, default: 1000 })
  public zIndex!: number

  @Prop({ type: Boolean, default: false })
  public appendToBody!: boolean

  private showDropdown: boolean = false
  private popupPosition: object = {}
  private scrollParents: Array<Window|Element> = []

  public $refs!: {
    popupContainer: any,
    popupTrigger: any
  }

  get isShowDropdown () {
    return this.showDropdown
  }

  get isSelectionEmpty () {
    return isEmpty(this.selection)
  }

  get isMultiple () {
    return this.multilple && Array.isArray(this.selection)
  }

  get popupStyle () {
    return {
      width: this.dropdownWidth ? `${this.dropdownWidth}px` : null,
      zIndex: this.zIndex + 2,
      ...this.popupPosition
    }
  }

  @Watch('dropdownVisible', { immediate: true })
  private visibleChanged (val: boolean) {
    this.showDropdown = val
  }

  @Watch('selection')
  private selectionChange (val: any) {
    this.$emit('change', val)
    this.$nextTick().then(() => {
      if (this.appendToBody) {
        this.updatePopupPosition()
      }
    })
  }

  private mounted () {
    if (this.appendToBody) {
      document.body.appendChild(this.$refs.popupContainer)

      // 需要获取所有滚动父级，以确保多层滚动条场景下定位准确
      this.$nextTick().then(() => {
        const loopGetScrollParent = (parentEle: Element) => {
          let parent: Window | Element = parentEle
          if (parentEle === window.document.body || parentEle === window.document.documentElement) {
            parent = window
          } else {
            loopGetScrollParent(getScrollParent(parent))
          }
          this.scrollParents.push(parent)
        }
        loopGetScrollParent(getScrollParent(this.$refs.popupTrigger))
        this.scrollParents.forEach((element) => {
          element.addEventListener('scroll', this.updatePopupPosition)
        })
      })
    }
  }

  private beforeDestroy () {
    this.scrollParents.forEach((element) => {
      element.removeEventListener('scroll', this.updatePopupPosition)
    })
    if (this.appendToBody) {
      const popup = this.$refs.popupContainer
      popup.parentElement.removeChild(popup)
    }
  }

  private removeOption (index: number) {
    if (Array.isArray(this.selection)) {
      const newSelection = [
        ...this.selection.slice(0, index),
        ...this.selection.slice(index + 1, this.selection.length)
      ]
      this.$emit('update:selection', newSelection)
    }
  }

  private handleShowDropdown () {
    this.showDropdown = true
    this.$emit('update:dropdownVisible', true)
    this.$emit('show-dropdown')
    if (this.appendToBody) {
      this.updatePopupPosition()
    }
  }

  private handleHideDropdown () {
    this.showDropdown = false
    this.$emit('update:dropdownVisible', false)
    this.$emit('hide-dropdown')
  }

  private toggleDropdown () {
    const newStatus = !this.showDropdown
    newStatus
      ? this.handleShowDropdown()
      : this.handleHideDropdown()
    this.$emit('update:dropdownVisible', newStatus)
  }

  private getPopupPosition (): object {
    const triggerBounding = this.$refs.popupTrigger.getBoundingClientRect()
    const offsetLeft = triggerBounding.left + window.scrollX
    const offsetTop = triggerBounding.bottom + window.scrollY
    return {
      left: `${offsetLeft}px`,
      top: `${offsetTop}px`,
      width: this.dropdownWidth ? `${this.dropdownWidth}px` : `${triggerBounding.width}px`
    }
  }

  private updatePopupPosition () {
    if (this.isShowDropdown) {
      this.popupPosition = this.getPopupPosition()
    }
  }
}
