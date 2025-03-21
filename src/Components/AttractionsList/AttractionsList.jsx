import React, { useEffect, useState } from "react";
import Axios from "axios";
import ReactCardSlider from "react-card-slider-component";
// const ReactCardSlider = require('react-card-slider-component');
// import * as ReactCardSlider from 'react-card-slider-component';
import AttractionsCard from "../AttractionsCard/AttractionsCard";// Card component
import "./AttractionsList.scss"; // Styles

function AttractionsList({ cityId, viewType = "grid" }) {
  const [attractions, setAttractions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAttractions = async () => {
      try {
        const url = cityId 
          ? `http://localhost:3000/api/cities/${cityId}/attractions` 
          : "http://localhost:3000/api/attractions";
          
        const response = await Axios.get(url);
        setAttractions(response.data || []);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch attractions");
        setLoading(false);
      }
    };

    fetchAttractions();
  }, [cityId]);

  const getFullImageUrl = (imageUrl) => {
    if (!imageUrl) return null;
    return imageUrl.startsWith("http") ? imageUrl : `http://localhost:3000${imageUrl}`;
  };

  // Format slides for slider
  const slides = attractions.map((attraction) => ({
    image: attraction.images?.[0]?.url 
      ? getFullImageUrl(attraction.images[0].url) 
      : "https://via.placeholder.com/300x200?text=No+Image",
    title: attraction.name,
    description: attraction.category,
    clickEvent: () => alert(`Clicked on ${attraction.name}`),
  }));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="attractions-container">
      <h2 className="attractions-heading">Explore the Local Gems</h2>

      {viewType === "slider" ? (
        <ReactCardSlider 
          slides={slides}
          sliderWidth={100}
          useGPURender={true}
          offset={2}
          showArrows={true}
          autoSlide={true}
          autoSlideTime={2000}
        />
      ) : (
        <div className="attractions-grid">
          {attractions.map((attraction) => (
            <AttractionsCard key={attraction.id} attraction={attraction} view="attractions" />
          ))}
        </div>
      )}
    </div>
  );
}

export default AttractionsList;
