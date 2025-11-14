"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaRocket, FaCode, FaBriefcase } from "react-icons/fa";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen animated-gradient-bg">
      <Navigation />

      {/* Hero */}
      <section className="pt-40 pb-32 px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 floating">
            <span className="inline-block px-4 py-2 badge text-white text-sm font-semibold rounded-full">
              🚀 Available for Summer 2026 Co-op
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black text-white mb-8 leading-tight text-shadow">
            Hi, I'm <span className="gradient-text">Aly Sibak</span>
          </h1>

          <p className="text-2xl md:text-3xl text-white/90 mb-12 leading-relaxed max-w-3xl text-shadow">
            I build production systems that process millions of pounds of food daily.
            3rd-year CS student who ships real code at
            <span className="font-bold text-white"> P&P Optica</span>.
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href="https://github.com/alysibak"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 glossy-button text-white font-semibold rounded-xl smooth-transition"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/alysibak"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 glossy-button text-white font-semibold rounded-xl smooth-transition"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:asibak@uoguelph.ca"
              className="inline-flex items-center gap-2 px-6 py-3 glossy-button text-white font-semibold rounded-xl smooth-transition"
            >
              <FaEnvelope />
              <span>Email</span>
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 mb-20">
            <div className="glass p-6 rounded-2xl smooth-transition">
              <div className="text-4xl font-black text-white mb-2">250+</div>
              <div className="text-sm text-white/80 font-medium">Students Mentored</div>
            </div>
            <div className="glass p-6 rounded-2xl smooth-transition">
              <div className="text-4xl font-black text-white mb-2">6+</div>
              <div className="text-sm text-white/80 font-medium">Real Projects</div>
            </div>
            <div className="glass p-6 rounded-2xl smooth-transition">
              <div className="text-4xl font-black text-white mb-2">83%</div>
              <div className="text-sm text-white/80 font-medium">GPA • Dean's List</div>
            </div>
          </div>

          {/* Featured Sections */}
          <div className="space-y-6">
            <Link
              href="/projects"
              className="group block glass p-8 rounded-3xl smooth-transition shimmer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white/20 rounded-xl">
                    <FaRocket className="text-2xl text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Featured Work</h2>
                </div>
                <FaArrowRight className="text-white/60 group-hover:text-white group-hover:translate-x-2 smooth-transition text-xl mt-2" />
              </div>
              <p className="text-white/90 leading-relaxed mb-6 text-lg">
                Building PocketChange—a fintech platform with Plaid API integration.
                Plus a 3D Fitness App mapping muscle groups, and production-ready portfolio managers.
                Not school projects. Real solutions.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-white/20 text-white text-sm font-medium rounded-full">React</span>
                <span className="px-4 py-2 bg-white/20 text-white text-sm font-medium rounded-full">TypeScript</span>
                <span className="px-4 py-2 bg-white/20 text-white text-sm font-medium rounded-full">Node.js</span>
                <span className="px-4 py-2 bg-white/20 text-white text-sm font-medium rounded-full">PostgreSQL</span>
                <span className="px-4 py-2 bg-white/20 text-white text-sm font-medium rounded-full">AWS</span>
              </div>
            </Link>

            <Link
              href="/experience"
              className="group block glass p-8 rounded-3xl smooth-transition"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white/20 rounded-xl">
                    <FaBriefcase className="text-2xl text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Where I Work</h2>
                </div>
                <FaArrowRight className="text-white/60 group-hover:text-white group-hover:translate-x-2 smooth-transition text-xl mt-2" />
              </div>
              <p className="text-white/90 leading-relaxed mb-4 text-lg">
                Shipping code at P&P Optica—building hyperspectral imaging systems that detect food contamination.
                Taught 250+ students discrete mathematics. Cut deployment times by 75%.
              </p>
              <div className="text-sm text-white/70 font-medium">
                Currently working • Open to Summer 2026 opportunities
              </div>
            </Link>

            <Link
              href="/blog"
              className="group block glass p-8 rounded-3xl smooth-transition"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white/20 rounded-xl">
                    <FaCode className="text-2xl text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Writing</h2>
                </div>
                <FaArrowRight className="text-white/60 group-hover:text-white group-hover:translate-x-2 smooth-transition text-xl mt-2" />
              </div>
              <p className="text-white/90 leading-relaxed text-lg">
                Deep dives on dev environments that don't suck, Git workflows that actually work,
                and hard-won lessons from shipping production software.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
