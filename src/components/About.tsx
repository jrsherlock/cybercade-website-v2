"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Gamepad2, Route, RefreshCw } from "lucide-react";

const principles = [
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Company-Wide Threat",
    desc: "Cybercrime is a company-wide threat, not just an IT thing.",
  },
  {
    icon: <Gamepad2 className="w-8 h-8 text-secondary" />,
    title: "Learning Through Play",
    desc: "Games are one of the most foundational forms of teaching \u2014 most people don\u2019t even know they are learning.",
  },
  {
    icon: <Route className="w-8 h-8 text-accent" />,
    title: "Process Over Outcomes",
    desc: "Understanding HOW someone got from Point A to Point B is more important than the fact they got there.",
  },
  {
    icon: <RefreshCw className="w-8 h-8 text-white" />,
    title: "Continuous Education",
    desc: "Cybersecurity learning needs to be immersive & iterative, not just an annual rite of passage for compliance.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-display font-normal text-white mb-8 uppercase tracking-tight"
          >
            Our <span className="text-primary italic">Mission</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl mx-auto text-lg md:text-xl text-white/60 leading-relaxed"
          >
            Cybercade was started by a team passionate about gaming, learning and cybersecurity.
            We believe that education needs to change and gaming holds the key. We decided to build
            fun and engaging games to show the world a better way to learn.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {principles.map((principle, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md group hover:border-white/20 transition-all duration-500"
            >
              <div className="mb-6 drop-shadow-[0_0_12px_currentColor]">
                {principle.icon}
              </div>
              <h3 className="text-sm font-display text-white mb-4 uppercase tracking-[0.15em]">
                {principle.title}
              </h3>
              <p className="text-white/50 leading-relaxed text-sm">
                {principle.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
