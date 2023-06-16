import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

function Home() {
  return (
    <div name="home" className="bg-[#142b33] w-full h-screen ">
      {/* container */}
      <div className="max-w-[1000px] h-full mx-auto px-8 flex flex-col justify-center">
        <p className=" text-rose-500">HI THERE I'M</p>
        <h1 className=" text-4xl sm:text-6xl font-bold text-[#eff3f3]">
          Nayana N M
        </h1>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          A <b>Front-End Developer</b> who is passionate about designing and
          developing interactive applications that provide an exceptional user
          experience.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center duration-300 hover:bg-rose-600 hover:border-rose-500 rounded">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-2" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
