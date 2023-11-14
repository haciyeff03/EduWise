import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/edu-wise.svg";

const Header = () => {
  return (
    <header className="flex justify-between py-[27px] px-[112px]">
      <img src={logo} />
    </header>
  );
};

export default Header;
