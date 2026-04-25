"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const TheCloser = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <section id="contact" className="py-32 bg-[#050505] relative z-10 flex flex-col items-center">
      <div className="max-w-2xl w-full px-4 text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">Partner with AWX Vision.</h2>
        <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
          Apply below to get your Visual Identity Tear-Down. We only take on 3 new partners per month.
        </p>
      </div>

      <div className="max-w-2xl w-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Animated Glowing Border */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/30 to-[#D4AF37]/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-sm pointer-events-none" />
          
          <div className="relative bg-[#0A0A0A]/40 backdrop-blur-[20px] border border-neutral-800/50 p-8 md:p-12 rounded-3xl shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Application Sent.</h3>
                <p className="text-neutral-400">I will review your brand and get back to you within 24 hours.</p>
              </div>
            ) : (
              <form 
                action="https://api.web3forms.com/submit" 
                method="POST"
                className="flex flex-col gap-10"
                onSubmit={() => setTimeout(() => setIsSubmitted(true), 1000)}
              >
                {/* Web3Forms Config */}
                <input type="hidden" name="access_key" value="f6ee3094-244d-4023-8a72-a4222d23b2b4" />
                <input type="hidden" name="subject" value="New Partnership Application from AWX Vision" />
                <input type="hidden" name="from_name" value="AWX Vision Portfolio" />
                
                <div className="flex flex-col gap-2 group/input">
                  <label className="text-xs font-semibold text-neutral-500 uppercase tracking-widest transition-colors group-focus-within/input:text-[#D4AF37]">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="John Doe"
                    className="bg-transparent border-b border-neutral-800 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-all placeholder:text-neutral-700"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="flex flex-col gap-2 group/input">
                    <label className="text-xs font-semibold text-neutral-500 uppercase tracking-widest transition-colors group-focus-within/input:text-[#D4AF37]">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      placeholder="john@brand.com"
                      className="bg-transparent border-b border-neutral-800 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-all placeholder:text-neutral-700"
                    />
                  </div>
                  <div className="flex flex-col gap-2 group/input">
                    <label className="text-xs font-semibold text-neutral-500 uppercase tracking-widest transition-colors group-focus-within/input:text-[#D4AF37]">
                      WhatsApp Number
                    </label>
                    <input 
                      type="text" 
                      name="whatsapp"
                      required
                      placeholder="+92 XXX XXXXXXX"
                      className="bg-transparent border-b border-neutral-800 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-all placeholder:text-neutral-700"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 group/input">
                  <label className="text-xs font-semibold text-neutral-500 uppercase tracking-widest transition-colors group-focus-within/input:text-[#D4AF37]">
                    Monthly Marketing Budget
                  </label>
                  <select 
                    name="budget"
                    required
                    className="bg-transparent border-b border-neutral-800 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-all appearance-none cursor-pointer"
                  >
                    <option className="bg-[#0A0A0A]" value="">Select an option</option>
                    <option className="bg-[#0A0A0A]" value="under-1k">Under $1k</option>
                    <option className="bg-[#0A0A0A]" value="1k-3k">$1k - $3k</option>
                    <option className="bg-[#0A0A0A]" value="3k-plus">$3k+</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2 group/input">
                  <label className="text-xs font-semibold text-neutral-500 uppercase tracking-widest transition-colors group-focus-within/input:text-[#D4AF37]">
                    Project Details
                  </label>
                  <textarea 
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about your current bottlenecks..." 
                    className="bg-transparent border-b border-neutral-800 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-all placeholder:text-neutral-700 resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="mt-4 w-full py-5 bg-[#D4AF37] hover:bg-[#D4AF37] text-black font-bold text-lg rounded-2xl transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_50px_rgba(212,175,55,0.5)] active:scale-[0.98]"
                >
                  Apply for Partnership
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TheCloser;
