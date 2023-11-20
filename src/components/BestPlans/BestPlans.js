import React from "react";
import { plans } from "../../constants";
import { Link } from "react-router-dom";
import { LuArrowRight } from "react-icons/lu";
import Slider from "react-slick";
const BestPlans = () => {
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
    <div className="lg:pr-[112px] lg:pl-[115px] px-[30px] my-[100px] ">
      <div className="flex items-center justify-between">
        <h1 className="lg:text-[36px] md:text-[29px] text-[20px] semibold-text">Best plans</h1>
        <Link to="" className="flex items-center gap-2">
          <span className="text-black lg:normal-case uppercase lg:text-[16px] text-[10px]">See more</span>
          <LuArrowRight color="#2C3E50" className="lg:block hidden" fontSize={24} />
        </Link>
      </div>
      <div className="mt-[60px] mb-[92px]">
        <Slider {...settings}>
          {plans.slice(0, 4).map((plan) => (
            <Link to="">
              <div key={plan.id} className="flex flex-col  rounded-[4px]">
                <div className="relative">
                  <img src={plan.img} className="w-full" />
                  <div className="absolute text-white bottom-0 flex flex-col gap-2 p-[16px]">
                    <span>{plan.plan}</span>
                    <span className="text-[14px]">{plan.teacher}</span>
                    <span className="btn_bg text-white rounded-[37px] text-center w-[83px] px-[8px] text-[12px] py-[4px]">SALE NOW</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BestPlans;
