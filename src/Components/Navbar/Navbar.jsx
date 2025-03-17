import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./navbar.scss";
import Search from "../Search/Search.jsx";

function Navbar( {cities, setFilteredCities}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuToggleHandler = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="header__content">
        <Link to="/" className="header__content__logo">
          WanderMap
        </Link>
        <nav className={`header__content__nav ${menuOpen ? "isMenu" : ""}`}>

          <ul>
        <Search cities={cities} setFilteredCities={setFilteredCities} />

            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/help">Help</Link></li>
            <Link to="/register"><button className="btn">Register</button></Link>
            <Link to="/login"><button className="btn btn__login">Login</button></Link>
          </ul>
        </nav>
        <div className="header__content__toggle">
          {!menuOpen ? <BiMenuAltRight onClick={menuToggleHandler} /> : <AiOutlineClose onClick={menuToggleHandler} />}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
