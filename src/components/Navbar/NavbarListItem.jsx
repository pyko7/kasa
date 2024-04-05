import React from "react";
import { Link, useLocation } from "react-router-dom";
import { navListItem } from "./utils";

/**
 * @description Represents a list of items component.
 * @returns {React.ReactNode} A NavbarListItem element.
 */
const NavbarListItem = () => {
  const { pathname } = useLocation();

  return (
    <ul>
      {navListItem.map((item) => (
        <li key={item.id}>
          <Link
            to={item.url}
            className={pathname === item.url ? "active-link" : ""}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavbarListItem;
