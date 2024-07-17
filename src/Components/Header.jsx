// import React, { useEffect, useState } from "react";
// import "../Styles.css";

// function Header() {
//   const [isSolid, setIsSolid] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       setIsSolid(scrollPosition > 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <header
//       className="pb-5 pt-5 flex fixed flex-col items-center justify-between px-4 sm:px-6 md:px-8 lg:px-20 text-white z-30 w-[100%] lg:flex-row"
//       id={isSolid ? "Header" : "TransHeader"}
//     >
//       <h1
//         className="text-2xl sm:text-3xl text-center headerBrandName"
//         onClick={() => scrollToSection("Home")}
//       >
//         SreejithDev2002
//       </h1>
//       <nav className="md:flex mt-2 lg:mt-0">
//         <ol className="text-[13px] flex flex-row font-sans sm:text-lg marker:text-blue-300 headerBrandLinks">
//           <li
//             className="mx-4 lg:mx-7"
//             onClick={() => scrollToSection("Skills")}
//           >
//             Skills
//           </li>
//           <li
//             className="mx-4 lg:mx-7"
//             onClick={() => scrollToSection("Experience")}
//           >
//             Experience
//           </li>
//           <li
//             className="mx-4 lg:mx-7"
//             onClick={() => scrollToSection("Education")}
//           >
//             Education
//           </li>
//           <li
//             className="mx-4 lg:mx-7"
//             onClick={() => scrollToSection("Projects")}
//           >
//             Projects
//           </li>
//           <li
//             className="mx-4 lg:mx-7"
//             onClick={() => scrollToSection("Contact")}
//           >
//             Contact
//           </li>
//         </ol>
//       </nav>
//     </header>
//   );
// }

// export default Header;

import React, { useEffect, useState, useRef } from "react";
import "../Styles.css";

function Header() {
  const [isSolid, setIsSolid] = useState(false);
  const [activeSection, setActiveSection] = useState("Home"); // Default active section
  const headerRef = useRef(null); // Reference to header element

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const scrollPosition = window.scrollY + headerRef.current.clientHeight;
      setIsSolid(scroll > 10);

      const sections = [
        { value: "Home", offsetTop: 0 },
        {
          value: "Skills",
          offsetTop: document.getElementById("Skills")?.offsetTop,
        },
        {
          value: "Experience",
          offsetTop: document.getElementById("Experience")?.offsetTop,
        },
        {
          value: "Education",
          offsetTop: document.getElementById("Education")?.offsetTop,
        },
        {
          value: "Projects",
          offsetTop: document.getElementById("Projects")?.offsetTop,
        },
        {
          value: "Contact",
          offsetTop: document.getElementById("Contact")?.offsetTop,
        },
      ];

      // Find the current section based on scroll position
      let currentSection = "Home";
      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sections[i].offsetTop) {
          currentSection = sections[i].value;
          break;
        }
      }

      // Update active section only if it has changed
      if (activeSection !== currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]); // Depend on activeSection to avoid re-render issues

  const scrollToSection = (value) => {
    const element = document.getElementById(value);
    if (element) {
      const offset = 20; // Adjust this offset as needed
      window.scrollTo({
        top: element.offsetTop - headerRef.current.clientHeight + offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      ref={headerRef}
      className="pb-5 pt-5 flex fixed flex-col items-center justify-between px-4 sm:px-6 md:px-8 lg:px-20 text-white z-30 w-[100%] lg:flex-row"
      id={isSolid ? "Header" : "TransHeader"}
    >
      <h1 className="text-2xl sm:text-3xl text-center headerBrandName">
        SreejithDev2002
      </h1>
      <nav className="md:flex mt-2 lg:mt-0">
        <ol className="text-[13px] flex flex-row font-sans sm:text-lg marker:text-blue-300 headerBrandLinks">
          <li
            className={`mx-4 lg:mx-7 ${
              activeSection === "Home"
                ? "font-bold underline decoration-wavy decoration-auto decoration-blue-300 "
                : ""
            }`}
            onClick={() => scrollToSection("Home")}
          >
            Home
          </li>
          <li
            className={`mx-4 lg:mx-7 ${
              activeSection === "Skills"
                ? "font-bold underline decoration-wavy decoration-auto decoration-blue-300 "
                : ""
            }`}
            onClick={() => scrollToSection("Skills")}
          >
            Skills
          </li>
          <li
            className={`mx-4 lg:mx-7 ${
              activeSection === "Experience"
                ? "font-bold underline decoration-wavy decoration-auto decoration-blue-300 "
                : ""
            }`}
            onClick={() => scrollToSection("Experience")}
          >
            Experience
          </li>
          <li
            className={`mx-4 lg:mx-7 ${
              activeSection === "Education"
                ? "font-bold underline decoration-wavy decoration-auto decoration-blue-300 "
                : ""
            }`}
            onClick={() => scrollToSection("Education")}
          >
            Education
          </li>
          <li
            className={`mx-4 lg:mx-7 ${
              activeSection === "Projects"
                ? "font-bold underline decoration-wavy decoration-auto decoration-blue-300 "
                : ""
            }`}
            onClick={() => scrollToSection("Projects")}
          >
            Projects
          </li>
          <li
            className={`mx-4 lg:mx-7 ${
              activeSection === "Contact"
                ? "font-bold underline decoration-wavy decoration-auto decoration-blue-300 "
                : ""
            }`}
            onClick={() => scrollToSection("Contact")}
          >
            Contact
          </li>
        </ol>
      </nav>
    </header>
  );
}

export default Header;
