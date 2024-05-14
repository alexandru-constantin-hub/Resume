<script setup>
import CardItem from '@/components/CardItem.vue'
import Card from '../components/Card.vue'
import School from '../components/icons/School.vue'
import Place from '../components/icons/Place.vue'
import Period from '../components/icons/Period.vue'
import { useStore } from '../mainStore'

const store = useStore()

const firstLetterSchoolName = (school) => {
  return school.charAt(0).toUpperCase()
}

const schoolColor = (school) => {
  if (school === 'GeraldGodin') {
    return 'bg-blue-500'
  }
  if (school === 'Vanier') {
    return 'bg-red-500'
  }
  return 'bg-teal-500'
}
</script>
<template>
  <Card title="Education">
    <CardItem class="mb-2" v-for="education in store.education" :key="education.title">
      <div class="flex flex-wrap">
        <div class="w-1/12">
          <div class="w-12 rounded-full m-auto" :class="schoolColor(education.icon)">
            <p class="text-center text-2xl font-semibold p-2 text-white">
              {{ firstLetterSchoolName(education.school) }}
            </p>
          </div>
        </div>
        <div class="w-11/12 pl-3">
          <h3 class="font-bold">{{ education.title }}</h3>
          <div class="flex items-center gap-x-4 flex-wrap">
            <div class="flex">
              <School :width="15" :height="15" class="mt-1 mr-1 fill-slate-600" />
              <p>{{ education.school }}</p>
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
