import Wiki from '@/views/Wiki/Wiki';
import wikiRoutes from '@/services/router/wiki';

import Admin from '@/views/Admin/Admin';
import adminRoutes from '@/services/router/admin';

export default [
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
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    redirect: {
      name: 'Requests',
    },
    children: adminRoutes,
  },
];
