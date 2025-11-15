"use client";

import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ContactClient() {
  return (
    <div className="min-h-screen animated-gradient-bg">
      <Navigation />

      <section className="pt-32 pb-20 px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">Contact</h1>
          <p className="text-lg text-white/40 mb-20 max-w-xl font-light">
            Available for Summer 2026 Co-op opportunities.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-sm text-white/30 mb-2 font-mono">EMAIL</h3>
              <a
                href="mailto:asibak@uoguelph.ca"
                className="text-xl text-white hover:text-white/80 smooth-transition"
              >
                asibak@uoguelph.ca
              </a>
            </div>

            <div>
              <h3 className="text-sm text-white/30 mb-2 font-mono">GITHUB</h3>
              <a
                href="https://github.com/alysibak"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-white hover:text-white/80 smooth-transition"
              >
                github.com/alysibak
              </a>
            </div>

            <div>
              <h3 className="text-sm text-white/30 mb-2 font-mono">LINKEDIN</h3>
              <a
                href="https://www.linkedin.com/in/alysibak"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-white hover:text-white/80 smooth-transition"
              >
                linkedin.com/in/alysibak
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
