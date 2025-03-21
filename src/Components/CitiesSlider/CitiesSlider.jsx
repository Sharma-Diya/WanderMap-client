import React from "react";
import ReactCardSlider from "react-card-slider-component";
import "./CitiesSlider.scss";

function CitiesCardSlider({ cities, onCityClick }) {
  const slides = cities.map(city => {
    // Get the first image URL from the images array, or use a placeholder if no images
    const imageUrl = city.images && city.images.length > 0 
      ? city.images[0].url 
      : "https://via.placeholder.com/300x200?text=No+Image";
    
    const altText = city.images && city.images.length > 0 
      ? city.images[0].alt_text 
      : city.name;
    
    return {
      image: imageUrl,
      title: city.name,
      description: city.province,
      
      clickEvent: () => onCityClick(city.id),
      
      id: city.id,
      fullDescription: city.description,
      imageAlt: altText
    };
  });

  return (
    <div className="cities-card-slider-container">
      <ReactCardSlider 
        slides={slides}
        sliderWidth={100}            // percentage of container width
        useGPURender={true}          // for better performance
        offset={2}                   // spacing between cards
        showArrows={true}            // show navigation arrows
        autoSlide={true}             // automatic sliding
        autoSlideTime={1000}         // time in ms between slides
      />
    </div>
  );
}

export default CitiesCardSlider;