import React from "react";

const ProjectCard = ({
  title,
  ProjectImage,
  Stackone,
  Stacktwo,
  Stackthree,
  Description,
  LiveSite,
  Code,
  className,
}) => {
  return (
    <>
      <img
        src={ProjectImage}
        alt="Photo of project"
        className="rounded-lg top-[-70px] position: relative shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
      ></img>
      <div className="flex flex-col gap-[20px] h-[340px] justify-between w-full bg-white mt-[-50px] p-[10px] rounded-lg">
        <div className="flex gap-[10px] w-full border-b-[2px] border-black border-opacity-50">
          <h1 className="text-ellipsis overflow-hidden whitespace-nowrap font-[Poppins] font-semibold text-black text-[20px] md:text-[25px]">
            {title}
          </h1>
          <img src={Stackone} className="h-[35px] w-[35px] self-center" />
          <img src={Stacktwo} className="h-[35px] w-[35px] self-center" />
          <img src={Stackthree} className="h-[35px] w-[35px] self-center" />
        </div>
        <p className="font-[Poppins] text-black text-[14px] xs:text-[15px]">
          {Description}
        </p>
        <div className="flex gap-[10px]">
          {" "}
          <a href={LiveSite || className}>
            <button className="px-[30px] py-[5px] bg-[#2b2b2b] w-fit rounded-md text-white font-[Poppins] hover:scale-105 ease-in-out duration-[.5s]">
              Live site
            </button>
          </a>
          <a href={Code}>
            <button className="px-[30px] py-[5px] bg-[#2b2b2b] w-fit rounded-md text-white font-[Poppins] hover:scale-105 ease-in-out duration-[.5s]">
              Code
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
