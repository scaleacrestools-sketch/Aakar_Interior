"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-[#F5F5F0] pt-8 pb-8">
            <div className="max-w-[95%] mx-auto px-4 md:px-6">
                {/* CTA Banner */}
                <div className="relative w-full max-w-5xl mx-auto mb-12 sm:mb-16 md:mb-20 animate-fade-in-up">
                    <div className="bg-[#1C1C1C] rounded-full text-center py-3 sm:py-4 md:py-6 px-4 sm:px-6 md:px-8 lg:px-16 flex items-center justify-between relative overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02] duration-300">
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
                    {/* Dashed border effect around CTA - optional decoration to match visual if needed, 
              but the image shows a blue selection box which is likely from the design tool, not actual UI. 
              I will assume the pill is the main UI. */}
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
                            {[
                                { icon: "instagram" },
                                { icon: "twitter" },
                                { icon: "linkedin" }
                            ].map((social, idx) => (
                                <div key={idx} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer">
                                    {/* Placeholder icons */}
                                    <span className="text-xs sm:text-sm font-medium">{social.icon[0].toUpperCase()}</span>
                                </div>
                            ))}
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
                            <p>123 Design Street, Creativity City, Country</p>
                            <p>+123-456-7890</p>
                            <p className="text-black font-medium">hello@interor.com</p>
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
    );
}
