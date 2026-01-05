"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface CTAButtonProps {
  href: string;
  text: string;
  className?: string;
  showArrow?: boolean;
  animationDelay?: number;
  asMotion?: boolean;
}

export default function CTAButton({
  href,
  text,
  className = "",
  showArrow = true,
  animationDelay = 0.15,
  asMotion = true,
}: CTAButtonProps) {
  const buttonContent = (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 btn-brand-gradient text-white px-4 py-2 md:px-5 md:py-2.5 rounded-lg font-medium transition-all duration-300 group text-xs md:text-sm ${className}`}
    >
      <span>{text}</span>
      {showArrow && (
        <svg
          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      )}
    </Link>
  );

  if (!asMotion) {
    return buttonContent;
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            ease: [0.6, -0.05, 0.01, 0.99],
            delay: animationDelay,
          },
        },
      }}
    >
      {buttonContent}
    </motion.div>
  );
}

