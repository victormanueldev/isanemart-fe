import { AccordionGroup, Accordion, Card, AccordionTitle } from '../../components';

export const ServiceDetailInvoiceInfo = ({ invoice, treatments }) => {
  const currentInvoice = invoice || {};
  const currentTreatments = treatments || [];
  return (
    <Card title="Factura">
      <div className="flex flex-col gap-y-3">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-lg text-gray-800">Factura # {currentInvoice?.id}</h1>
            <h1 className="text-sm text-gray-500">{`Total $ ${currentInvoice?.total_invoiced}`}</h1>
          </div>

          {currentInvoice?.status ? (
            <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Pagado
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
              Pendiente
            </span>
          )}
        </div>
        <div>
          <AccordionGroup>
            <Accordion
              title={
                <AccordionTitle
                  style="hs-accordion-toggle hs-accordion-active:text-blue-600 bg-gray-100 inline-flex justify-between items-center gap-x-3 w-full font-medium text-sm text-left text-gray-800 transition py-3 px-4 hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
                  title="Información de la factura"
                  index={currentInvoice?.id}
                />
              }
              active={false}
              index={currentInvoice?.id}
              style="hs-accordion bg-white border -mt-px first:rounded-t-lg last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700"
            >
              <ul className="flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
                {currentTreatments?.map((treatment, index) => (
                  <li key={index} className="flex justify-between items-center gap-x-2 py-3 px-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {treatment?.name}
                    </p>
                    <p className="text-sm font-medium text-gray-500 dark:text-white">
                      $ {treatment?.cost}
                    </p>
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
