import React from "react";
import { LuArrowRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import like from "../../assets/images/like_icon.svg";
import person from "../../assets/images/person_icon.svg";
import heart from "../../assets/images/heart_icon.svg";
import { courses } from "../../constants";

const RecommendedCourses = () => {
  return (
    <div className="pr-[112px] pl-[115px] py-[62px] bg-[#F4F4F5]">
      <div className="flex items-center justify-between">
        <h1 className="text-[36px] semibold-text">Recommended courses</h1>
        <Link to="" className="flex items-center gap-2">
          <span className="text-black">See more</span>
          <LuArrowRight color="#2C3E50" fontSize={24} />
        </Link>
      </div>
      <div className="courses_container mt-[62px]">
        {courses.slice(0, 4).map((course) => (
          <div key={course.id} className="rounded-[2px] bg-white flex flex-col">
            <Link to={""}>
              <img className="w-full" src={course.img} />
            </Link>
            <div className="pt-[16px] pb-[6px] px-[12px] relative">
              <div className="w-[240px]">
                <Link to={""} className="text-black">{course.title}</Link>
              </div>
              <img src={heart} className="absolute cursor-pointer top-[22px] right-[12px]" />
              <div className="flex items-center gap-[24px] mt-[10px] mb-[25px]">
                <div className="flex items-center gap-[3px]">
                  <img src={person} />
                  <span className="text-[#71717A] text-[12px]">{course.students}</span>
                </div>
                <div className="flex items-center gap-[3px]">
                  <img src={like} />
                  <span className="text-[#71717A] text-[12px]">{course.ratings}%</span>
                </div>
              </div>
              <span className="text-[12px]">{course.teacher}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedCourses;
