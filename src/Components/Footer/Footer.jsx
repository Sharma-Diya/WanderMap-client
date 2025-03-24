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
          <a 
            href="https://www.facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="Follow us on Facebook"
          >
            <FaFacebookF />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="Follow us on Twitter"
          >
            <FaTwitter />
          </a>
          <a 
            href="https://www.instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="Follow us on Instagram"
          >
            <FaInstagram />
          </a>
          <a 
            href="https://www.linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="Follow us on LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        <p className="footer__copy">
          &copy; 2025 WanderMap. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
