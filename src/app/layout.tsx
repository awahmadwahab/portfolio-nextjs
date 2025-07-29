import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: "AWXVISION | Freelance Video Editor & Visual Storyteller",
  description: "AWXVISION is a professional video editing portfolio showcasing cinematic cuts, storytelling, and branded content for creators, businesses, and filmmakers.",
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
