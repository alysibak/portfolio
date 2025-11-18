"use client";

import React, { useState } from "react";
import { FaBriefcase, FaGraduationCap, FaCode, FaRocket, FaTrophy } from "react-icons/fa";

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

  const getIcon = (type) => {
    switch (type) {
      case "work":
        return FaBriefcase;
      case "education":
        return FaGraduationCap;
      case "project":
        return FaCode;
      case "opportunity":
        return FaRocket;
      default:
        return FaTrophy;
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">My Journey</h3>
        <p className="text-white/60">From student to developer - click to expand</p>
      </div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-purple-500" />

        {/* Timeline Items */}
        <div className="space-y-12">
          {timelineData.map((item, idx) => {
            const Icon = item.icon;
            const isExpanded = expandedItem === idx;
            const isLeft = idx % 2 === 0;

            return (
              <div
                key={idx}
                className={`relative flex items-center ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-row`}
              >
                {/* Timeline Node */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg cursor-pointer smooth-transition hover:scale-125 ${
                      item.current ? 'animate-pulse' : ''
                    }`}
                    onClick={() => setExpandedItem(isExpanded ? null : idx)}
                  >
                    <Icon className="text-white text-xl" />
                  </div>
                  {item.current && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-ping" />
                  )}
                </div>

                {/* Content Card */}
                <div
                  className={`ml-24 md:ml-0 ${
                    isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  } md:w-5/12 w-full`}
                >
                  <div
                    onClick={() => setExpandedItem(isExpanded ? null : idx)}
                    className={`glass rounded-2xl p-6 cursor-pointer smooth-transition hover:scale-105 ${
                      isExpanded ? 'border-2' : 'border'
                    }`}
                    style={{
                      borderColor: isExpanded
                        ? item.color.includes('blue')
                          ? '#3b82f6'
                          : item.color.includes('purple')
                          ? '#a855f7'
                          : item.color.includes('emerald')
                          ? '#10b981'
                          : item.color.includes('cyan')
                          ? '#06b6d4'
                          : '#f59e0b'
                        : 'rgba(148, 163, 184, 0.2)'
                    }}
                  >
                    {/* Year Badge */}
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${item.color}`}
                      >
                        {item.year}
                      </span>
                      {item.future && (
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-yellow-500/20 border border-yellow-400/40 text-yellow-200">
                          Seeking Opportunities
                        </span>
                      )}
                      {item.current && (
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          Current
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-white/60 text-sm mb-3">{item.company}</p>

                    {/* Description */}
                    <p className="text-white/70 text-sm mb-4">{item.description}</p>

                    {/* Expandable Content */}
                    {isExpanded && (
                      <div className="space-y-4 animate-slide-down">
                        {/* Achievements */}
                        <div>
                          <h5 className="text-sm font-bold text-blue-200 mb-2">
                            {item.future ? "What I'm Looking For:" : "Key Achievements:"}
                          </h5>
                          <ul className="space-y-2">
                            {item.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                                <span className="text-cyan-400 mt-1">▹</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Skills */}
                        <div>
                          <h5 className="text-sm font-bold text-blue-200 mb-2">Technologies:</h5>
                          <div className="flex flex-wrap gap-2">
                            {item.skills.map((skill, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-400/30 text-blue-200 text-xs font-medium"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Expand Indicator */}
                    <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-center">
                      <span className="text-xs text-white/40">
                        {isExpanded ? 'Click to collapse ▲' : 'Click to expand ▼'}
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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10">
        <div className="glass rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-blue-400 mb-1">2+</div>
          <div className="text-xs text-white/60">Years Coding</div>
        </div>
        <div className="glass rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-cyan-400 mb-1">5+</div>
          <div className="text-xs text-white/60">Projects Built</div>
        </div>
        <div className="glass rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-emerald-400 mb-1">10+</div>
          <div className="text-xs text-white/60">Technologies</div>
        </div>
        <div className="glass rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-purple-400 mb-1">250+</div>
          <div className="text-xs text-white/60">Students Helped</div>
        </div>
      </div>
    </div>
  );
}
