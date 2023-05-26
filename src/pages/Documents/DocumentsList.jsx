import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination, SimpleSkeleton, Table, BaseModal } from '../../components';
import { AdminLayout } from '../../layouts';
import { handleToggleModal, startFetchingDocuments } from '../../state';
import { CreateDocumentForm } from '../../views';

const headers = ['nombre', 'tipo', 'fecha de creación', 'Estado', 'cliente'];
const props = ['name', 'document_type', 'upload_datetime', 'status', 'customer.commercial_name'];
const actions = [{ name: 'Descargar', pathname: '' }];

export const DocumentsList = () => {
  const dispatch = useDispatch();
  const { isLoadingDocuments, documents } = useSelector((state) => state.documents);

  useEffect(() => {
    dispatch(startFetchingDocuments({}));
  }, []);

  const onCreateButton = () => {
    dispatch(handleToggleModal());
  };

  return (
    <AdminLayout>
      <header>
        <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">
          Documentos
        </h1>
        <p className="mt-2 text-md text-gray-800 dark:text-gray-400">
          Visualiza todos los documentos de los clientes, usa los filtros para fácil navegación.
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
              placeholder="Buscar documentos..."
            ></input>
            {/* <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
              <span className="text-gray-500">T</span>
            </div> */}
            <div className="absolute inset-y-0 right-0 flex items-center text-gray-500 pr-px">
              {/* <label htmlFor="hs-inline-leading-select-currency" className="sr-only">
                Currency
              </label> */}
              <select
                id="hs-inline-leading-select-currency"
                name="hs-inline-leading-select-currency"
                className="block w-full border-transparent rounded-md focus:ring-blue-600 focus:border-blue-600 dark:bg-gray-800"
              >
                <option>Tipo</option>
              </select>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
          onClick={onCreateButton}
        >
          Crear Documento
        </button>
      </div>
      {isLoadingDocuments ? (
        <SimpleSkeleton />
      ) : (
        <div className="flex flex-col gap-y-3">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="border rounded-lg overflow-hidden dark:border-gray-700">
                <Table headers={headers} actions={actions} data={documents} props={props}></Table>
              </div>
            </div>
          </div>
          <Pagination></Pagination>
        </div>
      )}
      <BaseModal>
        <CreateDocumentForm></CreateDocumentForm>
      </BaseModal>
    </AdminLayout>
  );
};
