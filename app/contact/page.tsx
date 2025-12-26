"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";

export default function ContactPage() {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });
    const [focusedField, setFocusedField] = useState("");

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted:", formData);
        alert("Thank you for your message! We'll get back to you soon.");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };


    return (
        <div className="min-h-screen bg-[#F5F5F0]">
            {/* Header */}
            <Header />

            {/* Hero Section with Background */}
            <section className="relative w-full py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/b5ad278e6d317fa77c460e7201dbb863cf70f692.png"
                        alt="Contact Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/65 to-black/75"></div>
                </div>

                <div className="max-w-[95%] mx-auto px-4 md:px-6 relative z-10">
                    <div className={`text-center space-y-4 sm:space-y-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
                        <div className="inline-block">
                            <span className="text-xs sm:text-sm md:text-base uppercase tracking-widest text-[#F4D03F] font-medium bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                Get In Touch
                            </span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
                            <span className="block">Let's Create</span>
                            <span className="block mt-2">
                                Your{" "}
                                <span className="text-[#F4D03F] italic font-[family-name:var(--font-great-vibes)]">
                                    Dream Space
                                </span>
                            </span>
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
                            Have a project in mind? We'd love to hear from you. Send us a message and we'll
                            respond as soon as possible.
                        </p>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-10 left-5 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-[#F4D03F]/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 right-5 sm:right-10 w-20 h-20 sm:w-32 sm:h-32 bg-[#4A90E2]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </section>


            {/* Main Contact Section */}
            <section className="w-full py-6 sm:py-8 md:py-10 lg:py-12">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8">
                        {/* Contact Form - Takes 3 columns */}
                        <div className="lg:col-span-3 bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-xl border border-black/5">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-1 h-8 bg-gradient-to-b from-[#8B6914] to-[#4A90E2] rounded-full"></div>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-black">
                                    Send us a Message
                                </h2>
                            </div>
                            <p className="text-sm sm:text-base text-black/70 mb-5 sm:mb-6">
                                Fill out the form below and we'll get back to you within 24 hours.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Name & Email in Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="relative">
                                        <label
                                            htmlFor="name"
                                            className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === "name" || formData.name
                                                ? "-top-2.5 text-xs bg-white px-2 text-[#8B6914] font-medium"
                                                : "top-3.5 text-sm text-black/50"
                                                }`}
                                        >
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField("name")}
                                            onBlur={() => setFocusedField("")}
                                            className="w-full px-4 py-3.5 border-2 border-black/10 rounded-lg focus:border-[#8B6914] focus:outline-none transition-all duration-300 text-sm"
                                        />
                                    </div>

                                    <div className="relative">
                                        <label
                                            htmlFor="email"
                                            className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === "email" || formData.email
                                                ? "-top-2.5 text-xs bg-white px-2 text-[#8B6914] font-medium"
                                                : "top-3.5 text-sm text-black/50"
                                                }`}
                                        >
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField("email")}
                                            onBlur={() => setFocusedField("")}
                                            className="w-full px-4 py-3.5 border-2 border-black/10 rounded-lg focus:border-[#8B6914] focus:outline-none transition-all duration-300 text-sm"
                                        />
                                    </div>
                                </div>

                                {/* Phone & Service in Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="relative">
                                        <label
                                            htmlFor="phone"
                                            className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === "phone" || formData.phone
                                                ? "-top-2.5 text-xs bg-white px-2 text-[#8B6914] font-medium"
                                                : "top-3.5 text-sm text-black/50"
                                                }`}
                                        >
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField("phone")}
                                            onBlur={() => setFocusedField("")}
                                            className="w-full px-4 py-3.5 border-2 border-black/10 rounded-lg focus:border-[#8B6914] focus:outline-none transition-all duration-300 text-sm"
                                        />
                                    </div>

                                    <div className="relative">
                                        <label
                                            htmlFor="service"
                                            className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === "service" || formData.service
                                                ? "-top-2.5 text-xs bg-white px-2 text-[#8B6914] font-medium"
                                                : "top-3.5 text-sm text-black/50"
                                                }`}
                                        >
                                            Service Interested In
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField("service")}
                                            onBlur={() => setFocusedField("")}
                                            className="w-full px-4 py-3.5 border-2 border-black/10 rounded-lg focus:border-[#8B6914] focus:outline-none transition-all duration-300 appearance-none text-sm bg-white"
                                        >
                                            <option value=""></option>
                                            <option value="furniture">Furniture Selection</option>
                                            <option value="space">Space Planning</option>
                                            <option value="color">Color Consultation</option>
                                            <option value="interior">Interior Design</option>
                                            <option value="lighting">Lighting Design</option>
                                            <option value="renovation">Building Renovation</option>
                                            <option value="consultation">Project Consultation</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Message Field */}
                                <div className="relative">
                                    <label
                                        htmlFor="message"
                                        className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === "message" || formData.message
                                            ? "-top-2.5 text-xs bg-white px-2 text-[#8B6914] font-medium"
                                            : "top-3.5 text-sm text-black/50"
                                            }`}
                                    >
                                        Your Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField("message")}
                                        onBlur={() => setFocusedField("")}
                                        className="w-full px-4 py-3.5 border-2 border-black/10 rounded-lg focus:border-[#8B6914] focus:outline-none transition-all duration-300 resize-none text-sm"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full btn-brand-gradient text-white py-3.5 rounded-lg font-semibold flex items-center justify-center gap-2 group text-base"
                                >
                                    <span>Send Message</span>
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
                                </button>
                            </form>
                        </div>

                        {/* Sidebar - Takes 2 columns */}
                        <div className="lg:col-span-2 space-y-5">
                            {/* Why Choose Us */}
                            <div className="bg-gradient-to-br from-[#1C1C1C] to-[#2C2C2C] p-5 sm:p-6 rounded-xl shadow-xl text-white">
                                <h3 className="text-xl sm:text-2xl font-serif mb-4 flex items-center gap-3">
                                    <span className="w-1 h-8 bg-gradient-to-b from-[#F4D03F] to-[#4A90E2] rounded-full"></span>
                                    Why Choose Aakar?
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        "38+ Years of Design Excellence",
                                        "1000+ Successful Projects",
                                        "Award-Winning Design Team",
                                        "Personalized Design Solutions",
                                        "On-Time Project Delivery",
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start gap-3 group cursor-default">
                                            <span className="text-[#F4D03F] text-xl group-hover:scale-125 transition-transform flex-shrink-0 mt-0.5">✓</span>
                                            <span className="text-sm text-white/90 group-hover:text-white transition-colors">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Social Media */}
                            <div className="bg-white p-5 sm:p-6 rounded-xl shadow-xl border border-black/5">
                                <h3 className="text-xl sm:text-2xl font-serif mb-4 text-black flex items-center gap-3">
                                    <span className="w-1 h-8 bg-gradient-to-b from-[#8B6914] to-[#4A90E2] rounded-full"></span>
                                    Connect With Us
                                </h3>
                                <div className="flex gap-3">
                                    <a
                                        href="https://www.instagram.com/aakarinterior_?igsh=MXI4bnJxb281MWxzYw=="
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-xl transform hover:scale-105"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/company/aakarinterior/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-xl transform hover:scale-105"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Quick Response */}
                            <div className="bg-gradient-to-br from-[#8B6914] to-[#4A90E2] p-5 rounded-xl shadow-xl text-white">
                                <div className="flex items-start gap-4">
                                    <svg className="w-8 h-8 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">Quick Response Guaranteed</h4>
                                        <p className="text-sm text-white/90">We typically respond to all inquiries within 24 hours during business days.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
