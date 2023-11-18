import React from "react";
import { reviews } from "../../constants";
import { LuArrowRight } from "react-icons/lu";
import { Link } from "react-router-dom";

const CustomerReviews = () => {
  return (
    <div className="lg:pr-[112px] lg:pl-[115px] px-[30px] lg:py-[87px] py-[60px]  bg-[#1E1E1E]">
      <h1 className="lg:text-[36px] md:text-[29px] text-[27px] text-white">Customer Reviews</h1>
      <div className="mt-[62px] reviews_container ">
        {reviews.slice(0, 3).map((review) => (
          <div key={review.id} className="rounded-[8px] pt-[32px] pb-[47px] px-[24px] bg-white">
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
      </div>
      <Link to="" className="flex items-center gap-2 lg:justify-end md:justify-end justify-center mt-[52px]">
        <span className="text-white">See all reviews</span>
        <LuArrowRight color="white" fontSize={24} />
      </Link>
    </div>
  );
};

export default CustomerReviews;
