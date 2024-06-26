import React from "react";
import logo from "../../assets/logo.svg";
import "./Footer.scss";
import { Link } from "react-router-dom";

/**
 * @description Represents a reusable footer component.
 * @returns {React.ReactNode} A Footer element.
 */
const Footer = () => {
  return (
    <footer className="footer">
      <Link to="/" className="logo-container">
        <img src={logo} alt="logo" />
      </Link>
      <p className="content">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
