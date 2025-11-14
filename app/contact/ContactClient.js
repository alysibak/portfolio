"use client";

import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaRocket } from "react-icons/fa";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ContactClient() {
  return (
    <div className="min-h-screen animated-gradient-bg">
      <Navigation />

      <section className="pt-32 pb-20 px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 text-shadow">Let's Work Together</h1>
          <p className="text-xl text-white/90 mb-4 text-shadow max-w-2xl">
            Looking for Summer 2026 Co-op opportunities in full-stack development.
          </p>
          <p className="text-lg text-white/80 mb-16 text-shadow max-w-2xl">
            I ship fast, write clean code, and actually enjoy debugging. Let's build something great.
          </p>

          <div className="space-y-4 max-w-2xl">
            <a
              href="mailto:asibak@uoguelph.ca"
              className="flex items-center gap-6 p-8 glass rounded-3xl smooth-transition group"
            >
              <div className="p-4 bg-white/20 rounded-xl">
                <FaEnvelope className="text-3xl text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-white mb-1">Email</h2>
                <p className="text-white/90">asibak@uoguelph.ca</p>
              </div>
              <FaRocket className="text-white/60 group-hover:text-white group-hover:translate-x-2 smooth-transition text-2xl" />
            </a>

            <a
              href="https://github.com/alysibak"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 p-8 glass rounded-3xl smooth-transition group"
            >
              <div className="p-4 bg-white/20 rounded-xl">
                <FaGithub className="text-3xl text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-white mb-1">GitHub</h2>
                <p className="text-white/90">github.com/alysibak</p>
              </div>
              <FaRocket className="text-white/60 group-hover:text-white group-hover:translate-x-2 smooth-transition text-2xl" />
            </a>

            <a
              href="https://www.linkedin.com/in/alysibak"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 p-8 glass rounded-3xl smooth-transition group"
            >
              <div className="p-4 bg-white/20 rounded-xl">
                <FaLinkedin className="text-3xl text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-white mb-1">LinkedIn</h2>
                <p className="text-white/90">linkedin.com/in/alysibak</p>
              </div>
              <FaRocket className="text-white/60 group-hover:text-white group-hover:translate-x-2 smooth-transition text-2xl" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
