import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../assets/images/edu-wise.svg";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  const location = useLocation();
  const [scrollShadow, setScrollShadow] = useState(false);

  const handleScroll = () => {
    const scrollHeight = window.scrollY;
    setScrollShadow(scrollHeight > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${location.pathname === "/" ? "bg-white" : "bg-[#E7E0FF]"}  ${
        scrollShadow ? "shadow-lg" : ""
      }   px-[53px] lg:flex justify-between items-center rounded-[16px] hidden  w-[90%] transform translate-x-[6%] h-[75px] fixed top-[29px] z-50`}
    >
      <div className="flex gap-[89px] items-center">
        <Link to="/">
          <img src={logo} />
        </Link>
        <nav>
          <ul className="flex gap-[48px] pl-0">
            <li>
              <Link to="/courses" className={`${location.pathname === "/courses" ? "border-b-[2px]  border-[#5627FF] !text-[#5627FF]" : "text-black h_underline"}  `}>
                Courses
              </Link>
            </li>
            <li>
              <Link to="/categories" className={`${location.pathname === "/categories" ? " border-b-[2px]  border-[#5627FF] !text-[#5627FF]" : "text-black h_underline"}  `}>
                Categories
              </Link>
            </li>
            <li>
              <Link to="/plans" className={`${location.pathname === "/plans" ? " border-b-[2px]  border-[#5627FF] !text-[#5627FF]" : "text-black h_underline"}  `}>
                Plans
              </Link>
            </li>
            <li>
              <Link to="/eduai" className={`${location.pathname === "/eduai" ? " border-b-[2px]  border-[#5627FF] !text-[#5627FF]" : "text-black h_underline"}  `}>
                Edu AI
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-[25px] w-[30%]">
        <SearchBar />
        <button className="bg-[#564FFD] text-white rounded-[2px] px-[16px] py-[8px]">Daxil ol</button>
      </div>
    </header>
  );
};

export default Navbar;
