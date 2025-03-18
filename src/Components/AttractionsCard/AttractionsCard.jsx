import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
// import "./AttractionsCard.scss";

function AttractionsCard({ attraction }) {
  // Destructure the props for easier access
  const { name, description, address, category, city_name } = attraction;

  return (
    <Card className="my-card">
      {/* Check if there's an image URL and display the image */}
      {/* Assuming image_url is part of the attraction data */}
      {/* You can replace it with actual image URL if needed */}
      <Card.Img 
        variant="top" 
        src={`https://via.placeholder.com/400x200?text=${name}`} // Placeholder image URL
        alt={`${name} image`} 
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {category} | {city_name}
        </Card.Subtitle>
        {/* <Card.Text>
          {description}
        </Card.Text>
        <Card.Text>
          <strong>Address:</strong> {address}
        </Card.Text> */}
        <Button>View More</Button>
      </Card.Body>
    </Card>
  );
}

export default AttractionsCard;
