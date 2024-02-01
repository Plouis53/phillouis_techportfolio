import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-[#363636] text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover text-white font-[Poppins] opacity-70">
          About me
        </a>
        <a className="link link-hover text-white font-[Poppins] opacity-70">
          Contact
        </a>
        <a className="link link-hover text-white font-[Poppins] opacity-70">
          Projects
        </a>
      </nav>
      <p className="font-[Poppins] text-white opacity-70">
        Copyright © 2024 - Phillippe Louis Portfolio
      </p>
    </footer>
  );
};
export default Footer;

// const Footer = () => {
//   return (
//     <div>
//       <div className="flex max-w-[100%] gap-[60px] mx-[70px]">
//         <div className="flex flex-col gap-[20px]">
//           <h1 className="font-[Poppins] text-[50px] font-semibold text-white mb-[20px]">
//             Logo
//           </h1>
//           <p className="font-[Poppins] text-[15px] text-white">
//             plouis1804@gmail.com
//           </p>
//           <p className="font-[Poppins] text-[15px] text-white">
//             &copy;2024 Phillippe Louis
//           </p>
//         </div>
//         {/* <div className> */}
//           <ul className="flex flex-col content-between">
//             <li className="font-[Poppins] text-[15px] text-white">Home</li>
//             <li className="font-[Poppins] text-[15px] text-white">Projects</li>
//             <li className="font-[Poppins] text-[15px] text-white">Resume</li>
//             <li className="font-[Poppins] text-[15px] text-white">About</li>
//             <li className="font-[Poppins] text-[15px] text-white">
//               Contact me
//             </li>
//           </ul>
//         </div>
//       </div>
//     // </div>
//   );
// };

// export default Footer;
