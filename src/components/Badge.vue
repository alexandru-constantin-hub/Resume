<script setup>
defineProps(['text'])
</script>

<template>
  <div
    class="inline-flex items-center rounded-md bg-gray-200 dark:bg-slate-300 px-2 py-1 text-xs font-medium text-gray-600 dark:text-white ring-1 ring-inset ring-gray-500/10"
  >
    {{ text }}
  </div>
</template>
