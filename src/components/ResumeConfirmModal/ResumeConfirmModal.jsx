import React from "react";
import ReusableModal from "../Modal/Modal";

const ResumeConfirmModal = ({ handleCloseConfirmModal }) => {
  return (
    <ReusableModal>
      <button
        onClick={handleCloseConfirmModal}
        className="text-black text-[20px] font-semibold posiiton: absolute w-[30px] h-[30px] bg-no-repeat top-3 right-3"
      >
        X
      </button>
      <form className="m-8 flex flex-col gap-10 max-w-[175px] md:max-w-none">
        <h1 className=" text-base md:text-lg font-[Poppins] font-bold max-w-[400px] text-center text-black">
          Before proceeding, would you like to download my resume as a PNG file?
        </h1>
        <div className="flex flex-col items-center md:flex-row gap-5 md:justify-center">
          <a
            onClick={handleCloseConfirmModal}
            download="Mr. Phillippe Louis Resumé’ SE (6)"
            href="../../src/images/Resume.pdf"
            className="py-4 px-6 bg-black text-white font-[Poppins] font-bold rounded-[10px] w-[150px] text-center"
          >
            Download
          </a>
          <button
            onClick={handleCloseConfirmModal}
            className="py-4 px-6 bg-[#fb5252] text-white font-[Poppins] font-bold rounded-[10px] w-[150px]"
          >
            Cancel
          </button>
        </div>
      </form>
    </ReusableModal>
  );
};

export default ResumeConfirmModal;
