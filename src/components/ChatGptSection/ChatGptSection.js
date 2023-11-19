import React from "react";
import man from "../../assets/images/young-man.svg";
import TextSlider from "../TextSlider/TextSlider";

const ChatGptSection = () => {
  return (
    <div className="my-24 flex gap-8 flex-col lg:flex-row lg:pl-[115px] lg:pr-[112px] lg:px-[40px] px-[30px]">
      <div class="w-full lg:h-[366px] lg:w-2/3 bg-[#18181B] lg:p-[80px] p-[30px] rounded-[24px] flex justify-center">
        <TextSlider />
      </div>
      <div class="w-full lg:w-1/3">
        <div className="flex justify-center lg:h-[366px] h-[321px] bg-[#E7E0FF] rounded-[24px]">
          <img src={man} className="lg:w-100 w-[215px]" />
        </div>
      </div>
    </div>
  );
};

export default ChatGptSection;
