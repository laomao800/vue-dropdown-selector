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
  private scrollParent: any = null

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
  }

  private mounted () {
    if (this.appendToBody) {
      document.body.appendChild(this.$refs.popupContainer)
      this.scrollParent = getScrollParent(this.$refs.popupContainer)
      if (this.scrollParent === window.document.body || this.scrollParent === window.document.documentElement) {
        this.scrollParent = window
      }
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
    if (this.appendToBody) {
      this.updatePopupPosition()
    }
    this.showDropdown = true
    this.$emit('update:dropdownVisible', true)
    this.$emit('show-dropdown')
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
    const offsetLeft = triggerBounding.left + this.scrollParent.scrollX
    const offsetTop = triggerBounding.bottom + this.scrollParent.scrollY
    return {
      left: `${offsetLeft}px`,
      top: `${offsetTop}px`,
      width: this.dropdownWidth ? `${this.dropdownWidth}px` : `${triggerBounding.width}px`
    }
  }

  private updatePopupPosition () {
    this.popupPosition = this.getPopupPosition()
  }
}
