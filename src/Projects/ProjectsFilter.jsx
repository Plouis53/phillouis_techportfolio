import React from "react";

const ProjectsFilter = ({ handleProject, handleOpenDropDown }) => {
  return (
    <div className="flex flex-col bg-white w-[100%] position: absolute z-[2] mx-[-30px]">
      <button
        onClick={() => handleProject("all")}
        className="text-black font-[Poppins] p-[10px] border-black border-b-[1px]"
      >
        Featured
      </button>
      <button
        onClick={() => handleProject("HTML/CSS")}
        className="text-black font-[Poppins] p-[10px] border-black border-b-[1px]"
      >
        HTML/CSS
      </button>
      <button
        onClick={() => handleProject("JavaScript")}
        className="text-black font-[Poppins] p-[10px] border-black border-b-[1px]"
      >
        JavaScript
      </button>
      <button
        onClick={() => handleProject("React")}
        className="text-black font-[Poppins] p-[10px] border-black border-b-[1px]"
      >
        React
      </button>
    </div>
  );
};
export default ProjectsFilter;
