import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AttractionsCard from "../../components/AttractionsCard/AttractionsCard";
import "./DetailsPage.scss";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

function Details({ setPageName }) {
  const { id } = useParams(); 
  const [city, setCity] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    setPageName("details");

    const fetchCityData = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/api/cities/${id}`);
        if (!response.ok) {
          throw new Error("City not found");
        }
        const data = await response.json();
        setCity(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchCityData();
  }, [id, setPageName]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!city) {
    return <div>City not found</div>;
  }

  const getFullImageUrl = (imageUrl) => {
    if (!imageUrl) return null;
    return imageUrl.startsWith('http') ? imageUrl : `${BACKEND_URL}${imageUrl}`;
  };

  return (
    <div className="details">
      <div className="city-details">
        <div>
          {city.images && city.images.length > 0 && (
            <img
              className="city-details__image"
              src={getFullImageUrl(city.images[0].url)}
              alt={city.images[0].alt_text || "City Image"}
            />
          )}
        </div>
        <div className="city-details__info">
          <h2 className="city-details__name">{city.name}</h2>
          <p className="city-details__description">{city.description}</p>
          <p className="city-details__province">
            Province: {city.province}
          </p>
        </div>
      </div>

      <div className="attractions-item">
        {city.attractions && city.attractions.length > 0 ? (
          city.attractions.map((attraction) => (
            <AttractionsCard key={attraction.id} attraction={attraction} />
          ))
        ) : (
          <p className="attractions-list__empty">
            No attractions available for this city.
          </p>
        )}
      </div>
    </div>
  );
}

export default Details;
