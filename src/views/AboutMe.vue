<script setup>
import Card from '../components/Card.vue'
import CardItem from '../components/CardItem.vue'
</script>
<template>
  <div title="About me">
    <slot>
      <Card title="About me">
        <CardItem class="divide-y divide-slate-300">
          <div class="text pb-4">
            Front-End Developer with three years of experience, dedicated to creating user-friendly
            interfaces and functional web applications. Skilled in Angular, React, and Vue
            frameworks, I enjoy designing UIs that prioritize simplicity and usability.
            Additionally, I'm comfortable handling backend tasks when needed. By staying informed
            about industry trends and TDD mindset, I aim to continuously improve and deliver quality
            results.
          </div>
          <div class="py-2">
            <a href="https://alexandruconstantin.ca">alexandruconstantin.ca</a>
          </div>
          <div class="pt-2">
            <a href="mailto:alexandruconstantin@gmail.com">alexandru.constantin@gmail.com</a>
          </div>
          <div class="pt-2">
            <p class="text">Montreal, Canada</p>
          </div>
        </CardItem>
      </Card>
    </slot>
  </div>
</template>
