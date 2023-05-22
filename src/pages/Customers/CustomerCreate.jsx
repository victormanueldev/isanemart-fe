import { useForm } from 'react-hook-form';
import { UserIcon, BuildingOffice2Icon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { AdminLayout } from '../../layouts';
import { LoaderButton } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingCustomer } from '../../state';
import { parseCustomerHeadquarterData } from '../../utils';
export const CustomerCreate = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.customers);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const cData = parseCustomerHeadquarterData(data, data.headquarters);
    dispatch(startCreatingCustomer(cData));
    reset();
  };
  return (
    <AdminLayout>
      <header>
        <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">
          Crear cliente
        </h1>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-3 flex flex-col gap-y-4">
          <div className="bg-gray-100 rounded-md py-2 px-4">
            <div className="flex flex-row gap-x-3 items-center">
              <UserIcon className="w-4 h-4 text-blue-500" />
              <p className="text-semi-bold text-blue-500">Información Básica</p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {/* Nombre / Razon Social */}
            <div className="col-span-2">
              <label
                htmlFor="hs-validation-fullname-error"
                className="block text-sm font-medium mb-2 dark:text-white"
              >
                Nombre / Razón Social
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="hs-validation-fullname-error"
                  name="hs-validation-fullname-error"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                  aria-describedby="hs-validation-nit-fullname-helper"
                  {...register('fullname', { required: true })}
                ></input>
                <div
                  className={`${
                    !errors.fullname && 'hidden'
                  } absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3`}
                >
                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                </div>
              </div>
              {!!errors.fullname && (
                <p className="text-xs text-red-600 mt-2" id="fullname-error">
                  Este campo es requerido
                </p>
              )}
            </div>
            {/* Nombre Comercial */}
            <div className="col-span-2">
              <label
                htmlFor="hs-validation-commertial-name-error"
                className="block text-sm font-medium mb-2 dark:text-white"
              >
                Nombre Comercial
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="hs-validation-commertial-name-error"
                  name="hs-validation-commertial-name-error"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                  {...register('commercial_name', { required: true })}
                  aria-describedby="hs-validation-commertial-name-error-helper"
                ></input>
                <div
                  className={`${
                    !errors.commercial_name && 'hidden'
                  } absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3`}
                >
                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                </div>
              </div>
              {!!errors.commercial_name && (
                <p className="text-xs text-red-600 mt-2" id="commertial-name-error">
                  Este campo es requerido
                </p>
              )}
            </div>
            {/* NIT / Cedula */}
            <div className="col-span-1">
              <label
                htmlFor="hs-validation-id-error"
                className="block text-sm font-medium mb-2 dark:text-white"
              >
                NIT / Cédula
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="hs-validation-id-error"
                  name="hs-validation-id-error"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                  {...register('document_id', { required: true })}
                  aria-describedby="hs-validation-id-error-helper"
                ></input>
                <div
                  className={`${
                    !errors.document_id && 'hidden'
                  } absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3`}
                >
                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                </div>
              </div>
              {!!errors.document_id && (
                <p className="text-xs text-red-600 mt-2" id="commertial-name-error">
                  Este campo es requerido
                </p>
              )}
            </div>
            {/* Tipo de Cliente */}
            <div className="col-span-1">
              <label
                htmlFor="hs-validation-type-customer-error"
                className="block text-sm font-medium mb-2 dark:text-white"
              >
                Tipo de Cliente
              </label>
              <div className="relative">
                <select
                  id="hs-validation-type-customer-error"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                  {...register('customer_type', { required: true })}
                  defaultValue="Persona Natural"
                >
                  <option value="Persona Natural">Persona Natural</option>
                  <option value="Persona Jurídica">Persona Jurídica</option>
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
            {/* Direccion Principal */}
            <div className="col-span-1">
              <label
                htmlFor="hs-validation-main-address-error"
                className="block text-sm font-medium mb-2 dark:text-white"
              >
                Dirección Principal
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="hs-validation-main-address-error"
                  name="hs-validation-main-address-error"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                  {...register('address', { required: true })}
                  aria-describedby="hs-validation-main-address-error-helper"
                ></input>
                <div
                  className={`${
                    !errors.address && 'hidden'
                  } absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3`}
                >
                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                </div>
              </div>
              {!!errors.address && (
                <p className="text-xs text-red-600 mt-2" id="address-error">
                  Este campo es requerido
                </p>
              )}
            </div>
            {/* Ciudad  */}
            <div className="col-span-1">
              <label
                htmlFor="hs-validation-city-error"
                className="block text-sm font-medium mb-2 dark:text-white"
              >
                Ciudad
              </label>
              <div className="relative">
                <select
                  id="hs-validation-city-error"
                  className="py-3 px-4 pr-16 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                  {...register('city', { required: true })}
                  defaultValue="Cali"
                >
                  <option value="Cali">Cali</option>
                  <option value="Medellín">Medellín</option>
                  <option value="Bogotá">Bogotá</option>
                  <option value="Popayán">Popayán</option>
                </select>
                <div
                  className={`${
                    !errors.city && 'hidden'
                  } absolute inset-y-0 right-0 flex items-center pointer-events-none pr-8`}
                >
                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                </div>
              </div>
              {!!errors.city && (
                <p className="text-xs text-red-600 mt-2" id="type-customer-error">
                  Este campo es requerido
                </p>
              )}
            </div>
            {/* Email */}
            <div className="col-span-1">
              <label
                htmlFor="hs-validation-email-error"
                className="block text-sm font-medium mb-2 dark:text-white"
              >
                Email
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="hs-validation-email-error"
                  name="hs-validation-email-error"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                  {...register('email', { required: true })}
                  aria-describedby="hs-validation-email-error-helper"
                ></input>
                <div
                  className={`${
                    !errors.email && 'hidden'
                  } absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3`}
                >
                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                </div>
              </div>
              {!!errors.email && (
                <p className="text-xs text-red-600 mt-2" id="commertial-email-error">
                  Este campo es requerido
                </p>
              )}
            </div>
            {/* Telefono  */}
            <div className="col-span-1">
              <label
                htmlFor="hs-validation-phone-error"
                className="block text-sm font-medium mb-2 dark:text-white"
              >
                Teléfono
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="hs-validation-phone-error"
                  name="hs-validation-phone-error"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                  {...register('phone', { required: true })}
                  aria-describedby="hs-validation-phone-error-helper"
                ></input>
                <div
                  className={`${
                    !errors.phone && 'hidden'
                  } absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3`}
                >
                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                </div>
              </div>
              {!!errors.phone && (
                <p className="text-xs text-red-600 mt-2" id="phone-error">
                  Este campo es requerido
                </p>
              )}
            </div>
            {/* Varias Sedes */}
            <div className="col-span-1">
              <span className="m-7 block"></span>
              <label
                htmlFor="hs-various-headquarters-form"
                className="flex p-3 block w-full bg-white border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
              >
                <input
                  type="radio"
                  name="hs-headquarters-form"
                  className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  {...register('headquarters')}
                  id="hs-various-headquarters-form"
                  value="various"
                ></input>
                <span className="text-sm text-gray-500 ml-3 dark:text-gray-400">Varias Sedes</span>
              </label>
            </div>
            {/* Unica Sede */}
            <div className="col-span-1">
              <span className="m-7 block"></span>
              <label
                htmlFor="hs-unique-headquarters-form"
                className="flex p-3 block w-full bg-white border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
              >
                <input
                  type="radio"
                  name="hs-headquarters-form"
                  className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  {...register('headquarters')}
                  value="unique"
                  id="hs-unique-headquarters-form"
                ></input>
                <span className="text-sm text-gray-500 ml-3 dark:text-gray-400">Única Sede</span>
              </label>
            </div>
          </div>
          <div className="bg-gray-100 rounded-md py-2 px-4">
            <div className="flex flex-row gap-x-3 items-center">
              <BuildingOffice2Icon className="w-4 h-4 text-blue-500" />
              <p className="text-semi-bold text-blue-500">Información de sede </p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {/* Nombre HQ */}
            <div className="col-span-2">
              <label
                htmlFor="hs-validation-name-error"
                className="block text-sm font-medium mb-2 dark:text-white"
              >
                Nombre
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="hs-validation-hq-name-error"
                  name="hs-validation-hq-name-error"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                  {...register('headquarter_name', { required: true })}
                  aria-describedby="hs-validation-hq-name-error-helper"
                ></input>
                <div
                  className={`${
                    !errors.headquarter_name && 'hidden'
                  } absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3`}
                >
                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                </div>
              </div>
              {!!errors.headquarter_name && (
                <p className="text-xs text-red-600 mt-2" id="hq-name-error">
                  Este campo es requerido
                </p>
              )}
            </div>
            {/* Direccion */}
            <div className="col-span-2">
              <label
                htmlFor="hs-validation-hq-address-error"
                className="block text-sm font-medium mb-2 dark:text-white"
              >
                Dirección
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="hs-validation-hq-address-error"
                  name="hs-validation-hq-address-error"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                  {...register('headquarter_address', { required: true })}
                  aria-describedby="hs-validation-hq-address-error-helper"
                ></input>
                <div
                  className={`${
                    !errors.headquarter_address && 'hidden'
                  } absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3`}
                >
                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                </div>
              </div>
              {!!errors.headquarter_address && (
                <p className="text-xs text-red-600 mt-2" id="hq-address-error">
                  Este campo es requerido
                </p>
              )}
            </div>
            {/* Ciudad */}
            <div className="col-span-1">
              <label
                htmlFor="hs-hq-validation-city-error"
                className="block text-sm font-medium mb-2 dark:text-white"
              >
                Ciudad
              </label>
              <div className="relative">
                <select
                  id="hs-hq-validation-city-error"
                  className="py-3 px-4 pr-16 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                  {...register('headquarter_city', { required: true })}
                  defaultValue="Cali"
                >
                  <option value="Cali">Cali</option>
                  <option value="Medellín">Medellín</option>
                  <option value="Bogotá">Bogotá</option>
                  <option value="Popayán">Popayán</option>
                </select>
                <div
                  className={`${
                    !errors.headquarter_city && 'hidden'
                  } absolute inset-y-0 right-0 flex items-center pointer-events-none pr-8`}
                >
                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                </div>
              </div>
              {!!errors.headquarter_city && (
                <p className="text-xs text-red-600 mt-2" id="hq-city-error">
                  Este campo es requerido
                </p>
              )}
            </div>
            {/* Barrio */}
            <div className="col-span-1">
              <label
                htmlFor="hs-validation-hq-neighboor-error"
                className="block text-sm font-medium mb-2 dark:text-white"
              >
                Barrio
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="hs-validation-hq-neighboor-error"
                  name="hs-validation-hq-neighboor-error"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                  {...register('headquarter_neighborhood', { required: true })}
                  aria-describedby="hs-validation-hq-neighboor-error-helper"
                ></input>
                <div
                  className={`${
                    !errors.headquarter_neighborhood && 'hidden'
                  } absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3`}
                >
                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                </div>
              </div>
              {!!errors.headquarter_neighborhood && (
                <p className="text-xs text-red-600 mt-2" id="hq-neighboor-error">
                  Este campo es requerido
                </p>
              )}
            </div>
            {/* Email */}
            <div className="col-span-1">
              <label
                htmlFor="hs-validation-hq-email-error"
                className="block text-sm font-medium mb-2 dark:text-white"
              >
                Email
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="hs-validation-hq-email-error"
                  name="hs-validation-hq-email-error"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                  {...register('headquarter_email', { required: true })}
                  aria-describedby="hs-validation-hq-email-error-helper"
                ></input>
                <div
                  className={`${
                    !errors.headquarter_email && 'hidden'
                  } absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3`}
                >
                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                </div>
              </div>
              {!!errors.headquarter_email && (
                <p className="text-xs text-red-600 mt-2" id="hq-email-error">
                  Este campo es requerido
                </p>
              )}
            </div>
            {/* Telefono */}
            <div className="col-span-1">
              <label
                htmlFor="hs-validation-hq-phone-error"
                className="block text-sm font-medium mb-2 dark:text-white"
              >
                Teléfono
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="hs-validation-hq-phone-error"
                  name="hs-validation-hq-phone-error"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                  {...register('headquarter_phone', { required: true })}
                  aria-describedby="hs-validation-hq-phone-error-helper"
                ></input>
                <div
                  className={`${
                    !errors.headquarter_phone && 'hidden'
                  } absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3`}
                >
                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                </div>
              </div>
              {!!errors.headquarter_phone && (
                <p className="text-xs text-red-600 mt-2" id="hq-phone-error">
                  Este campo es requerido
                </p>
              )}
            </div>
          </div>
          <div className="flex gap-3 w-full justify-end">
            <button
              type="button"
              className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
              disabled={isLoading ?? true}
            >
              {isLoading ? <LoaderButton></LoaderButton> : <>Guardar</>}
            </button>
          </div>
        </div>
      </form>
    </AdminLayout>
  );
};
