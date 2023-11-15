import React from "react";
import man from "../../assets/images/young-man.svg";
import TextSlider from "../TextSlider/TextSlider";

const ChatGptSection = () => {
  return (
    <div className="my-24 flex gap-8 pl-[115px] pr-[112px]">
      <div class="w-[695px] lg:w-2/3 bg-[#18181B] rounded-[24px] flex justify-center">
        <TextSlider />
      </div>
      <div class="w-full lg:w-1/3">
        <div className="flex justify-center px-[48px] py-[30px] bg-[#E7E0FF] rounded-[24px]">
          <img src={man} className="" />
        </div>
      </div>
    </div>
  );
};

export default ChatGptSection;
