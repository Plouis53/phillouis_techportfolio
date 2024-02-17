import React from "react";
import { motion, spring } from "framer-motion";

const ReusableModal = ({ children }) => {
  return (
    <div className="position: fixed flex flex-col top-0 bottom-0 right-0 left-0 z-10 bg-black bg-opacity-[70%]">
      <motion.div
        animate={{ scale: 1 }}
        initial={{ scale: 0 }}
        transition={{ duration: 0.2 }}
        className="w-fit position: relative bg-white m-auto p-8 md:p-10 rounded-xl box-border"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ReusableModal;
