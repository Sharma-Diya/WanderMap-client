import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import WelcomePage from "./pages/WelcomePage/WelcomePage.jsx";
import CityPage from "./pages/CityPage/CityPage.jsx";
import AttractionsPage from "./pages/AttractionsPage/AttractionsPage.jsx";
import DetailsPage from "./pages/DetailsPage/DetailsPage.jsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.jsx";
import Register from "./Components/Auth/Register/Register.jsx";
import Login from "./Components/Auth/Login/Login.jsx";

function App() {
  const [pageName, setPageName] = useState();

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<WelcomePage setPageName={setPageName}/>} />
      <Route path ="/cities" element = {<HomePage setPageName={setPageName}/>} />
      <Route path ="/cities/:id" element = {<CityPage setPageName={setPageName}/>} />
      <Route path = "/cities/:id/attractions" element = {<AttractionsPage setPageName={setPageName}/>}/>
      <Route path = "/attractions/:id" element = {<DetailsPage setPageName = {setPageName}/> }/>
      <Route path = "/profile" element = {<ProfilePage setPageName= {setPageName}/>}/>
      <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
