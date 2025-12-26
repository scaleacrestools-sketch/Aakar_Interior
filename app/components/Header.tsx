"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-[85%] md:max-w-[80%] lg:max-w-[85%] px-4">
            <nav className={`w-full backdrop-blur-xl bg-white/80 border border-white/20 rounded-full px-4 md:px-5 lg:px-7 py-2 flex items-center justify-between shadow-lg shadow-black/5 transition-all duration-300 ${isScrolled ? 'bg-white/90 shadow-xl shadow-black/10' : ''}`}>
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2.5 animate-fade-in flex-shrink-0">
                    <Image
                        src="/AAKAR-BLACK-scaled.png"
                        alt="AAKAR Interior"
                        width={120}
                        height={35}
                        className="h-9 w-auto object-contain"
                    />
                </Link>

                {/* Navigation */}
                <div className="hidden md:flex items-center gap-5 lg:gap-7 animate-fade-in-delay">
                    <Link
                        href="/about"
                        className="text-black/90 hover:text-[#4A90E2] transition-colors duration-300 text-sm font-medium"
                    >
                        About Us
                    </Link>
                    <Link
                        href="/#services"
                        className="text-black/90 hover:text-[#4A90E2] transition-colors duration-300 text-sm font-medium"
                    >
                        Services
                    </Link>
                    <Link
                        href="/#portfolio"
                        className="text-black/90 hover:text-[#4A90E2] transition-colors duration-300 text-sm font-medium"
                    >
                        Portfolio
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex items-center justify-center w-9 h-9 rounded-full hover:bg-black/5 transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-5 h-5 text-black"
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
                    className="hidden md:flex btn-brand-gradient text-white px-4 py-2 md:px-5 md:py-2.5 rounded-full items-center gap-1.5 md:gap-2 animate-fade-in-delay-2 group text-sm font-medium shadow-md"
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
                  <div className="fixed top-0 right-0 h-full w-64 backdrop-blur-xl bg-white/95 border-l border-white/20 shadow-2xl z-50 md:hidden animate-slide-in-right">
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
                                <Link
                                    href="/#services"
                                    className="px-4 py-3 text-black hover:bg-[#4A90E2]/10 hover:text-[#4A90E2] rounded-sm transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Services
                                </Link>
                                <Link
                                    href="/#portfolio"
                                    className="px-4 py-3 text-black hover:bg-[#4A90E2]/10 hover:text-[#4A90E2] rounded-sm transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Portfolio
                                </Link>
                                <Link
                                    href="/contact"
                                    className="px-4 py-3 btn-brand-gradient text-white rounded-full transition-colors mt-4 text-center"
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
    );
}
