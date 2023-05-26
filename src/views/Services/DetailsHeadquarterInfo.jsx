import { Card, AccordionGroup, Accordion, AccordionTitle } from '../../components';
export const ServicesDetailHeadquarters = ({ headquarter }) => {
  const { name, address, phone, neighborhood, city } = headquarter;
  return (
    <Card title="Información de Sede">
      <div className="flex flex-col gap-y-3">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-lg text-gray-800">{name}</h1>
            <h1 className="text-sm text-gray-500">{address}</h1>
          </div>
          <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Activo
          </span>
        </div>
        <div>
          <AccordionGroup>
            <Accordion
              title={
                <AccordionTitle
                  style="hs-accordion-toggle hs-accordion-active:text-blue-600 bg-gray-100 inline-flex justify-between items-center gap-x-3 w-full font-medium text-sm text-left text-gray-800 transition py-3 px-4 hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
                  title="Información de la sede"
                  index={headquarter.id}
                />
              }
              active={false}
              index={headquarter.id}
              style="hs-accordion bg-white border -mt-px first:rounded-t-lg last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700"
            >
              <ul className="flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
                <li className="flex justify-between items-center gap-x-2 py-3 px-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Ciudad</p>
                  <p className="text-sm font-medium text-gray-500 dark:text-white">{city}</p>
                </li>
                <li className="flex justify-between items-center gap-x-2 py-3 px-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Telefono</p>
                  <p className="text-sm font-medium text-gray-500 dark:text-white">{phone}</p>
                </li>
                <li className="flex justify-between items-center gap-x-2 py-3 px-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Barrio</p>
                  <p className="text-sm font-medium text-gray-500 dark:text-white">
                    {neighborhood}
                  </p>
                </li>
              </ul>
            </Accordion>
          </AccordionGroup>
        </div>
      </div>
    </Card>
  );
};
