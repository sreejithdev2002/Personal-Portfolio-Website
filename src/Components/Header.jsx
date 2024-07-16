import React, { useEffect, useState } from "react";
import "../Styles.css";

function Header() {
  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSolid(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className="pb-5 pt-5 flex fixed flex-col items-center justify-between px-4 sm:px-6 md:px-8 lg:px-20 text-white z-30 w-[100%] lg:flex-row"
      id={isSolid ? "Header" : "TransHeader" }
    >
      <h1 className="text-2xl sm:text-3xl text-center headerBrandName">
        SreejithDev2002
      </h1>
      <nav className="md:flex mt-2 lg:mt-0">
        <ol className=" text-[13px] flex flex-row font-sans sm:text-lg marker:text-blue-300 headerBrandLinks">
          <li className=" mx-4 lg:mx-7">Skills</li>
          <li className=" mx-4 lg:mx-7">Experience</li>
          <li className=" mx-4 lg:mx-7">Education</li>
          <li className=" mx-4 lg:mx-7">Projects</li>
          <li className=" mx-4 lg:mx-7">Contact</li>
        </ol>
      </nav>
    </header>
  );
}

export default Header;
