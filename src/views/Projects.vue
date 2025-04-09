<script setup>
import CardItem from '@/components/CardItem.vue'
import Card from '../components/Card.vue'
import Badge from '../components/Badge.vue'
import Period from '../components/icons/Period.vue'
import GitHub from '../components/icons/GitHub.vue'
import { useStore } from '../mainStore'
import BrowserChrome from '@/components/icons/BrowserChrome.vue'

const store = useStore()
</script>
<template>
  <Card title="Projects">
    <CardItem class="mb-2" v-for="project in store.projects" :key="project.name">
      <div class="flex justify-between">
        <h2 class="font-bold dark:text-slate-300">{{ project.name }}</h2>
        <Badge :text="project.status" />
      </div>
      <div class="flex items-center gap-x-4 flex-wrap">
        <div class="flex">
          <Period :width="15" :height="15" class="mt-1 mr-1 fill-slate-600" />
          <p>{{ project.date }}</p>
        </div>
        <div class="flex">
          <GitHub :width="15" :height="15" class="mt-1 mr-1 fill-slate-600" />
          <a :href="project.gitHubLink" target="_blank">The source code</a>
        </div>
        <div class="flex">
          <BrowserChrome :width="15" :height="15" class="mt-1 mr-1 fill-slate-600" />
          <a :href="project.projectLink" target="_blank">Link to project</a>
        </div>
      </div>
      <div class="my-2">
        {{ project.description }}
      </div>
      <div class="flex flex-wrap pt-2">
        <Badge
          class="mr-1 mb-1"
          v-for="technology in project.techStack"
          :key="technology"
          :text="technology"
        />
      </div>
    </CardItem>
  </Card>
</template>
