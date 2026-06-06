import React from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routesConfig";
import PrivateRoute from "./PivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = ({isAuthenticated = true}) => {
  return (
    <Routes>
      {routes.map((route, index) => {
        const Component = route.component;
        return (
          <Route
            key={route.path}
            path={route.path}
            element={
              route.isPrivate ? (
                <PrivateRoute isAuthenticated={false}>
                  <Component />
                </PrivateRoute>
              ) : (
                <PublicRoute isAuthenticated={false}>
                  <Component />
                </PublicRoute>
              )
            }
          />
        );
      })}
    </Routes>
  );
};


export default AppRouter