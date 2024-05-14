import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: '',
      meta: {
        title: 'Home',
        description: 'This is the home page'
      }
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: 'About',
        description: 'This is the about page'
      }
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach((to) => {
  ;(document.title = to.meta?.title ?? 'Resume Alexandru Constantin'),
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('description', to.meta?.description ?? 'Resume Alexandru Constantin'),
    document
      .querySelector('meta[name="keywords"]')
      ?.setAttribute(
        'keywords',
        to.meta?.description ?? 'Resume, Alexandru Constantin, Front End, Vue, Developer'
      )
})

export default router
