import React from 'react';
import '../Styles.css';

function Education() {
  return (
    <main className="text-white flex justify-center flex-col text-center px-[20v] py-20">
      <h2 className="text-4xl mb-20 font-mono underline decoration-wavy decoration-blue-300 decoration-auto ExperienceH1">
        Education
      </h2>
      <article>
        <ul>
          <li className="flex justify-between hover:bg-blue-950 mx-[10vw] lg:mx-[20vw] rounded-xl py-2 px-3 bg-[#0a1331] my-3 transition-colors duration-300">
            <div>
              <h3 className="text-base lg:text-2xl text-start my-1 font-medium max-w-[50vw]">
                Bachelors in Computer Science
              </h3>
              <h3 className="text-sm lg:text-base text-blue-50 text-start mt-1 mb-3">
                KR's Sree Narayana College, Valanchery
              </h3>
            </div>
            <div>
              <p className="text-[10px] lg:text-[12px] my-1 font-mono font-thin">Aug 2020 - Jun 2023</p>
            </div>
          </li>
          <li className="flex justify-between hover:bg-blue-950 mx-[10vw] lg:mx-[20vw] rounded-xl py-2 px-3 bg-[#0a1331] my-3 transition-colors duration-300">
            <div>
              <h3 className="text-base lg:text-2xl text-start my-1 font-medium max-w-[50vw]">
                Central Board of Secondary Education - 12th Standard
              </h3>
              <h3 className="text-sm lg:text-base text-blue-50 text-start mt-1 mb-3">
                Bharatiya Vidhya Bhavan, Thirunnavaya
              </h3>
            </div>
            <div>
              <p className="text-[10px] lg:text-[12px] my-1 font-mono font-thin">Aug 2018 - Jun 2020</p>
            </div>
          </li>
          <li className="flex justify-between hover:bg-blue-950 mx-[10vw] lg:mx-[20vw] rounded-xl py-2 px-3 bg-[#0a1331] my-3 transition-colors duration-300">
            <div>
              <h3 className="text-base lg:text-2xl text-start my-1 font-medium max-w-[50vw]">
                Central Board of Secondary Education - 10th Standard
              </h3>
              <h3 className="text-sm lg:text-base text-blue-50 text-start mt-1 mb-3">
                Bharatiya Vidhya Bhavan, Thirunnavaya
              </h3>
            </div>
            <div>
              <p className="text-[10px] lg:text-[12px] my-1 font-mono font-thin">Aug 2017 - Jun 2018</p>
            </div>
          </li>
        </ul>
      </article>
    </main>
  )
}

export default Education
