import Vue from 'vue';
import VueRouter from 'vue-router';

import Wiki from '@/views/Wiki/Wiki';
import AddForm from '@/views/Wiki/addForm';
import Search from '@/views/Wiki/search';

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
    meta: {
      title: 'Wiki',
    },
    children: [
      {
        path: 'create',
        component: AddForm,
        meta: {
          title: 'CreatePair',
        },
      },
      {
        path: 'search',
        component: Search,
        meta: {
          title: 'Search',
        },
      },
    ],
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
