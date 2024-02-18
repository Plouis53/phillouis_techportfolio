import Tailwind from "../assets/Tailwind.svg";
import React from "../assets/React.svg";
import Portfolio from "../images/Portfolio.png";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import NODE from "../assets/NODE.svg";

const MyPortfolio = ({ showCard, category }) => {
  return (
    <div
      className={`flex flex-col mb-[100px] gap-[10px] bg-[#2b2b2b] max-w-[400px] h-fit rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[10px] overflow-visible ${
        showCard === "all" || showCard === category ? "block" : "hidden"
      }`}
    >
      <ProjectCard
        title={"My Portfolio"}
        ProjectImage={Portfolio}
        Stackone={React}
        Stacktwo={Tailwind}
        Stackthree={NODE}
        Description={
          <p className="font-[Poppins] text-black text-[14px] xs:text-[15px]">
          The website you're currently exploring was created using React and
          Tailwind CSS. My portfolio offers you insights into both my role as a
          developer and a project manager! Feel free to click the 'Contact'
          option found in both the Navigation and About Me sections to access a
          form for reaching out to me.
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