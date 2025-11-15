"use client";

import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { experience } from "@/lib/data";

export default function ExperienceClient() {
  return (
    <div className="min-h-screen animated-gradient-bg">
      <Navigation />

      <section className="pt-32 pb-20 px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">Experience</h1>
          <p className="text-lg text-white/40 mb-20 max-w-xl font-light">
            Where I've worked and what I've learned.
          </p>

          <div className="space-y-16">
            {experience.map((exp, idx) => (
              <div key={idx}>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-white mb-1">{exp.title}</h2>
                  <p className="text-lg text-white/60 mb-1">{exp.company}</p>
                  <p className="text-sm text-white/30 font-mono">{exp.duration}</p>
                </div>

                <ul className="space-y-3">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-white/50 leading-relaxed pl-4 border-l border-white/10">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-24 pt-16 border-t border-white/5">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-1">University of Guelph</h2>
              <p className="text-lg text-white/60 mb-1">B.Comp (Hons), Computer Science (Co-op)</p>
              <p className="text-sm text-white/30 font-mono">Sep 2023 – Present</p>
            </div>
            <p className="text-white/50">GPA: 83% • Dean's List</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
