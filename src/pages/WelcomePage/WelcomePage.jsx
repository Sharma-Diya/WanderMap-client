
import { useState } from "react";
// import img1 from "../../assets/images/1.jpg";
// import img2 from "../../assets/images/2.jpg";
// import img3 from "../../assets/images/3.jpg";
// import img4 from "../../assets/images/4.jpg";

import { useEffect } from "react";
import "./WelcomePage.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import CitiesList from "../../Components/CitiesList/CitiesList.jsx";
import BasicCarousel from "../../Components/CitiesCarousel/CitiesCarousel.jsx";
import UnsplashImages from "../../Components/UnsplashImages/UnsplashImages.jsx";
import AttractionsList from "../../Components/AttractionsList/AttractionsList.jsx";


function Welcome({ setPageName, cities, attractions }) {
  
  const [filteredCities, setFilteredCities] = useState(cities);

  useEffect(() => {
    setPageName("Welcome");
  }, []);
  // console.log(img1, img2, img3, img4);

  return (
    <section className="banner">
        {/* <Navbar cities={cities} setFilteredCities={setFilteredCities} /> */}
     {/* <UnsplashImages/> */}
      
      {/* <img className="welcome-bg" src= {img3}/> */}

      <div className="banner__heading">
        <h1 className="banner__heading-top">Plan Your Perfect Day </h1>
        <h3 className="banner__heading-bottom">
          Canada awaits with breathtaking landscapes, vibrant cities, and
          unforgettable adventures. Pack your bags and get ready for an
          experience of a lifetime!
        </h3>
      </div>

      <main className="cities-list">
        <CitiesList cities={filteredCities}/>
        <section className="saying">
          <div className="saying__image">
            {/* <UnsplashImages/> */}
          </div>
          <div className="saying__text">
            <blockquote>
            "The road is there, it will always be there. You just have to decide when to take it." – Cheryl Strayed
            </blockquote>
          </div>
        </section>

        <div className="attractions">
        <AttractionsList attractions={attractions} />
        </div>
      </main>
      {/* <Footer /> */}
    </section>
  );
}

export default Welcome;
