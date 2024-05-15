<script setup>
import { ref } from 'vue'
import DarkMode from './icons/DarkMode.vue'
import LightMode from './icons/LightMode.vue'
import AutoMode from './icons/AutoMode.vue'
import { useStore } from '../mainStore'
const store = useStore()

defineProps(['theme'])

const displayAllButtons = ref(false)

const toggleDisplay = () => {
  displayAllButtons.value = !displayAllButtons.value
}

const changeTheme = (theme) => {
  store.currentTheme = theme
  store.changeTheme(theme)
  toggleDisplay()
}
</script>
<template>
  <Transition name="fade" mode="out-in">
    <button
      v-if="!displayAllButtons"
      title="Change theme"
      class="fill-slate-500 dark:fill-slate-300"
    >
      <AutoMode :width="25" :height="25" @click.prevent="toggleDisplay" />
    </button>
    <div v-else class="flex mt-1 gap-2 fill-slate-500 dark:fill-slate-300">
      <button @click.prevent="changeTheme('dark')" title="Dark theme">
        <DarkMode :width="25" :height="25" />
      </button>
      <button @click.prevent="changeTheme('light')" title="Light theme">
        <LightMode :width="25" :height="25" />
      </button>
      <button @click.prevent="changeTheme('auto')" title="Auto theme">
        <AutoMode :width="25" :height="25" />
      </button>
    </div>
  </Transition>
</template>
