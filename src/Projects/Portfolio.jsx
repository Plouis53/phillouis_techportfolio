import React from "react";
import Tailwind from "../assets/Tailwind.svg";
import ReactLogo from "../assets/React.svg";
import PortfolioImage from "../images/Portfolio.png";
import Netlify from "../assets/Netlify.svg";
import White from "../../src/images/WhiteImage.png";
import ProjectCard from "../components/ProjectCard/ProjectCard";

const MyPortfolio = ({ showCard, category }) => {
  return (
    <div
      className={`flex flex-col mb-[100px] gap-[10px] bg-[#2b2b2b] max-w-[400px] h-fit rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[10px] overflow-visible ${
        showCard === "all" || showCard === category ? "block" : "hidden"
      }`}
    >
      <ProjectCard
        title={"My Portfolio"}
        Stackone={ReactLogo}
        Stacktwo={Tailwind}
        Stackthree={Netlify}
        Stackfour={White}
        Stackfive={White}
        ProjectImage={PortfolioImage}
        Description={
          <p className="font-[Poppins] text-black text-[14px] xs:text-[15px]">
            The website you're currently exploring was created using React and
            Tailwind CSS. My portfolio offers you insights into both my role as
            a developer and a project manager! Feel free to click the 'Contact'
            option found in both the Navigation and About Me sections to access
            a form for reaching out to me.
          </p>
        }
        LiveSite={"https://prlouisportfolio.com/"}
        Code={"https://github.com/Plouis53/phillouis_techportfolio.git"}
        className={undefined}
      />
    </div>
  );
};

export default MyPortfolio;
