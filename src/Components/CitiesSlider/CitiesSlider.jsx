import React from 'react';
import './CitiesSlider.scss';

function CitiesSlider({ cities, onCityClick }) {
  
  return (
    <div className="cities-card-hover-container">
      {cities.map((city) => {
        let imageUrl = 'https://via.placeholder.com/300x200?text=No+Image';
        if (city.images && city.images.length > 0) {
          imageUrl = city.images[0].url.startsWith('http')
            ? city.images[0].url
            : `http://localhost:3000${city.images[0].url}`;
        }

        const altText = city.images && city.images.length > 0
          ? city.images[0].alt_text
          : city.name;

        return (
          <div key={city.id} className="city-card" onClick={() => onCityClick(city.id)}>
            <div className="city-card-inner">
              <div className="city-card-front">
                <img src={imageUrl} alt={altText} />
              </div>
              <div className="city-card-back">
                <div className="card-info">
                  <h3>{city.name}</h3>
                  <p>{city.province}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CitiesSlider;
