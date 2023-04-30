import { Routes, Route, Navigate } from 'react-router-dom';
import { DashboardPage, CalendarPage } from '../pages';

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<CalendarPage></CalendarPage>}></Route>
      <Route path="/*" element={<Navigate to={'/admin/dashboard'}></Navigate>}></Route>
    </Routes>
  );
};
