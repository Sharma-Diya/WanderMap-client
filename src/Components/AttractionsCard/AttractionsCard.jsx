import "./AttractionsCard.scss";

function AttractionsCard({ attraction }) {
  const { name, category, images } = attraction;
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL|| "http://localhost:8000";


  return (
    <div className="attraction-box">
      {images && images.length > 0 ? (
        <img
          className="attraction-box__image"
          src={
            images[0].url.startsWith("http")
              ? images[0].url
              : `${BACKEND_URL}${images[0].url}`
          }
          alt={images[0].alt_text || name}
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
