import { XMarkIcon } from '@heroicons/react/24/outline';
export const Toast = ({ message }) => {
  return (
    <div className="absolute md:top-30 md:right-4">
      <div
        id="dismiss-toast"
        className={`bg-green-500 hs-removing:translate-x-5 hs-removing:opacity-0 transition duration-300 max-w-md text-sm text-white rounded-md shadow-lg`}
        role="alert"
      >
        <div className="flex items-center p-3">
          <p className="text-sm text-white-700 dark:text-white-400 mr-2">{message}</p>

          <div className="flex ml-auto">
            <button
              type="button"
              className="inline-flex flex-shrink-0 justify-center items-center rounded-md text-white-400 hover:text-white-500 focus:outline-none focus:ring-2 focus:ring-white-400 focus:ring-offset-2 focus:ring-offset-white text-sm dark:focus:ring-white-700 dark:focus:ring-offset-white-800"
              data-hs-remove-element="#dismiss-toast"
            >
              <span className="sr-only">Close</span>
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
