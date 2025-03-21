// import React from "react";
// import Shoooz from "../Assets/Images/Shoooz.png";
// import DentalClinic from "../Assets/Images/DentalClinic.png";

// function Projects() {
//   const ProjectsData = [
//     {
//       id: 1,
//       name: "Shoooz",
//       type: "E-Commerce Website",
//       desc: "Shoooz is a premier online platform designed to deliver an exceptional shoe shopping experience. With an extensive selection of footwear, users can effortlessly explore a diverse range of styles, manage their shopping preferences, and engage with the community through product reviews and feedback. Shoooz aims to provide a seamless, user-friendly interface that caters to every shoe enthusiast's needs, ensuring a satisfying and enjoyable shopping journey.",
//       tech: [
//         "HTML5",
//         "CSS3",
//         "Tailwind CSS",
//         "JavaScript",
//         "React.js",
//         "Express.js",
//         "Node.js",
//         "MongoDB",
//       ],
//     },
//     {
//       id: 2,
//       name: "Smile Essentials Dental Clinic",
//       type: "Landing Page",
//       desc: "A modern and visually appealing frontend landing page designed for a dental clinic. Built with React and styled using Tailwind CSS, the website ensures a seamless user experience with a clean layout, intuitive navigation, and responsive design. It features sections highlighting clinic services, testimonials, appointment booking, and contact details, making it an effective platform to engage potential patients.",
//       tech: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "React.js"],
//     },
//   ];

//   return (
//     <main
//       className="text-white flex justify-center flex-col text-center px-[20v] py-20"
//       id="Projects"
//     >
//       <h2 className="text-4xl mb-20 font-mono underline decoration-wavy decoration-blue-300 decoration-auto ExperienceH1">
//         Projects
//       </h2>
//       <article>
//         <ul>
//           <li className="flex flex-col justify-between hover:bg-blue-950 mx-[10vw] lg:mx-[20vw] rounded-xl py-2 px-3 bg-[#0a1331] my-10 transition duration-500 hover:scale-105">
//             <div>
//               <a
//                 href="https://shoooz.vercel.app"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <img
//                   src={Shoooz}
//                   alt=""
//                   className="h-[20vh] w-[75vw] rounded-lg lg:h-[60vh] lg:w-[60vw] opacity-100"
//                 />
//               </a>
//             </div>
//             <div className="flex flex-row justify-between">
//               <div>
//                 <h3 className="text-base lg:text-2xl text-start my-1 font-medium max-w-[50vw]">
//                   Shoooz
//                 </h3>
//                 <h3 className="text-sm lg:text-base text-blue-50 text-start mt-1 mb-3">
//                   E-Commerce Website
//                 </h3>
//                 <p className="text-[12px] lg:text-sm text-blue-200 text-start mt-1 mb-3">
//                   Shoooz is a premier online platform designed to deliver an
//                   exceptional shoe shopping experience. With an extensive
//                   selection of footwear, users can effortlessly explore a
//                   diverse range of styles, manage their shopping preferences,
//                   and engage with the community through product reviews and
//                   feedback. Shoooz aims to provide a seamless, user-friendly
//                   interface that caters to every shoe enthusiast's needs,
//                   ensuring a satisfying and enjoyable shopping journey.
//                 </p>
//                 <ul className="flex my-1 font-mono font-thin">
//                   <li className="mr-1 bg-green-100 bg-opacity-20 border-[1px] hover:bg-green-400 hover:bg-opacity-50 hover:text-green-100 border-green-400 py-1 px-2 rounded-xl text-green-300 font-mono text-[4px] lg:text-[10px] text-start">
//                     HTML5
//                   </li>
//                   <li className="mr-1 bg-green-100 bg-opacity-20 border-[1px] hover:bg-green-400 hover:bg-opacity-50 hover:text-green-100 border-green-400 py-1 px-2 rounded-xl text-green-300 font-mono text-[4px] lg:text-[10px] text-start">
//                     CSS3
//                   </li>
//                   <li className="mr-1 bg-green-100 bg-opacity-20 border-[1px] hover:bg-green-400 hover:bg-opacity-50 hover:text-green-100 border-green-400 py-1 px-2 rounded-xl text-green-300 font-mono text-[4px] lg:text-[10px] text-start">
//                     JavaScript
//                   </li>
//                   <li className="mr-1 bg-green-100 bg-opacity-20 border-[1px] hover:bg-green-400 hover:bg-opacity-50 hover:text-green-100 border-green-400 py-1 px-2 rounded-xl text-green-300 font-mono text-[4px] lg:text-[10px] text-start">
//                     ReactJS
//                   </li>
//                   <li className="mr-1 bg-green-100 bg-opacity-20 border-[1px] hover:bg-green-400 hover:bg-opacity-50 hover:text-green-100 border-green-400 py-1 px-2 rounded-xl text-green-300 font-mono text-[4px] lg:text-[10px] text-start">
//                     ExpressJS
//                   </li>
//                   <li className="mr-1 bg-green-100 bg-opacity-20 border-[1px] hover:bg-green-400 hover:bg-opacity-50 hover:text-green-100 border-green-400 py-1 px-2 rounded-xl text-green-300 font-mono text-[4px] lg:text-[10px] text-start">
//                     NodeJS
//                   </li>
//                   <li className="mr-1 bg-green-100 bg-opacity-20 border-[1px] hover:bg-green-400 hover:bg-opacity-50 hover:text-green-100 border-green-400 py-1 px-2 rounded-xl text-green-300 font-mono text-[4px] lg:text-[10px] text-start">
//                     MongoDB
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </li>
//         </ul>
//       </article>
//     </main>
//   );
// }

