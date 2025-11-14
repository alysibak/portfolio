"use client";

import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import { experience } from "@/lib/data";
import { FaBriefcase, FaGraduationCap, FaRocket, FaChartLine, FaUsers } from "react-icons/fa";

export default function ExperienceClient() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl sm:text-7xl font-black gradient-text mb-6">
            Professional Journey
          </h1>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto font-medium">
            Building real solutions and mentoring future developers
          </p>
        </div>
      </section>

      {/* Timeline Experience */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Work Experience */}
          <div className="space-y-12">
            {experience.map((exp, idx) => (
              <GlassCard key={idx} hover3D glowColor={idx === 0 ? "blue" : "purple"} delay={idx * 0.2} className="p-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="p-4 bg-blue-500/20 rounded-lg">
                      <FaBriefcase className="text-3xl text-blue-400" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-black gradient-text mb-2">
                        {exp.title}
                      </h2>
                      <p className="text-xl text-white/90 font-semibold mb-1">{exp.company}</p>
                      <p className="text-white/70">{exp.location}</p>
                    </div>
                  </div>
                  <span className="px-6 py-3 bg-blue-500/20 rounded-full text-blue-300 font-bold text-sm border border-blue-400/30 whitespace-nowrap">
                    {exp.duration}
                  </span>
                </div>

                {/* Achievements */}
                <div className="space-y-4">
                  {exp.description.map((desc, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <div className="mt-1 flex-shrink-0">
                        <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-150 transition-transform" />
                      </div>
                      <p className="text-white/90 text-lg leading-relaxed font-medium">{desc}</p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black gradient-text text-center mb-16">
            Impact & Achievements
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <GlassCard hover3D glowColor="blue" className="p-8 text-center space-y-4">
              <div className="flex justify-center">
                <div className="p-4 bg-blue-500/20 rounded-full">
                  <FaRocket className="text-4xl text-blue-400" />
                </div>
              </div>
              <div className="text-4xl font-black gradient-text">40%</div>
              <div className="text-white/90 font-semibold">
                Faster Deployments
              </div>
              <p className="text-white/70 text-sm">
                Optimized CI/CD pipelines for rapid delivery
              </p>
            </GlassCard>

            <GlassCard hover3D glowColor="cyan" className="p-8 text-center space-y-4">
              <div className="flex justify-center">
                <div className="p-4 bg-cyan-500/20 rounded-full">
                  <FaChartLine className="text-4xl text-cyan-400" />
                </div>
              </div>
              <div className="text-4xl font-black gradient-text">60%</div>
              <div className="text-white/90 font-semibold">
                Reduced Onboarding Time
              </div>
              <p className="text-white/70 text-sm">
                Comprehensive documentation and training materials
              </p>
            </GlassCard>

            <GlassCard hover3D glowColor="purple" className="p-8 text-center space-y-4">
              <div className="flex justify-center">
                <div className="p-4 bg-purple-500/20 rounded-full">
                  <FaUsers className="text-4xl text-purple-400" />
                </div>
              </div>
              <div className="text-4xl font-black gradient-text">250+</div>
              <div className="text-white/90 font-semibold">
                Students Mentored
              </div>
              <p className="text-white/70 text-sm">
                Teaching Assistant for Discrete Mathematics
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-black gradient-text text-center mb-16">
            Education
          </h2>

          <GlassCard hover3D glowColor="green" className="p-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-green-500/20 rounded-lg">
                  <FaGraduationCap className="text-3xl text-green-400" />
                </div>
                <div>
                  <h3 className="text-3xl font-black gradient-text mb-2">
                    University of Guelph
                  </h3>
                  <p className="text-xl text-white/90 font-semibold mb-2">
                    B.Comp (Hons), Computer Science (Co-op)
                  </p>
                  <p className="text-lg text-white/80 mb-6">
                    GPA: 83% • Dean's List
                  </p>

                  <div>
                    <p className="text-white/90 font-semibold mb-3">Relevant Coursework:</p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {["Data Structures & Algorithms", "Discrete Mathematics", "Object-Oriented Programming", "Software Engineering"].map((course, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                          <span className="text-white/80">{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <span className="px-6 py-3 bg-green-500/20 rounded-full text-green-300 font-bold text-sm border border-green-400/30 whitespace-nowrap self-start">
                Sep 2023 – Present
              </span>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <GlassCard glowColor="blue" className="p-16 text-center space-y-8">
            <h2 className="text-5xl font-black">
              <span className="gradient-text">Ready to Make</span>
              <br />
              <span className="text-white">An Impact Together?</span>
            </h2>
            <p className="text-xl text-white/90 font-medium max-w-2xl mx-auto">
              Looking for Summer 2026 Co-op opportunities where I can contribute to meaningful projects
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white text-lg font-bold hover:scale-105 transition-all duration-300 pulse-glow"
              >
                Get In Touch
              </a>
              <a
                href="/projects"
                className="px-10 py-5 glass rounded-xl text-white text-lg font-bold hover:scale-105 transition-all duration-300 glow-border"
              >
                View My Projects
              </a>
            </div>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </div>
  );
}
