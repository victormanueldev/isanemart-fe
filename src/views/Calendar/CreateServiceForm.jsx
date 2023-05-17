import { XMarkIcon } from '@heroicons/react/24/outline';
import { LoaderButton } from '../../components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleToggleModal } from '../../state';
export const CreateServiceForm = () => {
  const dispatch = useDispatch();
  const onCloseModal = () => {
    dispatch(handleToggleModal());
  };
  const [status, setStatus] = useState(false);
  return (
    <div className="flex flex-col bg-white shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
        <h3 className="font-bold text-gray-800 dark:text-white">Motal Title</h3>
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
        <p className="text-gray-800 dark:text-gray-400">
          This is a wider card with supporting text below as a natural lead-in to additional
          content.
        </p>
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
          type="button"
          className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
          onClick={() => setStatus(!status)}
        >
          {status ? <LoaderButton /> : <>Save changes</>}
        </button>
      </div>
    </div>
  );
};
