import { useEffect } from "react";
import "./AttractionsPage.scss";
import Map from "../../Components/Maps/CustomMap.jsx";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import React from "react";
import { APIProvider } from "@vis.gl/react-google-maps";

function Attractions({ setPageName }) {
  useEffect(() => {
    setPageName("attractions");
  }, []);

  return (
    <div className="app">
      <Navbar/>

      <div className="maps">
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <Map />
      </APIProvider>
      </div>

      <Footer/>
    </div>
  );
}

export default Attractions;


