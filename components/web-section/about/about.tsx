"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import { Palette, Zap, Award, Star } from "lucide-react";
import Header from "@/components/web-section/layout/header";
import Footer from "@/components/web-section/common-components/Footer";

const inter = Inter({ subsets: ["latin"] });

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
            icon: Palette,
            title: "Creative Excellence",
            description: "Our team brings together the latest trends and innovative design techniques to create unique, inspiring spaces."
        },
        {
            icon: Zap,
            title: "Technical Expertise",
            description: "Combining strategic vision with technical proficiency to deliver functional and beautiful interiors."
        },
        {
            icon: Award,
            title: "Quality Commitment",
            description: "Unwavering dedication to quality materials, craftsmanship, and attention to detail in every project."
        },
        {
            icon: Star,
            title: "Client-Centric",
            description: "We listen, understand, and transform your vision into reality with personalized design solutions."
        },
    ];

    return (
        <div className={`min-h-screen bg-[#F5F5F0] ${inter.className}`}>

            {/* Hero Section */}
            <section className="relative w-full py-16 md:py-20 lg:py-24 overflow-hidden">
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
                    <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/85"></div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-20 left-10 w-24 h-24 bg-[#8B6914]/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#8B6914]/15 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                    <div className={`text-center space-y-6 transition-all pt-10 duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                        <div className="inline-block">
                            <span className="text-sm md:text-base uppercase text-[#8B6914] font-semibold bg-white/10 backdrop-blur-md px-6 py-3 rounded-sm border border-[#8B6914]/30">
                                Since 1986
                            </span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                            <span className="block mb-3">Redefining Spaces</span>
                            <span className="block">
                                for Over{" "}
                                <span className="text-[#b07d62] italic">
                                    Three Decades
                                </span>
                            </span>
                        </h1>
                        <p className="text-base md:text-sm text-white/90 max-w-3xl mx-auto leading-relaxed">
                            At Aakar Interiors, we've been redefining the way spaces are designed and experienced.
                            Our company thrives on creativity, innovation, and an unwavering commitment to quality.
                        </p>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="w-full py-12 md:py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="h-px w-12 bg-[#8B6914]"></div>
                            <span className="text-xs md:text-sm uppercase tracking-wider text-black/70 font-medium">
                                Our Journey
                            </span>
                            <div className="h-px w-12 bg-[#8B6914]"></div>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold md:text-5xl text-black">
                            Our Journey
                        </h2>
                    </div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-[#8B6914]/30 hidden md:block"></div>

                        {/* Milestones */}
                        <div className="space-y-8 md:space-y-12">
                            {milestones.map((milestone, index) => (
                                <div
                                    key={index}
                                    className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                        }`}
                                    onMouseEnter={() => setActiveYear(index)}
                                >
                                    {/* Content */}
                                    <div
                                        className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"
                                            } text-center md:text-left`}
                                    >
                                        <div
                                            className={`bg-[#F5F5F0] p-6 rounded-sm shadow-md hover:shadow-lg transition-all duration-300 ${activeYear === index ? "ring-2 ring-[#8B6914]" : ""
                                                }`}
                                        >
                                            <h3 className="text-3xl font-bold text-[#8B6914] mb-2">
                                                {milestone.year}
                                            </h3>
                                            <h4 className="text-xl font-semibold text-black mb-2">
                                                {milestone.title}
                                            </h4>
                                            <p className="text-base text-black/70 text-sm">
                                                {milestone.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Center Dot */}
                                    <div className="hidden md:flex w-4 h-4 bg-[#8B6914] rounded-full border-4 border-white shadow-md z-10"></div>

                                    {/* Spacer */}
                                    <div className="flex-1 hidden md:block"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Advantages Section */}
            <section className="w-full py-12 md:py-16 bg-[#F5F5F0]">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="h-px w-12 bg-[#8B6914]"></div>
                            <span className="text-xs md:text-sm uppercase tracking-wider text-black/70 font-medium">
                                Our Advantages
                            </span>
                            <div className="h-px w-12 bg-[#8B6914]"></div>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
                            The Advantages of{" "}
                            <span className="text-[#8B6914]">Aakar Interiors</span>
                        </h2>
                        <p className="text-base md:text-sm text-black/70 max-w-3xl mx-auto">
                            We bring together the latest trends, materials, and design techniques to transform
                            spaces into something exceptional.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {advantages.map((advantage, index) => {
                            const IconComponent = advantage.icon;
                            return (
                                <div
                                    key={index}
                                    className="group bg-white p-6 rounded-sm shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <IconComponent className="w-12 h-12 text-[#8B6914]" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-black mb-3">
                                        {advantage.title}
                                    </h3>
                                    <p className="text-sm text-black/70 leading-relaxed">
                                        {advantage.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="w-full py-12 md:py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-px w-12 bg-[#8B6914]"></div>
                                <span className="text-xs md:text-sm uppercase tracking-wider text-black/70 font-medium">
                                    Our Vision & Mission
                                </span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight">
                                Our Vision & Mission
                            </h2>
                            <div className="space-y-6">
                                <div className="group border-l-4 border-[#8B6914] pl-6 hover:pl-8 transition-all duration-300">
                                    <h3 className="text-xl sm:text-2xl font-semibold text-[#8B6914] mb-3">Vision</h3>
                                    <p className="text-sm md:text-base text-black/70 leading-relaxed">
                                        To be the most trusted and innovative interior design company, setting new
                                        standards of excellence in creating spaces that inspire and transform lives.
                                    </p>
                                </div>
                                <div className="group border-l-4 border-black pl-6 hover:pl-8 transition-all duration-300">
                                    <h3 className="text-xl sm:text-2xl font-semibold text-black mb-3">Mission</h3>
                                    <p className="text-sm md:text-base text-black/70 leading-relaxed">
                                        To deliver exceptional interior design solutions that blend creativity,
                                        functionality, and sustainability, while exceeding client expectations through
                                        our expertise and dedication.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-[400px] md:h-[500px] rounded-sm overflow-hidden shadow-xl group">
                            <Image
                                src="/7a730a4fee2a889bdd408cac0b6e45808edbf3c3.png"
                                alt="Our Vision"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="w-full py-12 md:py-16 bg-[#F5F5F0]">
                <div className="max-w-6xl mx-auto px-4 md:px-6">
             {/* Section Header */}
                 <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="h-px w-12 bg-[#8B6914]"></div>
                            <span className="text-xs md:text-sm uppercase tracking-wider text-black/70 font-medium">
                                Our Achievements
                            </span>
                            <div className="h-px w-12 bg-[#8B6914]"></div>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
                            Numbers That Speak
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {[
                            { number: "38+", label: "Years of Excellence", color: "text-[#8B6914]" },
                            { number: "1000+", label: "Projects Completed", color: "text-black" },
                            { number: "500+", label: "Happy Clients", color: "text-[#8B6914]" },
                            { number: "50+", label: "Design Awards", color: "text-black" },
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="relative text-center p-6 md:p-8 bg-white rounded-sm shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden"
                            >
                                {/* Decorative background element */}
                                <div className="absolute inset-0 bg-linear-to-br from-[#8B6914]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <div className={`text-4xl md:text-5xl lg:text-6xl font-bold ${stat.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                                        {stat.number}
                                    </div>
                                    <div className="text-xs md:text-sm lg:text-base font-medium text-black/70 leading-tight">
                                        {stat.label}
                                    </div>
                                </div>

                                {/* Bottom accent line */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#8B6914] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-12 md:py-16 bg-white relative overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute top-10 left-10 w-32 h-32 bg-[#8B6914]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#8B6914]/5 rounded-full blur-3xl"></div>

                <div className="max-w-4xl mx-auto px-4 md:px-6 text-center relative z-10">
                    {/* Section Label */}
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="h-px w-12 bg-[#8B6914]"></div>
                        <span className="text-xs md:text-sm uppercase tracking-wider text-black/70 font-medium">
                            Get In Touch
                        </span>
                        <div className="h-px w-12 bg-[#8B6914]"></div>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 leading-tight">
                        Ready to Transform Your Space?
                    </h2>
                    <p className="text-sm md:text-base text-black/70 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Let's create something exceptional together. Contact us today to start your journey towards the space of your dreams.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-[#8B6914] text-white px-8 py-4 rounded-sm hover:bg-[#6d5410] transition-all duration-300 group shadow-md hover:shadow-lg"
                        >
                            <span className="font-medium">Get Started</span>
                            <svg
                                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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

                        <Link
                            href="/portfolio"
                            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-sm border-2 border-black hover:bg-black hover:text-white transition-all duration-300 group shadow-md hover:shadow-lg"
                        >
                            <span className="font-medium">View Portfolio</span>
                            <svg
                                className="w-5 h-5 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                            </svg>
                        </Link>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-8 pt-8 border-t border-black/10">
                        <p className="text-xs md:text-sm text-black/60">
                            Or call us directly at{" "}
                            <a href="tel:+1234567890" className="text-[#8B6914] font-semibold hover:underline">
                                +123 456 7890
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}