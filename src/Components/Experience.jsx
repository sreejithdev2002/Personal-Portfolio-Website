import React from "react";
import "../Styles.css";

function Experience() {
  const experienceData = [
    {
      id: 1,
      title: "ReactJS Developer",
      timeline: "Nov 2024 - Present",
      company: "Daxoff Hub Pvt Ltd, North Paravur",
      description:
        "I am a Web Developer at Daxoff Hub Pvt Ltd, North Paravur, where I developed the frontend of the QK Wash Admin Website and contributed to backend integration for the QK Wash User Website.",
    },
    {
      id: 2,
      title: "MERN Stack Developer",
      timeline: "Oct 2023 - Oct 2024",
      company: "Softroniics, Perinthalmanna",
      description:
        "Worked as a MERN Stack Developer Intern at Softroniics, building full-stack web applications using MongoDB, Express.js, React, and Node.js. Collaborated on development, testing, and deployment, enhancing skills in problem-solving and code optimization.",
    },
  ];

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
          {experienceData.map((data) => (
            <li className="flex hover:scale-105 justify-between hover:bg-blue-950 mx-[10vw] lg:mx-[20vw] rounded-xl py-2 px-3 bg-[#0a1331] my-3 transition duration-500">
              <div>
                <div className="flex justify-between">
                  <h3 className="text-base lg:text-2xl text-start my-1 font-medium max-w-[50vw]">
                    {data.title}
                  </h3>
                  <p className="text-[10px] lg:text-[12px] my-2 font-mono">
                    {data.timeline}
                  </p>
                </div>
                <h3 className="text-sm lg:text-base text-blue-50 text-start mt-1 mb-3">
                  {data.company}
                </h3>
                <p className="text-start text-xs text-blue-200">
                  {data.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </article>
    </main>
  );
}

export default Experience;
