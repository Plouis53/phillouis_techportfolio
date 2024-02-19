import React from "react";

const ContactButton = ({ openModal }) => {
  return (
    <div className="flex justify-center items-center bg-[#f5dfa1] h-[60px] w-[60px] rounded-[100%] position: fixed bottom-[30px] right-[30px] lg:hidden">
      <button
        onClick={openModal}
        className="bg-Mail h-[32px] w-[32px] rounded-[100%]"
      ></button>
    </div>
  );
};

export default ContactButton;
