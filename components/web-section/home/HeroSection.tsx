"use client";

import { useState } from "react";
import Image from "next/image";

export default function HeroSection() {
    const [isVisible] = useState(true);

    return (
        <main className="max-w-[95%] mx-auto px-4 md:px-6 py-12 md:py-16 font-sans">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-2 items-start">
                {/* Left Section - Hero Content */}
                <div className="space-y-8">
                    {/* Left Hero Section */}
                    <div
                        className={`space-y-2 sm:space-y-8 ${isVisible ? "animate-slide-in-left" : "opacity-0"
                            }`}
                    >
                        <div className="space-y-4">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight">
                                <span className="block animate-fade-in-up font-sans">
                                    Crafting Interiors
                                </span>
                                <span className="block animate-fade-in-up-delay font-sans">
                                    with{" "}
                                    <em className="not-italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#b07d62] font-bold font-inter">Elegance</em>{" "}
                                    and
                                </span>
                                <span className="block animate-fade-in-up-delay-2 font-sans">
                                    Precision
                                </span>
                            </h1>
                        </div>

                        <p className="text-sm sm:text-base md:text-sm text-black/80 leading-relaxed max-w-lg animate-fade-in-up-delay-3 font-sans">
                            At Interior, we transform spaces with meticulous attention to
                            detail and a touch of elegance. Our expert designers create
                            bespoke interiors that perfectly reflect your style and needs.
                            Let us bring your vision to life with unparalleled craftsmanship
                            and creativity.
                        </p>

                        {/* Scroll Indicator */}
                        <div className="flex items-center gap-3 pt-2 md:pt-8 animate-fade-in-up-delay-4 font-sans">
                            <div className="w-px h-12 bg-black animate-scroll-indicator"></div>
                            <span className="text-sm text-black/70 font-sans">Scroll to <br />explore</span>
                        </div>
                    </div>
                </div>

                {/* Right Image Gallery */}
                <div
                    className={`relative h-[500px] sm:h-[500px] md:h-[500px] lg:h-[550px] overflow-hidden ${isVisible ? "animate-slide-in-right" : "opacity-0"
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
    );
}