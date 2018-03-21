<template>
  <div>
    <h2>Single</h2>
    <dropdown-selector
      :selection.sync="selectionSingle"
      :multilple="false"
      :width="400"
      placeholder="Select single value"
      >
      <div class="selector" style="padding:15px">
        <label style="margin-right:10px"><input v-model="selectionSingle" name="selectionSingle" type="radio" value="value1" />value1</label>
        <label style="margin-right:10px"><input v-model="selectionSingle" name="selectionSingle" type="radio" value="value2" />value2</label>
        <label style="margin-right:10px"><input v-model="selectionSingle" name="selectionSingle" type="radio" value="value3" />value3</label>
        <label style="margin-right:10px"><input v-model="selectionSingle" name="selectionSingle" type="radio" value="value4" />value4</label>
      </div>
    </dropdown-selector>
    <pre>{{ selectionSingle }}</pre>

    <h2>Multiple</h2>
    <dropdown-selector
      :selection.sync="selectionMultiple"
      :multilple="true"
      :width="400"
      placeholder="Select multiple value"
      >
      <div class="selector" style="padding:15px">
        <label style="margin-right:10px"><input v-model="selectionMultiple" name="selectionMultiple" type="checkbox" value="value1" />value1</label>
        <label style="margin-right:10px"><input v-model="selectionMultiple" name="selectionMultiple" type="checkbox" value="value2" />value2</label>
        <label style="margin-right:10px"><input v-model="selectionMultiple" name="selectionMultiple" type="checkbox" value="value3" />value3</label>
        <label style="margin-right:10px"><input v-model="selectionMultiple" name="selectionMultiple" type="checkbox" value="value4" />value4</label>
      </div>
    </dropdown-selector>
    <pre>{{ selectionMultiple }}</pre>

    <h2>Object data</h2>
    <dropdown-selector
      :selection.sync="selectionObject"
      :multilple="true"
      :width="400"
      placeholder="Select months"
      >
      <template slot="selection" slot-scope="props">{{ props.selection.short }}</template>
      <div class="selector" style="padding:15px">
        <label v-for="month in months" :key="month.value" style="display:inline-block;width:30%;margin-right:10px">
          <input type="checkbox" :checked="selectionObject.indexOf(month) > -1" @change="handleMonthSelect($event, month)" />
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
  name: 'App',

  components: {
    DropdownSelector
  },

  data () {
    return {
      selectionSingle: '',
      selectionMultiple: [],
      selectionObject: [],

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
