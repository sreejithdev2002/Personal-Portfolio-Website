import React from "react";
import "../Styles.css";

function Header() {
  return (
    <header className="flex flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-20 py-5 text-white">
      <h1 className="text-2xl sm:text-3xl text-center headerBrandName">
        SreejithDev2002
      </h1>
      <nav className="hidden md:flex">
        <ol className="flex flex-row font-sans text-base sm:text-lg marker:text-blue-300 headerBrandLinks">
          <li className=" mx-7">Home</li>
          <li className=" mx-7">About</li>
          <li className=" mx-7">Skills</li>
          <li className=" mx-7">Experience</li>
          <li className=" mx-7">Education</li>
          <li className=" mx-7">Projects</li>
          <li className=" mx-7">Contact</li>
        </ol>
      </nav>
    </header>
  );
}

export default Header;
