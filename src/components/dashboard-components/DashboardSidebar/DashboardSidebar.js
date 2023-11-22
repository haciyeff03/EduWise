import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../../assets/images/edu-wise.svg";
import { Link } from "react-router-dom";
import { dashboardLink } from "../../../constants";

const DashboardSidebar = () => {
  const pathname = useLocation().pathname;
  return (
    <aside className={`fixed inset-y-0 left-0 bg-white w-[15%] sm:flex flex-col z-10 px-[20px]`}>
      <nav>
        <div className="logo px-[12px] mb-4 pb-[20px]  mt-[29px] ">
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
  );
};

export default DashboardSidebar;
