"use client";

import React, { useState, useEffect, useCallback } from "react";
import { FaChevronDown, FaArrowRight, FaGithub, FaExternalLinkAlt, FaCode, FaRocket, FaCheck } from "react-icons/fa";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { projects, stats } from "@/lib/data";

export default function HomePage() {
  const [expandedProject, setExpandedProject] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({});

  // Smooth scroll-triggered animations with Intersection Observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');

          // Trigger stat animations when stats section comes into view
          if (entry.target.id === 'stats-section') {
            animateStats();
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elementsToAnimate = document.querySelectorAll('.reveal-on-scroll');
    elementsToAnimate.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Animate stats counters
  const animateStats = () => {
    stats.forEach((stat, idx) => {
      setTimeout(() => {
        setAnimatedStats(prev => ({ ...prev, [idx]: true }));
      }, idx * 150);
    });
  };

  // Optimized parallax effect using RAF and will-change
  useEffect(() => {
    let ticking = false;
    let lastScrollY = 0;

    const handleScroll = () => {
      lastScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const heroElement = document.getElementById('hero-content');
          if (heroElement && lastScrollY < 800) {
            const translateY = lastScrollY * 0.3;
            const opacity = Math.max(0, 1 - (lastScrollY / 500));
            heroElement.style.transform = `translate3d(0, ${translateY}px, 0)`;
            heroElement.style.opacity = opacity;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set loaded state for initial animations
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Toggle project expansion with accessibility
  const toggleProject = useCallback((idx) => {
    setExpandedProject(prev => prev === idx ? null : idx);
  }, []);

  // Error boundary for projects
  if (!projects || projects.length === 0) {
    return (
      <div className="min-h-screen animated-gradient-bg flex items-center justify-center">
        <Navigation />
        <p className="text-white/60">Loading projects...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen animated-gradient-bg">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-48 md:pt-64 pb-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div
            id="hero-content"
            className="relative will-change-transform will-change-opacity"
          >
            {/* Name - staggered animation */}
            <div className={`mb-8 reveal-on-scroll stagger-1 ${isLoaded ? 'reveal-visible' : ''}`}>
              <h1 className="text-7xl md:text-9xl lg:text-[11rem] font-black mb-6 leading-[0.85] tracking-tighter relative z-10">
                <span className="gradient-text inline-block">Aly Sibak</span>
              </h1>
            </div>

            {/* Role Tag */}
            <div className={`reveal-on-scroll stagger-2 mb-12 ${isLoaded ? '' : ''}`}>
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-lg shadow-emerald-400/50"></div>
                <span className="text-sm md:text-base text-white font-medium">Software Engineer • Full-Stack Developer</span>
              </div>
            </div>

            {/* Tagline */}
            <div className={`reveal-on-scroll stagger-3 mb-8 ${isLoaded ? '' : ''}`}>
              <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed max-w-4xl font-medium relative z-10">
                Building scalable web applications that solve real problems.
                <br/>
                <span className="text-white/60 font-light">Currently engineering solutions at P&P Optica.</span>
              </p>
            </div>

            {/* Quick Description */}
            <div className={`reveal-on-scroll stagger-4 mb-12 ${isLoaded ? '' : ''}`}>
              <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl relative z-10">
                Full-stack developer specializing in <span className="text-blue-400 font-medium">React</span>, <span className="text-blue-300 font-medium">TypeScript</span>, and <span className="text-blue-200 font-medium">Node.js</span>.
                Computer Science student at University of Guelph.
              </p>
            </div>
          </div>

          {/* Contact Links - Magnetic buttons */}
          <div className="flex flex-wrap gap-4 mb-32 reveal-on-scroll stagger-5">
            <a
              href="mailto:asibak@uoguelph.ca"
              aria-label="Send an email to Aly Sibak"
              className="magnetic-link cta-button px-8 py-4 rounded-full text-white font-semibold smooth-transition group shadow-xl shadow-sky-500/30"
            >
              <span className="flex items-center gap-2.5">
                <FaRocket className="text-sm" aria-hidden="true" />
                Let's Work Together
                <FaArrowRight className="text-xs group-hover:translate-x-1 smooth-transition" aria-hidden="true" />
              </span>
            </a>
            <a
              href="https://github.com/alysibak"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Aly Sibak's GitHub profile"
              className="magnetic-link glass px-8 py-4 rounded-full text-white/70 hover:text-white smooth-transition border border-white/10 hover:border-sky-400/50 group"
            >
              <span className="flex items-center gap-2.5">
                <FaGithub className="text-base" aria-hidden="true" />
                GitHub
                <FaArrowRight className="text-xs group-hover:translate-x-1 smooth-transition" aria-hidden="true" />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/aly-sibak-721b85252/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Aly Sibak's LinkedIn profile"
              className="magnetic-link glass px-8 py-4 rounded-full text-white/70 hover:text-white smooth-transition border border-white/10 hover:border-cyan-400/50 group"
            >
              <span className="flex items-center gap-2.5">
                LinkedIn
                <FaArrowRight className="text-xs group-hover:translate-x-1 smooth-transition" aria-hidden="true" />
              </span>
            </a>
          </div>

          {/* Stats Section */}
          <div id="stats-section" className="reveal-on-scroll mb-32">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="glass px-6 py-8 rounded-2xl text-center group hover:scale-105 smooth-transition"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className={`text-4xl md:text-5xl font-black mb-2 ${
                    animatedStats[idx] ? 'gradient-text animate-stat-in' : 'text-white/20'
                  }`}>
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base font-semibold text-white/80 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-white/40">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div className="mb-32">
            <div className="flex items-center justify-between mb-12 reveal-on-scroll">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400 animate-pulse" aria-hidden="true"></div>
                <h2 className="text-2xl md:text-3xl font-black text-white">Featured Work</h2>
              </div>
              <Link
                href="/projects"
                aria-label="View all projects"
                className="hidden md:inline-flex items-center gap-2 text-white/50 hover:text-white smooth-transition group text-sm font-medium"
              >
                View All
                <FaArrowRight className="text-xs group-hover:translate-x-1 smooth-transition" aria-hidden="true" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {projects.map((project, idx) => (
                <article
                  key={`${project.title}-${idx}`}
                  className="glass smooth-transition glow-on-hover shimmer reveal-on-scroll rounded-2xl overflow-hidden group"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  {/* Project Header - Always Visible */}
                  <div className="p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                      <div className="flex-1">
                        {/* Category & Year */}
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/40 text-xs font-mono text-blue-200">
                            {project.category}
                          </span>
                          <span className="text-xs text-white/50 font-mono">{project.year}</span>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            project.status === 'Completed'
                              ? 'bg-emerald-500/20 border border-emerald-400/40 text-emerald-200'
                              : 'bg-amber-500/20 border border-amber-400/40 text-amber-200'
                          }`}>
                            {project.status}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-3xl md:text-4xl font-black text-white mb-4 group-hover:text-blue-300 smooth-transition">
                          {project.title}
                        </h3>

                        {/* Impact Statement */}
                        <p className="text-base md:text-lg text-white/80 mb-4 font-medium">
                          {project.impact}
                        </p>

                        {/* Description */}
                        <p className="text-white/60 leading-relaxed mb-6">
                          {project.description}
                        </p>

                        {/* Highlights */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                          {project.highlights.map((highlight, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <FaCheck className="text-emerald-400 text-xs mt-1 flex-shrink-0" aria-hidden="true" />
                              <span className="text-sm text-white/60">{highlight}</span>
                            </div>
                          ))}
                        </div>

                        {/* Tech Stack Preview */}
                        <button
                          onClick={() => toggleProject(idx)}
                          aria-expanded={expandedProject === idx}
                          aria-controls={`project-details-${idx}`}
                          aria-label={`${expandedProject === idx ? 'Hide' : 'Show'} ${project.title} tech stack`}
                          className="flex items-center gap-2 text-sm text-white/40 hover:text-white/70 smooth-transition group/btn"
                        >
                          <FaCode className="text-xs" aria-hidden="true" />
                          <span className="font-mono">{expandedProject === idx ? 'Hide' : 'View'} Tech Stack</span>
                          <FaChevronDown
                            className={`text-xs smooth-transition ${
                              expandedProject === idx ? 'rotate-180' : ''
                            }`}
                            aria-hidden="true"
                          />
                        </button>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex md:flex-col gap-3">
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View live demo of ${project.title}`}
                            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm hover:shadow-lg hover:shadow-blue-500/30 smooth-transition"
                          >
                            <FaExternalLinkAlt className="text-xs" aria-hidden="true" />
                            <span className="hidden md:inline">View Live</span>
                            <span className="md:hidden">Live</span>
                          </a>
                        )}
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View source code for ${project.title} on GitHub`}
                          className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/5 text-white/70 hover:text-white hover:border-white/30 font-medium text-sm smooth-transition"
                        >
                          <FaGithub className="text-sm" aria-hidden="true" />
                          <span className="hidden md:inline">Source Code</span>
                          <span className="md:hidden">Code</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Expandable Tech Stack */}
                  {expandedProject === idx && (
                    <div
                      id={`project-details-${idx}`}
                      className="px-8 md:px-10 pb-8 md:pb-10 border-t border-white/5 pt-6 animate-slide-down"
                    >
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.split(', ').map((tech, i) => (
                          <span
                            key={`${tech}-${i}`}
                            className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white/60 font-mono hover:border-sky-400/40 hover:bg-sky-500/10 smooth-transition"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>

            {/* View All Projects Link - Mobile */}
            <div className="mt-8 md:hidden reveal-on-scroll text-center">
              <Link
                href="/projects"
                aria-label="View all projects"
                className="inline-flex items-center gap-3 text-white/50 hover:text-white smooth-transition group"
              >
                <span className="text-base font-medium">View All Projects</span>
                <FaArrowRight className="text-sm group-hover:translate-x-2 smooth-transition" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Navigation Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
            <Link
              href="/experience"
              aria-label="View work experience"
              className="glass px-8 md:px-10 py-16 md:py-20 smooth-transition group glow-on-hover relative overflow-hidden reveal-on-scroll rounded-2xl stagger-1"
            >
              <div className="absolute top-6 right-6 text-7xl md:text-8xl text-blue-500/5 font-black group-hover:text-blue-500/10 smooth-transition" aria-hidden="true">01</div>
              <div className="relative z-10">
                <div className="text-xs text-blue-200/70 mb-3 font-mono tracking-widest uppercase">Experience</div>
                <h3 className="text-2xl md:text-2xl font-bold text-white mb-2 group-hover:text-blue-200 smooth-transition">Work History</h3>
                <p className="text-sm text-white/60 mb-4">Building at P&P Optica</p>
                <div className="flex items-center gap-2 text-blue-300/80 group-hover:text-blue-200 smooth-transition">
                  <span className="text-sm font-medium">Explore</span>
                  <FaArrowRight className="text-xs group-hover:translate-x-1 smooth-transition" aria-hidden="true" />
                </div>
              </div>
            </Link>

            <Link
              href="/skills"
              aria-label="View technical skills"
              className="glass px-8 md:px-10 py-16 md:py-20 smooth-transition group glow-on-hover relative overflow-hidden reveal-on-scroll rounded-2xl stagger-2"
            >
              <div className="absolute top-6 right-6 text-7xl md:text-8xl text-blue-500/5 font-black group-hover:text-blue-500/10 smooth-transition" aria-hidden="true">02</div>
              <div className="relative z-10">
                <div className="text-xs text-blue-200/70 mb-3 font-mono tracking-widest uppercase">Skills</div>
                <h3 className="text-2xl md:text-2xl font-bold text-white mb-2 group-hover:text-blue-200 smooth-transition">Tech Stack</h3>
                <p className="text-sm text-white/60 mb-4">React • TypeScript • AWS</p>
                <div className="flex items-center gap-2 text-blue-300/80 group-hover:text-blue-200 smooth-transition">
                  <span className="text-sm font-medium">Explore</span>
                  <FaArrowRight className="text-xs group-hover:translate-x-1 smooth-transition" aria-hidden="true" />
                </div>
              </div>
            </Link>

            <Link
              href="/blog"
              aria-label="Read blog posts"
              className="glass px-8 md:px-10 py-16 md:py-20 smooth-transition group glow-on-hover relative overflow-hidden reveal-on-scroll rounded-2xl stagger-3"
            >
              <div className="absolute top-6 right-6 text-7xl md:text-8xl text-blue-500/5 font-black group-hover:text-blue-500/10 smooth-transition" aria-hidden="true">03</div>
              <div className="relative z-10">
                <div className="text-xs text-blue-200/70 mb-3 font-mono tracking-widest uppercase">Writing</div>
                <h3 className="text-2xl md:text-2xl font-bold text-white mb-2 group-hover:text-blue-200 smooth-transition">What I've Learned</h3>
                <p className="text-sm text-white/60 mb-4">Dev workflows & insights</p>
                <div className="flex items-center gap-2 text-blue-300/80 group-hover:text-blue-200 smooth-transition">
                  <span className="text-sm font-medium">Explore</span>
                  <FaArrowRight className="text-xs group-hover:translate-x-1 smooth-transition" aria-hidden="true" />
                </div>
              </div>
            </Link>
          </div>

          {/* Status */}
          <div className="pt-16 border-t border-white/5 reveal-on-scroll">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shadow-lg shadow-emerald-400/50" aria-hidden="true"></div>
                <p className="text-base text-white/50">Available for Summer 2026 Co-op</p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-white/50 hover:text-white smooth-transition group text-sm font-medium"
              >
                Get in Touch
                <FaArrowRight className="text-xs group-hover:translate-x-1 smooth-transition" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
