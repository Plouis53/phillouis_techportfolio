import React from "react";
import "../App/App.css";
import { Link } from "react-scroll";
import { useState } from "react";
import NavDropDown from "./NavDropDown";

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
            href="https://www.linkedin.com/in/phillippe-pmpisintech/"
            className="h-fit p-2px border-white border-[1px] rounded-[50%] flex hover:scale-110 ease-out duration-[.5s]"
          >
            <button className="bg-LinkedIn h-[48px] w-[48px]"></button>
          </a>
          <a
            href="https://github.com/Plouis53"
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
            to="projects"
            spy={true}
            smooth={true}
            offset={105}
            duration={500}
            className="self-center cursor-pointer hover:opacity-75 hover:border-b-[1px] hover:border-b-white"
          >
            <li className="text-white font-[Poppins] text-[18px]">Projects</li>
          </Link>

          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={100}
            duration={500}
            className="self-center cursor-pointer hover:opacity-75 hover:border-b-[1px] hover:border-b-white"
          >
            <li className="text-white font-[Poppins] text-[18px]">
              Background
            </li>{" "}
          </Link>
          <Link
            to="testimonials"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="self-center cursor-pointer hover:opacity-75 hover:border-b-[1px] hover:border-b-white"
          >
            <li className="text-white font-[Poppins] text-[18px]">
              Testimonials
            </li>
          </Link>
          <Link
            onClick={openModal}
            className="text-white font-[Poppins] text-[18px] self-center cursor-pointer hover:opacity-75 hover:border-b-[1px] hover:border-b-white"
          >
            Contact
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
