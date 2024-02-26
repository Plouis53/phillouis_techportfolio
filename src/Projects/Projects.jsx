import React, { useState } from "react";
import SynthesisWorkshop from "../Projects/Synthesis-Workshop.jsx";
import NewsExplorer from "../Projects/NewsExplorer.jsx";
import WhatToWear from "../Projects/WhatToWear.jsx";
import AroundTheUs from "../Projects/AroundTheUs.jsx";
import MyPortfolio from "../Projects/Portfolio.jsx";
import ProjectsFilter from "./ProjectsFilter.jsx";

const Projects = () => {
  const [showCard, setShowCard] = useState("all");
  const [dropDown, setDropDown] = useState(false);

  const handleProject = (category) => {
    setShowCard(category);
    setDropDown(false);
  };

  const handleToggleDropDown = () => {
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
          onClick={handleToggleDropDown}
          className={`bg-Menu w-[30px] h-[30px] self-center mb-[10px] rotate lg:hidden ${
            dropDown ? "active" : ""
          }`}
        ></button>
      </div>
      {dropDown && <ProjectsFilter handleProject={handleProject} />}{" "}
      <div className="hidden md:flex gap-[50px] mt-[50px] justify-center">
        <button
          onClick={() => handleProject("all")}
          className="bg-[#2b2b2b] text-white font-[Poppins] font-semibold px-[30px] py-[10px] rounded-lg hover:bg-[#656565] hover:scale-110 ease-in-out duration-[.5s] border-black border-[1px]"
        >
          Featured
        </button>
        <button
          onClick={() => handleProject("Front-End")}
          className="bg-[#2b2b2b] text-white font-[Poppins] font-semibold px-[30px] py-[10px] rounded-lg hover:bg-[#656565] hover:scale-110 ease-in-out duration-[.5s] border-black border-[1px]"
        >
          Front-End
        </button>
        <button
          onClick={() => handleProject("Full-Stack")}
          className="bg-[#2b2b2b] text-white font-[Poppins] font-semibold px-[30px] py-[10px] rounded-lg hover:bg-[#656565] hover:scale-110 ease-in-out duration-[.5s] border-black border-[1px]"
        >
          Full-Stack
        </button>
      </div>
      <div className="mt-[100px] flex flex-wrap justify-center gap-[20px]">
        <MyPortfolio category="Front-End" showCard={showCard} />
        <NewsExplorer category="Full-Stack" showCard={showCard} />
        <WhatToWear category="Full-Stack" showCard={showCard} />
        <AroundTheUs category="Front-End" showCard={showCard} />
        {/* <SynthesisWorkshop category="Full-Stack" showCard={showCard} /> */}
        {/* Project components */}
      </div>
    </div>
  );
};

export default Projects;
