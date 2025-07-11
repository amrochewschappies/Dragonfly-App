import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EventData from "../data/EventDataHandler";
import { FiltersContex } from "../context/FiltersContext";

function EventCards() {
  const { isFiltering, setIsFiltering, filterType, setFilterType } = useContext(FiltersContex);
  const navigate = useNavigate();

  const [filteredEvents, setFilteredEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 6;

  const OnViewClick = (eventId, e) => {
    e.preventDefault();
    setIsFiltering(false);
    setFilterType("none");
    navigate("/event/" + eventId);
  };

  useEffect(() => {
    let updatedEvents = EventData;

    if (isFiltering) {
      updatedEvents = updatedEvents.filter((event) => event.genre === filterType);
    }

    setFilteredEvents(updatedEvents);
    setCurrentPage(1);
  }, [isFiltering, filterType]);

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);

  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

  return (
    <nav id="parent-container" aria-label="Event navigation">
      <ul className="events-container">
        {currentEvents.map((event) => (
          <li
            key={event.id}
            className="event-container"
            role="button"
            tabIndex={0}
            onClick={(e) => OnViewClick(event.id, e)}
            onKeyPress={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                OnViewClick(event.id, e);
              }
            }}
            aria-label={`View details for ${event.name}`}
          >
            <div className="event-card">
              <img
                src={event.image}
                className="event-image"
                alt={`Image for event ${event.name}`}
              />
              <p id="event-name">{event.name}</p>
              <p id="event-date">{event.date}</p>
            </div>
            <p className="responsiveness-hide">{event.description}</p>
          </li>
        ))}
      </ul>

      <ul className="pagination-buttons" aria-label="Pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <li key={i + 1}>
            <button
              onClick={() => {
                setCurrentPage(i + 1);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={currentPage === i + 1 ? "active-page" : ""}
              aria-label={`Go to page ${i + 1}`}
              aria-current={currentPage === i + 1 ? "page" : undefined}
            >
              {i + 1}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default EventCards;
