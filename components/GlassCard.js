"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function GlassCard({
  children,
  className = "",
  hover3D = true,
  glowColor = "blue",
  delay = 0
}) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!hover3D) return;

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXValue = (y - centerY) / 10;
    const rotateYValue = (centerX - x) / 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const glowColors = {
    blue: "shadow-[0_0_50px_rgba(59,130,246,0.6)]",
    cyan: "shadow-[0_0_50px_rgba(6,182,212,0.6)]",
    purple: "shadow-[0_0_50px_rgba(139,92,246,0.6)]",
    green: "shadow-[0_0_50px_rgba(34,197,94,0.6)]",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: hover3D
          ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
          : 'none',
        transition: 'transform 0.1s ease-out'
      }}
      className={`
        relative overflow-hidden
        backdrop-blur-xl bg-black/30
        border border-white/20
        rounded-2xl
        hover:bg-black/40
        hover:border-white/30
        hover:${glowColors[glowColor]}
        transition-all duration-500
        ${className}
      `}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-50" />

      {/* Shine effect */}
      <div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, transparent 0%, rgba(59,130,246,0.15) 50%, transparent 100%)`,
          transform: `translateX(${rotateY * 2}px) translateY(${rotateX * 2}px)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
