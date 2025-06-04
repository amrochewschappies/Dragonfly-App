import React, { useContext, useEffect } from "react";
import EventData from "../data/EventDataHandler";
import { EventOTDContext } from "../context/EventOTDContext";
import { useNavigate } from "react-router-dom";

function EventOTD() {
  const { EventOTDIndex, updateEventOTD } = useContext(EventOTDContext);
  const navigate = useNavigate();

  const OnViewClick = (eventId, e) => {
    e.preventDefault();
    navigate("/event/" + eventId);
  };

  useEffect(() => {
    if (EventOTDIndex == null) {
      const randomIndex = Math.floor(Math.random() * EventData.length);
      updateEventOTD(randomIndex);
    }
  }, [EventOTDIndex, updateEventOTD]);

  if (EventOTDIndex === null) {
    return <p>Loading...</p>;
  }

  const event = EventData[EventOTDIndex];

  return (
    <section
      id="eventOTD-section"
      className="glass-"
      role="region"
      aria-labelledby="eventOTD-heading"
    >
      <div
        id="first-part"
        role="button"
        tabIndex={0}
        onClick={(e) => OnViewClick(event.id, e)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            OnViewClick(event.id, e);
          }
        }}
        aria-label={`View details for event of the day: ${event.name}`}
      >
        <h4 id="eventOTD-heading">Explore our featured event of the day!</h4>
        <img
          id="eventOTD-image"
          src={event.image}
          alt={`Image for event of the day: ${event.name}`}
        />
        <h5>{event.name}</h5>
        <p>{event.date}</p>
      </div>
      <p className="responsiveness-hide eventOTD-text">{event.description}</p>
    </section>
  );
}

export default EventOTD;
