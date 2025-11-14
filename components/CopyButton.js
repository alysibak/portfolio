"use client";

import { useState } from "react";
import { FaCheck, FaCopy } from "react-icons/fa";
import { useCopyToClipboard } from "@/lib/hooks";
import { trackEmailCopy } from "@/lib/analytics";

export default function CopyButton({ text, label = "Copy", className = "" }) {
  const { copied, copy } = useCopyToClipboard();

  const handleCopy = async () => {
    const success = await copy(text);
    if (success) {
      trackEmailCopy();
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
        copied
          ? 'bg-green-600 text-white'
          : 'bg-blue-600 hover:bg-blue-700 text-white'
      } ${className}`}
      aria-label={copied ? 'Copied!' : label}
    >
      {copied ? (
        <>
          <FaCheck className="text-sm" />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <FaCopy className="text-sm" />
          <span>{label}</span>
        </>
      )}
    </button>
  );
}
