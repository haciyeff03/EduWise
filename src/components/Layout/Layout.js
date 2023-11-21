import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";
import { UserDashboard } from "../../pages";
import DashboardLayout from "../dashboard-components/DashboardLayout/DashboardLayout";

const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <>
      {!location.pathname.startsWith("/dashboard") ? (
        <>
          <Header />
          <main className={`${location.pathname === "/" ? "" : "pt-[140px]"} `}>{children}</main>
          <Footer />
        </>
      ) : (
        <UserDashboard />
      )}
    </>
  );
};

export default Layout;
