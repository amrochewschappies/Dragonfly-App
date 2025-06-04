import React from 'react';

function EventDetailsClone() {
  return (
    <div role="region" aria-label="Event details background image">
      <img
        src={process.env.PUBLIC_URL + "/Images/Event Details Backgroun.jpg"}
        alt="A scenic background with sand, used as the event details background"
        id="EventDetailsBG-Image"
      />
    </div>
  );
}

export default EventDetailsClone;
