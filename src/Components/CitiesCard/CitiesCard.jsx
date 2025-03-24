// import React from "react";
// import "./CitiesCard.scss"; // Ensure correct CSS file path

// function CityCard({ city, onCityClick, isFeatured }) {
//   const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

//   const imageUrl = city?.images?.[0]?.url
//     ? city.images[0].url.startsWith("http")
//       ? city.images[0].url
//       : `${BACKEND_URL}${city.images[0].url}`
//     : "https://via.placeholder.com/300x200?text=No+Image";

//   const altText = city?.images?.[0]?.alt_text || city.name;

//   return (
//     <div
//       className={`city-card ${isFeatured ? "featured" : "overlapping"}`}
//       onClick={() => onCityClick(city.id)}
//       style={{ cursor: "pointer" }}
//       aria-label={`View details for ${city.name}`}
//     >
//       <img src={imageUrl} alt={altText} />
//       <div className="city-info">
//         <h3>{city.name}</h3>
//         <p>{city.province}</p>
//       </div>
//     </div>
//   );
// }

// export default CityCard;
