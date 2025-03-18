import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.css";

import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import WelcomePage from "./pages/WelcomePage/WelcomePage.jsx";
import CityPage from "./pages/CityPage/CityPage.jsx";
import AttractionsPage from "./pages/AttractionsPage/AttractionsPage.jsx";
import DetailsPage from "./pages/DetailsPage/DetailsPage.jsx";

function App() {
  const [pageName, setPageName] = useState();

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<WelcomePage setPageName={setPageName}/>} />
      <Route path ="/cities" elemet = {<HomePage setPageName={setPageName}/>} />
      <Route path ="/cities/:id" elemet = {<CityPage setPageName={setPageName}/>} />
      <Route path = "/cities/:id/attractions" element = {<AttractionsPage setPageName={setPageName}/>}/>
      <Route path = "/attractions/:id" element = {<DetailsPage setPageName = {setPageName}/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
