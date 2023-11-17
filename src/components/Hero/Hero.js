import React from "react";
import people from "../../assets/images/people.svg";
import messages from "../../assets/images/vuesax-linear-messages-2.svg";
import clock from "../../assets/images/vuesax-outline-clock.svg";
import heroImg from "../../assets/images/glow-financial-transactions-and-risk-management-1.svg";

const Hero = () => {
  return (
    <div className="bg-[#E7E0FF] px-[40px] lg:pr-[112px] lg:pl-[115px] py-[32px] flex lg:flex-row flex-col">
      <div class="w-full  lg:w-1/2 lg:mb-[100px]">
        <div class="p-4 flex flex-col sm:items-center lg:items-start">
          <h1 className="md:text-[46px] text-[36px] bold-text lg:text-[72px] lg:!text-start !text-center">Lorem ipsum ipsum</h1>
          <div className="lg:flex hidden  flex-col mt-[24px] gap-2">
            <div className="flex gap-2">
              <img src={messages} />
              <span>conversation</span>
            </div>
            <div className="flex gap-2">
              <img src={clock} />
              <span>conversation</span>
            </div>
            <div className="flex gap-2">
              <img src={people} />
              <span>conversation</span>
            </div>
          </div>
          <div className="flex mt-10 gap-7 lg:flex-row flex-col hero_buttons">
            <button className="rounded-[2px] px-[16px] py-[8px]  bg-white">View courses</button>
            <button className="rounded-[2px] px-[16px] py-[8px]  bg-white">Create your free account</button>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-1/2 flex lg:justify-end justify-center ">
          <img className="lg:w-[459px] md:w-[270px] w-[220px]" src={heroImg} />
      </div>
    </div>
  );
};

export default Hero;
