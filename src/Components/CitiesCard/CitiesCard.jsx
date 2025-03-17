import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "./CitiesCard.scss";

function CitiesCard({city}) {
  return (
    <Card className="my-card">
    {/* Check if there's an image URL and display the image */}
    {city.image_url && <Card.Img variant="top" src={city.image_url} alt={`${city.name} image`} />}
    <Card.Body>
      <Card.Title>{city.name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{city.province}</Card.Subtitle>
      <Card.Text>{city.description}</Card.Text>
    </Card.Body>
  </Card>
  );
}

export default CitiesCard;
