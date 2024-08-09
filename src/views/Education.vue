<script setup>
import CardItem from '@/components/CardItem.vue'
import Card from '../components/Card.vue'
import School from '../components/icons/School.vue'
import Place from '../components/icons/Place.vue'
import Period from '../components/icons/Period.vue'
import { useStore } from '../mainStore'

const store = useStore()
</script>
<template>
  <Card title="Education">
    <CardItem class="mb-2" v-for="education in store.education" :key="education.title">
      <div class="flex flex-wrap">
        <div class="hidden md:w-1/12 md:block">
          <img
            :src="store.getFavicon(education.webAddress)"
            :alt="education.school"
            class="m-auto w-6"
          />
        </div>
        <div class="w-12/12 md:w-11/12 pl-3">
          <h2 class="font-bold dark:text-slate-300">{{ education.title }}</h2>
          <div class="flex items-center gap-x-4 flex-wrap">
            <div class="flex">
              <School :width="15" :height="15" class="mt-1 mr-1 fill-slate-600" />
              <a :href="education.webAddress" target="_blank">{{ education.school }}</a>
            </div>
            <div class="flex">
              <Place :width="15" :height="15" class="mt-1 mr-1 fill-slate-600" />
              <p>{{ education.place }}</p>
            </div>
            <div class="flex">
              <Period :width="15" :height="15" class="mt-1 mr-1 fill-slate-600" />
              <p>{{ education.date }}</p>
            </div>
          </div>
        </div>
      </div>
    </CardItem>
  </Card>
</template>
