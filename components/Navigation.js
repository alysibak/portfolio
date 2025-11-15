"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Work" },
    { href: "/experience", label: "Experience" },
    { href: "/blog", label: "Writing" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
        <Link href="/" className="text-sm font-semibold text-white tracking-tight">
          Aly Sibak
        </Link>

        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                isActive(link.href)
                  ? 'text-white'
                  : 'text-white/40 hover:text-white/80'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
