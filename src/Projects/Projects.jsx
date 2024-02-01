import NewsExplorer from "../Projects/NewsExplorer.jsx";
import WhatToWear from "../Projects/WhatToWear.jsx";
import AroundTheUs from "../Projects/AroundTheUs.jsx";
import PracticumCoffeeShop from "../Projects/PracticumCoffeeShop.jsx";
import PracticumLibrary from "../Projects/PracticumLibrary.jsx";
import MyPortfolio from "../Projects/Portfolio.jsx";
import ProjectsFilter from "./ProjectsFilter.jsx";
import { useState } from "react";
import React from "react";

const Projects = () => {
  const [showCard, setShowCard] = useState("all");
  const handleProject = (category) => {
    setShowCard(category);
  };
  return (
    <div className="pt-[100px] pb-[100px] bg-[#363636] px-[30px] md:px-[70px]">
      <div className="flex justify-between border-b-[2px] border-white border-opacity-20">
        <h1 className="pb-[10px] font-[Poppins] text-[40px] mb:text-[50px] text-white font-semibold">
          My Projects
        </h1>
        <ProjectsFilter />
      </div>
      <div className="hidden md:flex gap-[50px] mt-[50px] justify-center">
        <button
          onClick={() => handleProject("all")}
          className="bg-[#2b2b2b] text-white font-[Poppins] font-semibold px-[30px] py-[10px] rounded-lg hover:bg-[#656565] hover:scale-110 ease-in-out duration-[.5s]"
        >
          Featured
        </button>
        <button
          onClick={() => handleProject("HTML/CSS")}
          className="bg-[#2b2b2b] text-white font-[Poppins] font-semibold px-[30px] py-[10px] rounded-lg hover:bg-[#656565] hover:scale-110 ease-in-out duration-[.5s]"
        >
          HTML/CSS
        </button>
        <button
          onClick={() => handleProject("JavaScript")}
          className="bg-[#2b2b2b] text-white font-[Poppins] font-semibold px-[30px] py-[10px] rounded-lg hover:bg-[#656565] hover:scale-110 ease-in-out duration-[.5s]"
        >
          JavaScript
        </button>
        <button
          onClick={() => handleProject("React")}
          className="bg-[#2b2b2b] text-white font-[Poppins] font-semibold px-[30px] py-[10px] rounded-lg hover:bg-[#656565] hover:scale-110 ease-in-out duration-[.5s]"
        >
          React
        </button>
      </div>
      {/* adjust accordingly */}
      <div className="mt-[100px] flex flex-col items-center md:flex-row justify-center gap-[50px] mb:gap-[20px]">
        <NewsExplorer category="React" showCard={showCard} />
        <WhatToWear category="React" showCard={showCard} />
        <AroundTheUs category="JavaScript" showCard={showCard} />
        <PracticumCoffeeShop category="HTML/CSS" showCard={showCard} />
        <PracticumLibrary category="HTML/CSS" showCard={showCard} />
        <MyPortfolio category="React" showCard={showCard} />
      </div>
    </div>
  );
};
export default Projects;

// import US from "../images/Us.png";
// import WTWR from "../images/WTWR1.png";
// import Library from "../images/Library.png";
// import HTML from "../assets/HTML.svg";
// import CSS from "../assets/CSS.svg";
// import JS from "../assets/JS.svg";
// import React from "../assets/React.svg";
// // import Tailwind from "../assets/Tailwind.svg";
// import Coffeeshop from "../images/Coffeeshop1.png";
// import NewsExplorer from "../images/NewsEx1.png";
// import Github from "../assets/Github.svg";

