"use client";

import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { blogContent } from "@/lib/blogContent";
import { FaArrowLeft, FaClock, FaCalendar } from "react-icons/fa";

export default function BlogPostClient({ post }) {
  const content = blogContent[post.id];

  if (!content) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="pt-32 pb-20 px-4">
          <div className="max-w-3xl mx-auto">
            <p>Content coming soon...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <article className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Back Link */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-8 transition-colors">
            <FaArrowLeft className="text-xs" />
            Back to Writing
          </Link>

          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <FaCalendar className="text-xs" />
                <time>{post.date}</time>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <FaClock className="text-xs" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-gray max-w-none">
            {content.sections.map((section, idx) => {
              switch (section.type) {
                case "intro":
                  return (
                    <p key={idx} className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                      {section.content}
                    </p>
                  );

                case "heading":
                  return (
                    <h2 key={idx} className="text-3xl font-bold text-gray-900 mt-12 mb-4">
                      {section.content}
                    </h2>
                  );

                case "subheading":
                  return (
                    <h3 key={idx} className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                      {section.content}
                    </h3>
                  );

                case "text":
                  return (
                    <p key={idx} className="text-lg text-gray-700 leading-relaxed mb-6">
                      {section.content}
                    </p>
                  );

                case "list":
                  return (
                    <ul key={idx} className="space-y-3 mb-6 ml-6">
                      {section.items.map((item, i) => (
                        <li key={i} className="text-lg text-gray-700 leading-relaxed list-disc">
                          {item}
                        </li>
                      ))}
                    </ul>
                  );

                case "code":
                  return (
                    <div key={idx} className="my-6">
                      <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
                        <code className="text-sm font-mono leading-relaxed">{section.content}</code>
                      </pre>
                    </div>
                  );

                default:
                  return null;
              }
            })}
          </div>

          {/* Footer CTA */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Thanks for reading!
              </h3>
              <p className="text-gray-600 mb-4">
                If you found this helpful, check out my other posts or get in touch.
              </p>
              <div className="flex gap-4">
                <Link href="/blog" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                  More Posts
                </Link>
                <span className="text-gray-300">•</span>
                <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
