<script setup>
import CardItem from '@/components/CardItem.vue'
import Card from '../components/Card.vue'
import Badge from '../components/Badge.vue'
import Place from '../components/icons/Place.vue'
import Period from '../components/icons/Period.vue'
import Company from '../components/icons/Company.vue'
import { useStore } from '../mainStore'

const store = useStore()

const firstLetterCompanyName = (company) => {
  return company.charAt(0).toUpperCase()
}

const companyColor = (company) => {
  if (company === 'Flyscan') {
    return 'bg-purple-500 dark:bg-slate-700 text-white dark:text-slate-500'
  }
  if (company === 'Zmartests') {
    return 'bg-green-500 dark:bg-slate-700 text-white dark:text-slate-500'
  }
  if (company === 'Nixa') {
    return 'bg-red-500 dark:bg-slate-700 text-white dark:text-slate-500'
  }
  return 'bg-red-600 dark:bg-slate-700 text-white dark:text-slate-500'
}
</script>
<template>
  <div>
    <Card title="Experience">
      <CardItem class="mb-2" v-for="company in store.companies" :key="company.name">
        <div class="flex flex-wrap">
          <div class="hidden md:w-1/12 md:block">
            <div class="w-12 rounded-full m-auto" :class="companyColor(company.icon)">
              <p class="text-center text-2xl font-semibold p-2">
                {{ firstLetterCompanyName(company.name) }}
              </p>
            </div>
          </div>
          <div class="w-12/12 md:w-11/12 pl-3">
            <div class="flex justify-between">
              <h2 class="font-bold dark:text-slate-300">{{ company.title }}</h2>
              <Badge :text="company.type" />
            </div>
            <div class="flex items-center gap-x-4 flex-wrap">
              <div class="flex">
                <Company :width="15" :height="15" class="mt-1 mr-1 fill-slate-600" />
                <p>{{ company.name }}</p>
              </div>
              <div class="flex">
                <Place :width="15" :height="15" class="mt-1 mr-1 fill-slate-600" />
                <p>{{ company.place }}</p>
              </div>
              <div class="flex">
                <Period :width="15" :height="15" class="mt-1 mr-1 fill-slate-600" />
                <p>{{ company.period }}</p>
              </div>
            </div>
            <div class="my-2">
              {{ company.tasks }}
            </div>
            <div class="flex flex-wrap pt-2">
              <Badge
                class="mr-1 mb-1"
                v-for="technology in company.techStack"
                :key="technology"
                :text="technology"
              />
            </div>
          </div>
        </div>
      </CardItem>
    </Card>
  </div>
</template>
