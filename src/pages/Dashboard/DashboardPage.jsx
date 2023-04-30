import { AdminLayout } from '../../layouts';

export const DashboardPage = () => {
  return (
    <AdminLayout>
      <header>
        <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">
          Dashobard
        </h1>
        <p className="mt-2 text-md text-gray-800 dark:text-gray-400">
          This is a simple application layout with sidebar and header examples using Tailwind CSS.
        </p>
      </header>
    </AdminLayout>
  );
};
