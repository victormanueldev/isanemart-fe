import { Bars3Icon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { appRoutes } from '../../routes';
import { SidebarItem } from './SidebarItem';

export const Sidebar = () => {
  return (
    <>
      {/* Mobile Style */}
      <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center py-4">
          {/* <!-- Navigation Toggle --> */}
          <button
            type="button"
            className="text-gray-500 hover:text-gray-600"
            data-hs-overlay="#application-sidebar"
            aria-controls="application-sidebar"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle Navigation</span>
            <Bars3Icon className="h-5 w-5" />
          </button>
          {/* <!-- End Navigation Toggle --> */}

          {/* <!-- Breadcrumb --> */}
          <ol className="ml-3 flex items-center whitespace-nowrap min-w-0" aria-label="Breadcrumb">
            <li className="flex items-center text-sm text-gray-800 dark:text-gray-400">
              Application Layout
              <ChevronRightIcon className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600" />
            </li>
            <li
              className="text-sm font-semibold text-gray-800 truncate dark:text-gray-400"
              aria-current="page"
            >
              Dashboard
            </li>
          </ol>
          {/* <!-- End Breadcrumb --> */}
        </div>
      </div>
      {/* End Mobile Style */}
      <div
        id="application-sidebar"
        className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-white border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700 [--auto-hide:1]"
      >
        <div className="px-6">
          <a
            className="flex-none text-xl font-semibold dark:text-white"
            href="#"
            aria-label="Brand"
          >
            <img src="/assets/img/iSanemartLogo.svg" alt="" srcSet="" />
          </a>
        </div>

        <nav
          className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
          data-hs-accordion-always-open
        >
          <ul className="space-y-1.5">
            {appRoutes.map((routes, index) => (
              <SidebarItem
                key={index}
                isParent={routes.isParent}
                parentName={routes.parent}
                iconComponent={routes.iconComponent}
                childrenRoutes={routes.children}
                pathname={routes.pathname}
              ></SidebarItem>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};
