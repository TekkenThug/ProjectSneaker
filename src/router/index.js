import Vue from 'vue'
import VueRouter from 'vue-router'

import Wiki from "@/views/Wiki";

Vue.use(VueRouter)

const routes = [
  {
    path: '/wiki',
    name: 'Wiki',
    component: Wiki
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
