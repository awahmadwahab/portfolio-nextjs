"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
     const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
>
    <Menu setActive={setActive} >
        <Link href={"#"}>
        <MenuItem setActive={setActive} active={active} item="Home">
        
        </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Services">
        <div className="flex flex-col gap-2 items-center">
            <HoveredLink href={"/"}>EDITING</HoveredLink>
             <HoveredLink href={"/"}>DESIGNING</HoveredLink>
              <HoveredLink href={"/"}>DEVELOPMENT</HoveredLink>
        </div>
        </MenuItem>
        
         <MenuItem setActive={setActive} active={active} item="Products">
        <div className="flex flex-col gap-2 items-center">
            <HoveredLink href={"/"}>LATEST</HoveredLink>
             <HoveredLink href={"/"}>GRADING</HoveredLink>
              <HoveredLink href={"/"}>ANIMATION</HoveredLink>
        </div>
        </MenuItem>

    </Menu>
</div>
  )
}

export default Navbar