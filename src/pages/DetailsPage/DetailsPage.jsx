import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./DetailsPage.scss";

function Details({ setPageName }) {
  const { id } = useParams(); // Get city ID from URL
  const [city, setCity] = useState(null); // Store city details
  const [loading, setLoading] = useState(true); // Handle loading state
  const [error, setError] = useState(null); // Handle error state

  useEffect(() => {
    setPageName("details");

    // Fetch city details from the API
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
      <Navbar />

      <div className="city-details"> {/* Block: city-details */}

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
        <h2 className="city-details__name">{city.name}</h2> {/* Element: name */}

      

        <p className="city-details__description">{city.description}</p> {/* Element: description */}
        <p className="city-details__province">Province: {city.province}</p> {/* Element: province */}
        {/* <p className="city-details__latitude">Latitude: {city.latitude}</p>
        <p className="city-details__longitude">Longitude: {city.longitude}</p> */}
        </div>
      </div>

      <div className="attractions-section"> {/* Block: attractions-section */}
        <h3 className="attractions-section__title">Attractions</h3> {/* Element: title */}
        <ul className="attractions-item"> {/* Block: attractions-list */}
          {city.attractions && city.attractions.length > 0 ? (
            city.attractions.map((attraction) => (
              <li key={attraction.id} className="attraction-box"> {/* Block: attraction-box */}
                <h2 className="attraction-box__name">{attraction.name}</h2> {/* Element: name */}

                {/* Display the featured image if available */}
                {attraction.images && attraction.images.length > 0 && (
                  <img
                    className="attraction-box__image" // Element: image
                    src={attraction.images[0].url}
                    alt={attraction.images[0].alt_text}
                  />
                )}

                <p className="attraction-box__description">{attraction.description}</p> {/* Element: description */}
                <p className="attraction-box__category">Category: {attraction.category}</p> {/* Element: category */}
                <p className="attraction-box__address">Address: {attraction.address}</p> {/* Element: address */}
              </li>
            ))
          ) : (
            <p className="attractions-list__empty">No attractions available for this city.</p>
          )}
        </ul>
        </div>

      <Footer />
    </div>
  );
}

export default Details;
