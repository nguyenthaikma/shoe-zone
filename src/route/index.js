import Notfound from '@components/screens/404';
import MainLayout from '@src/components/layout';
import lazyLoading from '@src/libs/lazyLoading';
import { checkRole } from '@src/libs/localStorage';
import { Route, Routes, useLocation } from 'react-router-dom';
import { adminRouter, userRouter } from './routeConfig';
import { useEffect, useState } from 'react';

const Login = lazyLoading(() => import('@src/pages/login'));
const Register = lazyLoading(() => import('@src/pages/register'));

function RouteApp() {
  const location = useLocation();
  const [currentRole, setCurrentRole] = useState();
  useEffect(() => {
    const role = checkRole();
    setCurrentRole(role);
  }, [location]);

  return (
    <Routes>
      <Route path='*' element={<Notfound />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      {currentRole === 'admin'
        ? adminRouter?.map(({ path, Element, Layout, _breadcrumbs }, index) => (
            <Route
              path={path}
              key={index}
              element={
                Layout ? (
                  <Layout key={index} _breadcrumbs={_breadcrumbs}>
                    <Element />
                  </Layout>
                ) : (
                  <MainLayout key={index}>
                    <Element />
                  </MainLayout>
                )
              }
            />
          ))
        : userRouter?.map(({ path, Element, Layout, _breadcrumbs }, index) => (
            <Route
              path={path}
              key={index}
              element={
                Layout ? (
                  <Layout key={index} _breadcrumbs={_breadcrumbs}>
                    <Element />
                  </Layout>
                ) : (
                  <MainLayout key={index}>
                    <Element />
                  </MainLayout>
                )
              }
            />
          ))}
    </Routes>
  );
}

export default RouteApp;
