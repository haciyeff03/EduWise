import React from "react";
import img1 from "../../assets/images/group_last.svg";


const ImgAndBtn = () => {
  return (
    <div className=" bg-[#E7E0FF] flex lg:pt-[60px] lg:pb-[100px] lg:pr-[112px] lg:pl-[115px] px-[30px] md:pt-[40px] md:pb-[80px] lg:flex-row flex-col items-center pt-[30px] pb-[60px] lg:gap-0 gap-7">
      <div class="w-full  lg:w-1/2 lg:block flex justify-center">
        <img src={img1} />
      </div>
      <div class="w-full lg:w-1/2 fm_center">
        <h1 className="lg:text-[36px] md:text-[29px] text-[20px] semibold-text">Best E-learning platform</h1>
        <h2 className="mt-[24px] lg-text-[24px] text-[14px]">Start learning by registering for free</h2>
        <button className="bg-[#564FFD] text-white lg:text-[16px] text-[14px] rounded-[2px] px-[16px] lg:mt-[50px] mt-[38px] py-[16px]">Sign up for Free</button>
      </div>
    </div>
  );
};

export default ImgAndBtn;
