import { Routes, Route, Navigate } from 'react-router-dom';
import { DashboardPage, CalendarPage, ServicesList, ServicesDetail } from '../pages';

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/planning/calendar" element={<CalendarPage></CalendarPage>}></Route>
      <Route path="/planning/services" element={<ServicesList></ServicesList>}></Route>
      <Route path="/*" element={<Navigate to={'/admin/planning/services'}></Navigate>}></Route>
    </Routes>
  );
};
