import React from "react";
import Navbar from "../Navbar/Navbar";
import logo from "../../assets/logo.svg";
import "./Header.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
