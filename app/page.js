"use client";

import React, { useState, useEffect, useCallback } from "react";
import { FaChevronDown, FaArrowRight } from "react-icons/fa";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { projects } from "@/lib/data";

export default function HomePage() {
  const [expandedProject, setExpandedProject] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

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
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elementsToAnimate = document.querySelectorAll('.reveal-on-scroll');
    elementsToAnimate.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
      <section className="pt-48 md:pt-64 pb-32 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div
            id="hero-content"
            className="relative will-change-transform will-change-opacity"
          >
            {/* Floating gradient orbs - performance optimized */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl floating will-change-transform" aria-hidden="true"></div>
            <div className="absolute -top-10 right-0 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl floating animation-delay-1 will-change-transform" aria-hidden="true"></div>
            <div className="absolute top-40 left-1/3 w-56 h-56 bg-emerald-500/10 rounded-full blur-3xl floating animation-delay-2 will-change-transform" aria-hidden="true"></div>

            {/* Name - staggered animation */}
            <div className={`mb-12 reveal-on-scroll stagger-1 ${isLoaded ? 'reveal-visible' : ''}`}>
              <h1 className="text-7xl md:text-9xl lg:text-[11rem] font-black mb-4 leading-[0.85] tracking-tighter relative z-10">
                <span className="gradient-text inline-block">Aly Sibak</span>
              </h1>
            </div>

            {/* Tagline */}
            <div className={`reveal-on-scroll stagger-2 mb-16 ${isLoaded ? '' : ''}`}>
              <p className="text-2xl md:text-4xl lg:text-5xl text-white/80 leading-relaxed max-w-4xl font-light relative z-10">
                Building exceptional digital experiences.
              </p>
            </div>

            {/* Description */}
            <div className={`reveal-on-scroll stagger-3 mb-20 ${isLoaded ? '' : ''}`}>
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
              aria-label="Visit Aly Sibak's GitHub profile"
              className="magnetic-link glass px-8 py-4 rounded-full text-white/70 hover:text-white smooth-transition border border-white/10 hover:border-sky-400/50 group"
            >
              <span className="flex items-center gap-2">
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
              <span className="flex items-center gap-2">
                LinkedIn
                <FaArrowRight className="text-xs group-hover:translate-x-1 smooth-transition" aria-hidden="true" />
              </span>
            </a>
            <a
              href="mailto:asibak@uoguelph.ca"
              aria-label="Send an email to Aly Sibak"
              className="magnetic-link cta-button px-8 py-4 rounded-full text-white font-medium smooth-transition group shadow-lg shadow-sky-500/20"
            >
              <span className="flex items-center gap-2">
                Get in Touch
                <FaArrowRight className="text-xs group-hover:translate-x-1 smooth-transition" aria-hidden="true" />
              </span>
            </a>
          </div>

          {/* Featured Projects */}
          <div className="mb-48">
            <div className="flex items-center gap-4 mb-12 reveal-on-scroll">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400 animate-pulse" aria-hidden="true"></div>
              <h2 className="text-base md:text-lg text-white/50 font-mono tracking-widest uppercase">Selected Work</h2>
            </div>

            <div className="space-y-6">
              {projects.slice(0, 3).map((project, idx) => (
                <article
                  key={`${project.title}-${idx}`}
                  className="glass smooth-transition glow-on-hover shimmer reveal-on-scroll rounded-2xl group"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <button
                    onClick={() => toggleProject(idx)}
                    aria-expanded={expandedProject === idx}
                    aria-controls={`project-details-${idx}`}
                    aria-label={`${expandedProject === idx ? 'Collapse' : 'Expand'} ${project.title} project details`}
                    className="w-full text-left px-8 md:px-12 py-10 md:py-12 flex items-center justify-between"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-xs text-sky-400/60 font-mono" aria-hidden="true">0{idx + 1}</span>
                        <div className="h-px flex-1 bg-gradient-to-r from-sky-400/20 to-transparent" aria-hidden="true"></div>
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
                      aria-hidden="true"
                    />
                  </button>

                  {expandedProject === idx && (
                    <div
                      id={`project-details-${idx}`}
                      className="px-8 md:px-12 pb-10 md:pb-12 border-t border-white/5 pt-10 animate-slide-down"
                    >
                      <p className="text-white/60 mb-10 leading-relaxed text-base md:text-lg max-w-3xl">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-3 mb-10">
                        {project.techStack.split(', ').map((tech, i) => (
                          <span
                            key={`${tech}-${i}`}
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
                            aria-label={`View live demo of ${project.title}`}
                            className="text-sm md:text-base text-white/60 hover:text-sky-300 smooth-transition flex items-center gap-2 group"
                          >
                            View Live
                            <FaArrowRight className="text-xs group-hover:translate-x-1 smooth-transition" aria-hidden="true" />
                          </a>
                        )}
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View source code for ${project.title} on GitHub`}
                          className="text-sm md:text-base text-white/60 hover:text-cyan-300 smooth-transition flex items-center gap-2 group"
                        >
                          View Code
                          <FaArrowRight className="text-xs group-hover:translate-x-1 smooth-transition" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>

            {/* View All Projects Link */}
            <div className="mt-12 reveal-on-scroll">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-48">
            <Link
              href="/experience"
              aria-label="View work experience"
              className="glass px-10 md:px-12 py-20 md:py-24 smooth-transition group glow-on-hover relative overflow-hidden reveal-on-scroll rounded-2xl stagger-1"
            >
              <div className="absolute top-6 right-6 text-7xl md:text-8xl text-sky-500/5 font-black group-hover:text-sky-500/10 smooth-transition" aria-hidden="true">01</div>
              <div className="relative z-10">
                <div className="text-xs text-sky-300/60 mb-4 font-mono tracking-widest uppercase">Experience</div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-sky-300 smooth-transition">Work History</h3>
                <p className="text-sm md:text-base text-white/40 mb-6">Building at P&P Optica</p>
                <div className="flex items-center gap-2 text-sky-400/60 group-hover:text-sky-400 smooth-transition">
                  <span className="text-sm">Explore</span>
                  <FaArrowRight className="text-xs group-hover:translate-x-1 smooth-transition" aria-hidden="true" />
                </div>
              </div>
            </Link>

            <Link
              href="/skills"
              aria-label="View technical skills"
              className="glass px-10 md:px-12 py-20 md:py-24 smooth-transition group glow-on-hover relative overflow-hidden reveal-on-scroll rounded-2xl stagger-2"
            >
              <div className="absolute top-6 right-6 text-7xl md:text-8xl text-cyan-500/5 font-black group-hover:text-cyan-500/10 smooth-transition" aria-hidden="true">02</div>
              <div className="relative z-10">
                <div className="text-xs text-cyan-300/60 mb-4 font-mono tracking-widest uppercase">Skills</div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-cyan-300 smooth-transition">Tech Stack</h3>
                <p className="text-sm md:text-base text-white/40 mb-6">React • TypeScript • AWS</p>
                <div className="flex items-center gap-2 text-cyan-400/60 group-hover:text-cyan-400 smooth-transition">
                  <span className="text-sm">Explore</span>
                  <FaArrowRight className="text-xs group-hover:translate-x-1 smooth-transition" aria-hidden="true" />
                </div>
              </div>
            </Link>

            <Link
              href="/blog"
              aria-label="Read blog posts"
              className="glass px-10 md:px-12 py-20 md:py-24 smooth-transition group glow-on-hover relative overflow-hidden reveal-on-scroll rounded-2xl stagger-3"
            >
              <div className="absolute top-6 right-6 text-7xl md:text-8xl text-emerald-500/5 font-black group-hover:text-emerald-500/10 smooth-transition" aria-hidden="true">03</div>
              <div className="relative z-10">
                <div className="text-xs text-emerald-300/60 mb-4 font-mono tracking-widest uppercase">Writing</div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-emerald-300 smooth-transition">What I've Learned</h3>
                <p className="text-sm md:text-base text-white/40 mb-6">Dev workflows & insights</p>
                <div className="flex items-center gap-2 text-emerald-400/60 group-hover:text-emerald-400 smooth-transition">
                  <span className="text-sm">Explore</span>
                  <FaArrowRight className="text-xs group-hover:translate-x-1 smooth-transition" aria-hidden="true" />
                </div>
              </div>
            </Link>
          </div>

          {/* Status */}
          <div className="pt-20 border-t border-white/5 reveal-on-scroll">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shadow-lg shadow-emerald-400/50" aria-hidden="true"></div>
              <p className="text-base text-white/40">Available for Summer 2026 Co-op</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
