"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function GlassCard({
  children,
  className = "",
  hover3D = true,
  glowColor = "brown",
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

    const rotateXValue = (y - centerY) / 20; // Reduced for subtle effect
    const rotateYValue = (centerX - x) / 20;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const glowColors = {
    brown: "shadow-[2px_2px_8px_rgba(139,69,19,0.3)]",
    orange: "shadow-[2px_2px_8px_rgba(210,105,30,0.3)]",
    sepia: "shadow-[2px_2px_8px_rgba(160,82,45,0.3)]",
    tan: "shadow-[2px_2px_8px_rgba(212,180,131,0.3)]",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: hover3D
          ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
          : 'none',
        transition: 'transform 0.2s ease-out'
      }}
      className={`
        relative overflow-visible
        bg-white/95
        border-2 border-[#D4C4B0]
        rounded-sm
        hover:shadow-[4px_4px_12px_rgba(139,69,19,0.2)]
        hover:border-[#C1A882]
        hover:${glowColors[glowColor]}
        transition-all duration-300
        ${className}
      `}
    >
      {/* Paper texture overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' /%3E%3C/svg%3E")`
        }}
      />

      {/* Subtle coffee stain (random placement) */}
      {Math.random() > 0.7 && (
        <div
          className="absolute w-12 h-12 rounded-full opacity-10 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(139, 69, 19, 0.3) 0%, transparent 70%)',
            top: `${Math.random() * 20 + 10}%`,
            right: `${Math.random() * 20 + 10}%`,
          }}
        />
      )}

      {/* Subtle torn edge effect on bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 opacity-20 pointer-events-none"
        style={{
          background: `linear-gradient(45deg, transparent 33.33%, #FFF8E7 33.33%, #FFF8E7 66.66%, transparent 66.66%),
                       linear-gradient(-45deg, transparent 33.33%, #FFF8E7 33.33%, #FFF8E7 66.66%, transparent 66.66%)`,
          backgroundSize: '6px 4px',
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
