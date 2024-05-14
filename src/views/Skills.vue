<script setup>
import { useStore } from '../mainStore'
import Card from '../components/Card.vue'
import CardItem from '../components/CardItem.vue'

const store = useStore()
</script>
<template>
  <Card title="Skills">
    <slot>
      <div v-for="(skill, key) in store.skills" :key="key">
        <CardItem class="mb-2">
          <div class="divide-y divide-slate-300">
            <div class="pb-2">
              <p>{{ key }}</p>
            </div>
            <div v-for="(item, key) in skill" :key="key" class="py-2 flex justify-between">
              <p class="pl-4">{{ key }}</p>
              <p>{{ item.experience }}</p>
            </div>
          </div>
        </CardItem>
      </div>
    </slot>
  </Card>
</template>
