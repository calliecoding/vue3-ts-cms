<template>
  <component :is="iconMap" />
</template>

<script lang="ts">
import { computed } from 'vue'
import titleCase from '@/utils/titleCase'
export default {
  props: {
    icon: {
      type: String,
      default: ''
    }
  },
  setup(props: any) {
    const iconMap = computed(() => {
      const iconType = props.icon.split('-').reverse()[0]
      const iconName = titleCase.firstLetterUpper(iconType)
      const iconEle = require('@element-plus/icons-vue')[iconName]

      return iconEle
    })
    return { iconMap }
  }
}
</script>

<style lang="scss" scoped></style>
