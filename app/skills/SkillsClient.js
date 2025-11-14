"use client";

import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { technicalSkills } from "@/lib/data";
import { FaCode, FaServer, FaCloud, FaTools } from "react-icons/fa";

const categoryIcons = {
  Frontend: FaCode,
  Backend: FaServer,
  "Cloud & APIs": FaCloud,
  Tools: FaTools,
};

export default function SkillsClient() {
  return (
    <div className="min-h-screen animated-gradient-bg">
      <Navigation />

      <section className="pt-32 pb-20 px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 text-shadow">Skills</h1>
          <p className="text-xl text-white/90 mb-16 text-shadow max-w-2xl">
            Full-stack expertise from React to AWS. These aren't buzzwords—they're tools I use to ship products.
          </p>

          <div className="space-y-6">
            <div className="glass p-8 rounded-3xl smooth-transition">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/20 rounded-xl">
                  <FaCode className="text-2xl text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Frontend</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {technicalSkills.frontend.map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-white/20 text-white text-sm font-medium rounded-full smooth-transition hover:bg-white/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass p-8 rounded-3xl smooth-transition">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/20 rounded-xl">
                  <FaServer className="text-2xl text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Backend</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {technicalSkills.backend.map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-white/20 text-white text-sm font-medium rounded-full smooth-transition hover:bg-white/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass p-8 rounded-3xl smooth-transition">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/20 rounded-xl">
                  <FaCloud className="text-2xl text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Cloud & APIs</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {technicalSkills.cloudAndAPIs.map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-white/20 text-white text-sm font-medium rounded-full smooth-transition hover:bg-white/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass p-8 rounded-3xl smooth-transition">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/20 rounded-xl">
                  <FaTools className="text-2xl text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Tools</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {technicalSkills.tools.map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-white/20 text-white text-sm font-medium rounded-full smooth-transition hover:bg-white/30">
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
