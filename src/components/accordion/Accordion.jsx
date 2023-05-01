import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
export const Accordion = ({ title, active, index, children }) => {
  return (
    <div
      className={`hs-accordion ${
        active && 'active'
      } bg-white border -mt-px first:rounded-t-lg last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700`}
      id={`hs-bordered-heading-${index}`}
    >
      <button
        className="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition py-4 px-5 hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
        aria-controls="hs-basic-bordered-collapse-${index}"
      >
        <ChevronDownIcon className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-4 h-4 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" />
        <ChevronUpIcon className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden  w-4 h-4 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" />
        {title}
      </button>
      <div
        id="hs-basic-bordered-collapse-${index}"
        className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
        aria-labelledby={`hs-bordered-heading-${index}`}
      >
        <div className="pb-4 px-5">{children}</div>
      </div>
    </div>
  );
};
