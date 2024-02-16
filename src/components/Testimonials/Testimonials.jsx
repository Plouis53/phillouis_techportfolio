import React from "react";
import Joshua from "../../images/Joshua.png";
import Vishal from "../../images/Vishal.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="pt-[50px] pb-[100px] bg-[#363636] px-[30px] md:px-[70px] flex flex-col"
    >
      <h1 className="pb-[10px] font-[Poppins] text-[30px] md:text-[50px] text-white font-semibold border-b border-white-[1px]">
        Testimonials
        <span className="text-[15px] md:text-[20px] font-normal">
          via LinkedIn
        </span>
      </h1>
      <div className="flex flex-col items-center gap-[20px] md:gap-[75px] md:flex-row md:justify-center">
        <div className="flex flex-col mt-[50px]">
          <div className="flex flex-col font-[Poppins] text-white">
            <div className="flex items-center gap-[10px]">
              <img
                className="w-[100px] h-[100px] rounded-[50%]"
                alt="Image of Vishal"
                src={Vishal}
              ></img>
              <div className="flex flex-col">
                <span>Vishal Sonthalia</span>
                <span className="text-[12px]">
                  Senior Software Engineer | McKesson | TripleTen
                </span>
              </div>
            </div>
          </div>
          <div className="bg-[#2b2b2b] rounded-[10px] p-[20px] mt-[20px] max-w-[500px] h-fit md:h-[275px] shadow-[rgba(255,_255,_255,_0.24)_0px_3px_8px]">
            <p className="font-[Poppins] text-white text-[14px]">
              "Hello Vishal! Can use you as a reference and post it one my
              portfolio website? "I've already have a rough draft of what I can
              use. "Throughout the coding bootcamp, Phillippe Louis consistently
              demonstrated a commitment to learning and growth. His dedication
              twas evident in his proactive approach to seeking additional
              support through one-on-one tutoring sessions and regular
              attendance at office hours. Phillippe's enthusiasm for software
              development was evident. He was not only a good individual learner
              but also as a supportive team member. With his positive attitude
              and eagerness to embrace challenges, Phillippe proved himself to
              be a standout talent in the Triple Ten coding bootcamp community.
              "
            </p>
          </div>
        </div>

        <div className="flex flex-col mt-[50px]">
          <div className="flex flex-col font-[Poppins] text-white">
            <div className="flex items-center gap-[10px]">
              <img
                className="w-[100px] h-[100px] rounded-[50%]"
                alt="Image of Anderson Marques"
                src={Joshua}
              ></img>
              <div className="flex flex-col">
                <span>Joshua Horwitz</span>
                <span className="text-[12px]">
                  Tutor / Technical Writer / Interview Coach
                </span>
              </div>
            </div>
          </div>
          <div className="bg-[#2b2b2b] rounded-[10px] p-[20px] mt-[20px] max-w-[500px] h-fit md:h-[275px] shadow-[rgba(255,_255,_255,_0.24)_0px_3px_8px]">
            <p className="font-[Poppins] text-white text-[14px]">
              "During their time in coding bootcamp, Phillippe Louis
              demonstrated dedication and enthusiasm for learning. He
              consistently exhibited a strong work ethic, tackling challenging
              coding tasks with determination and perseverance. Phillippe was
              not only a valuable contributor to group projects but also a
              supportive team member, always willing to offer assistance and
              collaborate with peers. With Phillippe positive attitude, He
              proved themselves to be a promising talent in the field of
              software development."
            </p>
          </div>
        </div>
      </div>
      <Link
        to="/contact"
        className="hidden md:block mt-[50px] font-[Poppins] py-[10px] px-[40px] rounded-full bg-[#f5dfa1] text-black w-fit m-auto shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:scale-110 duration-[.5s] ease-in-out"
      >
        Connect
      </Link>
    </div>
  );
};

export default Testimonials;
