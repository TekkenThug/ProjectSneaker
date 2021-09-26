import Vue from 'vue';
import VueRouter from 'vue-router';

import Main from '@/views/Main';
import mainPageRoutes from './mainPage';

import Auth from '@/views/Auth/Auth';
import authRoutes from './auth';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Main,
    name: 'MainPage',
    redirect: {
      name: 'Wiki',
    },
    children: mainPageRoutes,
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    meta: {
      title: 'Auth',
    },
    redirect: {
      name: 'SignIn',
    },
    children: authRoutes,
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
