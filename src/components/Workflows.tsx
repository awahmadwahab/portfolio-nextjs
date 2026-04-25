"use client";
import React from "react";

const Workflows = () => {
  return (
    <section id="workflows" className="py-24 relative bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Behind the Screen: Workflows & Breakdowns</h2>
          <p className="text-neutral-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Deep dives into the technical processes behind high-converting content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-4 group cursor-pointer">
            <div className="aspect-video w-full rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-xl shadow-black/50 transition-transform duration-500 group-hover:scale-[1.02]">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0" 
                title="Cinematic Color Grading Breakdown in DaVinci Resolve" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              ></iframe>
            </div>
            <h3 className="text-xl font-semibold text-white tracking-tight group-hover:text-[#3B82F6] transition-colors">Cinematic Color Grading Breakdown in DaVinci Resolve</h3>
          </div>

          <div className="flex flex-col gap-4 group cursor-pointer">
            <div className="aspect-video w-full rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-xl shadow-black/50 transition-transform duration-500 group-hover:scale-[1.02]">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0" 
                title="Advanced Motion Tracking for SaaS UI Demonstrations" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              ></iframe>
            </div>
            <h3 className="text-xl font-semibold text-white tracking-tight group-hover:text-[#3B82F6] transition-colors">Advanced Motion Tracking for SaaS UI Demonstrations</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflows;
