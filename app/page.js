"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { projects } from "@/lib/data";

export default function HomePage() {
  const [expandedProject, setExpandedProject] = useState(null);

  return (
    <div className="min-h-screen animated-gradient-bg">
      <Navigation />

      {/* Hero */}
      <section className="pt-64 pb-32 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-8xl md:text-9xl font-black text-white mb-8 leading-[0.9] tracking-tight">
            Aly Sibak
          </h1>

          <p className="text-2xl md:text-3xl text-white/50 mb-20 leading-relaxed max-w-2xl font-light">
            Writing code at P&P Optica. CS student at Guelph.
          </p>

          {/* Contact Links */}
          <div className="flex gap-8 mb-40">
            <a
              href="https://github.com/alysibak"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white smooth-transition text-sm"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/aly-sibak-721b85252/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white smooth-transition text-sm"
            >
              LinkedIn
            </a>
            <a
              href="mailto:asibak@uoguelph.ca"
              className="text-white/40 hover:text-white smooth-transition text-sm"
            >
              Email
            </a>
          </div>

          {/* Featured Projects */}
          <div className="mb-40">
            <h2 className="text-sm text-white/30 mb-8 font-mono tracking-wider">SELECTED WORK</h2>
            <div className="space-y-px">
              {projects.slice(0, 3).map((project, idx) => (
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

          {/* Navigation Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px mb-32">
            <Link
              href="/experience"
              className="glass px-10 py-16 smooth-transition group hover:bg-white/5 glow-on-hover"
            >
              <div className="text-xs text-white/30 mb-3 font-mono tracking-wider">01</div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white/90">Experience</h3>
              <p className="text-sm text-white/30">Work history</p>
            </Link>

            <Link
              href="/skills"
              className="glass px-10 py-16 smooth-transition group hover:bg-white/5 glow-on-hover"
            >
              <div className="text-xs text-white/30 mb-3 font-mono tracking-wider">02</div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white/90">Skills</h3>
              <p className="text-sm text-white/30">Tech stack</p>
            </Link>

            <Link
              href="/blog"
              className="glass px-10 py-16 smooth-transition group hover:bg-white/5 glow-on-hover"
            >
              <div className="text-xs text-white/30 mb-3 font-mono tracking-wider">03</div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white/90">Writing</h3>
              <p className="text-sm text-white/30">What I've learned</p>
            </Link>
          </div>

          {/* Status */}
          <div className="pt-16 border-t border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <p className="text-sm text-white/30">Available for Summer 2026 Co-op</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
