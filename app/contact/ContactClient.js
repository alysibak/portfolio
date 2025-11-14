"use client";

import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaCalendarCheck, FaDownload } from "react-icons/fa";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";

export default function ContactClient() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl sm:text-7xl font-black gradient-text mb-6">
            Let's Talk
          </h1>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto font-medium">
            Shoot me an email, connect on LinkedIn, or check out my code. I'm looking for Summer 2026 Co-op.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info Card */}
            <GlassCard hover3D glowColor="blue" className="p-10 space-y-8">
              <h2 className="text-3xl font-black gradient-text mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6">
                {/* Email */}
                <a
                  href="mailto:asibak@uoguelph.ca"
                  className="flex items-center gap-4 p-4 glass rounded-lg hover:scale-105 transition-all duration-300 group"
                >
                  <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                    <FaEnvelope className="text-2xl text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white/90 font-semibold text-sm">Email</h3>
                    <p className="text-white font-bold text-lg">asibak@uoguelph.ca</p>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/alysibak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glass rounded-lg hover:scale-105 transition-all duration-300 group"
                >
                  <div className="p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                    <FaGithub className="text-2xl text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-white/90 font-semibold text-sm">GitHub</h3>
                    <p className="text-white font-bold text-lg">github.com/alysibak</p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/alysibak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glass rounded-lg hover:scale-105 transition-all duration-300 group"
                >
                  <div className="p-3 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-colors">
                    <FaLinkedin className="text-2xl text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white/90 font-semibold text-sm">LinkedIn</h3>
                    <p className="text-white font-bold text-lg">Connect with me</p>
                  </div>
                </a>
              </div>
            </GlassCard>

            {/* Availability Card */}
            <GlassCard hover3D glowColor="green" className="p-10 space-y-8">
              <h2 className="text-3xl font-black gradient-text mb-8">
                Availability
              </h2>

              <div className="space-y-6">
                {/* Status */}
                <div className="flex items-center gap-4 p-4 bg-green-500/20 rounded-lg border border-green-400/30">
                  <div className="p-3 bg-green-500/20 rounded-lg">
                    <FaCalendarCheck className="text-2xl text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-white/90 font-semibold text-sm">Status</h3>
                    <p className="text-white font-bold text-lg">Open to Opportunities</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 glass rounded-lg">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <FaMapMarkerAlt className="text-2xl text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white/90 font-semibold text-sm">Location</h3>
                    <p className="text-white font-bold text-lg">Guelph, ON, Canada</p>
                  </div>
                </div>

                {/* Resume Download */}
                <a
                  href="/AlySibakResume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg group"
                >
                  <FaDownload className="text-xl text-white group-hover:animate-bounce" />
                  <span className="text-white font-bold text-lg">Download Resume</span>
                </a>
              </div>

              <div className="pt-6 border-t border-white/10">
                <p className="text-white/80 text-sm leading-relaxed">
                  <strong className="text-white/90">Seeking:</strong> Summer 2026 Co-op position in full-stack development, AI integration, or software engineering
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Why Contact Me */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black gradient-text text-center mb-16">
            What You Get
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <GlassCard hover3D glowColor="blue" className="p-8 space-y-4 text-center">
              <div className="text-5xl font-black gradient-text">1</div>
              <h3 className="text-2xl font-bold text-white">Production Experience</h3>
              <p className="text-white/80 font-medium">
                Built real systems at P&P Optica processing millions of pounds of food daily. Not just toy projects.
              </p>
            </GlassCard>

            <GlassCard hover3D glowColor="cyan" className="p-8 space-y-4 text-center">
              <div className="text-5xl font-black gradient-text">2</div>
              <h3 className="text-2xl font-bold text-white">Fast Learner</h3>
              <p className="text-white/80 font-medium">
                Learned React, TypeScript, AWS, and PostgreSQL on the job. Give me a tech stack, I'll figure it out.
              </p>
            </GlassCard>

            <GlassCard hover3D glowColor="purple" className="p-8 space-y-4 text-center">
              <div className="text-5xl font-black gradient-text">3</div>
              <h3 className="text-2xl font-bold text-white">Clear Communicator</h3>
              <p className="text-white/80 font-medium">
                Taught 250+ students discrete math. If I can explain proofs, I can explain code.
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
              <span className="gradient-text">I'm Just</span>
              <br />
              <span className="text-white">An Email Away</span>
            </h2>
            <p className="text-xl text-white/90 font-medium max-w-2xl mx-auto">
              Got a co-op position? Want to chat about tech? Need help with a project?
              Just want to talk about soccer? Hit me up.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:asibak@uoguelph.ca"
                className="px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white text-lg font-bold hover:scale-105 transition-all duration-300 pulse-glow"
              >
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/alysibak"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 glass rounded-xl text-white text-lg font-bold hover:scale-105 transition-all duration-300 glow-border flex items-center justify-center gap-2"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
            </div>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </div>
  );
}
