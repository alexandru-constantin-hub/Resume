<script setup>
import DarkMode from './icons/DarkMode.vue'
import LightMode from './icons/LightMode.vue'
defineProps(['theme'])
</script>
<template>
  <div>
    <button v-if="theme === 'light'">
      <DarkMode :width="25" :height="25" />
    </button>
    <button v-else-if="theme === 'dark'">
      <LightMode :width="25" :height="25" />
    </button>
  </div>
</template>
