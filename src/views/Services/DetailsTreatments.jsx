import { AccordionGroup, Accordion, Card, AccordionTitle } from '../../components';

export const ServiceDetailTreatmentsInfo = ({ treatments }) => {
  return (
    <Card title="Tratamientos">
      <div className="flex flex-col gap-y-3">
        <div>
          {treatments?.map((treatment, index) => (
            <AccordionGroup key={index}>
              <Accordion
                title={
                  <AccordionTitle
                    style="hs-accordion-toggle hs-accordion-active:text-blue-600 bg-gray-100 inline-flex justify-between items-center gap-x-3 w-full font-medium text-sm text-left text-gray-800 transition py-3 px-4 hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
                    title={
                      <>
                        <div className="flex flex-row items-center gap-x-3">
                          {treatment?.name}
                          {treatment?.status === 'No iniciado' ? (
                            <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-200 text-gray-800">
                              {treatment?.status}
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              {treatment?.status}
                            </span>
                          )}
                        </div>
                      </>
                    }
                    index={treatment?.id}
                  />
                }
                active={false}
                index={treatment?.id}
                style="hs-accordion bg-white border -mt-px first:rounded-t-lg last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700"
              >
                <ul className="flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
                  <li className="flex justify-between items-center gap-x-2 py-3 px-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Frecuencia</p>
                    <p className="text-sm font-medium text-gray-500 dark:text-white">
                      {treatment?.frequency}
                    </p>
                  </li>
                  <li className="flex justify-between items-center gap-x-2 py-3 px-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Costo</p>
                    <p className="text-sm font-medium text-gray-500 dark:text-white">
                      {treatment?.cost}
                    </p>
                  </li>
                  <li className="flex justify-between items-center gap-x-2 py-3 px-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      Observaciones
                    </p>
                    <p className="text-sm font-medium text-gray-500 dark:text-white">
                      {treatment?.observations}
                    </p>
                  </li>
                </ul>
              </Accordion>
            </AccordionGroup>
          ))}
        </div>
      </div>
    </Card>
  );
};
