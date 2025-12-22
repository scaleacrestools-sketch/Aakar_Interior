"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

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
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const contactInfo = [
        {
            icon: "📍",
            title: "Visit Us",
            details: ["123 Design Street", "Creativity City, Country"],
            color: "from-[#8B6914] to-[#A67C00]",
        },
        {
            icon: "📞",
            title: "Call Us",
            details: ["+123-456-7890", "+123-456-7891"],
            color: "from-[#4A90E2] to-[#357ABD]",
        },
        {
            icon: "✉️",
            title: "Email Us",
            details: ["hello@aakar.com", "info@aakar.com"],
            color: "from-[#8B6914] to-[#4A90E2]",
        },
        {
            icon: "🕐",
            title: "Working Hours",
            details: ["Mon - Fri: 9AM - 6PM", "Sat: 10AM - 4PM"],
            color: "from-[#4A90E2] to-[#8B6914]",
        },
    ];

    return (
        <div className="min-h-screen bg-[#F5F5F0]">
            {/* Header */}
            <header className="w-full bg-[#F5F5F0] border-b border-black/10">
                <div className="max-w-[95%] mx-auto px-4 md:px-6 py-4">
                    <nav className="flex items-center justify-between">
                        <Link href="/" className="flex items-center gap-3">
                            <Image
                                src="/AAKAR-BLACK-scaled.png"
                                alt="AAKAR Interior"
                                width={150}
                                height={39}
                                className="h-8 md:h-10 lg:h-12 w-auto object-contain"
                            />
                        </Link>
                        <Link
                            href="/"
                            className="text-sm md:text-base text-black hover:text-[#4A90E2] transition-colors duration-300"
                        >
                            ← Back to Home
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
                <div className="max-w-[95%] mx-auto px-4 md:px-6">
                    <div className={`text-center space-y-4 sm:space-y-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
                        <div className="inline-block">
                            <span className="text-xs sm:text-sm md:text-base uppercase tracking-widest text-[#8B6914] font-medium">
                                Get In Touch
                            </span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight">
                            <span className="block">Let's Create</span>
                            <span className="block mt-2">
                                Your{" "}
                                <span className="text-[#8B6914] italic font-[family-name:var(--font-great-vibes)]">
                                    Dream Space
                                </span>
                            </span>
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black/70 max-w-3xl mx-auto leading-relaxed">
                            Have a project in mind? We'd love to hear from you. Send us a message and we'll
                            respond as soon as possible.
                        </p>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-10 left-5 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-[#8B6914]/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 right-5 sm:right-10 w-20 h-20 sm:w-32 sm:h-32 bg-[#4A90E2]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </section>

            {/* Contact Info Cards */}
            <section className="w-full py-8 sm:py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {contactInfo.map((info, index) => (
                            <div
                                key={index}
                                className="group relative bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Gradient Background on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                                <div className="relative z-10">
                                    <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                                        {info.icon}
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-black mb-2 sm:mb-3">
                                        {info.title}
                                    </h3>
                                    {info.details.map((detail, idx) => (
                                        <p key={idx} className="text-xs sm:text-sm text-black/70">
                                            {detail}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
                        {/* Contact Form */}
                        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-xl">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-black mb-4 sm:mb-6">
                                Send us a Message
                            </h2>
                            <p className="text-sm sm:text-base text-black/70 mb-6 sm:mb-8">
                                Fill out the form below and we'll get back to you within 24 hours.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                                {/* Name Field */}
                                <div className="relative">
                                    <label
                                        htmlFor="name"
                                        className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === "name" || formData.name
                                                ? "-top-2 text-xs bg-white px-2 text-[#8B6914]"
                                                : "top-3 sm:top-4 text-sm sm:text-base text-black/50"
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
                                        className="w-full px-4 py-3 sm:py-4 border-2 border-black/10 rounded-lg focus:border-[#8B6914] focus:outline-none transition-all duration-300 text-sm sm:text-base"
                                    />
                                </div>

                                {/* Email Field */}
                                <div className="relative">
                                    <label
                                        htmlFor="email"
                                        className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === "email" || formData.email
                                                ? "-top-2 text-xs bg-white px-2 text-[#8B6914]"
                                                : "top-3 sm:top-4 text-sm sm:text-base text-black/50"
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
                                        className="w-full px-4 py-3 sm:py-4 border-2 border-black/10 rounded-lg focus:border-[#8B6914] focus:outline-none transition-all duration-300 text-sm sm:text-base"
                                    />
                                </div>

                                {/* Phone Field */}
                                <div className="relative">
                                    <label
                                        htmlFor="phone"
                                        className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === "phone" || formData.phone
                                                ? "-top-2 text-xs bg-white px-2 text-[#8B6914]"
                                                : "top-3 sm:top-4 text-sm sm:text-base text-black/50"
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
                                        className="w-full px-4 py-3 sm:py-4 border-2 border-black/10 rounded-lg focus:border-[#8B6914] focus:outline-none transition-all duration-300 text-sm sm:text-base"
                                    />
                                </div>

                                {/* Service Selection */}
                                <div className="relative">
                                    <label
                                        htmlFor="service"
                                        className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === "service" || formData.service
                                                ? "-top-2 text-xs bg-white px-2 text-[#8B6914]"
                                                : "top-3 sm:top-4 text-sm sm:text-base text-black/50"
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
                                        className="w-full px-4 py-3 sm:py-4 border-2 border-black/10 rounded-lg focus:border-[#8B6914] focus:outline-none transition-all duration-300 appearance-none text-sm sm:text-base"
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

                                {/* Message Field */}
                                <div className="relative">
                                    <label
                                        htmlFor="message"
                                        className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === "message" || formData.message
                                                ? "-top-2 text-xs bg-white px-2 text-[#8B6914]"
                                                : "top-3 sm:top-4 text-sm sm:text-base text-black/50"
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
                                        className="w-full px-4 py-3 sm:py-4 border-2 border-black/10 rounded-lg focus:border-[#8B6914] focus:outline-none transition-all duration-300 resize-none text-sm sm:text-base"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-[#8B6914] to-[#4A90E2] text-white py-3 sm:py-4 rounded-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 group text-sm sm:text-base"
                                >
                                    <span>Send Message</span>
                                    <svg
                                        className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
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

                        {/* Map & Additional Info */}
                        <div className="space-y-6 sm:space-y-8">
                            {/* Map Placeholder */}
                            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-xl h-[300px] sm:h-[400px] flex items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#8B6914]/20 to-[#4A90E2]/20"></div>
                                <div className="relative z-10 text-center">
                                    <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">📍</div>
                                    <p className="text-base sm:text-lg font-semibold text-black mb-2">Our Location</p>
                                    <p className="text-xs sm:text-sm text-black/70">123 Design Street, Creativity City</p>
                                    <button className="mt-4 px-4 sm:px-6 py-2 bg-black text-white rounded-lg hover:bg-[#8B6914] transition-colors duration-300 text-xs sm:text-sm">
                                        Open in Maps
                                    </button>
                                </div>
                            </div>

                            {/* Why Choose Us */}
                            <div className="bg-gradient-to-br from-[#1C1C1C] to-[#2C2C2C] p-6 sm:p-8 rounded-lg shadow-xl text-white">
                                <h3 className="text-xl sm:text-2xl font-serif mb-4 sm:mb-6">Why Choose Aakar?</h3>
                                <ul className="space-y-3 sm:space-y-4">
                                    {[
                                        "38+ Years of Design Excellence",
                                        "1000+ Successful Projects",
                                        "Award-Winning Design Team",
                                        "Personalized Design Solutions",
                                        "On-Time Project Delivery",
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start gap-3 group">
                                            <span className="text-[#8B6914] text-lg sm:text-xl group-hover:scale-125 transition-transform">✓</span>
                                            <span className="text-xs sm:text-sm text-white/90">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Social Media */}
                            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-xl">
                                <h3 className="text-xl sm:text-2xl font-serif mb-4 sm:mb-6 text-black">Follow Us</h3>
                                <div className="flex gap-3 sm:gap-4">
                                    {["Instagram", "Facebook", "LinkedIn", "Pinterest"].map((social, index) => (
                                        <button
                                            key={index}
                                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#F5F5F0] hover:bg-gradient-to-br hover:from-[#8B6914] hover:to-[#4A90E2] hover:text-white transition-all duration-300 flex items-center justify-center text-xs sm:text-sm font-semibold shadow-md hover:shadow-xl transform hover:scale-110"
                                        >
                                            {social[0]}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="w-full py-12 sm:py-16 md:py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 md:px-6">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-black mb-8 sm:mb-12 text-center">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4 sm:space-y-6">
                        {[
                            {
                                q: "How long does a typical project take?",
                                a: "Project timelines vary based on scope, but most residential projects take 8-12 weeks from concept to completion.",
                            },
                            {
                                q: "Do you offer free consultations?",
                                a: "Yes! We offer a complimentary initial consultation to discuss your project needs and vision.",
                            },
                            {
                                q: "What is your design process?",
                                a: "Our process includes consultation, concept development, design refinement, and project execution with regular updates.",
                            },
                            {
                                q: "Do you work on commercial projects?",
                                a: "Absolutely! We have extensive experience in both residential and commercial interior design projects.",
                            },
                        ].map((faq, index) => (
                            <div
                                key={index}
                                className="bg-[#F5F5F0] p-4 sm:p-6 rounded-lg hover:shadow-lg transition-all duration-300"
                            >
                                <h4 className="text-base sm:text-lg font-semibold text-black mb-2">{faq.q}</h4>
                                <p className="text-xs sm:text-sm text-black/70">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
