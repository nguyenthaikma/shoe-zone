import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { HashRouter } from 'react-router-dom';
import RouteApp from './route';
import '@src/styles/style.scss';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <RouteApp />
      </HashRouter>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;
