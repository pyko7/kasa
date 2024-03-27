import React from "react";
import logo from "../../assets/logo.svg";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <p className="content">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
