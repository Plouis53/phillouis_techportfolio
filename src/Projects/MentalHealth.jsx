import ProjectCard from "../components/ProjectCard/ProjectCard";
import TypeScript from "../assets/typescript.svg";
import Next from "../assets/Next.svg";
import Tailwind from "../assets/Tailwind.svg";
import MentalHealth1 from "../images/Mental.png";
import White from "../../src/images/WhiteImage.png";
import React from "react";

const MentalHealth = ({ showCard, category }) => {
  return (
    <div
      className={`flex flex-col mb-[100px] gap-[10px] bg-[#2b2b2b] max-w-[400px] h-fit rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[10px] overflow-visible ${
        showCard === "all" || showCard === category ? "block" : "hidden"
      }`}
    >
      <ProjectCard
        title={"Mental Health App"}
        Stackone={TypeScript}
        // Stackone={ReactLogo}
        Stacktwo={Tailwind}
        Stackthree={Next}
        Stackfour={White}
        Stackfive={White}
        ProjectImage={MentalHealth1}
        Description={
          <p className="font-[Poppins] text-black text-[14px] xs:text-[15px]">
            A front-end demo built with Next.js, TypeScript, and Tailwind CSS to
            display and create mental health posts. Includes basic form handling
            and lightweight MongoDB integration.
          </p>
        }
        // LiveSite={"https://prlouisportfolio.com/"}
        Code={"https://github.com/Plouis53/phillouis_techportfolio.git"}
        className={undefined}
      />
    </div>
  );
};

export default MentalHealth;
