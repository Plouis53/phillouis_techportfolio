import React from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import ReusableModal from "../Modal/Modal";

const ContactModal = ({ closeModal }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    closeModal();

    emailjs
      .sendForm(
        "service_s0j8x7f",
        "template_ydsbm4b",
        form.current,
        "Xj532ZUsZU6IaUBTj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          console.log("FAILED...", error.text);
        }
      );
  };

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const Feedback = ({ className, message }) => {
    return (
      <p className={`text-left text-error-message text-[#FF4040] ${className}`}>
        {message}
      </p>
    );
  };

  // const onSubmit = (data) => {
  //   sendEmail(data);
  // };

  const Submit = ({ title, className }) => {
    return (
      <div className="flex justify-center pt-8 pb-5">
        <button
          onClick={sendEmail}
          className={`font-[Poppins] text-lg w-full rounded-[10px] py-4 px-4 border-black border-[1px] text-white bg-black ${className}`}
          type="submit"
        >
          {title}
        </button>
      </div>
    );
  };

  const SubmitInvalid = ({ title, className }) => {
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

  return (
    <ReusableModal>
      <button
        onClick={closeModal}
        className="text-black text-[20px] font-semibold positon: absolute w-[30px] h-[30px] bg-no-repeat top-3 right-3"
      >
        X
      </button>
      <div className="w-[250px] md:w-[400px] mt-[20px]">
        <form
          ref={form}
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
              minLength: {
                value: 2,
                message: "Use 2 or more characters",
              },
            })}
            onChange={(evt) => {
              setValue("name", evt.target.value, { shouldValidate: true });
            }}
            className="border-black border-[1px] p-[7px] rounded-[10px] text-black bg-white"
            type="text"
            name="user_name"
            placeholder="Your name"
            minLength="3"
            required
          />
          {errors.name && <Feedback message={errors.name.message} />}
          <label className="font-[Poppins] text-black text-[16px] font-semibold">
            Email
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}/,
                message: "Invalid Email",
              },
            })}
            onChange={(evt) => {
              setValue("email", evt.target.value, { shouldValidate: true });
            }}
            className="border-black border-[1px] p-[7px] rounded-[10px] text-black bg-white"
            type="email"
            name="user_email"
            placeholder="Your email"
            required
          />
          {errors.email && <Feedback message={errors.email.message} />}
          <label className="font-[Poppins] text-black text-[16px] font-semibold">
            Your message
          </label>
          <textarea
            {...register("message", {
              minLength: {
                value: 10,
                message: "Message required",
              },
            })}
            onChange={(evt) => {
              setValue("message", evt.target.value, { shouldValidate: true });
            }}
            className="border-[1px] border-black p-[7px] rounded-[10px] text-black h-[100px] bg-white"
            placeholder="Type your message"
            name="message"
            minLength="4"
            maxLength="100"
            required
          />
          {errors.message && <Feedback message={errors.message.message} />}
          {isValid ? (
            <Submit title={"Submit"} />
          ) : (
            <SubmitInvalid title={"Submit"} />
          )}
        </form>
      </div>
    </ReusableModal>
  );
};

export default ContactModal;

// import React from "react";
// import { useRef } from "react";
// import { useForm } from "react-hook-form";
// import emailjs from "@emailjs/browser";
// import ReusableModal from "../Modal/Modal";

// const ContactModal = ({ closeModal }) => {
//   const form = useRef();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     setValue,
//   } = useForm();

//   const sendEmail = (formData) => {
//     // Send email using emailjs
//     emailjs
//       .sendForm(
//         "service_s0j8x7f",
//         "template_ydsbm4b",
//         form.current,
//         "Xj532ZUsZU6IaUBTj"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           console.log("SUCCESS!");
//           closeModal(); // Close modal after successful email submission
//         },
//         (error) => {
//           console.log(error.text);
//           console.log("FAILED...", error.text);
//           // Handle error if email sending fails
//         }
//       );
//   };

//   const onSubmit = (data) => {
//     // Handle form submission here
//     console.log(data);
//     sendEmail(data); // Call sendEmail function with form data
//   };

