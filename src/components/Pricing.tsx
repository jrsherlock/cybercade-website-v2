"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Standard",
    monthlyPrice: 3,
    annualPrice: 25,
    desc: "Perfect for growing teams getting started with security awareness.",
    features: [
      "25 Core Arcade Games",
      "Slack & Teams Bot",
      "Global Leaderboards",
      "Standard Analytics",
      "Mobile App Access",
    ],
    color: "white"
  },
  {
    name: "Professional",
    monthlyPrice: 5,
    annualPrice: 45,
    desc: "Advanced training modules for high-performance security teams.",
    features: [
      "Everything in Standard",
      "AI-Generated Phishing",
      "Custom Brandable Games",
      "API & Webhook Access",
      "SSO & SCIM Support",
      "Department Leaderboards",
    ],
    recommended: true,
    color: "red"
  },
  {
    name: "Enterprise",
    monthlyPrice: 8,
    annualPrice: 60,
    desc: "Infinite scalability for the world's largest organizations.",
    features: [
      "Everything in Professional",
      "Custom Game Development",
      "Dedicated Infosec Lead",
      "On-Premise Deployment",
      "Custom Legal & SLAs",
      "Infinite Data Retention",
    ],
    color: "maroon"
  }
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-display font-normal text-white mb-6 uppercase tracking-tight">
            Level Up Your <span className="text-primary italic">Security</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/50 mb-12 uppercase tracking-widest font-medium">
            Choose your mission. Scale at your speed.
          </p>

          {/* Pricing Toggle */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-4 bg-white/5 p-1.5 rounded-2xl border border-white/10">
              <button
                onClick={() => setIsAnnual(false)}
                className={cn(
                  "px-6 py-2 rounded-xl text-sm font-bold transition-all uppercase tracking-widest relative z-10",
                  !isAnnual ? "text-white" : "text-white/40 hover:text-white/60"
                )}
              >
                {!isAnnual && (
                  <motion.div
                    layoutId="toggle-bg"
                    className="absolute inset-0 bg-white/10 rounded-xl -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={cn(
                  "px-6 py-2 rounded-xl text-sm font-bold transition-all uppercase tracking-widest relative z-10",
                  isAnnual ? "text-white" : "text-white/40 hover:text-white/60"
                )}
              >
                {isAnnual && (
                  <motion.div
                    layoutId="toggle-bg"
                    className="absolute inset-0 bg-primary/20 rounded-xl -z-10 border border-primary/30"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                Annually
              </button>
            </div>
            {isAnnual && (
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-primary text-xs font-black uppercase tracking-[0.2em] animate-pulse"
              >
                Save up to 30% with annual
              </motion.span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "relative flex flex-col p-10 rounded-4xl border transition-all duration-500 hover:translate-y-[-8px]",
                tier.recommended 
                  ? "bg-white/10 border-primary/50 shadow-[0_20px_50px_rgba(255,32,78,0.15)] ring-1 ring-primary/20" 
                  : "bg-white/5 border-white/10 hover:border-white/20"
              )}
            >
              {tier.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-primary text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(255,32,78,0.4)]">
                  Most Popular
                </div>
              )}

              <div className="mb-10">
                <h3 className="text-xl font-display font-medium text-white mb-6 uppercase tracking-widest italic">{tier.name}</h3>
                <div className="flex items-baseline gap-2 overflow-hidden">
                  <span className="text-white/40 text-xl font-bold tracking-tighter self-start mt-2">$</span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={isAnnual ? 'annual' : 'monthly'}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-5xl md:text-7xl font-display font-bold text-white tracking-tighter"
                    >
                      {isAnnual ? tier.annualPrice : tier.monthlyPrice}
                    </motion.span>
                  </AnimatePresence>
                  <span className="text-white/30 text-xs font-black tracking-[0.2em] uppercase ml-3">
                    /User/{isAnnual ? 'Year' : 'Month'}
                  </span>
                </div>
                <p className="mt-8 text-sm text-white/50 leading-relaxed font-medium tracking-wide uppercase">
                  {tier.desc}
                </p>
              </div>

              <div className="flex-1 space-y-4 mb-12">
                {tier.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-4 group/feature">
                    <div className={cn(
                      "w-5 h-5 rounded-full flex items-center justify-center transition-colors group-hover/feature:bg-white/10",
                      tier.recommended ? "text-primary bg-primary/10" : "text-white/30 bg-white/5"
                    )}>
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-sm text-white/70 font-medium group-hover/feature:text-white transition-colors">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={cn(
                "w-full py-5 rounded-2xl font-display text-xs tracking-[0.3em] transition-all uppercase group flex items-center justify-center gap-3",
                tier.recommended
                  ? "bg-primary text-white hover:bg-primary-hover shadow-[0_10px_30px_rgba(255,32,78,0.3)] hover:shadow-[0_15px_40px_rgba(255,32,78,0.5)]"
                  : "bg-white/10 text-white hover:bg-white/20 border border-white/5 hover:border-white/20"
              )}>
                Start Free Mission
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              </button>
            </motion.div>
          ))}
        </div>
        
        {/* Trust/Enterprise Indicator */}
        <div className="mt-20 text-center">
            <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em] mb-4">
                Trusted by 500+ security officers worldwide
            </p>
            <div className="flex justify-center gap-12 grayscale opacity-30 invert">
                {/* Visual Placeholder logos would go here */}
            </div>
        </div>
      </div>
    </section>
  );
}
