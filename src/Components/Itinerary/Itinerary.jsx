import React, { useState, useEffect, useCallback } from 'react';
import CitySelect from '../CitySelect/CitySelect';
import SeasonSelect from '../SeasonSelect/SeasonSelect';
import ItineraryItem from '../ItineraryItem/ItineraryItem';
import './Itinerary.scss'; // Create this file for styling

const Itinerary = ({ onItineraryUpdate }) => {
    const [selectedCityId, setSelectedCityId] = useState(null);
    const [selectedCityName, setSelectedCityName] = useState('');
    const [selectedSeason, setSelectedSeason] = useState(null);
    const [itinerary, setItinerary] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [cities, setCities] = useState([]);
    const [seasons] = useState(['Summer', 'Winter']);
  
    // Memoize the update function to prevent it from changing on every render
    const updateParent = useCallback((items) => {
      if (typeof onItineraryUpdate === 'function') {
        onItineraryUpdate(items);
      }
    }, [onItineraryUpdate]);
  
    // Fetch cities from the database
    useEffect(() => {
      const fetchCities = async () => {
        try {
          const response = await fetch("http://localhost:3000/api/cities");
          if (!response.ok) throw new Error("Failed to fetch cities");
          const data = await response.json();
          setCities(data);
        } catch (error) {
          console.error("Error fetching cities:", error);
          setError(error);
        }
      };
  
      fetchCities();
    }, []);
  
    // Fetch itinerary based on selected city and season
    useEffect(() => {
      // Only proceed if we have both a city and season selected
      if (!selectedCityId || !selectedSeason) {
        return;
      }
      
      const fetchItinerary = async () => {
        setLoading(true);
        setError(null);
        
        try {
          const apiUrl = `http://localhost:3000/api/itineraries/${selectedCityId}/${selectedSeason.toLowerCase()}`;
          console.log("Fetching from:", apiUrl);
          
          const response = await fetch(apiUrl);
          if (!response.ok) throw new Error(`Failed to fetch itinerary: ${response.status}`);
          const data = await response.json();
          
          console.log("Received data:", data);

          if (Array.isArray(data)) {
            const items = data.map((item) => ({
              id: item.id,
              time: item.time,
              activity: item.activity,
              description: item.description,
              latitude: parseFloat(item.latitude),
              longitude: parseFloat(item.longitude),
              order: item.order || 0
            }));
            
            // Sort by order if available
            items.sort((a, b) => a.order - b.order);
            
            setItinerary({
              name: selectedCityName,
              items
            });
            
            // Update parent with items
            updateParent(items);
          } else {
            throw new Error("Invalid itinerary structure");
          }
        } catch (error) {
          console.error("Error fetching itinerary:", error);
          setError(error);
          // Clear itinerary on error
          setItinerary(null);
          updateParent([]);
        } finally {
          setLoading(false);
        }
      };

      fetchItinerary();
    }, [selectedCityId, selectedSeason, selectedCityName, updateParent]);
  
    const handleCityChange = (e) => {
      const cityId = e.target.value;
      const cityObj = cities.find((city) => city.id === parseInt(cityId));
      const cityName = cityObj ? cityObj.name : '';
      
      setSelectedCityId(cityId);
      setSelectedCityName(cityName);
      
      // Clear itinerary if city changes and no season selected
      if (!selectedSeason) {
        setItinerary(null);
        updateParent([]);
      }
    };
  
    const handleSeasonChange = (e) => {
      setSelectedSeason(e.target.value);
      // Clear itinerary if season changes and no city selected
      if (!selectedCityId) {
        setItinerary(null);
        updateParent([]);
      }
    };
  
    return (
      <div className="itinerary-component">
        <h2 className="section-title">Plan Your Trip</h2>
        
        <div className="selector-container">
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
        </div>
  
        <div className="itinerary-content">
          {loading && <div className="status-message loading">Loading itinerary...</div>}
          {error && <div className="status-message error">Error: {error.message}</div>}
          
          {itinerary && itinerary.items && itinerary.items.length > 0 ? (
            <div className="itinerary-container">
              <h3 className="itinerary-title">{selectedCityName} - {selectedSeason} Itinerary</h3>
              {itinerary.items.map((item) => (
                <ItineraryItem key={item.id} {...item} />
              ))}
              
              <div className="button-container">
                <button className="action-button">Add Activity</button>
                <button className="action-button primary">Save Plan</button>
              </div>
            </div>
          ) : !loading && (
            <div className="status-message empty">
              {selectedCityId && selectedSeason 
                ? "No itinerary available for this selection." 
                : "Please select a city and season to view the itinerary."}
            </div>
          )}
        </div>
      </div>
    );
  };
  
export default Itinerary;