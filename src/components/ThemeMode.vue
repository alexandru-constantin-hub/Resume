<script setup>
import DarkMode from './icons/DarkMode.vue'
import LightMode from './icons/LightMode.vue'
import AutoMode from './icons/AutoMode.vue'
import { useStore } from '../mainStore'
const store = useStore()

defineProps(['theme'])
</script>
<template>
  <div class="mt-1">
    <button @click.stop="store.changeTheme()">
      <DarkMode :width="25" :height="25" v-if="store.currentTheme === 'light'" />
      <LightMode :width="25" :height="25" v-if="store.currentTheme === 'dark'" />
      <AutoMode :width="25" :height="25" v-if="store.currentTheme === 'auto'" />
    </button>
  </div>
</template>
