"use client";

import { motion } from "framer-motion";

export default function GlassCard({
  children,
  className = "",
  hover3D = false,
  glowColor = "",
  delay = 0
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      className={`
        bg-white
        border border-gray-200
        rounded-lg
        hover:border-gray-300
        hover:shadow-sm
        transition-all duration-200
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
