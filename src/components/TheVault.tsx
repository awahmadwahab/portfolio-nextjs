"use client";
import React from "react";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";

const projects = [
  {
    id: 1,
    title: "Tech Creator Reel",
    tag: "High Retention",
    video: "https://res.cloudinary.com/dtbxufkdb/video/upload/v1757878714/lv_0_20250629231017_jyd7ob.mp4",
  },
  {
    id: 2,
    title: "SaaS UI Motion",
    tag: "Gemini UI",
    video: "https://res.cloudinary.com/dtbxufkdb/video/upload/v1777026358/3D-Screen-Gemini_qqa6ns.mp4",
  },
  {
    id: 3,
    title: "Product Promo",
    tag: "Fluxxion Intro",
    video: "https://res.cloudinary.com/dtbxufkdb/video/upload/v1777026380/Fluxxion-Intro_oi6yum.mp4",
  },
  {
    id: 4,
    title: "Algorithm Short",
    tag: "Autoshow-1",
    video: "https://res.cloudinary.com/dtbxufkdb/video/upload/v1777026360/AUTOSHOW-1_b5k4kd.mp4",
  },
];

const TheVault = () => {
  return (
    <section id="work" className="py-32 bg-[#050505] relative z-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">The Vault: Recent Executions.</h2>
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            High-retention visual assets built for top-tier tech creators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8">
          {projects.map((project) => (
            <CardContainer key={project.id} className="inter-var w-full">
              <CardBody className="bg-[#0A0A0A] relative group/card border-neutral-800 w-full h-auto rounded-3xl p-5 border hover:border-[#D4AF37]/50 transition-colors shadow-2xl hover:shadow-[inset_0_0_80px_rgba(212,175,55,0.05)]">
                <CardItem translateZ="50" className="w-full relative rounded-2xl overflow-hidden aspect-video bg-neutral-900 border border-neutral-800">
                  <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-80 group-hover/card:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                </CardItem>
                <div className="flex justify-between items-end mt-8">
                  <CardItem translateZ="30" className="flex flex-col gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
                      {project.tag}
                    </span>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {project.title}
                    </h3>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheVault;
