"use client";

import React from "react";
import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-background pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="mb-8 block">
              <Logo size="sm" />
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-10 max-w-sm">
              Transforming security training from a compliance burden into a competitive advantage. Play games. Build habits. Protect your organization.
            </p>
            <div className="flex gap-6">
              <a href="https://linkedin.com/company/cybercade/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-white/5 text-white/40 hover:text-secondary hover:bg-white/10 transition-all">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-display font-normal text-white mb-8 uppercase tracking-[0.2em] lg:text-xs">Product</h4>
            <ul className="space-y-6 text-sm font-bold text-white/40">
              <li><Link href="#games" className="hover:text-primary transition-colors">Core Games</Link></li>
              <li><Link href="#integrations" className="hover:text-primary transition-colors">Integrations</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">AI Engine</Link></li>
              <li><Link href="#about" className="hover:text-primary transition-colors">About</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-display font-normal text-white mb-8 uppercase tracking-[0.2em] lg:text-xs">Resources</h4>
            <ul className="space-y-6 text-sm font-bold text-white/40">
              <li><Link href="#" className="hover:text-secondary transition-colors">Documentation</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Security Blog</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Threat Database</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Design Guidelines</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-display font-normal text-white mb-8 uppercase tracking-[0.2em] lg:text-xs">Support</h4>
            <ul className="space-y-6 text-sm font-bold text-white/40">
              <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm text-white/20 font-medium">
            © 2026 Cybercade Inc. All rights reserved. Built with precision and passion.
          </p>
          <div className="flex items-center gap-3 text-sm text-white/40 font-bold">
            <Mail className="w-5 h-5 text-primary" />
            <span>sales@cybercade.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
