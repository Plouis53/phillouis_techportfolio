// import Linkedin from "../assets/LinkedIn.svg";
import NavDropDown from "./NavDropDown";
import React from "react";

const Nav = ({ openModal }) => {
  return (
    <div className="bg-[#363636] w-[100%] pt-[25px] pb-[25px] px-[30px] md:px-[70px] flex justify-between">
      <h1 className="sm:block font-[Poppins] text-[30px] font-semibold text-white">
        Logo
      </h1>
      <NavDropDown openModal={openModal} className="block md:hidden" />
      <ul className="hidden lg:flex gap-[50px]">
        <a
          href="#about"
          className="self-center cursor-pointer hover:opacity-75 hover:border-b-[1px] hover:border-b-white"
        >
          <li className="text-white font-[Poppins] text-[18px]">About me</li>
        </a>
        <li
          onClick={openModal}
          className="text-white font-[Poppins] text-[18px] self-center cursor-pointer hover:opacity-75 hover:border-b-[1px] hover:border-b-white"
        >
          Contact
        </li>
        <a
          href="#projects"
          className="self-center cursor-pointer hover:opacity-75 hover:border-b-[1px] hover:border-b-white"
        >
          <li className="text-white font-[Poppins] text-[18px]">Projects</li>
        </a>
        <span className="p-2px border-white border-[1px] rounded-[50%] flex hover:scale-110 ease-out duration-[.5s]">
          <button className="bg-LinkedIn h-[48px] w-[48px]"></button>
        </span>
      </ul>
    </div>
  );
};

export default Nav;
