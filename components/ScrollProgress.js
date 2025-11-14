"use client";

import { useScrollProgress } from "@/lib/hooks";

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 z-[100] transition-all duration-150"
      style={{
        width: `${progress}%`,
        opacity: progress > 0 ? 1 : 0
      }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-label="Page scroll progress"
    />
  );
}
