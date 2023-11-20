import React from "react";
import { reviews } from "../../constants";
import { LuArrowRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const CustomerReviews = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className="lg:pr-[112px] lg:pl-[115px] px-[30px] lg:py-[50px] py-[60px] lg:my-[90px] bg-white">
      <div className="flex items-center justify-between">
        <h1 className="lg:text-[36px] md:text-[29px] text-[27px] semibold-text">Customer Reviews</h1>
        <Link to="" className="flex items-center gap-2">
          <span className="text-black">See more</span>
          <LuArrowRight color="#2C3E50" fontSize={24} />
        </Link>
      </div>
      <div className="mt-[62px] ">
        <Slider {...settings}>
          {reviews.slice(0, 3).map((review) => (
            <div key={review.id} className="rounded-[8px] pt-[32px] pb-[47px] px-[24px] bg-[#F4F3F6]">
              <p className="pr-[80px]">{review.review}</p>
              <div className="flex justify-between items-center mt-[52px]">
                <img src={review.img} className="w-[54px] h-[54px] object-cover rounded-full" />
                <div className="flex flex-col ">
                  <span className="self-end">{review.name}</span>
                  <span className="text-[#793AFF]">From {review.country}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CustomerReviews;
