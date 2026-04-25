"use client";
import React from "react";
import { Meteors } from "./ui/meteors";

const LeadMagnet = () => {
  return (
    <section id="free-value" className="py-24 bg-[#050505] flex justify-center px-4 relative overflow-hidden">
      <div className=" w-full relative max-w-4xl mx-auto">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-[#3B82F6]/20 to-[#7b61ff]/20 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-2xl bg-[#0A0A0A] border border-neutral-800  px-8 py-16 h-full overflow-hidden rounded-3xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border border-neutral-500 flex items-center justify-center mb-8 border-opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-neutral-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 z-10 tracking-tighter">
            Download my 10 Viral Hook Templates for SaaS.
          </h2>
          <p className="font-normal text-base md:text-lg text-neutral-400 mb-8 relative z-10">
            Stop guessing what holds attention. Grab the exact hook frameworks I use to keep viewers watching past the critical first 3 seconds.
          </p>

          <form className="w-full flex flex-col sm:flex-row gap-4 relative z-10">
            <input 
              type="email" 
              placeholder="Enter your best email" 
              className="flex-1 bg-[#111] border border-neutral-700 text-white px-6 py-4 rounded-xl focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-all"
            />
            <button className="px-8 py-4 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold rounded-xl transition-colors shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]">
              Send Templates
            </button>
          </form>

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </section>
  );
}

export default LeadMagnet;
