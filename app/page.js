"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaCode, FaBriefcase, FaRocket, FaLightbulb, FaChartLine, FaUsers, FaAward, FaStar, FaArrowRight, FaTerminal, FaDatabase, FaCloud, FaMobile, FaLaptopCode } from "react-icons/fa";
import Image from "next/image";
import { useTheme } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";

const AnimatedCounter = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, hasStarted]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const SkillBar = ({ name, level, icon: Icon, delay = 0 }) => {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), delay);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {Icon && <Icon className="text-blue-400" />}
          <span className="text-white font-semibold">{name}</span>
        </div>
        <span className="text-blue-400 font-bold">{level}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

export default function HomePage() {
  const { darkMode } = useTheme();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* HERO - Full Screen Split Layout */}
      <section className="min-h-screen relative flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold border border-blue-500/30">
                    🚀 Available for Summer 2026 Co-op
                  </span>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
                  <span className="gradient-text">Building AI-Powered</span>
                  <br />
                  <span className="text-white">Solutions That</span>
                  <br />
                  <span className="neon-text">Actually Matter</span>
                </h1>
                <p className="text-xl text-white/70 leading-relaxed max-w-xl">
                  3rd-year CS student who transformed food safety at P&P Optica with AI hyperspectral imaging.
                  I don't just write code—I solve problems that impact real people.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-black gradient-text">
                    <AnimatedCounter end={250} suffix="+" />
                  </div>
                  <div className="text-sm text-white/60">Students Taught</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black gradient-text">
                    <AnimatedCounter end={83} suffix="%" />
                  </div>
                  <div className="text-sm text-white/60">GPA Achieved</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black gradient-text">
                    <AnimatedCounter end={6} suffix="+" />
                  </div>
                  <div className="text-sm text-white/60">Projects Built</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="/projects"
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white font-bold hover:scale-105 transition-all duration-300 pulse-glow flex items-center gap-2"
                >
                  <span>View My Work</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/AlySibakResume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 glass rounded-xl text-white font-bold hover:scale-105 transition-all duration-300 flex items-center gap-2 glow-border"
                >
                  <FaDownload className="group-hover:animate-bounce" />
                  <span>Resume</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a href="https://github.com/alysibak" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-lg hover:scale-110 transition-all">
                  <FaGithub className="text-xl text-white" />
                </a>
                <a href="https://www.linkedin.com/in/alysibak" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-lg hover:scale-110 transition-all">
                  <FaLinkedin className="text-xl text-white" />
                </a>
                <a href="mailto:asibak@uoguelph.ca" className="p-3 glass rounded-lg hover:scale-110 transition-all">
                  <FaEnvelope className="text-xl text-white" />
                </a>
              </div>
            </div>

            {/* Right: Image + Floating Cards */}
            <div className="relative h-[600px] hidden lg:block">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 p-2 shimmer">
                    <Image
                      src="/profile.jpeg"
                      alt="Aly Sibak"
                      width={320}
                      height={320}
                      className="w-full h-full rounded-full object-cover"
                      priority
                    />
                  </div>

                  {/* Floating Achievement Cards */}
                  <div className="absolute -top-10 -right-20 floating" style={{ animationDelay: '0s' }}>
                    <GlassCard glowColor="blue" className="p-4 space-y-1">
                      <div className="flex items-center gap-2">
                        <FaCode className="text-2xl text-blue-400" />
                        <div>
                          <div className="text-xs text-white/60">Tech Stack</div>
                          <div className="font-bold text-white">10+ Technologies</div>
                        </div>
                      </div>
                    </GlassCard>
                  </div>

                  <div className="absolute -bottom-10 -left-20 floating" style={{ animationDelay: '0.5s' }}>
                    <GlassCard glowColor="purple" className="p-4 space-y-1">
                      <div className="flex items-center gap-2">
                        <FaAward className="text-2xl text-purple-400" />
                        <div>
                          <div className="text-xs text-white/60">Achievement</div>
                          <div className="font-bold text-white">Dean's List</div>
                        </div>
                      </div>
                    </GlassCard>
                  </div>

                  <div className="absolute top-20 -left-32 floating" style={{ animationDelay: '1s' }}>
                    <GlassCard glowColor="cyan" className="p-4 space-y-1">
                      <div className="flex items-center gap-2">
                        <FaUsers className="text-2xl text-cyan-400" />
                        <div>
                          <div className="text-xs text-white/60">Teaching</div>
                          <div className="font-bold text-white">TA Experience</div>
                        </div>
                      </div>
                    </GlassCard>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENTO GRID - Showcase Different Aspects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black gradient-text mb-4">Why Work With Me?</h2>
            <p className="text-xl text-white/70">I bring more than just code to the table</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {/* Large Feature Card - Spans 2 columns */}
            <GlassCard hover3D glowColor="blue" className="lg:col-span-2 p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <FaBriefcase className="text-3xl text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold gradient-text">Real-World Impact</h3>
              </div>
              <p className="text-white/80 text-lg leading-relaxed">
                At P&P Optica, I built AI-powered hyperspectral imaging systems that detect contamination
                in food products. This isn't theoretical—my code helps prevent foodborne illness in real products
                on real shelves.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-blue-400">40%</div>
                  <div className="text-sm text-white/60">Faster Deployments</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-cyan-400">60%</div>
                  <div className="text-sm text-white/60">Less Onboarding Time</div>
                </div>
              </div>
            </GlassCard>

            {/* Teaching Excellence */}
            <GlassCard hover3D glowColor="purple" className="p-8 space-y-4">
              <div className="p-3 bg-purple-500/20 rounded-lg w-fit">
                <FaUsers className="text-3xl text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold gradient-text">Teaching & Mentoring</h3>
              <p className="text-white/80">
                As a TA for 250+ students, I learned how to explain complex concepts simply.
                This makes me a better collaborator and team player.
              </p>
            </GlassCard>

            {/* Quick Learner */}
            <GlassCard hover3D glowColor="cyan" className="p-8 space-y-4">
              <div className="p-3 bg-cyan-500/20 rounded-lg w-fit">
                <FaLightbulb className="text-3xl text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold gradient-text">Fast Learner</h3>
              <p className="text-white/80">
                Picked up React, TypeScript, and AWS on the job. I thrive on learning new technologies
                and adapting to new challenges quickly.
              </p>
            </GlassCard>

            {/* Problem Solver */}
            <GlassCard hover3D glowColor="pink" className="lg:col-span-2 p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-pink-500/20 rounded-lg">
                  <FaChartLine className="text-3xl text-pink-400" />
                </div>
                <h3 className="text-2xl font-bold gradient-text">Results-Driven Mindset</h3>
              </div>
              <p className="text-white/80 text-lg">
                I don't just complete tasks—I optimize them. Whether it's cutting deployment time or
                improving system reliability, I always look for ways to add measurable value.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* TECH STACK - Horizontal Scroll Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black gradient-text mb-4">Tech Arsenal</h2>
            <p className="text-xl text-white/70">Tools I use to build exceptional software</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <GlassCard hover3D glowColor="blue" className="p-8 space-y-6">
              <h3 className="text-2xl font-bold gradient-text flex items-center gap-2">
                <FaLaptopCode className="text-blue-400" />
                Frontend & UI
              </h3>
              <div className="space-y-4">
                <SkillBar name="React & Next.js" level={95} delay={0} />
                <SkillBar name="TypeScript" level={90} delay={100} />
                <SkillBar name="Tailwind CSS" level={92} delay={200} />
                <SkillBar name="JavaScript ES6+" level={93} delay={300} />
              </div>
            </GlassCard>

            <GlassCard hover3D glowColor="purple" className="p-8 space-y-6">
              <h3 className="text-2xl font-bold gradient-text flex items-center gap-2">
                <FaDatabase className="text-purple-400" />
                Backend & Data
              </h3>
              <div className="space-y-4">
                <SkillBar name="Java & Spring" level={88} delay={0} />
                <SkillBar name="Python" level={85} delay={100} />
                <SkillBar name="SQL & PostgreSQL" level={87} delay={200} />
                <SkillBar name="RESTful APIs" level={90} delay={300} />
              </div>
            </GlassCard>

            <GlassCard hover3D glowColor="cyan" className="p-8 space-y-6">
              <h3 className="text-2xl font-bold gradient-text flex items-center gap-2">
                <FaCloud className="text-cyan-400" />
                Cloud & DevOps
              </h3>
              <div className="space-y-4">
                <SkillBar name="AWS Services" level={82} delay={0} />
                <SkillBar name="Docker" level={80} delay={100} />
                <SkillBar name="Git & GitHub" level={94} delay={200} />
                <SkillBar name="CI/CD Pipelines" level={78} delay={300} />
              </div>
            </GlassCard>

            <GlassCard hover3D glowColor="pink" className="p-8 space-y-6">
              <h3 className="text-2xl font-bold gradient-text flex items-center gap-2">
                <FaMobile className="text-pink-400" />
                Other Skills
              </h3>
              <div className="space-y-4">
                <SkillBar name="System Design" level={83} delay={0} />
                <SkillBar name="Agile/Scrum" level={88} delay={100} />
                <SkillBar name="Technical Writing" level={91} delay={200} />
                <SkillBar name="Problem Solving" level={96} delay={300} />
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* CTA SECTION - Large, Bold */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <GlassCard glowColor="blue" className="p-16 space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl sm:text-6xl font-black">
                <span className="gradient-text">Let's Build</span>
                <br />
                <span className="text-white">Something Great</span>
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                I'm looking for a Summer 2026 Co-op where I can bring my skills in full-stack development,
                AI integration, and problem-solving to make a real impact.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white text-lg font-bold hover:scale-105 transition-all duration-300 pulse-glow flex items-center gap-2"
              >
                <span>Get In Touch</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/projects"
                className="group px-10 py-5 glass rounded-xl text-white text-lg font-bold hover:scale-105 transition-all duration-300 glow-border flex items-center gap-2"
              >
                <FaRocket />
                <span>See My Projects</span>
              </a>
            </div>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </div>
  );
}
