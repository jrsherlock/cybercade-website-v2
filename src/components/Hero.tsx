"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Trophy } from "lucide-react";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 -z-30 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute min-w-full min-h-full object-cover opacity-30 mix-blend-screen scale-110"
        >
          <source src="/Cinemagraphic_Superhero_Website_Hero.mp4" type="video/mp4" />
          <img src="/hero-video.gif" alt="Cybercade Hero" className="w-full h-full object-cover" />
        </video>
        <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px]" />
      </div>

      {/* CRT Scanline Overlay */}
      <div className="absolute inset-0 pointer-events-none -z-20 opacity-15"
        style={{
          backgroundImage: `linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 118, 0.06))`,
          backgroundSize: '100% 4px, 3px 100%'
        }}
      />

      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] -z-10 animate-pulse-slow" style={{ animationDelay: "2s" }} />

      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-10 px-4">
            <Logo size="hero" />
          </div>
          
          <h1 className="text-2xl md:text-4xl font-display font-medium tracking-[0.2em] text-white/60 mb-12 leading-[1.4] uppercase">
            The <span className="text-white font-bold animate-pulse drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">Future</span> of Security Awareness
          </h1>
          
          <p className="max-w-4xl mx-auto text-base md:text-xl text-white/50 mb-16 leading-relaxed uppercase tracking-[0.15em] font-medium">
            STOP CLICKING NEXT. START LEVELING UP.
            <br />
            <span className="text-white">Addictive missions</span> they&apos;ll actually crave.
          </p>
        </motion.div>

        {/* Floating Components */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { icon: <ShieldCheck className="w-10 h-10 text-primary" />, title: "ZERO_FRICTION", desc: "SLACK & TEAMS READY" },
            { icon: <Trophy className="w-10 h-10 text-secondary" />, title: "HABIT_FORMING", desc: "ADDICTION BY DESIGN" },
            { icon: <Zap className="w-10 h-10 text-accent" />, title: "AI_ENHANCED", desc: "REAL_TIME THREATS" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="p-10 bg-black/40 rounded-xl border border-white/5 backdrop-blur-md group hover:border-primary/30 transition-colors"
            >
              <div className="flex justify-center mb-8 drop-shadow-[0_0_12px_currentColor]">{item.icon}</div>
              <h3 className="text-sm font-display text-white mb-4 tracking-[0.2em]">{item.title}</h3>
              <p className="text-[11px] text-white/40 tracking-widest font-bold lg:text-xs">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
