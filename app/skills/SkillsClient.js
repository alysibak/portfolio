"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaLaptopCode, FaDatabase, FaCloud, FaMobile, FaTools, FaRocket } from "react-icons/fa";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";

const SkillBar = ({ name, level, delay = 0 }) => {
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
        <span className="text-white font-semibold">{name}</span>
        <span className="text-blue-400 font-bold">{level}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

export default function SkillsClient() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl sm:text-7xl font-black gradient-text mb-6">
            Technical Arsenal
          </h1>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto font-medium">
            A comprehensive toolkit honed through real-world development and continuous learning
          </p>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Primary Skills - Large Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <GlassCard hover3D glowColor="blue" className="p-8 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <FaLaptopCode className="text-3xl text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold gradient-text">Frontend Development</h2>
              </div>
              <div className="space-y-4">
                <SkillBar name="React & Next.js" level={95} delay={0} />
                <SkillBar name="TypeScript" level={90} delay={100} />
                <SkillBar name="JavaScript ES6+" level={93} delay={200} />
                <SkillBar name="HTML/CSS" level={92} delay={300} />
                <SkillBar name="Tailwind CSS" level={92} delay={400} />
                <SkillBar name="Responsive Design" level={94} delay={500} />
                <SkillBar name="TSX/JSX" level={91} delay={600} />
              </div>
            </GlassCard>

            <GlassCard hover3D glowColor="purple" className="p-8 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <FaDatabase className="text-3xl text-purple-400" />
                </div>
                <h2 className="text-3xl font-bold gradient-text">Backend & Data</h2>
              </div>
              <div className="space-y-4">
                <SkillBar name="Node.js" level={88} delay={0} />
                <SkillBar name="NestJS" level={85} delay={100} />
                <SkillBar name="RESTful APIs" level={90} delay={200} />
                <SkillBar name="SQL & PostgreSQL" level={87} delay={300} />
                <SkillBar name="Database Design" level={86} delay={400} />
                <SkillBar name="Data Processing" level={84} delay={500} />
              </div>
            </GlassCard>
          </div>

          {/* Secondary Skills - Smaller Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <GlassCard hover3D glowColor="cyan" className="p-8 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-cyan-500/20 rounded-lg">
                  <FaCloud className="text-3xl text-cyan-400" />
                </div>
                <h2 className="text-2xl font-bold gradient-text">Cloud & DevOps</h2>
              </div>
              <div className="space-y-4">
                <SkillBar name="AWS Services" level={82} delay={0} />
                <SkillBar name="Git & GitHub" level={94} delay={100} />
                <SkillBar name="CI/CD Pipelines" level={78} delay={200} />
                <SkillBar name="Docker" level={75} delay={300} />
              </div>
            </GlassCard>

            <GlassCard hover3D glowColor="green" className="p-8 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-green-500/20 rounded-lg">
                  <FaTools className="text-3xl text-green-400" />
                </div>
                <h2 className="text-2xl font-bold gradient-text">Development Tools</h2>
              </div>
              <div className="space-y-4">
                <SkillBar name="Version Control" level={93} delay={0} />
                <SkillBar name="Agile/Scrum" level={88} delay={100} />
                <SkillBar name="VS Code" level={95} delay={200} />
                <SkillBar name="Terminal/CLI" level={89} delay={300} />
              </div>
            </GlassCard>

            <GlassCard hover3D glowColor="blue" className="p-8 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <FaRocket className="text-3xl text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold gradient-text">Soft Skills</h2>
              </div>
              <div className="space-y-4">
                <SkillBar name="Problem Solving" level={96} delay={0} />
                <SkillBar name="Communication" level={91} delay={100} />
                <SkillBar name="Team Collaboration" level={90} delay={200} />
                <SkillBar name="Learning Agility" level={95} delay={300} />
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Currently Learning Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <GlassCard glowColor="purple" className="p-12 text-center space-y-8">
            <h2 className="text-4xl font-black gradient-text">Currently Expanding My Skills</h2>
            <p className="text-xl text-white/90 font-medium max-w-2xl mx-auto">
              I'm always learning and staying current with the latest technologies and best practices
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["GraphQL", "Kubernetes", "Machine Learning", "System Design", "Microservices", "Web3"].map((skill, index) => (
                <div
                  key={index}
                  className="px-6 py-3 glass rounded-full text-white font-semibold hover:scale-110 transition-all duration-300 border border-blue-400/30"
                >
                  {skill}
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <GlassCard glowColor="blue" className="p-16 space-y-8">
            <h2 className="text-5xl font-black">
              <span className="gradient-text">Ready to Build</span>
              <br />
              <span className="text-white">Together?</span>
            </h2>
            <p className="text-xl text-white/90 font-medium">
              Let's discuss how my technical skills can contribute to your team's success
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
