import React from "react";
import { DashboardContent, DashboardSidebar } from "../../../components";
import { useLocation } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import Lessons from "../Lessons/Lessons";
import Tasks from "../Tasks/Tasks";
import Notes from "../Notes/Notes";
import Schedule from "../Schedule/Schedule";
import ChatGPTDash from "../ChatGPTDash/ChatGPTDash";
import Messages from "../Messages/Messages";
import Certifications from "../Certifications/Certifications";

const UserDashboard = () => {
  const location = useLocation();
  const routeComponents = {
    "/dashboard": <MainPage />,
    "/dashboard/main-page": <MainPage />,
    "/dashboard/lessons": <Lessons />,
    "/dashboard/tasks": <Tasks />,
    "/dashboard/notes": <Notes />,
    "/dashboard/schedule": <Schedule />,
    "/dashboard/chatgpt": <ChatGPTDash />,
    "/dashboard/messages": <Messages />,
    "/dashboard/certifications": <Certifications />,
  };
  return (
    <div className="flex relative">
      <DashboardSidebar />
      <DashboardContent>{routeComponents[location.pathname]}</DashboardContent>
    </div>
  );
};

export default UserDashboard;
