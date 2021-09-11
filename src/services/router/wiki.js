import AddForm from '@/views/Wiki/subviews/Create';
import Search from '@/views/Wiki/subviews/Search';

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
