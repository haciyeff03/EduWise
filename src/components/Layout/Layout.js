import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";
import { UserDashboard } from "../../pages";

const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <>
      {!location.pathname.startsWith("/dashboard") ? (
        <>
          <Header />
          <main className={`${location.pathname === "/" ? "" : "lg:pt-[140px] pt-[85px] m_bg"}`}>{children}</main>
          <Footer />
        </>
      ) : (
        <UserDashboard />
      )}
    </>
  );
};

export default Layout;
