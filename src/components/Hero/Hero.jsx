import React from "react";
import Typewriter from "typewriter-effect";
import Portrait from "../../images/Image2.png";
import Portraitm from "../../images/Portrait4.png";
import HTML from "../../assets/HTML.svg";
import CSS from "../../assets/CSS.svg";
import Tailwind from "../../assets/Tailwind.svg";
import JavaScript from "../../assets/JavaScript.svg";
import TypeScript from "../../assets/typescript.svg";
import ReactImg from "../../assets/React.svg";
import NODE from "../../assets/NODE.svg";
import Mongo from "../../assets/Mongo.svg";
import Netlify from "../../assets/Netlify.svg";
import Cloud from "../../assets/Cloud.svg";
import AWSDD from "../../assets/AwsDD.svg";

const Hero = () => {
  return (
    <div className="flex flex-col xl:flex-row xl:justify-between max-w-[100%] mt-[75px] mb-[75px] xl:mb-[150px] mx-[30px] xl:mx-[70px]">
      <div className="flex flex-col  m-auto text-center xl:w-[850px] xl:text-start">
        <div className="xl:hidden w-[200px] border-white border-[1px] mx-auto mb-[30px] rounded-[10px] p-[5px] shadow-[rgba(255,_255,_255,_0.50)_0px_3px_8px]">
          <img
            src={Portraitm}
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
        <p className="font-[Poppins] text-white text-center xl:text-start xl:max-w-[600px] text-[15px] xl:text-[30px] mt-[12px]">
          I'm a digital code bender 👨🏿‍💻😎 crafting exceptional digital
          experiences. Let's collaborate to bring your ideas to life! By day, I
          focus on front-end design, by night, I architect back-end systems.
          With attention to detail and strong project management, I ensure
          smooth sailing from concept to launch. Let's build something amazing
          together—from TypeScript to MongoDB. Ready to make your digital dreams
          a reality? Let's do it! ✨
        </p>
        <div className="flex flex-wrap gap-4 self-start justify-center mt-[24px]">
          <img
            src={HTML}
            alt="HTML logo"
            className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-sm"
          ></img>
          <img
            src={CSS}
            alt="CSS logo"
            className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-sm"
          ></img>
          <img
            src={Tailwind}
            alt="taildwind logo"
            className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-sm"
          ></img>
          <img
            src={JavaScript}
            alt="javaScript logo"
            className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-sm"
          ></img>
          <img
            src={ReactImg}
            alt="react.js logo"
            className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-sm"
          ></img>
          <img
            src={NODE}
            alt="node.js logo"
            className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-sm"
          ></img>
          <img
            src={Mongo}
            alt="Mongo logo"
            className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-sm"
          ></img>
          <img
            src={TypeScript}
            alt="TypeScript logo"
            className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-sm"
          ></img>
          <img
            src={Netlify}
            alt="Netlify logo"
            className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-sm"
          ></img>
          <img
            src={Cloud}
            alt="Cloud logo"
            className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-sm"
          ></img>
          <img
            src={AWSDD}
            alt="AwsDD logo"
            className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-sm"
          ></img>
        </div>
      </div>
      <div className="hidden xl:flex bg-white h-[390px] bg-opacity-50 w-[350px] m-auto mt-[200px] xl:mt-[100px] rounded-t-[200px] rounded-b-[10px] position: relative">
        <img
          src={Portrait}
          alt="portrait"
          className=" h-[500px] w-[350px] rounded-[10px] position: absolute bottom-0"
        ></img>
      </div>
    </div>
  );
};

export default Hero;
