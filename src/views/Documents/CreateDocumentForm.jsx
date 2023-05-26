import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { XMarkIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { handleToggleModal, startCreatingDocument, startFetchingCustomers } from '../../state';
import { LoaderButton } from '../../components';
import { format } from 'date-fns-tz';
import { useEffect } from 'react';
import { substractHours } from '../../utils';

export const CreateDocumentForm = () => {
  const [status, setStatus] = useState(false);
  const { customers } = useSelector((state) => state.customers);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    dispatch(startFetchingCustomers({}));
  }, []);

  const onCloseModal = () => {
    dispatch(handleToggleModal());
  };

  const onFormSubmit = (data) => {
    const docData = {
      ...data,
      status: 'Vigente',
      upload_datetime: substractHours(new Date().toISOString(), 5),
    };
    setStatus(!status);
    dispatch(startCreatingDocument(docData));
    dispatch(handleToggleModal());
  };

  return (
    <div className="flex flex-col bg-white shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] max-w-2xl w-[42rem]">
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
          <h3 className="font-bold text-gray-800 dark:text-white">Información del Servicio</h3>
          <button
            type="button"
            className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
            onClick={onCloseModal}
          >
            <span className="sr-only">Close</span>
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="p-4 overflow-y-auto">
          <div className="grid grid-cols-2 gap-3">
            {/* Cliente */}
            <div className="col-span-1">
              <label
                htmlFor="hs-validation-customer-error"
                className="block text-sm font-medium mb-2 dark:text-white"
              >
                Cliente
              </label>
              <div className="relative">
                <select
                  id="hs-validation-customer-error"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                  {...register('customer_id', {
                    required: true,
                  })}
                  placeholder="Selecciona un cliente"
                >
                  {customers?.map((customer, index) => (
                    <option key={index} value={customer.id}>
                      {customer.commercial_name}
                    </option>
                  ))}
                </select>
                <div
                  className={`${
                    !errors.customer && 'hidden'
                  } absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3`}
                >
                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                </div>
              </div>
              {!!errors.customer && (
                <p className="text-xs text-red-600 mt-2" id="customer-error">
                  Este campo es requerido
                </p>
              )}
            </div>
            {/* Nombre */}
            <div className="col-span-1">
              <label
                htmlFor="hs-validation-name-error"
                className="block text-sm font-medium mb-2 dark:text-white"
              >
                Nombre
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="hs-validation-name-error"
                  name="hs-validation-name-error"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                  {...register('name')}
                  aria-describedby="hs-validation-name-error-helper"
                ></input>
                <div
                  className={`${
                    !errors.name && 'hidden'
                  } absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3`}
                >
                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                </div>
              </div>
              {!!errors.name && (
                <p className="text-xs text-red-600 mt-2" id="name-error">
                  Este campo es requerido
                </p>
              )}
            </div>
            {/* URL */}
            <div className="col-span-1">
              <label
                htmlFor="hs-validation-name-error"
                className="block text-sm font-medium mb-2 dark:text-white"
              >
                URL
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="hs-validation-url-error"
                  name="hs-validation-url-error"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                  {...register('url')}
                  aria-describedby="hs-validation-url-error-helper"
                ></input>
                <div
                  className={`${
                    !errors.url && 'hidden'
                  } absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3`}
                >
                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                </div>
              </div>
              {!!errors.url && (
                <p className="text-xs text-red-600 mt-2" id="url-error">
                  Este campo es requerido
                </p>
              )}
            </div>
            {/* Tipo DoC */}
            <div className="col-span-1">
              <label
                htmlFor="hs-validation-user-error"
                className="block text-sm font-medium mb-2 dark:text-white"
              >
                Tipo de documento
              </label>
              <div className="relative">
                <select
                  id="hs-validation-document-type-error"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                  {...register('document_type', { required: true })}
                  placeholder="Selecciona un tipo"
                >
                  <option value="Certificado">Certificado</option>
                  <option value="Informe">Informe</option>
                </select>
                <div
                  className={`${
                    !errors.document_type && 'hidden'
                  } absolute inset-yPersona Natural-0 right-0 flex items-center pointer-events-none pr-8`}
                >
                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                </div>
              </div>
              {!!errors.document_type && (
                <p className="text-xs text-red-600 mt-2" id="document-type-error">
                  Este campo es requerido
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
          <button
            type="button"
            className="hs-dropdown-toggle py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-400 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
            onClick={onCloseModal}
          >
            Close
          </button>
          <button
            type="submit"
            className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            disabled={status}
          >
            {status ? <LoaderButton /> : <>Guardar</>}
          </button>
        </div>
      </form>
    </div>
  );
};
