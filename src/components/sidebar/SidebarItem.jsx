import { Link, useLocation } from 'react-router-dom';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
export const SidebarItem = ({
  isParent,
  parentName,
  iconComponent,
  childrenRoutes,
  pathname = null,
}) => {
  const location = useLocation();
  return !isParent ? (
    <li>
      <Link
        className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-900 dark:text-white"
        to={pathname}
      >
        {iconComponent}
        {parentName}
      </Link>
    </li>
  ) : (
    <li
      className={`hs-accordion ${
        location.pathname.includes(parentName.toLowerCase()) ? 'active' : ''
      }`}
      id={`${parentName}-accordion`}
    >
      <a className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white">
        {iconComponent}
        {parentName}
        <ChevronDownIcon className="hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" />
        <ChevronUpIcon className="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" />
      </a>

      <div
        id={`${parentName}-accordion`}
        className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${
          !location.pathname.includes(parentName.toLowerCase()) ? 'hidden' : ''
        }`}
      >
        <ul className="pt-2 pl-2">
          {childrenRoutes.map((child, index) => (
            <li key={index}>
              <Link
                className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 ${
                  location.pathname.includes(child.pathname.toLowerCase()) ? 'bg-gray-100' : ''
                }`}
                to={child.pathname}
              >
                {child.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};
