import { Header, Sidebar } from '../../components';
export const AdminLayout = ({ children }) => {
  return (
    <div className="bg-gray-0 dark:bg-slate-900">
      <Header></Header>
      <Sidebar></Sidebar>
      <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">{children}</div>
    </div>
  );
};
