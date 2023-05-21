import '@src/styles/style.scss';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';
import RouteApp from './route';
import { ConfigProvider } from 'antd';

function App() {
  const queryClient = new QueryClient();
  return (
    <ConfigProvider
      theme={{
        token: {
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
          <RouteApp />
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      </QueryClientProvider>
    </ConfigProvider>
  );
}

export default App;
