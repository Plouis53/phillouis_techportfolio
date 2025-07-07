import React from "react";
import Tailwind from "../assets/Tailwind.svg";
import ReactLogo from "../assets/React.svg";
import Mental from "../images/Mental.png";
import NextLogo from "../assets/Nextjs.svg";
import White from "../../src/images/WhiteImage.png";
import ProjectCard from "../components/ProjectCard/ProjectCard";

const ClinicalDigest = ({ showCard, category }) => {
  return (
    <div
      className={`flex flex-col mb-[100px] gap-[10px] bg-[#2b2b2b] max-w-[400px] h-fit rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[10px] overflow-visible ${
        showCard === "all" || showCard === category ? "block" : "hidden"
      }`}
    >
      <ProjectCard
        title={"My Mental Health App"}
        Stackone={ReactLogo}
        Stacktwo={Tailwind}
        Stackfour={White}
        Stackfive={White}
        Stacksix={NextLogo}
        MentalApp={Mental}
        Description={
          <p className="font-[Poppins] text-black text-[14px] xs:text-[15px]">
            A front-end demo application built using Next.js, TypeScript, and
            Tailwind CSS, designed to showcase how clinical content can be
            organized and displayed for mental health professionals. This
            mock-up allows users to create and view mental health posts,
            including titles, categories, author names, images, briefs, and
            resource links. It features basic form handling and UI
            interactivity. While primarily front-end, the app connects to
            MongoDB for simple data storage using lightweight configuration—no
            full backend framework or server logic included.
          </p>
        }
        LiveSite={"https://prlouisportfolio.com/"}
        Code={"https://github.com/Plouis53/phillouis_techportfolio.git"}
        // className={undefined}
        // ProjectImage={undefined}
        // Stackthree={undefined}
      />
    </div>
  );
};

export default ClinicalDigest;
