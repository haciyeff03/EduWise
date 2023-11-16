import React from "react";
import { ChatGptSection, Hero, Professions, RecommendedCourses } from "../../components";

const Home = () => {
  return (
    <>
      <Hero />
      <ChatGptSection />
      <RecommendedCourses />
      <Professions />
    </>
  );
};

export default Home;
