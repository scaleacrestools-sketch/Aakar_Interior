"use client";

import Image from "next/image";

export default function FeaturedProjectsSection() {
    return (
        <section id="portfolio" className="w-full bg-[#0E0E0E] py-12 md:py-16 lg:py-20 font-sans">
            <div className="max-w-[95%] mx-auto px-4 md:px-6">
                {/* Title */}
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 md:mb-10 gap-4">
                    <div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 font-sans">
                            OUR FEATURED PROJECTS
                        </h2>
                        <p className="text-white/60 text-sm max-w-md font-sans">
                            Discover our exceptional projects. Each one reflects our
                            commitment to excellence in interior design.
                        </p>
                    </div>
                    <span className="text-white/50 text-xs sm:text-sm font-sans">01 / 09</span>
                </div>

                {/* Cards */}
                {/* Featured Projects – Infinite Horizontal Scroll */}
                <div className="relative overflow-hidden">
                    <div className="flex gap-4 sm:gap-6 animate-scroll-horizontal w-max">
                        {[...Array(2)].map((_, loopIndex) => (
                            <div key={loopIndex} className="flex gap-4 sm:gap-6">
                                {/* Card 1 */}
                                <div className="group relative min-w-[280px] sm:min-w-[320px] overflow-hidden rounded-lg">
                                    <Image
                                        src="/ddbf2826963aff634c43547312423ea966b104bb.png"
                                        alt="Office Room DEXA Corp"
                                        width={600}
                                        height={400}
                                        className="w-full h-[220px] sm:h-[260px] object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
                                        <h3 className="text-white font-medium text-sm sm:text-base font-sans">
                                            Office Room DEXA Corp
                                        </h3>
                                        <p className="text-white/60 text-xs mt-1 font-sans">
                                            Furniture Selection · South Jakarta
                                        </p>
                                    </div>
                                </div>

                                {/* Card 2 */}
                                <div className="group relative min-w-[280px] sm:min-w-[320px] overflow-hidden rounded-lg">
                                    <Image
                                        src="/7a730a4fee2a889bdd408cac0b6e45808edbf3c3.png"
                                        alt="Omoisori Kohi"
                                        width={600}
                                        height={400}
                                        className="w-full h-[220px] sm:h-[260px] object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
                                        <h3 className="text-white font-medium text-sm sm:text-base font-sans">Omoisori Kohi</h3>
                                        <p className="text-white/60 text-xs mt-1 font-sans">
                                            Space Planning · North Jakarta
                                        </p>
                                    </div>
                                </div>

                                {/* Card 3 */}
                                <div className="group relative min-w-[280px] sm:min-w-[320px] overflow-hidden rounded-lg">
                                    <Image
                                        src="/b5ad278e6d317fa77c460e7201dbb863cf70f692.png"
                                        alt="Modern Kitchen"
                                        width={600}
                                        height={400}
                                        className="w-full h-[220px] sm:h-[260px] object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
                                        <h3 className="text-white font-medium text-sm sm:text-base font-sans">Modern Kitchen</h3>
                                        <p className="text-white/60 text-xs mt-1 font-sans">
                                            Interior Design · Jakarta
                                        </p>
                                    </div>
                                </div>

                                {/* Card 4 */}
                                <div className="group relative min-w-[280px] sm:min-w-[320px] overflow-hidden rounded-lg">
                                    <Image
                                        src="/c74e6ec219396fe45062052aa8afd0c22f00395c.png"
                                        alt="Luxury Living Room"
                                        width={600}
                                        height={400}
                                        className="w-full h-[220px] sm:h-[260px] object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
                                        <h3 className="text-white font-medium text-sm sm:text-base font-sans">
                                            Luxury Living Room
                                        </h3>
                                        <p className="text-white/60 text-xs mt-1 font-sans">
                                            Interior Styling · Jakarta
                                        </p>
                                    </div>
                                </div>

                                {/* Card 5 */}
                                <div className="group relative min-w-[280px] sm:min-w-[320px] overflow-hidden rounded-lg">
                                    <Image
                                        src="/d5d8d162934a0ffec9b688a25d5be658ba66b28a.png"
                                        alt="Minimal Workspace"
                                        width={600}
                                        height={400}
                                        className="w-full h-[220px] sm:h-[260px] object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
                                        <h3 className="text-white font-medium text-sm sm:text-base font-sans">
                                            Minimal Workspace
                                        </h3>
                                        <p className="text-white/60 text-xs mt-1 font-sans">
                                            Office Design · Jakarta
                                        </p>
                                    </div>
                                </div>

                                {/* Card 6 */}
                                <div className="group relative min-w-[280px] sm:min-w-[320px] overflow-hidden rounded-lg">
                                    <Image
                                        src="/b5ad278e6d317fa77c460e7201dbb863cf70f692.png"
                                        alt="Cafe Interior"
                                        width={600}
                                        height={400}
                                        className="w-full h-[220px] sm:h-[260px] object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
                                        <h3 className="text-white font-medium text-sm sm:text-base font-sans">Cafe Interior</h3>
                                        <p className="text-white/60 text-xs mt-1 font-sans">
                                            Space Planning · Bandung
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}