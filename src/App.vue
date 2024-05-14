<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AboutMe from './views/AboutMe.vue'
import Skills from './views/Skills.vue'
import Description from './views/Description.vue'
import Education from './views/Education.vue'
import Experience from './views/Experience.vue'
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
        <Experience />
        <Education />
      </div>
    </div>
  </header>
</template>
