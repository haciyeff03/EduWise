import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../assets/images/edu-wise.svg";

const Header = () => {
  const location = useLocation();

  return (
    <div className={`${location.pathname === "/" ? "bg-[#E7E0FF]" : "bg-white"} py-[29px] px-[60px]`}>
      <header
        className={`${location.pathname === "/" ? "bg-white" : "bg-[#E7E0FF]"}  border-b border-white px-[53px] flex justify-between items-center rounded-[16px] w-full mx-auto h-[75px]`}
      >
        <div className="flex gap-[92px] items-center">
          <Link to="/">
            <img src={logo} />
          </Link>
          <nav>
            <ul className="flex gap-[48px]">
              <li>
                <Link to="/courses" className="text-black">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/professions" className="text-black">
                  Professions
                </Link>
              </li>
              <li>
                <Link to="/plans" className="text-black">
                  Plans
                </Link>
              </li>
              <li>
                <Link to="#" className="text-black">
                  Chat GPT
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <button className="bg-[#564FFD] text-white rounded-[2px] px-[16px] py-[8px]">Daxil ol</button>
      </header>
    </div>
  );
};

export default Header;
