import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./AttractionsCard.scss";

function AttractionsCard({ attraction }) {
  const { name, description, address, category, city_name, images } = attraction;
  

  return (
    <div className="attraction-box">
      {/* Check if images exists and has items before trying to access */}
      {images && images.length > 0 ? (
        <img
          className="attraction-box__image"
          src={images[0].url}
          alt={name}
        />
      ) : (
        <div className="attraction-box__placeholder">No Image Available</div>
      )}
      <h2 className="attraction-box__name">{name}</h2>
      <p className="attraction-box__category">Category: {category}</p>
    </div>
  );
}

export default AttractionsCard;