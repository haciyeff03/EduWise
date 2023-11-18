import React from "react";
import { Link } from "react-router-dom";
import { professions } from "../../constants";
import { LuArrowRight } from "react-icons/lu";

const Professions = () => {
  return (
    <div className="lg:pr-[112px] lg:pl-[115px] px-[30px] py-[100px] bg-[#F4F4F5]">
      <div className="flex items-center justify-between">
        <h1 className="lg:text-[36px] md:text-[29px] text-[27px] semibold-text">Professions</h1>
        <Link to="" className="flex items-center gap-2">
          <span className="text-black">See more</span>
          <LuArrowRight color="#2C3E50" fontSize={24} />
        </Link>
      </div>
      <div className="professions_container mt-[62px]">
        {professions.map((profession) => (
          <div key={profession.id} className="rounded-[2px] bg-white flex flex-col">
            <Link to={""}>
              <img className="w-full" src={profession.img} />
            </Link>
            <div className="pt-[16px] pb-[6px] px-[12px] h-[106px] relative">
              <div className="w-[123px]">
                <Link to={""} className="text-black">
                  {profession.title}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Professions;
