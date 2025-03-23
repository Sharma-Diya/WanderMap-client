// import "./CustomMap.scss";
// import React, { useEffect, useState } from "react";
// import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";

// const CustomMap = ({ itineraryItems = [] }) => {
//   // Default to Toronto coordinates
//   const defaultCenter = {
//     lat: 43.651070,
//     lng: -79.347015,
//   };
  
//   const [mapCenter, setMapCenter] = useState(defaultCenter);
//   const [zoom, setZoom] = useState(12);
  
//   // Update map center when itinerary changes
//   useEffect(() => {
//     if (itineraryItems && itineraryItems.length > 0) {
//       setMapCenter({
//         lat: parseFloat(itineraryItems[0].latitude) || defaultCenter.lat,
//         lng: parseFloat(itineraryItems[0].longitude) || defaultCenter.lng,
//       });
//       setZoom(13);
//       console.log("Map centered on:", itineraryItems[0].activity, {
//         lat: parseFloat(itineraryItems[0].latitude),
//         lng: parseFloat(itineraryItems[0].longitude)
//       });
//     } else {
//       setMapCenter(defaultCenter);
//       setZoom(12);
//       console.log("No itinerary items, using default center");
//     }
//   }, [itineraryItems]);
  
//   console.log("Map render with center:", mapCenter, "and zoom:", zoom);
//   console.log("Itinerary items:", itineraryItems.length);
  
//   return (
//     <div className="map-container">
//       <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
//         <Map
//           defaultCenter={defaultCenter}
//           center={mapCenter}
//           zoom={zoom}
//           mapId={import.meta.env.VITE_MAP_ID}
//           style={{ width: '100%', height: '400px' }}
//         >
//           {/* Default marker when no itinerary */}
//           {(!itineraryItems || itineraryItems.length === 0) && (
//             <AdvancedMarker position={defaultCenter} />
//           )}
          
//           {/* Markers for itinerary items */}
//           {itineraryItems && itineraryItems.length > 0 &&
//             itineraryItems.map((item, index) => {
//               const position = {
//                 lat: parseFloat(item.latitude) || defaultCenter.lat,
//                 lng: parseFloat(item.longitude) || defaultCenter.lng
//               };
              
//               console.log(`Marker ${index + 1}:`, item.activity, position);
              
//               return (
//                 <AdvancedMarker 
//                   key={index}
//                   position={position}
//                   title={item.activity}
//                 />
//               );
//             })
//           }
//         </Map>
//       </APIProvider>
//     </div>
//   );
// };

// export default CustomMap;

import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const center = { lat: 43.643501, lng: -79.378502 };  // Coordinates

const MyMapComponent = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,  // Accessing the API key from environment variables
  });

  if (loadError) {
    return <div>Error loading map: {loadError.message}</div>;
  }

  if (!isLoaded) {
    return <div>Loading map...</div>;
  }

  return (
    <GoogleMap
      center={center}
      zoom={15}  // Adjust zoom level as needed
      mapContainerStyle={{ width: '100%', height: '400px' }}
    >
      <Marker position={center} />
    </GoogleMap>
  );
};

export default MyMapComponent;
