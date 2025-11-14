"use client";

import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import { projects } from "@/lib/data";
import { FaGithub, FaExternalLinkAlt, FaCode, FaRocket } from "react-icons/fa";

export default function ProjectsClient() {
  const glowColors = ["blue", "purple", "cyan", "green"];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl sm:text-7xl font-black gradient-text mb-6">
            Featured Projects
          </h1>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto font-medium">
            Real-world applications built with modern technologies
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <GlassCard
                key={idx}
                hover3D
                glowColor={glowColors[idx % glowColors.length]}
                delay={idx * 0.1}
                className="p-8 flex flex-col"
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="px-4 py-1.5 bg-purple-500/20 text-purple-300 rounded-full text-xs font-bold border border-purple-400/30 inline-block mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-3xl font-black gradient-text mb-2">
                      {project.title}
                    </h3>
                  </div>
                  <span className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap ${
                    project.status === 'Completed'
                      ? 'bg-green-500/20 text-green-300 border border-green-400/30'
                      : 'bg-blue-500/20 text-blue-300 border border-blue-400/30'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-white/90 text-lg leading-relaxed mb-6 font-medium flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <p className="text-white/90 font-semibold mb-3 flex items-center gap-2">
                    <FaCode className="text-blue-400" />
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.split(', ').map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-blue-500/20 text-blue-300 rounded-lg text-sm font-medium border border-blue-400/20 hover:scale-110 transition-transform"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* GitHub Link */}
                <div className="flex gap-3">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 rounded-lg text-white font-bold hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    <FaGithub className="text-lg" />
                    <span>View Code</span>
                  </a>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black gradient-text text-center mb-16">
            Development Highlights
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <GlassCard hover3D glowColor="blue" className="p-8 text-center space-y-4">
              <div className="flex justify-center">
                <div className="p-4 bg-blue-500/20 rounded-full">
                  <FaRocket className="text-4xl text-blue-400" />
                </div>
              </div>
              <div className="text-4xl font-black gradient-text">6+</div>
              <div className="text-white/90 font-semibold">
                Projects Completed
              </div>
              <p className="text-white/70 text-sm">
                Full-stack applications and solutions
              </p>
            </GlassCard>

            <GlassCard hover3D glowColor="cyan" className="p-8 text-center space-y-4">
              <div className="flex justify-center">
                <div className="p-4 bg-cyan-500/20 rounded-full">
                  <FaCode className="text-4xl text-cyan-400" />
                </div>
              </div>
              <div className="text-4xl font-black gradient-text">10+</div>
              <div className="text-white/90 font-semibold">
                Technologies Used
              </div>
              <p className="text-white/70 text-sm">
                Modern frameworks and tools
              </p>
            </GlassCard>

            <GlassCard hover3D glowColor="purple" className="p-8 text-center space-y-4">
              <div className="flex justify-center">
                <div className="p-4 bg-purple-500/20 rounded-full">
                  <FaExternalLinkAlt className="text-4xl text-purple-400" />
                </div>
              </div>
              <div className="text-4xl font-black gradient-text">100%</div>
              <div className="text-white/90 font-semibold">
                Open Source
              </div>
              <p className="text-white/70 text-sm">
                All projects on GitHub
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <GlassCard glowColor="blue" className="p-16 text-center space-y-8">
            <h2 className="text-5xl font-black">
              <span className="gradient-text">Let's Build</span>
              <br />
              <span className="text-white">Your Next Project</span>
            </h2>
            <p className="text-xl text-white/90 font-medium max-w-2xl mx-auto">
              I'm always excited to work on new challenges and innovative solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white text-lg font-bold hover:scale-105 transition-all duration-300 pulse-glow"
              >
                Start a Conversation
              </a>
              <a
                href="https://github.com/alysibak"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 glass rounded-xl text-white text-lg font-bold hover:scale-105 transition-all duration-300 glow-border flex items-center justify-center gap-2"
              >
                <FaGithub />
                <span>View All Projects</span>
              </a>
            </div>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </div>
  );
}
