import React from "react";
import Image1 from "../../images/Image1.png";

const Background = ({ openModal }) => {
  return (
    <div
      id="about"
      className="px-[30px] mb-[20px] lg:mb-[100px] md:px-[70px] py-[100px] w-full"
    >
      <h1 className="pb-[10px] font-[Poppins] text-[40px] md:text-[50px] text-white font-semibold border-b-[2px] border-white border-opacity-20">
        Background
      </h1>
      <div className="flex flex-col md:flex-row justify-between gap-[40px] mt-[50px]">
        <div className="flex flex-col gap-[20px] justify-center w-full mb:max-w-[50%] h-fit bg-[#363636] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[20px] rounded-xl">
          {" "}
          <div className="relative border-s border-gray-200 dark:border-[#f5dfa1]">
            <div className="relative border-s border-gray-200 dark:border-[#f5dfa1]">
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
          </div>
          <a
            download="Mr. Phillippe Louis Resumé’ SE (6)"
            href="../../images/Resume.pdf"
            className="font-[Poppins] py-[10px] px-[40px] rounded-full bg-[#f5dfa1] text-black w-fit m-auto shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:scale-110 duration-[.5s] ease-in-out"
          >
            Resume
          </a>
        </div>
        <div className="flex md:flex-col gap-[20px] align-center w-full md:max-w-[50%] h-[750px] rounded-xl">
          <div className="flex flex-col justify-between h-fit md:h-fit rounded-xl bg-[#363636] p-[20px] gap-[20px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
            <div className="flex m-auto mb-0 mt-0 gap-[30px] border-[1px] border-white rounded-[25%] p-[5px] w-[175px] md:w-[250px]">
              <img
                src={Image1}
                alt="Image of myself"
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
            <div className="flex flex-wrap justify-center gap-[10px] mt-[15px] mb-[10px]">
              <div className="bg-white px-[10px] py-[5px] rounded-[10px] text-[15px] font-[Poppins] text-black">
                <p>Project Management</p>
              </div>
              <div className="bg-white px-[10px] py-[5px] rounded-[10px] text-[15px] font-[Poppins] text-black">
                <p>Team Leadership</p>
              </div>
              <div className="bg-white px-[10px] py-[5px] rounded-[10px] text-[15px] font-[Poppins] text-black">
                <p>Strategy Development</p>
              </div>
              <div className="bg-white px-[10px] py-[5px] rounded-[10px] text-[15px] font-[Poppins] text-black">
                <p>Process Improvement</p>
              </div>
              <div className="bg-white px-[10px] py-[5px] rounded-[10px] text-[15px] font-[Poppins] text-black">
                <p>Time management</p>
              </div>
              <div className="bg-white px-[10px] py-[5px] rounded-[10px] text-[15px] font-[Poppins] text-black">
                <p>User Experience Design</p>
              </div>
              <div className="bg-white px-[10px] py-[5px] rounded-[10px] text-[15px] font-[Poppins] text-black">
                <p>Effective Communicater</p>
              </div>
              <div className="bg-white px-[10px] py-[5px] rounded-[10px] text-[15px] font-[Poppins] text-black">
                <p>Problem-Solving</p>
              </div>
            </div>
            <button
              onClick={openModal}
              href="#_"
              className="hidden lg:inline-flex shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] relative lg:items-center justify-center px-[24px] py-[12px] w-[200px] m-auto mt-[20px] mb-[10px] overflow-hidden font-medium bg-[#f5dfa1] text-black transition duration-300 ease-out rounded-full group"
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
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
