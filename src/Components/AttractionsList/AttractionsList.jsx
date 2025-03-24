import React, { useEffect, useState } from "react";
import Axios from "axios";
import ReactCardSlider from "react-card-slider-component";
import AttractionsCard from "../AttractionsCard/AttractionsCard"; 
import "./AttractionsList.scss"; 

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL|| "http://localhost:8000";

function AttractionsList({ cityId, viewType = "grid" }) {
  const [attractions, setAttractions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAttractions = async () => {
      try {
        const url = cityId 
          ? `${BACKEND_URL}/api/cities/${cityId}/attractions` 
          : `${BACKEND_URL}/api/attractions`;
        
        const response = await Axios.get(url);
        setAttractions(response.data || []);
      } catch (err) {
        console.error("Error fetching attractions:", err.response?.data || err.message);
        setError("Failed to fetch attractions. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchAttractions();
  }, [cityId]);

  const getFullImageUrl = (imageUrl) => {
    if (!imageUrl) return "https://via.placeholder.com/300x200?text=No+Image";
    return imageUrl.startsWith("http") ? imageUrl : `${BACKEND_URL}${imageUrl}`;
  };

  const slides = attractions.map((attraction) => ({
    image: getFullImageUrl(attraction.images?.[0]?.url),
    title: attraction.name,
    description: attraction.category,
    clickEvent: () => alert(`Clicked on ${attraction.name}`),
  }));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="attractions-container">
      <h2 className="attractions-heading">Explore the Local Gems</h2>

      {viewType === "slider" && slides.length > 0 ? (
        <ReactCardSlider 
          slides={slides}
          sliderWidth={100}
          useGPURender={true}
          offset={2}
          showArrows={true}
          autoSlide={true}
          autoSlideTime={2000}
        />
      ) : viewType === "slider" ? (
        <p>No attractions available.</p>
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
