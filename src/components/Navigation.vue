<script setup>
import { useRoute } from 'vue-router'
import Card from './Card.vue'
import Button from './Button.vue'
import ThemeMode from './ThemeMode.vue'

const route = useRoute()
</script>

<template>
  <header>
    <nav>
      <Card>
        <div class="flex justify-between items-center gap-3">
          <router-link to="/" custom v-slot="{ navigate, isActive }">
            <Button long="true" :active="isActive" @click="navigate">Resume</Button>
          </router-link>
          <router-link to="/projects" custom v-slot="{ navigate, isActive }">
            <Button long="true" :active="isActive" @click="navigate">Projects</Button>
          </router-link>
          <div class="flex">
            <div class="border-l border-slate-200 pr-3"></div>
            <ThemeMode />
          </div>
        </div>
      </Card>
    </nav>
  </header>
</template>
