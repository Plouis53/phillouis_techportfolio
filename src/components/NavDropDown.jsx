import React from "react";

const NavDropDown = (openModal) => {
  return (
    <div className="dropdown dropdown-bottom md:hidden">
      <button
        tabIndex={0}
        className="btn m-1 w-[100px] bg-white text-black font-[Poppins] font-semibold hover:bg-white hover:opacity-70 ease-in-out duration-[.5s]"
      >
        Menu
      </button>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box m-1 w-[100px]"
      >
        <li>
          <a className="font-[Poppins] text-black">Projects</a>
        </li>
        <li>
          <a className="font-[Poppins] text-black">About</a>
        </li>
        <li>
          <a onClick={openModal} className="font-[Poppins] text-black">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavDropDown;
