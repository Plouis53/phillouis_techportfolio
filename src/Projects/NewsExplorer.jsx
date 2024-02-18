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
            News Explorer is a news app built with React and Django, featuring
            API integration for curated articles. I've implemented API
            endpoints, optimizing MongoDB integration, and ensured security with
            JWT and bcrypt. Leveraging Google Cloud Platform, I crafted a search
            function to enhance user experience. This project highlights my
            expertise in building secure and user-friendly applications.
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
