<script setup>
defineProps(['text'])
</script>

<template>
  <div
    class="inline-flex items-center rounded-md bg-gray-200 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
  >
    {{ text }}
  </div>
</template>
