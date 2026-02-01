import JavaScript from "../assets/JavaScript.svg";
import React from "../assets/React.svg";
import LegalFirm from "../images/Lawfirm.png";
import White from "../../src/images/WhiteImage.png";
import ProjectCard from "../components/ProjectCard/ProjectCard";

const LawFirm = ({ showCard, category }) => {
  return (
    <div
      className={`flex flex-col mb-[100px] gap-[10px] bg-[#2b2b2b] max-w-[400px] h-fit rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[10px] overflow-visible ${
        showCard === "all" || showCard === category ? "block" : "hidden"
      }`}
    >
      <ProjectCard
        title={"Cire-Legal"}
        Stackone={React}
        Stacktwo={JavaScript}
        Stackthree={White}
        Stackfour={White}
        Stackfive={White}
        ProjectImage={LegalFirm}
        Description={
          <p className="font-[Poppins] text-black text-[14px] xs:text-[15px]">
            Built and deployed a responsive law firm website using React and
            JavaScript, with a focus on clean design, clear service navigation,
            and mobile-friendly user experience. Owned the project end-to-end,
            including component development, styling, and production deployment
            with custom domain and SSL configuration on Netlify.
          </p>
        }
        LiveSite={"https://cire-legal.com/"}
        Code={"https://github.com/Plouis53/cire-legal-app-"}
        className={undefined}
      />
    </div>
  );
};

export default LawFirm;
