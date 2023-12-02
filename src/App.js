import '@src/styles/style.scss';
import { ConfigProvider, Drawer } from 'antd';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import DrawerCart from './components/elements/DrawerCart';
import { onClose } from './redux/actions/drawerReducer';
import RouteApp from './route';
import ModalAddSizes from './components/elements/ModalAddSize';
import ScrollToTop from './components/widgets/ScrollTop';

export const queryClient = new QueryClient();

function App() {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(onClose());
  };

  const open = useSelector((state) => state.drawerReducer.open);

  return (
    <ConfigProvider
      theme={{
        Authorization: {
          colorPrimary: '#571f7c',
          colorLink: '#571f7c',
          colorLinkHover: '#571f7c',
          borderRadius: 0,
          controlHeight: 48,
        },
      }}
    >
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Drawer title='Your cart' placement='right' width={300} onClose={handleClose} open={open}>
            <DrawerCart />
          </Drawer>
          <ModalAddSizes />
          <ScrollToTop>
            <RouteApp />
          </ScrollToTop>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      </QueryClientProvider>
    </ConfigProvider>
  );
}

export default App;
