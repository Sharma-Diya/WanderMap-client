import { Card } from "react-bootstrap";
import "./CitiesCard.scss";

function CitiesCard({ city, onClick }) {
  return (
    <Card className="my-card">
      {/* Display image if available */}
      {city.image_url && <Card.Img variant="top" src={city.image_url} alt={`${city.name} image`} />}
      <Card.Body onClick={() => onClick(city.id)}>
        <Card.Title>{city.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{city.province}</Card.Subtitle>
        <Card.Text>{city.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CitiesCard;
