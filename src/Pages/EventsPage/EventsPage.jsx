import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import EventFilter from "../../Components/EventFilter/EventFilter";
import EventList from "../../Components/EventList/EventList";
import EventForm from "../../Components/EventForm/EventForm";
import "./EventsPage.css";

function EventsPage() {
  const categories = [
    "Religious",
    "Social",
    "Charity",
    "Educational",
    "Cultural",
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");

  const [events, setEvents] = useState([
    {
      title: "Interfaith Prayer Service",
      date: "2025-04-15",
      location: "Community Center",
      category: "Religious",
      description:
        "Join us for an evening of prayer and reflection with leaders from various faith traditions.",
    },
    {
      title: "Community Picnic",
      date: "2025-05-10",
      location: "City Park",
      category: "Social",
      description:
        "Bring your family and friends for a day of fun, food, and fellowship.",
    },
    {
      title: "Food Drive",
      date: "2025-04-22",
      location: "Local Food Bank",
      category: "Charity",
      description:
        "Help collect and distribute food to families in need in our community.",
    },
  ]);

  const handleAddEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const filteredEvents =
    selectedCategory === "all"
      ? events
      : events.filter((event) => event.category === selectedCategory);

  return (
    <div className="events-page">
      <Header />
      <div className="events-container">
        <h1>Community Events</h1>
        <div className="events-content">
          <div className="events-sidebar">
            <EventFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
            <EventForm categories={categories} onAddEvent={handleAddEvent} />
          </div>
          <div className="events-main">
            <EventList events={filteredEvents} />
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2025 Communion App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default EventsPage;
