import React from "react";
import ReusableModal from "../Modal/Modal";

const MessageModal = ({ handleCloseMessageModal }) => {
  return (
    <ReusableModal>
      <form className="flex flex-col gap-1 max-w-fit md:max-w-none">
        <h1 className=" text-[25px] md:text-[40px] font-[Poppins] font-bold max-w-[400px] text-center text-black">
          Message successfully sent! 😁🎉
        </h1>
        <p className="text-[14px] md:text-[20px] text-center text-black">
          I'll be in touch shortly.
        </p>
        <div className="flex flex-col items-center md:flex-row gap-5 md:justify-center">
          <button
            onClick={handleCloseMessageModal}
            className="py-4 px-6 bg-black text-white font-[Poppins] mt-[30px] md:mt-[40px] font-bold rounded-[10px] w-[150px] text-center hover:scale-105 ease-out duration-75"
          >
            Continue
          </button>
        </div>
      </form>
    </ReusableModal>
  );
};

export default MessageModal;
