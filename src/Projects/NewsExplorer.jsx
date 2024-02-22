import JS from "../assets/JS.svg";
import NewsEx1 from "../images/NewsEx1.png";
import React from "../assets/React.svg";
import NODE from "../assets/NODE.svg";
import Mongo from "../assets/Mongodb.svg";
import ProjectCard from "../components/ProjectCard/ProjectCard";

const NewsExplorer = ({ showCard, category }) => {
  return (
    <div
      className={`flex flex-col mb-[100px] gap-[10px] bg-[#2b2b2b] max-w-[400px] h-fit rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[10px] overflow-visible ${
        showCard === "all" || showCard === category ? "block" : "hidden"
      }`}
    >
      <ProjectCard
        title={"News Explorer"}
        ProjectImage={NewsEx1}
        Stackone={React}
        Stacktwo={JS}
        Stackthree={Mongo}
        Stackfour={NODE}
        Description={
          <p className="font-[Poppins] text-black text-[14px] xs:text-[15px]">
            News Explorer, a React and Django news app, integrates APIs for
            curated articles. I've optimized MongoDB integration, ensured
            security with JWT and bcrypt, and created a search function on
            Google Cloud Platform. This project showcases my ability to build
            secure, user-friendly apps
          </p>
        }
        LiveSite={"https://newsquest.mooo.com/"}
        Code={"https://github.com/Plouis53/news-explorer-frontend.git"}
        className={undefined}
      />
    </div>
  );
};

export default NewsExplorer;
