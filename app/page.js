"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero - Super Simple */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-semibold text-gray-900 mb-6">
            Aly Sibak
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            3rd-year Computer Science student at University of Guelph. Building production systems at P&P Optica.
            Looking for Summer 2026 Co-op.
          </p>

          {/* Links */}
          <div className="flex gap-4 mb-12">
            <a
              href="https://github.com/alysibak"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/alysibak"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="mailto:asibak@uoguelph.ca"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <FaEnvelope className="text-2xl" />
            </a>
          </div>

          {/* Quick Nav */}
          <div className="space-y-6">
            <Link
              href="/projects"
              className="block p-6 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Projects</h2>
              <p className="text-gray-600">
                PocketChange, 3D Fitness App, Portfolio Manager, and more
              </p>
            </Link>

            <Link
              href="/experience"
              className="block p-6 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Experience</h2>
              <p className="text-gray-600">
                Software Developer at P&P Optica, Teaching Assistant at UoG
              </p>
            </Link>

            <Link
              href="/blog"
              className="block p-6 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Writing</h2>
              <p className="text-gray-600">
                Dev environments, Git workflows, and lessons learned
              </p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
