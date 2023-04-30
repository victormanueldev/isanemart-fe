import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { AdminLayout } from '../../layouts';
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
      <div className="flex xs:flex-col md:flex-row">
        <div className="flex-auto bg-green-300">1</div>
        <div className="flex-auto lg:basis-1/3">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
            }}
            weekends={true}
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
