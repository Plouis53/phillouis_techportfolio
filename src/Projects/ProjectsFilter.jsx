import React from "react";

const ProjectsFilter = ({ handleProject }) => {
  return (
    <div className="dropdown dropdown-bottom flex self-center md:hidden">
      <button
        tabIndex={0}
        className="mb-[10px] bg-Filter h-[24px] w-[24px] bg-[#2b2b2b] bg-no-repeat rounded-lg"
      ></button>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box m-1 w-fit"
      >
        <li className="w-[100px]">
          <a
            className="font-[Poppins] text-black text-[15px]"
            onClick={() => handleProject("all")}
          >
            Featured
          </a>
        </li>
        <li>
          <a
            className="font-[Poppins] text-black"
            onClick={() => handleProject("HTML/CSS")}
          >
            HTML/CSS
          </a>
        </li>
        <li>
          <a
            className="font-[Poppins] text-black"
            onClick={() => handleProject("JavaScript")}
          >
            JavaScript
          </a>
        </li>
        <li>
          <a
            className="font-[Poppins] text-black"
            onClick={() => handleProject("React")}
          >
            React
          </a>
        </li>
      </ul>
    </div>
  );
};
export default ProjectsFilter;
