import React, { useState } from "react";
import ProjectsFilter from "./ProjectsFilter.jsx";
import NewsExplorer from "../Projects/NewsExplorer.jsx";
import WhatToWear from "../Projects/WhatToWear.jsx";
import AroundTheUs from "../Projects/AroundTheUs.jsx";
import MyPortfolio from "../Projects/Portfolio.jsx";

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
        <button onClick={() => handleProject("all")} className="...">
          Featured
        </button>
        <button onClick={() => handleProject("Front-End")} className="...">
          Front-End
        </button>
        <button onClick={() => handleProject("Full-Stack")} className="...">
          Full-Stack
        </button>
      </div>
      <div className="mt-[100px] flex flex-wrap justify-center gap-[20px]">
        <MyPortfolio category="Front-End" showCard={showCard} />
        <NewsExplorer category="Full-Stack" showCard={showCard} />
        <WhatToWear category="Full-Stack" showCard={showCard} />
        <AroundTheUs category="Front-End" showCard={showCard} />
      </div>
    </div>
  );
};

export default Projects;
