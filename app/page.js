"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaCode, FaBriefcase, FaRocket, FaLightbulb, FaChartLine, FaUsers, FaAward } from "react-icons/fa";
import Image from "next/image";
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

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* HERO - Notebook Page Style */}
      <section className="min-h-screen relative flex items-center pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                {/* Handwritten Tag */}
                <div className="inline-block px-6 py-2 bg-[#FFF9C4] border-2 border-[#F9A825] rounded transform -rotate-2">
                  <span className="text-base font-['Kalam'] font-bold text-[#8B4513]">
                    Available for Summer 2026 Co-op
                  </span>
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-['Caveat'] font-bold leading-tight text-[#3E2723]">
                  <span className="gradient-text block">Aly Sibak</span>
                  <span className="text-[#6B4423] block mt-2">Full-Stack Developer</span>
                  <span className="text-[#8B4513] block mt-2">Problem Solver</span>
                </h1>

                <p className="text-lg text-[#5D4037] leading-relaxed max-w-xl font-['Merriweather']">
                  3rd-year CS student at University of Guelph. Building production systems at P&P Optica that process millions of pounds of food daily.
                  I write code that solves real problems for real people.
                </p>
              </div>

              {/* Quick Stats - Notebook Style */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white/60 border-2 border-[#D4C4B0] rounded transform rotate-1">
                  <div className="text-4xl font-['Caveat'] font-bold text-[#8B4513]">
                    <AnimatedCounter end={250} suffix="+" />
                  </div>
                  <div className="text-sm text-[#6B4423] font-['Kalam'] font-semibold">Students Taught</div>
                </div>
                <div className="text-center p-4 bg-white/60 border-2 border-[#D4C4B0] rounded transform -rotate-1">
                  <div className="text-4xl font-['Caveat'] font-bold text-[#A0522D]">
                    <AnimatedCounter end={83} suffix="%" />
                  </div>
                  <div className="text-sm text-[#6B4423] font-['Kalam'] font-semibold">GPA</div>
                </div>
                <div className="text-center p-4 bg-white/60 border-2 border-[#D4C4B0] rounded transform rotate-2">
                  <div className="text-4xl font-['Caveat'] font-bold text-[#D2691E]">
                    <AnimatedCounter end={6} suffix="+" />
                  </div>
                  <div className="text-sm text-[#6B4423] font-['Kalam'] font-semibold">Projects</div>
                </div>
              </div>

              {/* CTA Buttons - Notebook Style */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="/projects"
                  className="group px-8 py-4 bg-[#8B4513] border-2 border-[#6B4423] rounded text-[#FFF8E7] font-['Kalam'] font-bold hover:bg-[#A0522D] transition-all duration-300 hover:shadow-lg"
                >
                  View My Work →
                </a>
                <a
                  href="/AlySibakResume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-white border-2 border-[#8B4513] rounded text-[#8B4513] font-['Kalam'] font-bold hover:bg-[#FFF8E7] transition-all duration-300"
                >
                  <FaDownload className="inline mr-2" />
                  Resume
                </a>
              </div>

              {/* Social Links - Sketched Style */}
              <div className="flex gap-4">
                <a href="https://github.com/alysibak" target="_blank" rel="noopener noreferrer" className="p-3 bg-white border-2 border-[#D4C4B0] rounded hover:border-[#8B4513] transition-all">
                  <FaGithub className="text-xl text-[#6B4423]" />
                </a>
                <a href="https://www.linkedin.com/in/alysibak" target="_blank" rel="noopener noreferrer" className="p-3 bg-white border-2 border-[#D4C4B0] rounded hover:border-[#8B4513] transition-all">
                  <FaLinkedin className="text-xl text-[#6B4423]" />
                </a>
                <a href="mailto:asibak@uoguelph.ca" className="p-3 bg-white border-2 border-[#D4C4B0] rounded hover:border-[#8B4513] transition-all">
                  <FaEnvelope className="text-xl text-[#6B4423]" />
                </a>
              </div>
            </div>

            {/* Right: Image + Floating Note Cards */}
            <div className="relative h-[600px] hidden lg:block">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-80 h-80 rounded-full border-4 border-[#8B4513] p-2 shadow-lg">
                    <Image
                      src="/profile.jpeg"
                      alt="Aly Sibak"
                      width={320}
                      height={320}
                      className="w-full h-full rounded-full object-cover"
                      priority
                    />
                  </div>

                  {/* Floating Note Cards */}
                  <div className="absolute -top-10 -right-20 floating" style={{ animationDelay: '0s' }}>
                    <div className="p-4 bg-[#FFF9C4] border-2 border-[#F9A825] rounded shadow-md transform rotate-3">
                      <div className="flex items-center gap-2">
                        <FaCode className="text-2xl text-[#D2691E]" />
                        <div>
                          <div className="text-xs text-[#8B4513] font-['Kalam']">Tech Stack</div>
                          <div className="font-bold text-[#6B4423] font-['Caveat'] text-lg">10+ Technologies</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-10 -left-20 floating" style={{ animationDelay: '0.5s' }}>
                    <div className="p-4 bg-[#FFECB3] border-2 border-[#FFA726] rounded shadow-md transform -rotate-3">
                      <div className="flex items-center gap-2">
                        <FaAward className="text-2xl text-[#A0522D]" />
                        <div>
                          <div className="text-xs text-[#8B4513] font-['Kalam']">Achievement</div>
                          <div className="font-bold text-[#6B4423] font-['Caveat'] text-lg">Dean's List</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-20 -left-32 floating" style={{ animationDelay: '1s' }}>
                    <div className="p-4 bg-[#FFCCBC] border-2 border-[#FF7043] rounded shadow-md transform rotate-2">
                      <div className="flex items-center gap-2">
                        <FaUsers className="text-2xl text-[#8B4513]" />
                        <div>
                          <div className="text-xs text-[#8B4513] font-['Kalam']">Teaching</div>
                          <div className="font-bold text-[#6B4423] font-['Caveat'] text-lg">TA Experience</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY WORK WITH ME - Notebook Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-['Caveat'] font-bold gradient-text mb-4">Why Work With Me?</h2>
            <p className="text-xl text-[#6B4423] font-['Merriweather']">More than just code</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Real-World Impact */}
            <GlassCard hover3D glowColor="brown" className="lg:col-span-2 p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#D2691E]/20 rounded">
                  <FaBriefcase className="text-3xl text-[#8B4513]" />
                </div>
                <h3 className="text-2xl font-['Caveat'] font-bold text-[#6B4423]">Real-World Impact</h3>
              </div>
              <p className="text-[#5D4037] text-lg leading-relaxed font-['Merriweather']">
                At P&P Optica, I built systems that detect contamination in food products.
                This isn't theoretical - my code helps prevent foodborne illness in real products on real shelves.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="space-y-1">
                  <div className="text-3xl font-['Caveat'] font-bold text-[#D2691E]">75%</div>
                  <div className="text-sm text-[#8B4513] font-['Kalam']">Faster Deployments</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-['Caveat'] font-bold text-[#A0522D]">30%</div>
                  <div className="text-sm text-[#8B4513] font-['Kalam']">Workflow Efficiency</div>
                </div>
              </div>
            </GlassCard>

            {/* Teaching Excellence */}
            <GlassCard hover3D glowColor="orange" className="p-8 space-y-4">
              <div className="p-3 bg-[#A0522D]/20 rounded w-fit">
                <FaUsers className="text-3xl text-[#8B4513]" />
              </div>
              <h3 className="text-2xl font-['Caveat'] font-bold text-[#6B4423]">Teaching & Mentoring</h3>
              <p className="text-[#5D4037] font-['Merriweather']">
                As a TA for 250+ students, I learned how to explain complex concepts simply.
                Better teacher = better teammate.
              </p>
            </GlassCard>

            {/* Quick Learner */}
            <GlassCard hover3D glowColor="sepia" className="p-8 space-y-4">
              <div className="p-3 bg-[#CD853F]/20 rounded w-fit">
                <FaLightbulb className="text-3xl text-[#D2691E]" />
              </div>
              <h3 className="text-2xl font-['Caveat'] font-bold text-[#6B4423]">Fast Learner</h3>
              <p className="text-[#5D4037] font-['Merriweather']">
                Picked up React, TypeScript, and AWS on the job. Give me a new tech stack, I'll figure it out.
              </p>
            </GlassCard>

            {/* Results-Driven */}
            <GlassCard hover3D glowColor="tan" className="lg:col-span-2 p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#8B4513]/20 rounded">
                  <FaChartLine className="text-3xl text-[#A0522D]" />
                </div>
                <h3 className="text-2xl font-['Caveat'] font-bold text-[#6B4423]">Results-Driven</h3>
              </div>
              <p className="text-[#5D4037] text-lg font-['Merriweather']">
                I don't just complete tasks - I optimize them. Whether it's cutting deployment time or
                improving reliability, I always look for measurable impact.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* BEYOND CODE - Personal Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-['Caveat'] font-bold gradient-text mb-4">Beyond Code</h2>
            <p className="text-xl text-[#6B4423] font-['Merriweather']">Because developers are humans too</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <GlassCard hover3D glowColor="brown" className="p-8 text-center space-y-4">
              <div className="text-4xl font-['Caveat'] text-[#8B4513] mb-4">Soccer</div>
              <p className="text-[#5D4037] font-['Merriweather']">
                My moving meditation. Best debugging happens on the field, not at the desk.
              </p>
            </GlassCard>

            <GlassCard hover3D glowColor="orange" className="p-8 text-center space-y-4">
              <div className="text-4xl font-['Caveat'] text-[#A0522D] mb-4">Swimming</div>
              <p className="text-[#5D4037] font-['Merriweather']">
                Where I solve my hardest problems. Something about the water clears my head.
              </p>
            </GlassCard>

            <GlassCard hover3D glowColor="sepia" className="p-8 text-center space-y-4">
              <div className="text-4xl font-['Caveat'] text-[#D2691E] mb-4">Gym</div>
              <p className="text-[#5D4037] font-['Merriweather']">
                Consistency at the gym taught me consistency in code. Progressive overload works for both.
              </p>
            </GlassCard>
          </div>

          <div className="text-center mt-12">
            <a
              href="/blog"
              className="inline-block px-10 py-5 bg-white border-2 border-[#8B4513] rounded text-[#8B4513] text-lg font-['Kalam'] font-bold hover:bg-[#FFF8E7] transition-all duration-300"
            >
              Read More on My Blog →
            </a>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <GlassCard glowColor="brown" className="p-16 space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl sm:text-6xl font-['Caveat'] font-bold">
                <span className="gradient-text block">Let's Build</span>
                <span className="text-[#6B4423] block mt-2">Something Great</span>
              </h2>
              <p className="text-xl text-[#5D4037] max-w-2xl mx-auto font-['Merriweather']">
                Looking for Summer 2026 Co-op. I bring full-stack skills, production experience, and a drive to solve real problems.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="px-10 py-5 bg-[#8B4513] border-2 border-[#6B4423] rounded text-[#FFF8E7] text-lg font-['Kalam'] font-bold hover:bg-[#A0522D] transition-all duration-300"
              >
                Get In Touch →
              </a>
              <a
                href="/projects"
                className="px-10 py-5 bg-white border-2 border-[#8B4513] rounded text-[#8B4513] text-lg font-['Kalam'] font-bold hover:bg-[#FFF8E7] transition-all duration-300"
              >
                <FaRocket className="inline mr-2" />
                See My Projects
              </a>
            </div>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </div>
  );
}
