import React from "react";

function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#142b33] text-[#eff3f3]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8 ">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-rose-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] grid sm:grid-cols-2 gap-8 w-full px-4">
          <div className="sm:text-right text-4xl font-bold ">
            <p>Hi. nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
                I am passionate about creating engaging and responsive web experiences. I believe that great websites are not just functional, but also visually stunning and intuitive to use. That's why I pay attention to every detail, from typography and color to layout and interaction design. I specialize in using HTML, CSS, and JavaScript to design and develop custom websites that are optimized for performance and user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
