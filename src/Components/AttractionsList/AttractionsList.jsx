import React, { useEffect, useState, useRef } from "react";
import Axios from "axios";
import AttractionsCard from "../AttractionsCard/AttractionsCard.jsx";
import "./AttractionsList.scss";

function AttractionsList() {
  const [attractions, setAttractions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const scrollContainerRef = useRef(null);

  // Fetch attractions data from API when component mounts
  useEffect(() => {
    const fetchAttractions = async () => {
      try {
        const response = await Axios.get("http://localhost:3000/api/attractions");
        setAttractions(response.data); // Set the fetched data to state
        setLoading(false); // Set loading to false
      } catch (err) {
        setError("Failed to fetch attractions");
        setLoading(false);
      }
    };

    fetchAttractions();
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Number of pixels to scroll
      scrollContainerRef.current.scrollLeft += direction * scrollAmount;
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="attractions-list">
      <h2>Top Attractions</h2>
      <button className="scroll-btn left" onClick={() => scroll(-1)}>
        &lt;
      </button>
      <div className="attractions-cards" ref={scrollContainerRef}>
        {attractions.map((attraction) => (
          <AttractionsCard key={attraction.id} attraction={attraction} />
        ))}
      </div>
      <button className="scroll-btn right" onClick={() => scroll(1)}>
        &gt;
      </button>
    </div>
  );
}

export default AttractionsList;
