"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";

const Navbar = ({ className }: { className?: string }) => {
     const [active, setActive] = useState<string | null>(null);

     const scrollToSection = (sectionId: string) => {
       const element = document.getElementById(sectionId);
       if (element) {
         element.scrollIntoView({ behavior: 'smooth' });
       }
     };

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
>
    <Menu setActive={setActive} >
     
        <div onClick={() => scrollToSection('home')} className="cursor-pointer">
        <MenuItem setActive={setActive} active={active} item="Home">
        
        </MenuItem>
        </div>
      
        <div onClick={() => scrollToSection('services')} className="cursor-pointer">
        <MenuItem setActive={setActive} active={active} item="Services">
        </MenuItem>
        </div>
        
        <div onClick={() => scrollToSection('portfolio')} className="cursor-pointer">
        <MenuItem setActive={setActive} active={active} item="Portfolio">
        </MenuItem>
        </div>
        
        <div onClick={() => scrollToSection('testimonial')} className="cursor-pointer">
         <MenuItem setActive={setActive} active={active} item="Testimonial">
        </MenuItem>
        </div>
    
    </Menu>
</div>
  )
}

export default Navbar