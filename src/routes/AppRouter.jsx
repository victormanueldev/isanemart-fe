import { Routes, Route, Navigate } from 'react-router-dom';
import { AdminRoutes, AuthRoutes } from './';

/**
 * Handle private/authenticated routes
 * @param {Boolean} isAuthenticated
 * @param {node} children
 */
const PrivateRoute = ({ isAuthenticated, children, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) =>
      isAuthenticated ? (
        children
      ) : (
        <Navigate
          to={{
            pathname: '/login',
            state: { from: location },
          }}
        />
      )
    }
  />
);

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes></AuthRoutes>}></Route>
      <Route path="/admin/*" element={<AdminRoutes></AdminRoutes>}></Route>
      <Route path="/*" element={<Navigate to="/auth/login"></Navigate>}></Route>
    </Routes>
  );
};
