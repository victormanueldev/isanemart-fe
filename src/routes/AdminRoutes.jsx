import { Routes, Route, Navigate } from 'react-router-dom';
import { DashboardPage, CalendarPage, ServicesList, ServicesDetail } from '../pages';

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<ServicesDetail></ServicesDetail>}></Route>
      <Route path="/*" element={<Navigate to={'/admin/dashboard'}></Navigate>}></Route>
    </Routes>
  );
};
