"use client";

import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/data";
import Link from "next/link";

export default function BlogClient() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-semibold text-gray-900 mb-4">Writing</h1>
          <p className="text-lg text-gray-600 mb-12">
            Thoughts on development, tools, and lessons learned building software.
          </p>

          <div className="space-y-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-sm transition-all group"
              >
                <div className="flex items-center gap-3 mb-2 text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                  {post.title}
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="mt-4 text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                  Read more →
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
