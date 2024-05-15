<script setup>
import { useStore } from '../mainStore'
import { computed } from 'vue'
const store = useStore()

const props = defineProps(['long', 'active'])

const emit = defineEmits(['clicked'])

const active = computed(() => {
  if (props.active) {
    return 'bg-gray-50' + ' ' + store.primaryColor + ' ' + 'dark:bg-slate-700 dark:text-slate-300'
  }
  return (
    'hover:' +
    store.secondaryBgColor +
    ' ' +
    'hover:' +
    store.primaryColor +
    ' ' +
    'dark:hover:bg-slate-700 dark:text-slate-300'
  )
})
</script>
<template>
  <button
    class="rounded py-3"
    :class="[active, props.long ? 'w-full' : 'px-6']"
    @click.stop="emit('clicked')"
  >
    <slot></slot>
  </button>
</template>
