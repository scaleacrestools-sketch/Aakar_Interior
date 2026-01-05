"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log("Form submitted:", formData);
        alert("Thank you for your message! We'll get back to you soon.");

        // Reset form
        setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            message: "",
        });
        setIsSubmitting(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const contactInfo = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            title: "Phone",
            details: ["+91 98765 43210", "+91 87654 32109"],
            link: "tel:+919876543210"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: "Email",
            details: ["info@aakarinterior.com", "contact@aakarinterior.com"],
            link: "mailto:info@aakarinterior.com"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: "Office",
            details: ["123 Design Street", "Mumbai, Maharashtra 400001"],
            link: "#location"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Working Hours",
            details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
            link: null
        }
    ];

    return (
        <div className="min-h-screen bg-[#F5F5F0]">
            <Header />

            {/* Hero Section */}
            <section className="relative w-full py-20 md:py-28 lg:py-32 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/b5ad278e6d317fa77c460e7201dbb863cf70f692.png"
                        alt="Contact Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/85"></div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-20 left-10 w-24 h-24 bg-[#8B6914]/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#8B6914]/15 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                    <div className={`text-center space-y-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                        <div className="inline-block">
                            <span className="text-sm md:text-base uppercase tracking-[0.3em] text-[#8B6914] font-semibold bg-white/10 backdrop-blur-md px-6 py-3 rounded-sm border border-[#8B6914]/30">
                                Get In Touch
                            </span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
                            <span className="block mb-3">Let's Create</span>
                            <span className="block">
                                Your{" "}
                                <span className="text-amber-600 italic font-[family-name:var(--font-great-vibes)]">
                                    Dream Space
                                </span>
                            </span>
                        </h1>

                        <p className="text-base md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                            Have a project in mind? We'd love to hear from you. Send us a message and we'll
                            respond as soon as possible.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="relative -mt-16 z-20 pb-12">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {contactInfo.map((info, index) => (
                            <div
                                key={index}
                                className={`group bg-white p-6 rounded-sm shadow-lg border border-black/5 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                    }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="w-14 h-14 rounded-full bg-[#8B6914] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-black mb-2">{info.title}</h3>
                                        {info.details.map((detail, idx) => (
                                            <p key={idx} className="text-sm text-black/70 leading-relaxed">
                                                {detail}
                                            </p>
                                        ))}
                                    </div>
                                    {info.link && (
                                        <a
                                            href={info.link}
                                            className="text-[#8B6914] text-sm font-semibold hover:text-black transition-colors duration-300 flex items-center gap-1"
                                        >
                                            Contact Now
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white p-8 md:p-10 rounded-sm shadow-lg border border-black/5">
                                <div className="mb-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-1 h-12 bg-[#8B6914] rounded-sm"></div>
                                        <h2 className="text-3xl md:text-4xl font-bold text-black">
                                            Send us a Message
                                        </h2>
                                    </div>
                                    <p className="text-base text-black/70 ml-6">
                                        Fill out the form below and we'll get back to you within 24 hours.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name & Email */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="relative group">
                                            <label
                                                htmlFor="name"
                                                className={`absolute left-4 transition-all duration-300 pointer-events-none z-10 ${focusedField === "name" || formData.name
                                                    ? "-top-3 text-xs bg-white px-2 text-[#8B6914] font-medium"
                                                    : "top-4 text-sm text-black/60"
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
                                                className="w-full px-4 py-3 border border-black/20 rounded-sm focus:border-[#8B6914] focus:outline-none transition-all duration-300 bg-white"
                                            />
                                        </div>

                                        <div className="relative group">
                                            <label
                                                htmlFor="email"
                                                className={`absolute left-4 transition-all duration-300 pointer-events-none z-10 ${focusedField === "email" || formData.email
                                                    ? "-top-3 text-xs bg-white px-2 text-[#8B6914] font-medium"
                                                    : "top-4 text-sm text-black/60"
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
                                                className="w-full px-4 py-3 border border-black/20 rounded-sm focus:border-[#8B6914] focus:outline-none transition-all duration-300 bg-white"
                                            />
                                        </div>
                                    </div>

                                    {/* Phone & Service */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="relative group">
                                            <label
                                                htmlFor="phone"
                                                className={`absolute left-4 transition-all duration-300 pointer-events-none z-10 ${focusedField === "phone" || formData.phone
                                                    ? "-top-3 text-xs bg-white px-2 text-[#8B6914] font-medium"
                                                    : "top-4 text-sm text-black/60"
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
                                                className="w-full px-4 py-3 border border-black/20 rounded-sm focus:border-[#8B6914] focus:outline-none transition-all duration-300 bg-white"
                                            />
                                        </div>

                                        <div className="relative group">
                                            <label
                                                htmlFor="service"
                                                className={`absolute left-4 transition-all duration-300 pointer-events-none z-10 ${focusedField === "service" || formData.service
                                                    ? "-top-3 text-xs bg-white px-2 text-[#8B6914] font-medium"
                                                    : "top-4 text-sm text-black/60"
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
                                                className="w-full px-4 py-3 border border-black/20 rounded-sm focus:border-[#8B6914] focus:outline-none transition-all duration-300 appearance-none bg-white cursor-pointer"
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

                                    {/* Message */}
                                    <div className="relative group">
                                        <label
                                            htmlFor="message"
                                            className={`absolute left-4 transition-all duration-300 pointer-events-none z-10 ${focusedField === "message" || formData.message
                                                ? "-top-3 text-xs bg-white px-2 text-[#8B6914] font-medium"
                                                : "top-4 text-sm text-black/60"
                                                }`}
                                        >
                                            Your Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={6}
                                            value={formData.message}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField("message")}
                                            onBlur={() => setFocusedField("")}
                                            className="w-full px-4 py-3 border border-black/20 rounded-sm focus:border-[#8B6914] focus:outline-none transition-all duration-300 resize-none bg-white"
                                        ></textarea>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-black text-white py-4 rounded-sm font-semibold hover:bg-[#333] transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                                    >

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
                                        <span>
                                            {isSubmitting ? "Sending..." : "Send Message"}
                                        </span>

                                        {!isSubmitting && (
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
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1 space-y-6">
                            {/* Why Choose Us */}
                            <div className="bg-white p-8 rounded-sm shadow-lg border border-black/5">
                                <div>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-1 h-10 bg-[#8B6914] rounded-sm"></div>
                                        <h3 className="text-2xl font-bold text-black">Why Choose Aakar?</h3>
                                    </div>

                                    <ul className="space-y-4">
                                        {[
                                            { text: "38+ Years of Design Excellence", icon: "🏆" },
                                            { text: "1000+ Successful Projects", icon: "✨" },
                                            { text: "Award-Winning Design Team", icon: "🎯" },
                                            { text: "Personalized Design Solutions", icon: "💡" },
                                            { text: "On-Time Project Delivery", icon: "⚡" },
                                        ].map((item, index) => (
                                            <li
                                                key={index}
                                                className="flex items-start gap-4 group/item cursor-default transform transition-all duration-300 hover:translate-x-2"
                                            >
                                                <span className="text-xl flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                                                    {item.icon}
                                                </span>
                                                <span className="text-sm text-black/80 group-hover/item:text-black transition-colors leading-relaxed">
                                                    {item.text}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="bg-white p-8 rounded-sm shadow-lg border border-black/5">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-1 h-10 bg-[#8B6914] rounded-sm"></div>
                                    <h3 className="text-2xl font-bold text-black">Connect With Us</h3>
                                </div>

                                <div className="space-y-4">
                                    <a
                                        href="https://www.instagram.com/aakarinterior"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 p-4 rounded-sm bg-black hover:bg-[#333] text-white transition-all duration-300 shadow-md hover:shadow-lg group"
                                    >
                                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-medium">Instagram</p>
                                            <p className="text-sm text-white/70">@aakarinterior_</p>
                                        </div>
                                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>

                                    <a
                                        href="https://www.linkedin.com/company/aakarinterior/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 p-4 rounded-sm bg-black hover:bg-[#333] text-white transition-all duration-300 shadow-md hover:shadow-lg group"
                                    >
                                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-medium">LinkedIn</p>
                                            <p className="text-sm text-white/70">Aakar Interior</p>
                                        </div>
                                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}
