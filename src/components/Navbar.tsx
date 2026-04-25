"use client";
import React from "react";
import { cn } from "@/utils/cn";

export const Navbar = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "fixed top-6 inset-x-0 max-w-2xl mx-auto z-50 flex items-center justify-between px-6 py-3 rounded-full border border-neutral-800/50 hover:border-[#C9A96E]/50 transition-colors duration-500",
        "bg-black/40 backdrop-blur-[16px] shadow-lg",
        className
      )}
    >
      <div className="flex items-center">
        <span className="text-white font-bold text-lg tracking-tight">
          AWX<span className="text-[#D4AF37]">VISION</span>
        </span>
      </div>
      
      <div className="flex items-center gap-6 text-sm font-medium text-neutral-300">
        <a href="#strategy" className="hover:text-[#D4AF37] transition-colors">Strategy</a>
        <a href="#science" className="hover:text-[#D4AF37] transition-colors">Science</a>
        <a href="#work" className="hover:text-[#D4AF37] transition-colors">Work</a>
        <a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;