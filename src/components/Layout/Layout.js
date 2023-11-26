import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";
import { UserDashboard,Login,Register } from "../../pages";


const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <>
      {!location.pathname.startsWith("/dashboard") && !location.pathname.startsWith("/login") && !location.pathname.startsWith("/register")? (
        <>
          <Header />
          <main className={`${location.pathname === "/" ? "" : "lg:pt-[140px] pt-[85px] m_bg"}`}>{children}</main>
          <Footer />
        </>
      ) : (
        <>
        {location.pathname.startsWith("/dashboard") && <UserDashboard />}
        {location.pathname.startsWith("/login") && <Login />}
        {location.pathname.startsWith("/register") && <Register />}
      </>
      )}
    </>
  );
};

export default Layout;
