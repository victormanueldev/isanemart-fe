import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { Bars2Icon } from '@heroicons/react/24/solid';
import { AdminLayout } from '../../layouts';
import { Accordion, AccordionGroup } from '../../components';
import { useCalendar } from '../../hooks';

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
  console.log('rendered');
  const { onEvents, onEventClick, onDateSelect, renderEventContent } = useCalendar();

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
      <div className="flex xs:flex-col lg:flex-row py-2">
        <div className="flex-1 lg:mr-3">
          <AccordionGroup>
            <Accordion
              title="Técnicos"
              active={true}
              index={1}
              style="hs-accordion bg-white border -mt-px first:rounded-t-lg last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700"
            >
              <p className="text-md text-gray-500 mb-2">Filtra servicios por técnico</p>
              <div className="flex xs:flex-row lg:flex-col gap-x-5 gap-y-3">
                <div className="flex">
                  <input
                    type="checkbox"
                    className="shrink-0 mt-0.5 border-gray-200 rounded text-indigo-600 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-indigo-500 dark:checked:border-indigo-500 dark:focus:ring-offset-gray-800"
                    id="hs-checkbox-group-1"
                    checked={true}
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
                    checked={true}
                  ></input>
                  <label
                    htmlFor="hs-checkbox-group-1"
                    className="text-sm text-gray-700 ml-3 dark:text-gray-400"
                  >
                    John Snow
                  </label>
                </div>
              </div>
            </Accordion>
            <Accordion
              title="Servicios"
              active={false}
              index={0}
              style="hs-accordion bg-white border -mt-px first:rounded-t-lg last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700"
            >
              <p className="text-md text-gray-500 mb-2">
                Servicios pendientes por asignación de horario y técnico
              </p>
              <div className="flex flex-col gap-y-3">
                <div className="cursor-grabbing flex flex-row bg-white border shadow-sm rounded-lg xs:p-3 md:p-2 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] dark:text-gray-400 w-full justify-between items-center">
                  <span className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-gray-600">
                    <span className="text-xs font-medium text-white leading-none">AC</span>
                  </span>
                  <div className="basis-56 flex-col items-start ">
                    <p className="text-sm text-gray-900">Hotel AC by Marriot</p>
                    <p className="text-sm text-gray-500">Av 5 # 35 F Sur - 126</p>
                  </div>
                  <div className="basis-1/7">
                    <Bars2Icon className="w-5 h-5"></Bars2Icon>
                  </div>
                </div>
                <div className="cursor-grabbing flex flex-row bg-white border shadow-sm rounded-lg xs:p-3 md:p-2 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] dark:text-gray-400 w-full justify-between items-center">
                  <span className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-gray-600">
                    <span className="text-xs font-medium text-white leading-none">AC</span>
                  </span>
                  <div className="basis-56 flex-col items-start ">
                    <p className="text-sm text-gray-900">Hotel AC by Marriot</p>
                    <p className="text-sm text-gray-500">Av 5 # 35 F Sur - 126</p>
                  </div>
                  <div className="basis-1/7">
                    <Bars2Icon className="w-5 h-5"></Bars2Icon>
                  </div>
                </div>
                <div className="cursor-grabbing flex flex-row bg-white border shadow-sm rounded-lg xs:p-3 md:p-2 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] dark:text-gray-400 w-full justify-between items-center">
                  <span className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-gray-600">
                    <span className="text-xs font-medium text-white leading-none">AC</span>
                  </span>
                  <div className="basis-56 flex-col items-start ">
                    <p className="text-sm text-gray-900">Hotel AC by Marriot</p>
                    <p className="text-sm text-gray-500">Av 5 # 35 F Sur - 126</p>
                  </div>
                  <div className="basis-1/7">
                    <Bars2Icon className="w-5 h-5"></Bars2Icon>
                  </div>
                </div>
              </div>
            </Accordion>
          </AccordionGroup>
        </div>
        <div className="flex-auto lg:basis-1/3">
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
        </div>
      </div>
    </AdminLayout>
  );
};
