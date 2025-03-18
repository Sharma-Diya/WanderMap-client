import { useEffect, useState } from "react";
import CitiesScroll from "../CitiesScroll/CitiesScroll";
import Search from "../Search/Search";  // Import Search
import "./CitiesList.scss";

function CitiesList() {
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/cities")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCities(data);
        setFilteredCities(data);  // Initially, set filtered cities to all cities
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="cities">
      <h3 className="cities-heading"> Popular Cities</h3>
      <Search cities={cities} setFilteredCities={setFilteredCities} />
      <div className="cities-list">
        <CitiesScroll cities={filteredCities} />
      </div>
    </div>
  );
}

export default CitiesList;
