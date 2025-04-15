<script setup>
import CardItem from '@/components/CardItem.vue'
import Card from '../components/Card.vue'
import Badge from '../components/Badge.vue'
import Place from '../components/icons/Place.vue'
import Period from '../components/icons/Period.vue'
import Company from '../components/icons/Company.vue'
import { useStore } from '../mainStore'

const store = useStore()
</script>

<template>
  <div>
    <Card title="Experience">
      <CardItem class="mb-2" v-for="company in store.companies" :key="company.name">
        <div class="flex flex-wrap">
          <div class="hidden md:w-1/12 md:block">
            <img
              :src="store.getFavicon(company.webAddress)"
              :alt="company.name"
              class="m-auto w-6"
            />
          </div>
          <div class="w-12/12 md:w-11/12 pl-3">
            <div class="flex justify-between">
              <h2 class="font-bold dark:text-slate-300">{{ company.title }}</h2>
              <Badge :text="company.type" />
            </div>
            <div class="flex items-center gap-x-4 flex-wrap">
              <div class="flex">
                <Company :width="15" :height="15" class="mt-1 mr-1 fill-slate-600" />
                <a :href="company.webAddress" target="_blank">{{ company.name }}</a>
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
            <div class="my-4">
              <p class="mb-2" v-for="(task, index) in company.tasks" :key="index">
                {{ task }}
              </p>
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
