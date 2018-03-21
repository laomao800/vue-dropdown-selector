<template>
  <div :class="['dropdown-selector', {
      'dropdown-selector--active': isShowDropdown,
      'dropdown-selector--inline': width
    }]"
    :style="{ width: `${width}px` }"
    v-click-outside="handleHideDropdown"
  >
    <div class="selector__selection" @click="toggleDropdown">
      <div v-if="isSelectionEmpty" class="selector__placeholder">{{ placeholder }}</div>
      <template v-else>
        <div v-if="isMultiple" class="selector__multiple">
          <div v-for="(option, index) in selection" :key="index" class="selector__option">
            <div class="selector__option-text"><slot name="selection" :selection="option">{{ option }}</slot></div>
            <div class="selector__option-close" @click.stop="removeOption(index)"></div>
          </div>
        </div>
        <div v-else class="selector__single">
          <div class="selector__option-text"><slot name="selection" :selection="selection">{{ selection }}</slot></div>
        </div>
      </template>
      <div class="selector__arrow"></div>
    </div>
    <transition name="zoom-in-top">
      <div class="selector__container" v-show="isShowDropdown" :style="{ width: `${dropdownWidth}px` }">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script lang="ts" src="./dropdown-selector.ts"></script>

<style lang="less" src="./dropdown-selector.less"></style>
