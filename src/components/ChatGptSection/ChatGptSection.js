import React from "react";
import man from "../../assets/images/young-man.svg";
import TextSlider from "../TextSlider/TextSlider";

const ChatGptSection = () => {
  return (
    <div className="my-24 flex gap-8 flex-col lg:flex-row lg:pl-[115px] lg:pr-[112px] px-[40px]">
      <div class="w-full lg:w-2/3 bg-[#18181B] p-[80px] rounded-[24px] flex justify-center">
        <TextSlider />
      </div>
      <div class="w-full lg:w-1/3">
        <div className="flex justify-center p-[80px] bg-[#E7E0FF] rounded-[24px]">
          <img src={man} className="lg:w-100 w-[215px]" />
        </div>
      </div>
    </div>
  );
};

export default ChatGptSection;
