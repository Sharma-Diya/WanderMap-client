import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

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
      <h2>{city.name}</h2>
      
      {/* Display the featured image if available */}
      {city.images.length > 0 && (
        <img src={city.images[0].url} alt={city.images[0].alt_text} />
      )}
      
      <p>{city.description}</p>
      <p>Province: {city.province}</p>
      <p>Latitude: {city.latitude}</p>
      <p>Longitude: {city.longitude}</p>

      <div className="season-selection">
          <button
          //  onClick={() => handleSeasonChange("summer")}
           >Summer</button>
          <button 
          // onClick={() => handleSeasonChange("winter")}
          >Winter</button>
        </div>

      <h3>Attractions</h3>
      <ul>
        {city.attractions && city.attractions.length > 0 ? (
          city.attractions.map((attraction) => (
            <li key={attraction.id}>
              <strong>{attraction.name}</strong>
              <p>{attraction.description}</p>
              <p><em>Category: {attraction.category}</em></p>
              <p>Address: {attraction.address}</p>
            </li>
          ))
        ) : (
          <p>No attractions available for this city.</p>
        )}
      </ul>
      
      <Footer />
    </div>
  );
}

export default Details;
