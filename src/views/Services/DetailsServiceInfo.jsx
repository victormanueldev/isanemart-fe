import { CheckIcon } from '@heroicons/react/24/outline';
import { format } from 'date-fns';
import { AccordionGroup, Accordion, Card, AccordionTitle } from '../../components';

export const ServiceDetailServiceInfo = ({ currentService, pastServices }) => {
  return (
    <Card title="Información del Servicio">
      <div className="flex flex-col gap-y-3">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-lg text-gray-800">{currentService.service_type}</h1>
            <h1 className="text-sm text-gray-500">{currentService.expected_date}</h1>
          </div>
          {currentService.status === 'En progreso' ? (
            <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {currentService.status}
            </span>
          ) : currentService.status === 'Finalizado' ? (
            <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-100 text-green-800">
              {currentService.status}
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
              {currentService.status}
            </span>
          )}
        </div>
        <div>
          <AccordionGroup>
            <Accordion
              title={
                <AccordionTitle
                  style="hs-accordion-toggle hs-accordion-active:text-blue-600 bg-gray-100 inline-flex justify-between items-center gap-x-3 w-full font-medium text-sm text-left text-gray-800 transition py-3 px-4 hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
                  title="Historial de servicios realizados"
                  index={0}
                />
              }
              active={false}
              index={0}
              style="hs-accordion bg-white border -mt-px first:rounded-t-lg last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700"
            >
              <ul className="flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
                {pastServices.map((service, index) => (
                  <li key={index} className="flex items-center gap-x-2 py-3 px-1">
                    <span className="inline-flex justify-center items-center w-[20px] h-[20px] rounded-full bg-green-100 text-green-500">
                      <CheckIcon className="w-3 h-3"></CheckIcon>
                    </span>
                    <p className="text-sm font-medium text-blue-500 dark:text-blue">{`${format(
                      Date.parse(service.expected_date),
                      'yyyy/dd/MM HH:mm'
                    )} Orden ID #${service.id}`}</p>
                  </li>
                ))}
              </ul>
            </Accordion>
          </AccordionGroup>
        </div>
      </div>
    </Card>
  );
};
