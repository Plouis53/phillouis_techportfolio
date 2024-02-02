import Typewriter from "typewriter-effect";
import Portrait from "../images/Portrait.png";
import CSS from "../assets/CSS.svg";
import HTML from "../assets/HTML.svg";
import Tailwind from "../assets/Tailwind.svg";
import JS from "../assets/JS.svg";
import React from "../assets/React.svg";
import NODE from "../assets/NODE.svg";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between max-w-[100%] mt-[100px] mb-[75px] lg:mb-[150px] mx-[30px] lg:mx-[70px]">
      <div className="flex flex-col text-center lg:w-[850px] lg:text-start">
        <h1 className="font-[Poppins] text-white text-[45px] xs:text-[50px] lg:text-[70px] font-semibold leading-[1.2]">
          Hello 👋,
          <br />
          My name is Phillippe
          <br />{" "}
          <span className="font-[Poppins] text-[#f5dfa1] text-[31px] md:text-[30px] lg:text-[70px] font-semibold">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("A Software Engineer")
                  .start()
                  .pauseFor(3000);
              }}
            />
          </span>
        </h1>
        <p className="font-[Poppins] text-white text-center lg:text-start lg:max-w-[600px] text-[15px] lg:text-[20px] mt-[12px]">
          I am a passionate web and app designer with a knack for crafting
          visually captivating and user-friendly digital experiences. I bring a
          well-rounded skill set to every project. On the front-end, I
          specialize in creating engaging user interfaces using Typescript,
          JavaScript, React.js, HTML, CSS 3, and Tailwind CSS. My designs aim to
          delight users and ensure smooth interactions. In the back-end realm, I
          rely on Node.js and Express.js to build robust server-side
          applications. I use MongoDB for efficient data management and leverage
          Google Cloud for scalable solutions. Let us collaborate to bring your
          digital ideas to life!
        </p>
        <div className="flex justify-center lg:justify-start mt-[20px] w-full lg:ml-[-10px] lg:jusify-center">
          <img src={HTML} className="w-[45px] xs:w-[50px] lg:w-[90px]"></img>
          <img src={CSS} className="w-[45px] xs:w-[50px] lg:w-[90px]"></img>
          <img
            src={Tailwind}
            className="w-[45px] xs:w-[50px] lg:w-[90px]"
          ></img>
          <img src={JS} className="w-[45px] xs:w-[50px] lg:w-[90px]"></img>
          <img src={React} className="w-[45px] xs:w-[50px] lg:w-[90px]"></img>
          <img src={NODE} className="w-[45px] xs:w-[50px] lg:w-[90px]"></img>
        </div>
      </div>
      <div className="hidden lg:flex bg-white h-[350px] bg-opacity-50 w-[350px] m-auto mt-[200px] lg:mt-[100px] rounded-t-[200px] rounded-b-[10px] position: relative">
        <img
          className=" h-[500px] w-[350px] rounded-[10px] position: absolute bottom-0"
          src={Portrait}
        ></img>
      </div>
    </div>
  );
};

export default Hero;
