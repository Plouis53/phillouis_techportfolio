import React, { useEffect } from "react";
import ReusableModal from "../Modal/Modal";
import ResumePDF from "../../images/SDE_SrPM_7825_Phillippe_Louis_Résumé.pdf";

const ResumeConfirmModal = ({ handleCloseConfirmModal }) => {
  const closeModal = () => {
    handleCloseConfirmModal();
  };

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", closeByEscape);

    return () => document.removeEventListener("keydown", closeByEscape);
  });

  return (
    <ReusableModal>
      <button
        onClick={handleCloseConfirmModal}
        className="text-black text-[20px] font-semibold absolute  w-[30px] h-[30px] top-3 right-3"
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
            download="SDE_SrPM_7825_Phillippe_Louis_Résumé.pdf"
            href={ResumePDF}
            className="py-4 px-6 bg-black text-white font-[Poppins] font-bold rounded-[10px] w-[150px] text-center hover:scale-105 ease-out duration-75"
          >
            Download
          </a>
          <button
            onClick={handleCloseConfirmModal}
            className="py-4 px-6 bg-[#fb5252] text-white font-[Poppins] font-bold rounded-[10px] w-[150px] hover:scale-105 ease-out duration-75"
          >
            Cancel
          </button>
        </div>
      </form>
    </ReusableModal>
  );
};

export default ResumeConfirmModal;
