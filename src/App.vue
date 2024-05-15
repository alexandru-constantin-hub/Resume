<script setup>
import { ref } from 'vue'
import AboutMe from './views/AboutMe.vue'
import Skills from './views/Skills.vue'
import Description from './views/Description.vue'
import Education from './views/Education.vue'
import Navigation from './components/Navigation.vue'
import Experience from './views/Experience.vue'
import Projects from './views/Projects.vue'

const active = ref('Resume')

const isActive = (value) => {
  console.log(value)
  return (active.value = value)
}
</script>

<template>
  <header>
    <div class="container mx-auto px-8 py-2 flex flex-wrap justify-between">
      <div class="w-full lg:basis-[40%] flex flex-col gap-y-4">
        <Description />
        <AboutMe />
        <Skills />
      </div>
      <div class="w-full lg:basis-[58%] flex flex-col gap-y-4">
        <nav>
          <Navigation @sectionActive="isActive" />
        </nav>
        <Experience v-if="active === 'Resume'" />
        <Education v-if="active === 'Resume'" />
        <Projects v-if="active === 'Projects'" />
      </div>
    </div>
  </header>
</template>