//   return (
//     <ReusableModal>
//       <button
//         onClick={closeModal}
//         className="text-black text-[20px] font-semibold position: absolute w-[30px] h-[30px] bg-no-repeat top-3 right-3"
//       >
//         X
//       </button>
//       <div className="w-[250px] md:w-[400px] mt-[20px]">
//         <form
//           ref={form}
//           onSubmit={handleSubmit(onSubmit)}
//           className="flex flex-col align-middle gap-[10px]"
//         >
//           <h1 className="font-[Poppins] text-center text-black text-[30px] font-semibold md:text-[50px]">
//             Contact me
//           </h1>
//           <label className="font-[Poppins] text-black text-[16px] font-semibold">
//             Name
//           </label>
//           <input
//             {...register("name", {
//               required: "Name is required",
//               minLength: {
//                 value: 2,
//                 message: "Name should be at least 2 characters",
//               },
//             })}
//             className="border-black border-[1px] p-[7px] rounded-[10px] text-black bg-white"
//             type="text"
//             placeholder="Your name"
//           />
//           {errors.name && <p className="text-red-500">{errors.name.message}</p>}
//           {/* Email input */}
//           <label className="font-[Poppins] text-black text-[16px] font-semibold">
//             Email
//           </label>
//           <input
//             {...register("email", {
//               required: "Email is required",
//               pattern: {
//                 value: /\S+@\S+\.\S+/,
//                 message: "Invalid email address",
//               },
//             })}
//             className="border-black border-[1px] p-[7px] rounded-[10px] text-black bg-white"
//             type="email"
//             placeholder="Your email"
//           />
//           {errors.email && (
//             <p className="text-red-500">{errors.email.message}</p>
//           )}
//           {/* Message textarea */}
//           <label className="font-[Poppins] text-black text-[16px] font-semibold">
//             Your message
//           </label>
//           <textarea
//             {...register("message", {
//               required: "Message is required",
//               minLength: {
//                 value: 20,
//                 message: "Message should be at least 20 characters",
//               },
//             })}
//             className="border-[1px] border-black p-[7px] rounded-[10px] text-black h-[100px] bg-white"
//             placeholder="Type your message"
//           />
//           {errors.message && (
//             <p className="text-red-500">{errors.message.message}</p>
//           )}
//           {/* Submit button */}
//           <button
//             type="submit"
//             className="font-[Poppins] text-lg w-full rounded-[10px] py-4 px-4 border-black border-[1px] text-white bg-black"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </ReusableModal>
//   );
// };

// export default ContactModal;

// import emailjs from "@emailjs/browser";
// import React from "react";
// import { useRef } from "react";
// import { motion, spring } from "framer-motion";
// import { useForm } from "react-hook-form";
// import ReusableModal from "../Modal/Modal";

// const ContactModal = ({ closeModal }) => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();
//     closeModal();

//     emailjs
//       .sendForm(
//         "service_s0j8x7f",
//         "template_ydsbm4b",
//         form.current,
//         "Xj532ZUsZU6IaUBTj"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           console.log("SUCCESS!");
//         },
//         (error) => {
//           console.log(error.text);
//           console.log("FAILED...", error.text);
//         }
//       );
//   };

//   const {
//     register,
//     setValue,
//     formState: { errors, isValid },
//   } = useForm({
//     defaultValues: {
//       name: "",
//       email: "",
//       message: "",
//     },
//   });

//   const Feedback = ({ className, message }) => {
//     return (
//       <p className={`text-left text-error-message text-[#FF4040] ${className}`}>
//         {message}
//       </p>
//     );
//   };

//   return (
//     <div className="position: fixed flex flex-col top-0 bottom-0 right-0 left-0 z-10 bg-black bg-opacity-[70%]">
//       <motion.div
//         animate={{ scale: 1 }}
//         initial={{ scale: 0 }}
//         transition={{ duration: 0.2 }}
//         className="w-fit position: relative bg-white m-auto p-9 rounded-xl box-border"
//       >
//         <button
//           onClick={closeModal}
//           className="text-black text-[20px] font-semibold posiiton: absolute w-[30px] h-[30px] bg-no-repeat top-3 right-3"
//         >
//           X
//         </button>
//         <div className="w-[250px] md:w-[400px] mt-[20px]">
//           <form
//             ref={form}
//             onSubmit={sendEmail}
//             className="flex flex-col align-middle gap-[10px]"
//           >
//             <h1 className="font-[Poppins] text-center text-black text-[30px] font-semibold md:text-[50px]">
//               {" "}
//               Contact me
//             </h1>
//             <label className="font-[Poppins] text-black text-[16px] font-semibold">
//               Name
//             </label>
//             <input
//               className=" bg-slate-100 border-black border-[1px] p-[7px] rounded-[10px] text-black"
//               type="name"
//               name="user_name"
//               placeholder="Your name"
//               minLength="3"
//               required
//             ></input>
//             <label className="font-[Poppins] text-black text-[16px] font-semibold">
//               Email
//             </label>
//             <input
//               className="border-[1px] border-black bg-slate-100 p-[7px] rounded-[10px] text-black"
//               type="email"
//               name="user_email"
//               placeholder="Your email"
//               required
//             ></input>
//             <label className="font-[Poppins] text-black text-[16px] font-semibold">
//               Your message!
//             </label>
//             <textarea
//               className="border-[1px] border-black bg-slate-100 p-[7px] rounded-[10px] text-black h-[100px]"
//               placeholder="Type your message"
//               name="message"
//               minLength="4"
//               maxLength="100"
//               required
//             ></textarea>
//             <button className="relative px-5 py-3 w-[200px] mx-auto mt-[20px] bg-slate-100 overflow-hidden font-medium text-black border border-black rounded-lg shadow-inner group">
//               <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
//               <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
//               <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
//               <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
//               <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
//               <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
//                 Send
//               </span>
//             </button>
//           </form>
//         </div>
//       </motion.div>
//     </div>
//   );
// };
// export default ContactModal;