// export default Projects;


import React from "react";
import Shoooz from "../Assets/Images/Shoooz.png";
import DentalClinic from "../Assets/Images/DentalClinic.png";
import ExpenseTracker from "../Assets/Images/ExpenseTracker.png";

function Projects() {
  const ProjectsData = [
    {
      id: 1,
      name: "Shoooz",
      type: "E-Commerce Website",
      desc: "Shoooz is a premier online platform designed to deliver an exceptional shoe shopping experience. With an extensive selection of footwear, users can effortlessly explore a diverse range of styles, manage their shopping preferences, and engage with the community through product reviews and feedback.",
      tech: [
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "JavaScript",
        "React.js",
        "Express.js",
        "Node.js",
        "MongoDB",
      ],
      img: Shoooz,
      link: "https://shoooz.vercel.app",
    },
    {
      id: 2,
      name: "Smile Essentials Dental Clinic",
      type: "Landing Page",
      desc: "A modern and visually appealing frontend landing page designed for a dental clinic. Built with React and styled using Tailwind CSS, the website ensures a seamless user experience with a clean layout, intuitive navigation, and responsive design.",
      tech: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "React.js"],
      img: DentalClinic,
      link: "https://dental-clinic-sand.vercel.app", // Replace with the actual deployment link if available
    },
    {
      id: 3,
      name: "Expense Tracker",
      type: "Finance Management Website",
      desc: "A user-friendly expense tracker designed for efficient financial management. This application allows users to add an event name, set a total budget, track expenses, and calculate the remaining balance. Additionally, users can generate a PDF report summarizing all transactions, making budgeting and expense tracking seamless and organized.",
      tech: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "React.js"],
      img: ExpenseTracker,
      link: "https://expense-pdf-maker.vercel.app", // Replace with the actual deployment link if available
    },
  ];

  return (
    <main
      className="text-white flex justify-center flex-col text-center px-[10vw] py-20"
      id="Projects"
    >
      <h2 className="text-4xl mb-20 font-mono underline decoration-wavy decoration-blue-300">
        Projects
      </h2>
      <article>
        <ul>
          {ProjectsData.map((project) => (
            <li
              key={project.id}
              className="flex flex-col justify-between hover:bg-blue-950 mx-auto max-w-5xl rounded-xl py-4 px-6 bg-[#0a1331] my-10 transition duration-500 hover:scale-105"
            >
              <div>
                <a href={project.link} target="_blank" rel="noreferrer">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="h-[20vh] w-full rounded-lg lg:h-[60vh] object-cover"
                  />
                </a>
              </div>
              <div className="text-left mt-4">
                <h3 className="text-lg lg:text-2xl font-medium">{project.name}</h3>
                <h4 className="text-sm lg:text-base text-blue-50 mt-1 mb-3">
                  {project.type}
                </h4>
                <p className="text-[12px] lg:text-sm text-blue-200">
                  {project.desc}
                </p>
                <ul className="flex flex-wrap mt-2">
                  {project.tech.map((tech, index) => (
                    <li
                      key={index}
                      className="mr-2 mt-2 bg-green-100 bg-opacity-20 border border-green-400 py-1 px-2 rounded-xl text-green-300 text-xs hover:bg-green-400 hover:bg-opacity-50 hover:text-green-100"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </article>
    </main>
  );
}

export default Projects;
