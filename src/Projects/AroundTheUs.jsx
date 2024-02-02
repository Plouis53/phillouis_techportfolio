import HTML from "../assets/HTML.svg";
import CSS from "../assets/CSS.svg";
import JS from "../assets/JS.svg";
import US from "../images/Us.png";
import React from "react";

const AroundTheUs = ({ showCard, category }) => {
  return (
    <div
      className={`flex flex-col gap-[10px] bg-[#2b2b2b] max-w-[400px] h-fit rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[10px] overflow-visible ${
        showCard === "all" || showCard === category ? "block" : "hidden"
      }`}
    >
      <img
        src={US}
        className="rounded-lg top-[-70px] position: relative shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
      ></img>
      <div className="flex flex-col gap-[20px] h-[430px] justify-between w-full bg-white mt-[-50px] p-[10px] rounded-lg">
        <div className="flex gap-[10px] w-full border-b-[2px] border-black border-opacity-50">
          <h1 className="text-ellipsis overflow-hidden whitespace-nowrap font-[Poppins] font-semibold text-black text-[20px] md:text-[25px]">
            Around the US
          </h1>
          <img src={HTML} className="h-[35px] w-[35px] self-center"></img>
          <img src={CSS} className="h-[35px] w-[35px] self-center"></img>
          <img src={JS} className="h-[35px] w-[35px] self-center"></img>
        </div>
        <p className="font-[Poppins] text-black text-[14px] xs:text-[15px]">
          Around the US is a JavaScript-exclusive project that prioritizes
          Object-Oriented Programming (OOP) principles. It welcomes users with a
          visually appealing website, designed with meticulous attention to
          aesthetics. The platform operates as a personalized social media page,
          empowering users to tailor it to their preferences. From editing their
          profiles to uploading new photos and managing their feed effortlessly,
          the user experience is seamless. Explore it today!
        </p>
        <div className="flex gap-[20px]">
          <a href="https://plouis53.github.io/se_project_aroundtheus/">
            <button className="px-[30px] py-[5px] bg-[#2b2b2b] w-fit rounded-md text-white font-[Poppins] hover:scale-105 ease-in-out duration-[.5s]">
              Live site
            </button>{" "}
          </a>
          <a href="https://github.com/Plouis53/se_project_aroundtheus.git">
            <button className="px-[30px] py-[5px] bg-[#2b2b2b] w-fit rounded-md text-white font-[Poppins] hover:scale-105 ease-in-out duration-[.5s]">
              Code
            </button>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default AroundTheUs;
