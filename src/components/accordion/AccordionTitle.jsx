import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
export const AccordionTitle = ({ style, title, index }) => {
  return (
    <button className={`${style}`} aria-controls={`hs-basic-bordered-collapse-${index}`}>
      {title}
      <ChevronDownIcon className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-4 h-4 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" />
      <ChevronUpIcon className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden  w-4 h-4 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" />
    </button>
  );
};
