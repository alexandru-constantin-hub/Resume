<script setup>
import { useStore } from '../mainStore'

const store = useStore()

defineProps(['title', 'padding'])
</script>
<template>
  <div
    class="rounded-lg bg-white dark:bg-transparent dark:border-2 dark:border-slate-700"
    :class="padding ? padding : 'p-2'"
  >
    <div v-if="title" class="flex flex-nowrap mx-3 my-6 dark:text-white">
      <div class="w-2 h-2 rounded-full my-auto mr-3" :class="store.primaryBgColor"></div>
      <div class="text-bold" :card="store.secondaryColor">{{ title }}</div>
    </div>
    <slot></slot>
  </div>
</template>
