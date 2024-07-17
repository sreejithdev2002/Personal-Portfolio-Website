import React from "react";
import "../Styles.css";
import instagram from "../Assets/Icons/instagram.png";
import facebook from "../Assets/Icons/facebook.png";
import linkedin from "../Assets/Icons/linkedin.png";
import github from "../Assets/Icons/github.png";
import x from "../Assets/Icons/twitter.png";
import Man3D from '../Assets/Images/Man3D1.png';

function Home() {
  return (
    <main className="flex flex-col text-white justify-center text-start px-[20vw] relative top-[50px] h-[100vh] lg:top-0" id="Home">
      <h4 className="text-blue-300 font-mono">Hi, my name is</h4>
      <h1 className="text-5xl py-1 z-20 NameH1">Sreejith U.</h1>
      <h1 className="text-5xl text-gray-300 py-1 z-20 NameH1">
        I build things for the web.
      </h1>
      <p className="max-w-[500px] py-1 text-left text-blue-200 z-20">
        Proactive and dedicated MERN Stack Developer with strong communication
        and organizational skills. Possessing adept problem-solving abilities
        and analytical thinking, with a knack for multitasking and facilitating
        group discussions.
      </p>
      <img src={Man3D} alt="" className="h-[25vw] w-[25vw] absolute right-[15vw] saturate-150 rotate-[-5deg] z-10" />
      <button className="bg-transparent border-2 text-blue-300 border-blue-300 py-2 my-10 hover:bg-blue-300 hover:text-blue-950 rounded transition-colors duration-500 shadow-lg lg:w-[15vw]">
        Download my resume
      </button>

      <div className="flex justify-center lg:justify-start">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/sreejithdev2002/"
          className="p-2 border-2 border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-950 mr-5 rounded-3xl  min-w-[50px] w-[50px] transition duration-500 hover:-translate-y-2"
        >
          <img src={instagram} alt="" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/sreejithdev2002/"
          className="p-2 border-2 border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-950 mr-5 rounded-3xl  min-w-[50px] w-[50px] transition duration-500 hover:-translate-y-2"
        >
          <img src={linkedin} alt="" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/sreejithdev2002"
          className="p-2 border-2 border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-950 mr-5 rounded-3xl  min-w-[50px] w-[50px] transition duration-500 hover:-translate-y-2"
        >
          <img src={github} alt="" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://x.com/SreejithDev2002"
          className="p-2 border-2 border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-950 mr-5 rounded-3xl  min-w-[50px] w-[50px] transition duration-500 hover:-translate-y-2"
        >
          <img src={x} alt="" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/profile.php?id=61551495626567"
          className="p-2 border-2 border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-950 mr-5 rounded-3xl  min-w-[50px] w-[50px] transition duration-500 hover:-translate-y-2"
        >
          <img src={facebook} alt="" />
        </a>
      </div>
    </main>
  );
}

export default Home;
