"use client";

import Image from "next/image";

export default function HowWeDesignSection() {
    return (
        <section className="w-full bg-[#F5F5F0] font-sans mb-12">
            <div className="max-w-[95%] mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left – Steps */}
                    <div className="space-y-8 md:space-y-10">
                        <div>
                            <p className="text-xs uppercase tracking-widest text-black/50 mb-2 font-sans">
                                Step 01
                            </p>
                            <h3 className="text-xl sm:text-2xl font-semibold text-black mb-3 font-sans">
                                Planning
                            </h3>
                            <p className="text-black/70 text-sm leading-relaxed max-w-md font-sans">
                                We start by understanding your needs and preferences, then
                                create detailed design concepts and mood boards to visualize
                                your ideal space.
                            </p>
                        </div>

                        <div className="border-t border-black/20 pt-8">
                            <p className="text-xs uppercase tracking-widest text-black/50 mb-2 font-sans">
                                Step 02
                            </p>
                            <h3 className="text-xl sm:text-2xl font-semibold text-black mb-3 font-sans">
                                Estimating
                            </h3>
                            <p className="text-black/70 text-sm leading-relaxed max-w-md font-sans">
                                Our team presents the design proposal, incorporating your
                                feedback to refine and perfect the plan.
                            </p>
                        </div>

                        <div className="border-t border-black/20 pt-8">
                            <p className="text-xs uppercase tracking-widest text-black/50 mb-2 font-sans">
                                Step 03
                            </p>
                            <h3 className="text-xl sm:text-2xl font-semibold text-black mb-3 font-sans">
                                Building
                            </h3>
                            <p className="text-black/70 text-sm leading-relaxed max-w-md font-sans">
                                We manage the execution of the design with meticulous
                                attention to detail, ensuring a flawless transformation.
                            </p>
                        </div>
                    </div>

                    {/* Right – Title + Image */}
                    <div className="space-y-6">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight font-sans">
                            HOW WE DESIGN
                            <br />
                            YOUR INTERIOR
                        </h2>

                        <div className="relative w-full sm:w-[85%] md:w-[75%] lg:w-[65%] h-[280px] sm:h-[380px] md:h-[450px] lg:h-[540px] rounded-xl overflow-hidden shadow-2xl z-10 lg:-mb-24">
                            <Image
                                src="/imgi_44_service06-768x569-1.png"
                                alt="Interior Design"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                                priority
                            />
                            {/* Subtle overlay for depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}