<template>
  <div id="app">
    <h2>
      Work with
      <a
        href="https://github.com/laomao800/vue-item-list-selector"
        target="_blank"
      >vue-item-list-selector</a>
    </h2>
    <div class="wrap">
      <div class="selector">
        <dropdown-selector
          :selection.sync="selectionWithList"
          :multilple="true"
          placeholder="Select Items"
          :append-to-body="true"
        >
          <template slot="selection" slot-scope="props">{{ props.selection.label }}</template>
          <ItemListSelector v-model="selectionWithList" :data="listData"/>
        </dropdown-selector>
      </div>
      <div class="result">{{ selectionWithList }}</div>
    </div>

    <h2>Single selection</h2>
    <div class="wrap">
      <div class="selector">
        <dropdown-selector
          :selection.sync="selectionSingle"
          :multilple="false"
          placeholder="Select single value"
          :append-to-body="true"
        >
          <div class="dropdown-selector" style="padding:15px">
            <label style="margin-right:10px">
              <input v-model="selectionSingle" name="selectionSingle" type="radio" value="value1">value1
            </label>
            <label style="margin-right:10px">
              <input v-model="selectionSingle" name="selectionSingle" type="radio" value="value2">value2
            </label>
            <label style="margin-right:10px">
              <input v-model="selectionSingle" name="selectionSingle" type="radio" value="value3">value3
            </label>
            <label style="margin-right:10px">
              <input v-model="selectionSingle" name="selectionSingle" type="radio" value="value4">value4
            </label>
          </div>
        </dropdown-selector>
      </div>
      <div class="result">{{ selectionSingle }}</div>
    </div>

    <h2>Multiple selection</h2>
    <div class="wrap">
      <div class="selector">
        <dropdown-selector
          :selection.sync="selectionMultiple"
          :multilple="true"
          placeholder="Select multiple value"
        >
          <div class="dropdown-selector" style="padding:15px">
            <label style="margin-right:10px">
              <input
                v-model="selectionMultiple"
                name="selectionMultiple"
                type="checkbox"
                value="value1"
              >value1
            </label>
            <label style="margin-right:10px">
              <input
                v-model="selectionMultiple"
                name="selectionMultiple"
                type="checkbox"
                value="value2"
              >value2
            </label>
            <label style="margin-right:10px">
              <input
                v-model="selectionMultiple"
                name="selectionMultiple"
                type="checkbox"
                value="value3"
              >value3
            </label>
            <label style="margin-right:10px">
              <input
                v-model="selectionMultiple"
                name="selectionMultiple"
                type="checkbox"
                value="value4"
              >value4
            </label>
          </div>
        </dropdown-selector>
      </div>
      <div class="result">{{ selectionMultiple }}</div>
    </div>

    <h2>Object data selection</h2>
    <div class="wrap">
      <div class="selector">
        <dropdown-selector
          :selection.sync="selectionObject"
          :multilple="true"
          placeholder="Select months"
          :append-to-body="true"
        >
          <template slot="selection" slot-scope="props">{{ props.selection.short }}</template>
          <div class="dropdown-selector" style="padding:15px">
            <label
              v-for="month in months"
              :key="month.value"
              style="display:inline-block;width:30%;margin-right:10px"
            >
              <input
                type="checkbox"
                :checked="selectionObject.indexOf(month) > -1"
                @change="handleMonthSelect($event, month)"
              >
              {{ month.label }}
            </label>
          </div>
        </dropdown-selector>
      </div>
      <div class="result">{{ selectionObject }}</div>
    </div>
  </div>
</template>

<script>
import DropdownSelector from '../src'
import ItemListSelector from '@laomao800/vue-item-list-selector'

function randomText(length = 20) {
  return [...Array(length)]
    .map(i => (~~(Math.random() * 36)).toString(36))
    .join('')
}

export default {
  name: 'App',

  components: {
    DropdownSelector,
    ItemListSelector
  },

  data() {
    return {
      listData: Array(6000)
        .fill()
        .map((v, i) => ({
          label: `${i} - ${randomText(3)}`,
          value: i
        })),

      selectionSingle: '',
      selectionMultiple: [],
      selectionObject: [],
      selectionWithList: [],

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
    handleMonthSelect($event, month) {
      if ($event.target.checked) {
        this.selectionObject.push(month)
      } else {
        const index = this.selectionObject.findIndex(
          selection => selection === month
        )
        if (index > -1) {
          this.selectionObject.splice(index, 1)
        }
      }
    }
  }
}
</script>

<style>
.wrap {
  display: flex;
}
.selector {
  width: 400px;
}
.result {
  white-space: pre-wrap;
  margin-left: 20px;
  height: 150px;
  overflow: auto;
  padding: 10px;
  flex: 1;
  font-size: 12px;
  border: 1px solid #eee;
}
</style>
