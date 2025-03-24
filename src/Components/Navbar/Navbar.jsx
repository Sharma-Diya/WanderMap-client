import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoginModal from "../Auth/LoginModal/LoginModal.jsx";
import { auth } from "../config/Firebase.jsx";  
import { onAuthStateChanged, signOut } from "firebase/auth"; 
import logo from "../../assets/images/final.png";
import "./navbar.scss";

function Navbar() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [user, setUser] = useState(null); 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user || null);
    });

    return () => unsubscribe();
  }, []);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
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
        <div className="header__logo">
          <Link to="/" className="header__content__logo">
            <img src={logo} className="header__content__img" alt="WanderMap logo" />
            <h1 className="header-heading">WanderMap</h1>
          </Link>
        </div>

        <nav className="header__content__nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cities/:id/attractions">Itinerary</Link>
            </li>

            {!user ? (
              <li>
                <button className="btn btn-login" onClick={openLoginModal}>
                  Login
                </button>
              </li>
            ) : (
              <li>
                <button className="btn btn-logout" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>

      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    </header>
  );
}

export default Navbar;
