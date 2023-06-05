import Product from '@src/cms/pages/product';
import CreateProduct from '@src/cms/pages/product/create';
import DetailProductAdmin from '@src/cms/pages/product/detail';
import lazyLoading from '@src/libs/lazyLoading';

const Home = lazyLoading(() => import('@src/pages/home'));
const About = lazyLoading(() => import('@src/pages/about'));
const Collections = lazyLoading(() => import('@src/pages/collections'));
const ListProduct = lazyLoading(() => import('@src/pages/list-product'));
const DetailProduct = lazyLoading(() => import('@src/pages/detail-product'));
const Information = lazyLoading(() => import('@src/pages/checkout/information'));
const PaymentLayout = lazyLoading(() => import('@src/components/layout/PaymentLayout'));
const Cart = lazyLoading(() => import('@src/pages/cart'));
const Payment = lazyLoading(() => import('@src/pages/checkout/payment'));
const Shipping = lazyLoading(() => import('@src/pages/checkout/shipping'));

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
    Layout: PaymentLayout,
    _breadcrumbs: [{ title: 'Infomation' }],
  },
  {
    path: '/checkouts/shipping',
    Element: Shipping,
    Layout: PaymentLayout,
    _breadcrumbs: [{ title: 'Infomation' }, { title: 'Shipping' }],
  },
  {
    path: '/checkouts/payment',
    Element: Payment,
    Layout: PaymentLayout,
    _breadcrumbs: [{ title: 'Infomation' }, { title: 'Shipping' }, { title: 'Payment' }],
  },
  {
    path: '/cart',
    Element: Cart,
  },
];

export const adminRouter = [
  { path: '/', Element: Dashboard, Layout: LayoutApp },
  { path: '/product', Element: Product, Layout: LayoutApp },
  { path: '/create-product', Element: CreateProduct, Layout: LayoutApp },
  { path: '/product/:id', Element: DetailProductAdmin, Layout: LayoutApp },
];
