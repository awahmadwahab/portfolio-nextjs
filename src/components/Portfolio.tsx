import Link from 'next/link';
import React from 'react';

const Portfolio = () => {
  return (
    <section id="portfolio" className="pt-35 bg-zinc-900 scroll-mt-28 md:scroll-mt-36">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="text-yellow-500">Portfolio</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Take a look at some of our recent work and see the quality we deliver
          </p>
        </div>

        {/* Video Portfolio */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {/* Video 1 */}
          <div className="relative group">
            <video 
              className="w-64 h-36 md:w-72 md:h-40 object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
              autoPlay
              loop
              muted
              playsInline
              controls={false}
            >
              <source src="https://res.cloudinary.com/dtbxufkdb/video/upload/v1757878638/reel_bundle_vwxxid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Overlay gradient for better visual appeal */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            {/* Optional play icon overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-yellow-500/20 rounded-full p-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-yellow-500">
                  <polygon points="8,5 19,12 8,19" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Video 2 */}
          <div className="relative group">
            <video 
              className="w-64 h-36 md:w-72 md:h-40 object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
              autoPlay
              loop
              muted
              playsInline
              controls={false}
            >
              <source src="https://res.cloudinary.com/dtbxufkdb/video/upload/v1757878681/p-1_rcq9jq.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-yellow-500/20 rounded-full p-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-yellow-500">
                  <polygon points="8,5 19,12 8,19" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Video 3 */}
          <div className="relative group">
            <video 
              className="w-64 h-36 md:w-72 md:h-40 object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
              autoPlay
              loop
              muted
              playsInline
              controls={false}
            >
              <source src="https://res.cloudinary.com/dtbxufkdb/video/upload/v1757878714/lv_0_20250629231017_jyd7ob.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-yellow-500/20 rounded-full p-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-yellow-500">
                  <polygon points="8,5 19,12 8,19" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
        <Link href="https://www.instagram.com/awxvision">
          <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
             <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
              <span>{`VIEW ALL`}</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                ></path>
              </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-yellow-400/90 to-yellow-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
          </button>
        </Link>
      </div>
      </div>
    </section>
  );
};

export default Portfolio;