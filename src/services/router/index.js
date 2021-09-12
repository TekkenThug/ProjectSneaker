import Vue from 'vue';
import VueRouter from 'vue-router';

import Wiki from '@/views/Wiki/Wiki';
import wikiRoutes from './wiki';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: {
      name: 'Wiki',
    },
  },
  {
    path: '/wiki',
    name: 'Wiki',
    component: Wiki,
    redirect: {
      name: 'wikiSearch',
    },
    meta: {
      title: 'Wiki',
    },
    children: wikiRoutes,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

const generateTitle = (title) => `ProjectSneaker_${title}`;

router.beforeEach((to, from, next) => {
  document.title = generateTitle(to.meta.title);
  next();
});

export default router;
