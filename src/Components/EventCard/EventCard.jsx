import React from "react";
import "./EventCard.css";

function EventCard({ event }) {
  return (
    <div className="event-card">
      <h3>{event.title}</h3>
      <div className="event-details">
        <p className="event-date">
          <strong>Date:</strong> {event.date}
        </p>
        <p className="event-location">
          <strong>Location:</strong> {event.location}
        </p>
        <p className="event-category">
          <strong>Category:</strong> {event.category}
        </p>
      </div>
      <p className="event-description">{event.description}</p>
    </div>
  );
}

export default EventCard;
