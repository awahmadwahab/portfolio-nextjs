import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AWX Vision | Visual Engineering for Tech Brands",
  description: "Where computer science meets cinematic storytelling. We combine precise color grading, minimal motion design, and algorithmic pacing to build premium visual identities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-[#050505] text-white antialiased selection:bg-[#D4AF37] selection:text-black`}>
        {children}
      </body>
    </html>
  );
}
