import AddForm from '@/views/Wiki/Create';
import Search from '@/views/Wiki/Search';

export default [
  {
    path: 'create',
    component: AddForm,
    name: 'wikiCreate',
    meta: {
      title: 'CreatePair',
    },
  },
  {
    path: 'search',
    component: Search,
    name: 'wikiSearch',
    meta: {
      title: 'Search',
    },
  },
];
