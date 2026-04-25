"use client";
import React from "react";
import { cn } from "@/utils/cn";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 z-0 overflow-hidden pointer-events-none w-full h-full",
        className
      )}
    >
      <div className="absolute -inset-[100%] z-0 h-[300%] w-[300%] opacity-20 [background-image:radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_70%)] animate-pulse"></div>
      <div className="absolute inset-0 bg-[url(https://grainy-gradients.vercel.app/noise.svg)] opacity-20 brightness-100 contrast-150"></div>
    </div>
  );
};
