"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero */}
      <section className="pt-40 pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-gray-900 text-gray-100 text-xs font-medium rounded-full">
              Open for Summer 2026 Co-op
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Hi, I'm Aly Sibak
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed max-w-2xl">
            I'm a 3rd-year Computer Science student at University of Guelph building production systems that actually matter.
            Currently shipping code at <span className="font-semibold text-gray-900">P&P Optica</span>.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mb-16">
            <a
              href="https://github.com/alysibak"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <FaGithub />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/alysibak"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-white transition-all"
            >
              <FaLinkedin />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a
              href="mailto:asibak@uoguelph.ca"
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-white transition-all"
            >
              <FaEnvelope />
              <span className="text-sm font-medium">Email</span>
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 mb-16 pb-16 border-b border-gray-200">
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-1">250+</div>
              <div className="text-sm text-gray-600">Students Taught</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-1">6+</div>
              <div className="text-sm text-gray-600">Projects Built</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-1">83%</div>
              <div className="text-sm text-gray-600">GPA • Dean's List</div>
            </div>
          </div>

          {/* Featured Sections */}
          <div className="space-y-6">
            <Link
              href="/projects"
              className="group block p-8 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-2xl font-semibold text-gray-900">Featured Work</h2>
                <FaArrowRight className="text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" />
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Building PocketChange (fintech platform with Plaid API), 3D Fitness App, and more.
                Real projects solving real problems.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">React</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">TypeScript</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">Node.js</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">PostgreSQL</span>
              </div>
            </Link>

            <Link
              href="/experience"
              className="group block p-8 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-2xl font-semibold text-gray-900">Experience</h2>
                <FaArrowRight className="text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" />
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Software Developer at P&P Optica building hyperspectral imaging systems.
                Teaching Assistant for 250+ students in discrete mathematics.
              </p>
              <div className="text-sm text-gray-500">
                Currently working • Available Summer 2026
              </div>
            </Link>

            <Link
              href="/blog"
              className="group block p-8 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-2xl font-semibold text-gray-900">Writing</h2>
                <FaArrowRight className="text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" />
              </div>
              <p className="text-gray-600 leading-relaxed">
                Deep dives on development environments, Git workflows, and lessons learned building production software.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
