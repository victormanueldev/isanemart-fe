import { XMarkIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { LoaderButton } from '../../components';

import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleToggleModal } from '../../state';
import { Controller, useForm } from 'react-hook-form';

export const UnnassignedServiceForm = () => {
  const dispatch = useDispatch();
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onCloseModal = () => {
    dispatch(handleToggleModal());
  };
  const onDateChanged = (event, start) => {
    console.log(event, start);
  };
  const onFormSubmit = (data) => {
    console.log(data);
  };
  const [status, setStatus] = useState(false);
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
            <div className="col-span-1">
              <label
                htmlFor="hs-validation-type-customer-error"
                className="block text-sm font-medium mb-2 dark:text-white"
              >
                Cliente
              </label>
              <div className="relative">
                <select
                  id="hs-validation-type-customer-error"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                  {...register('customer', { required: true })}
                  defaultValue={'1'}
                >
                  <option value="1">Hotel AC</option>
                  <option value="2">Restaurante</option>
                </select>
                <div
                  className={`${
                    !errors.customer_type && 'hidden'
                  } absolute inset-y-0 right-0 flex items-center pointer-events-none pr-8`}
                >
                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                </div>
              </div>
              {!!errors.customer_type && (
                <p className="text-xs text-red-600 mt-2" id="type-customer-error">
                  Este campo es requerido
                </p>
              )}
            </div>
            <div className="col-span-1">
              <label
                htmlFor="hs-validation-type-customer-error"
                className="block text-sm font-medium mb-2 dark:text-white"
              >
                Sede
              </label>
              <div className="relative">
                <select
                  id="hs-validation-type-customer-error"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                  {...register('headquarter', { required: true })}
                  defaultValue="1"
                >
                  <option value="1">Hotel AC Medellín</option>
                  <option value="2">Restaurante Pio 1</option>
                </select>
                <div
                  className={`${
                    !errors.customer_type && 'hidden'
                  } absolute inset-yPersona Natural-0 right-0 flex items-center pointer-events-none pr-8`}
                >
                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                </div>
              </div>
              {!!errors.customer_type && (
                <p className="text-xs text-red-600 mt-2" id="type-customer-error">
                  Este campo es requerido
                </p>
              )}
            </div>
            <div className="col-span-1">
              <label
                htmlFor="hs-validation-type-customer-error"
                className="block text-sm font-medium mb-2 dark:text-white"
              >
                Fecha prevista
              </label>
              <Controller
                control={control}
                name="expected_date"
                render={({ field }) => (
                  <DatePicker
                    placeholderText="Fecha prevista"
                    onChange={(date) => field.onChange(date)}
                    selected={field.value}
                    className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                    dateFormat="Pp"
                    showTimeSelect
                    timeCaption="Hora"
                  />
                )}
              />
            </div>
            <div className="col-span-1">
              <label
                htmlFor="hs-validation-type-customer-error"
                className="block text-sm font-medium mb-2 dark:text-white"
              >
                Fecha de ejecución
              </label>
              <Controller
                control={control}
                name="execution_date"
                render={({ field }) => (
                  <DatePicker
                    placeholderText="Fecha de ejecución"
                    onChange={(date) => field.onChange(date)}
                    selected={field.value}
                    className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                    dateFormat="Pp"
                    showTimeSelect
                    timeCaption="Hora"
                  />
                )}
              />
            </div>
            <div className="col-span-1">
              <label
                htmlFor="hs-validation-type-customer-error"
                className="block text-sm font-medium mb-2 dark:text-white"
              >
                Técnicos
              </label>
              <div className="relative">
                <select
                  id="hs-validation-type-customer-error"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                  {...register('user', { required: true })}
                  defaultValue="1"
                >
                  <option value="1">User 1</option>
                  <option value="2">User 2</option>
                </select>
                <div
                  className={`${
                    !errors.customer_type && 'hidden'
                  } absolute inset-yPersona Natural-0 right-0 flex items-center pointer-events-none pr-8`}
                >
                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                </div>
              </div>
              {!!errors.customer_type && (
                <p className="text-xs text-red-600 mt-2" id="type-customer-error">
                  Este campo es requerido
                </p>
              )}
            </div>
            <div className="col-span-2">
              <label
                htmlFor="hs-validation-obsservations-error"
                className="block text-sm font-medium mb-2 dark:text-white"
              >
                Observaciones
              </label>
              <div className="relative">
                <textarea
                  id="hs-validation-obsservations-error"
                  name="hs-validation-obsservations-error"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                  rows="3"
                  placeholder="Observaciones de la reservación"
                  {...register('observations', { required: false })}
                ></textarea>
                <div
                  className={`${
                    !errors.observations && 'hidden'
                  } absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3`}
                >
                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                </div>
              </div>
              {!!errors.observations && (
                <p className="text-xs text-red-600 mt-2" id="observations-error">
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
            onClick={() => setStatus(!status)}
          >
            {status ? <LoaderButton /> : <>Save changes</>}
          </button>
        </div>
      </form>
    </div>
  );
};
