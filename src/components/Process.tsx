"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "1. Deep Dive Brief",
    description:
      "We begin with a comprehensive analysis of your brand identity, target audience, and current conversion metrics. We establish the exact visual language and algorithmic goals for the upcoming assets.",
    content: (
      <div className="h-full w-full bg-[#050505] flex items-center justify-center text-white border border-neutral-800 rounded-lg">
        <span className="text-6xl text-[#3B82F6]">01</span>
      </div>
    ),
  },
  {
    title: "2. First Cut (48hrs)",
    description:
      "Within 48 hours, you receive the initial structural cut. This focuses entirely on pacing, narrative flow, and retention mechanics before any aesthetic polish is applied.",
    content: (
      <div className="h-full w-full bg-[#050505] flex items-center justify-center text-white border border-neutral-800 rounded-lg">
        <span className="text-6xl text-[#3B82F6]">02</span>
      </div>
    ),
  },
  {
    title: "3. Refinement & Grading",
    description:
      "Once the structure is locked, we move into visual engineering. This includes movie-quality color grading in DaVinci Resolve, custom UI motion graphics, and premium sound design.",
    content: (
      <div className="h-full w-full bg-[#050505] flex items-center justify-center text-white border border-neutral-800 rounded-lg">
        <span className="text-6xl text-[#3B82F6]">03</span>
      </div>
    ),
  },
  {
    title: "4. Algorithm-Optimized Delivery",
    description:
      "Final delivery includes all requested aspect ratios, meticulously exported for maximum bitrate and platform-specific compression standards, ready to dominate feeds.",
    content: (
      <div className="h-full w-full bg-[#050505] flex items-center justify-center text-white border border-neutral-800 rounded-lg">
        <span className="text-6xl text-[#3B82F6]">04</span>
      </div>
    ),
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-5xl mx-auto px-4 mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">The Engine</h2>
        <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto">
          A rigid, systematic approach to producing high-ticket visual assets.
        </p>
      </div>
      <div className="max-w-5xl mx-auto">
        <StickyScroll content={content} />
      </div>
    </section>
  );
};

export default Process;
