import React from "react";
import { Link, useLocation } from "react-router-dom";

const navListItem = [
  {
    id: 1,
    name: "Accueil",
    url: "/",
  },
  {
    id: 2,
    name: "À propos",
    url: "/about",
  },
];

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
