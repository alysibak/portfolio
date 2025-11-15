"use client";

import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from "react-icons/fa";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { projects } from "@/lib/data";

export default function HomePage() {
  const [expandedProject, setExpandedProject] = useState(null);

  return (
    <div className="min-h-screen animated-gradient-bg">
      <Navigation />

      {/* Minimal Hero */}
      <section className="pt-48 pb-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-7xl md:text-8xl font-black text-white mb-6 leading-tight tracking-tight">
            Aly Sibak
          </h1>

          <p className="text-xl md:text-2xl text-white/60 mb-16 leading-relaxed max-w-2xl font-light">
            Writing code at P&P Optica. CS student at Guelph.
          </p>

          {/* Minimal Contact Links */}
          <div className="flex gap-6 mb-32">
            <a
              href="https://github.com/alysibak"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white smooth-transition text-sm font-medium"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/alysibak"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white smooth-transition text-sm font-medium"
            >
              LinkedIn
            </a>
            <a
              href="mailto:asibak@uoguelph.ca"
              className="text-white/60 hover:text-white smooth-transition text-sm font-medium"
            >
              Email
            </a>
          </div>

          {/* Minimal Project Grid */}
          <div className="space-y-px">
            {projects.slice(0, 3).map((project, idx) => (
              <div key={idx} className="glass smooth-transition">
                <button
                  onClick={() => setExpandedProject(expandedProject === idx ? null : idx)}
                  className="w-full text-left px-8 py-6 flex items-center justify-between group"
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white group-hover:text-white/90 smooth-transition">
                      {project.title}
                    </h3>
                  </div>
                  <FaChevronDown
                    className={`text-white/40 smooth-transition ${
                      expandedProject === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {expandedProject === idx && (
                  <div className="px-8 pb-6 border-t border-white/5">
                    <p className="text-white/60 mb-6 mt-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.split(', ').slice(0, 5).map((tech, i) => (
                        <span key={i} className="text-xs text-white/40 font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
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

          {/* Minimal Navigation to Other Sections */}
          <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-px">
            <Link
              href="/experience"
              className="glass px-8 py-12 smooth-transition group hover:bg-white/5"
            >
              <div className="text-sm text-white/40 mb-2 font-mono">01</div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white/90">Experience</h3>
              <p className="text-sm text-white/40">Work history</p>
            </Link>

            <Link
              href="/skills"
              className="glass px-8 py-12 smooth-transition group hover:bg-white/5"
            >
              <div className="text-sm text-white/40 mb-2 font-mono">02</div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white/90">Skills</h3>
              <p className="text-sm text-white/40">Tech stack</p>
            </Link>

            <Link
              href="/blog"
              className="glass px-8 py-12 smooth-transition group hover:bg-white/5"
            >
              <div className="text-sm text-white/40 mb-2 font-mono">03</div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white/90">Writing</h3>
              <p className="text-sm text-white/40">What I've learned</p>
            </Link>
          </div>

          {/* Status */}
          <div className="mt-20 pt-12 border-t border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <p className="text-sm text-white/40">Available for Summer 2026 Co-op</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
