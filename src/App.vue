<script setup>
import { onMounted } from 'vue'
import AboutMe from './views/AboutMe.vue'
import Skills from './views/Skills.vue'
import Description from './views/Description.vue'
import Navigation from './components/Navigation.vue'
import { useStore } from './mainStore'
const store = useStore()

onMounted(() => {
  store.getTheme()
})
</script>

<template>
  <div class="container mx-auto px-8 py-2 flex flex-wrap justify-between gap-y-4">
    <div class="w-full lg:basis-[40%] flex flex-col gap-y-4">
      <Description />
      <Navigation @sectionActive="isActive" class="block lg:hidden" />
      <AboutMe :class="active === 'Resume' ? 'block' : 'hidden lg:block'" />
      <Skills :class="active === 'Resume' ? 'block' : 'hidden lg:block'" />
    </div>
    <div class="w-full lg:basis-[58%] flex flex-col gap-y-4 relative">
      <Navigation class="hidden lg:block" />
      <router-view></router-view>
    </div>
  </div>
</template>
