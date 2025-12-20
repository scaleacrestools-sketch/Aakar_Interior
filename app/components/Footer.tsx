"use client";

import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full bg-[#F5F5F0] pt-8 pb-8">
            <div className="max-w-[95%] mx-auto px-4 md:px-6">
                {/* CTA Banner */}
                <div className="relative w-full max-w-5xl mx-auto mb-20 animate-fade-in-up">
                    <div className="bg-[#1C1C1C] rounded-full text-center py-4 md:py-6 px-8 md:px-16 flex items-center justify-between relative overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02] duration-300">
                        <h2 className="text-3xl md:text-5xl  text-white font-medium tracking-wide">
                            Let&apos;s talk your dream space
                        </h2>

                        {/* Arrow Button */}
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-[#1C1C1C] rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:text-black transition-all duration-300 ml-4 flex-shrink-0">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-black transition-colors duration-300"
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 mb-2">
                    {/* Branding & Tagline */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="grid grid-cols-2 gap-0.5 w-6 h-6">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className={`w-2.5 h-2.5 bg-black rounded-full`}></div>
                                ))}
                            </div>
                            <span className="text-xl font-bold italic tracking-tight">INTEROR</span>
                        </div>
                        <p className="text-black/70 text-sm max-w-xs">
                            Crafting Interiors with Elegance and Precision
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3 mt-6">
                            {[
                                { icon: "instagram" },
                                { icon: "twitter" },
                                { icon: "linkedin" }
                            ].map((social, idx) => (
                                <div key={idx} className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer">
                                    {/* Placeholder icons */}
                                    <span className="text-sm font-medium">{social.icon[0].toUpperCase()}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Links & Contact */}
                    <div className="flex flex-col md:items-end space-y-8 text-left md:text-right">
                        <div className="flex gap-6 md:gap-8 text-sm font-medium text-black/80">
                            <a href="#" className="hover:text-black transition-colors">Home</a>
                            <a href="#" className="hover:text-black transition-colors">About Us</a>
                            <a href="#" className="hover:text-black transition-colors">Services</a>
                            <a href="#" className="hover:text-black transition-colors">Portfolio</a>
                        </div>

                        <div className="space-y-2 text-sm text-black/60">
                            <p>123 Design Street, Creativity City, Country</p>
                            <p>+123-456-7890</p>
                            <p className="text-black font-medium">hello@interor.com</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="pt-8 border-t border-black/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-black/50">
                    <p>Interor 2024 all rights reserved</p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-black transition-colors">Terms & Condition</a>
                        <a href="#" className="hover:text-black transition-colors">Privacy & Policy</a>
                        <a href="#" className="hover:text-black transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
