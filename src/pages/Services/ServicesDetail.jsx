import { AdminLayout } from '../../layouts';
import { Card } from '../../components';
import { ServiceDetailClientInfo } from '../../views';
export const ServicesDetail = () => {
  return (
    <AdminLayout>
      <header className="flex flex-col md:flex-row">
        <div className="w-full">
          <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">ID # 1231565</h1>
        </div>
        <div className="flex gap-3 w-full justify-end">
          <button
            type="button"
            className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500"
          >
            Imprimir
          </button>
          <button
            type="button"
            className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
          >
            Borrar
          </button>
        </div>
      </header>
      <div className="py-3 flex flex-col grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-x-5">
        <ServiceDetailClientInfo></ServiceDetailClientInfo>
        <Card></Card>
      </div>
    </AdminLayout>
  );
};
