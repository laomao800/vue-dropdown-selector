# vue-dropdown-selector

## 安装

```bash
# npm
npm install --save @laomao800/vue-dropdown-selector

# yarn
yarn add @laomao800/vue-dropdown-selector
```

## 使用方法

### Single

```vue
<template>
  <div>
    <dropdown-selector
      :selection.sync="selectionSingle"
      :multilple="false"
      :width="400"
      placeholder="Select single value"
      >
      <div class="selector" style="padding:15px">
        <label style="margin-right:10px">
          <input v-model="selectionSingle" name="selectionSingle" type="radio" value="value1" />value1
        </label>
        <label style="margin-right:10px">
          <input v-model="selectionSingle" name="selectionSingle" type="radio" value="value2" />value2
        </label>
        <label style="margin-right:10px">
          <input v-model="selectionSingle" name="selectionSingle" type="radio" value="value3" />value3
        </label>
        <label style="margin-right:10px">
          <input v-model="selectionSingle" name="selectionSingle" type="radio" value="value4" />value4
        </label>
      </div>
    </dropdown-selector>
    <pre>{{ selectionSingle }}</pre>
  </div>
</template>

<script>
import DropdownSelector from '@/components/dropdown-selector.vue'

export default {
  components: { DropdownSelector },
  data () {
    return { selectionSingle: '' }
  }
}
</script>
```

### Multiple

```vue
<template>
  <div>
    <dropdown-selector
      :selection.sync="selectionMultiple"
      :multilple="true"
      :width="400"
      placeholder="Select multiple value"
      >
      <div class="selector" style="padding:15px">
        <label style="margin-right:10px">
          <input v-model="selectionMultiple" name="selectionMultiple" type="checkbox" value="value1" />value1
        </label>
        <label style="margin-right:10px">
          <input v-model="selectionMultiple" name="selectionMultiple" type="checkbox" value="value2" />value2
        </label>
        <label style="margin-right:10px">
          <input v-model="selectionMultiple" name="selectionMultiple" type="checkbox" value="value3" />value3
        </label>
        <label style="margin-right:10px">
          <input v-model="selectionMultiple" name="selectionMultiple" type="checkbox" value="value4" />value4
        </label>
      </div>
    </dropdown-selector>
    <pre>{{ selectionMultiple }}</pre>
  </div>
</template>

<script>
import DropdownSelector from '@/components/dropdown-selector.vue'

export default {
  components: { DropdownSelector },
  data () {
    return { selectionMultiple: [] }
  }
}
</script>
```

### Object data

```vue
<template>
  <div>
    <dropdown-selector
      :selection.sync="selectionObject"
      :multilple="true"
      :width="400"
      placeholder="Select months"
      >
      <template slot="selection" slot-scope="props">{{ props.selection.short }}</template>
      <div class="selector" style="padding:15px">
        <label
          v-for="month in months"
          :key="month.value" style="display:inline-block;width:30%;
          margin-right:10px"
        >
          <input
            type="checkbox"
            :checked="selectionObject.indexOf(month) > -1"
            @change="handleMonthSelect($event, month)"
          />
          {{ month.label }}
        </label>
      </div>
    </dropdown-selector>
    <pre>{{ selectionObject }}</pre>
  </div>
</template>

<script>
import DropdownSelector from '@/components/dropdown-selector.vue'

export default {
  components: {
    DropdownSelector
  },
  data () {
    return {
      months: [
        { label: 'January', short: 'Jan', value: 1 },
        { label: 'February', short: 'Feb', value: 2 },
        { label: 'March', short: 'Mar', value: 3 },
        { label: 'April', short: 'Apr', value: 4 },
        { label: 'May', short: 'May', value: 5 },
        { label: 'June', short: 'Jun', value: 6 },
        { label: 'July', short: 'Jul', value: 7 },
        { label: 'August', short: 'Aug', value: 8 },
        { label: 'September', short: 'Sep', value: 9 },
        { label: 'October', short: 'Oct', value: 10 },
        { label: 'November', short: 'Nov', value: 11 },
        { label: 'December', short: 'Dec', value: 12 }
      ]
    }
  },
  methods: {
    handleMonthSelect ($event, month) {
      if ($event.target.checked) {
        this.selectionObject.push(month)
      } else {
        this.selectionObject.slice(this.selectionObject.findIndex(month), 1)
      }
    }
  }
}
</script>
```

## Props

| prop            | default | 说明
| --------------- | ------- | ----
| selection       | []      | 已选值，可为任意类型数据。__多选状态下，需添加 `.sync` 修饰符__
| multilple       | true    | 是否暂时为多选样式，只有在 `selection` 为 Array 的时候，该选项为 `true` 才生效
| placeholder     | ''      | placeholder
| dropdownVisible | false   | 下拉显示状态。仅在需要通过非点击触发下拉时才需传入
| width           |         | 组件宽度。不传该值则显示为 block 占位
| dropdownWidth   |         | 单独设置下拉部分宽度。不设置则跟随 width
| appendToBody    | false   | 弹出元素是否插入于 body 中。

## Slot

可通过 slot `selection` 自定义选项展示格式， slot-scope 上接受一个 `selection` 的值，在多选场景下，接受的是每一项子项的数据；单选场景下，接受的是 prop 的 `selection` 。

```html
<template slot="selection" slot-scope="props">{{ props.selection.otherPropertyName }}</template>
```

## Events

| Event         | 参数
| ------------- | ----
| change        | (selection)
| show-dropdown | -
| hide-dropdown | -
