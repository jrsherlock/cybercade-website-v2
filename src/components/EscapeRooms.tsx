"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Clock, Brain, Trophy, Lock, Zap } from "lucide-react";

export default function EscapeRooms() {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      desc: "2+ players required for real-time coordination"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Time-Pressured",
      desc: "Race against the clock to solve cyber threats"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Strategic Thinking",
      desc: "Complex puzzles requiring collective problem-solving"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Team Leaderboards",
      desc: "Compete with other departments and companies"
    }
  ];

  const scenarios = [
    {
      title: "Ransomware Crisis",
      difficulty: "Advanced",
      players: "3-5 Players",
      time: "45 Minutes",
      desc: "Your company's been hit. Decrypt files, trace the attack, and prevent data exfiltration before the deadline.",
      color: "from-red-500/20 to-orange-500/20"
    },
    {
      title: "Insider Threat",
      difficulty: "Expert",
      players: "2-4 Players",
      time: "60 Minutes",
      desc: "A rogue employee is leaking secrets. Analyze logs, interview suspects, and stop the breach.",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Zero-Day Exploit",
      difficulty: "Intermediate",
      players: "2-3 Players",
      time: "30 Minutes",
      desc: "A new vulnerability is being actively exploited. Patch systems, isolate infected machines, and contain the damage.",
      color: "from-cyan-500/20 to-blue-500/20"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-background via-background/95 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,32,78,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,255,255,0.03),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-2 bg-primary/10 border border-primary/30 rounded-full">
            <Lock className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-xs font-black tracking-[0.3em] text-primary uppercase">Multiplayer Missions</span>
          </div>
          
          <h2 className="text-3xl md:text-6xl font-display font-normal text-white mb-8 uppercase tracking-tight">
            Cyber <span className="text-primary italic">Escape Rooms</span>
          </h2>
          
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/60 leading-relaxed uppercase tracking-wide font-medium">
            Real-time collaboration meets high-stakes cybersecurity. 
            <br />
            <span className="text-white/80">Your team vs. the clock vs. the threat.</span>
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-primary/30 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-sm font-display font-bold text-white mb-2 uppercase tracking-wider">
                {feature.title}
              </h3>
              <p className="text-xs text-white/50 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Scenario Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {scenarios.map((scenario, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group cursor-pointer"
            >
              {/* Card */}
              <div className={`relative p-8 rounded-3xl bg-gradient-to-br ${scenario.color} border border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-500 group-hover:border-primary/40 group-hover:shadow-[0_20px_60px_rgba(255,32,78,0.2)]`}>
                {/* Difficulty Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/20">
                  <span className="text-[10px] font-black tracking-widest text-white/80 uppercase">
                    {scenario.difficulty}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 mb-6 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Zap className="w-8 h-8 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-display font-bold text-white mb-4 uppercase tracking-tight">
                  {scenario.title}
                </h3>

                {/* Meta Info */}
                <div className="flex gap-4 mb-6 text-xs text-white/60 font-bold uppercase tracking-wider">
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {scenario.players}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {scenario.time}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-white/70 leading-relaxed mb-6">
                  {scenario.desc}
                </p>

                {/* CTA Button */}
                <button className="w-full py-3 bg-white/10 hover:bg-primary/20 border border-white/20 hover:border-primary/40 rounded-xl text-xs font-black tracking-[0.2em] text-white uppercase transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(255,32,78,0.3)]">
                  Start Mission
                </button>

                {/* Glow Effect */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-white/40 text-sm font-bold uppercase tracking-[0.3em] mb-8">
            New scenarios added monthly
          </p>
          <button className="px-12 py-5 bg-primary hover:bg-primary-hover text-white rounded-2xl font-display text-sm tracking-[0.3em] uppercase transition-all shadow-[0_10px_30px_rgba(255,32,78,0.3)] hover:shadow-[0_15px_40px_rgba(255,32,78,0.5)] hover:scale-105">
            View All Escape Rooms
          </button>
        </motion.div>
      </div>
    </section>
  );
}
