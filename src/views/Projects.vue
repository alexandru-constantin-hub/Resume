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
        <div class="flex" v-if="project.gitHubLink">
          <GitHub :width="15" :height="15" class="mt-1 mr-1 fill-slate-600" />
          <a :href="project.gitHubLink" target="_blank">The source code</a>
        </div>
        <div class="flex" v-if="project.projectLink">
          <BrowserChrome :width="15" :height="15" class="mt-1 mr-1 fill-slate-600" />
          <a :href="project.projectLink" target="_blank">Link to the project</a>
        </div>
      </div>
      <div v-if="!Array.isArray(project.description)" class="my-2">
        {{ project.description }}
      </div>
      <div v-else>
        <div class="project-content max-w-3xl mx-auto px-4 py-8 text-gray-800">
          <div v-for="(section, index) in project.description" :key="index" class="mb-8">
            <h2 class="font-bold dark:text-slate-300 mb-2">{{ section.title }}</h2>
            <p v-if="section.body" class="text-base leading-relaxed mb-4">{{ section.body }}</p>
            <ul v-if="section.list" class="list-disc list-inside space-y-2">
              <template v-for="(item, idx) in section.list">
                <li v-if="Array.isArray(item)" :key="'sub' + idx" class="ml-4 list-none">
                  <ul class="list-disc list-inside pl-4 space-y-1">
                    <li v-for="(sub, subIdx) in item" :key="subIdx">{{ sub }}</li>
                  </ul>
                </li>
                <li v-else :key="idx">{{ item }}</li>
              </template>
            </ul>
          </div>
        </div>
        <div class="tech-stack max-w-3xl mx-auto px-4 text-gray-800">
          <h2 class="font-bold dark:text-slate-300 mb-6">Technical Overview</h2>
          <div v-for="(item, index) in project.techStackDescription" :key="index" class="mb-6">
            <h3 class="font-bold dark:text-slate-300 mb-2">{{ item.section }}</h3>
            <p class="text-base leading-relaxed">{{ item.description }}</p>
          </div>
        </div>
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
