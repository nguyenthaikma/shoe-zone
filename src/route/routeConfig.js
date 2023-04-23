import lazyLoading from '@src/libs/lazyLoading';

const Home = lazyLoading(() => import('../pages/home'));
const About = lazyLoading(() => import('../pages/about'));

const routerConfig = [
  {
    path: '/',
    Element: Home,
  },
  {
    path: '/about',
    Element: About,
  },
];

export default routerConfig;
