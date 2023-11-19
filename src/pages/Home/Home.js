import React from "react";
import BestPlans from "../../components/BestPlans/BestPlans";
import ChatGptSection from "../../components/ChatGptSection/ChatGptSection";
import Hero from "../../components/Hero/Hero";
import Professions from "../../components/Professions/Professions";
import RecommendedCourses from "../../components/RecommendedCourses/RecommendedCourses";
import CustomerReviews from "../../components/CustomerReviews/CustomerReviews";
import ImgAndBtn from "../../components/ImgAndBtn/ImgAndBtn";
const Home = () => {
  return (
    <>
      <Hero />
      <ChatGptSection />
      <RecommendedCourses />
      {/* <Professions /> */}
      {/* <BestPlans /> */}
      <CustomerReviews />
      <ImgAndBtn />
    </>
  );
};

export default Home;
