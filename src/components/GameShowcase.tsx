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
    objective: "Master Least Privilege & RBAC.",
    color: "red"
  },
  {
    id: "quickcrypt",
    title: "QuickCrypt",
    icon: <Timer className="w-10 h-10 text-secondary" />,
    description: "Speed challenges and trivia under pressure. Multiplayer showdown mode included.",
    objective: "Policy reinforcement & speed.",
    color: "maroon"
  }
];

export default function GameShowcase() {
  return (
    <section id="games" className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-normal text-white mb-10 uppercase"
          >
            The <span className="text-primary underline decoration-primary/30 underline-offset-[12px]">Core Library</span>
          </motion.h2>
          <p className="max-w-2xl mx-auto text-xl text-white/50">
            Highly addictive mini-games designed to build muscle memory and security instincts in under 2 minutes a day.
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
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold block mb-3">LEARNING OBJECTIVE</span>
                <p className={`text-sm font-display leading-relaxed
                  ${game.color === 'red' ? 'text-primary' : 
                    game.color === 'maroon' ? 'text-secondary' : 
                    game.color === 'plum' ? 'text-accent' : 'text-white'}`}
                >
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
