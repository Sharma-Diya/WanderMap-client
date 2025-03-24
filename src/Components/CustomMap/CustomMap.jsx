import "./CustomMap.scss";
import React, { useEffect, useState } from "react";
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";

const CustomMap = ({ itineraryItems = [] }) => {
  const defaultCenter = {
    lat: 43.65107,
    lng: -79.347015,
  };

  const [mapCenter, setMapCenter] = useState(defaultCenter);
  const [zoom, setZoom] = useState(12);

  useEffect(() => {
    if (itineraryItems && itineraryItems.length > 0) {
      const firstItem = itineraryItems[0];
      const lat = parseFloat(firstItem.latitude);
      const lng = parseFloat(firstItem.longitude);

      if (!isNaN(lat) && !isNaN(lng)) {
        setMapCenter({ lat, lng });
        setZoom(13);
      } else {
        setMapCenter(defaultCenter);
        setZoom(12);
      }
    } else {
      setMapCenter(defaultCenter);
      setZoom(12);
    }
  }, [itineraryItems]);

  return (
    <div className="map-container">
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <Map
          defaultCenter={defaultCenter}
          center={mapCenter}
          zoom={zoom}
          mapId={import.meta.env.VITE_MAP_ID}
          style={{ width: "100%", height: "400px" }}
        >
          {(!itineraryItems || itineraryItems.length === 0) && (
            <AdvancedMarker position={defaultCenter} />
          )}

          {itineraryItems &&
            itineraryItems.length > 0 &&
            itineraryItems.map((item, index) => {
              const lat = parseFloat(item.latitude);
              const lng = parseFloat(item.longitude);
              const position = {
                lat: !isNaN(lat) ? lat : defaultCenter.lat,
                lng: !isNaN(lng) ? lng : defaultCenter.lng,
              };

              return (
                <AdvancedMarker
                  key={index}
                  position={position}
                  title={item.activity}
                />
              );
            })}
        </Map>
      </APIProvider>
    </div>
  );
};

export default CustomMap;
