import React, { useContext, Fragment } from "react";
import EventData from "../data/EventDataHandler";
import { SearchContext } from "../context/SearchContext";
import { useNavigate } from "react-router-dom";
import { FiltersContex } from "../context/FiltersContext";
import "./SearchResults.css";

function SearchResults() {
  const { searchInput } = useContext(SearchContext);
  const { setIsFiltering, setFilterType } = useContext(FiltersContex);
  const navigate = useNavigate();

  let updatedEvents = EventData.filter(
    (event) =>
      event.name &&
      typeof event.name === "string" &&
      event.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const OnViewClick = (eventId, e) => {
    e.preventDefault();
    setIsFiltering(false);
    setFilterType("none");
    navigate("/event/" + eventId);
  };

  const OnReturnClick = () => {
    navigate("/events");
  };

  // keyboard handler for li to make it accessible by keyboard
  const handleKeyDown = (event, eventId) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      OnViewClick(eventId, event);
    }
  };

  return (
    <section id="parent-container" aria-label="Search results">
      {updatedEvents.length > 0 ? (
        <ul className="events-containers">
          {updatedEvents.map((event) => (
            <li
              key={event.name}
              className="event-carddd"
              role="button"
              tabIndex={0}
              onClick={(e) => OnViewClick(EventData.indexOf(event), e)}
              onKeyDown={(e) => handleKeyDown(e, EventData.indexOf(event))}
              aria-label={`View details for ${event.name}`}
            >
              <div>
                <img
                  src={event.image}
                  className="event-iimage"
                  alt={`Image of ${event.name}`}
                />
                <p className="event-name">{event.name}</p>
                <p className="event-date">{event.date}</p>
              </div>
              <p>{event.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <Fragment>
          <p
            style={{ textAlign: "center", padding: "2rem" }}
            role="alert"
            aria-live="polite"
          >
            No results found for "<strong>{searchInput}</strong>"
          </p>
          <button className="return-button" onClick={OnReturnClick}>
            Return
          </button>
        </Fragment>
      )}
    </section>
  );
}

export default SearchResults;
