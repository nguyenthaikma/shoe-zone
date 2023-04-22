import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import routerConfig from "./routeConfig";
import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "@src/components/layout";
import Login from "@src/pages/login";
import Home from "@src/pages/home";

function RouteApp() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <Routes>
      <>
        {routerConfig.map(({ path, Element }, index) => (
          <Route
            path={path}
            key={index}
            element={
              <ProtectedRoute>
                <MainLayout>
                  <Element />
                </MainLayout>
              </ProtectedRoute>
            }
          />
        ))}
      </>
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default RouteApp;
