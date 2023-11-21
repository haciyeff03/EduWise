import React from "react";
import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";
import DashboardContent from "../DashboardContent/DashboardContent";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <DashboardSidebar />
      <DashboardContent>{children}</DashboardContent>
    </div>
  );
};

export default DashboardLayout;
