import React from "react";
import EventCard from "../EventCard/EventCard";
import "./EventList.css";

function EventList({ events }) {
  return (
    <div className="event-list">
      {events.length > 0 ? (
        events.map((event, index) => <EventCard key={index} event={event} />)
      ) : (
        <p className="no-events">
          No events found. Please try a different category or add a new event.
        </p>
      )}
    </div>
  );
}

export default EventList;
