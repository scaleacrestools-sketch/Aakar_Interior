"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    image: "/4613d82bb2fc0aa01656c96398f2a7e8285274b7.png",
    text: "Working with Interor was an absolute pleasure. Their attention to detail and creativity transformed our home into a stunning and functional space. We couldn't be happier with the results!",
    name: "Michael Smith",
    role: "Cafe Manager",
    avatar: "/testimonial (1).webp",
  },
  {
    image: "/Custom-Furniture-Decor.png",
    text: "The team exceeded our expectations. Everything was delivered on time and the design quality was exceptional.",
    name: "Sarah Johnson",
    role: "Business Owner",
    avatar: "/Rohit.webp",
  },
  {
    image: "/image_02-1.png",
    text: "Professional, creative, and extremely detail-oriented. Highly recommended for premium interior projects.",
    name: "Anjali Lee",
    role: "Architect",
    avatar: "/anjaili.webp",
  },
  {
    image: "/bg01-1.webp",
    text: "Professional, creative, and extremely detail-oriented. Highly recommended for premium interior projects.",
    name: "Sandeep",
    role: "Architect",
    avatar: "/Sandeep.webp",
  },
  {
    image: "/demo9-slide-2.jpg",
    text: "Professional, creative, and extremely detail-oriented. Highly recommended for premium interior projects.",
    name: "Nisha Lee",
    role: "Architect",
    avatar: "/demo5-slide-02.jpg",
  },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  /* Auto-play */
  useEffect(() => {
    timeoutRef.current = setTimeout(next, 5000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [current]);

  /* Keyboard navigation */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  /* Swipe support */
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX.current) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    if (diff < -50) prev();
    touchStartX.current = null;
  };

  return (
    <section className="bg-[#F5F5F0] py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Image */}
          <div className="relative max-w-[520px] mx-auto lg:mx-0 w-full">
            <div className="relative h-[280px] sm:h-[350px] md:h-[420px] rounded-md overflow-hidden shadow-lg">
              <Image
                key={testimonials[current].image}
                src={testimonials[current].image}
                alt="Interior"
                fill
                className="object-cover animate-fadeSlide"
              />
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-1.5 sm:gap-2 mt-3 sm:mt-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition ${current === i ? "bg-black" : "bg-black/30"
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="max-w-xl space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight">
              WHAT PEOPLE SAY
              <br />
              ABOUT US
            </h2>

            <p
              key={testimonials[current].text}
              className="text-black/70 text-sm sm:text-base leading-relaxed animate-fadeSlide"
            >
              "{testimonials[current].text}"
            </p>

            {/* Author */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 sm:pt-6 border-t border-black/20 gap-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <Image
                  src={testimonials[current].avatar}
                  alt={testimonials[current].name}
                  width={44}
                  height={44}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-sm sm:text-base">{testimonials[current].name}</p>
                  <p className="text-xs sm:text-sm text-black/60">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>

              {/* Arrows */}
              <div className="flex gap-2 sm:gap-3">
                <button
                  onClick={prev}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-black/30 flex items-center justify-center hover:bg-black hover:text-white transition text-sm sm:text-base"
                >
                  ←
                </button>
                <button
                  onClick={next}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-black/30 flex items-center justify-center hover:bg-black hover:text-white transition text-sm sm:text-base"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes fadeSlide {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeSlide {
          animation: fadeSlide 0.5s ease-in-out;
        }
      `}</style>
    </section>
  );
}
