import { useState, useRef } from "react";
import CitiesCard from "../CitiesCard/CitiesCard.jsx";

import "./CitiesScroll.scss";

const CitiesScroll = ({ cities }) => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Number of pixels to scroll
      scrollContainerRef.current.scrollLeft += direction * scrollAmount;
    }
  };

  return (
    <div className="cities-scroll-container">
      <button className="scroll-btn left" onClick={() => scroll(-1)}>
        &lt;
      </button>
      <div className="cities-scroll" ref={scrollContainerRef}>
        {cities.map((city) => (
          <CitiesCard key={city.id} city={city} />
        ))}
      </div>
      <button className="scroll-btn right" onClick={() => scroll(1)}>
        &gt;
      </button>
    </div>
  );
};

export default CitiesScroll;
