import Order from '@src/cms/pages/order';
import DetailOrder from '@src/cms/pages/order/detail';
import Product from '@src/cms/pages/product';
import CreateProduct from '@src/cms/pages/product/create';
import DetailProductAdmin from '@src/cms/pages/product/detail';
import ListUser from '@src/cms/pages/user';
import lazyLoading from '@src/libs/lazyLoading';
import Credit from '@src/pages/checkout/credit';
import SearchProduct from '@src/pages/search';

const Home = lazyLoading(() => import('@src/pages/home'));
const About = lazyLoading(() => import('@src/pages/about'));
const Collections = lazyLoading(() => import('@src/pages/collections'));
const ListProduct = lazyLoading(() => import('@src/pages/list-product'));
const DetailProduct = lazyLoading(() => import('@src/pages/detail-product'));
const Information = lazyLoading(() => import('@src/pages/checkout/information'));
const Cart = lazyLoading(() => import('@src/pages/cart'));
const Payment = lazyLoading(() => import('@src/pages/checkout/payment'));

const Dashboard = lazyLoading(() => import('@src/cms/pages/dashboard'));
const LayoutApp = lazyLoading(() => import('@src/cms/layout'));

export const userRouter = [
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
    path: '/checkouts/information',
    Element: Information,
  },
  {
    path: '/checkouts/credit',
    Element: Credit,
    // Layout: PaymentLayout,
    _breadcrumbs: [{ title: 'Infomation' }, { title: 'Credit' }],
  },
  {
    path: '/checkouts/payment',
    Element: Payment,
  },
  {
    path: '/cart',
    Element: Cart,
  },
  {
    path: '/search',
    Element: SearchProduct,
  },
];

export const adminRouter = [
  { path: '/', Element: Dashboard, Layout: LayoutApp },
  { path: '/product', Element: Product, Layout: LayoutApp },
  { path: '/create-product', Element: CreateProduct, Layout: LayoutApp },
  { path: '/product/:id', Element: DetailProductAdmin, Layout: LayoutApp },
  { path: '/user', Element: ListUser, Layout: LayoutApp },
  { path: '/order', Element: Order, Layout: LayoutApp },
  { path: '/order/:id', Element: DetailOrder, Layout: LayoutApp },
];
