import HTML from "../assets/HTML.svg";
import CSS from "../assets/CSS.svg";
import CoffeeShop from "../images/Coffeeshop1.png";
import React from "react";

const PracticumCoffeeShop = ({ showCard, category }) => {
  return (
    <div
      className={`flex flex-col gap-[10px] bg-[#2b2b2b] max-w-[400px] rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[10px] overflow-visible ${
        showCard === "all" || showCard === category ? "block" : "hidden"
      }`}
    >
      <img
        src={CoffeeShop}
        className="rounded-lg top-[-70px] position: relative shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
      ></img>
      <div className="flex flex-col gap-[20px] h-[480px] justify-between w-full bg-white mt-[-50px] p-[10px] rounded-lg">
        <div className="flex gap-[10px] w-full border-b-[2px] border-black border-opacity-50">
          <h1 className="font-[Poppins] font-semibold text-black text-[20px] md:text-[25px]">
            Coffee Shop
          </h1>
          <img src={HTML} className="h-[35px] w-[35px] self-center"></img>
          <img src={CSS} className="h-[35px] w-[35px] self-center"></img>
        </div>
        <p className="font-[Poppins] text-black text-[14px] xs:text-[15px]">
          The Practicum Coffee Shop project centered around the creation of a
          landing page, leveraging advanced HTML and CSS techniques. My
          responsibilities included developing website layouts, implementing
          interactive forms, and ensuring a responsive design that is compatible
          across various browsers.
        </p>
        <div className="flex gap-[20px]">
          <a href="https://github.com/Plouis53/se_project_coffeeshop.git">
            <button className="px-[30px] py-[5px] bg-[#2b2b2b] w-fit rounded-md text-white font-[Poppins] hover:scale-105 ease-in-out duration-[.5s]">
              Code
            </button>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PracticumCoffeeShop;
