"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen w-full flex flex-col items-center justify-center pt-40 pb-20 relative overflow-hidden bg-[#050505] selection:bg-[#C9A96E] selection:text-black">
      {/* Simple Background with Spotlight */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#1a1a1a,transparent_70%)] opacity-50" />
      </div>

      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20 z-10" fill="#C9A96E" />
      
      <div className="p-4 relative z-20 text-center w-full max-w-5xl mx-auto flex flex-col items-center justify-center">
        <div className="mb-6 max-w-4xl">
          <TextGenerateEffect 
            words="Visuals Engineered for Tech & SaaS." 
            className="text-5xl md:text-7xl font-bold text-center text-white tracking-tighter" 
          />
        </div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto text-center text-neutral-400 text-lg md:text-xl font-normal leading-relaxed mb-12"
        >
          I combine computer science logic with cinematic color theory to build high-retention video assets that convert viewers into users.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
        >
          <a href="#apply">
            <Button
              borderRadius="1.75rem"
              className="bg-[#050505] text-white border-neutral-800 text-sm md:text-base font-semibold tracking-wide hover:bg-[#111] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(201,169,110,0.3)]"
              borderClassName="bg-[radial-gradient(#C9A96E_40%,transparent_60%)] opacity-[0.8]"
            >
              Claim Your Visual Audit
            </Button>
          </a>
          
          <a 
            href="#portfolio" 
            className="px-8 py-4 rounded-full bg-transparent border border-neutral-700 text-white hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all text-sm md:text-base font-semibold"
          >
            See The Proof
          </a>
        </motion.div>

        {/* Small 1920x1080 Video Box at Bottom */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 2, ease: [0.16, 1, 0.3, 1] }}
          className="relative group cursor-pointer"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#C9A96E]/20 to-transparent rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
          <div className="relative w-[320px] md:w-[480px] aspect-video rounded-xl overflow-hidden border border-neutral-800 shadow-2xl bg-black">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              preload="auto"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            >
              <source src="https://res.cloudinary.com/dtbxufkdb/video/upload/v1757787559/TEST_eyvstd.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-3 left-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-2 h-2 rounded-full bg-[#C9A96E] animate-pulse" />
              <span className="text-[10px] font-bold text-white tracking-[0.2em] uppercase">Visual Reel</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
