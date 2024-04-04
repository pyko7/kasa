import React from "react";
import Navbar from "../Navbar/Navbar";
import logo from "../../assets/logo.svg";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo-container">
        <img src={logo} alt="logo" />
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;
