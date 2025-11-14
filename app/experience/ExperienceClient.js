"use client";

import React from "react";
import { useTheme } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { experience } from "@/lib/data";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import Link from "next/link";

export default function ExperienceClient() {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode
        ? "bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white"
        : "bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 text-gray-900"
    }`}>
      <Navigation />

      <div className="container mx-auto px-6 py-16 pt-32 max-w-5xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Professional Experience
          </h1>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Real-world experience building production software and contributing to educational excellence
          </p>
        </motion.div>

        <div className="space-y-10">
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              className={`p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                darkMode ? 'bg-gray-800 border-gray-600 hover:border-blue-500' : 'bg-white border-blue-200 hover:border-blue-400'
              }`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                    <FaBriefcase className="text-xl" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      {exp.title}
                    </h2>
                    <p className={`text-xl font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>{exp.company}</p>
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{exp.location}</p>
                  </div>
                </div>
                <span className={`px-6 py-3 rounded-full text-sm font-bold ${
                  darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-700'
                }`}>
                  {exp.duration}
                </span>
              </div>

              <div className="space-y-4">
                {exp.description.map((desc, i) => (
                  <div key={i} className="flex items-start group">
                    <span className="text-blue-500 mr-4 mt-2 text-lg">▶</span>
                    <p className={`leading-relaxed text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={`rounded-xl p-8 shadow-lg mt-12 border-2 ${
            darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-blue-200'
          }`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white">
              <FaGraduationCap className="text-xl" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
              Education
            </h2>
          </div>

          <div className="flex justify-between items-start">
            <div>
              <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                University of Guelph
              </h3>
              <p className={`text-xl mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                B.Comp (Hons), Computer Science (Co-op)
              </p>
              <p className={`text-lg mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                GPA: 83%
              </p>
              <div className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                <p className="mb-2"><strong>Relevant Coursework:</strong></p>
                <ul className="list-disc list-inside ml-4">
                  <li>Data Structures & Algorithms</li>
                  <li>Discrete Mathematics</li>
                  <li>Object-Oriented Programming</li>
                </ul>
              </div>
            </div>
            <span className={`px-6 py-3 rounded-full text-sm font-bold ${
              darkMode ? 'bg-cyan-900 text-cyan-200' : 'bg-cyan-100 text-cyan-700'
            }`}>
              Sep 2023 – Present
            </span>
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Interested in working together?
          </h2>
          <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            I&apos;m always open to discussing new opportunities and challenges
          </p>
          <div className="flex gap-6 justify-center">
            <Link
              href="/projects"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 rounded-xl text-white hover:scale-105 transition-all duration-300 shadow-lg font-semibold"
            >
              View My Projects
            </Link>
            <Link
              href="/contact"
              className={`border-2 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg ${
                darkMode ? 'border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white' : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
              }`}
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
