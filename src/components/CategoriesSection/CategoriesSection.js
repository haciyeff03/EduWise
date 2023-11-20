import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../../constants";
import { LuArrowRight } from "react-icons/lu";

const CategoriesSection = () => {
  return (
    <div className="lg:pr-[112px] lg:pl-[115px] px-[30px] py-[100px] bg-[#F4F4F5]">
      <h1 className="lg:text-[36px] md:text-[29px] text-[20px] hidden lg:block semibold-text">Categories</h1>
      <div className="lg:hidden flex items-center justify-between">
        <h1 className="lg:text-[36px] md:text-[29px] text-[20px] semibold-text">Categories</h1>
        <Link to="" className="flex items-center gap-2">
          <span className="text-black lg:normal-case uppercase lg:text-[16px] text-[10px]">See more</span>
          <LuArrowRight color="#2C3E50" className="lg:block hidden" fontSize={24} />
        </Link>
      </div>
      <div className="categories_container my-[62px] ">
        {categories.slice(0, 6).map((category) => (
          <div key={category.id} className="rounded-[2px] content_ bg-white flex flex-col h-[144px] w-100 relative">
            <Link to={""}>
              <div className="content-overlay"></div>
              <img className="w-100  lg:h-[144px] h-[148px] object-cover content-image" src={category.img} />
              <div className="w-[123px] content-details">
                <Link to={""} className="text-white lg:text-[24px] text-[14px]">
                  {category.title}
                </Link>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="text-center lg:block hidden">
        <button className="animated_btn">Hamısına bax</button>
      </div>
    </div>
  );
};

export default CategoriesSection;
