import { useEffect, useState } from "react";

function Highlights() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const descriptions = [
    "Highlight of previous parasailing event",
    "Highlight of previous yacht event",
    "Highlight of previous surfing event",
  ];

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
          alt={descriptions[0]}
          aria-hidden={currentIndex !== 0}
        />
        <img
          className={`images ${currentIndex === 1 ? "visible" : "invisible"}`}
          src={process.env.PUBLIC_URL + "/Images/Water Highlight 2.jpg"}
          alt={descriptions[1]}
          aria-hidden={currentIndex !== 1}
        />
        <img
          className={`images ${currentIndex === 2 ? "visible" : "invisible"}`}
          src={process.env.PUBLIC_URL + "/Images/Water Highlight 3.jpg"}
          alt={descriptions[2]}
          aria-hidden={currentIndex !== 2}
        />
      </div>

      <div
        aria-live="polite"
        aria-atomic="true"
        style={{ position: "absolute", left: "-9999px", height: "1px", width: "1px", overflow: "hidden" }}
      >
        {descriptions[currentIndex]}
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
