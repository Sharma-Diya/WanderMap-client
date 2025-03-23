import React, { useState, useEffect, useCallback } from 'react';
import Itinerary from '../../Components/Itinerary/Itinerary';
import CustomMap from '../../Components/CustomMap/CustomMap';
import './ItineraryPage.scss';

function ItineraryPage({setPageName}) {
  const [itineraryItems, setItineraryItems] = useState([]);

   useEffect(() => {
      setPageName("Itinerary");
    }, []);

  const handleItineraryUpdate = useCallback((items) => {
    console.log("ItineraryPage received itinerary update:", items ? items.length : 0, "items");
    setItineraryItems(items || []);
  }, []);

  return (
    <div className="main-container">
      <h1 className="main-title">City Explorer</h1>
      <div className="content-wrapper">
        <div className="itinerary-section">
          <Itinerary onItineraryUpdate={handleItineraryUpdate} />
        </div>
        <div className="map-section">
          <h2 className="section-title">Map View</h2>
          <CustomMap itineraryItems={itineraryItems} />
          <div className="map-debug">
            Points on map: {itineraryItems.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryPage;