"use client";

import React, { useState, useEffect, useCallback } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaCode, FaBriefcase, FaRocket, FaComments, FaChevronDown, FaPlay, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import { useTheme } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TypewriterText = ({ texts, className }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];

      if (isDeleting) {
        setCurrentText(prev => prev.slice(0, -1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setCurrentText(current.slice(0, currentText.length + 1));
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const ParallaxSection = ({ children, offset = 0.5 }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        transform: `translateY(${scrollY * offset}px)`,
        transition: 'transform 0.1s ease-out'
      }}
    >
      {children}
    </div>
  );
};

const MetricCard = ({ number, label, suffix = "", darkMode }) => (
  <div className={`text-center p-3 sm:p-4 xl:p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
    darkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-white/50 border border-blue-200'
  } backdrop-blur-sm`}>
    <div className="text-2xl sm:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
      {number}{suffix}
    </div>
    <div className={`text-xs sm:text-sm xl:text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'} leading-tight mt-1`}>{label}</div>
  </div>
);

export default function HomePage() {
  const { darkMode } = useTheme();

  const heroTexts = [
    "Full-Stack Developer",
    "Problem Solver",
    "Tech Innovator",
    "AI Enthusiast"
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode
        ? "bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white"
        : "bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 text-gray-900"
    }`}>
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative" style={{ zIndex: 1 }}>
        <div className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl w-full text-center relative">
          <ParallaxSection offset={0.2}>
            <div className="mb-6 md:mb-8 xl:mb-10">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 xl:w-56 xl:h-56 2xl:w-64 2xl:h-64 mx-auto rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 p-1">
                <Image
                  src="/profile.jpeg"
                  alt="Aly Sibak - Full Stack Developer"
                  width={256}
                  height={256}
                  className="w-full h-full rounded-full object-cover"
                  priority
                />
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-extrabold mb-4 md:mb-6 xl:mb-8 bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent leading-tight">
              Aly Sibak
            </h1>

            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-6 md:mb-8 xl:mb-10 h-12 sm:h-14 md:h-16 xl:h-20 2xl:h-24">
              <TypewriterText
                texts={heroTexts}
                className={darkMode ? 'text-gray-200' : 'text-gray-700'}
              />
            </div>

            <p className={`text-base sm:text-lg md:text-xl xl:text-2xl max-w-3xl xl:max-w-4xl mx-auto mb-8 md:mb-10 xl:mb-12 leading-relaxed px-4 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              3rd-year Computer Science Co-op student at University of Guelph with proven industry experience
              building AI-powered hyperspectral imaging systems at P&P Optica. Passionate about creating scalable
              web applications that solve real-world problems.
            </p>
          </ParallaxSection>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 xl:gap-8 justify-center mb-10 md:mb-12 xl:mb-16 px-4" style={{ position: 'relative', zIndex: 10 }}>
            <a
              href="/AlySibakResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-blue-600 to-cyan-600 px-6 sm:px-8 xl:px-10 py-3 sm:py-4 xl:py-5 rounded-xl text-white hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2 sm:space-x-3 text-sm sm:text-base xl:text-lg font-semibold min-w-max"
            >
              <FaDownload className="group-hover:animate-bounce text-sm sm:text-base xl:text-lg" />
              <span>Download Resume</span>
            </a>
            <a
              href="/projects"
              className={`group border-2 px-6 sm:px-8 xl:px-10 py-3 sm:py-4 xl:py-5 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 sm:space-x-3 text-sm sm:text-base xl:text-lg min-w-max ${
                darkMode
                  ? 'border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white'
                  : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
              }`}
            >
              <FaPlay className="group-hover:translate-x-1 transition-transform text-sm sm:text-base xl:text-lg" />
              <span>View My Work</span>
            </a>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 xl:gap-6 mb-8 md:mb-10 xl:mb-12 px-4 max-w-4xl xl:max-w-5xl mx-auto">
            <MetricCard number="6" suffix="+" label="Projects Completed" darkMode={darkMode} />
            <MetricCard number="250" suffix="+" label="Students Helped" darkMode={darkMode} />
            <MetricCard number="83" suffix="%" label="Current GPA" darkMode={darkMode} />
            <MetricCard number="1" label="Co-op Completed" darkMode={darkMode} />
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center mt-8 md:mt-10">
            <div className="animate-bounce">
              <FaChevronDown className={`text-xl md:text-2xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section id="highlights" className="py-12 md:py-16 xl:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl xl:max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-center mb-6 md:mb-8 xl:mb-12 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Experience Highlights
          </h2>
          <p className={`text-lg sm:text-xl xl:text-2xl text-center mb-12 md:mb-16 xl:mb-20 px-4 max-w-4xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Real impact from professional software development and academic excellence
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 xl:gap-16">
            {/* P&P Optica Highlight */}
            <div className={`p-6 md:p-8 xl:p-10 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
              darkMode
                ? 'bg-gray-800/80 border-gray-700 hover:border-blue-500'
                : 'bg-white/80 border-blue-200 hover:border-blue-400'
            } backdrop-blur-sm shadow-xl hover:shadow-2xl`}>
              <div className="flex items-center gap-4 xl:gap-6 mb-6 xl:mb-8">
                <div className="p-3 md:p-4 xl:p-5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white flex-shrink-0">
                  <FaBriefcase className="text-xl md:text-2xl xl:text-3xl" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl md:text-2xl xl:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    P&P Optica
                  </h3>
                  <p className={`text-sm md:text-base xl:text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Software Developer Co-op</p>
                </div>
              </div>
              <div className="space-y-3 md:space-y-4 xl:space-y-5">
                <div className="flex items-start gap-3 xl:gap-4">
                  <span className="text-green-500 text-lg md:text-xl xl:text-2xl flex-shrink-0">✓</span>
                  <p className={`text-sm md:text-base xl:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                    Built AI-powered food safety systems using React, TypeScript, and AWS
                  </p>
                </div>
                <div className="flex items-start gap-3 xl:gap-4">
                  <span className="text-green-500 text-lg md:text-xl xl:text-2xl flex-shrink-0">✓</span>
                  <p className={`text-sm md:text-base xl:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                    Improved deployment speed and system reliability through automation
                  </p>
                </div>
                <div className="flex items-start gap-3 xl:gap-4">
                  <span className="text-green-500 text-lg md:text-xl xl:text-2xl flex-shrink-0">✓</span>
                  <p className={`text-sm md:text-base xl:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                    Reduced new team member onboarding time with better documentation
                  </p>
                </div>
              </div>
            </div>

            {/* Academic Excellence */}
            <div className={`p-6 md:p-8 xl:p-10 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
              darkMode
                ? 'bg-gray-800/80 border-gray-700 hover:border-cyan-500'
                : 'bg-white/80 border-blue-200 hover:border-cyan-400'
            } backdrop-blur-sm shadow-xl hover:shadow-2xl`}>
              <div className="flex items-center gap-4 xl:gap-6 mb-6 xl:mb-8">
                <div className="p-3 md:p-4 xl:p-5 rounded-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white flex-shrink-0">
                  <FaCode className="text-xl md:text-2xl xl:text-3xl" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl md:text-2xl xl:text-3xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
                    Academic Excellence
                  </h3>
                  <p className={`text-sm md:text-base xl:text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>University of Guelph</p>
                </div>
              </div>
              <div className="space-y-3 md:space-y-4 xl:space-y-5">
                <div className="flex items-start gap-3 xl:gap-4">
                  <span className="text-green-500 text-lg md:text-xl xl:text-2xl flex-shrink-0">✓</span>
                  <p className={`text-sm md:text-base xl:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                    Maintaining 83% GPA while taking advanced CS courses
                  </p>
                </div>
                <div className="flex items-start gap-3 xl:gap-4">
                  <span className="text-green-500 text-lg md:text-xl xl:text-2xl flex-shrink-0">✓</span>
                  <p className={`text-sm md:text-base xl:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                    Teaching Assistant helping 250+ students in discrete mathematics
                  </p>
                </div>
                <div className="flex items-start gap-3 xl:gap-4">
                  <span className="text-green-500 text-lg md:text-xl xl:text-2xl flex-shrink-0">✓</span>
                  <p className={`text-sm md:text-base xl:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                    Built multiple full-stack applications and enterprise-level projects
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 md:mt-16 xl:mt-20">
            <a
              href="/experience"
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 md:px-10 xl:px-12 py-3 md:py-4 xl:py-5 rounded-xl text-white hover:scale-105 transition-all duration-300 shadow-lg font-semibold inline-block text-sm md:text-base xl:text-lg"
            >
              View Full Experience
            </a>
          </div>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="py-16 md:py-20 xl:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl xl:max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-center mb-8 md:mb-12 xl:mb-16 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Explore My Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 xl:gap-10 max-w-5xl xl:max-w-6xl mx-auto">
            {/* Technical Skills Card */}
            <a
              href="/skills"
              className={`group relative p-6 md:p-8 xl:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 hover:scale-110 overflow-hidden cursor-pointer transform-gpu ${
                darkMode
                  ? 'bg-gray-800/90 border-gray-600 hover:border-blue-400 hover:bg-gray-700'
                  : 'bg-white/90 border-blue-300 hover:border-blue-500 hover:bg-blue-50'
              } backdrop-blur-sm ring-2 ring-transparent hover:ring-blue-500/30`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 text-center">
                <div className="mb-4 xl:mb-6 flex justify-center">
                  <div className="p-3 xl:p-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white group-hover:scale-110 transition-transform duration-300">
                    <FaCode className="text-2xl md:text-3xl xl:text-4xl" />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl xl:text-2xl font-bold mb-2 xl:mb-3 text-blue-600 group-hover:text-blue-500">Technical Skills</h3>
                <p className={`mb-4 xl:mb-6 text-sm md:text-base xl:text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'} group-hover:text-current`}>
                  React, TypeScript, Java, and more
                </p>
                <div className="flex items-center justify-center text-blue-600 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="mr-2 text-sm xl:text-base font-medium">Click to explore</span>
                  <FaExternalLinkAlt className="text-xs xl:text-sm" />
                </div>
              </div>
            </a>

            {/* Experience Card */}
            <a
              href="/experience"
              className={`group relative p-6 md:p-8 xl:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 hover:scale-110 overflow-hidden cursor-pointer transform-gpu ${
                darkMode
                  ? 'bg-gray-800/90 border-gray-600 hover:border-cyan-400 hover:bg-gray-700'
                  : 'bg-white/90 border-cyan-300 hover:border-cyan-500 hover:bg-cyan-50'
              } backdrop-blur-sm ring-2 ring-transparent hover:ring-cyan-500/30`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 text-center">
                <div className="mb-4 xl:mb-6 flex justify-center">
                  <div className="p-3 xl:p-4 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white group-hover:scale-110 transition-transform duration-300">
                    <FaBriefcase className="text-2xl md:text-3xl xl:text-4xl" />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl xl:text-2xl font-bold mb-2 xl:mb-3 text-cyan-600 group-hover:text-cyan-500">Experience</h3>
                <p className={`mb-4 xl:mb-6 text-sm md:text-base xl:text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'} group-hover:text-current`}>
                  Software development at P&P Optica
                </p>
                <div className="flex items-center justify-center text-cyan-600 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="mr-2 text-sm xl:text-base font-medium">Click to explore</span>
                  <FaExternalLinkAlt className="text-xs xl:text-sm" />
                </div>
              </div>
            </a>

            {/* Projects Card */}
            <a
              href="/projects"
              className={`group relative p-6 md:p-8 xl:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 hover:scale-110 overflow-hidden cursor-pointer transform-gpu ${
                darkMode
                  ? 'bg-gray-800/90 border-gray-600 hover:border-purple-400 hover:bg-gray-700'
                  : 'bg-white/90 border-purple-300 hover:border-purple-500 hover:bg-purple-50'
              } backdrop-blur-sm ring-2 ring-transparent hover:ring-purple-500/30`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 text-center">
                <div className="mb-4 xl:mb-6 flex justify-center">
                  <div className="p-3 xl:p-4 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white group-hover:scale-110 transition-transform duration-300">
                    <FaRocket className="text-2xl md:text-3xl xl:text-4xl" />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl xl:text-2xl font-bold mb-2 xl:mb-3 text-purple-600 group-hover:text-purple-500">Projects</h3>
                <p className={`mb-4 xl:mb-6 text-sm md:text-base xl:text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'} group-hover:text-current`}>
                  Full-stack applications and solutions
                </p>
                <div className="flex items-center justify-center text-purple-600 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="mr-2 text-sm xl:text-base font-medium">Click to explore</span>
                  <FaExternalLinkAlt className="text-xs xl:text-sm" />
                </div>
              </div>
            </a>

            {/* Contact Card */}
            <a
              href="/contact"
              className={`group relative p-6 md:p-8 xl:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 hover:scale-110 overflow-hidden cursor-pointer transform-gpu ${
                darkMode
                  ? 'bg-gray-800/90 border-gray-600 hover:border-pink-400 hover:bg-gray-700'
                  : 'bg-white/90 border-pink-300 hover:border-pink-500 hover:bg-pink-50'
              } backdrop-blur-sm ring-2 ring-transparent hover:ring-pink-500/30`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 text-center">
                <div className="mb-4 xl:mb-6 flex justify-center">
                  <div className="p-3 xl:p-4 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 text-white group-hover:scale-110 transition-transform duration-300">
                    <FaComments className="text-2xl md:text-3xl xl:text-4xl" />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl xl:text-2xl font-bold mb-2 xl:mb-3 text-pink-600 group-hover:text-pink-500">Contact</h3>
                <p className={`mb-4 xl:mb-6 text-sm md:text-base xl:text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'} group-hover:text-current`}>
                  Available for Summer 2026 Co-op
                </p>
                <div className="flex items-center justify-center text-pink-600 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="mr-2 text-sm xl:text-base font-medium">Click to explore</span>
                  <FaExternalLinkAlt className="text-xs xl:text-sm" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
