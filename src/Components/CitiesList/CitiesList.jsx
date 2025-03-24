import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CitiesList.scss";
import CitiesCardSlider from "../CitiesSlider/CitiesSlider";

function CitiesList() {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

  useEffect(() => {
    fetch(`${BACKEND_URL}/api/cities`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch cities. Please try again later.");
        }
        return response.json();
      })
      .then((data) => {
        setCities(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleCityClick = (cityId) => {
    navigate(`/details/${cityId}`);
  };

  if (loading) {
    return (
      <div className="loading">
        <span>Loading Cities...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <p>Error: {error}</p>
        <p>Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="cities">
      <h3 className="cities-heading">Cities We Love</h3>
      <div className="cities-list">
        <CitiesCardSlider cities={cities} onCityClick={handleCityClick} />
      </div>
    </div>
  );
}

export default CitiesList;
