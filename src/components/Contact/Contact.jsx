import React from "react";

const Contact = () => {
  return (
    <div>
      <div></div>
    </div>
  );
};

export default Contact;

// import emailjs from "@emailjs/browser";
// import React from "react";
// import { useRef } from "react";
// import { motion, spring } from "framer-motion";

// const ContactModal = ({ closeModal }) => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();
//     closeModal();

//     emailjs
//       .sendForm(
//         "service_2giy5m7",
//         "template_hsjm40e",
//         form.current,
//         "sKJvZiM-ZQ5-Pjc96"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
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
