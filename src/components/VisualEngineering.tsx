"use client";
import React from "react";
import { Compare } from "./ui/compare";

const VisualEngineering = () => {
  return (
    <section id="engineering" className="py-24 relative bg-[#0A0A0A]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tighter">The Cost of Flat Content.</h2>
          <p className="text-neutral-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Generic, unpolished visuals signal a low-value product. See the difference between standard footage and an algorithm-optimized cinematic grade designed to capture and hold attention.
          </p>
        </div>
        
        <div className="w-full flex flex-col justify-center border border-neutral-800 rounded-[2rem] p-4 bg-neutral-900/30 shadow-2xl relative">
          
          <div className="absolute top-8 left-8 z-40 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 hidden sm:block">
            <span className="text-xs font-mono text-neutral-300 tracking-wider">Standard Flat Footage</span>
          </div>

          <div className="absolute top-8 right-8 z-40 bg-[#3B82F6]/20 backdrop-blur-md px-4 py-2 rounded-full border border-[#3B82F6]/50 hidden sm:block">
            <span className="text-xs font-mono text-white tracking-wider">Algorithm-Optimized Cinematic Edit</span>
          </div>

          <Compare
            firstImage="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=1000&auto=format&fit=crop&grayscale=1"
            secondImage="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=1000&auto=format&fit=crop"
            firstImageClassName="object-cover object-center grayscale contrast-50 brightness-110"
            secondImageClassname="object-cover object-center saturate-[1.7] contrast-125"
            className="w-full h-[400px] md:h-[600px] rounded-[1.5rem]"
            slideMode="hover"
          />
        </div>
      </div>
    </section>
  );
};

export default VisualEngineering;
