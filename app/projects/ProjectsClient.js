"use client";

import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projects } from "@/lib/data";
import { FaChevronDown } from "react-icons/fa";

export default function ProjectsClient() {
  const [expandedProject, setExpandedProject] = useState(null);

  return (
    <div className="min-h-screen animated-gradient-bg">
      <Navigation />

      <section className="pt-40 pb-32 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tight">Work</h1>
          <p className="text-xl text-white/40 mb-24 max-w-xl font-light">
            Things I've built.
          </p>

          <div className="space-y-px">
            {projects.map((project, idx) => (
              <div key={idx} className="glass smooth-transition glow-on-hover">
                <button
                  onClick={() => setExpandedProject(expandedProject === idx ? null : idx)}
                  className="w-full text-left px-10 py-8 flex items-center justify-between group"
                >
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-white/90 smooth-transition">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/30 font-mono">{project.status}</p>
                  </div>
                  <FaChevronDown
                    className={`text-white/30 smooth-transition text-sm ${
                      expandedProject === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {expandedProject === idx && (
                  <div className="px-10 pb-10 border-t border-white/5 pt-8">
                    <p className="text-white/50 mb-8 leading-relaxed text-lg">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
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
                          className="text-sm text-white/50 hover:text-white smooth-transition"
                        >
                          View Live →
                        </a>
                      )}
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white/50 hover:text-white smooth-transition"
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
