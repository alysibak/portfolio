"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaSun, FaMoon, FaHome, FaCode, FaBriefcase, FaRocket, FaEnvelope } from "react-icons/fa";
import { useTheme } from "./ThemeProvider";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const { darkMode, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => pathname === path;

  const navLinks = [
    { href: "/", label: "Home", icon: FaHome },
    { href: "/skills", label: "Skills", icon: FaCode },
    { href: "/experience", label: "Experience", icon: FaBriefcase },
    { href: "/projects", label: "Projects", icon: FaRocket },
    { href: "/contact", label: "Contact", icon: FaEnvelope },
  ];

  return (
    <>
      {/* Floating Navigation - Shows after scroll */}
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="glass px-6 py-3 rounded-full shadow-2xl border border-white/20">
          <div className="flex items-center gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
                    isActive(link.href)
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                  title={link.label}
                >
                  <Icon className="text-sm" />
                  <span className={`text-sm font-semibold hidden lg:inline ${
                    isActive(link.href) ? 'block' : ''
                  }`}>
                    {link.label}
                  </span>
                </Link>
              );
            })}

            {/* Theme Toggle */}
            <div className="w-px h-6 bg-white/20 mx-2" />
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
              aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
            >
              {darkMode ? <FaSun className="text-sm" /> : <FaMoon className="text-sm" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Top Bar - Shows when not scrolled */}
      <div className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? 'opacity-0 -translate-y-full pointer-events-none' : 'opacity-100 translate-y-0'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-black gradient-text">
            Aly Sibak
          </Link>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-semibold transition-all duration-300 ${
                    isActive(link.href)
                      ? 'text-white'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <button
              onClick={toggleTheme}
              className="p-3 rounded-full glass text-white hover:scale-110 transition-all duration-300 shadow-lg"
              aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
            >
              {darkMode ? <FaSun className="text-sm" /> : <FaMoon className="text-sm" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-6 left-4 right-4 z-50">
        <div className="glass px-4 py-3 rounded-full shadow-2xl border border-white/20">
          <div className="flex justify-around items-center">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative p-3 rounded-full transition-all duration-300 ${
                    isActive(link.href)
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg scale-110'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                  title={link.label}
                >
                  <Icon className="text-lg" />
                  {isActive(link.href) && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
