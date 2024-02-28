// import HTML from "../assets/HTML.svg";
// import CSS from "../assets/CSS.svg";
import JS from "../assets/JS.svg";
import React from "../assets/React.svg";
import WTWR1 from "../images/WTWR1.png";
// import NODE from "../assets/NODE.svg";
import Mongo from "../assets/Mongodb.svg";
import ProjectCard from "../components/ProjectCard/ProjectCard";

const WhatToWear = ({ showCard, category }) => {
  return (
    <div
      className={`flex flex-col mb-[100px] gap-[10px] bg-[#2b2b2b] max-w-[400px] h-fit rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[10px] overflow-visible ${
        showCard === "all" || showCard === category ? "block" : "hidden"
      }`}
    >
      <ProjectCard
        title={"What to Wear"}
        ProjectImage={WTWR1}
        Stackone={React}
        Stacktwo={JS}
        Stackthree={Mongo}
        // Stackfour={NODE}
        Description={
          <p className="font-[Poppins] text-black text-[14px] xs:text-[15px]">
            What to Wear is a user-friendly app with personalized profiles and
            location-based clothing recommendations, built using React.js. It
            includes user-authored cards with Like counts and a responsive
            design for improved user interaction.
          </p>
        }
        LiveSite={"https://styleguide.mooo.com/"}
        Code={"https://github.com/Plouis53/se_project_react.git"}
        className={undefined}
      />
    </div>
  );
};

export default WhatToWear;
