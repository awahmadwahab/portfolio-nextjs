"use client";
import React from "react";
import Script from "next/script";

const ThePulse = () => {
  return (
    <section className="py-32 bg-[#050505] relative z-10 border-t border-neutral-900/50">
      <Script 
        src="https://elfsightcdn.com/platform.js" 
        strategy="lazyOnload"
      />
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">The Pulse.</h2>
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Latest experiments and executions from Instagram.
          </p>
        </div>

        {/* Elfsight Instagram Feed */}
        <div className="w-full max-w-4xl mx-auto relative min-h-[400px]">
          <div className="elfsight-app-32176911-3307-44aa-9ca2-0e18f3d9a826" data-elfsight-app-lazy></div>
          
          {/* Skeleton Overlay (hidden when widget loads) */}
          <div className="absolute inset-0 -z-10 grid grid-cols-3 gap-1 md:gap-4">
            {[...Array(6)].map((_, i) => (
              <div 
                key={i} 
                className="aspect-square bg-neutral-900 animate-pulse rounded-lg md:rounded-2xl border border-neutral-800/50"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThePulse;
