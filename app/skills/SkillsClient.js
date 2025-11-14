"use client";

import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { technicalSkills } from "@/lib/data";

export default function SkillsClient() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-semibold text-gray-900 mb-12">Skills</h1>

          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Frontend</h2>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.frontend.map((skill, i) => (
                  <span key={i} className="text-sm text-gray-600 bg-white border border-gray-200 px-3 py-1 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Backend</h2>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.backend.map((skill, i) => (
                  <span key={i} className="text-sm text-gray-600 bg-white border border-gray-200 px-3 py-1 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Cloud & APIs</h2>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.cloudAndAPIs.map((skill, i) => (
                  <span key={i} className="text-sm text-gray-600 bg-white border border-gray-200 px-3 py-1 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Tools</h2>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.tools.map((skill, i) => (
                  <span key={i} className="text-sm text-gray-600 bg-white border border-gray-200 px-3 py-1 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
