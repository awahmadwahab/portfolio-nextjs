"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const brands = [
  { quote: "", name: "Acme Corp", title: "SaaS" },
  { quote: "", name: "Stark Industries", title: "Tech" },
  { quote: "", name: "Globex", title: "AI" },
  { quote: "", name: "Soylent", title: "Biotech" },
  { quote: "", name: "Initech", title: "Software" },
  { quote: "", name: "Umbrella Corp", title: "Tech" },
];

const AuthorityBanner = () => {
  return (
    <section className="py-12 border-y border-neutral-900 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-neutral-500 text-sm font-medium mb-8 tracking-widest uppercase">
          Trusted by forward-thinking creators and tech startups.
        </p>
        <div className="relative flex items-center justify-center -mx-4 md:mx-0">
          {/* We use InfiniteMovingCards but adapt the rendering inside or just pass the text for now */}
          {/* Since InfiniteMovingCards was designed for testimonials, we can just use a simple CSS marquee for logos, or re-use it. */}
          {/* Re-using InfiniteMovingCards as requested */}
          <InfiniteMovingCards
            items={brands}
            direction="right"
            speed="normal"
            className="opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default AuthorityBanner;
