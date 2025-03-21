import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AttractionsCard from "../../Components/AttractionsCard/AttractionsCard";
import "./DetailsPage.scss";

function Details({ setPageName }) {
  const { id } = useParams(); // Get city ID from URL
  const [city, setCity] = useState(null); // Store city details
  const [loading, setLoading] = useState(true); // Handle loading state
  const [error, setError] = useState(null); // Handle error state

  useEffect(() => {
    setPageName("details");

    fetch(`http://localhost:3000/api/cities/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("City not found");
        }
        return response.json();
      })
      .then((data) => {
        setCity(data); // Set city details in state
        console.log("City Data:", data); // Log the city data to verify it's being set
        setLoading(false);
      })
      .catch((error) => {
        setError(error); // Handle error if fetching fails
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!city) {
    return <div>City not found</div>;
  }

  return (
    <div className="details">
      <div className="city-details">
        {" "}
        {/* Block: city-details */}
        <div className="">
          {/* Display the featured image if available */}
          {city.images.length > 0 && (
            <img
              className="city-details__image" // Element: image
              src={city.images[0].url}
              alt={city.images[0].alt_text}
            />
          )}
        </div>
        <div className="city-details__info">
          <h2 className="city-details__name">{city.name}</h2>{" "}
          {/* Element: name */}
          <p className="city-details__description">{city.description}</p>{" "}
          {/* Element: description */}
          <p className="city-details__province">
            Province: {city.province}
          </p>{" "}
          {/* Element: province */}
          {/* <p className="city-details__latitude">Latitude: {city.latitude}</p>
        <p className="city-details__longitude">Longitude: {city.longitude}</p> */}
        </div>
      </div>

      <ul className="attractions-item">
          {/* Block: attractions-list */}
          {city.attractions && city.attractions.length > 0 ? (
            city.attractions.map((attraction) => (
              <AttractionsCard key={attraction.id} attraction={attraction} />
            ))
          ) : (
            <p className="attractions-list__empty">
              No attractions available for this city.
            </p>
          )}
        </ul>
    </div>
  );
}

export default Details;
