import React from "react";
import { useLocation } from "react-router-dom";
import logo from "../../../assets/images/edu-wise.svg";
import { Link } from "react-router-dom";

const DashboardSidebar = () => {
  const pathname = useLocation().pathname;
  return (
    <aside
      className={`'fixed inset-y-0 left-0 bg-white w-full sm:w-20 xl:w-60 sm:flex flex-col z-10'
      showSidebar ? 'flex' : 'hidden' `}
    >
      <nav>
        <div className="logo pb-4 mb-4  mt-[29px] ml-[10px]">
          <Link href="/">
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
        <ul className="nav-wrapper flex flex-col gap-x-10">
          <li>
            <Link href="/" className={`${pathname === "/" ? "active-link" : ""} py-[12px] px-[16px] mb-[9px]`}>
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link href="/profile" className={`${pathname === "/profile" ? "active-link" : ""} py-[12px] px-[16px] mb-[9px]`}>
              <span>Lessons</span>
            </Link>
          </li>
          <li>
            <Link href="/explore" className={`${pathname === "/explore" ? "active-link" : ""} py-[12px] px-[16px] mb-[9px]`}>
              <span>Tasks</span>
            </Link>
          </li>
          <li>
            <Link href="" className={`py-[12px] px-[16px] mb-[9px]`}>
              <span>Schedule</span>
            </Link>
          </li>
          <li>
            <Link href="" className="py-[12px] px-[16px] mb-[9px]">
              <span>ChatGPT</span>
            </Link>
          </li>
          <li>
            <Link href="" className="py-[12px] px-[16px] mb-[9px]">
              <span>Messages</span>
            </Link>
          </li>
          <li>
            <Link href="" className="py-[12px] px-[16px] mb-[9px]">
              <span>Certifications</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
