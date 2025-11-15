"use client";

import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { technicalSkills } from "@/lib/data";

export default function SkillsClient() {
  return (
    <div className="min-h-screen animated-gradient-bg">
      <Navigation />

      <section className="pt-40 pb-32 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tight">Skills</h1>
          <p className="text-xl text-white/40 mb-24 max-w-xl font-light">
            Tech I work with.
          </p>

          <div className="space-y-16">
            <div className="glass p-10 smooth-transition glow-on-hover">
              <h2 className="text-xs text-white/30 mb-6 font-mono tracking-wider">FRONTEND</h2>
              <div className="flex flex-wrap gap-4">
                {technicalSkills.frontend.map((skill, i) => (
                  <span key={i} className="text-white/50 text-base">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass p-10 smooth-transition glow-on-hover">
              <h2 className="text-xs text-white/30 mb-6 font-mono tracking-wider">BACKEND</h2>
              <div className="flex flex-wrap gap-4">
                {technicalSkills.backend.map((skill, i) => (
                  <span key={i} className="text-white/50 text-base">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass p-10 smooth-transition glow-on-hover">
              <h2 className="text-xs text-white/30 mb-6 font-mono tracking-wider">CLOUD & APIs</h2>
              <div className="flex flex-wrap gap-4">
                {technicalSkills.cloudAndAPIs.map((skill, i) => (
                  <span key={i} className="text-white/50 text-base">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass p-10 smooth-transition glow-on-hover">
              <h2 className="text-xs text-white/30 mb-6 font-mono tracking-wider">TOOLS</h2>
              <div className="flex flex-wrap gap-4">
                {technicalSkills.tools.map((skill, i) => (
                  <span key={i} className="text-white/50 text-base">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
