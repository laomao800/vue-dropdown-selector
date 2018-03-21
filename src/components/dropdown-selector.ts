import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import hasValue from 'has-values'
import ClickOutside from './click-out-side'

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

  private showDropdown: boolean = false

  get isShowDropdown () {
    return this.showDropdown
  }

  get isSelectionEmpty () {
    return isEmpty(this.selection)
  }

  get isMultiple () {
    return this.multilple && Array.isArray(this.selection)
  }

  @Watch('dropdownVisible', { immediate: true })
  private visibleChanged (val: boolean) {
    this.showDropdown = val
  }

  @Watch('selection')
  private selectionChange (val: any) {
    this.$emit('change', val)
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
  }

  private handleHideDropdown () {
    this.showDropdown = false
    this.$emit('update:dropdownVisible', false)
    this.$emit('hide-dropdown')
  }

  private toggleDropdown () {
    const newStatus = !this.showDropdown
    this.showDropdown = newStatus
    this.$emit('update:dropdownVisible', newStatus)
  }
}
