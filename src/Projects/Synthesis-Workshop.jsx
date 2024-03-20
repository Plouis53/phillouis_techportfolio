import ProjectCard from "../components/ProjectCard/ProjectCard";
import TypeScript from "../assets/typescript.svg";
import AWSDD from "../assets/AwsDD.svg";
import SynthesisWorkshop1 from "../images/Synthesis-Workshop.png";
import ReactImg from "../assets/React.svg";
import NODE from "../assets/NODE.svg";
import White from "../../src/images/WhiteImage.png";
import React from "react";

const SynthesisWorkshop = ({ showCard, category }) => {
  return (
    <div
      className={`flex flex-col mb-[100px] gap-[10px] bg-[#2b2b2b] max-w-[400px] h-fit rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[10px] overflow-visible ${
        showCard === "all" || showCard === category ? "block" : "hidden"
      }`}
    >
      <ProjectCard
        title={"Synthesis-Workshop"}
        Stackone={TypeScript}
        Stacktwo={NODE}
        Stackthree={ReactImg}
        Stackfour={AWSDD}
        Stackfive={White}
        ProjectImage={SynthesisWorkshop1}
        Description={
          <p className="font-[Poppins] text-black text-[14px] xs:text-[15px]">
            The Synthesis-Workshop project is an educational platform for
            chemistry enthusiasts, including a video podcast platform for
            experts. The platform showcases recent publications to enhance
            chemistry education. I developed a versatile PublicationCard
            component.Technologies used: Typescript, Storybook, React, CSS,
            Express, MongoDB.
          </p>
        }
        LiveSite={
          "http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/"
        }
        Code={"https://github.com/synthesis-workshop/frontend"}
        className={undefined}
      />
    </div>
  );
};

export default SynthesisWorkshop;
