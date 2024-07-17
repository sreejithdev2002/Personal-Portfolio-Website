import React from "react";
import "../Styles.css";

function Experience() {
  return (
    <main className="text-white flex justify-center flex-col text-center px-[20v] py-20" id="Experience">
      <h2 className="text-4xl mb-20 font-mono underline decoration-wavy decoration-blue-300 decoration-auto ExperienceH1">
        Experience
      </h2>
      <article>
        <ul>
          <li className="flex justify-between hover:bg-blue-950 mx-[10vw] lg:mx-[20vw] rounded-xl py-2 px-3 bg-[#0a1331] transition duration-500 hover:scale-105">
            <div>
              <h3 className="text-base lg:text-2xl text-start my-1 font-medium">
                MERN Stack Developer Intern
              </h3>
              <h3 className="text-sm lg:text-base text-blue-50 text-start mt-1 mb-3">
                Softroniics - Perinthalmanna
              </h3>
              <ul className="list-disc marker:text-blue-300 pl-3">
                <li className="lg:w-[45vw] w-[45vw] text-start text-[12px] text-blue-200 my-1 transition duration-500 hover:scale-105">
                  Developed and deployed interactive and responsive web
                  applications using React.js, enhancing user experience and
                  engagement.
                </li>
                <li className="lg:w-[45vw] w-[45vw] text-start text-[12px] text-blue-200 my-1">
                  Utilized Node.js and Express.js to build robust server-side
                  applications, implementing efficient routes and middleware for
                  seamless backend functionality.
                </li>
                <li className="lg:w-[45vw] w-[45vw] text-start text-[12px] text-blue-200 my-1">
                  Designed and interacted with MongoDB databases, gaining
                  expertise in data modelling, querying, and aggregation to
                  ensure optimal data storage and retrieval.
                </li>
                <li className="lg:w-[45vw] w-[45vw] text-start text-[12px] text-blue-200 my-1">
                  Successfully integrated frontend components with backend
                  services, facilitating seamless communication and enhancing
                  overall application performance.
                </li>
                <li className="lg:w-[45vw] w-[45vw] text-start text-[12px] text-blue-200 my-1">
                  Proficiently managed version control using Git and
                  collaborated effectively within development teams,
                  demonstrating strong teamwork and communication skills.
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[10px] lg:text-[12px] my-1 font-mono font-thin">
                Sept 2023 - Present
              </p>
            </div>
          </li>
          <br />
          <li className="flex justify-between hover:bg-blue-950 mx-[10vw] lg:mx-[20vw] rounded-xl py-2 px-3 bg-[#0a1331] transition duration-500 hover:scale-105">
            <div>
              <h3 className="text-base lg:text-2xl text-start my-1 font-medium">
                MERN Stack Developer Intern
              </h3>
              <h3 className="text-sm lg:text-base text-blue-50 text-start mt-1 mb-3">
                Softroniics - Perinthalmanna
              </h3>
              <ul className="list-disc marker:text-blue-300 pl-3">
                <li className="lg:w-[45vw] w-[45vw] text-start text-[12px] text-blue-200 my-1 transition duration-500 hover:scale-105">
                  Developed and deployed interactive and responsive web
                  applications using React.js, enhancing user experience and
                  engagement.
                </li>
                <li className="lg:w-[45vw] w-[45vw] text-start text-[12px] text-blue-200 my-1">
                  Utilized Node.js and Express.js to build robust server-side
                  applications, implementing efficient routes and middleware for
                  seamless backend functionality.
                </li>
                <li className="lg:w-[45vw] w-[45vw] text-start text-[12px] text-blue-200 my-1">
                  Designed and interacted with MongoDB databases, gaining
                  expertise in data modelling, querying, and aggregation to
                  ensure optimal data storage and retrieval.
                </li>
                <li className="lg:w-[45vw] w-[45vw] text-start text-[12px] text-blue-200 my-1">
                  Successfully integrated frontend components with backend
                  services, facilitating seamless communication and enhancing
                  overall application performance.
                </li>
                <li className="lg:w-[45vw] w-[45vw] text-start text-[12px] text-blue-200 my-1">
                  Proficiently managed version control using Git and
                  collaborated effectively within development teams,
                  demonstrating strong teamwork and communication skills.
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[10px] lg:text-[12px] my-1 font-mono font-thin">
                Sept 2023 - Present
              </p>
            </div>
          </li>
        </ul>
      </article>
    </main>
  );
}

export default Experience;
