import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layouts.scss";

/**
 * @description Represents the main layout component containing at least the header and the footer.
 *
 * @param {Object} props - The properties object for the MainLayout component.
 * @param {React.ReactNode} props.children - The content to be displayed inside the main layout.
 * @returns {React.ReactNode} A MainLayout element.
 */
const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
