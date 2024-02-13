import "../App/App.css";
import NavDropDown from "./NavDropDown";
import { Link } from "react-scroll";
import React from "react";
import { useState } from "react";

const Nav = ({ openModal }) => {
  const [dropDown, setDropDown] = useState(true);
  const [isRotated, setIsRotated] = useState(false);

  const handleButtonClick = () => {
    setIsRotated(!isRotated);
  };

  const handleOpenDropDown = () => {
    setDropDown(!dropDown);
    handleButtonClick();
  };

  return (
    <>
      <div className="bg-[#363636] w-[100%] pt-[25px] pb-[25px] px-[30px] xl:px-[70px] flex justify-between items-center">
        <div className="flex gap-[20px]">
          <a
            href="https://www.linkedin.com/in/dillon-arnold-352782275/"
            className="h-fit p-2px border-white border-[1px] rounded-[50%] flex hover:scale-110 ease-out duration-[.5s]"
          >
            <button className="bg-LinkedIn h-[48px] w-[48px]"></button>
          </a>
          <a
            href="https://github.com/Dillona25"
            className=" h-fit p-2px border-white border-[1px] rounded-[50%] flex hover:scale-110 ease-out duration-[.5s]"
          >
            <button className="bg-Github h-[48px] w-[48px]"></button>
          </a>
        </div>
        <button
          onClick={handleOpenDropDown}
          className={`bg-Menu w-[30px] h-[30px] mt-[10px] xl:hidden rotate ${
            isRotated ? "active" : ""
          }`}
        ></button>
        <ul className="hidden xl:flex gap-[50px]">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={190}
            duration={500}
            className="self-center cursor-pointer hover:opacity-75 hover:border-b-[1px] hover:border-b-white"
          >
            <li className="text-white font-[Poppins] text-[18px]">About me</li>
          </Link>
          <li
            onClick={openModal}
            className="text-white font-[Poppins] text-[18px] self-center cursor-pointer hover:opacity-75 hover:border-b-[1px] hover:border-b-white"
          >
            Contact
          </li>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={105}
            duration={500}
            className="self-center cursor-pointer hover:opacity-75 hover:border-b-[1px] hover:border-b-white"
          >
            <li className="text-white font-[Poppins] text-[18px]">Projects</li>
          </Link>
        </ul>
      </div>
      {dropDown === false && (
        <NavDropDown
          handleOpenDropdown={handleOpenDropDown}
          openModal={openModal}
          className="block xl:hidden"
        />
      )}
    </>
  );
};
export default Nav;
