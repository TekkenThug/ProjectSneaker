import SignIn from '@/views/Auth/subviews/SignIn';
import SignUp from '@/views/Auth/subviews/SignUp';

export default [
  {
    path: 'sign-in',
    component: SignIn,
    name: 'SignIn',
    meta: {
      title: 'SignIn',
    },
  },
  {
    path: 'sign-up',
    component: SignUp,
    name: 'SignUp',
    meta: {
      title: 'SignUp',
    },
  },
];
