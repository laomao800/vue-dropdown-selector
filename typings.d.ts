import { Vue } from 'vue-property-decorator'

export default class DropdownSelector extends Vue {
  selection: any
  multilple: boolean
  placeholder: string
  dropdownVisible: boolean
  width: number | string
  dropdownWidth: number | string
}
