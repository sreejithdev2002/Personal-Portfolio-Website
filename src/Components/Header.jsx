import React from "react";
import "../Styles.css";

function Header() {
  return (
    <header className="pb-10 pt-5 flex fixed flex-col items-center justify-between px-4 sm:px-6 md:px-8 lg:px-20 text-white z-30 w-[100%] lg:flex-row">
      <h1 className="text-2xl sm:text-3xl text-center headerBrandName">
        SreejithDev2002
      </h1>
      <nav className="md:flex mt-2 lg:mt-0">
        <ol className=" text-[10px] flex flex-row font-sans sm:text-lg marker:text-blue-300 headerBrandLinks">
          <li className=" mx-4 lg:mx-7">Home</li>
          <li className=" mx-4 lg:mx-7">About</li>
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
