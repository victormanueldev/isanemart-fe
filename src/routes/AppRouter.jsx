import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { CalendarPage, LoginPage, ServicesList, NotFound } from '../pages';
import { startUserMe } from '../state';

const RequireAuth = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  let location = useLocation();
  if (!isAuthenticated) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }
  return children;
};

export const AppRouter = () => {
  const dispatch = useDispatch();
  const isTokenExist = localStorage.getItem('access_token') || null;
  useEffect(() => {
    if (isTokenExist) dispatch(startUserMe());
  }, []);
  return (
    <Routes>
      <Route path="/auth/login" element={<LoginPage />}></Route>
      <Route
        path="/admin/planning/calendar"
        element={
          <RequireAuth>
            <CalendarPage />
          </RequireAuth>
        }
      ></Route>
      <Route
        path="/admin/planning/services"
        element={
          <RequireAuth>
            <ServicesList />
          </RequireAuth>
        }
      ></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};
