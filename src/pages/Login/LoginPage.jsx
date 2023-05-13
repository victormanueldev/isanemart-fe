import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogin } from '../../state';
import { ArrowRightIcon, ExclamationCircleIcon } from '@heroicons/react/24/solid';
import { AuthLayout } from '../../layouts';
import { LoaderButton } from '../../components';

export const LoginPage = () => {
  const { status, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch(startLogin(data));
  };
  return (
    <AuthLayout>
      <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Iniciar Sesión</h1>
      <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-y-7">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm mb-2 dark:text-white">
              Correo electrónico
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                {...register('email', { required: true })}
                aria-describedby="email-error"
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
              <p className="text-xs text-red-600 mt-2" id="email-error">
                Este campo es requerido
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm mb-2 dark:text-white">
              Contraseña
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                name="password"
                className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                {...register('password', { required: true })}
                aria-describedby="password-error"
              ></input>
              <div
                className={`${
                  !errors.password && 'hidden'
                } absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3`}
              >
                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              </div>
            </div>
            {!!errors.password && (
              <p className="text-xs text-red-600 mt-2" id="password-error">
                Este campo es requerido
              </p>
            )}
          </div>

          <div className="flex flex-row justify-between">
            <div className="flex">
              <input
                type="checkbox"
                className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                id="hs-default-checkbox"
              ></input>
              <label
                htmlFor="hs-default-checkbox"
                className="text-sm text-gray-900 ml-3 dark:text-gray-400"
              >
                Recordarme
              </label>
            </div>
            <a className="text-sm text-gray-900 ml-3 dark:text-gray-400" href="#">
              ¿Olvidaste la contraseña?
            </a>
          </div>
          <button
            type="submit"
            className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 disabled:pointer-events-none"
          >
            {!isLoading ? (
              <>
                Iniciar Sesión
                <ArrowRightIcon className="h-4 w-4" />
              </>
            ) : (
              <LoaderButton></LoaderButton>
            )}
          </button>
        </div>
      </form>
    </AuthLayout>
  );
};
