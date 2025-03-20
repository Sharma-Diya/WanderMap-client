import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import WelcomePage from "./pages/WelcomePage/WelcomePage.jsx";
import CityPage from "./pages/CityPage/CityPage.jsx";
import AttractionsPage from "./pages/AttractionsPage/AttractionsPage.jsx";
import Details from "./pages/DetailsPage/DetailsPage.jsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.jsx";
import Register from "./Components/Auth/Register/Register.jsx";
import Login from "./Components/Auth/Login/Login.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App({cities}) {
  const [pageName, setPageName] = useState();

    const [filteredCities, setFilteredCities] = useState(cities);
  
  return (
    <BrowserRouter>
           <Navbar cities={cities} setFilteredCities={setFilteredCities} />
      <Routes>
      <Route path="/" element={<WelcomePage setPageName={setPageName}/>} />
      <Route path ="/cities" element = {<HomePage setPageName={setPageName}/>} />
      <Route path ="/cities/:id" element = {<CityPage setPageName={setPageName}/>} />
      <Route path = "/cities/:id/attractions" element = {<AttractionsPage setPageName={setPageName}/>}/>
      <Route path = "/details/:id" element = {<Details setPageName = {setPageName}/> }/>
      <Route path = "/profile" element = {<ProfilePage setPageName= {setPageName}/>}/>
      <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
