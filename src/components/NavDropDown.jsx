import React from "react";
import { Link } from "react-scroll";

const NavDropDown = ({ handleOpenDropdown }) => {
  return (
    <>
      <div className="flex flex-col bg-white w-[100%] position: absolute">
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={100}
          className="border-black border-b-[1px] p-[10px] text-center"
          onClick={handleOpenDropdown}
        >
          <button className="text-black font-[Poppins]">Projects</button>
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={100}
          className="border-black border-b-[1px] p-[10px] text-center"
          onClick={handleOpenDropdown}
        >
          <button className="text-black font-[Poppins]">About</button>
        </Link>
      </div>
    </>
  );
};
export default NavDropDown;
