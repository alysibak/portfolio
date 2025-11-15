"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaArrowRight } from "react-icons/fa";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { projects } from "@/lib/data";

export default function HomePage() {
  const [expandedProject, setExpandedProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const navGridRef = useRef(null);

  // Smooth scroll-triggered animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.reveal-on-scroll');
    elementsToAnimate.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${scrolled * 0.4}px)`;
        heroRef.current.style.opacity = 1 - (scrolled / 600);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse tracking for magnetic effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen animated-gradient-bg">
      <Navigation />

      {/* Hero */}
      <section className="pt-48 md:pt-64 pb-32 px-6 relative z-10 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="relative" ref={heroRef}>
            {/* Floating gradient orbs */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl floating"></div>
            <div className="absolute -top-10 right-0 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl floating" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-40 left-1/3 w-56 h-56 bg-emerald-500/10 rounded-full blur-3xl floating" style={{animationDelay: '2s'}}></div>

            {/* Name - staggered animation */}
            <div className="mb-12 reveal-on-scroll stagger-1">
              <h1 className="text-7xl md:text-9xl lg:text-[11rem] font-black mb-4 leading-[0.85] tracking-tighter relative z-10">
                <span className="gradient-text inline-block">Aly Sibak</span>
              </h1>
            </div>

            {/* Tagline */}
            <div className="reveal-on-scroll stagger-2 mb-16">
              <p className="text-2xl md:text-4xl lg:text-5xl text-white/80 leading-relaxed max-w-4xl font-light relative z-10">
                Building exceptional digital experiences.
              </p>
            </div>

            {/* Description */}
            <div className="reveal-on-scroll stagger-3 mb-20">
              <p className="text-lg md:text-xl text-white/50 leading-relaxed max-w-2xl font-light relative z-10">
                Software Engineer at <span className="text-cyan-400 font-medium">P&P Optica</span>
                {" • "}
                Computer Science @ <span className="text-sky-400 font-medium">University of Guelph</span>
              </p>
            </div>
          </div>

          {/* Contact Links - Magnetic buttons */}
          <div className="flex flex-wrap gap-6 mb-48 reveal-on-scroll stagger-4">
            <a
              href="https://github.com/alysibak"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-link glass px-8 py-4 rounded-full text-white/70 hover:text-white smooth-transition border border-white/10 hover:border-sky-400/50 group"
            >
              <span className="flex items-center gap-2">
                GitHub
                <FaArrowRight className="text-xs group-hover:translate-x-1 smooth-transition" />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/aly-sibak-721b85252/"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-link glass px-8 py-4 rounded-full text-white/70 hover:text-white smooth-transition border border-white/10 hover:border-cyan-400/50 group"
            >
              <span className="flex items-center gap-2">
                LinkedIn
                <FaArrowRight className="text-xs group-hover:translate-x-1 smooth-transition" />
              </span>
            </a>
            <a
              href="mailto:asibak@uoguelph.ca"
              className="magnetic-link cta-button px-8 py-4 rounded-full text-white font-medium smooth-transition group shadow-lg shadow-sky-500/20"
            >
              <span className="flex items-center gap-2">
                Get in Touch
                <FaArrowRight className="text-xs group-hover:translate-x-1 smooth-transition" />
              </span>
            </a>
          </div>

          {/* Featured Projects */}
          <div className="mb-48" ref={projectsRef}>
            <div className="flex items-center gap-4 mb-12 reveal-on-scroll">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400 animate-pulse"></div>
              <h2 className="text-base md:text-lg text-white/50 font-mono tracking-widest uppercase">Selected Work</h2>
            </div>

            <div className="space-y-6">
              {projects.slice(0, 3).map((project, idx) => (
                <div
                  key={idx}
                  className="glass smooth-transition glow-on-hover shimmer reveal-on-scroll rounded-2xl overflow-hidden group"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <button
                    onClick={() => setExpandedProject(expandedProject === idx ? null : idx)}
                    className="w-full text-left px-8 md:px-12 py-10 md:py-12 flex items-center justify-between group"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-xs text-sky-400/60 font-mono">0{idx + 1}</span>
                        <div className="h-px flex-1 bg-gradient-to-r from-sky-400/20 to-transparent"></div>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 group-hover:text-sky-300 smooth-transition">
                        {project.title}
                      </h3>
                      <p className="text-sm md:text-base text-sky-300/60 font-mono">{project.status}</p>
                    </div>
                    <FaChevronDown
                      className={`text-sky-300/40 smooth-transition text-lg ml-4 ${
                        expandedProject === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {expandedProject === idx && (
                    <div className="px-8 md:px-12 pb-10 md:pb-12 border-t border-white/5 pt-10 animate-slide-down">
                      <p className="text-white/60 mb-10 leading-relaxed text-base md:text-lg max-w-3xl">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-3 mb-10">
                        {project.techStack.split(', ').map((tech, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white/40 font-mono hover:border-sky-400/30 smooth-transition"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-6">
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm md:text-base text-white/60 hover:text-sky-300 smooth-transition flex items-center gap-2 group"
                          >
                            View Live
                            <FaArrowRight className="text-xs group-hover:translate-x-1 smooth-transition" />
                          </a>
                        )}
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm md:text-base text-white/60 hover:text-cyan-300 smooth-transition flex items-center gap-2 group"
                        >
                          View Code
                          <FaArrowRight className="text-xs group-hover:translate-x-1 smooth-transition" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* View All Projects Link */}
            <div className="mt-12 reveal-on-scroll">
              <Link
                href="/projects"
                className="inline-flex items-center gap-3 text-white/50 hover:text-white smooth-transition group"
              >
                <span className="text-base font-medium">View All Projects</span>
                <FaArrowRight className="text-sm group-hover:translate-x-2 smooth-transition" />
              </Link>
            </div>
          </div>

          {/* Navigation Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-48" ref={navGridRef}>
            <Link
              href="/experience"
              className="glass px-10 md:px-12 py-20 md:py-24 smooth-transition group glow-on-hover relative overflow-hidden reveal-on-scroll rounded-2xl stagger-1"
            >
              <div className="absolute top-6 right-6 text-7xl md:text-8xl text-sky-500/5 font-black group-hover:text-sky-500/10 smooth-transition">01</div>
              <div className="relative z-10">
                <div className="text-xs text-sky-300/60 mb-4 font-mono tracking-widest uppercase">Experience</div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-sky-300 smooth-transition">Work History</h3>
                <p className="text-sm md:text-base text-white/40 mb-6">Building at P&P Optica</p>
                <div className="flex items-center gap-2 text-sky-400/60 group-hover:text-sky-400 smooth-transition">
                  <span className="text-sm">Explore</span>
                  <FaArrowRight className="text-xs group-hover:translate-x-1 smooth-transition" />
                </div>
              </div>
            </Link>

            <Link
              href="/skills"
              className="glass px-10 md:px-12 py-20 md:py-24 smooth-transition group glow-on-hover relative overflow-hidden reveal-on-scroll rounded-2xl stagger-2"
            >
              <div className="absolute top-6 right-6 text-7xl md:text-8xl text-cyan-500/5 font-black group-hover:text-cyan-500/10 smooth-transition">02</div>
              <div className="relative z-10">
                <div className="text-xs text-cyan-300/60 mb-4 font-mono tracking-widest uppercase">Skills</div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-cyan-300 smooth-transition">Tech Stack</h3>
                <p className="text-sm md:text-base text-white/40 mb-6">React • TypeScript • AWS</p>
                <div className="flex items-center gap-2 text-cyan-400/60 group-hover:text-cyan-400 smooth-transition">
                  <span className="text-sm">Explore</span>
                  <FaArrowRight className="text-xs group-hover:translate-x-1 smooth-transition" />
                </div>
              </div>
            </Link>

            <Link
              href="/blog"
              className="glass px-10 md:px-12 py-20 md:py-24 smooth-transition group glow-on-hover relative overflow-hidden reveal-on-scroll rounded-2xl stagger-3"
            >
              <div className="absolute top-6 right-6 text-7xl md:text-8xl text-emerald-500/5 font-black group-hover:text-emerald-500/10 smooth-transition">03</div>
              <div className="relative z-10">
                <div className="text-xs text-emerald-300/60 mb-4 font-mono tracking-widest uppercase">Writing</div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-emerald-300 smooth-transition">What I've Learned</h3>
                <p className="text-sm md:text-base text-white/40 mb-6">Dev workflows & insights</p>
                <div className="flex items-center gap-2 text-emerald-400/60 group-hover:text-emerald-400 smooth-transition">
                  <span className="text-sm">Explore</span>
                  <FaArrowRight className="text-xs group-hover:translate-x-1 smooth-transition" />
                </div>
              </div>
            </Link>
          </div>

          {/* Status */}
          <div className="pt-20 border-t border-white/5 reveal-on-scroll">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shadow-lg shadow-emerald-400/50"></div>
              <p className="text-base text-white/40">Available for Summer 2026 Co-op</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
