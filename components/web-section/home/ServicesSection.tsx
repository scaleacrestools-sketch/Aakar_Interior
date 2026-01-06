"use client";

import { useState } from "react";
import Image from "next/image";

export default function ServicesSection() {
    const [selectedService, setSelectedService] = useState("furniture");

    return (
        <section id="services" className="w-full bg-[#F5F5F0] py-16 md:py:10 font-sans">
            <div className="max-w-[95%] mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                    {/* Left Column - Title and Image */}
                    <div className="space-y-6 animate-fade-in-up">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight font-sans">
                            Service That
                            <br />
                            We Can Provide
                        </h2>
                           <p className="text-black/80 text-sm text-gray-500 font-sans">
                            We offer bespoke furniture selection, space planning, and color
                            consultation to transform your spaces into elegant, functional
                            environments.
                        </p>
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
                                        src="/demo2-slide-01.jpg"
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
                                            } font-sans`}
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
                                            } font-sans`}
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
                                            } font-sans`}
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
                                            } font-sans`}
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
                                            } font-sans`}
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
    );
}