"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";

const Showreel = () => {
  return (
    <section className="bg-[#050505] py-20 overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center">
            <h2 className="text-xl md:text-3xl font-semibold text-neutral-400 mb-2">
              The Gold Standard
            </h2>
            <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#18CCFC] to-[#7b61ff] tracking-tight mb-8">
              Visual Engineering 2026
            </h1>
          </div>
        }
      >
        <div className="w-full h-full bg-black rounded-2xl overflow-hidden shadow-2xl relative group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
             <button className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                </svg>
             </button>
          </div>
          <video
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
        </div>
      </ContainerScroll>
    </section>
  );
};

export default Showreel;
