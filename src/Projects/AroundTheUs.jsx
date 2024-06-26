import ProjectCard from "../components/ProjectCard/ProjectCard";
import HTML from "../../src/assets/HTML.svg";
import CSS from "../../src/assets/CSS.svg";
import JavaScript from "../../src/assets/JavaScript.svg";
import US from "../../src/images/Us.png";
import White from "../../src/images/WhiteImage.png";
import React from "react";

const AroundTheUs = ({ showCard, category }) => {
  return (
    <div
      className={`flex flex-col mb-[100px] gap-[10px] bg-[#2b2b2b] max-w-[400px] h-fit rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[10px] overflow-visible ${
        showCard === "all" || showCard === category ? "block" : "hidden"
      }`}
    >
      <ProjectCard
        title={"Around The US"}
        Stackone={HTML}
        Stacktwo={CSS}
        Stackthree={JavaScript}
        Stackfour={White}
        Stackfive={White}
        ProjectImage={US}
        Description={
          <p className="font-[Poppins] text-black text-[14px] xs:text-[15px]">
            Explore Around the US, a JavaScript project focused on
            Object-Oriented Programming (OOP) principles. It's a visually
            stunning website that acts like a personalized social media page.
            Users can edit profiles, upload photos, and manage their feed with
            ease. Check it out now!
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
