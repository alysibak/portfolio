"use client";

import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { experience } from "@/lib/data";

export default function ExperienceClient() {
  return (
    <div className="min-h-screen animated-gradient-bg">
      <Navigation />

      <section className="pt-40 pb-32 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tight">Experience</h1>
          <p className="text-xl text-white/40 mb-24 max-w-xl font-light">
            Where I've worked and what I've learned.
          </p>

          <div className="space-y-20">
            {experience.map((exp, idx) => (
              <div key={idx} className="glass p-10 smooth-transition glow-on-hover">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-white mb-2">{exp.title}</h2>
                  <p className="text-xl text-white/50 mb-2">{exp.company}</p>
                  <p className="text-sm text-white/30 font-mono">{exp.duration}</p>
                </div>

                <ul className="space-y-4">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-white/50 leading-relaxed pl-6 border-l-2 border-white/10 text-lg">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-20">
            <div className="glass p-10 smooth-transition glow-on-hover">
              <div className="mb-4">
                <h2 className="text-3xl font-bold text-white mb-2">University of Guelph</h2>
                <p className="text-xl text-white/50 mb-2">B.Comp (Hons), Computer Science (Co-op)</p>
                <p className="text-sm text-white/30 font-mono">Sep 2023 – Present</p>
              </div>
              <p className="text-white/50 text-lg">GPA: 83% • Dean's List</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
