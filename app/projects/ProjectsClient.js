"use client";

import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projects } from "@/lib/data";
import { FaGithub, FaExternalLinkAlt, FaRocket } from "react-icons/fa";

export default function ProjectsClient() {
  return (
    <div className="min-h-screen animated-gradient-bg">
      <Navigation />

      <section className="pt-32 pb-20 px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 text-shadow">Projects</h1>
          <p className="text-xl text-white/90 mb-16 text-shadow max-w-2xl">
            Real products that solve real problems. Not just code—deployed solutions that people actually use.
          </p>

          <div className="space-y-6">
            {projects.map((project, idx) => (
              <div key={idx} className="glass p-8 rounded-3xl smooth-transition group">
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-3xl font-bold text-white">{project.title}</h2>
                  <span className="badge text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    {project.status}
                  </span>
                </div>

                <p className="text-white/90 mb-6 leading-relaxed text-lg">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.split(', ').map((tech, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white/20 text-white text-sm font-medium rounded-full">
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
                      className="inline-flex items-center gap-2 px-5 py-2.5 glossy-button text-white font-semibold rounded-xl smooth-transition text-sm"
                    >
                      <FaRocket />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 glossy-button text-white font-semibold rounded-xl smooth-transition text-sm"
                  >
                    <FaGithub />
                    View Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
