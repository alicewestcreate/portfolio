import React from "react";

const Hero = () => {
  return (
    <section className="flex justify-center items-center w-screen h-screen">
      <div className="px-6">
        <h1 className="text-4xl lg:text-[2.6rem] md:font-extrabold lg:leading-[2.9rem] font-bold text-white leading-10">
          Hello, I'm Alice, <br /> a{" "}
          <span className="text-purple-400"> software engineer </span> with{" "}
          <br /> the bug for{" "}
          <span className="text-teal-400">
            {" "}
            <br /> solving problems
          </span>
          .
        </h1>
        <p className=" text-white py-4">
          {" "}
          Offering an extended viewpoint with over 10 years previous experience
          in brand and design.{" "}
        </p>

        <div className="flex gap-4">
          <button className="btn btn-outline bg-inherit border-purple-500 text-white hover:bg-purple-500 ">
            VIEW PROJECTS
          </button>
          <button className="btn btn-outline bg-inherit border-teal-500 text-white hover:bg-teal-500 ">
            VIEW EXPERIENCE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
