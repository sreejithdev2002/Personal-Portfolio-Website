import React from "react";
import html from "../Assets/Icons/html.png";
import css from "../Assets/Icons/css.png";
import javascript from "../Assets/Icons/javascript.png";
import reactjs from "../Assets/Icons/reactjs.png";
import nodejs from "../Assets/Icons/nodejs.png";
import express from "../Assets/Icons/expressjs.png";
import mongodb from "../Assets/Icons/mongodb.png";
import git from "../Assets/Icons/git.png";
import github from "../Assets/Icons/github.png";
import postman from "../Assets/Icons/postman.png";
import vscode from "../Assets/Icons/vscode.png";
import "../Styles.css";

function Skills() {
  return (
    <main className="text-white flex justify-center flex-col text-center px-[20v] py-20" id="Skills">
      <h2 className="text-4xl mb-20 font-mono underline decoration-wavy decoration-blue-300 decoration-auto SkillsH1">
        Skills
      </h2>
      <article className="flex flex-col text-start px-[20vw]">
        <h3 className="text-xl mb-3">Tech Skills</h3>
        <div className="grid grid-cols-4 lg:grid-cols-10 md:grid-cols-6 sm:grid-cols-4 justify-center lg:pl-[5vw] ">
          <span className="p-2 border-[1px] border-blue-300 text-blue-300 bg-blue-950 hover:bg-blue-900 mx-5 rounded-xl  min-w-[50px] w-[50px] transition duration-500 hover:-translate-y-2 my-2">
            <img src={html} alt="" />
          </span>
          <span className="p-2 border-[1px] border-blue-300 text-blue-300 bg-blue-950 hover:bg-blue-900 mx-5 rounded-xl  min-w-[50px] w-[50px] transition duration-500 hover:-translate-y-2 my-2">
            <img src={css} alt="" />
          </span>
          <span className="p-2 border-[1px] border-blue-300 text-blue-300 bg-blue-950 hover:bg-blue-900 mx-5 rounded-xl  min-w-[50px] w-[50px] transition duration-500 hover:-translate-y-2 my-2">
            <img src={javascript} alt="" />
          </span>
          <span className="p-2 border-[1px] border-blue-300 text-blue-300 bg-blue-950 hover:bg-blue-900 mx-5 rounded-xl  min-w-[50px] w-[50px] transition duration-500 hover:-translate-y-2 my-2">
            <img src={reactjs} alt="" />
          </span>
          <span className="p-2 border-[1px] border-blue-300 text-blue-300 bg-blue-950 hover:bg-blue-900 mx-5 rounded-xl  min-w-[50px] w-[50px] transition duration-500 hover:-translate-y-2 my-2">
            <img src={nodejs} alt="" />
          </span>
          <span className="p-2 border-[1px] border-blue-300 text-blue-300 bg-blue-950 hover:bg-blue-900 mx-5 rounded-xl  min-w-[50px] w-[50px] transition duration-500 hover:-translate-y-2 my-2">
            <img src={express} alt="" />
          </span>
          <span className="p-2 border-[1px] border-blue-300 text-blue-300 bg-blue-950 hover:bg-blue-900 mx-5 rounded-xl  min-w-[50px] w-[50px] transition duration-500 hover:-translate-y-2 my-2">
            <img src={mongodb} alt="" />
          </span>
          <span className="p-2 border-[1px] border-blue-300 text-blue-300 bg-blue-950 hover:bg-blue-900 mx-5 rounded-xl  min-w-[50px] w-[50px] transition duration-500 hover:-translate-y-2 my-2">
            <img src={git} alt="" />
          </span>
          <span className="p-2 border-[1px] border-blue-300 text-blue-300 bg-blue-950 hover:bg-blue-900 mx-5 rounded-xl  min-w-[50px] w-[50px] transition duration-500 hover:-translate-y-2 my-2">
            <img src={github} alt="" />
          </span>
          <span className="p-2 border-[1px] border-blue-300 text-blue-300 bg-blue-950 hover:bg-blue-900 mx-5 rounded-xl  min-w-[50px] w-[50px] transition duration-500 hover:-translate-y-2 my-2">
            <img src={postman} alt="" />
          </span>
          <span className="p-2 border-[1px] border-blue-300 text-blue-300 bg-blue-950 hover:bg-blue-900 mx-5 rounded-xl  min-w-[50px] w-[50px] transition duration-500 hover:-translate-y-2 my-2">
            <img src={vscode} alt="" />
          </span>
        </div>
        <br />
        <h3 className="text-xl mb-3">Soft Skills</h3>
        <ul className="flex flex-col text-center justify-center items-center lg:items-start lg:text-start list-none pl-5 text-blue-200 marker:text-blue-300">
          <li className="border-2 border-opacity-50 border-blue-950 px-3 py-1 bg-[#0a1331] rounded my-1 text-base w-[50vw] lg:text-base lg:w-[15vw] hover:bg-blue-950 hover:translate-x-5 transition duration-500">
            Problem Solving
          </li>

          <li className="border-2 border-opacity-50 border-blue-950 px-3 py-1 bg-[#0a1331] rounded my-1 text-base w-[50vw] lg:text-base lg:w-[15vw] hover:bg-blue-950 hover:translate-x-5 transition duration-500">
            Time Management
          </li>
          <li className="border-2 border-opacity-50 border-blue-950 px-3 py-1 bg-[#0a1331] rounded my-1 text-base w-[50vw] lg:text-base lg:w-[15vw] hover:bg-blue-950 hover:translate-x-5 transition duration-500">
            Communication
          </li>
          <li className="border-2 border-opacity-50 border-blue-950 px-3 py-1 bg-[#0a1331] rounded my-1 text-base w-[50vw] lg:text-base lg:w-[15vw] hover:bg-blue-950 hover:translate-x-5 transition duration-500">
            Leadership
          </li>
        </ul>
      </article>
    </main>
  );
}

export default Skills;
