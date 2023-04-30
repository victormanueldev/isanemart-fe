import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { AdminLayout } from '../../layouts';

const events = [{ title: 'Meeting', start: new Date() }];

export const CalendarPage = () => {
  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }

  return (
    <AdminLayout>
      <header>
        <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">
          Planning
        </h1>
        <p className="mt-2 text-md text-gray-800 dark:text-gray-400">
          This is a simple application layout with sidebar and header examples using Tailwind CSS.
        </p>
      </header>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={false}
        events={events}
        eventContent={renderEventContent}
      />
    </AdminLayout>
  );
};
