import { EllipsisVerticalIcon } from '@heroicons/react/24/solid';
export const Card = ({ title, optionsButton = false, footer, children }) => {
  return (
    <div className="flex flex-col bg-white border shadow-sm rounded-md dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      <div className="flex items-center justify-between bg-gray-100 border-b rounded-t-md py-3 px-4 md:py-3 md:px-4 dark:bg-gray-800 dark:border-gray-700">
        <p className="mt-1 text-md text-gray-500 dark:text-gray-500">{title}</p>
        {optionsButton ? (
          <button
            type="button"
            className="inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
          >
            <EllipsisVerticalIcon className="w-5 h-5"></EllipsisVerticalIcon>
          </button>
        ) : null}
      </div>
      <div className="p-4 md:p-5">{children}</div>
      {footer}
    </div>
  );
};
