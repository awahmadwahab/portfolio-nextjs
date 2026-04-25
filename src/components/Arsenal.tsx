"use client";
import React, { useRef, useState } from "react";
import { IconVideo, IconBrandJavascript, IconCamera, IconCode, IconPalette, IconApps } from "@tabler/icons-react";
import { motion } from "framer-motion";

const tools = [
  {
    name: "DaVinci Resolve",
    role: "Color Science & Grading",
    icon: <IconVideo className="w-8 h-8" />,
  },
  {
    name: "CapCut Pro",
    role: "High-Retention Algorithmic Pacing",
    icon: <IconApps className="w-8 h-8" />,
  },
  {
    name: "Lightroom",
    role: "Photography DNA",
    icon: <IconCamera className="w-8 h-8" />,
  },
  {
    name: "Canva & Nano Banana",
    role: "AI Prototyping & Layouts",
    icon: <IconPalette className="w-8 h-8" />,
  },
  {
    name: "CS Logic",
    role: "Strategic Architecture",
    icon: <IconCode className="w-8 h-8" />,
  },
];

const MagneticWrapper = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x * 0.3, y: position.y * 0.3 }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

const Arsenal = () => {
  return (
    <section className="pb-32 bg-[#050505] relative z-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[10px] md:text-xs font-semibold text-neutral-500 uppercase tracking-[0.3em] mb-8"
        >
          The Visual Arsenal
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="w-full relative"
        >
          <div className="relative bg-[#0A0A0A]/40 backdrop-blur-xl border border-neutral-800/80 rounded-[3rem] p-4 md:p-6 shadow-2xl overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-2">
              {tools.map((tool, idx) => (
                <MagneticWrapper key={idx}>
                  <div className="flex flex-col items-center text-center p-6 rounded-3xl hover:bg-white/[0.03] transition-colors group">
                    <div className="mb-4 text-neutral-400 group-hover:text-[#D4AF37] transition-colors duration-500">
                      {tool.icon}
                    </div>
                    <h3 className="text-sm font-bold text-white tracking-tight mb-2">{tool.name}</h3>
                    <p className="text-[10px] text-neutral-500 font-medium leading-tight max-w-[120px] mx-auto uppercase tracking-wider">
                      {tool.role}
                    </p>
                  </div>
                </MagneticWrapper>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Arsenal;
