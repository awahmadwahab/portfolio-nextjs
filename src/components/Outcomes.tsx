"use client";
import React from "react";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import { IconPalette, IconMovie, IconChartBar } from "@tabler/icons-react";

const outcomes = [
  {
    title: "Cinematic Color Science",
    description: "Elevating flat, raw LOG footage into movie-quality visuals using precise DaVinci Resolve node workflows.",
    icon: <IconPalette className="w-10 h-10 text-[#3B82F6]" />,
  },
  {
    title: "Tech-Focused Motion UI",
    description: "Clean, fluid animations and UI mockups that explain complex SaaS concepts effortlessly.",
    icon: <IconMovie className="w-10 h-10 text-[#3B82F6]" />,
  },
  {
    title: "High-Retention Pacing",
    description: "Algorithmic-driven editing designed to hold attention, boost watch time, and convert viewers into users.",
    icon: <IconChartBar className="w-10 h-10 text-[#3B82F6]" />,
  },
];

const Outcomes = () => {
  return (
    <section id="visual-engineering" className="py-24 relative bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Visual Engineering</h2>
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto">
            Delivering undeniable ROI through technical execution and creative mastery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {outcomes.map((item, idx) => (
            <CardContainer key={idx} className="inter-var w-full">
              <CardBody className="bg-[#0A0A0A] relative group/card border-neutral-800 w-full h-auto rounded-3xl p-8 border hover:border-neutral-700 transition-colors shadow-2xl flex flex-col items-start">
                <CardItem translateZ="50" className="mb-6 p-4 rounded-full bg-neutral-900/50 shadow-inner shadow-black border border-neutral-800">
                  {item.icon}
                </CardItem>
                <CardItem translateZ="60" className="text-2xl text-white font-bold mb-4 tracking-tight">
                  {item.title}
                </CardItem>
                <CardItem as="p" translateZ="80" className="text-neutral-400 leading-relaxed">
                  {item.description}
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
