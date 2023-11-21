import React from "react";
import { DashboardContent, DashboardSidebar } from "../../../components";
import { useLocation } from "react-router-dom";
import { Content } from "antd/es/layout/layout";
import MainPage from "../MainPage/MainPage";
import Lessons from "../Lessons/Lessons";
import Tasks from "../Tasks/Tasks";

const UserDashboard = () => {
  const location = useLocation();
  return (
    <div className="flex">
      <DashboardSidebar />
      <DashboardContent>
        {location.pathname === "/dashboard/main-page" && <MainPage />}
        {location.pathname === "/dashboard/lessons" && <Lessons />}
        {location.pathname === "/dashboard/tasks" && <Tasks />}
        {location.pathname === "/dashboard/main-page" && <MainPage />}
        {location.pathname === "/dashboard/main-page" && <MainPage />}
      </DashboardContent>
    </div>
  );
};

export default UserDashboard;
