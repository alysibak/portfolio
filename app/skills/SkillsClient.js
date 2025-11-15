"use client";

import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { technicalSkills } from "@/lib/data";

export default function SkillsClient() {
  return (
    <div className="min-h-screen animated-gradient-bg">
      <Navigation />

      <section className="pt-32 pb-20 px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">Skills</h1>
          <p className="text-lg text-white/40 mb-20 max-w-xl font-light">
            Tools I use to ship products.
          </p>

          <div className="space-y-12">
            <div>
              <h2 className="text-sm text-white/30 mb-4 font-mono">FRONTEND</h2>
              <div className="flex flex-wrap gap-3">
                {technicalSkills.frontend.map((skill, i) => (
                  <span key={i} className="text-white/60 text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-sm text-white/30 mb-4 font-mono">BACKEND</h2>
              <div className="flex flex-wrap gap-3">
                {technicalSkills.backend.map((skill, i) => (
                  <span key={i} className="text-white/60 text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-sm text-white/30 mb-4 font-mono">CLOUD & APIs</h2>
              <div className="flex flex-wrap gap-3">
                {technicalSkills.cloudAndAPIs.map((skill, i) => (
                  <span key={i} className="text-white/60 text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-sm text-white/30 mb-4 font-mono">TOOLS</h2>
              <div className="flex flex-wrap gap-3">
                {technicalSkills.tools.map((skill, i) => (
                  <span key={i} className="text-white/60 text-sm">
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
