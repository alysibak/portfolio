"use client";

import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projects } from "@/lib/data";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectsClient() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-semibold text-gray-900 mb-12">Projects</h1>

          <div className="space-y-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-sm transition-all">
                <div className="flex items-start justify-between mb-3">
                  <h2 className="text-xl font-semibold text-gray-900">{project.title}</h2>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{project.status}</span>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.split(', ').map((tech, i) => (
                    <span key={i} className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-700 hover:text-gray-900 flex items-center gap-1"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      Live Site
                    </a>
                  )}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-700 hover:text-gray-900 flex items-center gap-1"
                  >
                    <FaGithub className="text-xs" />
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
