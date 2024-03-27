import React, { PropsWithChildren } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layouts.scss";

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
