"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Slack, Users } from "lucide-react";

export default function Integrations() {
  return (
    <section id="integrations" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-white/[0.02] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">
              ZERO FRICTION
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-8 leading-tight">
              LIVES WHERE YOUR <br />
              <span className="text-primary">TEAM WORKS.</span>
            </h2>
            <p className="text-xl text-white/50 mb-10 leading-relaxed">
              No separate portals. No new passwords. Cybercade sends daily challenges directly to the tools your employees already use, ensuring 100% participation without the nagging.
            </p>

            <div className="space-y-6">
              {[
                { icon: <Slack className="text-[#4A154B]" />, title: "Slack First", desc: "Interactive slash commands and message-based puzzles." },
                { icon: <Users className="text-[#6264A7]" />, title: "Microsoft Teams", desc: "Native adaptive cards for seamless daily training." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{item.title}</h4>
                    <p className="text-white/40">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Mockup Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative p-2 rounded-3xl bg-white/5 border border-white/10"
            >
              <div className="bg-[#1a1d21] rounded-2xl aspect-[4/3] flex flex-col p-6 overflow-hidden">
                <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Slack className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-white/60 font-bold">#security-training</span>
                </div>
                
                <div className="flex gap-4 mb-4">
                  <div className="w-10 h-10 rounded bg-primary flex-shrink-0" />
                  <div className="flex-1 space-y-2">
                    <p className="text-white font-bold text-sm">Cybercade <span className="text-white/40 font-normal ml-2">10:00 AM</span></p>
                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                      <p className="text-white text-sm mb-3">🚨 <b>New PhishSpotter Challenge!</b> 🚨</p>
                      <p className="text-white/60 text-xs mb-4">You just received an email from "IT Helpdesk" about a mandatory password reset. Is it legitimate?</p>
                      <div className="flex gap-2">
                        <button className="px-3 py-1.5 bg-primary text-white text-xs font-black rounded">ANALZYE EMAIL</button>
                        <button className="px-3 py-1.5 bg-white/5 border border-white/10 text-white text-xs font-bold rounded">SKIP (-10 XP)</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Streak Card */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute bottom-10 right-10 bg-secondary p-4 rounded-2xl shadow-2xl text-white font-black"
                >
                  <div className="flex items-center gap-2">
                    <Zap className="w-6 h-6 fill-current" />
                    <span className="text-2xl">12 DAY STREAK!</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Zap({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 14.71 14 3.5v9h6L10 20.5v-9H4Z"/></svg>
  );
}
