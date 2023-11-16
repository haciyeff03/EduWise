import React from "react";
import { billing } from "../../constants";
import { Divider } from "antd";
import { IoCheckmarkSharp } from "react-icons/io5";

const PlanAndPricing = () => {
  return (
    <div className="pr-[112px] pl-[115px] py-[121px] mb-[90px]  bg-white">
      <h1 className="text-[36px] semibold-text">Plan & Pricing</h1>
      <div className="plan_pricing_container mt-[56px]">
        {billing.map((plan) => (
          <div key={plan.id} className="bg-[#F4F4F5] px-[49px] py-[43px] rounded-[4px]">
            <h2 className="text-[20px] semibold-text">{plan.plan}</h2>
            <p className="text-[17px] text-[#A1A1AA]">
              <span className="text-[56px] text-black semibold-text">${plan.price}</span> / {plan.duration.toLowerCase()}
            </p>
            <p>{plan.duration} price</p>
            <Divider />
            <div className="flex flex-col gap-[12px] mt-[15px]">
              <p className="flex items-center gap-[3px]">
                <IoCheckmarkSharp color="#00D68F" />
                {plan.first_descr}
              </p>
              <p className="flex items-center gap-[3px]">
                <IoCheckmarkSharp color="#00D68F" />
                {plan.second_descr}
              </p>
              <p className="flex items-center gap-[3px]">
                <IoCheckmarkSharp color="#00D68F" />
                {plan.third_descr}
              </p>
              <p className="flex items-center gap-[3px]">
                <IoCheckmarkSharp color="#00D68F" />
                {plan.forth_descr}
              </p>
            </div>
            <div className="flex items-center flex-col gap-[7px]">
              <button className="mt-[48px] px-[40px] py-[12px] rounded-[2px] bg-[#5627FF] text-white">Try for free</button>
              <span className="text-[14px] text-[#A1A1AA]">Start your 7-day free trial</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanAndPricing;
