import React from "react";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import { useDispatch, useSelector } from "react-redux";
import { RxHamburgerMenu } from "react-icons/rx";
import { toggleSidebar } from "../../../redux/features/sidebar/sidebarSlice";

const DashboardContent = ({ children }) => {
  const dispatch = useDispatch();

  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  const contentStyle = {
    marginLeft: isSidebarOpen ? "15%" : "0",
    transition: "margin-left 0.3s ease",
  };
  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };
  return (
    <div style={contentStyle} className={`bg-[#F4F3F6] py-[53px] px-[30px] h-[100vh] w-full `}>
      <span className="border-solid border-1 absolute top-[10px] border-black p-[3px] rounded-[4px] cursor-pointer" onClick={handleToggleSidebar}>
        <RxHamburgerMenu fontSize={"20px"} />
      </span>
      <DashboardHeader />
      <main className="mt-[50px]">{children}</main>
    </div>
  );
};

export default DashboardContent;
