import React, { useState } from "react";
import { courses } from "../../constants";
import { Link } from "react-router-dom";
import like from "../../assets/images/like_icon.svg";
import person from "../../assets/images/person_icon.svg";
import heart from "../../assets/images/heart_icon.svg";

const Courses = () => {
  const [activeButton, setActiveButton] = useState("All courses");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (
    <div className="lg:mt-[100px] pb-[100px]  lg:px-[115px] px-[30px] m_bg">
      <div className="lg:hidden md:hidden flex mb-[46px] ds_04">
        <button className={`py-[10px] px-[12px] rounded-[67px] ${activeButton === "All courses" ? "btn__active" : ""}`} onClick={() => handleButtonClick("All courses")}>
          All courses
        </button>
        <button className={`py-[10px] px-[12px] rounded-[67px] ${activeButton === "Special prices" ? "btn__active" : ""}`} onClick={() => handleButtonClick("Special prices")}>
          Special prices
        </button>
      </div>
      <div className="courses_container">
        {courses.map((course) => (
          <div key={course.id} className="rounded-[2px] flex courses_mb bg-white flex-col">
            <div className="lg:w-full mw_03 md:w-full lg:h-full w-[40%]">
              <Link to={""} className="outline-none">
                <img className="w-full  h-full object-cover course_img" src={course.img} alt={course.title} />
              </Link>
            </div>
            <div className="lg:pt-[16px] md:pt-[16px] mw_03  lg:w-full md:w-full w-[60%] md:pb-[6px] lg:pb-[6px] px-[12px] lg:h-[160px] relative">
              <div className="lg:w-[240px] lg:h-[50px] overflow-hidden">
                <Link to={""} className="text-black lg:text-[16px] text-[14px] block overflow-hidden">
                  {course.title}
                </Link>
              </div>
              <img src={heart} className="absolute cursor-pointer lg:top-[22px] fm_heart right-[12px]" alt="Heart Icon" />
              <div className="flex items-center gap-[24px] lg:mt-[13px] md:mt-[13px] lg:mb-[25px] md:mb-[25px] my-[10px]">
                <div className="flex items-center gap-[3px]">
                  <img src={person} alt="Person Icon" />
                  <span className="text-[#71717A] text-[12px]">{course.students}</span>
                </div>
                <div className="flex items-center gap-[3px]">
                  <img src={like} alt="Like Icon" />
                  <span className="text-[#71717A] text-[12px]">{course.ratings}%</span>
                </div>
              </div>
              <span className="text-[12px]">{course.teacher}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center lg:block hidden mt-[90px]">
        <button className="animated_btn">Hamısına bax</button>
      </div>
    </div>
  );
};

export default Courses;
