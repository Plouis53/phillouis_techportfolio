import HTML from "../assets/HTML.svg";
import CSS from "../assets/CSS.svg";
import JS from "../assets/JS.svg";
import React from "../assets/React.svg";
import WTWR1 from "../images/WTWR1.png";

const WhatToWear = ({ showCard, category }) => {
  return (
    <div
      className={`flex flex-col gap-[10px] bg-[#2b2b2b] max-w-[400px] rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[10px] overflow-visible ${
        showCard === "all" || showCard === category ? "block" : "hidden"
      }`}
    >
      <img
        src={WTWR1}
        className="rounded-lg top-[-70px] position: relative shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
      ></img>
      <div className="flex flex-col gap-[20px] justify-between h-[530px] bg-white w-full mt-[-50px] p-[10px] rounded-lg">
        <div className="flex gap-[10px] w-full border-b-[2px] border-black border-opacity-50">
          <h1 className="font-[Poppins] font-semibold text-ellipsis overflow-hidden whitespace-nowrap text-black text-[20px] md:text-[25px]">
            What To Wear
          </h1>
          <img src={HTML} className="h-[35px] w-[35px] self-center"></img>
          <img src={CSS} className="h-[35px] w-[35px] self-center"></img>
          <img src={JS} className="h-[35px] w-[35px] self-center"></img>
          <img src={React} className="h-[35px] w-[35px] self-center"></img>
        </div>
        <p className="font-[Poppins] text-black text-[14px] xs:text-[15px]">
          What to Wear is an incredibly user-friendly app featuring a clean and
          intuitive design. Users have the option to create personalized
          profiles, edit their names, and customize avatars. By adding their
          location, the app provides clothing recommendations based on their
          uploaded closet items, ensuring a tailored experience. This project
          was expertly developed using React.js! Furthermore, it's worth
          mentioning another project I worked on a front-end app that showcases
          user-authored cards with Like counts. I meticulously crafted this
          responsive front-end using HTML, CSS, and JavaScript, and subsequently
          deployed it on GitHub. The codebase was optimized with reusable and
          dynamic card components, enhancing user interaction.
        </p>
        <div className="flex gap-[20px]">
          <a href="https://styleguide.mooo.com/">
            <button className="px-[30px] py-[5px] bg-[#2b2b2b] w-fit rounded-md text-white font-[Poppins] hover:scale-105 ease-in-out duration-[.5s]">
              Live site
            </button>{" "}
          </a>
          <a href="https://github.com/Plouis53/se_project_react.git">
            <button className="px-[30px] py-[5px] bg-[#2b2b2b] w-fit rounded-md text-white font-[Poppins] hover:scale-105 ease-in-out duration-[.5s]">
              Code
            </button>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhatToWear;
