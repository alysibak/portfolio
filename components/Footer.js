"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="py-16 px-8 border-t border-white/5 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center">
          <p className="text-sm text-white/30">
            © 2025
          </p>

          <div className="flex gap-6">
            <a
              href="https://github.com/alysibak"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/30 hover:text-white/60 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/aly-sibak-721b85252/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/30 hover:text-white/60 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:asibak@uoguelph.ca"
              className="text-sm text-white/30 hover:text-white/60 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
