import React from "react";
import "./Navbar.scss";
import NavbarListItem from "./NavbarListItem";

/**
 * @description Represents a reusable navbar component.
 * @returns {React.ReactNode} A Navbar element.
 */
const Navbar = () => {
  return (
    <nav className="navbar">
      <NavbarListItem />
    </nav>
  );
};

export default Navbar;
