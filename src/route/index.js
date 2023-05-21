import Notfound from '@components/screens/404';
import MainLayout from '@src/components/layout';
import { checkAuth } from '@src/libs/localStorage';
import Login from '@src/pages/login';
import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import routerConfig from './routeConfig';

function RouteApp() {
  const token = checkAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate('/login');
  }, [navigate, token]);

  return (
    <Routes>
      <Route path='*' element={<Notfound />} />
      {!!token ? (
        routerConfig.map(({ path, Element, Layout, _breadcrumbs }, index) => (
          <Route
            path={path}
            key={index}
            element={
              Layout ? (
                <Layout _breadcrumbs={_breadcrumbs}>
                  <Element />
                </Layout>
              ) : (
                <MainLayout>
                  <Element />
                </MainLayout>
              )
            }
          />
        ))
      ) : (
        <>
          <Route path='/login' element={<Login />} />
        </>
      )}
    </Routes>
  );
}

export default RouteApp;
