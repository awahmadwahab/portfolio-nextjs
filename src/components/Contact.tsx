"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";

const Contact = () => {
  return (
    <section id="apply" className="relative min-h-screen bg-[#050505] flex items-center justify-center py-24 overflow-hidden">
      <BackgroundBeams />
      
      <div className="relative z-10 max-w-xl w-full mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Let's Scale Your Brand.</h2>
          <p className="text-neutral-400 text-lg">Apply below to see if we're a good fit for your content engine.</p>
        </div>

        <div className="bg-[#0A0A0A] p-8 md:p-10 rounded-2xl border border-neutral-800 shadow-2xl backdrop-blur-sm">
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-neutral-300">Name</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                className="bg-neutral-900 border border-neutral-800 text-white p-3 rounded-lg focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-all"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-neutral-300">Email</label>
              <input 
                type="email" 
                placeholder="john@saas.com" 
                className="bg-neutral-900 border border-neutral-800 text-white p-3 rounded-lg focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-neutral-300">Monthly Marketing Budget</label>
              <select className="bg-neutral-900 border border-neutral-800 text-white p-3 rounded-lg focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-all appearance-none cursor-pointer">
                <option value="" disabled selected>Select an option</option>
                <option value="under-1k">Under $1k</option>
                <option value="1k-3k">$1k - $3k</option>
                <option value="3k-plus">$3k+</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-neutral-300">Project Details</label>
              <textarea 
                rows={4}
                placeholder="Tell me about your current bottlenecks..." 
                className="bg-neutral-900 border border-neutral-800 text-white p-3 rounded-lg focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-all resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="mt-4 w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold py-4 rounded-lg transition-colors shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
            >
              Apply for Partnership
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
