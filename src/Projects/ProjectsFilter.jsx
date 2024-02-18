import React from "react";
import { motion } from "framer-motion";
const ProjectsFilter = ({ handleProject }) => {
  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -100, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex flex-col bg-white w-[100%] position: absolute z-[2] mx-[-30px] lg:hidden"
    >
      <button
        onClick={() => handleProject("all")}
        className="text-black font-[Poppins] p-[10px] border-black border-b-[1px]"
      >
        Featured
      </button>
      <button
        onClick={() => handleProject("Front-End")}
        className="text-black font-[Poppins] p-[10px] border-black border-b-[1px]"
      >
        Front-End
      </button>
      <button
        onClick={() => handleProject("Full-Stack")}
        className="text-black font-[Poppins] p-[10px] border-black border-b-[1px]"
      >
        Full-Stack
      </button>
    </motion.div>
  );
};
export default ProjectsFilter;
