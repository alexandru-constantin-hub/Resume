<script setup>
import { useStore } from '../mainStore'
import { computed } from 'vue'
const store = useStore()

const props = defineProps(['long', 'active'])

const emit = defineEmits(['click'])

const active = computed(() => {
  if (props.active) {
    return 'bg-gray-50' + ' ' + store.primaryColor
  }
  return 'hover:' + store.secondaryBgColor + ' ' + 'hover:' + store.primaryColor
})
</script>
<template>
  <button
    class="rounded py-2"
    :class="[active, props.long ? 'w-full' : 'px-4']"
    @click.stop="emit('click')"
  >
    <slot></slot>
  </button>
</template>
