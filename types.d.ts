import Vue, { VueConstructor } from 'vue'

declare class Props extends Vue {
  /** 已选值，可为任意类型数据。__多选状态下，需添加 `.sync` 修饰符__ */
  selection: any

  /** 是否暂时为多选样式，只有在 `selection` 为 Array 的时候，该选项为 `true` 才生效 */
  multilple: boolean

  /** placeholder */
  placeholder: string

  /** 下拉显示状态。仅在需要通过非点击触发下拉时才需传入 */
  dropdownVisible: boolean

  /** 组件宽度。不传该值则显示为 inline-block 占位 */
  width: number | string

  /** 单独设置下拉部分宽度。不设置则跟随 width */
  dropdownWidth: number | string

  /** 弹出元素是否插入于 body 中 */
  appendToBody: boolean

  /** appendToBody: true 时，弹出元素的 z-index 值 */
  dropdownZIndex: number
}

export default class DropdownSelector extends Props {
  static install(Vue: VueConstructor<Vue>, options: any): void
}
