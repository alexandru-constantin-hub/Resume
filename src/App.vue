<script setup>
import { onMounted, ref } from 'vue'
import AboutMe from './views/AboutMe.vue'
import Skills from './views/Skills.vue'
import Description from './views/Description.vue'
import Education from './views/Education.vue'
import Navigation from './components/Navigation.vue'
import Experience from './views/Experience.vue'
import Projects from './views/Projects.vue'
import { useStore } from './mainStore'
const store = useStore()

const active = ref('Resume')

const isActive = (value) => {
  return (active.value = value)
}

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
      <Navigation @sectionActive="isActive" class="hidden lg:block" />
      <Experience v-if="active === 'Resume'" />
      <Education v-if="active === 'Resume'" />
      <Projects v-if="active === 'Projects'" />
    </div>
  </div>
</template>
