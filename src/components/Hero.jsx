import React, { Fragment } from "react";

function Hero() {
  return (
    <Fragment>
      {/* <div id='hero-section'><span id='hero-section-1'>Dragon</span><span id='hero-section-2'>fly</span></div> */}
      <div id="container">
        <img src={process.env.PUBLIC_URL + "/Images/Background.jpg"} alt="" className='background-image'/>
        <div id='hero-section'><span id="animated-letter">G</span>ROVEEEE</div>
      </div>
    </Fragment>
  );
}

export default Hero;
