"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Play, X } from "lucide-react";

import { cn } from "@/utils/cn";

interface HeroVideoProps {
  animationStyle?:
    | "from-bottom"
    | "from-center"
    | "from-top"
    | "from-left"
    | "from-right"
    | "fade"
    | "top-in-bottom-out"
    | "left-in-right-out";
  videoSrc: string;
  thumbnailSrc: string;
  thumbnailAlt?: string;
  className?: string;
}

const animationVariants = {
  "from-bottom": {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "from-center": {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
  },
  "from-top": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
  },
  "from-left": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  },
  "from-right": {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  "top-in-bottom-out": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "left-in-right-out": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
};

export default function HeroVideoDialog({
  animationStyle = "from-center",
  videoSrc,
  thumbnailSrc,
  thumbnailAlt = "Video thumbnail",
  className,
}: HeroVideoProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const selectedVariant = animationVariants[animationStyle];

  return (
    <div className={cn("relative", className)}>
      <div
        className="group relative cursor-pointer"
        onClick={() => setIsVideoOpen(true)}
      >
        <Image
          src={thumbnailSrc}
          alt={thumbnailAlt}
          width={1920}
          height={822}
          className="w-full rounded-2xl border border-neutral-800 shadow-2xl transition-all duration-300 group-hover:brightness-[0.8] aspect-[21/9] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex size-20 items-center justify-center rounded-full bg-[#C9A96E]/10 backdrop-blur-md border border-[#C9A96E]/50 text-[#C9A96E] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#C9A96E]/20">
            <div className="flex size-16 items-center justify-center rounded-full bg-[#C9A96E] text-black shadow-2xl">
              <Play className="size-8 fill-current" />
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          >
            <motion.div
              {...selectedVariant}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative aspect-[21/9] w-full max-w-6xl overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl"
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute right-4 top-4 z-[110] rounded-full bg-black/50 p-2 text-white/50 transition-all hover:bg-black/80 hover:text-white"
              >
                <X className="size-6" />
              </button>
              <video
                src={videoSrc}
                className="size-full rounded-2xl"
                autoPlay
                controls
                playsInline
              ></video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
