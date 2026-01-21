"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "hero";
}

export default function Logo({
  className,
  size = "md",
}: LogoProps) {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl md:text-3xl",
    lg: "text-4xl md:text-5xl",
    xl: "text-6xl md:text-7xl",
    hero: "text-8xl md:text-[10rem] lg:text-[12rem]",
  };

  return (
    <div className={cn("flex items-center justify-center select-none", className)}>
      <div className="relative group cursor-default">
        {/* Glow Layers */}
        <span className={cn(
          "absolute inset-0 blur-2xl opacity-40 text-cyan-400 font-display italic tracking-tighter uppercase pointer-events-none transition-all duration-500 group-hover:blur-3xl group-hover:opacity-60",
          sizeClasses[size]
        )}>
          CYBERCADE
        </span>
        
        <span className={cn(
          "absolute inset-0 blur-md opacity-70 text-primary font-display italic tracking-tighter uppercase pointer-events-none",
          sizeClasses[size]
        )}>
          CYBERCADE
        </span>

        {/* Main Text */}
        <h1 className={cn(
          "relative font-display italic tracking-tighter uppercase transition-transform duration-500 group-hover:scale-[1.02]",
          sizeClasses[size]
        )}>
          <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">
            CYBER
          </span>
          <span className="text-primary drop-shadow-[0_0_15px_rgba(255,32,78,0.8)]">
            CADE
          </span>
        </h1>

        {/* Retro Scanline Effect Overlay (Subtle) */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%] pointer-events-none mix-blend-overlay opacity-50" />
      </div>
    </div>
  );
}
