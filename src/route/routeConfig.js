import PaymentLayout from '@src/components/layout/PaymentLayout';
import lazyLoading from '@src/libs/lazyLoading';
import Payment from '@src/pages/checkout/payment';
import Shipping from '@src/pages/checkout/shipping';

const Home = lazyLoading(() => import('@src/pages/home'));
const About = lazyLoading(() => import('@src/pages/about'));
const Collections = lazyLoading(() => import('@src/pages/collections'));
const ListProduct = lazyLoading(() => import('@src/pages/list-product'));
const DetailProduct = lazyLoading(() => import('@src/pages/detail-product'));
const Information = lazyLoading(() => import('@src/pages/checkout/information'));

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
    path: '/product/:idProduct',
    Element: DetailProduct,
  },
  {
    path: '/checkouts/information/:idProduct',
    Element: Information,
    Layout: PaymentLayout,
    _breadcrumbs: [{ title: 'Infomation' }],
  },
  {
    path: '/checkouts/shipping/:idProduct',
    Element: Shipping,
    Layout: PaymentLayout,
    _breadcrumbs: [{ title: 'Infomation' }, { title: 'Shipping' }],
  },
  {
    path: '/checkouts/payment/:idProduct',
    Element: Payment,
    Layout: PaymentLayout,
    _breadcrumbs: [{ title: 'Infomation' }, { title: 'Shipping' }, { title: 'Payment' }],
  },
];

export default routerConfig;
