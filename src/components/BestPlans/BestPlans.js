import React from "react";
import { plans } from "../../constants";
import { Link } from "react-router-dom";

const BestPlans = () => {
  return (
    <div className="lg:pr-[112px] lg:pl-[115px] px-[30px]  py-[62px] bg-[#E7E0FF]">
      <h1 className="lg:text-[36px] md:text-[29px] text-[27px] semibold-text">Best plans</h1>
      <div className="plans_container mt-[60px] mb-[92px]">
        {plans.slice(0, 4).map((plan) => (
          <Link to="">
            <div key={plan.id} className="flex flex-col  rounded-[4px]">
              <div className="relative">
                <img src={plan.img} className="w-full" />
                <div className="absolute text-white bottom-0 flex flex-col gap-2 p-[16px]">
                  <span>{plan.plan}</span>
                  <span className="text-[12px]">{plan.courseCount} courses</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BestPlans;
