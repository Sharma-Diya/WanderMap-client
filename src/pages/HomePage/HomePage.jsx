import { useState, useEffect } from "react";
import img from "../../assets/images/road.jpg";
import video from "../../assets/images/video.mp4";
import { Link } from "react-router-dom";
import "./HomePage.scss";
import CitiesList from "../../components/CitiesList/CitiesList.jsx";
import AttractionsList from "../../components/AttractionsList/AttractionsList.jsx";

function HomePage({ cities, attractions, cityId }) {

  useEffect(() => {
    console.log("Cities data:", cities);
  }, [cities]);

  return (
    <>
      <section className="banner">
        <img className="banner-bg" src={img} alt="Scenic road view of Canada" />

        <div className="banner__heading">
          <h1 className="banner__heading-top">Plan Your Perfect Day</h1>
          <h3 className="banner__heading-bottom">
            Canada awaits with breathtaking landscapes, vibrant cities, and
            unforgettable adventures. Pack your bags and get ready for an
            experience of a lifetime!
          </h3>
          <Link to={`/cities/${cityId}/attractions`} className="banner__button">
            Start Your Journey
          </Link>
        </div>
      </section>

      <main className="main-content">
        <div className="cities-list__container">
          <CitiesList />
        </div>

        <section className="saying">
          <div className="saying-video">
            <video autoPlay loop muted playsInline poster={img} title="Beautiful scenic video of Canada">
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
                href="https://www.travelandleisure.com/beautiful-places-in-canada-7554665"
                className="explore-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Canadian Beautiful Places
              </a>
            </p>
          </div>
        </section>

        <div className="attractions">
          <AttractionsList attractions={attractions} viewType="slider" />
        </div>
      </main>
    </>
  );
}

export default HomePage;
