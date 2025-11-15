"use client";

import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projects } from "@/lib/data";

export default function ProjectsClient() {
  const [expandedProject, setExpandedProject] = useState(null);

  return (
    <div className="min-h-screen animated-gradient-bg">
      <Navigation />

      <section className="pt-32 pb-20 px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">Work</h1>
          <p className="text-lg text-white/40 mb-20 max-w-xl font-light">
            Projects that solve real problems.
          </p>

          <div className="space-y-px">
            {projects.map((project, idx) => (
              <div key={idx} className="glass smooth-transition">
                <button
                  onClick={() => setExpandedProject(expandedProject === idx ? null : idx)}
                  className="w-full text-left px-8 py-6 flex items-center justify-between group"
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-white/90 smooth-transition">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/40">{project.status}</p>
                  </div>
                  <div className={`text-white/40 smooth-transition ${expandedProject === idx ? 'rotate-45' : ''}`}>
                    +
                  </div>
                </button>

                {expandedProject === idx && (
                  <div className="px-8 pb-8 border-t border-white/5 pt-6">
                    <p className="text-white/60 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.split(', ').map((tech, i) => (
                        <span key={i} className="text-xs text-white/30 font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-6">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-white/60 hover:text-white smooth-transition"
                        >
                          View Live →
                        </a>
                      )}
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white/60 hover:text-white smooth-transition"
                      >
                        View Code →
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
