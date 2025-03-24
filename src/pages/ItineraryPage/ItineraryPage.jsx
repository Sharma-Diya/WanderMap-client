import React, { useState, useEffect, useCallback } from 'react';
import Itinerary from '../../components/Itinerary/Itinerary';
import CustomMap from '../../components/CustomMap/CustomMap';
import './ItineraryPage.scss';

function ItineraryPage({ setPageName }) {
  const [itineraryItems, setItineraryItems] = useState([]);

  useEffect(() => {
    setPageName("Itinerary");
  }, [setPageName]);

  const handleItineraryUpdate = useCallback((items) => {
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
            {itineraryItems.length > 0 ? (
              <>There are {itineraryItems.length} points on the map.</>
            ) : (
              <>No points on the map yet.</>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItineraryPage;
