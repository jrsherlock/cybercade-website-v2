"use client";

import React from "react";
import { motion } from "framer-motion";
import { XCircle, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";

export default function ProblemSolution() {
  return (
    <section className="py-24 bg-background border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* The Problem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="p-10 rounded-4xl bg-red-500/5 border border-red-500/10 relative overflow-hidden cursor-pointer group hover:bg-red-500/10 hover:border-red-500/30 hover:shadow-[0_20px_60px_rgba(239,68,68,0.15)] transition-all duration-500"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <AlertCircle className="w-24 h-24 text-red-500" />
            </div>
            
            <h3 className="text-2xl font-display font-normal text-red-500 mb-10 uppercase tracking-tight flex items-center gap-4">
              <XCircle className="w-8 h-8" /> The Old Way
            </h3>
            
            <ul className="space-y-6">
              {[
                "Annual 45-minute compliance videos that everyone mutes.",
                "Knowledge decay within days of completion.",
                "Employees resentment and 'Burden Fatigue'.",
                "Compliance checkmarks without actual risk reduction."
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start text-white/50 text-xl leading-relaxed">
                  <span className="w-2 h-2 rounded-full bg-red-500/40 mt-3.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* The Solution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="p-10 rounded-4xl bg-primary/5 border border-primary/20 relative overflow-hidden shadow-[0_0_50px_rgba(255,32,78,0.1)] cursor-pointer group hover:bg-primary/10 hover:border-primary/40 hover:shadow-[0_20px_80px_rgba(255,32,78,0.3)] transition-all duration-500"
          >
            <div className="absolute top-0 right-0 p-8 opacity-20">
              <Sparkles className="w-24 h-24 text-primary" />
            </div>

            <h3 className="text-2xl font-display font-normal text-primary mb-10 uppercase tracking-tight flex items-center gap-4">
              <CheckCircle2 className="w-8 h-8" /> The Cybercade Way
            </h3>

            <ul className="space-y-6">
              {[
                "Daily 2-minute puzzles that feel more like Wordle.",
                "Embedded directly in Slack, Teams, and Browsers.",
                "Real behavior change through habit formation.",
                "AI-driven relevance based on current active threats."
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start text-xl leading-relaxed text-white">
                  <CheckCircle2 className="w-7 h-7 text-primary flex-shrink-0 mt-1.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        <div className="mt-24 text-center">
          <p className="text-xl font-display italic text-white/40 leading-[1.8] md:text-2xl lg:text-3xl max-w-5xl mx-auto">
            "Security training should feel like <span className="text-white font-normal not-italic text-glow-primary">keeping your Wordle streak</span>, not giving up your workday."
          </p>
        </div>
      </div>
    </section>
  );
}
