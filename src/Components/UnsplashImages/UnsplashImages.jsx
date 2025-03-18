import React, { useState, useEffect } from "react";
import axios from "axios";

const UNSPLASH_API_KEY = "R2ccZgG3z8_8TdoHJ76l3q45jWj0pheO8SPO3tC8dSo";

const UnsplashBackground = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [nextImageUrl, setNextImageUrl] = useState("");
  const [initialLoad, setInitialLoad] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch one image from Unsplash based on the query
  const fetchImage = async (isInitialFetch = false) => {
    try {
      // Only show loading indicator on initial fetch
      if (isInitialFetch) {
        setLoading(true);
      }
      
      const response = await axios.get("https://api.unsplash.com/photos/random", {
        headers: {
          Authorization: `Client-ID ${UNSPLASH_API_KEY}`
        },
        params: {
          query: "Canada nature",
          orientation: "landscape"
        }
      });

      if (response.data && response.data.urls) {
        const newImageUrl = response.data.urls.regular;
        
        if (isInitialFetch) {
          // On initial fetch, set the image directly
          setImageUrl(newImageUrl);
        } else {
          // On subsequent fetches, store the next image URL
          setNextImageUrl(newImageUrl);
          // Then update the displayed image after a short delay
          setTimeout(() => {
            setImageUrl(newImageUrl);
          }, 100);
        }
        
        setError("");
      } else {
        setError("No image data in response");
      }
    } catch (error) {
      console.error("Error fetching image:", error);
      
      let errorMessage = "Failed to fetch image";
      if (error.response) {
        errorMessage += `: ${error.response.status}`;
      } else if (error.request) {
        errorMessage += ": No response received";
      } else {
        errorMessage += `: ${error.message}`;
      }
      
      setError(errorMessage);
    } finally {
      if (isInitialFetch) {
        setLoading(false);
        setInitialLoad(false);
      }
    }
  };

  useEffect(() => {
    // Fetch the initial image when component mounts
    fetchImage(true);
    
    // Set up interval to fetch a new image every 10 seconds
    const intervalId = setInterval(() => {
      fetchImage(false);
    }, 10000);
    
    // Clean up interval when component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div
      className="background-container"
      style={{
        backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "60vh",
        transition: "background-image 1s ease-in-out",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
      }}
    >
      {loading && (
        <div 
          className="loading" 
          style={{
            padding: "10px 20px",
            backgroundColor: "rgba(0,0,0,0.5)",
            color: "white",
            borderRadius: "4px"
          }}
        >
          Loading...
        </div>
      )}
      
      {error && !loading && (
        <div 
          className="error"
          style={{
            padding: "10px 20px",
            backgroundColor: "rgba(255,0,0,0.3)",
            color: "white",
            borderRadius: "4px"
          }}
        >
          {error}
        </div>
      )}
    </div>
  );
};

export default UnsplashBackground;