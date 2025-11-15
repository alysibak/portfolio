"use client";

import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ContactClient() {
  return (
    <div className="min-h-screen animated-gradient-bg">
      <Navigation />

      <section className="pt-40 pb-32 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tight">Contact</h1>
          <p className="text-xl text-white/40 mb-24 max-w-xl font-light">
            Available for Summer 2026 Co-op opportunities.
          </p>

          <div className="space-y-12">
            <div className="glass p-10 smooth-transition glow-on-hover">
              <h3 className="text-xs text-white/30 mb-4 font-mono tracking-wider">EMAIL</h3>
              <a
                href="mailto:asibak@uoguelph.ca"
                className="text-2xl text-white hover:text-white/80 smooth-transition"
              >
                asibak@uoguelph.ca
              </a>
            </div>

            <div className="glass p-10 smooth-transition glow-on-hover">
              <h3 className="text-xs text-white/30 mb-4 font-mono tracking-wider">GITHUB</h3>
              <a
                href="https://github.com/alysibak"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white hover:text-white/80 smooth-transition"
              >
                github.com/alysibak
              </a>
            </div>

            <div className="glass p-10 smooth-transition glow-on-hover">
              <h3 className="text-xs text-white/30 mb-4 font-mono tracking-wider">LINKEDIN</h3>
              <a
                href="https://www.linkedin.com/in/aly-sibak-721b85252/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white hover:text-white/80 smooth-transition"
              >
                linkedin.com/in/aly-sibak-721b85252
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
