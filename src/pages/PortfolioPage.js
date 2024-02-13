import React from "react";
import AboutPage from "../components/AboutPage";
import Contact from "../components/Contact";
import HomePage from "../components/HomePage";
import PortfolioProject from "../components/PortfolioProject";

const PortfolioPage = () => {
  return (
    <div className=" m-0">
      <HomePage />
      <AboutPage />
      <PortfolioProject />
      <Contact />
    </div>
  );
};

export default PortfolioPage;