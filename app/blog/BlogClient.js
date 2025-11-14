"use client";

import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import { blogPosts } from "@/lib/data";
import { FaClock, FaFolder } from "react-icons/fa";

export default function BlogClient() {
  const categoryColors = {
    "Life": "blue",
    "Career": "purple",
    "Tech Tutorial": "green"
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl sm:text-7xl font-black gradient-text mb-6">
            Real Talk
          </h1>
          <p className="text-2xl text-white/90 font-medium leading-relaxed">
            No BS. Just honest thoughts about code, career struggles, and staying sane in tech.
            Also soccer, swimming, and why the gym makes me a better developer.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, idx) => (
              <GlassCard
                key={post.id}
                hover3D
                glowColor={categoryColors[post.category]}
                delay={idx * 0.1}
                className="p-8 flex flex-col cursor-pointer group"
              >
                {/* Category Badge */}
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                    post.category === "Life" ? "bg-blue-500/20 text-blue-300 border-blue-400/30" :
                    post.category === "Career" ? "bg-purple-500/20 text-purple-300 border-purple-400/30" :
                    "bg-green-500/20 text-green-300 border-green-400/30"
                  }`}>
                    {post.category}
                  </span>
                  <span className="text-white/60 text-sm">{post.date}</span>
                </div>

                {/* Title */}
                <h2 className="text-3xl font-black text-white mb-4 group-hover:gradient-text transition-all">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-white/90 text-lg leading-relaxed mb-6 flex-grow font-medium">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-white/70 text-sm">
                  <div className="flex items-center gap-2">
                    <FaClock className="text-blue-400" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Coming Soon Badge */}
                <div className="mt-4 text-blue-400 text-sm font-semibold">
                  Coming Soon →
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Why I Write */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <GlassCard glowColor="blue" className="p-12 text-center space-y-6">
            <h2 className="text-4xl font-black gradient-text">
              Why I Write
            </h2>
            <p className="text-xl text-white/90 leading-relaxed font-medium">
              Tech Twitter is full of "10x engineers" and people pretending everything is perfect.
              I'm here to share the real journey - the rejections, the breakthroughs, the late nights,
              and the random shower thoughts that solve bugs.
            </p>
            <p className="text-lg text-white/80">
              Plus, writing helps me think. If I can't explain it simply, I don't understand it well enough.
            </p>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </div>
  );
}
