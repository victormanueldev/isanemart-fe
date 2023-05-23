import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import {
  CalendarPage,
  LoginPage,
  ServicesList,
  NotFound,
  CustomerList,
  CustomerCreate,
  HeadquartersList,
} from '../pages';
import { startUserMe } from '../state';

const RequireAuth = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  if (isAuthenticated) return children;
  // Redirect them to the /login page, but save the current location they were
  // trying to go to when they were redirected. This allows us to send them
  // along to that page after they login, which is a nicer user experience
  // than dropping them off on the home page.
  // return <Navigate to="/auth/login" state={{ from: location }} replace />;
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
      <Route
        path="/admin/crm/customers"
        element={
          <RequireAuth>
            <CustomerList />
          </RequireAuth>
        }
      ></Route>
      <Route
        path="/admin/crm/create"
        element={
          <RequireAuth>
            <CustomerCreate />
          </RequireAuth>
        }
      ></Route>
      <Route
        path="/admin/crm/headquarters"
        element={
          <RequireAuth>
            <HeadquartersList />
          </RequireAuth>
        }
      ></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};
