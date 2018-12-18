<template>
  <div
    :class="['dropdown-selector', {
      'dropdown-selector--active': showDropdown,
      'dropdown-selector--inline': width
    }]"
    :style="triggerStyle"
    v-click-outside="handleHideDropdown"
  >
    <div ref="popupTrigger" class="selector__selection" @click="toggleDropdown">
      <div v-if="isSelectionEmpty" class="selector__placeholder">{{ placeholder }}</div>
      <template v-else>
        <div v-if="isMultiple" class="selector__multiple">
          <div v-for="(option, index) in selection" :key="index" class="selector__option">
            <div class="selector__option-text">
              <slot name="selection" :selection="option">{{ option }}</slot>
            </div>
            <div class="selector__option-close" @click.stop="removeOption(index)"></div>
          </div>
        </div>
        <div v-else class="selector__single">
          <div class="selector__option-text">
            <slot name="selection" :selection="selection">{{ selection }}</slot>
          </div>
        </div>
      </template>
      <div class="selector__arrow"></div>
    </div>
    <transition name="selector__container-trans">
      <div
        ref="popupContainer"
        v-show="showDropdown"
        :style="popupStyle"
        @click.stop
        class="dropdown-selector__container"
      >
        <slot/>
      </div>
    </transition>
  </div>
</template>

<script>
import hasValue from 'has-values'
import clickOutside from './clickOutSide'
import getScrollParent from './getScrollParent'
import './style.less'

const isEmpty = val => !hasValue(val)

/**
 * 50 -> '50px'
 * '50px' -> '50px'
 * '50.5px' -> '50px'
 * '50%' -> '50%'
 * '50.5%' -> '50%'
 * 'a' -> null
 */
function parseSizeWithUnit(value) {
  const isPercent = /\d+%/.test(value)
  const num = parseInt(value, 10)
  return num ? (isPercent ? `${num}%` : `${num}px`) : null
}

export default {
  name: 'DropdownSelector',

  directives: {
    clickOutside
  },

  props: {
    selection: {
      default: () => []
    },
    multilple: { type: Boolean, default: true },
    placeholder: { type: String, default: '' },
    dropdownVisible: { type: Boolean, default: false },
    width: { type: [Number, String] },
    dropdownWidth: { type: Number },
    dropdownZIndex: { type: Number, default: 1000 },
    appendToBody: { type: Boolean, default: false }
  },

  data() {
    return {
      showDropdown: false,
      popupPosition: {},
      scrollParents: []
    }
  },

  computed: {
    isSelectionEmpty() {
      return isEmpty(this.selection)
    },
    isMultiple() {
      return this.multilple && Array.isArray(this.selection)
    },
    triggerStyle() {
      return {
        width: parseSizeWithUnit(this.dropdownWidth)
      }
    },
    popupStyle() {
      return {
        width: parseSizeWithUnit(this.dropdownWidth),
        zIndex: this.zIndex + 2,
        ...this.popupPosition
      }
    }
  },

  watch: {
    dropdownVisible: {
      immediate: true,
      handler(val) {
        this.showDropdown = val
      }
    },
    async selection(val) {
      this.$emit('change', val)
      await this.$nextTick()
      if (this.appendToBody) {
        this.updatePopupPosition()
      }
    }
  },

  mounted() {
    if (this.appendToBody) {
      document.body.appendChild(this.$refs.popupContainer)

      // 需要获取所有滚动父级，以确保多层滚动条场景下定位准确
      this.$nextTick().then(() => {
        const loopGetScrollParent = parentEle => {
          let parent = parentEle
          if (
            parentEle === window.document.body ||
            parentEle === window.document.documentElement
          ) {
            parent = window
          } else {
            loopGetScrollParent(getScrollParent(parent))
          }
          this.scrollParents.push(parent)
        }
        loopGetScrollParent(getScrollParent(this.$refs.popupTrigger))
        this.scrollParents.forEach(element => {
          element.addEventListener('scroll', this.updatePopupPosition)
        })
        window.addEventListener('resize', this.updatePopupPosition)
      })
    }
  },

  beforeDestroy() {
    this.scrollParents.forEach(element => {
      element.removeEventListener('scroll', this.updatePopupPosition)
    })
    if (this.appendToBody) {
      const popup = this.$refs.popupContainer
      popup.parentElement.removeChild(popup)
      window.removeEventListener('resize', this.updatePopupPosition)
    }
  },

  methods: {
    removeOption(index) {
      if (Array.isArray(this.selection)) {
        const newSelection = [
          ...this.selection.slice(0, index),
          ...this.selection.slice(index + 1, this.selection.length)
        ]
        this.$emit('update:selection', newSelection)
      }
    },

    handleShowDropdown() {
      this.showDropdown = true
      this.$emit('update:dropdownVisible', true)
      this.$emit('show-dropdown')
      if (this.appendToBody) {
        this.updatePopupPosition()
      }
    },

    handleHideDropdown() {
      this.showDropdown = false
      this.$emit('update:dropdownVisible', false)
      this.$emit('hide-dropdown')
    },

    toggleDropdown() {
      const newStatus = !this.showDropdown
      newStatus ? this.handleShowDropdown() : this.handleHideDropdown()
      this.$emit('update:dropdownVisible', newStatus)
    },

    getPopupPosition() {
      const triggerBounding = this.$refs.popupTrigger.getBoundingClientRect()
      const offsetLeft = triggerBounding.left + window.scrollX
      const offsetTop = triggerBounding.bottom + window.scrollY
      return {
        left: `${offsetLeft}px`,
        top: `${offsetTop}px`,
        width: this.dropdownWidth
          ? `${this.dropdownWidth}px`
          : `${triggerBounding.width}px`
      }
    },

    updatePopupPosition() {
      if (this.showDropdown) {
        this.popupPosition = this.getPopupPosition()
      }
    }
  }
}
</script>
