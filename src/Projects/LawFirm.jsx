import JavaScript from "../assets/JavaScript.svg";
import React from "../assets/React.svg";

import ProjectCard from "../components/ProjectCard/ProjectCard";

const LawFirm = ({ showCard, category }) => {
  return (
    <div
      className={`flex flex-col mb-[100px] gap-[10px] bg-[#2b2b2b] max-w-[400px] h-fit rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[10px] overflow-visible ${
        showCard === "all" || showCard === category ? "block" : "hidden"
      }`}
    >
      <ProjectCard
        title={"Cire Legal Website"}
        Stackone={React}
        Stacktwo={JavaScript}
        Description={
          <div className="font-[Poppins] text-black text-[14px] xs:text-[15px] space-y-2">
            <p>
              Designed and deployed a responsive law firm website focused on
              clear service navigation, professional branding, and mobile-first
              UX.
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>
                Built reusable UI components (Header/Nav, About, Team, Services)
                using React.
              </li>
              <li>
                Implemented responsive layouts and clean styling for a polished,
                client-ready experience.
              </li>
              <li>
                Deployed to Netlify and configured production domain + SSL
                certificate for a secure live site.
              </li>
            </ul>
          </div>
        }
        LiveSite={"https://cirelegal.com/"}
        Code={"https://github.com/Plouis53/cire-legal-app-"}
      />
    </div>
  );
};

export default LawFirm;



// import JavaScript from "../assets/JavaScript.svg";
// import React from "../assets/React.svg";

// import ProjectCard from "../components/ProjectCard/ProjectCard";

// const CireLegalApp= ({ showCard, category }) => {
//   return (
//     <div
//       className={`flex flex-col mb-[100px] gap-[10px] bg-[#2b2b2b] max-w-[400px] h-fit rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[10px] overflow-visible ${
//         showCard === "all" || showCard === category ? "block" : "hidden"
//       }`}
//     >
//       <ProjectCard
//         title={"Cire-Legal"}
//         Stackone={React}
//         Stacktwo={JavaScript}
//         Description={
//           <p className="font-[Poppins] text-black text-[14px] xs:text-[15px]">
         
//           </p>
//         }
//         LiveSite={"https://cire-legal.com/"}
//         Code={"https://github.com/Plouis53/cire-legal-app-"}
//         className={undefined}
//       />
//     </div>
//   );
// };

// export default CireLegalApp;