import React from "react";
import people from "../../assets/images/people.svg";
import messages from "../../assets/images/vuesax-linear-messages-2.svg";
import clock from "../../assets/images/vuesax-outline-clock.svg";
import heroImg from "../../assets/images/glow-financial-transactions-and-risk-management-1.svg";

const Hero = () => {
  return (
    <div className="bg-[#E7E0FF] h-[665px] px-[115px] py-[32px] flex">
      <div class="w-full lg:w-1/2">
        <div class="p-4">
          <h1 className="text-[72px]  bold-text">Lorem ipsum ipsum</h1>
          <div className="flex  flex-col mt-[24px] gap-2">
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
          <div className="flex mt-10 gap-7">
            <button className="rounded-[2px] px-[16px] py-[8px] bg-white">View courses</button>
            <button className="rounded-[2px] px-[16px] py-[8px] bg-white">Create your free account</button>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-1/2">
        <div className="p-4 ml-28">
          <img src={heroImg} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
