"use client";

import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { experience } from "@/lib/data";

export default function ExperienceClient() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-semibold text-gray-900 mb-12">Experience</h1>

          <div className="space-y-12">
            {experience.map((exp, idx) => (
              <div key={idx}>
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">{exp.title}</h2>
                  <p className="text-gray-700">{exp.company}</p>
                  <p className="text-sm text-gray-500">{exp.duration} • {exp.location}</p>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-gray-600 leading-relaxed pl-4 border-l-2 border-gray-200">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-16 pt-16 border-t border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Education</h2>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">University of Guelph</h3>
              <p className="text-gray-700">B.Comp (Hons), Computer Science (Co-op)</p>
              <p className="text-sm text-gray-500">Sep 2023 – Present • GPA: 83% • Dean's List</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
