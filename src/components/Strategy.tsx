"use client";
import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "The Deep Dive",
    description: "Analyzing brand aesthetic & audience to build a unique visual strategy.",
  },
  {
    title: "Algorithmic Pacing",
    description: "Cutting dead space and hooking attention to maximize retention.",
  },
  {
    title: "Cinematic Engineering",
    description: "DaVinci Resolve color grading and immersive spatial audio design.",
  },
  {
    title: "Final Delivery",
    description: "High-performance assets delivered within a 48-hour window.",
  },
];

const Strategy = () => {
  return (
    <section id="strategy" className="py-32 bg-[#050505] relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter"
          >
            The Execution Strategy.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            A frictionless pipeline from raw footage to algorithm-ready assets.
          </motion.p>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-[40px] left-0 w-full h-[2px] bg-neutral-900 hidden md:block">
            <motion.div 
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-[#D4AF37] to-[#D4AF37]/20 shadow-[0_0_15px_#D4AF37]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="relative flex flex-col items-center md:items-start"
              >
                {/* Node */}
                <div className="w-20 h-20 rounded-full bg-[#0A0A0A] border-2 border-neutral-800 flex items-center justify-center mb-8 relative z-20 group">
                  <div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center text-[#D4AF37] font-bold group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-500">
                    0{idx + 1}
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-[#D4AF37]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{step.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategy;
