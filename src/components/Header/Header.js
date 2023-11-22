import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import logo from "../../assets/images/edu-wise.svg";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar />
      <div className="lg:hidden flex items-center justify-between px-[32px] py-3 m_bg w-[100%] h-[75px] fixed top-0 z-50">
        <div className="w-100 flex justify-between items-center">
          <Link href="/">
            <img src={logo} />
          </Link>
          <button type="button" onClick={() => setOpen((prevOpen) => !prevOpen)}>
            <RxHamburgerMenu fontSize={30} />
          </button>
        </div>
      </div>
      <MobileNavbar open={open} setOpen={setOpen} />
    </>
  );
};

export default Header;
