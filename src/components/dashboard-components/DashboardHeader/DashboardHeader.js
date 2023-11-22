import React from "react";
import { useLocation } from "react-router-dom";
import { dashboardLink } from "../../../constants";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { FaRegBell } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import DashboardUserDropdown from "../DashboardUserDropdown/DashboardUserDropdown";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../../redux/features/sidebar/sidebarSlice";

const { Search } = Input;
const suffix = (
  <SearchOutlined
    style={{
      fontSize: 14,
      color: "#192038",
    }}
  />
);

const DashboardHeader = () => {
  const location = useLocation();
  const filteredLinks = dashboardLink.filter((link) => link.path !== "/dashboard/main-page");

  return (
    <div className="flex justify-between items-center">
      <div>
        {location.pathname === "/dashboard/main-page" || location.pathname === "/dashboard" ? (
          <span className="text-[24px] semibold-text">Overview</span>
        ) : (
          filteredLinks.map((link) => <span className="text-[24px] semibold-text">{link.path === location.pathname ? link.name : ""}</span>)
        )}
      </div>
      <div className="flex gap-4 items-center">
        <div className="dashboard_search">
          <Search placeholder="Search" size="large" suffix={suffix} className="w-full" />
        </div>
        <FaRegBell size={20} className="cursor-pointer" />
        <div>
          <DashboardUserDropdown />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
