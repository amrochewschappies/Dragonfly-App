import React, { Fragment } from "react";

function Hero() {
  return (
    <Fragment>
      <div id="container" role="banner" aria-label="Hero section">
        <img
          src={process.env.PUBLIC_URL + "/Images/Background.jpg"}
          alt=""
          aria-hidden="true"
          className="background-image"
        />
        <div id="hero-section">
          <span id="animated-letter">G</span>ROVEEEE
        </div>
      </div>
    </Fragment>
  );
}

export default Hero;

