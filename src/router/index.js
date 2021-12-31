import { createRouter, createWebHistory } from 'vue-router'
import Runners from '../views/Runners.vue'
import Runner from '../views/Runner.vue'
import Races from '../views/Races.vue'
import Race from '../views/Race.vue'
import Seasons from '../views/Seasons.vue'

const routes = [
 
  {
    path: '/',
    name: 'Main',
    component: Runners
  },
  {
    path: '/runners',
    name: 'Runners',
    component: Runners
  },
  {
    path: '/runner/:id',
    name: 'Runner',
    component: Runner,
    props: true
  },
  {
    path: '/races',
    name: 'Races',
    component: Races,
    props: true
  },
  {
    path: '/race/:id',
    name: 'Race',
    component: Race,
    props: true
  },
  {
    path: '/seasons',
    name: 'Seasons',
    component: Seasons
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
