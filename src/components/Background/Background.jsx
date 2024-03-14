import React from "react";
import Image1 from "../../images/Image1.png";

const Background = ({ handleOpenConfirmModal }) => {
  return (
    <div
      id="about"
      className="px-[30px] mb-[20px] lg:mb-[100px] md:px-[70px] py-[100px] w-full"
    >
      <h1 className="pb-[10px] font-[Poppins] text-[40px] md:text-[50px] text-white font-semibold border-b-[2px] border-white border-opacity-20">
        Background
      </h1>
      <div className="flex flex-col md:flex-row justify-between gap-[40px] mt-[50px]">
        <div className="flex flex-col gap-[20px] justify-center w-full mb:max-w-[50%] h-fit bg-[#363636] shadow-[rgba(255,_255,_255,_0.24)_0px_3px_8px] p-[20px] rounded-xl">
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
          <button
            onClick={handleOpenConfirmModal}
            className="font-[Poppins] py-[10px] px-[40px] rounded-full bg-[#f5dfa1] text-black w-fit m-auto shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:scale-110 duration-[.5s] ease-in-out"
          >
            Résumé
          </button>
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
              I'm a passionate web and app designer with expertise in React.js,
              Javascipt, Typescript, Node.js, and MongoDB. I'm skilled in Git
              and GitHub for version control and project management. Let's
              collaborate to bring your ideas to life!
            </p>
            <div className="flex flex-wrap justify-center gap-[10px] mt-[15px] mb-[10px]">
              <div className="bg-white px-[10px] py-[5px] rounded-[10px] text-[15px] font-[Poppins] text-black">
                <p>Project Management</p>
              </div>
              <div className="bg-white px-[10px] py-[5px] rounded-[10px] text-[15px] font-[Poppins] text-black">
                <p>Leadership</p>
              </div>
              <div className="bg-white px-[10px] py-[5px] rounded-[10px] text-[15px] font-[Poppins] text-black">
                <p>Strategy </p>
              </div>
              <div className="bg-white px-[10px] py-[5px] rounded-[10px] text-[15px] font-[Poppins] text-black">
                <p>Process Improvement</p>
              </div>
              <div className="bg-white px-[10px] py-[5px] rounded-[10px] text-[15px] font-[Poppins] text-black">
                <p>Time management</p>
              </div>
              <div className="bg-white px-[10px] py-[5px] rounded-[10px] text-[15px] font-[Poppins] text-black">
                <p>UX Design</p>
              </div>
              <div className="bg-white px-[10px] py-[5px] rounded-[10px] text-[15px] font-[Poppins] text-black">
                <p>Soft Skills</p>
              </div>
              <div className="bg-white px-[10px] py-[5px] rounded-[10px] text-[15px] font-[Poppins] text-black">
                <p>Risk Response</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
