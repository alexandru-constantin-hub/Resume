<script setup>
import { useStore } from '../mainStore'
const store = useStore()

defineProps(['title'])
</script>
<template>
  <div
    class="rounded p-5 dark:bg-transparent"
    :class="[store.secondaryBgColor, store.secondaryColor]"
  >
    <slot></slot>
  </div>
</template>
