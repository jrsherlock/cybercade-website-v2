"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  MailWarning, 
  LockKeyhole, 
  ArrowLeftRight, 
  Search, 
  Network, 
  Timer,
  ExternalLink
} from "lucide-react";

const games = [
  {
    id: "phishspotter",
    title: "PhishSpotter",
    icon: <MailWarning className="w-10 h-10 text-primary" />,
    description: "Analyze simulated emails/messages. Tap suspicious elements before they catch you.",
    objective: "Reduces click rates through pattern recognition.",
    color: "red"
  },
  {
    id: "passphrase",
    title: "PassPhrase",
    icon: <LockKeyhole className="w-10 h-10 text-secondary" />,
    description: "Wordle-style logic: Construct secure passphrases based on complex requirements.",
    objective: "Drives secure password creation habits.",
    color: "maroon"
  },
  {
    id: "threatsort",
    title: "ThreatSort",
    icon: <ArrowLeftRight className="w-10 h-10 text-accent" />,
    description: "Rapid-fire categorization. Swipe scenarios to report, escalate, or ignore.",
    objective: "Sharpens incident response instincts.",
    color: "plum"
  },
  {
    id: "datadetective",
    title: "DataDetective",
    icon: <Search className="w-10 h-10 text-white" />,
    description: "Narrative puzzles: Investigate incidents by reviewing logs and interviewing AI bots.",
    objective: "Teaches attack chain investigation.",
    color: "white"
  },
  {
    id: "accessmaze",
    title: "AccessMaze",
    icon: <Network className="w-10 h-10 text-primary" />,
    description: "Grid-based logic. Place permissions so employees reach resources securely.",
    objective: "Masters Least Privilege & RBAC.",
    color: "red"
  },
  {
    id: "quickcrypt",
    title: "QuickCrypt",
    icon: <Timer className="w-10 h-10 text-secondary" />,
    description: "Speed challenges and trivia under pressure. Multiplayer showdown mode included.",
    objective: "Reinforces policy & speed.",
    color: "maroon"
  }
];

export default function GameShowcase() {
  return (
    <section id="games" className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-2 bg-accent/10 border border-accent/30 rounded-full">
            <Timer className="w-5 h-5 text-accent animate-pulse" />
            <span className="text-xs font-black tracking-[0.3em] text-accent uppercase">Daily Micro-Training</span>
          </div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-display font-normal text-white mb-8 uppercase tracking-tight"
          >
            Arcade <span className="text-accent italic">Mini-Games</span>
          </motion.h2>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/60 leading-relaxed uppercase tracking-wide font-medium">
            Built for the 99% who aren&apos;t cyber techies. NIST-aligned learning objectives
            <br />
            delivered as Wordle-like, 2-minute daily challenges.
            <br />
            <span className="text-white/80">Habit formation through addictive gameplay.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, i) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-white/30 transition-all duration-500"
            >
              {/* Card Accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 blur-[80px] -z-10 transition-opacity duration-500 opacity-20 group-hover:opacity-40
                ${game.color === 'red' ? 'bg-primary' : 
                  game.color === 'maroon' ? 'bg-secondary' : 
                  game.color === 'plum' ? 'bg-accent' : 'bg-white'}`} 
              />

              <div className="mb-8">{React.cloneElement(game.icon as React.ReactElement<any>, { className: "w-12 h-12" })}</div>
              <h3 className="text-xl font-display font-normal text-white mb-6 flex items-center gap-3 uppercase">
                {game.title}
                <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-50 transition-opacity" />
              </h3>
              <p className="text-white/60 mb-6 leading-relaxed">
                {game.description}
              </p>
              
              <div className="mt-auto pt-8 border-t border-white/5">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold block mb-3">Learning Objective</span>
                <p className="text-sm font-display leading-relaxed text-primary">
                  {game.objective}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
