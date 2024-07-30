import React from "react";
import "../Styles.css";

function Experience() {
  return (
    <main
      className="text-white flex justify-center flex-col text-center px-[20v] py-20"
      id="Experience"
    >
      <h2 className="text-4xl mb-20 font-mono underline decoration-wavy decoration-blue-300 decoration-auto ExperienceH1">
        Experience
      </h2>
      <article>
        <ul>
          <li className="flex hover:scale-105 justify-between hover:bg-blue-950 mx-[10vw] lg:mx-[20vw] rounded-xl py-2 px-3 bg-[#0a1331] my-3 transition duration-500">
            <div>
              <div className="flex justify-between">
                <h3 className="text-base lg:text-2xl text-start my-1 font-medium max-w-[50vw]">
                  MERN Stack Developer
                </h3>
                <p className="text-xs my-2 font-mono">Sept 2023 - Present</p>
              </div>
              <h3 className="text-sm lg:text-base text-blue-50 text-start mt-1 mb-3">
                Softroniics, Perinthalmanna
              </h3>
              <p className="text-start text-xs text-blue-300">
                Worked as a MERN Stack Developer Intern at Softroniics, building
                full-stack web applications using MongoDB, Express.js, React,
                and Node.js. Collaborated on development, testing, and
                deployment, enhancing skills in problem-solving and code
                optimization.
              </p>
            </div>
          </li>
        </ul>
      </article>
    </main>
  );
}

export default Experience;
