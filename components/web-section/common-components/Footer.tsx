"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PopupForm from "@/components/common-section/Popup";

export default function Footer() {
    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <>
            <footer className="w-full bg-[#F5F5F0] pb-8 pt-12">
                <div className="max-w-[95%] mx-auto px-4 md:px-6">
                    {/* CTA Banner */}
                    <div className="relative w-full max-w-5xl mx-auto mb-12 sm:mb-16 md:mb-12 animate-fade-in-up">
                        <div 
                            onClick={() => setIsFormOpen(true)}
                            className="bg-[#1C1C1C] rounded-full text-center py-3 sm:py-4 md:py-6 px-4 sm:px-6 md:px-8 lg:px-16 flex items-center justify-between relative overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02] duration-300"
                        >
                            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-medium tracking-wide">
                                Let&apos;s talk your dream space
                            </h2>

                            {/* Arrow Button */}
                            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-[#1C1C1C] rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:text-black transition-all duration-300 ml-2 sm:ml-3 md:ml-4 flex-shrink-0">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white group-hover:text-black transition-colors duration-300"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px w-full bg-black/10 mb-6"></div>

                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-8 mb-2">
                        {/* Branding & Tagline */}
                        <div className="space-y-4 sm:space-y-6">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/AAKAR-BLACK-scaled.png"
                                    alt="AAKAR Interior Logo"
                                    width={120}
                                    height={40}
                                    className="h-8 sm:h-10 w-auto object-contain"
                                />
                            </div>
                            <p className="text-black/70 text-xs sm:text-sm max-w-xs">
                                Crafting Interiors with Elegance and Precision
                            </p>

                            {/* Social Icons */}
                            <div className="flex items-center gap-2 sm:gap-3 mt-4 sm:mt-6">
                                {/* Instagram */}
                                <a
                                    href="https://www.instagram.com/aakarinterior"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer group"
                                >
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>

                                {/* LinkedIn */}
                                <a
                                    href="https://www.linkedin.com/company/aakarinterior/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer group"
                                >
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Links & Contact */}
                        <div className="flex flex-col md:items-end space-y-6 sm:space-y-8 text-left md:text-right">
                            <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm font-medium text-black/80">
                                <Link href="/" className="hover:text-black transition-colors">Home</Link>
                                <Link href="/about" className="hover:text-black transition-colors">About Us</Link>
                                <Link href="/#services" className="hover:text-black transition-colors">Services</Link>
                                <Link href="/#portfolio" className="hover:text-black transition-colors">Portfolio</Link>
                            </div>

                            <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-black/60">
                                <p>123 Design Street, New Delhi, India</p>
                                <p>+91 92660 23436</p>
                                <p className="text-black font-medium">info@aakarinteriors.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Footer */}
                    <div className="pt-6 sm:pt-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[10px] sm:text-xs text-black/50">
                        <p className="text-center sm:text-left">Aakar Interiors 2024 all rights reserved</p>
                        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6">
                            <Link href="/terms" className="hover:text-black transition-colors whitespace-nowrap">Terms & Condition</Link>
                            <Link href="/privacy" className="hover:text-black transition-colors whitespace-nowrap">Privacy & Policy</Link>
                            <a href="#" className="hover:text-black transition-colors whitespace-nowrap">Cookies</a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Popup Form Component */}
            <PopupForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
        </>
    );
}