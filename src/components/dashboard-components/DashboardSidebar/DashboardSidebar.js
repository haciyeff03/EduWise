import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../../../assets/images/edu-wise.svg";
import { Link } from "react-router-dom";
import { dashboardLink } from "../../../constants";
import { useDispatch, useSelector } from "react-redux";
import { IoClose } from "react-icons/io5";
import { toggleSidebar } from "../../../redux/features/sidebar/sidebarSlice";

const DashboardSidebar = () => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  const pathname = useLocation().pathname;
  const sidebarStyle = {
    opacity: isSidebarOpen ? 1 : 0,
    transform: isSidebarOpen ? "translateX(0)" : "translateX(-100%)",
    transition: "opacity 0.3s ease, transform 0.3s ease",
  };
  return isSidebarOpen ? (
    <aside style={sidebarStyle} className={` fixed inset-y-0 left-0 bg-white lg:w-[15%] w-[60%]  sm:flex flex-col z-10 px-[20px]`}>
      <nav>
        <div className="logo flex items-center justify-between px-[12px] mb-4 pb-[20px]  mt-[29px] ">
          <Link to="/">
            <img
              src={logo}
              width={87}
              height={24}
              alt="logo"
              style={{
                width: "87px",
                height: "24px",
              }}
            />
          </Link>
          <IoClose className="lg:hidden block" fontSize={24} onClick={() => dispatch(toggleSidebar(false))} />
        </div>
        <ul className="nav-wrapper flex flex-col pl-[0px]">
          {dashboardLink.map((link) => (
            <li key={link.path}>
              <Link to={link.path} className={`${pathname === link.path || link.path === "/dashboard" ? "active-link" : ""} p-[12px] mb-[9px]`}>
                {link.icon}
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  ) : (
    ""
  );
};

export default DashboardSidebar;
