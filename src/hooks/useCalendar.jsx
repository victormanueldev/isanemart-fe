import { useState } from 'react';

export const useCalendar = () => {
  const [events, setEvents] = useState([]);

  const onSelect = (selectInfo, title) => {
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: Math.random(2),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  const onEventClick = (clickInfo) => {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  };

  const onEvents = (e) => {
    setEvents([...events, e]);
  };

  const renderEventContent = (eventInfo) => {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  };

  return {
    onSelect,
    onEventClick,
    onEvents,
    renderEventContent,
  };
};
