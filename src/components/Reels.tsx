"use client";
import React, { useState } from "react";
import { TracingBeam } from "./ui/tracing-beam";
import { IconX } from "@tabler/icons-react";
import { cn } from "@/utils/cn";

const projects = [
  {
    id: 1,
    client: "SaaS Brand",
    title: "SaaS UI Motion Breakdown",
    tag: "Motion Graphics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 2,
    client: "Tech Influencer",
    title: "Creator Reel (High Retention)",
    tag: "Reels",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    client: "Hardware Co.",
    title: "Cinematic Product Promo",
    tag: "Promo",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 4,
    client: "AI Startup",
    title: "Algorithm-Optimized Short",
    tag: "Shorts",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2000&auto=format&fit=crop",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    className: "md:col-span-1 md:row-span-1",
  },
];

const RecentExecutions = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-[#050505] relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tighter">Curated Executions.</h2>
        <p className="text-neutral-400 text-lg">High-retention assets built for SaaS and Tech Founders.</p>
      </div>

      <TracingBeam className="px-6">
        <div className="max-w-5xl mx-auto antialiased pt-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
            {projects.map((project) => (
              <div
                key={project.id}
                className={cn(
                  "relative group rounded-3xl overflow-hidden cursor-pointer border border-neutral-800",
                  project.className
                )}
                onClick={() => setActiveVideo(project.video)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Ultra clean gradient overlay that only shows on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-0 left-0 p-8 w-full translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold px-3 py-1 bg-[#3B82F6]/20 border border-[#3B82F6]/50 text-[#3B82F6] rounded-full backdrop-blur-md">
                      {project.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </TracingBeam>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 p-2 rounded-full backdrop-blur-md"
          >
            <IconX className="w-6 h-6" />
          </button>
          <div className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-neutral-800">
            <iframe
              width="100%"
              height="100%"
              src={`${activeVideo}?autoplay=1`}
              title="Project Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default RecentExecutions;
