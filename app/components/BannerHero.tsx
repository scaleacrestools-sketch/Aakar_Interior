"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CTAButton from "./CTAButton";

interface BannerHeroProps {
  imageSrc: string;
  imageAlt?: string;
  headline: {
    line1: string;
    line2: string;
  };
  description: string;
  ctaButton: {
    href: string;
    text: string;
  };
  className?: string;
}

export default function BannerHero({
  imageSrc,
  imageAlt = "Interior Design",
  headline,
  description,
  ctaButton,
  className = "",
}: BannerHeroProps) {
  return (
    <section className={`w-full px-4 md:px-6 lg:px-8 mt-10 md:mt-10 ${className}`}>
      <div className="relative w-full h-[70vh] sm:h-[90vh] min-h-[500px] overflow-hidden rounded-2xl">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end pb-8 md:pb-12 lg:pb-12 px-6 md:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 items-end">
              {/* Left Side - Main Headline */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.2,
                      delayChildren: 0.3,
                    },
                  },
                }}
                className="space-y-4"
              >
                <motion.h1
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-medium text-white leading-tight drop-shadow-2xl"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.8,
                        ease: [0.6, -0.05, 0.01, 0.99],
                      },
                    },
                  }}
                >
                  <motion.span
                    className="block"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.6,
                          ease: [0.6, -0.05, 0.01, 0.99],
                        },
                      },
                    }}
                  >
                    {headline.line1}
                  </motion.span>
                  <motion.span
                    className="block mt-2"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.6,
                          ease: [0.6, -0.05, 0.01, 0.99],
                          delay: 0.2,
                        },
                      },
                    }}
                  >
                    {headline.line2}
                  </motion.span>
                </motion.h1>
              </motion.div>

              {/* Right Side - Description and CTA */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.15,
                      delayChildren: 0.6,
                    },
                  },
                }}
                className="space-y-2"
              >
                <motion.p
                  className="text-base sm:text-sm md:text-sm text-white/90 leading-relaxed max-w-lg drop-shadow-lg"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.7,
                        ease: [0.6, -0.05, 0.01, 0.99],
                      },
                    },
                  }}
                >
                  {description}
                </motion.p>
                <CTAButton
                  href={ctaButton.href}
                  text={ctaButton.text}
                  animationDelay={0.15}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

