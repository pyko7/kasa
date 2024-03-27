import React from "react";
import "./Navbar.scss";
import NavbarListItem from "./NavbarListItem";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <NavbarListItem />
    </nav>
  );
};

export default Navbar;
