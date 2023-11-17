import React from "react";
import { reviews } from "../../constants";
import { LuArrowRight } from "react-icons/lu";
import { Link } from "react-router-dom";

const CustomerReviews = () => {
  return (
    <div className="pr-[112px] pl-[115px] py-[87px] mb-[87px]  bg-[#1E1E1E]">
      <h1 className="text-[36px] text-white">Customer Reviews</h1>
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
      <Link to="" className="flex items-center gap-2 justify-end mt-[52px]">
        <span className="text-white">See all reviews</span>
        <LuArrowRight color="white" fontSize={24} />
      </Link>
    </div>
  );
};

export default CustomerReviews;
