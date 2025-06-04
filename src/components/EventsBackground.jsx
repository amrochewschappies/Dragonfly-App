import React from 'react';

function EventsBackground() {
  return (
    <div aria-hidden="true">
      <img
        src={process.env.PUBLIC_URL + "/Images/Events Background.jpg"}
        alt=""
        id="eventsBG-image"
      />
    </div>
  );
}

export default EventsBackground;
