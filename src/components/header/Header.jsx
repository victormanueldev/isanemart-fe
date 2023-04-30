import {
  MagnifyingGlassIcon,
  BellIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/outline';
export const Header = () => {
  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 sm:py-4 lg:pl-64 dark:bg-gray-800 dark:border-gray-700">
      <nav
        className="flex basis-full items-center w-full mx-auto px-4 sm:px-6 md:px-8"
        aria-label="Global"
      >
        <div className="mr-5 lg:mr-0 lg:hidden">
          <a
            className="flex-none text-xl font-semibold dark:text-white"
            href="#"
            aria-label="Brand"
          >
            <img src="/assets/img/iSanemartLogo.svg" alt="" srcSet="" />
          </a>
        </div>

        <div className="w-full flex items-center justify-end ml-auto sm:justify-between sm:gap-x-3 sm:order-3">
          <div className="sm:hidden">
            <button
              type="button"
              className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
            >
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>
          </div>

          <div className="hidden sm:block">
            <label htmlFor="icon" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
                <MagnifyingGlassIcon className="h-4 w-4 text-gray-500" />
              </div>
              <input
                type="text"
                id="icon"
                name="icon"
                className="py-2 px-4 pl-11 block w-full border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                placeholder="Search"
              ></input>
            </div>
          </div>

          <div className="flex flex-row items-center justify-end gap-2">
            <button
              type="button"
              className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
            >
              <BellIcon className="h-4 w-4"></BellIcon>
            </button>

            <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
              <button
                id="hs-dropdown-with-header"
                type="button"
                className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
              >
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-600">
                  <span className="text-xs font-medium text-white leading-none">AC</span>
                </span>
              </button>

              <div
                className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700"
                aria-labelledby="hs-dropdown-with-header"
              >
                <div className="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg dark:bg-gray-700">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Signed in as</p>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-300">
                    user@site.com
                  </p>
                </div>
                <div className="mt-2 py-2 first:pt-0 last:pb-0">
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    href="#"
                  >
                    <ArrowLeftOnRectangleIcon className="h-4 w-4" />
                    Cerrar Sesión
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
