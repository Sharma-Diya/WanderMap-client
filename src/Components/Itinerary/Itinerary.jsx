import React, { useState, useEffect } from 'react';
import CitySelect from '../CitySelect/CitySelect';
import SeasonSelect from '../SeasonSelect/SeasonSelect';
import ItineraryItem from '../ItineraryItem/ItineraryItem';

const Itinerary = () => {
    const [selectedCityId, setSelectedCityId] = useState(null);
    const [selectedCityName, setSelectedCityName] = useState('');
    const [selectedSeason, setSelectedSeason] = useState(null);
    const [itinerary, setItinerary] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [cities, setCities] = useState([]);
    const [seasons] = useState(['Summer', 'Winter']);
  
    // Fetch cities from the database
    useEffect(() => {
      const fetchCities = async () => {
        try {
          const response = await fetch("http://localhost:3000/api/cities");
          if (!response.ok) throw new Error("Failed to fetch cities");
          const data = await response.json();
          setCities(data);
        } catch (error) {
          setError(error);
        }
      };
  
      fetchCities();
    }, []);
  
    // Fetch itinerary based on selected city and season
    useEffect(() => {
      const fetchItinerary = async () => {
        if (selectedCityId && selectedSeason) {
          setLoading(true);
          setError(null);
          setItinerary({ items: [] });
  
          try {
            const apiUrl = `http://localhost:3000/api/itineraries/${selectedCityId}/${selectedSeason}`;
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error(`Failed to fetch itinerary: ${response.status}`);
            const data = await response.json();
  
            if (Array.isArray(data)) {
              setItinerary({
                name: selectedCityName,
                items: data.map((item) => ({
                  id: item.id,
                  time: item.time,
                  activity: item.activity,
                  description: item.description,
                })),
              });
            } else {
              throw new Error("Invalid itinerary structure");
            }
          } catch (error) {
            setError(error);
          } finally {
            setLoading(false);
          }
        }
      };
  
      fetchItinerary();
    }, [selectedCityId, selectedSeason, selectedCityName]);
  
    const handleCityChange = (e) => {
      const cityId = e.target.value;
      const cityName = cities.find((city) => city.id === cityId)?.name || '';
      setSelectedCityId(cityId);
      setSelectedCityName(cityName);
    };
  
    const handleSeasonChange = (e) => setSelectedSeason(e.target.value);
  
    return (
      <div>
        <h1>City Itinerary App</h1>
        <CitySelect
          cities={cities}
          selectedCityId={selectedCityId}
          onCityChange={handleCityChange}
        />
        <SeasonSelect
          seasons={seasons}
          selectedSeason={selectedSeason}
          onSeasonChange={handleSeasonChange}
        />
  
        {/* Conditionally render based on states */}
        {loading && <div>Loading itinerary...</div>}
        {error && <div>Error: {error.message}</div>}
        {itinerary && (
          <div className="itinerary-container">
            <h3>{itinerary.name}</h3>
            {itinerary.items.map((item) => (
              <ItineraryItem key={item.id} {...item} />
            ))}
            <button>Add Activity</button>
            <button>Save Plan</button>
          </div>
        )}
        {!loading && !error && !itinerary && <div>Please select a city and season to view the itinerary.</div>}
      </div>
    );
  };
  
export default Itinerary;
