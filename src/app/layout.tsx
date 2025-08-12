import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: "AWXVISION | Freelance Video Editor | Clean Cuts & Clear Stories",
  description: "I'm AWXVISION, a freelance video editor helping creators, brands, and filmmakers transform raw footage into polished, impactful videos that engage and inspire audiences.",
  keywords: [
    "Freelance Video Editor",
    "Video Editing",
    "Video Production",
    "Content Creation",
    "Filmmaking",
    "Video Marketing",
    "Video Storytelling",
    "Post-Production",
    "Creative Video Solutions"
  ]
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        <div className="relative w-full flex  items-center justify-center">
        <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
