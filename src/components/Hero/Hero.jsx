import Typewriter from "typewriter-effect";
import Portrait4 from "../../images/Portrait4.png";
// import PortraitMobile from "../../images/PortraitMobile.png";
import Image2 from "../../images/Image2.png";
import CSS from "../../assets/CSS.svg";
import HTML from "../../assets/HTML.svg";
import Tailwind from "../../assets/Tailwind.svg";
import JS from "../../assets/JS.svg";
import React from "../../assets/React.svg";
import NODE from "../../assets/NODE.svg";
import Mongo from "../../assets/Mongodb.svg";
import TSLogo from "../../assets/TypeScript4.svg";

const Hero = () => {
  return (
    <div className="flex flex-col xl:flex-row xl:justify-between max-w-[100%] mt-[75px] mb-[75px] xl:mb-[150px] mx-[30px] xl:mx-[70px]">
      <div className="flex flex-col  m-auto text-center xl:w-[850px] xl:text-start">
        <div className="xl:hidden w-[200px] border-white border-[1px] mx-auto mb-[30px] rounded-[10px] p-[5px] shadow-[rgba(255,_255,_255,_0.50)_0px_3px_8px]">
          <img
            src={Portrait4}
            alt="portraitmobile"
            className="xl:hidden w-[200px] rounded-[10px]"
          ></img>
        </div>
        <h1 className="font-[Poppins] text-white text-[45px] xs:text-[50px] xl:text-[70px] font-semibold leading-[1.2]">
          Hello 👋,
          <br />
          My name is Phillippe
          <br />{" "}
          <span className="font-[Poppins] text-[#f5dfa1] text-[25px] xs:text-[31px] md:text-[30px] xl:text-[70px] font-semibold color-transition">
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
          A digital craftsman on a mission to shape exceptional experiences.
          Let's collaborate to craft digital wonders that captivate and inspire.
          Front-end explorer by day, back-end architect by night—ready to turn
          your ideas into reality. With a keen eye for detail and strong project
          management skills, I ensure smooth sailing from concept to launch.
          Crafting interfaces that are as delightful as they are functional.
          From TypeScript to MongoDB, let's build something amazing together!
          Ready to bring your digital dreams to life? Let's make it happen! ✨
        </p>
        <div className="flex justify-center xl:justify-start mt-[20px] w-full xl:ml-[-10px] xl:jusify-center">
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
          <img
            src={TSLogo}
            alt="TypeScript logo"
            className="w-[30px] xs:w-[40px] xl:w-[60px]"
          ></img>
        </div>
      </div>
      <div className="hidden xl:flex bg-white h-[390px] bg-opacity-50 w-[350px] m-auto mt-[200px] xl:mt-[100px] rounded-t-[200px] rounded-b-[10px] position: relative">
        <img
          src={Image2}
          alt="portrait"
          className=" h-[500px] w-[350px] rounded-[10px] position: absolute bottom-0"
        ></img>
      </div>
    </div>
  );
};

export default Hero;
