"use client";
import React from "react";
import { motion } from "framer-motion";

const TheProof = () => {
  return (
    <section id="science" className="py-20 bg-[#050505] relative z-10">
      <div className="max-w-4xl mx-auto px-4">
        {/* Progress Line Animation (Strategy Style) */}
        <div className="mb-12 max-w-2xl mx-auto">
          <div className="flex justify-between items-end mb-4 px-2">
            <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.3em]">LOG</span>
            <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-[0.3em]">GRADED</span>
          </div>
          <div className="relative w-full h-[1px] bg-neutral-900 overflow-hidden">
            <motion.div 
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ 
                duration: 3, 
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 1
              }}
              className="h-full bg-gradient-to-r from-[#D4AF37]/20 to-[#D4AF37] shadow-[0_0_15px_#D4AF37]"
            />
            {/* Animated Glow Node */}
            <motion.div 
              initial={{ left: "0%" }}
              whileInView={{ left: "100%" }}
              transition={{ 
                duration: 3, 
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 1
              }}
              className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_10px_#D4AF37] z-20"
            />
          </div>
        </div>

        <div className="w-full aspect-video relative border border-neutral-800 rounded-[2rem] overflow-hidden bg-neutral-900 shadow-2xl">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover saturate-[1.1]"
          >
            <source src="https://res.cloudinary.com/dtbxufkdb/video/upload/v1777026326/test_grade_log_wob34k.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default TheProof;
