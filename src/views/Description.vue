<script setup>
import Card from '../components/Card.vue'
import CardItem from '../components/CardItem.vue'
import Badge from '../components/Badge.vue'

import codeImage from '@/assets/code.jpg'
import me from '@/assets/me.jpeg'

import { useStore } from '../mainStore'
const store = useStore()

const backgroundImage = codeImage
</script>
<template>
  <Card padding="p-0">
    <div class="relative">
      <div class="relative">
        <div
          class="bg-cover bg-center w-full h-52 no-repeat rounded-t-lg before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-b before:to-white/100 before:dark:to-slate-800 before:z-10 before:rounded-t-lg"
          :class="[store.primaryBgColor, 'before:from-blue-600/30']"
          :style="{ backgroundImage: `url(${backgroundImage})` }"
        ></div>
      </div>
      <img
        :src="me"
        alt="Alexandru Constantin"
        class="rounded-full w-20 -mt-10 z-20 absolute bottom-5 left-5 border-2 border-white"
      />
    </div>
    <div class="m-5">
      <h1 class="text-lg bold dark:text-gray-300">Alexandru Constantin</h1>
      <p class="dark:text-slate-400">Front End Developer</p>
    </div>
    <CardItem class="m-2 dark:text-slate-500">
      <p>
        Committed to continuous learning and professional development, actively seeking
        opportunities to enhance skills and knowledge base. Demonstrated ability to adapt to new
        challenges and technologies, consistently striving for improvement in all aspects of work.
      </p>

      <div class="w-full flex flex-wrap mt-3">
        <Badge
          :text="technology"
          v-for="technology in store.technologies"
          :key="technology"
          class="mr-1 mb-1"
        />
      </div>
    </CardItem>
  </Card>
</template>
