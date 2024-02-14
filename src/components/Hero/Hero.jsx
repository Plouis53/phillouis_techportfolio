import Typewriter from "typewriter-effect";
import Portrait4 from "../../images/Portrait4.png";
import PortraitMobile from "../../images/PortraitMobile.png";
import CSS from "../../assets/CSS.svg";
import HTML from "../../assets/HTML.svg";
import Tailwind from "../../assets/Tailwind.svg";
import JS from "../../assets/JS.svg";
import React from "../../assets/React.svg";
import NODE from "../../assets/NODE.svg";
import Mongo from "../../assets/Mongodb.svg";

const Hero = () => {
  return (
    <div className="flex flex-col xl:flex-row xl:justify-between max-w-[100%] mt-[75px] mb-[75px] xl:mb-[150px] mx-[30px] xl:mx-[70px]">
      <div className="flex flex-col text-center xl:w-[850px] xl:text-start">
        <div className="xl:hidden w-[200px] border-white border-[1px] mx-auto mb-[30px] rounded-[10px] p-[5px] shadow-[rgba(255,_255,_255,_0.50)_0px_3px_8px]">
          <img
            src={PortraitMobile}
            alt="portraitmobile"
            className="xl:hidden w-[200px] rounded-[10px]"
          ></img>
        </div>
        <h1 className="font-[Poppins] text-white text-[45px] xs:text-[50px] xl:text-[70px] font-semibold leading-[1.2]">
          Hello 👋,
          <br />
          My name is Phillippe
          <br />{" "}
          <span className="font-[Poppins] text-[#f5dfa1] text-[25px] xs:text-[31px] md:text-[30px] xl:text-[70px] font-semibold">
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
        <p className="font-[Poppins] text-white text-center xl:text-start xl:max-w-[600px] text-[15px] xl:text-[20px] mt-[12px]">
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
        <div className="flex justify-center xl:justify-start mt-[20px] w-full xl:ml-[-10px] xl:jusify-center">
          {/* <img src={HTML} className="w-[45px] xs:w-[50px] xl:w-[90px]"></img>
          <img src={CSS} className="w-[45px] xs:w-[50px] xl:w-[90px]"></img> */}
          <img
            src={HTML}
            alt="HTML logo"
            className="w-[45px] xs:w-[50px] xl:w-[90px]"
          ></img>
          <img
            src={CSS}
            alt="CSS logo"
            className="w-[45px] xs:w-[50px] xl:w-[90px]"
          ></img>
          <img
            src={Tailwind}
            alt="taildwind logo"
            className="w-[45px] xs:w-[50px] xl:w-[90px]"
          ></img>
          <img
            src={JS}
            alt="javaScript logo"
            className="w-[45px] xs:w-[50px] xl:w-[90px]"
          ></img>
          <img
            src={React}
            alt="react.js logo"
            className="w-[45px] xs:w-[50px] xl:w-[90px]"
          ></img>
          <img
            src={NODE}
            alt="node.js logo"
            className="w-[45px] xs:w-[50px] xl:w-[90px]"
          ></img>
          <img
            src={Mongo}
            alt="Mongo logo"
            className="w-[45px] xs:w-[50px] xl:w-[90px]"
          ></img>
        </div>
      </div>
      <div className="hidden xl:flex bg-white h-[350px] bg-opacity-50 w-[350px] m-auto mt-[200px] xl:mt-[100px] rounded-t-[200px] rounded-b-[10px] position: relative">
        <img
          src={Portrait4}
          alt="portrait"
          className=" h-[500px] w-[350px] rounded-[10px] position: absolute bottom-0"
        ></img>
      </div>
    </div>
  );
};

export default Hero;
