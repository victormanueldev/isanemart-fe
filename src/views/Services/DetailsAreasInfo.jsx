import { Card, AccordionGroup, Accordion, AccordionTitle } from '../../components';
export const ServicesDetailAreas = () => {
  return (
    <Card title="Áreas">
      <div className="flex flex-col gap-y-3">
        <div className="flex flex-col gap-y-3">
          <AccordionGroup>
            <Accordion
              title={
                <AccordionTitle
                  style="hs-accordion-toggle hs-accordion-active:text-blue-600 bg-gray-100 inline-flex justify-between items-center gap-x-3 w-full font-medium text-sm text-left text-gray-800 transition py-3 px-4 hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
                  title="Sótano"
                  index={2}
                />
              }
              active={false}
              index={2}
              style="hs-accordion bg-white border -mt-px first:rounded-t-lg last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700"
            >
              <ul className="flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
                <li className="flex justify-between items-center gap-x-2 py-3 px-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Tiempo estimado
                  </p>
                  <p className="text-sm font-medium text-gray-500 dark:text-white">30 min</p>
                </li>
                <li className="flex justify-between items-center gap-x-2 py-3 px-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Incidencia</p>
                  <p className="text-sm font-medium text-gray-500 dark:text-white">No</p>
                </li>
                <li className="flex justify-between items-center gap-x-2 py-3 px-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Nivel de Actividad
                  </p>
                  <p className="text-sm font-medium text-gray-500 dark:text-white">No</p>
                </li>
              </ul>
            </Accordion>
          </AccordionGroup>
          <AccordionGroup>
            <Accordion
              title={
                <AccordionTitle
                  style="hs-accordion-toggle hs-accordion-active:text-blue-600 bg-gray-100 inline-flex justify-between items-center gap-x-3 w-full font-medium text-sm text-left text-gray-800 transition py-3 px-4 hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
                  title="Zona Común"
                  index={3}
                />
              }
              active={false}
              index={3}
              style="hs-accordion bg-white border -mt-px first:rounded-t-lg last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700"
            >
              <ul className="flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
                <li className="flex justify-between items-center gap-x-2 py-3 px-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Tiempo estimado
                  </p>
                  <p className="text-sm font-medium text-gray-500 dark:text-white">45 min</p>
                </li>
                <li className="flex justify-between items-center gap-x-2 py-3 px-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Incidencia</p>
                  <p className="text-sm font-medium text-gray-500 dark:text-white">Si</p>
                </li>
                <li className="flex justify-between items-center gap-x-2 py-3 px-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Nivel de Actividad
                  </p>
                  <p className="text-sm font-medium text-gray-500 dark:text-white">Medio</p>
                </li>
              </ul>
            </Accordion>
          </AccordionGroup>
          <AccordionGroup>
            <Accordion
              title={
                <AccordionTitle
                  style="hs-accordion-toggle hs-accordion-active:text-blue-600 bg-gray-100 inline-flex justify-between items-center gap-x-3 w-full font-medium text-sm text-left text-gray-800 transition py-3 px-4 hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
                  title="Zona Exterior"
                  index={4}
                />
              }
              active={false}
              index={4}
              style="hs-accordion bg-white border -mt-px first:rounded-t-lg last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700"
            >
              <ul className="flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
                <li className="flex justify-between items-center gap-x-2 py-3 px-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Tiempo estimado
                  </p>
                  <p className="text-sm font-medium text-gray-500 dark:text-white">30 min</p>
                </li>
                <li className="flex justify-between items-center gap-x-2 py-3 px-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Incidencia</p>
                  <p className="text-sm font-medium text-gray-500 dark:text-white">Si</p>
                </li>
                <li className="flex justify-between items-center gap-x-2 py-3 px-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Nivel de Actividad
                  </p>
                  <p className="text-sm font-medium text-gray-500 dark:text-white">Alto</p>
                </li>
              </ul>
            </Accordion>
          </AccordionGroup>
        </div>
      </div>
    </Card>
  );
};
