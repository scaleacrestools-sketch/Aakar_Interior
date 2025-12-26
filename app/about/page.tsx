"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";

export default function AboutPage() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeYear, setActiveYear] = useState(0);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const milestones = [
        { year: "1986", title: "Foundation", description: "Aakar Interiors was established with a vision to transform spaces" },
        { year: "1995", title: "Expansion", description: "Expanded services to commercial and hospitality sectors" },
        { year: "2005", title: "Innovation", description: "Introduced cutting-edge design technologies and sustainable practices" },
        { year: "2015", title: "Recognition", description: "Received multiple international design awards" },
        { year: "2024", title: "Excellence", description: "Leading the industry with over 1000+ successful projects" },
    ];

    const advantages = [
        {
            icon: "🎨",
            title: "Creative Excellence",
            description: "Our team brings together the latest trends and innovative design techniques to create unique, inspiring spaces."
        },
        {
            icon: "⚡",
            title: "Technical Expertise",
            description: "Combining strategic vision with technical proficiency to deliver functional and beautiful interiors."
        },
        {
            icon: "🏆",
            title: "Quality Commitment",
            description: "Unwavering dedication to quality materials, craftsmanship, and attention to detail in every project."
        },
        {
            icon: "🌟",
            title: "Client-Centric",
            description: "We listen, understand, and transform your vision into reality with personalized design solutions."
        },
    ];

    return (
        <div className="min-h-screen bg-[#F5F5F0]">
            {/* Header */}
            <Header />

            {/* Hero Section */}
            <section className="relative w-full py-12 sm:py-14 md:py-16 lg:py-20 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/ddbf2826963aff634c43547312423ea966b104bb.png"
                        alt="Interior Design Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70"></div>
                </div>

                <div className="max-w-[95%] mx-auto px-4 md:px-6 relative z-10">
                    <div className={`text-center space-y-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
                        <div className="inline-block">
                            <span className="text-sm md:text-base uppercase tracking-widest text-[#F4D03F] font-medium bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                Since 1986
                            </span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
                            <span className="block">Redefining Spaces</span>
                            <span className="block mt-2">
                                for Over{" "}
                                <span className="text-[#F4D03F] italic font-[family-name:var(--font-great-vibes)]">
                                    Three Decades
                                </span>
                            </span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
                            At Aakar Interiors, we've been redefining the way spaces are designed and experienced.
                            Our company thrives on creativity, innovation, and an unwavering commitment to quality.
                        </p>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-20 left-10 w-20 h-20 bg-[#F4D03F]/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#4A90E2]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </section>

            {/* Timeline Section */}
            <section className="w-full py-8 sm:py-10 md:py-12 bg-white">
                <div className="max-w-6xl mx-auto px-4 md:px-6">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-black mb-8 sm:mb-10 text-center">
                        Our Journey
                    </h2>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#8B6914] to-[#4A90E2] hidden md:block"></div>

                        {/* Milestones */}
                        <div className="space-y-6 md:space-y-8">
                            {milestones.map((milestone, index) => (
                                <div
                                    key={index}
                                    className={`relative flex flex-col md:flex-row items-center gap-4 md:gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                        }`}
                                    onMouseEnter={() => setActiveYear(index)}
                                >
                                    {/* Content */}
                                    <div
                                        className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"
                                            } text-center md:text-left`}
                                    >
                                        <div
                                            className={`bg-[#F5F5F0] p-4 sm:p-5 rounded-lg shadow-md hover:shadow-xl transition-all duration-500 transform hover:scale-105 ${activeYear === index ? "ring-2 ring-[#8B6914]" : ""
                                                }`}
                                        >
                                            <h3 className="text-2xl sm:text-3xl font-bold text-[#8B6914] mb-2">
                                                {milestone.year}
                                            </h3>
                                            <h4 className="text-lg sm:text-xl font-semibold text-black mb-2">
                                                {milestone.title}
                                            </h4>
                                            <p className="text-sm sm:text-base text-black/70">
                                                {milestone.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Center Dot */}
                                    <div className="hidden md:flex w-4 h-4 bg-[#8B6914] rounded-full border-4 border-white shadow-lg z-10"></div>

                                    {/* Spacer */}
                                    <div className="flex-1 hidden md:block"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Advantages Section */}
            <section className="w-full py-8 sm:py-10 md:py-12 bg-[#F5F5F0]">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="text-center mb-8 sm:mb-10">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-black mb-3">
                            The Advantages of{" "}
                            <span className="text-[#8B6914]">Aakar Interiors</span>
                        </h2>
                        <p className="text-base sm:text-lg text-black/70 max-w-3xl mx-auto">
                            We bring together the latest trends, materials, and design techniques to transform
                            spaces into something exceptional.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {advantages.map((advantage, index) => (
                            <div
                                key={index}
                                className="group bg-white p-5 sm:p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="text-5xl sm:text-6xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {advantage.icon}
                                </div>
                                <h3 className="text-xl sm:text-2xl font-semibold text-black mb-2 sm:mb-3">
                                    {advantage.title}
                                </h3>
                                <p className="text-sm sm:text-base text-black/70 leading-relaxed">
                                    {advantage.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="w-full py-8 sm:py-10 md:py-12 bg-gradient-to-br from-[#1C1C1C] to-[#2C2C2C] text-white">
                <div className="max-w-6xl mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
                        <div className="space-y-4">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight">
                                Our Vision & Mission
                            </h2>
                            <div className="space-y-3">
                                <div className="border-l-4 border-[#8B6914] pl-4 sm:pl-6">
                                    <h3 className="text-xl sm:text-2xl font-semibold mb-2">Vision</h3>
                                    <p className="text-sm sm:text-base text-white/80">
                                        To be the most trusted and innovative interior design company, setting new
                                        standards of excellence in creating spaces that inspire and transform lives.
                                    </p>
                                </div>
                                <div className="border-l-4 border-[#4A90E2] pl-4 sm:pl-6">
                                    <h3 className="text-xl sm:text-2xl font-semibold mb-2">Mission</h3>
                                    <p className="text-sm sm:text-base text-white/80">
                                        To deliver exceptional interior design solutions that blend creativity,
                                        functionality, and sustainability, while exceeding client expectations through
                                        our expertise and dedication.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
                            <Image
                                src="/7a730a4fee2a889bdd408cac0b6e45808edbf3c3.png"
                                alt="Our Vision"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="w-full py-8 sm:py-10 md:py-12 bg-white">
                <div className="max-w-6xl mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {[
                            { number: "38+", label: "Years of Excellence" },
                            { number: "1000+", label: "Projects Completed" },
                            { number: "500+", label: "Happy Clients" },
                            { number: "50+", label: "Design Awards" },
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="text-center p-4 sm:p-5 bg-[#F5F5F0] rounded-lg hover:bg-[#8B6914] hover:text-white transition-all duration-300 group"
                            >
                                <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1.5 group-hover:scale-110 transition-transform">
                                    {stat.number}
                                </div>
                                <div className="text-xs sm:text-sm md:text-base font-medium opacity-80">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-8 sm:py-10 md:py-12 bg-[#F5F5F0]">
                <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-black mb-4">
                        Ready to Transform Your Space?
                    </h2>
                    <p className="text-base sm:text-lg text-black/70 mb-6">
                        Let's create something exceptional together. Contact us today to start your journey.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-3 btn-brand-gradient text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base group shadow-md"
                    >
                        <span>Get Started</span>
                        <svg
                            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
                    </Link>
                </div>
            </section>
        </div>
    );
}
