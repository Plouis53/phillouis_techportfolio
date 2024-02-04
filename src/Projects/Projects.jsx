import NewsExplorer from "../Projects/NewsExplorer.jsx";
import WhatToWear from "../Projects/WhatToWear.jsx";
import AroundTheUs from "../Projects/AroundTheUs.jsx";
import PracticumCoffeeShop from "../Projects/PracticumCoffeeShop.jsx";
// import PracticumLibrary from "../Projects/PracticumLibrary.jsx";
import MyPortfolio from "../Projects/Portfolio.jsx";
import ProjectsFilter from "./ProjectsFilter.jsx";
import { useState } from "react";
import React from "react";
// import Zoom from "react-reveal/Zoom";

const Projects = () => {
  const [showCard, setShowCard] = useState("all");
  const handleProject = (category) => {
    setShowCard(category);
    handleOpenDropDown();
  };

  const [dropDown, setDropDown] = useState(true);

  const handleOpenDropDown = () => {
    setDropDown(!dropDown);
  };

  return (
    <div
      id="projects"
      className="pt-[50px] pb-[100px] bg-[#363636] px-[30px] md:px-[70px]"
    >
      <div className="flex justify-between gap-[20px] border-b-[2px] border-white border-opacity-20">
        <h1 className="pb-[10px] font-[Poppins] text-[30px] md:text-[50px] text-white font-semibold">
          My Projects
        </h1>
        <button
          onClick={handleOpenDropDown}
          className="bg-Filter w-[30px] h-[30px] self-center mb-[10px] lg:hidden"
        ></button>
      </div>
      {dropDown === false && <ProjectsFilter handleProject={handleProject} />}
      <div className="hidden md:flex gap-[50px] mt-[50px] justify-center">
        <button
          onClick={() => handleProject("all")}
          className="bg-[#2b2b2b] text-white font-[Poppins] font-semibold px-[30px] py-[10px] rounded-lg hover:bg-[#656565] hover:scale-110 ease-in-out duration-[.5s]"
        >
          Featured
        </button>
        <button
          onClick={() => handleProject("HTML/CSS")}
          className="bg-[#2b2b2b] text-white font-[Poppins] font-semibold px-[30px] py-[10px] rounded-lg hover:bg-[#656565] hover:scale-110 ease-in-out duration-[.5s]"
        >
          HTML/CSS
        </button>
        <button
          onClick={() => handleProject("JavaScript")}
          className="bg-[#2b2b2b] text-white font-[Poppins] font-semibold px-[30px] py-[10px] rounded-lg hover:bg-[#656565] hover:scale-110 ease-in-out duration-[.5s]"
        >
          JavaScript
        </button>
        <button
          onClick={() => handleProject("React")}
          className="bg-[#2b2b2b] text-white font-[Poppins] font-semibold px-[30px] py-[10px] rounded-lg hover:bg-[#656565] hover:scale-110 ease-in-out duration-[.5s]"
        >
          React
        </button>
      </div>
      {/* adjust accordingly */}
      <MyPortfolio category="React" showCard={showCard} />
      <div className="mt-[100px] flex flex-col md:justify-center md:flex-row md:gap-[20px]">
        {/* <Zoom> */}
        <NewsExplorer category="React" showCard={showCard} />
        {/* </Zoom> */}
        <WhatToWear category="React" showCard={showCard} />
        <AroundTheUs category="JavaScript" showCard={showCard} />
        {/* <Zoom> */}
        <PracticumCoffeeShop category="HTML/CSS" showCard={showCard} />
        {/* </Zoom> */}
        {/* <PracticumLibrary category="HTML/CSS" showCard={showCard} /> */}
      </div>
    </div>
  );
};
export default Projects;
