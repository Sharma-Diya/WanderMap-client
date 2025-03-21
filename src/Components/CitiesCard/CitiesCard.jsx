import React from "react";
import "./CitiesCard.scss"; // Or wherever your CSS for the layout is

function CityCard({ city, onCityClick, isFeatured }) {
  let imageUrl = "https://via.placeholder.com/300x200?text=No+Image";

  if (city.images && city.images.length > 0) {
    imageUrl = city.images[0].url.startsWith('http')
      ? city.images[0].url
      : `http://localhost:3000${city.images[0].url}`;
  }

  const altText = city.images && city.images.length > 0
    ? city.images[0].alt_text
    : city.name;

  const cardClassName = `city-card ${isFeatured ? 'featured' : 'overlapping'}`;

  return (
    <div className={cardClassName} onClick={() => onCityClick(city.id)} style={{ cursor: 'pointer' }}>
      <img src={imageUrl} alt={altText} />
      <div className="city-info">
        <h3>{city.name}</h3>
        <p>{city.province}</p>
      </div>
    </div>
  );
}

export default CityCard;