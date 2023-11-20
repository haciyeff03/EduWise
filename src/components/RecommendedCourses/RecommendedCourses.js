import React from "react";
import { LuArrowRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import like from "../../assets/images/like_icon.svg";
import person from "../../assets/images/person_icon.svg";
import heart from "../../assets/images/heart_icon.svg";
import { courses } from "../../constants";
import Slider from "react-slick";

const RecommendedCourses = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="lg:pr-[112px] lg:pl-[115px] px-[30px] py-[62px] bg-[#F4F4F5]">
      <div className="flex items-center justify-between">
        <h1 className="lg:text-[36px] md:text-[29px] text-[27px] semibold-text">Recommended courses</h1>
        <Link to="" className="flex items-center gap-2">
          <span className="text-black">See more</span>
          <LuArrowRight color="#2C3E50" fontSize={24} />
        </Link>
      </div>
      <div className="courses_container mt-[62px]">
        <Slider {...settings}>
          {courses.map((course) => (
            <div key={course.id} className="rounded-[2px] bg-white flex flex-col">
              <Link to={""} className=" outline-none">
                <img className="w-full h-[170px] object-cover" src={course.img} />
              </Link>
              <div className="pt-[16px] pb-[6px] px-[12px] h-[160px] relative">
                <div className="w-[240px]">
                  <Link to={""} className="text-black">
                    {course.title}
                  </Link>
                </div>
                <img src={heart} className="absolute cursor-pointer top-[22px] right-[12px]" />
                <div className="flex items-center gap-[24px] mt-[13px] mb-[25px]">
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
        </Slider>
      </div>
    </div>
  );
};

export default RecommendedCourses;
