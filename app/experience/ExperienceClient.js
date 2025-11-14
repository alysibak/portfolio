"use client";

import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { experience } from "@/lib/data";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

export default function ExperienceClient() {
  return (
    <div className="min-h-screen animated-gradient-bg">
      <Navigation />

      <section className="pt-32 pb-20 px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 text-shadow">Experience</h1>
          <p className="text-xl text-white/90 mb-16 text-shadow max-w-2xl">
            Shipping production code and teaching the next generation of developers.
          </p>

          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <div key={idx} className="glass p-8 rounded-3xl smooth-transition">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-white/20 rounded-xl">
                    <FaBriefcase className="text-2xl text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-1">{exp.title}</h2>
                    <p className="text-lg text-white/90 font-semibold">{exp.company}</p>
                    <p className="text-sm text-white/70 mt-1">{exp.duration} • {exp.location}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-white/90 leading-relaxed pl-4 border-l-2 border-white/30 text-lg">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-12">
            <div className="glass p-8 rounded-3xl smooth-transition">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/20 rounded-xl">
                  <FaGraduationCap className="text-2xl text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">University of Guelph</h2>
                  <p className="text-lg text-white/90 font-semibold">B.Comp (Hons), Computer Science (Co-op)</p>
                  <p className="text-sm text-white/70 mt-1">Sep 2023 – Present • GPA: 83% • Dean's List</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
