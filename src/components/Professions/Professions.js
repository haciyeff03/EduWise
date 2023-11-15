import React from "react";
import { Link } from "react-router-dom";
import { professions } from "../../constants";

const Professions = () => {
  return (
    <div className=" pr-[112px] pl-[115px] py-[186px] bg-[#F4F4F5]">
      <h1 className="text-[36px] semibold-text">Professions</h1>
      <div className="professions_container mt-[62px]">
        {professions.map((profession) => (
          <div key={profession.id} className="rounded-[2px] bg-white flex flex-col">
            <Link to={""}>
              <img className="w-full" src={profession.img} />
            </Link>
            <div className="pt-[16px] pb-[6px] px-[12px] h-[106px] relative">
              <div className="w-[123px]">
                <Link to={""}>{profession.title}</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Professions;
