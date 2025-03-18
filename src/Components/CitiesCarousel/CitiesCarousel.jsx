// src/App.js
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Importing arrow icons from react-icons
import "./CitiesCarousel.scss"; // Add styling for arrows

import img1 from "/src/assets/images/image.jpg";
import img2 from "/src/assets/images/image1.jpg";
import img3 from "/src/assets/images/image2.jpg";
import img4 from "/src/assets/images/image4.jpg";

const images = [img1, img2, img3, img4];

function BasicCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Listen for keydown events (arrow keys)
  const handleKeydown = (event) => {
    if (event.key === "ArrowRight") {
      nextSlide();
    } else if (event.key === "ArrowLeft") {
      prevSlide();
    }
  };

  // Add event listener on component mount and clean up on unmount
  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <div className="slider-container">
      <div className="slider">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        {/* Left Arrow */}
        <div className="arrow left" onClick={prevSlide}>
          <FaArrowLeft /> {/* Using React Icon for left arrow */}
        </div>
        {/* Right Arrow */}
        <div className="arrow right" onClick={nextSlide}>
          <FaArrowRight /> {/* Using React Icon for right arrow */}
        </div>
      </div>
    </div>
  );
}

export default BasicCarousel;
