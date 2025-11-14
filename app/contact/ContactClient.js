"use client";

import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ContactClient() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-semibold text-gray-900 mb-6">Contact</h1>
          <p className="text-lg text-gray-600 mb-12">
            Looking for Summer 2026 Co-op. Open to full-stack development roles.
          </p>

          <div className="space-y-4">
            <a
              href="mailto:asibak@uoguelph.ca"
              className="flex items-center gap-4 p-6 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <FaEnvelope className="text-2xl text-gray-600" />
              <div>
                <h2 className="font-semibold text-gray-900">Email</h2>
                <p className="text-gray-600">asibak@uoguelph.ca</p>
              </div>
            </a>

            <a
              href="https://github.com/alysibak"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <FaGithub className="text-2xl text-gray-600" />
              <div>
                <h2 className="font-semibold text-gray-900">GitHub</h2>
                <p className="text-gray-600">github.com/alysibak</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/alysibak"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <FaLinkedin className="text-2xl text-gray-600" />
              <div>
                <h2 className="font-semibold text-gray-900">LinkedIn</h2>
                <p className="text-gray-600">linkedin.com/in/alysibak</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
