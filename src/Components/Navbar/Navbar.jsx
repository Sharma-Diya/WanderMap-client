import React, { useState, useEffect } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./navbar.scss";
import Search from "../Search/Search.jsx";
import LoginModal from "..//Auth/Login/LoginModal.jsx";
import Register from "../Auth/Register/Register.jsx";
import { auth } from "../config/Firebase.jsx";  // Import Firebase auth
import { onAuthStateChanged, signOut } from "firebase/auth"; // Import auth functions

function Navbar({ cities, setFilteredCities }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [user, setUser] = useState(null); // Track logged-in user

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);  // Set user if logged in
      } else {
        setUser(null);  // Clear user if logged out
      }
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const menuToggleHandler = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out");
    } catch (error) {
      console.error("Logout error:", error.message);
    }
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

            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/help">Help</Link>
            </li>

            {/* Show login/register if user is not logged in */}
            {!user ? (
              <>
                <li>
                  <button className="btn btn-login" onClick={openLoginModal}>
                    Login
                  </button>
                </li>
              </>
            ) : (
              // Show Logout button when user is logged in
              <li>
                <button className="btn btn-logout" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
        <div className="header__content__toggle">
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>

      {/* Login and Register Modals */}
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    </header>
  );
}

export default Navbar;
