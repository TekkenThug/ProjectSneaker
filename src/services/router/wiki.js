import AddForm from '@/views/Wiki/addForm';
import Search from '@/views/Wiki/search';

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
