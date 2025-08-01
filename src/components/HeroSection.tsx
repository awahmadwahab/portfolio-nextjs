
import React from "react";


const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative mx-auto overflow-hidden">
      <div className="p-4 relative z-10 text-center w-full">
        <h1 className="mt-30 md:mt-0 text-4xl md:text-6xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from bg-neutral-50 to-neutral-400 ">
          Clean Cuts. Clear Stories.
        </h1>
        <p className="mt-4 font-normal max-w-lg leading-6 text-sm px-4 mx-auto md:text-md text-neutral-300">
          I&apos;m a freelance video editor helping creators, brands, and filmmakers
          turn raw footage into polished, impactful videos that connect with
          their audience.
        </p>
        <div className=" mt-20 ">
          <a
            href="https://www.instagram.com/awxvision/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                LATEST WORK
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
