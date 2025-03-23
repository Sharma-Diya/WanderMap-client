import { useState } from "react";
import img1 from "../../assets/images/image1.jpg";
// import img2 from "../../assets/images/2.jpg";
// import img3 from "../../assets/images/3.jpg";
import img from "../../assets/images/road.jpg";
import video from "../../assets/images/video.mp4";

import { useEffect } from "react";
import "./HomePage.scss";
// import Navbar from "../../Components/Navbar/Navbar";
// import Footer from "../../Components/Footer/Footer";
import CitiesList from "../../Components/CitiesList/CitiesList.jsx";
// import BasicCarousel from "../../Components/CitiesCarousel/CitiesCarousel.jsx";
// import UnsplashImages from "../../Components/UnsplashImages/UnsplashImages.jsx";
import AttractionsList from "../../Components/AttractionsList/AttractionsList.jsx";

function Welcome({ setPageName, cities, attractions }) {
  const [filteredCities, setFilteredCities] = useState(cities);

  useEffect(() => {
    setPageName("Welcome");
  }, []);
  // console.log(img1, img2, img3, img4);
  useEffect(() => {
    console.log("Cities data:", cities);
  }, [cities]);

  return (
    <section className="banner">
      {/* <Navbar cities={cities} setFilteredCities={setFilteredCities} /> */}
      {/* <UnsplashImages/> */}

      <img className="banner-bg" src={img} />

      <div className="banner__heading">
        <h1 className="banner__heading-top">Plan Your Perfect Day </h1>
        <h3 className="banner__heading-bottom">
          Canada awaits with breathtaking landscapes, vibrant cities, and
          unforgettable adventures. Pack your bags and get ready for an
          experience of a lifetime!
        </h3>
        <a href="/cities/:id/attractions" className="banner__button">
          Start Your Journey
        </a>
      </div>

      <main className="main-content">
        <div className="cities-list__container">
          <CitiesList cities={filteredCities} />
        </div>

        <section className="saying">
          <div className="saying-video">
            {/* <UnsplashImages/> */}
            {/* <img className="welcome-bg" src= {img1}/> */}
            <video autoPlay loop muted playsInline poster={img}>
              {" "}
              {/* Using the image as a poster */}
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="saying__text">
            <blockquote>
              "The journey of a thousand miles begins with a single step, and
              the journey of a thousand miles on a road trip begins with a
              packed car and a map." - Lao Tzu
            </blockquote>
            <p className="author-info">
              Lao Tzu, an ancient Chinese philosopher.
            </p>
            <p>
              At WanderMap, we believe that every grand adventure, especially a
              Canadian road trip, begins with the simple decision to start
              planning and pack your essentials.
            </p>
            <p>
              <a
                href="https://www.lonelyplanet.com/articles/best-road-trips-scenic-drives-canada"
                className="explore-link"
              >
                Explore Canadian Road Trip Ideas
              </a>
            </p>
            {/* Or a quick tip: */}
            {/* <p className="travel-tip">Quick Tip: Always pack a first-aid kit for your road trips!</p> */}
          </div>
        </section>

        <div className="attractions">
          <AttractionsList attractions={attractions} viewType="slider" />
        </div>
      </main>
      {/* <Footer /> */}
    </section>
  );
}

export default Welcome;
