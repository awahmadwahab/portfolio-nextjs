import Link from "next/link";
import React from "react";
import { CometCard } from "./ui/comet-card";

const Services = () => {
  return (
    <div id="services" className="pt-24 bg-zinc-900">
      <div className="flex flex-col items-center justify-center text-center">
      </div>
      <div className="px-4 flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-8 text-center">

    <CometCard>
      <button
        type="button"
        className="my-2 flex w-full sm:w-80 lg:w-72 xl:w-80 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-gradient-to-b from-zinc-900 to-zinc-800 p-3 saturate-0 md:my-3 md:p-4 hover:from-zinc-800 hover:to-zinc-700 hover:saturate-100 transition-all duration-300 ease-in-out"
        aria-label="View invite F7RA"
        style={{
          transformStyle: "preserve-3d",
          transform: "none",
          opacity: 1,
        }}
      >
        <div className="flex flex-col items-center p-3 md:p-4">
          <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-yellow-700 mb-3"
          >
        <path
          d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7l-2-4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3z"
          fill="currentColor"
        />
        <circle cx="9" cy="12" r="2" fill="currentColor"/>
        <path
          d="m15.5 11-2.5 1.5v-3z"
          fill="currentColor"
        />
          </svg>
          <h2 className="text-lg md:text-xl font-bold text-white mb-2">Short-Form</h2>
          <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
        Quick, engaging edits for TikTok, Instagram Reels, and YouTube Shorts.
          </p>
        </div>
       
      </button>
    </CometCard>

    <CometCard>
      <button
        type="button"
        className="my-2 flex w-full sm:w-80 lg:w-72 xl:w-80 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-gradient-to-b from-zinc-900 to-zinc-800 p-3 saturate-0 md:my-3 md:p-4 hover:from-zinc-800 hover:to-zinc-700 hover:saturate-100 transition-all duration-300 ease-in-out"
        aria-label="View invite F7RA"
        style={{
          transformStyle: "preserve-3d",
          transform: "none",
          opacity: 1,
        }}
      >
        <div className="flex flex-col items-center p-3 md:p-4">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-yellow-700 mb-3"
          >
            <path
              d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7l-2-4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3z"
              fill="currentColor"
            />
            <circle cx="9" cy="12" r="2" fill="currentColor"/>
            <path
              d="m15.5 11-2.5 1.5v-3z"
              fill="currentColor"
            />
          </svg>
          <h2 className="text-lg md:text-xl font-bold text-white mb-2">Long-Form</h2>
          <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
            Story-driven edits for YouTube, interviews, and documentaries.
          </p>
        </div>
       
      </button>
    </CometCard>

              <CometCard>
      <button
        type="button"
        className="my-2 flex w-full sm:w-80 lg:w-72 xl:w-80 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-gradient-to-b from-zinc-900 to-zinc-800 p-3 saturate-0 md:my-3 md:p-4 hover:from-zinc-800 hover:to-zinc-700 hover:saturate-100 transition-all duration-300 ease-in-out"
        aria-label="View invite F7RA"
        style={{
          transformStyle: "preserve-3d",
          transform: "none",
          opacity: 1,
        }}
      >
        <div className="flex flex-col items-center p-3 md:p-4">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-yellow-700 mb-3"
          >
            <path
              d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7l-2-4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3z"
              fill="currentColor"
            />
            <circle cx="9" cy="12" r="2" fill="currentColor"/>
            <path
              d="m15.5 11-2.5 1.5v-3z"
              fill="currentColor"
            />
          </svg>
          <h2 className="text-lg md:text-xl font-bold text-white mb-2">Motion Graphics</h2>
          <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
            Animated titles and effects that boost video impact.
          </p>
        </div>
       
      </button>
    </CometCard>

        <CometCard>
      <button
        type="button"
        className="my-2 flex w-full sm:w-80 lg:w-72 xl:w-80 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-gradient-to-b from-zinc-900 to-zinc-800 p-3 saturate-0 md:my-3 md:p-4 hover:from-zinc-800 hover:to-zinc-700 hover:saturate-100 transition-all duration-300 ease-in-out"
        aria-label="View invite F7RA"
        style={{
          transformStyle: "preserve-3d",
          transform: "none",
          opacity: 1,
        }}
      >
        <div className="flex flex-col items-center p-3 md:p-4">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-yellow-700 mb-3"
          >
            <path
              d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7l-2-4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3z"
              fill="currentColor"
            />
            <circle cx="9" cy="12" r="2" fill="currentColor"/>
            <path
              d="m15.5 11-2.5 1.5v-3z"
              fill="currentColor"
            />
          </svg>
          <h2 className="text-lg md:text-xl font-bold text-white mb-2">Color Grading</h2>
          <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
            Enhance visuals with cinematic color correction and grading.
          </p>
        </div>
       
      </button>
    </CometCard>
        <CometCard>
      <button
        type="button"
        className="my-2 flex w-full sm:w-80 lg:w-72 xl:w-80 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-gradient-to-b from-zinc-900 to-zinc-800 p-3 saturate-0 md:my-3 md:p-4 hover:from-zinc-800 hover:to-zinc-700 hover:saturate-100 transition-all duration-300 ease-in-out"
        aria-label="View invite F7RA"
        style={{
          transformStyle: "preserve-3d",
          transform: "none",
          opacity: 1,
        }}
      >
        <div className="flex flex-col items-center p-3 md:p-4">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-yellow-700 mb-3"
          >
            <path
              d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7l-2-4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3z"
              fill="currentColor"
            />
            <circle cx="9" cy="12" r="2" fill="currentColor"/>
            <path
              d="m15.5 11-2.5 1.5v-3z"
              fill="currentColor"
            />
          </svg>
          <h2 className="text-lg md:text-xl font-bold text-white mb-2">Cinematic</h2>
          <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
          Creative, emotional edits for travel, brands, and passion projects.
          </p>
        </div>
       
      </button>
    </CometCard>

      </div>
     
  </div>
  );
};

export default Services;

