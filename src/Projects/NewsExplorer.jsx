import HTML from "../assets/HTML.svg";
import CSS from "../assets/CSS.svg";
import JS from "../assets/JS.svg";
import NewsEx1 from "../images/NewsEx1.png";
import React from "../assets/React.svg";

const NewsExplorer = ({ showCard, category }) => {
  return (
    <div
      className={`flex flex-col gap-[10px] bg-[#2b2b2b] max-w-[400px] rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[10px] overflow-visible ${
        showCard === "all" || showCard === category ? "block" : "hidden"
      }`}
    >
      <img
        src={NewsEx1}
        className="rounded-lg top-[-70px] position: relative shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
      ></img>
      <div className="flex flex-col gap-[20px] h-[530px] justify-between w-full bg-white mt-[-50px] p-[10px] rounded-lg">
        <div className="flex gap-[10px] w-full border-b-[2px] border-black border-opacity-50">
          <h1 className="font-[Poppins] font-semibold text-black text-[25px]">
            News Explorer
          </h1>
          <img src={HTML} className="h-[35px] w-[35px] self-center"></img>
          <img src={CSS} className="h-[35px] w-[35px] self-center"></img>
          <img src={JS} className="h-[35px] w-[35px] self-center"></img>
          <img src={React} className="h-[35px] w-[35px] self-center"></img>
        </div>
        <p className="font-[Poppins] text-black text-[15px]">
          News Explorer is an exciting project—a news app developed using React
          and Django, thoughtfully integrated with APIs for article curation.
          The project boasts robust security measures, including JWT and bcrypt
          for authentication. My responsibilities included designing and
          implementing API endpoints, enabling seamless MongoDB integration for
          efficient data storage, all while harnessing the power of Google Cloud
          Platform (GCP). To ensure an optimized user experience, I employed
          JavaScript to craft an efficient search feature. This project
          showcases my ability to build complex applications and underscores my
          commitment to delivering secure and user-friendly solutions.
        </p>
        <div className="flex gap-[20px]">
          <a href="https://newsquest.mooo.com/">
            <button className="px-[30px] py-[5px] bg-[#2b2b2b] w-fit rounded-md text-white font-[Poppins] hover:scale-105 ease-in-out duration-[.5s]">
              Live site
            </button>{" "}
          </a>
          <a href="https://github.com/Plouis53/news-explorer-frontend.git">
            <button className="px-[30px] py-[5px] bg-[#2b2b2b] w-fit rounded-md text-white font-[Poppins] hover:scale-105 ease-in-out duration-[.5s]">
              Code
            </button>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsExplorer;
