"use client";

import React from "react";
import { FaLaptopCode, FaDatabase, FaCloud, FaTools } from "react-icons/fa";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import { technicalSkills } from "@/lib/data";

const SkillPill = ({ skill, delay = 0 }) => (
  <div
    className="px-4 py-2 glass rounded-lg text-white font-medium hover:scale-110 transition-all duration-300 border border-blue-400/20 text-center"
    style={{ animationDelay: `${delay}ms` }}
  >
    {skill}
  </div>
);

export default function SkillsClient() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl sm:text-7xl font-black gradient-text mb-6">
            What I Actually Know
          </h1>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto font-medium">
            No percentages, no BS. These are the tools I've used in production and personal projects.
            If it's on this list, I can build with it.
          </p>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Frontend */}
            <GlassCard hover3D glowColor="blue" className="p-8 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <FaLaptopCode className="text-3xl text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold gradient-text">Frontend</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {technicalSkills.frontend.map((skill, i) => (
                  <SkillPill key={i} skill={skill} delay={i * 50} />
                ))}
              </div>
            </GlassCard>

            {/* Backend */}
            <GlassCard hover3D glowColor="purple" className="p-8 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <FaDatabase className="text-3xl text-purple-400" />
                </div>
                <h2 className="text-3xl font-bold gradient-text">Backend</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {technicalSkills.backend.map((skill, i) => (
                  <SkillPill key={i} skill={skill} delay={i * 50} />
                ))}
              </div>
            </GlassCard>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Cloud & APIs */}
            <GlassCard hover3D glowColor="cyan" className="p-8 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-cyan-500/20 rounded-lg">
                  <FaCloud className="text-3xl text-cyan-400" />
                </div>
                <h2 className="text-3xl font-bold gradient-text">Cloud & APIs</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {technicalSkills.cloudAndAPIs.map((skill, i) => (
                  <SkillPill key={i} skill={skill} delay={i * 50} />
                ))}
              </div>
            </GlassCard>

            {/* Tools */}
            <GlassCard hover3D glowColor="green" className="p-8 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-green-500/20 rounded-lg">
                  <FaTools className="text-3xl text-green-400" />
                </div>
                <h2 className="text-3xl font-bold gradient-text">Tools</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {technicalSkills.tools.map((skill, i) => (
                  <SkillPill key={i} skill={skill} delay={i * 50} />
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Real Talk Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <GlassCard glowColor="blue" className="p-12 text-center space-y-6">
            <h2 className="text-4xl font-black gradient-text">
              The Real Story
            </h2>
            <p className="text-xl text-white/90 leading-relaxed font-medium">
              I learned most of this at P&P Optica, building real systems that process millions of pounds of food daily.
              The rest came from late nights debugging personal projects and countless Stack Overflow tabs.
            </p>
            <p className="text-lg text-white/80">
              Still learning every day. That's the whole point.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <GlassCard glowColor="blue" className="p-16 space-y-8">
            <h2 className="text-5xl font-black">
              <span className="gradient-text">Want to See</span>
              <br />
              <span className="text-white">What I've Built?</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/projects"
                className="px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white text-lg font-bold hover:scale-105 transition-all duration-300 pulse-glow"
              >
                Check Out My Projects
              </a>
              <a
                href="/blog"
                className="px-10 py-5 glass rounded-xl text-white text-lg font-bold hover:scale-105 transition-all duration-300 glow-border"
              >
                Read My Blog
              </a>
            </div>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </div>
  );
}
