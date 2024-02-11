import React from "react";
import Image1 from "../images/Image1.png";
// import Bounce from "react-reveal/Bounce";
// import Image2 from "../images/Image2.png";

const About = (openModal) => {
  return (
    <div
      id="about"
      className="px-[30px] mb-[20px] lg:mb-[100px] md:px-[70px] py-[100px] w-full"
    >
      <h1 className="pb-[10px] font-[Poppins] text-[40px] md:text-[50px] text-white font-semibold border-b-[2px] border-white border-opacity-20">
        About me
      </h1>
      <div className="flex flex-col md:flex-row justify-between gap-[40px] mt-[50px]">
        <div className="flex flex-col gap-[20px] justify-center w-full mb:max-w-[50%] h-[fit] md:h-[750px] bg-[#363636] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[20px] rounded-xl">
          <div className="relative border-s border-gray-200 dark:border-[#f5dfa1]">
            <div className="relative border-s border-gray-200 dark:border-[#f5dfa1]">
              {/* <Bounce> */}
              <div className="px-[15px]">
                <h1 className="font-[Poppins] mb-[20px] text-[20px] xs:text-[30px] md:text-[30px] pb-[5px] font-semibold text-white border-b-[2px] border-white border-opacity-50">
                  Education
                </h1>
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-[#f5dfa1]"></div>
                <time className="font-[Poppins] text-gray-400 text-[15px]">
                  September-2022 - September-2023
                </time>
                <h2 className="font-[Poppins] text-white text-[15px] xs:text-[18px] mt-[10px] mb-[10px]">
                  TripleTen Software Engineering Bootcamp by Yandex
                </h2>
                <p className="font-[Poppins] text-gray-400 text-[15px] mb-[10px]">
                  At TripleTen, I've gained extensive experience in various
                  front-end and back-end stacks. With over 1920+ hours of
                  coursework and numerous projects, my time at TripleTen has
                  equipped me with the knowledge and skills needed to excel as a
                  successful full-stack developer.
                </p>
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-[#f5dfa1]"></div>
                <time className="font-[Poppins] text-gray-400 text-[15px]">
                  August-2012 - May-2014
                </time>
                <h2 className="font-[Poppins] text-white text-[15px] xs:text-[18px] mt-[10px] mb-[10px]">
                  Mercer University
                </h2>
                <p className="font-[Poppins] text-gray-400 text-[15px] mb-[10px]">
                  Master of Science (MS), Clinical Mental Health | Atlanta,
                  Georgia
                </p>
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-[#f5dfa1]"></div>
                <time className="font-[Poppins] text-gray-400 text-[15px]">
                  August-2007 - May-2010
                </time>
                <h2 className="font-[Poppins] text-white text-[15px] xs:text-[18px] mt-[10px] mb-[10px]">
                  Clark Atlanta University
                </h2>
                <p className="font-[Poppins] text-gray-400 text-[15px] mb-[10px]">
                  Bachelor of Arts (BA), Psychology | Atlanta, Georgia
                </p>
              </div>
            </div>
            <div className="px-[15px]">
              <h1 className="font-[Poppins] mb-[20px] text-[20px] xs:text-[30px] pb-[5px] font-semibold text-white border-b-[2px] border-white border-opacity-50">
                Experience
              </h1>
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-[#f5dfa1]"></div>
              <time className="font-[Poppins] text-gray-400 text-[15px]">
                September 2022 - Present
              </time>
              <h2 className="font-[Poppins] text-white text-[15px] xs:text-[18px] mt-[10px] mb-[10px]">
                Triple Ten - Remote
              </h2>
              <p className="font-[Poppins] text-gray-400 text-[15px] mb-[10px]">
                Software Engineer
              </p>
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-[#f5dfa1]"></div>
              <time className="font-[Poppins] text-gray-400 text-[15px]">
                Feburary 2023-June 2023
              </time>
              <h2 className="font-[Poppins] text-white text-[15px] xs:text-[18px] mt-[10px] mb-[10px]">
                American Cancer Society-Contract
              </h2>
              <p className="font-[Poppins] text-gray-400 text-[15px] mb-[10px]">
                IT Project Manager | Remote
              </p>
            </div>
            {/* </Bounce> */}
          </div>
        </div>
        <div className="flex mb:flex-col gap-[20px] align-center w-full md:max-w-[50%] h-[750px] rounded-xl">
          <div className="flex flex-col justify-between h-fit md:h-[750px] rounded-xl bg-[#363636] p-[20px] gap-[20px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
            <div className="flex m-auto mb-0 mt-0 gap-[30px] border-[1px] border-white rounded-[25%] p-[5px] w-[175px] md:w-[250px]">
              <img
                src={Image1}
                className="h-[250px] w-[175px] md:h-fit md:w-[250px] rounded-[25%] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
              ></img>
            </div>
            <p className="font-[Poppins] text-[14px] xs:text-[15px] text-white text-center">
              My name is Phillippe Louis and I am a passionate web and
              application designer with a deep love for creating visually
              captivating and user-friendly digital experiences. My journey in
              the world of web development began with a curiosity for turning
              ideas into interactive and functional websites. Over the years,
              I've honed my skills in both front-end and back-end technologies,
              making me a versatile developer ready to take on any challenge. On
              the front-end, I specialize in crafting dynamic and engaging user
              interfaces using Typescript, JavaScript, React.js, HTML, CSS3, and
              the powerful Tailwind CSS framework. When it comes to the
              back-end, my tech stack is fortified with Node.js, Express.js,
              MongoDB, and Google Cloud. In addition to my technical skills, I'm
              highly experienced in using Git and GitHub for project management
              and collaboration. Whether it's a personal project or a
              collaborative effort, I'm always eager to tackle new challenges
              and bring ideas to life. Feel free to reach out, and let's work
              together to create something amazing!
            </p>
            <a
              onClick={openModal}
              href="#_"
              className="hidden lg:inline-flex shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] relative lg:items-center justify-center px-[24px] py-[12px] w-[200px] m-auto mt-0 mb-0 overflow-hidden font-medium bg-[#f5dfa1] text-black transition duration-300 ease-out rounded-full group"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-[#f5dfa1] group-hover:translate-x-0 ease">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="black"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">
                Contact
              </span>
              <span className="relative invisible">Contact</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

// import React from "react";
// import Image1 from "../images/Image1.png";
// import Image2 from "../images/Image2.png";
// import Image3 from "../images/Image3.png";

// add {openModal}

// const About = () => {
//   return (
//     <p className="mb-[40px] font-[Poppins] text-white">
//       My name is Phillippe Louis and I am a passionate web and application
//       designer with a deep love for creating visually captivating and
//       user-friendly digital experiences. My journey in the world of web
//       development began with a curiosity for turning ideas into interactive and
//       functional websites. Over the years, I've honed my skills in both
//       front-end and back-end technologies, making me a versatile developer ready
//       to take on any challenge. On the front-end, I specialize in crafting
//       dynamic and engaging user interfaces using Typescript, JavaScript,
//       React.js, HTML, CSS3, and the powerful Tailwind CSS framework. When it
//       comes to the back-end, my tech stack is fortified with Node.js,
//       Express.js, MongoDB, and Google Cloud. In addition to my technical skills,
//       I'm highly experienced in using Git and GitHub for project management and
//       collaboration. Whether it's a personal project or a collaborative effort,
//       I'm always eager to tackle new challenges and bring ideas to life. Feel
//       free to reach out, and let's work together to create something amazing!
//     </p>
//   );
// };

// export default About;

// // import React from "react";
// import Image1 from "../images/Image1.png";
// import Image2 from "../images/Image2.png";
// import Image3 from "../images/Image3.png";

// const About = ({ openModal }) => {
//   return (
//     <>
//       <section className="overflow-hidden bg-[#2b2b2b] pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-[#32b2b2b] dark:bg-dark">
//         <div className="container mx-auto">
//           <div className="flex flex-wrap items-center justify-between -mx-4">
//             <div className="w-full px-4 lg:w-6/12">
//               <div className="flex items-center -mx-3 sm:-mx-4">
//                 <div className="w-full px-3 sm:px-4 xl:w-1/2">
//                   <div className="py-3 sm:py-4">
//                     <img src={Image1} alt="" className="w-full rounded-2xl" />
//                   </div>
//                   <div className="py-3 sm:py-4">
//                     <img
//                       src={Image3}
//                       alt=""
//                       className="w-full h-[50%] rounded-2xl"
//                     />
//                   </div>
//                 </div>
//                 <div className="w-full px-3 sm:px-4 xl:w-1/2">
//                   <div className="relative z-10 my-4">
//                     <img src={Image2} alt="" className="w-full rounded-2xl" />
//                     <span className="absolute -right-7 -bottom-7 z-[-1]">
//                       <svg
//                         width={134}
//                         height={106}
//                         viewBox="0 0 134 106"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <circle
//                           cx="1.66667"
//                           cy={104}
//                           r="1.66667"
//                           transform="rotate(-90 1.66667 104)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="16.3333"
//                           cy={104}
//                           r="1.66667"
//                           transform="rotate(-90 16.3333 104)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx={31}
//                           cy={104}
//                           r="1.66667"
//                           transform="rotate(-90 31 104)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="45.6667"
//                           cy={104}
//                           r="1.66667"
//                           transform="rotate(-90 45.6667 104)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="60.3334"
//                           cy={104}
//                           r="1.66667"
//                           transform="rotate(-90 60.3334 104)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="88.6667"
//                           cy={104}
//                           r="1.66667"
//                           transform="rotate(-90 88.6667 104)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="117.667"
//                           cy={104}
//                           r="1.66667"
//                           transform="rotate(-90 117.667 104)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="74.6667"
//                           cy={104}
//                           r="1.66667"
//                           transform="rotate(-90 74.6667 104)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx={103}
//                           cy={104}
//                           r="1.66667"
//                           transform="rotate(-90 103 104)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx={132}
//                           cy={104}
//                           r="1.66667"
//                           transform="rotate(-90 132 104)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="1.66667"
//                           cy="89.3333"
//                           r="1.66667"
//                           transform="rotate(-90 1.66667 89.3333)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="16.3333"
//                           cy="89.3333"
//                           r="1.66667"
//                           transform="rotate(-90 16.3333 89.3333)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx={31}
//                           cy="89.3333"
//                           r="1.66667"
//                           transform="rotate(-90 31 89.3333)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="45.6667"
//                           cy="89.3333"
//                           r="1.66667"
//                           transform="rotate(-90 45.6667 89.3333)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="60.3333"
//                           cy="89.3338"
//                           r="1.66667"
//                           transform="rotate(-90 60.3333 89.3338)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="88.6667"
//                           cy="89.3338"
//                           r="1.66667"
//                           transform="rotate(-90 88.6667 89.3338)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="117.667"
//                           cy="89.3338"
//                           r="1.66667"
//                           transform="rotate(-90 117.667 89.3338)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="74.6667"
//                           cy="89.3338"
//                           r="1.66667"
//                           transform="rotate(-90 74.6667 89.3338)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx={103}
//                           cy="89.3338"
//                           r="1.66667"
//                           transform="rotate(-90 103 89.3338)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx={132}
//                           cy="89.3338"
//                           r="1.66667"
//                           transform="rotate(-90 132 89.3338)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="1.66667"
//                           cy="74.6673"
//                           r="1.66667"
//                           transform="rotate(-90 1.66667 74.6673)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="1.66667"
//                           cy="31.0003"
//                           r="1.66667"
//                           transform="rotate(-90 1.66667 31.0003)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="16.3333"
//                           cy="74.6668"
//                           r="1.66667"
//                           transform="rotate(-90 16.3333 74.6668)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="16.3333"
//                           cy="31.0003"
//                           r="1.66667"
//                           transform="rotate(-90 16.3333 31.0003)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx={31}
//                           cy="74.6668"
//                           r="1.66667"
//                           transform="rotate(-90 31 74.6668)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx={31}
//                           cy="31.0003"
//                           r="1.66667"
//                           transform="rotate(-90 31 31.0003)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="45.6667"
//                           cy="74.6668"
//                           r="1.66667"
//                           transform="rotate(-90 45.6667 74.6668)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="45.6667"
//                           cy="31.0003"
//                           r="1.66667"
//                           transform="rotate(-90 45.6667 31.0003)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="60.3333"
//                           cy="74.6668"
//                           r="1.66667"
//                           transform="rotate(-90 60.3333 74.6668)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="60.3333"
//                           cy="30.9998"
//                           r="1.66667"
//                           transform="rotate(-90 60.3333 30.9998)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="88.6667"
//                           cy="74.6668"
//                           r="1.66667"
//                           transform="rotate(-90 88.6667 74.6668)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="88.6667"
//                           cy="30.9998"
//                           r="1.66667"
//                           transform="rotate(-90 88.6667 30.9998)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="117.667"
//                           cy="74.6668"
//                           r="1.66667"
//                           transform="rotate(-90 117.667 74.6668)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="117.667"
//                           cy="30.9998"
//                           r="1.66667"
//                           transform="rotate(-90 117.667 30.9998)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="74.6667"
//                           cy="74.6668"
//                           r="1.66667"
//                           transform="rotate(-90 74.6667 74.6668)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="74.6667"
//                           cy="30.9998"
//                           r="1.66667"
//                           transform="rotate(-90 74.6667 30.9998)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx={103}
//                           cy="74.6668"
//                           r="1.66667"
//                           transform="rotate(-90 103 74.6668)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx={103}
//                           cy="30.9998"
//                           r="1.66667"
//                           transform="rotate(-90 103 30.9998)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx={132}
//                           cy="74.6668"
//                           r="1.66667"
//                           transform="rotate(-90 132 74.6668)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx={132}
//                           cy="30.9998"
//                           r="1.66667"
//                           transform="rotate(-90 132 30.9998)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="1.66667"
//                           cy="60.0003"
//                           r="1.66667"
//                           transform="rotate(-90 1.66667 60.0003)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="1.66667"
//                           cy="16.3333"
//                           r="1.66667"
//                           transform="rotate(-90 1.66667 16.3333)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="16.3333"
//                           cy="60.0003"
//                           r="1.66667"
//                           transform="rotate(-90 16.3333 60.0003)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="16.3333"
//                           cy="16.3333"
//                           r="1.66667"
//                           transform="rotate(-90 16.3333 16.3333)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx={31}
//                           cy="60.0003"
//                           r="1.66667"
//                           transform="rotate(-90 31 60.0003)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx={31}
//                           cy="16.3333"
//                           r="1.66667"
//                           transform="rotate(-90 31 16.3333)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="45.6667"
//                           cy="60.0003"
//                           r="1.66667"
//                           transform="rotate(-90 45.6667 60.0003)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="45.6667"
//                           cy="16.3333"
//                           r="1.66667"
//                           transform="rotate(-90 45.6667 16.3333)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="60.3333"
//                           cy="60.0003"
//                           r="1.66667"
//                           transform="rotate(-90 60.3333 60.0003)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="60.3333"
//                           cy="16.3333"
//                           r="1.66667"
//                           transform="rotate(-90 60.3333 16.3333)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="88.6667"
//                           cy="60.0003"
//                           r="1.66667"
//                           transform="rotate(-90 88.6667 60.0003)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="88.6667"
//                           cy="16.3333"
//                           r="1.66667"
//                           transform="rotate(-90 88.6667 16.3333)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="117.667"
//                           cy="60.0003"
//                           r="1.66667"
//                           transform="rotate(-90 117.667 60.0003)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="117.667"
//                           cy="16.3333"
//                           r="1.66667"
//                           transform="rotate(-90 117.667 16.3333)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="74.6667"
//                           cy="60.0003"
//                           r="1.66667"
//                           transform="rotate(-90 74.6667 60.0003)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="74.6667"
//                           cy="16.3333"
//                           r="1.66667"
//                           transform="rotate(-90 74.6667 16.3333)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx={103}
//                           cy="60.0003"
//                           r="1.66667"
//                           transform="rotate(-90 103 60.0003)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx={103}
//                           cy="16.3333"
//                           r="1.66667"
//                           transform="rotate(-90 103 16.3333)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx={132}
//                           cy="60.0003"
//                           r="1.66667"
//                           transform="rotate(-90 132 60.0003)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx={132}
//                           cy="16.3333"
//                           r="1.66667"
//                           transform="rotate(-90 132 16.3333)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="1.66667"
//                           cy="45.3333"
//                           r="1.66667"
//                           transform="rotate(-90 1.66667 45.3333)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="1.66667"
//                           cy="1.66683"
//                           r="1.66667"
//                           transform="rotate(-90 1.66667 1.66683)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="16.3333"
//                           cy="45.3333"
//                           r="1.66667"
//                           transform="rotate(-90 16.3333 45.3333)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="16.3333"
//                           cy="1.66683"
//                           r="1.66667"
//                           transform="rotate(-90 16.3333 1.66683)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx={31}
//                           cy="45.3333"
//                           r="1.66667"
//                           transform="rotate(-90 31 45.3333)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx={31}
//                           cy="1.66683"
//                           r="1.66667"
//                           transform="rotate(-90 31 1.66683)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="45.6667"
//                           cy="45.3333"
//                           r="1.66667"
//                           transform="rotate(-90 45.6667 45.3333)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="45.6667"
//                           cy="1.66683"
//                           r="1.66667"
//                           transform="rotate(-90 45.6667 1.66683)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="60.3333"
//                           cy="45.3338"
//                           r="1.66667"
//                           transform="rotate(-90 60.3333 45.3338)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="60.3333"
//                           cy="1.66683"
//                           r="1.66667"
//                           transform="rotate(-90 60.3333 1.66683)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="88.6667"
//                           cy="45.3338"
//                           r="1.66667"
//                           transform="rotate(-90 88.6667 45.3338)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="88.6667"
//                           cy="1.66683"
//                           r="1.66667"
//                           transform="rotate(-90 88.6667 1.66683)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="117.667"
//                           cy="45.3338"
//                           r="1.66667"
//                           transform="rotate(-90 117.667 45.3338)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="117.667"
//                           cy="1.66683"
//                           r="1.66667"
//                           transform="rotate(-90 117.667 1.66683)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="74.6667"
//                           cy="45.3338"
//                           r="1.66667"
//                           transform="rotate(-90 74.6667 45.3338)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx="74.6667"
//                           cy="1.66683"
//                           r="1.66667"
//                           transform="rotate(-90 74.6667 1.66683)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx={103}
//                           cy="45.3338"
//                           r="1.66667"
//                           transform="rotate(-90 103 45.3338)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx={103}
//                           cy="1.66683"
//                           r="1.66667"
//                           transform="rotate(-90 103 1.66683)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx={132}
//                           cy="45.3338"
//                           r="1.66667"
//                           transform="rotate(-90 132 45.3338)"
//                           fill="#f5dfa1"
//                         />
//                         <circle
//                           cx={132}
//                           cy="1.66683"
//                           r="1.66667"
//                           transform="rotate(-90 132 1.66683)"
//                           fill="#f5dfa1"
//                         />
//                       </svg>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
//               <div className="mt-10 lg:mt-0">
//                 <h1 className="block mb-4 font-[Poppins] text-white text-[60px] font-semibold border-b-[1px] border-[#f5dfa1] ">
//                   About me
//                 </h1>
//                 <p className="mb-[40px] font-[Poppins] text-white">
//                   My name is Phillippe Louis and I am a passionate web and
//                   application designer with a deep love for creating visually
//                   captivating and user-friendly digital experiences. My journey
//                   in the world of web development began with a curiosity for
//                   turning ideas into interactive and functional websites. Over
//                   the years, I've honed my skills in both front-end and back-end
//                   technologies, making me a versatile developer ready to take on
//                   any challenge. On the front-end, I specialize in crafting
//                   dynamic and engaging user interfaces using Typescript,
//                   JavaScript, React.js, HTML, CSS3, and the powerful Tailwind
//                   CSS framework. When it comes to the back-end, my tech stack is
//                   fortified with Node.js, Express.js, MongoDB, and Google Cloud.
//                   In addition to my technical skills, I'm highly experienced in
//                   using Git and GitHub for project management and collaboration.
//                   Whether it's a personal project or a collaborative effort, I'm
//                   always eager to tackle new challenges and bring ideas to life.
//                   Feel free to reach out, and let's work together to create
//                   something amazing!
//                 </p>
//                 <button
//                   onClick={openModal}
//                   className="group relative inline-block overflow-hidden max-w-[200px] rounded border  bg-[#9B9B84]  px-12 py-4 text-[15px] hover:scale-110 ease-in-out duration-[1s] font-semibold text-black"
//                 >
//                   <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-black transition-all duration-[1s] group-hover:w-full"></span>
//                   <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-black transition-all duration-[1s] group-hover:h-full"></span>
//                   <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-black transition-all duration-[1s] group-hover:w-full"></span>
//                   <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-black transition-all duration-[1s] group-hover:h-full"></span>
//                   Lets chat
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };
// export default About;

// import CSS from "../assets/CSS.svg";
// import HTML from "../assets/HTML.svg";
// import Tailwind from "../assets/Tailwind.svg";
// import JS from "../assets/JS.svg";
// import React from "../assets/React.svg";
// import NODE from "../assets/NODE.svg";
// import Github from "../assets/Github.svg";
// import Vite from "../assets/Vite.svg";

// const About = () => {
//   return (
//     <div className=" max-w-[100%]  pb-[125px]">
//       <h1 className="font-[Poppins] text-white text-[50px] font-semibold pb-[10px] border-[#f5dfa1] border-b-2 mx-[70px]">
//         About me
//       </h1>
//       <div className="mx-[70px] mt-[100px] flex justify-between">
//         <div className="bg-[#2b2b2b] rounded-[10px] p-[3px] border-white border-[1px]">
//           <div className="rounded-[10px] w-[600px] p-[10px] bg-white">
//             <p className="text-black font-[Poppins] text-[15px] w-[100%] z-[2] posiiton: relative">
//               Hi there! I'm Phillippe Louis, a passionate web and application
//               designer with a deep love for creating visually captivating and
//               user-friendly digital experiences.
//               <br />
//               My journey in the world of web development began with a curiosity
//               for turning ideas into interactive and functional websites. Over
//               the years, I've honed my skills in both front-end and back-end
//               technologies, making me a versatile developer ready to take on any
//               challenge.
//               <br />
//               On the front-end, I specialize in crafting dynamic and engaging
//               user interfaces using JavaScript, React.js, HTML, CSS3, and the
//               powerful Tailwind CSS framework. I believe that the best designs
//               not only captivate the eyes but also ensure a seamless and
//               enjoyable user journey.
//               <br />
//               When it comes to the back-end, my tech stack is fortified with
//               Node.js, Express.js, MongoDB, and Google Cloud. I've harnessed the
//               power of these technologies to build robust server-side
//               applications and create efficient data storage solutions.
//               <br />
//               In addition to my technical skills, I'm highly experienced in
//               using Git and GitHub for project management and collaboration.
//               These tools are essential for ensuring version control, efficient
//               collaboration with teams, and maintaining code quality.
//               <br />
//               Whether it's a personal project or a collaborative effort, I'm
//               always eager to tackle new challenges and bring ideas to life.
//               Feel free to reach out, and let's work together to create
//               something amazing!
//             </p>
//           </div>
//         </div>
//         <div className="w-[600px] flex flex-col gap-[30px]">
//           <h1 className="font-[Poppins] text-white text-[30px] text-center font-semibold pb-[10px] ">
//             Skills
//           </h1>
//           <div className="flex flex-wrap gap-[10px] max-w-[600px]">
//             <span className="bg-white rounded-[50px] py-[5px] px-[20px] font-[Poppins] font-semibold">
//               Communication
//             </span>
//             <span className="bg-white rounded-[50px] py-[5px] px-[20px] font-[Poppins] font-semibold">
//               Empathy
//             </span>
//             <span className="bg-white rounded-[50px] py-[5px] px-[20px] font-[Poppins] font-semibold">
//               Self awareness
//             </span>
//             <span className="bg-white rounded-[50px] py-[5px] px-[20px] font-[Poppins] font-semibold">
//               Patience
//             </span>
//             <span className="bg-white rounded-[50px] py-[5px] px-[20px] font-[Poppins] font-semibold">
//               Problem solving
//             </span>
//             <span className="bg-white rounded-[50px] py-[5px] px-[20px] font-[Poppins] font-semibold">
//               Critical thinking
//             </span>
//             <span className="bg-white rounded-[50px] py-[5px] px-[20px] font-[Poppins] font-semibold">
//               Collaboration
//             </span>
//             <span className="bg-white rounded-[50px] py-[5px] px-[20px] font-[Poppins] font-semibold">
//               Adaptability
//             </span>
//             <span className="bg-white rounded-[50px] py-[5px] px-[20px] font-[Poppins] font-semibold">
//               Teamwork
//             </span>
//             <span className="bg-white rounded-[50px] py-[5px] px-[20px] font-[Poppins] font-semibold">
//               Time management
//             </span>
//             <span className="bg-white rounded-[50px] py-[5px] px-[20px] font-[Poppins] font-semibold">
//               Project management
//             </span>
//           </div>
//           <div className="w-[600px]">
//             <h1 className="font-[Poppins] text-white text-[30px] text-center font-semibold pb-[10px] ">
//               My Tech stacks
//             </h1>
//             <div className="max-w-[400px] m-auto mt-[10px]">
//               <div className="flex flex-wrap justify-center">
//                 <img className="w-[85px] h-[85px]" src={HTML}></img>
//                 <img className="w-[85px] h-[85px]" src={CSS}></img>
//                 <img className="w-[85px] h-[85px]" src={Tailwind}></img>
//                 <img className="w-[85px] h-[85px]" src={JS}></img>
//                 <img className="w-[85px] h-[85px]" src={React}></img>
//                 <img className="w-[85px] h-[85px]" src={NODE}></img>
//                 <img className="w-[85px] h-[85px]" src={Github}></img>
//                 <img className="w-[85px] h-[85px]" src={Vite}></img>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
