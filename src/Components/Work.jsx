import React from "react";
import { data } from "../data/data.js";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Work = () => {
  const project = data;

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div name="work" className="w-full md:h-full bg-[#142b33] text-[#eff3f3]">
      <div
        data-aos="fade-up"
        className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4  border-rose-600">
            Work
          </p>
          <p className="py-6"> Check out some of my recent work</p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8">
          {/* Gird Item */}
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              data-aos="fade-up"
              className="shadow-xl shadow-[#040c16] group container rounded-md 
              flex justify-center text-center bg-cover items-center mx-auto content-div p-4"
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 hover:delay-300">
                <h3 className="text-2xl font-semibold  tracking-wider">
                  {item.name}
                </h3>
                <p className="text-sm mt-2 tracking-wider ">{item.desc}</p>
                <div className="pt-8 text-center ">
                  {/* eslint-disable-next-line */}
                  <a href={item.github} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a href={item.live} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
