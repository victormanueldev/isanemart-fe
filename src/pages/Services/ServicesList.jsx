import { useDispatch, useSelector } from 'react-redux';
import { AdminLayout } from '../../layouts';
import { startFetchServices } from '../../state';
import { useEffect } from 'react';
import { Pagination, SimpleSkeleton, Table } from '../../components';

const headers = ['# orden', 'fecha prevista', 'cliente', 'sede', 'técnico', 'estado'];
const props = [
  'id',
  'expected_date',
  'customer.commercial_name',
  'headquarter.name',
  'users.0.full_name',
  'status',
];
const actions = [{ name: 'Ver', pathname: '/admin/planning/service/' }];

export const ServicesList = () => {
  const dispatch = useDispatch();
  const { isLoading, services } = useSelector((state) => state.services);
  useEffect(() => {
    dispatch(startFetchServices({}));
  }, []);

  return (
    <AdminLayout>
      <header>
        <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">
          Servicios
        </h1>
        <p className="mt-2 text-md text-gray-800 dark:text-gray-400">
          Visualiza todos los servicios de los clientes, usa los filtros para fácil navegación.
        </p>
      </header>
      <div className="flex flex-row py-2 justify-between mb-3">
        <div className="basis-5/6 lg:basis-1/3">
          <div className="relative">
            <input
              type="text"
              id="hs-inline-leading-pricing-select-label"
              name="inline-add-on"
              className="py-3 px-4 pl-9 pr-20 block w-full border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
              placeholder="Buscar servicios..."
            ></input>
            <div className="absolute inset-y-0 right-0 flex items-center text-gray-500 pr-px">
              <label htmlFor="hs-inline-leading-select-currency" className="sr-only">
                Currency
              </label>
              <select
                id="hs-inline-leading-select-currency"
                name="hs-inline-leading-select-currency"
                className="block w-full border-transparent rounded-md focus:ring-blue-600 focus:border-blue-600 dark:bg-gray-800"
              >
                <option># Orden</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {isLoading ? (
        <SimpleSkeleton />
      ) : (
        <div className="flex flex-col gap-y-3">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="border rounded-lg overflow-hidden dark:border-gray-700">
                <Table headers={headers} actions={actions} data={services} props={props}></Table>
              </div>
            </div>
          </div>
          <Pagination></Pagination>
        </div>
      )}
    </AdminLayout>
  );
};
