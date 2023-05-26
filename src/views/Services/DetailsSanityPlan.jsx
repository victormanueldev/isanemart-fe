import { Card } from '../../components';

export const ServiceDetailSanityPlan = ({ sanityPlan }) => {
  return (
    <>
      {sanityPlan?.length > 0 && (
        <Card title="Plan de Saneamiento">
          <div className="flex flex-col gap-y-3">
            <ul className="flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
              <li className="flex justify-between items-center gap-x-2 py-3 px-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">Visitas</p>
                <p className="text-sm font-medium text-gray-500 dark:text-gray">
                  {sanityPlan[0].visits_qty}
                </p>
              </li>
              <li className="flex justify-between items-center gap-x-2 py-3 px-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Duración del servicio
                </p>
                <p className="text-sm font-medium text-gray-500 dark:text-gray">95 Minutos</p>
              </li>
              <li className="flex justify-between items-center gap-x-2 py-3 px-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Frecuencia de visitas
                </p>
                <p className="text-sm font-medium text-gray-500 dark:text-gray">
                  {sanityPlan[0].frequency}
                </p>
              </li>
            </ul>
          </div>
        </Card>
      )}
    </>
  );
};
