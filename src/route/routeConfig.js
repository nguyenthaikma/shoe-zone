import lazyLoading from '@src/libs/lazyLoading';

const Home = lazyLoading(() => import('@src/pages/about'));
const About = lazyLoading(() => import('@src/pages/home'));

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
