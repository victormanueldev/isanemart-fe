import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export const Pagination = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <p className="text-gray-800 text-md">Mostrando 1 - 17 de 100</p>
      <nav className="self-end flex items-center space-x-2">
        <button
          type="button"
          className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
        >
          <ChevronLeftIcon className="w-5 h-5"></ChevronLeftIcon>
          Anterior
        </button>

        <button
          type="button"
          className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
        >
          Siguiente
          <ChevronRightIcon className="w-5 h-5"></ChevronRightIcon>
        </button>
      </nav>
    </div>
  );
};
