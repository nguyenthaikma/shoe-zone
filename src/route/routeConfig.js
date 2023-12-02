import Category from '@src/cms/pages/category';
import CreateCategory from '@src/cms/pages/category/create';
import DetailCategoryAdmin from '@src/cms/pages/category/detail';
import lazyLoading from '@src/libs/lazyLoading';
import VnpReturnScreen from '@src/pages/vnpay';

const DetailOrder = lazyLoading(() => import('@src/cms/pages/order/detail'));
const Product = lazyLoading(() => import('@src/cms/pages/product'));
const CreateProduct = lazyLoading(() => import('@src/cms/pages/product/create'));
const DetailProductAdmin = lazyLoading(() => import('@src/cms/pages/product/detail'));
const ListUser = lazyLoading(() => import('@src/cms/pages/user'));
const OrderAdmin = lazyLoading(() => import('@src/cms/pages/order'));

const Credit = lazyLoading(() => import('@src/pages/checkout/credit'));
const SearchProduct = lazyLoading(() => import('@src/pages/search'));
const Home = lazyLoading(() => import('@src/pages/home'));
const About = lazyLoading(() => import('@src/pages/about'));
const Collections = lazyLoading(() => import('@src/pages/collections'));
const ListProduct = lazyLoading(() => import('@src/pages/list-product'));
const DetailProduct = lazyLoading(() => import('@src/pages/detail-product'));
const Information = lazyLoading(() => import('@src/pages/checkout/information'));
const Cart = lazyLoading(() => import('@src/pages/cart'));
const Payment = lazyLoading(() => import('@src/pages/checkout/payment'));
const Order = lazyLoading(() => import('@src/pages/order'));

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
  {
    path: '/orders',
    Element: Order,
  },
  {
    path: '/VnPayReturn',
    Element: VnpReturnScreen,
  },
];

export const adminRouter = [
  { path: '/', Element: Dashboard, Layout: LayoutApp },
  { path: '/product', Element: Product, Layout: LayoutApp },
  { path: '/create-product', Element: CreateProduct, Layout: LayoutApp },
  { path: '/product/:id', Element: DetailProductAdmin, Layout: LayoutApp },
  { path: '/user', Element: ListUser, Layout: LayoutApp },
  { path: '/order', Element: OrderAdmin, Layout: LayoutApp },
  { path: '/order/:id', Element: DetailOrder, Layout: LayoutApp },
  { path: '/category', Element: Category, Layout: LayoutApp },
  { path: '/create-category', Element: CreateCategory, Layout: LayoutApp },
  { path: '/category/:id', Element: DetailCategoryAdmin, Layout: LayoutApp },
];
