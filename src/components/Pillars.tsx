"use client";

import React from "react";
import { motion } from "framer-motion";

const pillars = [
  {
    num: "01",
    title: "Invisible Integration",
    desc: "Training meets users in their daily workflow (Slack, Teams, Browser). No separate portals, no friction, just learning."
  },
  {
    num: "02",
    title: "Addiction by Design",
    desc: "Ethical application of game mechanics like streaks, social proof, and mastery to drive daily engagement and retention."
  },
  {
    num: "03",
    title: "Intelligence-Driven",
    desc: "AI ingests real-time threat intel to generate puzzles based on current active threats relevant to your specific industry."
  },
  {
    num: "04",
    title: "Behavior Change",
    desc: "Moving beyond completion rates to measure real risk reduction, click rates, and reporting habits."
  }
];

export default function Pillars() {
  return (
    <section id="how-it-works" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <div className="text-4xl font-display font-normal text-white/5 mb-6 group-hover:text-primary/10 transition-colors">
                {pillar.num}
              </div>
              <div className="absolute top-8 left-0">
                <h3 className="text-lg font-display font-normal text-white mb-4 uppercase">
                  {pillar.title}
                </h3>
                <p className="text-white/40 leading-relaxed text-sm">
                  {pillar.desc}
                </p>
              </div>
              {/* Spacer for absolute positioning */}
              <div className="h-40" aria-hidden="true" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
