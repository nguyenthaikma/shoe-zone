import lazyLoading from '@src/libs/lazyLoading';

const Home = lazyLoading(() => import('@src/pages/home'));
const About = lazyLoading(() => import('@src/pages/about'));
const Collections = lazyLoading(() => import('@src/pages/collections'));
const ListProduct = lazyLoading(() => import('@src/pages/list-product'));
const DetailProduct = lazyLoading(() => import('@src/pages/detail-product'));

const routerConfig = [
  {
    path: '/',
    Element: Home,
  },
  {
    path: '/about',
    Element: About,
  },
  {
    path: '/collections',
    Element: Collections,
  },
  {
    path: '/collections/:id',
    Element: ListProduct,
  },
  {
    path: '/collections/:id/product/:idProduct',
    Element: DetailProduct,
  },
];

export default routerConfig;
