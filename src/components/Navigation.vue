<script setup>
import { ref } from 'vue'
import Card from '../components/Card.vue'
import Button from '../components/Button.vue'
import ThemeMode from '../components/ThemeMode.vue'

const emit = defineEmits(['sectionActive'])
const active = ref('Resume')

const isActive = (value) => {
  return active.value === value
}

const changeActive = (value) => {
  active.value = value
  emit('sectionActive', value)
}
</script>
<template>
  <header>
    <nav>
      <Card>
        <div class="flex justify-between items-center gap-3">
          <Button long="true" :active="isActive('Resume')" @clicked="changeActive('Resume')"
            >Resume</Button
          >
          <Button long="true" :active="isActive('Projects')" @clicked="changeActive('Projects')"
            >Projects</Button
          >
          <div class="flex">
            <div class="border-l border-slate-200 pr-3"></div>
            <ThemeMode />
          </div>
        </div>
      </Card>
    </nav>
  </header>
</template>
