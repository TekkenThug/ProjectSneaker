import Vue from 'vue';
import VueRouter from 'vue-router';
import storeState from '@/services/storeState';

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
      auth: false,
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

router.beforeEach(async (to, from, next) => {
  if (process.env.NODE_ENV === 'development') {
    next();
    return;
  }

  const authFieldIsExist = to.matched.some((record) => record.meta.auth !== undefined);

  if (authFieldIsExist) {
    const authRequired = to.matched.some((record) => record.meta.auth);
    const authState = await storeState.getAuthStatus();

    if (authRequired) {
      if (authState) next();
      else next({ name: 'SignIn' });
    } else if (!authState) next();
    else next({ path: from.path });
  } else {
    next();
  }
});

export default router;
