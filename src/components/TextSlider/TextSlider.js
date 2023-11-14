import React, { useState, useRef } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { GoChevronUp, GoChevronDown } from "react-icons/go";

const TextSlider = () => {
  const data = [
    {
      header: "Chat GPT 1",
      body: "Lorem ipsum dolor sit amet consectetur. Egestas urna tellus ut morbi tincidunt adipiscing in. Urna ultrices purus sed in placerat ullamcorper. Viverra mauris ut aliquam id consequat pharetra odio dis. Ac diam risus ultricies gravida sed et habitant elit.",
    },
    {
      header: "Chat GPT 2",
      body: "Lorem ipsum dolor sit amet consectetur. Egestas urna tellus ut morbi tincidunt adipiscing in. Urna ultrices purus sed in placerat ullamcorper. Viverra mauris ut aliquam id consequat pharetra odio dis. Ac diam risus ultricies gravida sed et habitant elit.",
    },
    {
      header: "Chat GPT 3",
      body: "Lorem ipsum dolor sit amet consectetur. Egestas urna tellus ut morbi tincidunt adipiscing in. Urna ultrices purus sed in placerat ullamcorper. Viverra mauris ut aliquam id consequat pharetra odio dis. Ac diam risus ultricies gravida sed et habitant elit.",
    },
    {
      header: "Chat GPT 4",
      body: "Lorem ipsum dolor sit amet consectetur. Egestas urna tellus ut morbi tincidunt adipiscing in. Urna ultrices purus sed in placerat ullamcorper. Viverra mauris ut aliquam id consequat pharetra odio dis. Ac diam risus ultricies gravida sed et habitant elit.",
    },
    {
      header: "Chat GPT 5",
      body: "Lorem ipsum dolor sit amet consectetur. Egestas urna tellus ut morbi tincidunt adipiscing in. Urna ultrices purus sed in placerat ullamcorper. Viverra mauris ut aliquam id consequat pharetra odio dis. Ac diam risus ultricies gravida sed et habitant elit.",
    },
  ];

  const [index, setIndex] = useState(0);
  const nodeRefHeader = useRef(null);
  const nodeRefBody = useRef(null);

  const handleNext = () => {
    setIndex((oldIndex) => (oldIndex + 1) % data.length);
  };

  const handlePrevious = () => {
    setIndex((oldIndex) => (oldIndex - 1 + data.length) % data.length);
  };

  return (
    <div className="flex gap-[89px] items-center justify-center relative">
      <div className="flex gap-2 flex-col">
        <button className="rounded-full w-[24px] h-[24px] text-center flex justify-center items-center bg-white" onClick={handlePrevious}>
          <GoChevronUp color="#2C3E50" />
        </button>
        <button className="rounded-full w-[24px] h-[24px] text-center flex justify-center items-center bg-white" onClick={handleNext}>
          <GoChevronDown color="#2C3E50" />
        </button>
      </div>
      <div className="flex flex-col gap-[24px] w-[53%]">
        <SwitchTransition mode="out-in">
          <CSSTransition key={index} nodeRef={nodeRefHeader} classNames="fade" timeout={500}>
            <h2 ref={nodeRefHeader} className="text-white">
              {data[index].header}
            </h2>
          </CSSTransition>
        </SwitchTransition>
        <SwitchTransition mode="out-in">
          <CSSTransition key={index} nodeRef={nodeRefBody} classNames="fade" timeout={500}>
            <p ref={nodeRefBody} className="text-white">
              {data[index].body}
            </p>
          </CSSTransition>
        </SwitchTransition>
        <p className="text-[12px]  leading-[23px] self-end text-white absolute bottom-[30px] tracking-[3.84px]">
          {index + 1}/{data.length}
        </p>
      </div>
    </div>
  );
};

export default TextSlider;
