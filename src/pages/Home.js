import React from "react";
import { BestPlans, ChatGptSection, Hero, PlanAndPricing, Professions, RecommendedCourses } from "../components";

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
