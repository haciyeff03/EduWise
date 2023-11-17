import React from "react";
import BestPlans from "../../components/BestPlans/BestPlans";
import ChatGptSection from "../../components/ChatGptSection/ChatGptSection";
import Hero from "../../components/Hero/Hero";
import PlanAndPricing from "../../components/PlanAndPricing/PlanAndPricing";
import Professions from "../../components/Professions/Professions";
import RecommendedCourses from "../../components/RecommendedCourses/RecommendedCourses";
import CustomerReviews from "../../components/CustomerReviews/CustomerReviews";
const Home = () => {
  return (
    <>
      <Hero />
      <ChatGptSection />
      <RecommendedCourses />
      <Professions />
      <BestPlans />
      <CustomerReviews />
      <PlanAndPricing />
    </>
  );
};

export default Home;
