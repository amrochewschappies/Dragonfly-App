import React from "react";
import { useNavigate } from "react-router-dom";

function EventsCTA() {
  const navigate = useNavigate();

  const SeeAllEventsClick = (event) => {
    event.preventDefault();
    navigate("/Events");
  };

  return (
    <section
      id="eventsCTA-section"
      className="glass-background"
      role="region"
      aria-labelledby="eventsCTA-heading"
    >
      <div>
        <h4 id="eventsCTA-heading">Explore all events</h4>
        <p>
          Want to see what's coming up? Browse through all the exciting events
          happening near you and beyond. There's something happening for everyone!
        </p>
        <button
          onClick={SeeAllEventsClick}
          id="cta-button"
          aria-label="See all upcoming events"
        >
          See All
        </button>
      </div>
    </section>
  );
}

export default EventsCTA;
