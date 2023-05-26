import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { AdminLayout } from '../../layouts';
import { CreateServiceForm, UnnassignedServiceForm, UpdateServiceForm } from '../../views';
import { BaseModal, SimpleSkeleton, Card } from '../../components';
import { useCalendar } from '../../hooks';
import {
  handleToggleModal,
  startFetchingCustomers,
  startFetchingHeadquarters,
  startFetchingServiceById,
  startFetchingUnassignedServices,
  startFetchingUsers,
  startFetchinTreatments,
  toggleUserShow,
} from '../../state';

export const CalendarPage = () => {
  const dispatch = useDispatch();
  const servicesState = useSelector((state) => state.services);
  const usersState = useSelector((state) => state.users);
  const [checked, setChecked] = useState(new Array(12).fill(true));
  const [serviceModal, setServiceModal] = useState(null);
  const { onEvents } = useCalendar();

  useEffect(() => {
    dispatch(startFetchingUsers({ is_technician: true }));
    dispatch(startFetchingUnassignedServices({ status: 'Previsto' }));
  }, []);

  const onEventClick = (serviceInfo) => {
    setServiceModal('updateService');
    dispatch(startFetchingServiceById(serviceInfo.event.id));
    dispatch(startFetchinTreatments({}));
    dispatch(handleToggleModal());
  };

  const onDateSelect = () => {
    setServiceModal('createService');
    dispatch(handleToggleModal());
    dispatch(startFetchingCustomers());
    dispatch(startFetchingHeadquarters());
    dispatch(startFetchinTreatments({}));
  };

  const onUnnassignedService = (serviceInfo) => {
    setServiceModal('unnassignedService');
    dispatch(startFetchingServiceById(serviceInfo.id));
    dispatch(startFetchinTreatments({}));
    dispatch(handleToggleModal());
  };

  const onCheckboxChange = (id, position) => {
    const updatedCheckedState = checked.map((item, index) => (index === position ? !item : item));
    setChecked(updatedCheckedState);
    !checked[position]
      ? dispatch(toggleUserShow(id, 'show'))
      : dispatch(toggleUserShow(id, 'hide'));
  };

  return (
    <AdminLayout>
      <header>
        <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">
          Planning
        </h1>
        <p className="mt-2 text-md text-gray-800 dark:text-gray-400">
          Gestiona los servicios pentientes, agendados en un calendario interactivo.
        </p>
      </header>
      <div className="flex xs:flex-col lg:flex-row gap-y-3 pt-4">
        <div className="flex-1 flex flex-col gap-3 lg:mr-3">
          <Card title="Técnicos" optionsButton={false}>
            {usersState.isLoading ? (
              <SimpleSkeleton />
            ) : (
              <>
                <p className="text-md text-gray-500 mb-3">Filtra servicios por técnico</p>
                <div className="flex xs:flex-row lg:flex-col gap-x-5 gap-y-3">
                  {usersState.users.map((user, index) => (
                    <div key={index} className="flex">
                      <input
                        type="checkbox"
                        className={`shrink-0 mt-0.5 border-gray-200 rounded text-${user.color}-600 focus:ring-${user.color}-500 dark:bg-gray-800 dark:border-gray-700 checked:bg-${user.color}-500 checked:border-${user.color}-500 dark:focus:ring-offset-gray-800`}
                        id={`hs-checkbox-group-${user.id}`}
                        name={`checkbox-${user.id}`}
                        checked={checked[index]}
                        onChange={() => onCheckboxChange(user.id, index)}
                      ></input>
                      <label
                        htmlFor={`hs-checkbox-group-${user.id}`}
                        className="text-sm text-gray-700 ml-3 dark:text-gray-400"
                      >
                        {user.full_name}
                      </label>
                    </div>
                  ))}
                </div>
              </>
            )}
          </Card>
          <Card title="Servicios" optionsButton={false}>
            {servicesState.isLoading ? (
              <div className="mt-4">
                <SimpleSkeleton />
              </div>
            ) : (
              <>
                <p className="text-md text-gray-500 mb-3">Servicios agendados</p>
                <div className="flex flex-col gap-3">
                  {servicesState.unassignedServices.map((service, index) => (
                    <div
                      key={index}
                      className="cursor-pointer flex flex-row bg-white border shadow-sm rounded-lg xs:p-3 md:p-2 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] dark:text-gray-400 w-full justify-between items-center"
                      onClick={() => onUnnassignedService(service)}
                    >
                      <span className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-gray-600">
                        <span className="text-xs font-medium text-white leading-none">C</span>
                      </span>
                      <div className="basis-56 flex-col items-start ">
                        <p className="text-sm text-gray-900">{service.customer.commercial_name}</p>
                        <p className="text-sm text-gray-500">{service.customer.address}</p>
                      </div>
                      <div className="basis-1/7">
                        <ChevronRightIcon className="w-5 h-5"></ChevronRightIcon>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </Card>
        </div>
        <div className="flex-auto lg:basis-1/3">
          {usersState.isLoading ? (
            <SimpleSkeleton />
          ) : (
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
              initialView="dayGridMonth"
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
              }}
              weekends={true}
              events={usersState.events}
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              eventsSet={onEvents}
              eventClick={onEventClick}
              select={onDateSelect}
            />
          )}
        </div>
      </div>
      <BaseModal>
        {serviceModal === 'unnassignedService' ? (
          <UnnassignedServiceForm></UnnassignedServiceForm>
        ) : serviceModal === 'updateService' ? (
          <UpdateServiceForm></UpdateServiceForm>
        ) : (
          <CreateServiceForm></CreateServiceForm>
        )}
      </BaseModal>
    </AdminLayout>
  );
};
