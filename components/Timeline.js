"use client";

import React, { useState } from "react";
import { FaBriefcase, FaGraduationCap, FaCode, FaRocket } from "react-icons/fa";

export default function Timeline() {
  const [expandedItem, setExpandedItem] = useState(null);

  const timelineData = [
    {
      year: "2025",
      title: "Software Developer Co-op",
      company: "P&P Optica",
      type: "work",
      icon: FaBriefcase,
      color: "from-blue-500 to-cyan-500",
      borderColor: "#3b82f6",
      description: "Building admin dashboards with React, TypeScript, and PostgreSQL for hyperspectral imaging systems",
      achievements: [
        "Achieved 75% faster deployments (2 hours → 30 minutes)",
        "Optimized CSV processing to handle 50MB files in minutes",
        "Improved workflow efficiency by 30%",
        "Automated deployments across 20+ global facilities"
      ],
      skills: ["React", "TypeScript", "PostgreSQL", "AWS"],
      current: true
    },
    {
      year: "2024 - 2025",
      title: "Major Projects Year",
      company: "Personal Development",
      type: "project",
      icon: FaCode,
      color: "from-purple-500 to-pink-500",
      borderColor: "#a855f7",
      description: "Built multiple full-stack applications showcasing diverse technical skills",
      achievements: [
        "PocketChange: FinTech app with Plaid API integration",
        "3D Fitness App: Interactive anatomy visualizer with 50+ muscle groups",
        "Investment Portfolio Manager: Java-based portfolio management tool",
        "Portfolio Website: Modern React/Next.js portfolio"
      ],
      skills: ["React", "Next.js", "Node.js", "Java", "APIs"],
      current: false
    },
    {
      year: "2024",
      title: "Teaching Assistant",
      company: "University of Guelph",
      type: "work",
      icon: FaGraduationCap,
      color: "from-emerald-500 to-green-500",
      borderColor: "#10b981",
      description: "Supported discrete mathematics education for 250+ students",
      achievements: [
        "Graded assignments and exams for 250+ students",
        "Conducted weekly office hours and review sessions",
        "Developed grading rubrics with teaching team",
        "Helped students grasp complex mathematical concepts"
      ],
      skills: ["Communication", "Teaching", "Mathematics"],
      current: false
    },
    {
      year: "2023",
      title: "Started Computer Science",
      company: "University of Guelph",
      type: "education",
      icon: FaGraduationCap,
      color: "from-cyan-500 to-blue-500",
      borderColor: "#06b6d4",
      description: "Beginning of the journey into software development",
      achievements: [
        "Learned fundamentals of programming",
        "Discovered passion for full-stack development",
        "Started building personal projects",
        "Joined tech communities and hackathons"
      ],
      skills: ["Java", "Python", "C", "Data Structures"],
      current: false
    },
    {
      year: "Future",
      title: "Summer 2026 Co-op",
      company: "Your Company?",
      type: "opportunity",
      icon: FaRocket,
      color: "from-yellow-500 to-orange-500",
      borderColor: "#f59e0b",
      description: "Seeking exciting co-op opportunities for Summer 2026",
      achievements: [
        "Looking for challenging full-stack roles",
        "Interested in FinTech, HealthTech, or innovative startups",
        "Ready to contribute to impactful projects",
        "Eager to learn and grow with a dynamic team"
      ],
      skills: ["React", "TypeScript", "Node.js", "AWS", "PostgreSQL"],
      current: false,
      future: true
    }
  ];

  return (
    <div className="space-y-8">
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 via-cyan-500 to-orange-500 opacity-60" />

        {/* Timeline Items */}
        <div className="space-y-8 md:space-y-12">
          {timelineData.map((item, idx) => {
            const Icon = item.icon;
            const isExpanded = expandedItem === idx;
            const isLeft = idx % 2 === 0;

            return (
              <div
                key={idx}
                className={`relative flex items-start ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-row`}
              >
                {/* Timeline Node */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-xl cursor-pointer smooth-transition hover:scale-110 ${
                      item.current ? 'ring-4 ring-emerald-400/50' : ''
                    }`}
                    onClick={() => setExpandedItem(isExpanded ? null : idx)}
                  >
                    <Icon className="text-white text-xl" />
                  </div>
                  {item.current && (
                    <div className="absolute -top-1 -right-1">
                      <div className="w-5 h-5 bg-emerald-400 rounded-full animate-ping" />
                      <div className="absolute top-0 right-0 w-5 h-5 bg-emerald-400 rounded-full" />
                    </div>
                  )}
                </div>

                {/* Content Card */}
                <div
                  className={`ml-24 md:ml-0 ${
                    isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  } md:w-5/12 w-[calc(100%-6rem)]`}
                >
                  <div
                    onClick={() => setExpandedItem(isExpanded ? null : idx)}
                    className={`glass rounded-2xl p-6 cursor-pointer smooth-transition hover:scale-[1.02] hover:shadow-xl ${
                      isExpanded ? 'border-2' : 'border'
                    }`}
                    style={{
                      borderColor: isExpanded ? item.borderColor : 'rgba(148, 163, 184, 0.2)'
                    }}
                  >
                    {/* Year Badge */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span
                        className={`px-4 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${item.color} shadow-lg`}
                      >
                        {item.year}
                      </span>
                      {item.future && (
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-yellow-500/20 border border-yellow-400/40 text-yellow-200">
                          Seeking Opportunities
                        </span>
                      )}
                      {item.current && (
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          Current Position
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-white/70 text-sm md:text-base mb-4">{item.company}</p>

                    {/* Description */}
                    <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>

                    {/* Expandable Content */}
                    {isExpanded && (
                      <div className="space-y-4 mt-6 pt-6 border-t border-white/10 animate-slide-down">
                        {/* Achievements */}
                        <div>
                          <h5 className="text-sm font-bold text-blue-200 mb-3 flex items-center gap-2">
                            {item.future ? "🎯 What I'm Looking For" : "🏆 Key Achievements"}
                          </h5>
                          <ul className="space-y-2">
                            {item.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                                <span className="text-cyan-400 mt-0.5 text-lg">▹</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Skills */}
                        <div>
                          <h5 className="text-sm font-bold text-blue-200 mb-3">💻 Technologies</h5>
                          <div className="flex flex-wrap gap-2">
                            {item.skills.map((skill, i) => (
                              <span
                                key={i}
                                className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/30 text-blue-200 text-xs font-medium hover:border-blue-400/50 hover:bg-blue-500/20 smooth-transition"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Expand Indicator */}
                    <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-center">
                      <span className="text-xs text-white/40 hover:text-white/60 smooth-transition">
                        {isExpanded ? 'Click to collapse ▲' : 'Click to expand for details ▼'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 mt-8 border-t border-white/10">
        <div className="glass rounded-xl p-4 text-center hover:scale-105 smooth-transition cursor-default">
          <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">2+</div>
          <div className="text-xs text-white/60 font-medium">Years Coding</div>
        </div>
        <div className="glass rounded-xl p-4 text-center hover:scale-105 smooth-transition cursor-default">
          <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-2">5+</div>
          <div className="text-xs text-white/60 font-medium">Projects Built</div>
        </div>
        <div className="glass rounded-xl p-4 text-center hover:scale-105 smooth-transition cursor-default">
          <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-2">15+</div>
          <div className="text-xs text-white/60 font-medium">Technologies</div>
        </div>
        <div className="glass rounded-xl p-4 text-center hover:scale-105 smooth-transition cursor-default">
          <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">250+</div>
          <div className="text-xs text-white/60 font-medium">Students Helped</div>
        </div>
      </div>
    </div>
  );
}
