"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TestimonialSection from "./components/TestimonialSection";
import Footer from "./components/Footer";


export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState("furniture");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F5F0] overflow-x-hidden">
      {/* Top Blue Strip */}
      {/* <div className="h-1 bg-[#4A90E2] w-full"></div> */}

      {/* Main Content */}
      <main className="max-w-[95%] mx-auto px-4 md:px-6 pt-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-2 items-start">
          {/* Left Section - Header and Hero */}
          <div className="space-y-8">
            {/* Header */}
            <header className="w-full pt-2 pb-6 bg-[#F5F5F0]">
              <nav className="flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-3 animate-fade-in">
                  <Image
                    src="/AAKAR-BLACK-scaled.png"
                    alt="AAKAR Interior"
                    width={150}
                    height={39}
                    className="h-8 md:h-10 lg:h-12 w-auto object-contain"
                  />
                </div>

                {/* Navigation */}
                <div className="hidden md:flex items-center gap-8 animate-fade-in-delay">
                  <Link
                    href="/about"
                    className="text-black hover:text-[#4A90E2] transition-colors duration-300"
                  >
                    About Us
                  </Link>
                  <a
                    href="#services"
                    className="text-black hover:text-[#4A90E2] transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Services
                  </a>
                  <a
                    href="#portfolio"
                    className="text-black hover:text-[#4A90E2] transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Portfolio
                  </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                  className="md:hidden flex items-center justify-center w-10 h-10 rounded-sm hover:bg-black/5 transition-colors"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle menu"
                >
                  <svg
                    className="w-6 h-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {mobileMenuOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>

                {/* Contact Button */}
                <Link
                  href="/contact"
                  className="hidden md:flex bg-black text-white px-3 py-2 md:px-6 md:py-3 rounded-sm items-center gap-1 md:gap-2 hover:bg-[#333] transition-all duration-300 animate-fade-in-delay-2 group text-sm md:text-base"
                >
                  <span className="hidden sm:inline">Contact Us</span>
                  <span className="sm:hidden">Contact</span>
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </Link>
              </nav>

              {/* Mobile Menu */}
              {mobileMenuOpen && (
                <>
                  {/* Backdrop */}
                  <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                  ></div>

                  {/* Menu Panel */}
                  <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 md:hidden animate-slide-in-right">
                    <div className="flex flex-col h-full">
                      {/* Menu Header */}
                      <div className="flex items-center justify-between p-4 border-b border-black/10">
                        <span className="font-semibold text-black">Menu</span>
                        <button
                          onClick={() => setMobileMenuOpen(false)}
                          className="w-8 h-8 flex items-center justify-center rounded-sm hover:bg-black/5 transition-colors"
                        >
                          <svg
                            className="w-5 h-5 text-black"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>

                      {/* Menu Items */}
                      <nav className="flex flex-col p-4 space-y-1">
                        <Link
                          href="/about"
                          className="px-4 py-3 text-black hover:bg-[#4A90E2]/10 hover:text-[#4A90E2] rounded-sm transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          About Us
                        </Link>
                        <a
                          href="#services"
                          className="px-4 py-3 text-black hover:bg-[#4A90E2]/10 hover:text-[#4A90E2] rounded-sm transition-colors"
                          onClick={(e) => {
                            e.preventDefault();
                            setMobileMenuOpen(false);
                            setTimeout(() => {
                              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                            }, 300);
                          }}
                        >
                          Services
                        </a>
                        <a
                          href="#portfolio"
                          className="px-4 py-3 text-black hover:bg-[#4A90E2]/10 hover:text-[#4A90E2] rounded-sm transition-colors"
                          onClick={(e) => {
                            e.preventDefault();
                            setMobileMenuOpen(false);
                            setTimeout(() => {
                              document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                            }, 300);
                          }}
                        >
                          Portfolio
                        </a>
                        <Link
                          href="/contact"
                          className="px-4 py-3 bg-black text-white hover:bg-[#333] rounded-sm transition-colors mt-4 text-center"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Contact Us
                        </Link>
                      </nav>
                    </div>
                  </div>
                </>
              )}
            </header>
            {/* Left Hero Section */}
            <div
              className={`space-y-8 ${isVisible ? "animate-slide-in-left" : "opacity-0"
                }`}
            >
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight">
                  <span className="block animate-fade-in-up font-[family-name:var(--font-outfit)]">
                    Crafting Interiors
                  </span>
                  <span className="block animate-fade-in-up-delay font-[family-name:var(--font-outfit)]">
                    with{" "}
                    <em className="font-[family-name:var(--font-great-vibes)] not-italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-amber-600 font-normal">Elegance</em>{" "}
                    and
                  </span>
                  <span className="block animate-fade-in-up-delay-2">
                    Precision
                  </span>
                </h1>
              </div>

              <p className="text-sm sm:text-base md:text-lg text-black/80 leading-relaxed max-w-lg animate-fade-in-up-delay-3">
                At Interor, we transform spaces with meticulous attention to
                detail and a touch of elegance. Our expert designers create
                bespoke interiors that perfectly reflect your style and needs.
                Let us bring your vision to life with unparalleled craftsmanship
                and creativity.
              </p>

              {/* Scroll Indicator */}
              <div className="flex items-center gap-3 pt-8 animate-fade-in-up-delay-4">
                <div className="w-px h-12 bg-black animate-scroll-indicator"></div>
                <span className="text-sm text-black/70">Scroll to <br />explore</span>
              </div>
            </div>
          </div>

          {/* Right Image Gallery */}
          <div
            className={`relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden ${isVisible ? "animate-slide-in-right" : "opacity-0"
              }`}
          >
            <div className="animate-infinite-scroll-up">
              {/* First Set of Images */}
              <div className="grid grid-cols-2 gap-4">
                {/* Top Image */}
                <div className="col-span-1">
                  <div className="relative w-full h-48 sm:h-56 md:h-64 border-2 border-white rounded-sm overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500">
                    <Image
                      src="/ddbf2826963aff634c43547312423ea966b104bb.png"
                      alt="Interior Design"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Middle Left Image */}
                <div className="col-span-1">
                  <div className="relative w-full h-48 sm:h-56 md:h-64 border-2 border-white rounded-sm overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500">
                    <Image
                      src="/Residence.webp"
                      alt="Residence"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Middle Right Large Image */}
                <div className="col-span-2">
                  <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80 border-2 border-white rounded-sm overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500">
                    <Image
                      src="/101.webp"
                      alt="Interior Design"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Bottom Left Image */}
                <div className="col-span-1">
                  <div className="relative w-full h-40 sm:h-44 md:h-48 border-2 border-white rounded-sm overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500">
                    <Image
                      src="/optimizing.webp"
                      alt="Interior Design"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Bottom Right Image */}
                <div className="col-span-1">
                  <div className="relative w-full h-40 sm:h-44 md:h-48 border-2 border-white rounded-sm overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500">
                    <Image
                      src="/3d.webp"
                      alt="Interior Design"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Duplicate Set for Seamless Loop */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                {/* Top Image */}
                <div className="col-span-1">
                  <div className="relative w-full h-48 sm:h-56 md:h-64 border-2 border-white rounded-sm overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500">
                    <Image
                      src="/ddbf2826963aff634c43547312423ea966b104bb.png"
                      alt="Interior Design"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Middle Left Image */}
                <div className="col-span-1">
                  <div className="relative w-full h-48 sm:h-56 md:h-64 border-2 border-white rounded-sm overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500">
                    <Image
                      src="/Residence.webp"
                      alt="Residence"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Middle Right Large Image */}
                <div className="col-span-2">
                  <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80 border-2 border-white rounded-sm overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500">
                    <Image
                      src="/101.webp"
                      alt="Interior Design"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Bottom Left Image */}
                <div className="col-span-1">
                  <div className="relative w-full h-40 sm:h-44 md:h-48 border-2 border-white rounded-sm overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500">
                    <Image
                      src="/optimizing.webp"
                      alt="Interior Design"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Bottom Right Image */}
                <div className="col-span-1">
                  <div className="relative w-full h-40 sm:h-44 md:h-48 border-2 border-white rounded-sm overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500">
                    <Image
                      src="/3d.webp"
                      alt="Interior Design"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Awards Section */}
      <footer className="w-full bg-[#0a0a0a] mt-10 py-8">
        <div className="max-w-[95%] mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Awards Title */}
            <div className="flex-shrink-0 animate-fade-in-left flex items-center gap-3">
              <div className="relative h-20 sm:h-24 md:h-32 w-auto">
                <Image
                  src="/Awards.png"
                  alt="Awards"
                  width={200}
                  height={400}
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="h-px w-4 sm:w-6 md:w-8 bg-gray-600"></div>
            </div>

            {/* Awards List */}
            <div className="flex flex-wrap gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-24 flex-1 animate-fade-in-right">
              {[
                {
                  name: "German Design Award",
                  year: "2021",
                  image: "/german-design-award.png",
                },
                {
                  name: "Gold A' Design Award",
                  year: "2021",
                  image: "/a-design-award.png",
                },
                {
                  name: "IF Design Award",
                  year: "2020",
                  image: "/if-design-award.png",
                },
                {
                  name: "Good Design Award",
                  year: "2019",
                  image: "/good-design-award.png",
                },
              ].map((award, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 group hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Award Badge Image */}
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center flex-shrink-0">
                    <Image
                      src={award.image}
                      alt={award.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Award Text */}
                  <div className="text-gray-300">
                    <div className="font-semibold text-sm sm:text-base md:text-lg leading-tight">
                      {award.name}
                    </div>
                    <div className="text-gray-500 text-xs sm:text-sm mt-1">
                      {award.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Services Section */}
      <section id="services" className="w-full bg-[#F5F5F0] py-16">
        <div className="max-w-[95%] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Title and Image */}
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-black leading-tight">
                Service That
                <br />
                We Can Provide
              </h2>
              <div className="relative w-full rounded-lg overflow-hidden shadow-lg transition-all duration-500">
                {/* Furniture Selection Image */}
                {selectedService === "furniture" && (
                  <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/Theww.webp"
                      alt="Furniture Selection"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Space Planning Image */}
                {selectedService === "space" && (
                  <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/Skilled-1536x658.webp"
                      alt="Space Planning"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Color Consultation Image */}
                {selectedService === "color" && (
                  <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/project.webp"
                      alt="Color Consultation"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Interior Design Image */}
                {selectedService === "interior" && (
                  <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/innovative-1536x658.webp"
                      alt="Interior Design"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Lighting Design Image */}
                {selectedService === "lighting" && (
                  <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/Residence.webp"
                      alt="Lighting Design"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Description and Services List */}
            <div className="space-y-8 animate-fade-in-up-delay">
              <p className="text-black/80 text-sm sm:text-base leading-relaxed max-w-lg">
                We offer bespoke furniture selection, space planning, and color
                consultation to transform your spaces into elegant, functional
                environments.
              </p>

              {/* Services List */}
              <div className="space-y-0">
                {/* Furniture Selection */}
                <div
                  className="group relative cursor-pointer"
                  onClick={() => setSelectedService("furniture")}
                >
                  <div
                    className={`flex items-center justify-between py-6 border-b transition-colors duration-300 ${selectedService === "furniture"
                      ? "border-black"
                      : "border-gray-300 hover:border-black"
                      }`}
                  >
                    <h3
                      className={`text-base sm:text-lg md:text-xl transition-all duration-300 ${selectedService === "furniture"
                        ? "font-semibold text-black"
                        : "font-medium text-black/70"
                        }`}
                    >
                      Furniture Selection
                    </h3>
                    <button
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-300 group-hover:scale-110 ${selectedService === "furniture"
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                        }`}
                    >
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-black"
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
                    </button>
                  </div>
                </div>

                {/* Space Planning */}
                <div
                  className="group relative cursor-pointer"
                  onClick={() => setSelectedService("space")}
                >
                  <div
                    className={`flex items-center justify-between py-6 border-b transition-colors duration-300 ${selectedService === "space"
                      ? "border-black"
                      : "border-gray-300 hover:border-black"
                      }`}
                  >
                    <h3
                      className={`text-base sm:text-lg md:text-xl transition-all duration-300 ${selectedService === "space"
                        ? "font-semibold text-black"
                        : "font-medium text-black/70"
                        }`}
                    >
                      Space Planning
                    </h3>
                    <button
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-300 group-hover:scale-110 ${selectedService === "space"
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                        }`}
                    >
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-black"
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
                    </button>
                  </div>
                </div>

                {/* Color Consultation */}
                <div
                  className="group relative cursor-pointer"
                  onClick={() => setSelectedService("color")}
                >
                  <div
                    className={`flex items-center justify-between py-6 border-b transition-colors duration-300 ${selectedService === "color"
                      ? "border-black"
                      : "border-gray-300 hover:border-black"
                      }`}
                  >
                    <h3
                      className={`text-base sm:text-lg md:text-xl transition-all duration-300 ${selectedService === "color"
                        ? "font-semibold text-black"
                        : "font-medium text-black/70"
                        }`}
                    >
                      Color Consultation
                    </h3>
                    <button
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-300 group-hover:scale-110 ${selectedService === "color"
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                        }`}
                    >
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-black"
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
                    </button>
                  </div>
                </div>

                {/* Interior Design */}
                <div
                  className="group relative cursor-pointer"
                  onClick={() => setSelectedService("interior")}
                >
                  <div
                    className={`flex items-center justify-between py-6 border-b transition-colors duration-300 ${selectedService === "interior"
                      ? "border-black"
                      : "border-gray-300 hover:border-black"
                      }`}
                  >
                    <h3
                      className={`text-base sm:text-lg md:text-xl transition-all duration-300 ${selectedService === "interior"
                        ? "font-semibold text-black"
                        : "font-medium text-black/70"
                        }`}
                    >
                      Interior Design
                    </h3>
                    <button
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-300 group-hover:scale-110 ${selectedService === "interior"
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                        }`}
                    >
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-black"
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
                    </button>
                  </div>
                </div>

                {/* Lighting Design */}
                <div
                  className="group relative cursor-pointer"
                  onClick={() => setSelectedService("lighting")}
                >
                  <div
                    className={`flex items-center justify-between py-6 border-b transition-colors duration-300 ${selectedService === "lighting"
                      ? "border-black"
                      : "border-gray-300 hover:border-black"
                      }`}
                  >
                    <h3
                      className={`text-base sm:text-lg md:text-xl transition-all duration-300 ${selectedService === "lighting"
                        ? "font-semibold text-black"
                        : "font-medium text-black/70"
                        }`}
                    >
                      Lighting Design
                    </h3>
                    <button
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-300 group-hover:scale-110 ${selectedService === "lighting"
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                        }`}
                    >
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-black"
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
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="w-full bg-[#F5F5F0] pt-8 pb-16 relative">
        {/* Top Blue Strip */}
        {/* <div className="h-1 bg-[#4A90E2] w-full absolute top-0 left-0"></div> */}

        <div className="max-w-[95%] mx-auto px-4 md:px-6">
          {/* Top Section - Label and Title */}
          <div className="mb-12 animate-fade-in-up">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#8B6914]"></div>
              <span className="text-xs md:text-sm uppercase tracking-wider text-black/70 font-medium">
                OUR SERVICES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-black leading-tight max-w-4xl">
              We provide the{" "}
              <em className="italic font-normal">best solutions</em>
              <br />
              for your dream home
            </h2>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Architectural & Interior Design Card */}
            <div className="bg-[#F9F9F4] rounded-lg p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-500 animate-fade-in-scale group h-full min-h-[280px] sm:min-h-[320px] flex flex-col">
              <div className="mb-8 flex justify-start">
                <div className="w-16 h-16 text-[#8B6914] animate-fade-in-scale-delay">
                  <svg
                    viewBox="0 0 64 64"
                    fill="none"
                    className="w-full h-full"
                  >
                    <rect
                      x="8"
                      y="20"
                      width="12"
                      height="8"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <rect
                      x="24"
                      y="20"
                      width="12"
                      height="8"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <rect
                      x="40"
                      y="20"
                      width="12"
                      height="8"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <rect
                      x="8"
                      y="32"
                      width="12"
                      height="8"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <rect
                      x="24"
                      y="32"
                      width="12"
                      height="8"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <rect
                      x="40"
                      y="32"
                      width="12"
                      height="8"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <rect
                      x="8"
                      y="44"
                      width="12"
                      height="8"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <rect
                      x="24"
                      y="44"
                      width="12"
                      height="8"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <rect
                      x="40"
                      y="44"
                      width="12"
                      height="8"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <line
                      x1="4"
                      y1="16"
                      x2="4"
                      y2="56"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <line
                      x1="60"
                      y1="16"
                      x2="60"
                      y2="56"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <line
                      x1="4"
                      y1="16"
                      x2="60"
                      y2="16"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <line
                      x1="4"
                      y1="56"
                      x2="60"
                      y2="56"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif text-black mb-4 group-hover:text-[#8B6914] transition-colors duration-300">
                Architectural & Interior design
              </h3>
              <p className="text-black/70 text-sm leading-relaxed">
                Custom spaces that balance function and style, tailored to your
                lifestyle.
              </p>
            </div>

            {/* Building Renovation Card */}
            <div className="bg-[#F9F9F4] rounded-lg p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-500 animate-fade-in-scale-delay group h-full min-h-[280px] sm:min-h-[320px] flex flex-col">
              <div className="mb-8 flex justify-start">
                <div className="w-16 h-16 text-[#8B6914] animate-fade-in-scale-delay-2">
                  <svg
                    viewBox="0 0 64 64"
                    fill="none"
                    className="w-full h-full"
                  >
                    <rect
                      x="12"
                      y="16"
                      width="40"
                      height="40"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      rx="2"
                    />
                    <rect
                      x="20"
                      y="24"
                      width="24"
                      height="24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      rx="1"
                    />
                    <line
                      x1="32"
                      y1="16"
                      x2="32"
                      y2="8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      x1="24"
                      y1="12"
                      x2="40"
                      y2="12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      x1="20"
                      y1="32"
                      x2="28"
                      y2="32"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <line
                      x1="36"
                      y1="32"
                      x2="44"
                      y2="32"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <line
                      x1="20"
                      y1="40"
                      x2="28"
                      y2="40"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <line
                      x1="36"
                      y1="40"
                      x2="44"
                      y2="40"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-serif text-black mb-4 group-hover:text-[#8B6914] transition-colors duration-300">
                Building Renovation
              </h3>
              <p className="text-black/70 text-sm leading-relaxed">
                Transforming old spaces into modern, stylish, and functional
                environments.
              </p>
            </div>

            {/* Construction Management Card */}
            <div className="bg-[#F9F9F4] rounded-lg p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-500 animate-fade-in-scale-delay-2 group h-full min-h-[280px] sm:min-h-[320px] flex flex-col">
              <div className="mb-8 flex justify-start">
                <div className="w-16 h-16 text-[#8B6914] animate-fade-in-scale-delay-3">
                  <svg
                    viewBox="0 0 64 64"
                    fill="none"
                    className="w-full h-full"
                  >
                    <path
                      d="M32 12 L20 20 L20 44 L32 52 L44 44 L44 20 Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M20 20 L32 28 L44 20"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M20 32 L32 40 L44 32"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M20 44 L32 52 L44 44"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <line
                      x1="26"
                      y1="24"
                      x2="26"
                      y2="40"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <line
                      x1="38"
                      y1="24"
                      x2="38"
                      y2="40"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <rect
                      x="28"
                      y="18"
                      width="8"
                      height="4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-serif text-black mb-4 group-hover:text-[#8B6914] transition-colors duration-300">
                Construction Management
              </h3>
              <p className="text-black/70 text-sm leading-relaxed">
                Seamless planning and execution to deliver projects on time and
                budget.
              </p>
            </div>

            {/* Project Consultation Card */}
            <div className="bg-[#F9F9F4] rounded-lg p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-500 animate-fade-in-scale-delay-3 group h-full min-h-[280px] sm:min-h-[320px] flex flex-col">
              <div className="mb-8 flex justify-start">
                <div className="w-16 h-16 text-[#8B6914] animate-fade-in-scale-delay-4">
                  <svg
                    viewBox="0 0 64 64"
                    fill="none"
                    className="w-full h-full"
                  >
                    <circle
                      cx="32"
                      cy="32"
                      r="20"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <circle
                      cx="32"
                      cy="32"
                      r="12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <line
                      x1="32"
                      y1="12"
                      x2="32"
                      y2="8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      x1="32"
                      y1="52"
                      x2="32"
                      y2="56"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      x1="12"
                      y1="32"
                      x2="8"
                      y2="32"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      x1="52"
                      y1="32"
                      x2="56"
                      y2="32"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      x1="22"
                      y1="22"
                      x2="18"
                      y2="18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      x1="42"
                      y1="42"
                      x2="46"
                      y2="46"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      x1="42"
                      y1="22"
                      x2="46"
                      y2="18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      x1="22"
                      y1="42"
                      x2="18"
                      y2="46"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif text-black mb-4 group-hover:text-[#8B6914] transition-colors duration-300">
                Project Consultation
              </h3>
              <p className="text-black/70 text-sm leading-relaxed">
                Expert guidance and strategic planning to bring your vision to
                life with precision.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* How We Design Section */}
      <section className="w-full bg-[#F5F5F0] py-12 md:py-16 lg:py-20">
        <div className="max-w-[95%] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left – Steps */}
            <div className="space-y-8 md:space-y-10">
              <div>
                <p className="text-xs uppercase tracking-widest text-black/50 mb-2">
                  Step 01
                </p>
                <h3 className="text-xl sm:text-2xl font-serif text-black mb-3">
                  Planning
                </h3>
                <p className="text-black/70 text-sm leading-relaxed max-w-md">
                  We start by understanding your needs and preferences, then
                  create detailed design concepts and mood boards to visualize
                  your ideal space.
                </p>
              </div>

              <div className="border-t border-black/20 pt-8">
                <p className="text-xs uppercase tracking-widest text-black/50 mb-2">
                  Step 02
                </p>
                <h3 className="text-xl sm:text-2xl font-serif text-black mb-3">
                  Estimating
                </h3>
                <p className="text-black/70 text-sm leading-relaxed max-w-md">
                  Our team presents the design proposal, incorporating your
                  feedback to refine and perfect the plan.
                </p>
              </div>

              <div className="border-t border-black/20 pt-8">
                <p className="text-xs uppercase tracking-widest text-black/50 mb-2">
                  Step 03
                </p>
                <h3 className="text-xl sm:text-2xl font-serif text-black mb-3">
                  Building
                </h3>
                <p className="text-black/70 text-sm leading-relaxed max-w-md">
                  We manage the execution of the design with meticulous
                  attention to detail, ensuring a flawless transformation.
                </p>
              </div>
            </div>

            {/* Right – Title + Image */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-black leading-tight">
                HOW WE DESIGN
                <br />
                YOUR INTERIOR
              </h2>

              <div className="relative w-full sm:w-[80%] md:w-[70%] lg:w-[60%] h-[300px] sm:h-[350px] md:h-[400px] rounded-md overflow-hidden shadow-lg z-10 lg:-mb-24">
                <Image
                  src="/Image-Section.png" // replace with your image
                  alt="Interior Design"
                  fill
                  className="object-cover "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="portfolio" className="w-full bg-[#0E0E0E] py-12 md:py-16 lg:py-20">
        <div className="max-w-[95%] mx-auto px-4 md:px-6">
          {/* Title */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 md:mb-10 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-2 sm:mb-3">
                OUR FEATURED PROJECTS
              </h2>
              <p className="text-white/60 text-sm max-w-md">
                Discover our exceptional projects. Each one reflects our
                commitment to excellence in interior design.
              </p>
            </div>
            <span className="text-white/50 text-xs sm:text-sm">01 / 09</span>
          </div>

          {/* Cards */}
          {/* Featured Projects – Infinite Horizontal Scroll */}
          <div className="relative overflow-hidden">
            <div className="flex gap-4 sm:gap-6 animate-scroll-horizontal w-max">
              {[...Array(2)].map((_, loopIndex) => (
                <div key={loopIndex} className="flex gap-4 sm:gap-6">
                  {/* Card 1 */}
                  <div className="group relative min-w-[280px] sm:min-w-[320px] overflow-hidden rounded-lg">
                    <Image
                      src="/ddbf2826963aff634c43547312423ea966b104bb.png"
                      alt="Office Room DEXA Corp"
                      width={600}
                      height={400}
                      className="w-full h-[220px] sm:h-[260px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
                      <h3 className="text-white font-medium text-sm sm:text-base">
                        Office Room DEXA Corp
                      </h3>
                      <p className="text-white/60 text-xs mt-1">
                        Furniture Selection · South Jakarta
                      </p>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="group relative min-w-[280px] sm:min-w-[320px] overflow-hidden rounded-lg">
                    <Image
                      src="/7a730a4fee2a889bdd408cac0b6e45808edbf3c3.png"
                      alt="Omoisori Kohi"
                      width={600}
                      height={400}
                      className="w-full h-[220px] sm:h-[260px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
                      <h3 className="text-white font-medium text-sm sm:text-base">Omoisori Kohi</h3>
                      <p className="text-white/60 text-xs mt-1">
                        Space Planning · North Jakarta
                      </p>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="group relative min-w-[280px] sm:min-w-[320px] overflow-hidden rounded-lg">
                    <Image
                      src="/b5ad278e6d317fa77c460e7201dbb863cf70f692.png"
                      alt="Modern Kitchen"
                      width={600}
                      height={400}
                      className="w-full h-[220px] sm:h-[260px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
                      <h3 className="text-white font-medium text-sm sm:text-base">Modern Kitchen</h3>
                      <p className="text-white/60 text-xs mt-1">
                        Interior Design · Jakarta
                      </p>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="group relative min-w-[280px] sm:min-w-[320px] overflow-hidden rounded-lg">
                    <Image
                      src="/c74e6ec219396fe45062052aa8afd0c22f00395c.png"
                      alt="Luxury Living Room"
                      width={600}
                      height={400}
                      className="w-full h-[220px] sm:h-[260px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
                      <h3 className="text-white font-medium text-sm sm:text-base">
                        Luxury Living Room
                      </h3>
                      <p className="text-white/60 text-xs mt-1">
                        Interior Styling · Jakarta
                      </p>
                    </div>
                  </div>

                  {/* Card 5 */}
                  <div className="group relative min-w-[280px] sm:min-w-[320px] overflow-hidden rounded-lg">
                    <Image
                      src="/d5d8d162934a0ffec9b688a25d5be658ba66b28a.png"
                      alt="Minimal Workspace"
                      width={600}
                      height={400}
                      className="w-full h-[220px] sm:h-[260px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
                      <h3 className="text-white font-medium text-sm sm:text-base">
                        Minimal Workspace
                      </h3>
                      <p className="text-white/60 text-xs mt-1">
                        Office Design · Jakarta
                      </p>
                    </div>
                  </div>

                  {/* Card 6 */}
                  <div className="group relative min-w-[280px] sm:min-w-[320px] overflow-hidden rounded-lg">
                    <Image
                      src="/b5ad278e6d317fa77c460e7201dbb863cf70f692.png"
                      alt="Cafe Interior"
                      width={600}
                      height={400}
                      className="w-full h-[220px] sm:h-[260px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
                      <h3 className="text-white font-medium text-sm sm:text-base">Cafe Interior</h3>
                      <p className="text-white/60 text-xs mt-1">
                        Space Planning · Bandung
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <TestimonialSection />
      <Footer />
    </div>
  );
}
