import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__logo">WanderMap</div>

        <ul className="footer__nav">
          <li><a href="/about">About Us</a></li>
          <li><a href="/destinations">Destinations</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>

        <p className="footer__copy">
        &copy; 2025 WanderMap. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
