"use client";

import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useTheme } from "./ThemeProvider";

export default function Footer() {
  const { darkMode } = useTheme();

  return (
    <footer className={`py-8 md:py-12 px-4 sm:px-6 border-t ${
      darkMode
        ? 'bg-gray-900/80 border-gray-700'
        : 'bg-white/80 border-blue-200'
    } backdrop-blur-sm`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Aly Sibak
            </h3>
            <p className={`text-sm md:text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Full-stack developer passionate about creating impactful solutions
            </p>
          </div>
          <div>
            <h4 className={`font-semibold mb-3 md:mb-4 text-base md:text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Quick Links
            </h4>
            <div className="space-y-2">
              <Link href="/skills" className="block text-blue-600 hover:text-blue-500 transition-colors text-sm md:text-base">Skills</Link>
              <Link href="/experience" className="block text-blue-600 hover:text-blue-500 transition-colors text-sm md:text-base">Experience</Link>
              <Link href="/projects" className="block text-blue-600 hover:text-blue-500 transition-colors text-sm md:text-base">Projects</Link>
              <Link href="/contact" className="block text-blue-600 hover:text-blue-500 transition-colors text-sm md:text-base">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className={`font-semibold mb-3 md:mb-4 text-base md:text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Connect
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/alysibak"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a
                href="https://linkedin.com/in/aly-sibak-721b85252"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a
                href="mailto:asibak@uoguelph.ca"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="Email Contact"
              >
                <FaEnvelope className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className={`mt-6 md:mt-8 pt-6 md:pt-8 border-t text-center ${
          darkMode ? 'border-gray-700 text-gray-400' : 'border-blue-200 text-gray-600'
        }`}>
          <p className="text-xs md:text-sm">Built with React, Next.js, and passion for great UX.</p>
        </div>
      </div>
    </footer>
  );
}
