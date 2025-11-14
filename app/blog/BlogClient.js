"use client";

import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/data";

export default function BlogClient() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-semibold text-gray-900 mb-12">Writing</h1>

          <div className="space-y-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-sm transition-all">
                <div className="flex items-center gap-3 mb-2 text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="mt-4 text-sm text-gray-500">
                  Coming soon
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
