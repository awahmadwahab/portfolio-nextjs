/* eslint-disable */
"use client";
import React, { useEffect, useState } from "react";
import { animate, motion } from "motion/react";
import { cn } from "@/utils/cn";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

// Icons
import { IconPhoto, IconCamera, IconMovie, IconBrandFigma, IconBrush, IconVideo } from "@tabler/icons-react";

export const TechStack = () => {
  return (
    <section id="engineering-tools" className="py-24 relative bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          {/* Apple style text: large, bold, tracking-tight, gradient */}
          <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 tracking-tighter mb-6">
            Pro-Level Engineering.
          </h2>
          <p className="text-neutral-400 text-xl md:text-2xl tracking-tight font-medium max-w-2xl mx-auto">
            The exact toolset used to craft high-retention cinematic assets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-items-center">
          
          {/* 3D Card Demo adapted */}
          <CardContainer className="inter-var">
            <CardBody className="bg-[#0A0A0A] relative group/card border-neutral-800 w-auto sm:w-[30rem] h-auto rounded-3xl p-8 border hover:border-neutral-700 transition-colors shadow-2xl">
              <CardItem
                translateZ="50"
                className="text-2xl font-bold text-white tracking-tight"
              >
                Cinematic Depth
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-400 text-base max-w-sm mt-3"
              >
                Hover over this frame to experience the 3D perspective we bring to motion graphics.
              </CardItem>
              <CardItem
                translateZ="100"
                rotateX={10}
                rotateZ={-5}
                className="w-full mt-8"
              >
                <img
                  src="https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1000&auto=format&fit=crop"
                  height="1000"
                  width="1000"
                  className="h-64 w-full object-cover rounded-2xl group-hover/card:shadow-2xl shadow-black/50"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-12">
                <CardItem
                  translateZ={20}
                  translateX={-20}
                  as="button"
                  className="px-6 py-3 rounded-full text-sm font-medium text-white hover:bg-neutral-900 transition-colors"
                >
                  View Case Study
                </CardItem>
                <CardItem
                  translateZ={20}
                  translateX={20}
                  as="button"
                  className="px-6 py-3 rounded-full bg-white text-black text-sm font-bold hover:bg-neutral-200 transition-colors"
                >
                  Start Project
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          {/* Animated Tools Card Demo */}
          <div className="w-full max-w-[30rem]">
            <div className="w-full p-8 rounded-3xl border border-neutral-800 bg-[#0A0A0A] shadow-2xl group">
              <div className="h-[20rem] rounded-2xl z-40 bg-neutral-900/50 [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)] relative overflow-hidden flex items-center justify-center border border-neutral-800/50">
                <Skeleton />
              </div>
              <h3 className="text-2xl font-bold text-white py-4 tracking-tight mt-4">
                The Mastery Toolkit
              </h3>
              <p className="text-base font-normal text-neutral-400 max-w-sm">
                Industry-standard software for editing, grading, UI motion, and asset design.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Skeleton = () => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence = [
    [".circle-1", { scale, transform }, { duration: 0.8 }],
    [".circle-2", { scale, transform }, { duration: 0.8 }],
    [".circle-3", { scale, transform }, { duration: 0.8 }],
    [".circle-4", { scale, transform }, { duration: 0.8 }],
    [".circle-5", { scale, transform }, { duration: 0.8 }],
    [".circle-6", { scale, transform }, { duration: 0.8 }],
  ];

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    animate(sequence as any, {
      repeat: Infinity,
      repeatDelay: 1,
    } as any);
  }, []);

  return (
    <div className="p-8 overflow-hidden h-full relative flex items-center justify-center w-full">
      <div className="flex flex-row shrink-0 justify-center items-center gap-2 z-20">
        <Container className="h-10 w-10 circle-1">
          <IconCamera className="h-5 w-5 text-[#31A8FF]" />
        </Container>
        <Container className="h-12 w-12 circle-2">
          <IconPhoto className="h-6 w-6 text-[#31A8FF]" />
        </Container>
        <Container className="h-16 w-16 circle-3">
          <IconMovie className="h-8 w-8 text-[#FF4B4B]" />
        </Container>
        <Container className="h-12 w-12 circle-4">
          <IconBrandFigma className="h-6 w-6 text-[#F24E1E]" />
        </Container>
        <Container className="h-10 w-10 circle-5">
          <IconBrush className="h-5 w-5 text-[#00C4CC]" />
        </Container>
        <Container className="h-8 w-8 circle-6">
          <IconVideo className="h-4 w-4 text-white" />
        </Container>
      </div>

      <div className="h-40 w-px absolute top-10 m-auto z-10 bg-gradient-to-b from-transparent via-[#7b61ff] to-transparent animate-pulse">
        <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
          <Sparkles />
        </div>
      </div>
    </div>
  );
};

const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  
  const [stars, setStars] = useState<number[]>([]);
  useEffect(() => {
    setStars([...Array(12)].map((_, i) => i));
  }, []);

  return (
    <div className="absolute inset-0">
      {stars.map((i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-[#7b61ff]"
        ></motion.span>
      ))}
    </div>
  );
};

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `rounded-full flex items-center justify-center bg-neutral-900 border border-neutral-800 shadow-[0px_0px_8px_0px_rgba(255,255,255,0.05)_inset,0px_16px_24px_-8px_rgba(0,0,0,0.8)] relative`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default TechStack;
