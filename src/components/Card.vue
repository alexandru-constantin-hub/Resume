<script setup>
import { useStore } from '../mainStore'

const store = useStore()

defineProps(['title', 'padding'])
</script>
<template>
  <div class="rounded-lg bg-white" :class="padding ? padding : 'p-2'">
    <div v-if="title" class="flex flex-nowrap mx-3 my-6">
      <div class="w-2 h-2 rounded-full my-auto mr-3" :class="store.primaryBgColor"></div>
      <div class="text-bold" :card="store.secondaryColor">{{ title }}</div>
    </div>
    <slot></slot>
  </div>
</template>
