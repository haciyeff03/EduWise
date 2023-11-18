import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../assets/images/edu-wise.svg";

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
  );
};

export default Navbar;
