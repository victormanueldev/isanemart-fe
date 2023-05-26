import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { BaseModal } from '../../components';
import { AdminLayout } from '../../layouts';
import { handleToggleModal, startFetchingServiceById } from '../../state';
import {
  ServiceDetailCustomerInfo,
  ServicesDetailHeadquarters,
  ServicesDetailAreas,
  ServiceDetailServiceInfo,
  ServiceDetailSanityPlan,
  ServiceDetailInvoiceInfo,
  ServiceDetailTreatmentsInfo,
  ServiceDetailTechnicianInfo,
  StartServiceForm,
  FinishServiceForm,
} from '../../views';
export const ServicesDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [serviceModal, setServiceModal] = useState();
  const { service, services } = useSelector((state) => state.services);
  const { customer } = useSelector((state) => state.customers);
  const { headquarter } = useSelector((state) => state.headquarters);
  const { areas } = useSelector((state) => state.areas);

  useEffect(() => {
    if (id) dispatch(startFetchingServiceById(id));
  }, [id]); //eslint-disable-line

  const onStartClick = () => {
    setServiceModal('updateServiceStart');
    dispatch(handleToggleModal());
  };

  const onFinishClick = () => {
    setServiceModal('updateServiceFinish');
    dispatch(handleToggleModal());
  };

  return (
    <AdminLayout>
      <header className="flex flex-col md:flex-row">
        <div className="w-full">
          <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Orden # {id}</h1>
        </div>
        <div className="flex gap-3 w-full justify-end">
          <button
            type="button"
            className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500"
          >
            Borrar
          </button>
          {service.status === 'En progreso' ? (
            <button
              type="button"
              className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
              onClick={onFinishClick}
            >
              Terminar
            </button>
          ) : (
            <button
              type="button"
              className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
              onClick={onStartClick}
            >
              Iniciar
            </button>
          )}
        </div>
      </header>
      <div className="py-3 grid grid-cols-1 gap-5 md:grid-cols-3 md:grid-rows-2 md:grid-flow-row md:gap-x-5">
        <ServiceDetailCustomerInfo customer={customer}></ServiceDetailCustomerInfo>

        <ServiceDetailServiceInfo
          currentService={service}
          pastServices={services}
        ></ServiceDetailServiceInfo>

        <ServiceDetailTreatmentsInfo treatments={service?.treatments}></ServiceDetailTreatmentsInfo>

        <ServicesDetailHeadquarters headquarter={headquarter}></ServicesDetailHeadquarters>

        <ServiceDetailSanityPlan sanityPlan={customer?.sanity_plans}></ServiceDetailSanityPlan>

        <ServiceDetailTechnicianInfo users={service?.users}></ServiceDetailTechnicianInfo>

        <ServicesDetailAreas areas={areas}></ServicesDetailAreas>

        <ServiceDetailInvoiceInfo
          invoice={service?.invoice}
          treatments={service?.treatments}
        ></ServiceDetailInvoiceInfo>
      </div>
      <BaseModal>
        {serviceModal === 'updateServiceStart' ? (
          <StartServiceForm serviceId={id}></StartServiceForm>
        ) : (
          <FinishServiceForm serviceId={id}></FinishServiceForm>
        )}
      </BaseModal>
    </AdminLayout>
  );
};
