import React from "react";
import  BestPlans from "../../components/BestPlans/BestPlans";
import ChatGptSection from "../../components/ChatGptSection/ChatGptSection";
import  Hero from "../../components/Hero/Hero";
import  PlanAndPricing from "../../components/PlanAndPricing/PlanAndPricing";
import  Professions from "../../components/Professions/Professions";
import  RecommendedCourses from "../../components/RecommendedCourses/RecommendedCourses";
const Home = () => {
  return (
    <>
      <Hero />
      <ChatGptSection />
      <RecommendedCourses />
      <Professions />
      <BestPlans />
      <PlanAndPricing />
    </>
  );
};

export default Home;
