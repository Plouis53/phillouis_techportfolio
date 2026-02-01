import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import ReusableModal from "../Modal/Modal";

// ✅ Helper components must be OUTSIDE ContactModal
const Feedback = ({ className = "", message }) => {
  if (!message) return null;

  return (
    <p className={`text-left text-error-message text-[#FF4040] ${className}`}>
      {message}
    </p>
  );
};

const Submit = ({ title = "Submit", className = "" }) => {
  return (
    <div className="flex justify-center pt-8 pb-5">
      <button
        className={`font-[Poppins] text-lg w-full rounded-[10px] py-4 px-4 border-black border-[1px] text-white bg-black hover:scale-105 ease-out duration-75 ${className}`}
        type="submit"
      >
        {title}
      </button>
    </div>
  );
};

const SubmitInvalid = ({ title = "Submit", className = "" }) => {
  return (
    <div className="flex justify-center pt-8 pb-5">
      <button
        className={`font-[Poppins] text-lg w-full rounded-[10px] py-4 px-4 border-black border-[1px] text-white bg-black opacity-50 cursor-not-allowed ${className}`}
        type="submit"
        disabled
      >
        {title}
      </button>
    </div>
  );
};

const ContactModal = ({ closeModal, handleOpenMessageModal }) => {
  const formRef = useRef(null);

  const {
    register,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange", // ✅ makes isValid update live as you type
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const sendEmail = (e) => {
    e.preventDefault();

    // ✅ send first, then close (so you don't close even if it fails)
    emailjs
      .sendForm(
        "service_mmdwm2a",
        "template_z4p4cjg",
        formRef.current,
        "Xj532ZUsZU6IaUBTj",
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          closeModal();
          handleOpenMessageModal();
        },
        (error) => {
          console.log("Email error:", error.text);
        },
      );
  };

  return (
    <ReusableModal>
      <button
        onClick={closeModal}
        className="text-black text-[20px] font-semibold position: absolute w-[30px] h-[30px] bg-no-repeat top-3 right-3"
        type="button"
      >
        X
      </button>

      <div className="w-[250px] md:w-[400px] mt-[20px]">
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="flex flex-col align-middle gap-[10px]"
        >
          <h1 className="font-[Poppins] text-center text-black text-[30px] font-semibold md:text-[50px]">
            Contact me
          </h1>

          <label className="font-[Poppins] text-black text-[16px] font-semibold">
            Name
          </label>
          <input
            {...register("name", {
              required: "Name is required",
              minLength: { value: 2, message: "Use 2 or more characters" },
            })}
            onChange={(evt) =>
              setValue("name", evt.target.value, { shouldValidate: true })
            }
            className="border-black border-[1px] p-[7px] rounded-[10px] text-black bg-white"
            type="text"
            name="user_name"
            placeholder="Your name"
          />
          <Feedback message={errors?.name?.message} />

          <label className="font-[Poppins] text-black text-[16px] font-semibold">
            Email
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /[\w-.]+@([\w-]+\.)+[\w-]{2,4}/,
                message: "Invalid Email",
              },
            })}
            onChange={(evt) =>
              setValue("email", evt.target.value, { shouldValidate: true })
            }
            className="border-black border-[1px] p-[7px] rounded-[10px] text-black bg-white"
            type="email"
            name="user_email"
            placeholder="Your email"
          />
          <Feedback message={errors?.email?.message} />

          <label className="font-[Poppins] text-black text-[16px] font-semibold">
            Your message
          </label>
          <textarea
            {...register("message", {
              required: "Message is required",
              minLength: { value: 10, message: "Use 10 or more characters" },
              maxLength: { value: 100, message: "Max 100 characters" },
            })}
            onChange={(evt) =>
              setValue("message", evt.target.value, { shouldValidate: true })
            }
            className="border-[1px] border-black p-[7px] rounded-[10px] text-black h-[100px] bg-white"
            placeholder="Type your message"
            name="message"
          />
          <Feedback message={errors?.message?.message} />

          {isValid ? (
            <Submit title="Submit" />
          ) : (
            <SubmitInvalid title="Submit" />
          )}
        </form>
      </div>
    </ReusableModal>
  );
};

export default ContactModal;
