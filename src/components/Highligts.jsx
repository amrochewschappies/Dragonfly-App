import { useEffect, useState } from "react";

function Highlights() {
  const [currentIndex, setCurrentIndex] = useState(0); 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3); 
    }, 3000); 

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div id="highlights-section">
      <h4>Highlights from Our Events!</h4>
      <p>
        We're excited to share some of the best moments from our events. Check
        out these incredible photos captured during our recent gatherings.
      </p>

      <div id="gallery">
        <img
          className={`images ${currentIndex === 0 ? "visible" : "invisible"}`}
          src={process.env.PUBLIC_URL + "/Images/Water Highlight 1.jpg"}
          alt="Highlight of previous parasailing event"
        />
        <img
          className={`images ${currentIndex === 1 ? "visible" : "invisible"}`}
          src={process.env.PUBLIC_URL + "/Images/Water Highlight 2.jpg"}
          alt="Highlight of previous yacht event"
        />
        <img
          className={`images ${currentIndex === 2 ? "visible" : "invisible"}`}
          src={process.env.PUBLIC_URL + "/Images/Water Highlight 3.jpg"}
          alt="Highlight of previous surfing event"
        />
      </div>

      <p>
        These snapshots show the energy, excitement, and unforgettable moments
        that make our events truly special. See what you've been missing and get
        inspired for the next one!
      </p>
    </div>
  );
}

export default Highlights;
