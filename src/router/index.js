import { createRouter, createWebHistory } from 'vue-router'
import Projects from '../views/Projects.vue'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Resume',
        description: 'This is the resume of Alexandru Constantin'
      }
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
      meta: {
        title: 'Projects',
        description: 'A list of projects that Alexandru Constantin has worked on'
      }
    }
  ]
})

router.beforeEach((to) => {
  document.title = to.meta?.title ?? 'Resume Alexandru Constantin'
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute('content', to.meta?.description ?? 'Resume Alexandru Constantin')
  document
    .querySelector('meta[name="keywords"]')
    ?.setAttribute(
      'content',
      to.meta?.keywords ?? 'Resume, Alexandru Constantin, Front End, Vue, Developer'
    )
})

export default router
