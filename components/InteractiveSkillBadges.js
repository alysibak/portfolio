"use client";

import React, { useState } from "react";
import {
  FaReact, FaNodeJs, FaPython, FaJava, FaAws, FaGitAlt, FaDocker, FaDatabase
} from "react-icons/fa";
import {
  SiTypescript, SiJavascript, SiNextdotjs, SiTailwindcss, SiPostgresql,
  SiMongodb, SiExpress, SiC
} from "react-icons/si";

export default function InteractiveSkillBadges() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Skills with solid brand colors and proficiency levels
  const skills = [
    {
      name: "React",
      icon: FaReact,
      color: "#61DAFB",
      proficiency: 90,
      category: "Frontend",
      experience: "2+ years",
      projects: ["PocketChange", "3D Fitness App"]
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "#3178C6",
      proficiency: 85,
      category: "Language",
      experience: "1.5+ years",
      projects: ["PocketChange", "P&P Optica Dashboard"]
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "#000000",
      proficiency: 85,
      category: "Frontend",
      experience: "1+ year",
      projects: ["Portfolio", "3D Fitness App"]
    },
    {
      name: "Node.js",
      icon: FaNodeJs,
      color: "#339933",
      proficiency: 85,
      category: "Backend",
      experience: "2+ years",
      projects: ["PocketChange", "Various APIs"]
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      color: "#F7DF1E",
      proficiency: 95,
      category: "Language",
      experience: "3+ years",
      projects: ["All Web Projects"]
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      color: "#4169E1",
      proficiency: 80,
      category: "Database",
      experience: "1+ year",
      projects: ["P&P Optica", "PocketChange"]
    },
    {
      name: "Python",
      icon: FaPython,
      color: "#3776AB",
      proficiency: 75,
      category: "Language",
      experience: "2+ years",
      projects: ["Data Processing", "Scripts"]
    },
    {
      name: "Java",
      icon: FaJava,
      color: "#007396",
      proficiency: 80,
      category: "Language",
      experience: "2+ years",
      projects: ["Investment Portfolio Manager"]
    },
    {
      name: "AWS",
      icon: FaAws,
      color: "#FF9900",
      proficiency: 70,
      category: "Cloud",
      experience: "1+ year",
      projects: ["P&P Optica (S3, EC2)"]
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "#06B6D4",
      proficiency: 90,
      category: "Frontend",
      experience: "1.5+ years",
      projects: ["Portfolio", "PocketChange"]
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "#47A248",
      proficiency: 75,
      category: "Database",
      experience: "1+ year",
      projects: ["Various Projects"]
    },
    {
      name: "Express",
      icon: SiExpress,
      color: "#000000",
      proficiency: 80,
      category: "Backend",
      experience: "2+ years",
      projects: ["PocketChange API"]
    },
    {
      name: "Git",
      icon: FaGitAlt,
      color: "#F05032",
      proficiency: 85,
      category: "Tools",
      experience: "3+ years",
      projects: ["All Projects"]
    },
    {
      name: "Docker",
      icon: FaDocker,
      color: "#2496ED",
      proficiency: 65,
      category: "DevOps",
      experience: "6+ months",
      projects: ["Deployment Automation"]
    },
    {
      name: "C",
      icon: SiC,
      color: "#A8B9CC",
      proficiency: 70,
      category: "Language",
      experience: "1+ year",
      projects: ["Academic Projects"]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">Interactive Tech Stack</h3>
        <p className="text-white/60">Hover over each skill to see details</p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {skills.map((skill, idx) => {
          const Icon = skill.icon;
          const isHovered = hoveredSkill === skill.name;

          return (
            <div
              key={idx}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="relative group cursor-pointer"
              style={{ transitionDelay: `${idx * 30}ms` }}
            >
              {/* Badge */}
              <div
                className="relative rounded-2xl p-6 flex flex-col items-center justify-center smooth-transition transform hover:scale-110 hover:-translate-y-2"
                style={{
                  backgroundColor: isHovered ? skill.color : `${skill.color}15`,
                  borderWidth: '2px',
                  borderStyle: 'solid',
                  borderColor: isHovered ? skill.color : `${skill.color}40`,
                  boxShadow: isHovered ? `0 8px 32px ${skill.color}40` : 'none'
                }}
              >
                {/* Icon */}
                <Icon
                  className="text-4xl mb-2 smooth-transition"
                  style={{
                    color: isHovered ? '#ffffff' : skill.color
                  }}
                />

                {/* Name */}
                <p
                  className="text-sm font-bold text-center smooth-transition"
                  style={{
                    color: isHovered ? '#ffffff' : skill.color
                  }}
                >
                  {skill.name}
                </p>

                {/* Proficiency Bar */}
                <div className="w-full mt-3 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full smooth-transition rounded-full"
                    style={{
                      width: isHovered ? `${skill.proficiency}%` : '0%',
                      backgroundColor: '#ffffff'
                    }}
                  />
                </div>

                {/* Glow Effect */}
                <div
                  className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 smooth-transition -z-10"
                  style={{ backgroundColor: skill.color }}
                />
              </div>

              {/* Tooltip - Shows on Hover */}
              {isHovered && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-50 w-64 animate-fade-in">
                  <div className="glass-strong rounded-xl p-4 border border-white/20 shadow-2xl">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="text-2xl" style={{ color: skill.color }} />
                      <div>
                        <h4 className="text-white font-bold text-sm">{skill.name}</h4>
                        <p className="text-white/50 text-xs">{skill.category}</p>
                      </div>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between items-center">
                        <span className="text-white/60">Proficiency</span>
                        <span className="text-white font-bold">{skill.proficiency}%</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-white/60">Experience</span>
                        <span className="text-white font-medium">{skill.experience}</span>
                      </div>

                      <div className="pt-2 border-t border-white/10">
                        <p className="text-white/60 mb-1">Used in:</p>
                        <div className="flex flex-wrap gap-1">
                          {skill.projects.map((project, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 rounded text-xs"
                              style={{
                                backgroundColor: `${skill.color}20`,
                                color: skill.color
                              }}
                            >
                              {project}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div
                      className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1"
                      style={{
                        width: 0,
                        height: 0,
                        borderLeft: '8px solid transparent',
                        borderRight: '8px solid transparent',
                        borderTop: '8px solid rgba(10, 15, 30, 0.95)'
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="pt-6 border-t border-white/10">
        <div className="flex flex-wrap gap-4 justify-center text-xs">
          {['Frontend', 'Backend', 'Language', 'Database', 'Cloud', 'Tools', 'DevOps'].map((category, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400" />
              <span className="text-white/60">{category}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
