import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.css";

import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import ItineraryPage from "./pages/ItineraryPage/ItineraryPage.jsx";
import Details from "./pages/DetailsPage/DetailsPage.jsx";
import Register from "./components/Auth/Register/Register.jsx";
import Login from "./pages/LoginPage/LoginPage.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const [pageName, setPageName] = useState();

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage setPageName={setPageName} />} />
        <Route
          path="/cities/:id/attractions"
          element={<ItineraryPage setPageName={setPageName} />}
        />
        <Route
          path="/details/:id"
          element={<Details setPageName={setPageName} />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

