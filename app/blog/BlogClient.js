"use client";

import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/data";
import Link from "next/link";

export default function BlogClient() {
  return (
    <div className="min-h-screen animated-gradient-bg">
      <Navigation />

      <section className="pt-40 pb-32 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tight">Writing</h1>
          <p className="text-xl text-white/40 mb-24 max-w-xl font-light">
            Lessons from actually shipping code.
          </p>

          <div className="space-y-px">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="block glass smooth-transition px-10 py-10 group glow-on-hover"
              >
                <div className="flex items-center gap-3 mb-4 text-xs text-white/30 font-mono">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-white/90 smooth-transition">
                  {post.title}
                </h2>

                <p className="text-white/50 leading-relaxed text-lg">
                  {post.excerpt}
                </p>

                <div className="mt-6 text-sm text-white/30 group-hover:text-white/50 smooth-transition">
                  Read →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
