import React from "react";
import HTML from "../assets/HTML.svg";
import CSS from "../assets/CSS.svg";
import JS from "../assets/JS.svg";
import US from "../images/Us.png";
import ProjectCard from "../components/ProjectCard/ProjectCard";

const AroundTheUs = ({ showCard, category }) => {
  return (
    <div
      className={`flex flex-col mb-[100px] gap-[10px] bg-[#2b2b2b] max-w-[400px] h-fit rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[10px] overflow-visible ${
        showCard === "all" || showCard === category ? "block" : "hidden"
      }`}
    >
      <ProjectCard
        title={"Around The US"}
        ProjectImage={US}
        Stackone={HTML}
        Stacktwo={CSS}
        Stackthree={JS}
        Stackfour={HTML}
        Description={
          <p className="font-[Poppins] text-black text-[14px] xs:text-[15px]">
            Around the US is a JavaScript-exclusive project that prioritizes
            Object-Oriented Programming (OOP) principles. It welcomes users with
            a visually appealing website, designed with meticulous attention to
            aesthetics. The platform operates as a personalized social media
            page, empowering users to tailor it to their preferences. From
            editing their profiles to uploading new photos and managing their
            feed effortlessly, the user experience is seamless. Explore it
            today!
          </p>
        }
        LiveSite={"https://plouis53.github.io/se_project_aroundtheus/"}
        Code={"https://github.com/Plouis53/se_project_aroundtheus.git"}
        className={undefined}
      />
    </div>
  );
};

export default AroundTheUs;
