import HTML from "../assets/HTML.svg";
import CSS from "../assets/CSS.svg";
import Library from "../images/Library.png";
import React from "react";

const PracticumLibrary = ({ showCard, category }) => {
  return (
    <div
      className={`flex flex-col mb-[100px] gap-[10px] bg-[#2b2b2b] max-w-[400px] h-fit rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[10px] overflow-visible ${
        showCard === "all" || showCard === category ? "block" : "hidden"
      }`}
    >
      <img
        src={Library}
        className="rounded-lg top-[-70px] position: relative shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
      ></img>
      <div className="flex flex-col gap-[20px] h-[480px] justify-between w-full bg-white mt-[-50px] p-[10px] rounded-lg">
        <div className="flex gap-[10px] w-full border-b-[2px] border-black border-opacity-50">
          <h1 className="font-[Poppins] font-semibold text-black text-[20px md:text-[25px]">
            Library
          </h1>
          <img src={HTML} className="h-[35px] w-[35px] self-center"></img>
          <img src={CSS} className="h-[35px] w-[35px] self-center"></img>
        </div>
        <p className="font-[Poppins] text-black text-[14px] xs:text-[15px]">
          The Practicum Library is a single-page landing site featuring clean
          and semantic HTML markup. My role involved implementing navigation
          links to enhance website usability, and I also worked collaboratively
          with team members to identify and resolve code issues, ensuring a
          seamless user experience.
        </p>
        <div className="flex gap-[20px]">
          <a href="https://github.com/Plouis53/se_project_library.git">
            <button className="px-[30px] py-[5px] bg-[#2b2b2b] w-fit rounded-md text-white font-[Poppins] hover:scale-105 ease-in-out duration-[.5s]">
              Code
            </button>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PracticumLibrary;
