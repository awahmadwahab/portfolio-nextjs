"use client";
import React from "react";
import { 
  IconBrandInstagram, 
  IconBrandLinkedin, 
  IconBrandWhatsapp, 
  IconMail, 
  IconMessageCircle 
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="py-20 bg-[#050505] border-t border-neutral-900/50 relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 mb-20">
          {/* Left Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4">AWX Vision</h2>
            <p className="text-neutral-500 text-sm max-w-xs leading-relaxed">
              Engineered in Pakistan. Scaling Tech Brands Globally. Where computer science meets cinematic storytelling.
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-[0.3em] mb-8">Contact & Socials</h3>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-10">
              <a href="#" className="group flex flex-col items-center gap-3">
                <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 group-hover:border-[#D4AF37]/50 group-hover:text-[#D4AF37] transition-all duration-300">
                  <IconBrandWhatsapp size={24} />
                </div>
                <span className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest group-hover:text-neutral-400">Channel</span>
              </a>
              <a href="#" className="group flex flex-col items-center gap-3">
                <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 group-hover:border-[#D4AF37]/50 group-hover:text-[#D4AF37] transition-all duration-300">
                  <IconMessageCircle size={24} />
                </div>
                <span className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest group-hover:text-neutral-400">Direct</span>
              </a>
              <a href="#" className="group flex flex-col items-center gap-3">
                <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 group-hover:border-[#D4AF37]/50 group-hover:text-[#D4AF37] transition-all duration-300">
                  <IconBrandInstagram size={24} />
                </div>
                <span className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest group-hover:text-neutral-400">Instagram</span>
              </a>
              <a href="#" className="group flex flex-col items-center gap-3">
                <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 group-hover:border-[#D4AF37]/50 group-hover:text-[#D4AF37] transition-all duration-300">
                  <IconBrandLinkedin size={24} />
                </div>
                <span className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest group-hover:text-neutral-400">LinkedIn</span>
              </a>
              <a href="mailto:hello@awxvision.com" className="group flex flex-col items-center gap-3">
                <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 group-hover:border-[#D4AF37]/50 group-hover:text-[#D4AF37] transition-all duration-300">
                  <IconMail size={24} />
                </div>
                <span className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest group-hover:text-neutral-400">Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-900/80 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-600 text-xs font-medium">
            © 2026 AWX Vision. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-bold text-neutral-700 uppercase tracking-widest">
            <a href="#" className="hover:text-neutral-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
