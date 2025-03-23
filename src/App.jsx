import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.css";

import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
// import WelcomePage from "./pages/WelcomePage/WelcomePage.jsx";
import ItineraryPage from "./pages/ItineraryPage/ItineraryPage.jsx";
import Details from "./pages/DetailsPage/DetailsPage.jsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.jsx";
import Register from "./Components/Auth/Register/Register.jsx";
import Login from "./Components/Auth/Login/Login.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
// import ParentComponent from "./Components/ParentItinerary/ParentItinerary.jsx";

function App({cities}) {
  const [pageName, setPageName] = useState();

    const [filteredCities, setFilteredCities] = useState(cities);
  
  return (
    <BrowserRouter>
           <Navbar cities={cities} setFilteredCities={setFilteredCities} />
           {/* <ParentComponent/> */}
      <Routes>

      {/* <Route path="/" element={<WelcomePage setPageName={setPageName}/>} /> */}
      <Route path ="/" element = {<HomePage setPageName={setPageName}/>} />
      <Route path="/cities/:id/attractions" element={<ItineraryPage setPageName={setPageName}/>}/>
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

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import TestMap from './Components/TestMap/TestMap'; // Import your TestMap component
// // import HomePage from "./pages/HomePage/HomePage";
// import Details from "./pages/DetailsPage/DetailsPage.jsx";


// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* <Route path ="/home" element = {<HomePage />} /> */}
//         <Route path="/" element={<TestMap />} />
//      <Route path = "/details" element = {<Details/> }/>

//       </Routes> 
//     </BrowserRouter>
//   );
// }

// export default App;