// const Projects = () => {
//   return (
//     <div className="pt-[100px] pb-[100px] bg-[#363636] px-[70px]">
//       <h1 className="pb-[10px] font-[Poppins] text-[50px] text-white font-semibold border-b-[2px] border-white border-opacity-20">
//         Projects
//       </h1>
//       <div className="flex gap-[50px] mt-[50px] justify-center">
//         <button className="bg-[#2b2b2b] text-white font-[Poppins] font-semibold px-[30px] py-[10px] rounded-lg hover:bg-[#656565] hover:scale-110 ease-in-out duration-[.5s]">
//           All Projects
//         </button>
//         <button className="bg-[#2b2b2b] text-white font-[Poppins] font-semibold px-[30px] py-[10px] rounded-lg hover:bg-[#656565] hover:scale-110 ease-in-out duration-[.5s]">
//           HTML/CSS
//         </button>
//         <button className="bg-[#2b2b2b] text-white font-[Poppins] font-semibold px-[30px] py-[10px] rounded-lg hover:bg-[#656565] hover:scale-110 ease-in-out duration-[.5s]">
//           JavaScript
//         </button>
//         <button className="bg-[#2b2b2b] text-white font-[Poppins] font-semibold px-[30px] py-[10px] rounded-lg hover:bg-[#656565] hover:scale-110 ease-in-out duration-[.5s]">
//           React
//         </button>
//       </div>
//       <div className="mt-[100px] flex justify-between gap-[20px]">
//         <div className="flex flex-col bg-[#2b2b2b] h-[500px] w-[400px] rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[10px] overflow-visible ">
//           <img
//             src={NewsExplorer}
//             className="rounded-lg top-[-70px] position: relative shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
//           ></img>
//           <div className="flex flex-col justify-between bg-white w-full h-[320px] mt-[-50px] p-[10px] rounded-lg">
//             <div className="flex gap-[10px] w-full border-b-[2px] border-black border-opacity-50">
//               <h1 className="font-[Poppins] font-semibold text-black text-[25px]">
//                 News Explorer
//               </h1>
//               <img src={HTML} className="h-[35px] w-[35px] self-center"></img>
//               <img src={CSS} className="h-[35px] w-[35px] self-center"></img>
//               <img src={JS} className="h-[35px] w-[35px] self-center"></img>
//               <img src={React} className="h-[35px] w-[35px] self-center"></img>
//             </div>
//             <p className="font-[Poppins] text-black text-[15px]">
//               News Explorer is an exciting project—a news app developed using
//               React and Django, thoughtfully integrated with APIs for article
//               curation. The project boasts robust security measures, including
//               JWT and bcrypt for authentication. My responsibilities included
//               designing and implementing API endpoints, enabling seamless
//               MongoDB integration for efficient data storage, all while
//               harnessing the power of Google Cloud Platform (GCP). To ensure an
//               optimized user experience, I employed JavaScript to craft an
//               efficient search feature. This project showcases my ability to
//               build complex applications and underscores my commitment to
//               delivering secure and user-friendly solutions.
//             </p>
//             <div className="flex gap-[20px]">
//               <a href="https://newsquest.mooo.com/">
//                 <button className="px-[30px] py-[5px] bg-[#2b2b2b] w-fit rounded-md text-white font-[Poppins] hover:scale-105 ease-in-out duration-[.5s]">
//                   Live site
//                 </button>{" "}
//               </a>
//               <a href="https://github.com/Plouis53/news-explorer-frontend.git">
//                 <button className="px-[30px] py-[5px] bg-[#2b2b2b] w-fit rounded-md text-white font-[Poppins] hover:scale-105 ease-in-out duration-[.5s]">
//                   Code
//                 </button>{" "}
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="mt-[100px] flex justify-between gap-[20px]">
//           <div className="flex flex-col bg-[#2b2b2b] h-[500px] w-[400px] rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[10px] overflow-visible ">
//             <img
//               src={WTWR}
//               className="rounded-lg top-[-70px] position: relative shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
//             ></img>
//             <div className="flex flex-col justify-between bg-white w-full h-[320px] mt-[-50px] p-[10px] rounded-lg">
//               <div className="flex gap-[10px] w-full border-b-[2px] border-black border-opacity-50">
//                 <h1 className="font-[Poppins] font-semibold text-black text-[25px]">
//                   What to Wear
//                 </h1>
//                 <img src={HTML} className="h-[35px] w-[35px] self-center"></img>
//                 <img src={CSS} className="h-[35px] w-[35px] self-center"></img>
//                 <img src={JS} className="h-[35px] w-[35px] self-center"></img>
//                 <img
//                   src={React}
//                   className="h-[35px] w-[35px] self-center"
//                 ></img>
//               </div>
//               <p className="font-[Poppins] text-black text-[15px]">
//                 What to Wear is an incredibly user-friendly app featuring a
//                 clean and intuitive design. Users have the option to create
//                 personalized profiles, edit their names, and customize avatars.
//                 By adding their location, the app provides clothing
//                 recommendations based on their uploaded closet items, ensuring a
//                 tailored experience. This project was expertly developed using
//                 React.js! Furthermore, it's worth mentioning another project I
//                 worked on a front-end app that showcases user-authored cards
//                 with Like counts. I meticulously crafted this responsive
//                 front-end using HTML, CSS, and JavaScript, and subsequently
//                 deployed it on GitHub. The codebase was optimized with reusable
//                 and dynamic card components, enhancing user interaction.
//               </p>
//               <div className="flex gap-[20px]">
//                 <a href="https://styleguide.mooo.com/">
//                   <button className="px-[30px] py-[5px] bg-[#2b2b2b] w-fit rounded-md text-white font-[Poppins] hover:scale-105 ease-in-out duration-[.5s]">
//                     Live site
//                   </button>{" "}
//                 </a>
//                 <a href="https://github.com/Plouis53/se_project_react.git">
//                   <button className="px-[30px] py-[5px] bg-[#2b2b2b] w-fit rounded-md text-white font-[Poppins] hover:scale-105 ease-in-out duration-[.5s]">
//                     Code
//                   </button>{" "}
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-col bg-[#2b2b2b] h-[500px] w-[400px] rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[10px] overflow-visible ">
//             <img
//               src={US}
//               className="rounded-lg top-[-70px] position: relative shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
//             ></img>
//             <div className="flex flex-col justify-between bg-white w-full h-[320px] mt-[-50px] p-[10px] rounded-lg">
//               <div className="flex gap-[10px] w-full border-b-[2px] border-black border-opacity-50">
//                 <h1 className="font-[Poppins] font-semibold text-black text-[25px]">
//                   Around the US
//                 </h1>
//                 <img src={HTML} className="h-[35px] w-[35px] self-center"></img>
//                 <img src={CSS} className="h-[35px] w-[35px] self-center"></img>
//                 <img src={JS} className="h-[35px] w-[35px] self-center"></img>
//               </div>
//               <p className="font-[Poppins] text-black text-[15px]">
//                 Around the US is a JavaScript-exclusive project that prioritizes
//                 Object-Oriented Programming (OOP) principles. It welcomes users
//                 with a visually appealing website, designed with meticulous
//                 attention to aesthetics. The platform operates as a personalized
//                 social media page, empowering users to tailor it to their
//                 preferences. From editing their profiles to uploading new photos
//                 and managing their feed effortlessly, the user experience is
//                 seamless. Explore it today!
//               </p>
//               <div className="flex gap-[20px]">
//                 <button className="px-[30px] py-[5px] bg-[#2b2b2b] w-fit rounded-md text-white font-[Poppins] hover:scale-105 ease-in-out duration-[.5s]">
//                   Live site
//                 </button>
//                 <a href="https://plouis53.github.io/se_project_aroundtheus/">
//                   <button className="px-[30px] py-[5px] bg-[#2b2b2b] w-fit rounded-md text-white font-[Poppins] hover:scale-105 ease-in-out duration-[.5s]">
//                     Code
//                   </button>{" "}
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-col bg-[#2b2b2b] h-[500px] w-[400px] rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[10px] overflow-visible ">
//             <img
//               src={Coffeeshop}
//               className="rounded-lg top-[-70px] position: relative shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
//             ></img>
//             <div className="flex flex-col justify-between bg-white w-full h-[325px] mt-[-50px] p-[10px] rounded-lg">
//               <div className="flex gap-[10px] w-full border-b-[2px] border-black border-opacity-50">
//                 <h1 className="font-[Poppins] font-semibold text-black text-[25px]">
//                   Practicum Coffee shop
//                 </h1>
//                 <img src={HTML} className="h-[35px] w-[35px] self-center"></img>
//                 {/* <img src={JS} className="h-[35px] w-[35px] self-center"></img> */}
//                 <img src={CSS} className="h-[35px] w-[35px] self-center"></img>
//               </div>
//               <p className="font-[Poppins] text-black text-[15px]">
//                 The Practicum Coffee Shop project centered around the creation
//                 of a landing page, leveraging advanced HTML and CSS techniques.
//                 My responsibilities included developing website layouts,
//                 implementing interactive forms, and ensuring a responsive design
//                 that is compatible across various browsers.
//               </p>
//               <div className="flex gap-[20px]">
//                 {/* <button className="px-[30px] py-[5px] bg-[#2b2b2b] w-fit rounded-md text-white font-[Poppins] hover:scale-105 ease-in-out duration-[.5s]">
//                   Live site
//                 </button> */}
//                 <button className="px-[30px] py-[5px] bg-[#2b2b2b] w-fit rounded-md text-white font-[Poppins] hover:scale-105 ease-in-out duration-[.5s]">
//                   Code
//                 </button>{" "}
//                 <a href="https://github.com/Plouis53/se_project_coffeeshop.git"></a>
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-col bg-[#2b2b2b] h-[500px] w-[400px] rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[10px] overflow-visible ">
//             <img
//               src={Library}
//               className="rounded-lg top-[-70px] position: relative shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
//             ></img>
//             <div className="flex flex-col justify-between bg-white w-full h-[320px] mt-[-50px] p-[10px] rounded-lg">
//               <div className="flex gap-[10px] w-full border-b-[2px] border-black border-opacity-50">
//                 <h1 className="font-[Poppins] font-semibold text-black text-[25px]">
//                   Practicum Library
//                 </h1>
//                 <img src={HTML} className="h-[35px] w-[35px] self-center"></img>
//                 <img src={CSS} className="h-[35px] w-[35px] self-center"></img>
//                 <img
//                   src={Github}
//                   className="h-[35px] w-[35px] self-center"
//                 ></img>
//               </div>
//               <p className="font-[Poppins] text-black text-[15px]">
//                 The Practicum Library is a single-page landing site featuring
//                 clean and semantic HTML markup. My role involved implementing
//                 navigation links to enhance website usability, and I also worked
//                 collaboratively with team members to identify and resolve code
//                 issues, ensuring a seamless user experience.
//               </p>
//               <div className="flex gap-[20px]">
//                 <button className="px-[30px] py-[5px] bg-[#2b2b2b] w-fit rounded-md text-white font-[Poppins] hover:scale-105 ease-in-out duration-[.5s]">
//                   Code
//                 </button>{" "}
//                 <a href="https://github.com/Plouis53/se_project_library.git"></a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Projects;

//1.29.24.b import ProjectCards from "../Projects/ProjectCards";

// const Projects = () => {
//   return (
//     <div className="bg-[#363636] max-w-[100%] pt-20 pb-[125px]">
//       <h1 className="font-[Poppins] text-white text-[50px] font-semibold pb-[10px] border-[#f5dfa1] border-b-2 mx-[70px]">
//         Projects
//       </h1>
//       <div className="flex gap-[20px] justify-center mt-[50px]">
//         <button className="group relative inline-block overflow-hidden rounded border border-gray-100 bg-white  px-8 py-2 text-[15px] hover:scale-110 ease-in-out duration-[1s] font-semibold mt-[50px] text-black focus:outline-none focus:ring active:bg-[#f5dfa1] active:text-white">
//           <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-black transition-all duration-[1s] group-hover:w-full"></span>
//           <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-black transition-all duration-[1s] group-hover:h-full"></span>
//           <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-black transition-all duration-[1s] group-hover:w-full"></span>
//           <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-black transition-all duration-[1s] group-hover:h-full"></span>
//           All projects
//         </button>
//         <button className="group relative inline-block overflow-hidden rounded border border-gray-100 bg-white  px-8 py-2 text-[15px] hover:scale-110 ease-in-out duration-[1s] font-semibold mt-[50px] text-black focus:outline-none focus:ring active:bg-[#f5dfa1] active:text-white">
//           <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-black transition-all duration-[1s] group-hover:w-full"></span>
//           <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-black transition-all duration-[1s] group-hover:h-full"></span>
//           <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-black transition-all duration-[1s] group-hover:w-full"></span>
//           <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-black transition-all duration-[1s] group-hover:h-full"></span>
//           HTML/CSS
//         </button>
//         <button className="group relative inline-block overflow-hidden rounded border border-gray-100 bg-white  px-8 py-2 text-[15px] hover:scale-110 ease-in-out duration-[1s] font-semibold mt-[50px] text-black focus:outline-none focus:ring active:bg-[#f5dfa1] active:text-white">
//           <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-black transition-all duration-[1s] group-hover:w-full"></span>
//           <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-black transition-all duration-[1s] group-hover:h-full"></span>
//           <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-black transition-all duration-[1s] group-hover:w-full"></span>
//           <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-black transition-all duration-[1s] group-hover:h-full"></span>
//           JavaScript
//         </button>
//         <button className="group relative inline-block overflow-hidden rounded border border-gray-100 bg-white  px-8 py-2 text-[15px] hover:scale-110 ease-in-out duration-[1s] font-semibold mt-[50px] text-black focus:outline-none focus:ring active:bg-[#f5dfa1] active:text-white">
//           <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-black transition-all duration-[1s] group-hover:w-full"></span>
//           <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-black transition-all duration-[1s] group-hover:h-full"></span>
//           <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-black transition-all duration-[1s] group-hover:w-full"></span>
//           <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-black transition-all duration-[1s] group-hover:h-full"></span>
//           React
//         </button>
//       </div>
//       <div className="flex flex-wrap justify-between max-w-[100%]  gap-[30px] mt-[50px] mx-[70px]">
//         <ProjectCards />
//       </div>
//       <div className="flex justify-center"></div>
//     </div>
//   );
// };
// export default Projects;
