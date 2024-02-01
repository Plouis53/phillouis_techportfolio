import React from "react";

const ProjectsFilter = () => {
  return (
    <div className="dropdown dropdown-bottom md:hidden">
      <button
        tabIndex={0}
        className="btn m-1 w-fit h-[50px] bg-white text-black font-[Poppins] font-semibold"
      >
        Project type
      </button>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box m-1 w-[100px]"
      >
        <li>
          <a className="font-[Poppins] text-black">Projects</a>
        </li>
        <li>
          <a className="font-[Poppins] text-black">About</a>
        </li>
        <li>
          <a className="font-[Poppins] text-black">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default ProjectsFilter;
