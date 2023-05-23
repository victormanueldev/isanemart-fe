import { useState } from 'react';
import { useDispatch } from 'react-redux';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { AdminLayout } from '../../layouts';
import { CreateServiceForm, UnnassignedServiceForm } from '../../views';
import { BaseModal, SimpleSkeleton, Card } from '../../components';
import { useCalendar } from '../../hooks';
import { handleToggleModal } from '../../state';

let todayStr = new Date().toISOString().replace(/T.*$/, '');
const events = [
  {
    id: 0,
    title: 'All-day event',
    start: todayStr,
  },
  {
    id: 1,
    title: 'Timed event',
    start: todayStr + 'T12:00:00',
  },
];

export const CalendarPage = () => {
  const dispatch = useDispatch();
  const loading = false;
  const [serviceModal, setServiceModal] = useState(null);
  const { onEvents, onEventClick, onSelect, renderEventContent } = useCalendar();

  const onDateSelect = (selectInfo) => {
    setServiceModal('createService');
    dispatch(handleToggleModal());
    onSelect(selectInfo);
  };

  const onUnnassignedService = (serviceInfo) => {
    setServiceModal('unnassignedService');
    dispatch(handleToggleModal());
    // dispatch service selected
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
            {loading ? (
              <SimpleSkeleton />
            ) : (
              <>
                <p className="text-md text-gray-500 mb-3">Filtra servicios por técnico</p>
                <div className="flex xs:flex-row lg:flex-col gap-x-5 gap-y-3">
                  <div className="flex">
                    <input
                      type="checkbox"
                      className="shrink-0 mt-0.5 border-gray-200 rounded text-indigo-600 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-indigo-500 dark:checked:border-indigo-500 dark:focus:ring-offset-gray-800"
                      id="hs-checkbox-group-1"
                    ></input>
                    <label
                      htmlFor="hs-checkbox-group-1"
                      className="text-sm text-gray-700 ml-3 dark:text-gray-400"
                    >
                      Captain Jack Sparrow
                    </label>
                  </div>
                  <div className="flex">
                    <input
                      type="checkbox"
                      className="shrink-0 mt-0.5 border-gray-200 rounded text-red-600 focus:ring-red-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-red-500 dark:checked:border-red-500 dark:focus:ring-offset-gray-800"
                      id="hs-checkbox-group-1"
                    ></input>
                    <label
                      htmlFor="hs-checkbox-group-1"
                      className="text-sm text-gray-700 ml-3 dark:text-gray-400"
                    >
                      John Snow
                    </label>
                  </div>
                </div>
              </>
            )}
          </Card>
          <Card title="Servicios" optionsButton={false}>
            {loading ? (
              <div className="mt-4">
                <SimpleSkeleton />
              </div>
            ) : (
              <>
                <p className="text-md text-gray-500 mb-3">
                  Servicios pendientes por asignación de horario y técnico
                </p>
                <div className="flex flex-col gap-y-3">
                  <div
                    className="cursor-pointer flex flex-row bg-white border shadow-sm rounded-lg xs:p-3 md:p-2 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] dark:text-gray-400 w-full justify-between items-center"
                    onClick={(e) => onUnnassignedService(e)}
                  >
                    <span className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-gray-600">
                      <span className="text-xs font-medium text-white leading-none">AC</span>
                    </span>
                    <div className="basis-56 flex-col items-start ">
                      <p className="text-sm text-gray-900">Hotel AC by Marriot</p>
                      <p className="text-sm text-gray-500">Av 5 # 35 F Sur - 126</p>
                    </div>
                    <div className="basis-1/7">
                      <ChevronRightIcon className="w-5 h-5"></ChevronRightIcon>
                    </div>
                  </div>
                  <div className="cursor-pointer flex flex-row bg-white border shadow-sm rounded-lg xs:p-3 md:p-2 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] dark:text-gray-400 w-full justify-between items-center">
                    <span className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-gray-600">
                      <span className="text-xs font-medium text-white leading-none">AC</span>
                    </span>
                    <div className="basis-56 flex-col items-start ">
                      <p className="text-sm text-gray-900">Hotel AC by Marriot</p>
                      <p className="text-sm text-gray-500">Av 5 # 35 F Sur - 126</p>
                    </div>
                    <div className="basis-1/7">
                      <ChevronRightIcon className="w-5 h-5"></ChevronRightIcon>
                    </div>
                  </div>
                  <div className="cursor-pointer flex flex-row bg-white border shadow-sm rounded-lg xs:p-3 md:p-2 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] dark:text-gray-400 w-full justify-between items-center">
                    <span className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-gray-600">
                      <span className="text-xs font-medium text-white leading-none">AC</span>
                    </span>
                    <div className="basis-56 flex-col items-start ">
                      <p className="text-sm text-gray-900">Hotel AC by Marriot</p>
                      <p className="text-sm text-gray-500">Av 5 # 35 F Sur - 126</p>
                    </div>
                    <div className="basis-1/7">
                      <ChevronRightIcon className="w-5 h-5"></ChevronRightIcon>
                    </div>
                  </div>
                </div>
              </>
            )}
          </Card>
        </div>
        <div className="flex-auto lg:basis-1/3">
          {loading ? (
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
              weekends={false}
              events={events}
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              eventContent={renderEventContent}
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
        ) : (
          <CreateServiceForm></CreateServiceForm>
        )}
      </BaseModal>
    </AdminLayout>
  );
};
