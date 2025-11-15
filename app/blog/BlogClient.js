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

      <section className="pt-32 pb-20 px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">Writing</h1>
          <p className="text-lg text-white/40 mb-20 max-w-xl font-light">
            Lessons from actually shipping code.
          </p>

          <div className="space-y-px">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="block glass smooth-transition px-8 py-8 group"
              >
                <div className="flex items-center gap-3 mb-3 text-xs text-white/30 font-mono">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-white/90 smooth-transition">
                  {post.title}
                </h2>

                <p className="text-white/60 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="mt-4 text-sm text-white/40 group-hover:text-white/60 smooth-transition">
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
