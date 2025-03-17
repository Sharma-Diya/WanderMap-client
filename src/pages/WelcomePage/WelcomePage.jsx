// import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.jpg";
import img3 from "../../assets/images/3.jpg";
import img4 from "../../assets/images/4.jpg";

import { useEffect } from "react";
import "./WelcomePage.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import CitiesList from "../../Components/CitiesList/CitiesList.jsx";
import BasicCarousel from "../../Components/CitiesCarousel/CitiesCarousel.jsx";



function Welcome({ setPageName }) {
  useEffect(() => {
    setPageName("Welcome");
  }, []);
  console.log(img1, img2, img3, img4);

  return (
    <section className="welcome">
      <Navbar />
     {/* <BasicCarousel/> */}
      <img className="welcome-bg" src= {img3}/>

      <div className="welcome__heading">
        <h1 className="welcome__heading-top">Plan Your Perfect Day </h1>
        <h3 className="welcome__heading-bottom">
          Canada awaits with breathtaking landscapes, vibrant cities, and
          unforgettable adventures. Pack your bags and get ready for an
          experience of a lifetime!
        </h3>
      </div>

      <main className="cities-list">
        <CitiesList />
        <section className="saying">
          <div className="saying__image">
            <img src="your-image-url.jpg" alt="Travel" />
          </div>
          <div className="saying__text">
            <blockquote>
              "Travel is the only thing you buy that makes you richer." –
              Anonymous
            </blockquote>
          </div>
        </section>
      </main>
      <Footer />
    </section>
  );
}

export default Welcome;
