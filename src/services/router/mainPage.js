import Wiki from '@/views/Wiki/Wiki';
import wikiRoutes from '@/services/router/wiki';

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
];
