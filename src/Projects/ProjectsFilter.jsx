import React from "react";
import { motion } from "framer-motion";

const ProjectsFilter = ({ handleProject }) => {
  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -100, opacity: 0 }}
      exit={{ y: -100, opacity: 0 }}
      className="flex flex-col bg-white w-[100%] position: absolute z-[2] mx-[-30px] lg:hidden"
    >
      {" "}
      <button
        onClick={() => handleProject("all")}
        className="text-black font-[Poppins] p-[10px] border-black border-b-[1px]"
      >
        Featured
      </button>
      <button
        onClick={() => handleProject("HTML/CSS")}
        className="text-black font-[Poppins] p-[10px] border-black border-b-[1px]"
      >
        HTML/CSS
      </button>
      <button
        onClick={() => handleProject("JavaScript")}
        className="text-black font-[Poppins] p-[10px] border-black border-b-[1px]"
      >
        JavaScript
      </button>
      <button
        onClick={() => handleProject("React")}
        className="text-black font-[Poppins] p-[10px] border-black border-b-[1px]"
      >
        React
      </button>
    </motion.div>
  );
};
export default ProjectsFilter;
