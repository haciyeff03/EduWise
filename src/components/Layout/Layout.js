import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <>
      <Header />
      <main className={`${location.pathname === "/" ? "" : "pt-[140px]"} `}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
