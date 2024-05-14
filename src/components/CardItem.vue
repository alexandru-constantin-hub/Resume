<script setup>
import { useStore } from '../mainStore'
const store = useStore()

defineProps(['title'])
</script>
<template>
  <div class="rounded p-5" :class="[store.secondaryBgColor, store.secondaryColor]">
    <slot></slot>
  </div>
</template>
