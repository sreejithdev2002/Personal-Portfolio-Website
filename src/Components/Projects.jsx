import React from "react";
import Shoooz from "../Assets/Images/Shoooz.png";

function Projects() {
  return (
    <main
      className="text-white flex justify-center flex-col text-center px-[20v] py-20"
      id="Projects"
    >
      <h2 className="text-4xl mb-20 font-mono underline decoration-wavy decoration-blue-300 decoration-auto ExperienceH1">
        Projects
      </h2>
      <article>
        <ul>
          <li className="flex flex-col justify-between hover:bg-blue-950 mx-[10vw] lg:mx-[20vw] rounded-xl py-2 px-3 bg-[#0a1331] my-10 transition duration-500 hover:scale-105">
            <div>
              <a href="https://shoooz.vercel.app" target="_blank">
              <img
                src={Shoooz}
                alt=""
                className="h-[20vh] w-[75vw] rounded-lg lg:h-[60vh] lg:w-[60vw] opacity-100"
              />
              </a>
            </div>
            <div className="flex flex-row justify-between">
              <div>
                <h3 className="text-base lg:text-2xl text-start my-1 font-medium max-w-[50vw]">
                  Shoooz
                </h3>
                <h3 className="text-sm lg:text-base text-blue-50 text-start mt-1 mb-3">
                  E-Commerce Website
                </h3>
                <p className="text-[12px] lg:text-sm text-blue-300 text-start mt-1 mb-3">
                  Shoooz is a premier online platform designed to deliver an
                  exceptional shoe shopping experience. With an extensive
                  selection of footwear, users can effortlessly explore a
                  diverse range of styles, manage their shopping preferences,
                  and engage with the community through product reviews and
                  feedback. Shoooz aims to provide a seamless, user-friendly
                  interface that caters to every shoe enthusiast's needs,
                  ensuring a satisfying and enjoyable shopping journey.
                </p>
                <ul className="flex text-[10px] my-1 font-mono font-thin">
                  <li className="mr-1 bg-green-100 bg-opacity-20 border-[1px] hover:bg-green-400 hover:bg-opacity-50 hover:text-green-100 border-green-400 py-1 px-2 rounded-xl text-green-300 font-mono text-[6px] lg:text-[10px] text-start">
                    HTML5
                  </li>
                  <li className="mr-1 bg-green-100 bg-opacity-20 border-[1px] hover:bg-green-400 hover:bg-opacity-50 hover:text-green-100 border-green-400 py-1 px-2 rounded-xl text-green-300 font-mono text-[6px] lg:text-[10px] text-start">
                    CSS3
                  </li>
                  <li className="mr-1 bg-green-100 bg-opacity-20 border-[1px] hover:bg-green-400 hover:bg-opacity-50 hover:text-green-100 border-green-400 py-1 px-2 rounded-xl text-green-300 font-mono text-[6px] lg:text-[10px] text-start">
                    JavaScript
                  </li>
                  <li className="mr-1 bg-green-100 bg-opacity-20 border-[1px] hover:bg-green-400 hover:bg-opacity-50 hover:text-green-100 border-green-400 py-1 px-2 rounded-xl text-green-300 font-mono text-[6px] lg:text-[10px] text-start">
                    ReactJS
                  </li>
                  <li className="mr-1 bg-green-100 bg-opacity-20 border-[1px] hover:bg-green-400 hover:bg-opacity-50 hover:text-green-100 border-green-400 py-1 px-2 rounded-xl text-green-300 font-mono text-[6px] lg:text-[10px] text-start">
                    ExpressJS
                  </li>
                  <li className="mr-1 bg-green-100 bg-opacity-20 border-[1px] hover:bg-green-400 hover:bg-opacity-50 hover:text-green-100 border-green-400 py-1 px-2 rounded-xl text-green-300 font-mono text-[6px] lg:text-[10px] text-start">
                    NodeJS
                  </li>
                  <li className="mr-1 bg-green-100 bg-opacity-20 border-[1px] hover:bg-green-400 hover:bg-opacity-50 hover:text-green-100 border-green-400 py-1 px-2 rounded-xl text-green-300 font-mono text-[6px] lg:text-[10px] text-start">
                    MongoDB
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </article>
    </main>
  );
}

export default Projects;
