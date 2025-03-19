import "./CustomMap.scss";
import React, { useState } from "react";
import { APIProvider, Map as GoogleMap, AdvancedMarker } from "@vis.gl/react-google-maps"; // Use AdvancedMarker

const CustomMap = () => {
  const [markerLocation, setMarkerLocation] = useState({
    lat: 51.509865, // London Latitude
    lng: -0.118092, // London Longitude
  });

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}> 
      <div className="map-container">
      <gmp-map center="43.642967224121094,-79.38732147216797" zoom="14" map-id="DEMO_MAP_ID">
      <gmp-advanced-marker position="43.642967224121094,-79.38732147216797" title="My location"></gmp-advanced-marker>
    </gmp-map>
      </div>
    </APIProvider>
  );
};

export default CustomMap;
