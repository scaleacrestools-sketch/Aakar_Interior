"use client";

export default function OurServicesSection() {
    return (
        <section className="w-full bg-[#F5F5F0] pb-16 relative font-sans">
            <div className="max-w-[95%] mx-auto px-4 md:px-6">
                {/* Top Section - Label and Title */}
                <div className="mb-12 animate-fade-in-up">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-px w-12 bg-[#8B6914]"></div>
                        <span className="text-xs md:text-sm uppercase tracking-wider text-black/70 font-medium font-sans">
                            OUR SERVICES
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight max-w-4xl font-sans">
                        We provide the{" "}
                        <em className="italic font-bold font-inter">best solutions</em>
                        <br />
                        for your dream home
                    </h2>
                </div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {/* Architectural & Interior Design Card */}
                    <div className="bg-[#F9F9F4] rounded-lg p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-500 animate-fade-in-scale group h-full min-h-[280px] sm:min-h-[320px] flex flex-col">
                        <div className="mb-8 flex justify-start">
                            <div className="w-16 h-16 text-[#8B6914] animate-fade-in-scale-delay">
                                <svg
                                    viewBox="0 0 64 64"
                                    fill="none"
                                    className="w-full h-full"
                                >
                                    <rect
                                        x="8"
                                        y="20"
                                        width="12"
                                        height="8"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="none"
                                    />
                                    <rect
                                        x="24"
                                        y="20"
                                        width="12"
                                        height="8"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="none"
                                    />
                                    <rect
                                        x="40"
                                        y="20"
                                        width="12"
                                        height="8"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="none"
                                    />
                                    <rect
                                        x="8"
                                        y="32"
                                        width="12"
                                        height="8"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="none"
                                    />
                                    <rect
                                        x="24"
                                        y="32"
                                        width="12"
                                        height="8"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="none"
                                    />
                                    <rect
                                        x="40"
                                        y="32"
                                        width="12"
                                        height="8"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="none"
                                    />
                                    <rect
                                        x="8"
                                        y="44"
                                        width="12"
                                        height="8"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="none"
                                    />
                                    <rect
                                        x="24"
                                        y="44"
                                        width="12"
                                        height="8"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="none"
                                    />
                                    <rect
                                        x="40"
                                        y="44"
                                        width="12"
                                        height="8"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="none"
                                    />
                                    <line
                                        x1="4"
                                        y1="16"
                                        x2="4"
                                        y2="56"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    />
                                    <line
                                        x1="60"
                                        y1="16"
                                        x2="60"
                                        y2="56"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    />
                                    <line
                                        x1="4"
                                        y1="16"
                                        x2="60"
                                        y2="16"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    />
                                    <line
                                        x1="4"
                                        y1="56"
                                        x2="60"
                                        y2="56"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-black mb-4 group-hover:text-[#8B6914] transition-colors duration-300 font-sans">
                            Architectural & Interior design
                        </h3>
                        <p className="text-black/70 text-sm leading-relaxed font-sans">
                            Custom spaces that balance function and style, tailored to your
                            lifestyle.
                        </p>
                    </div>

                    {/* Building Renovation Card */}
                    <div className="bg-[#F9F9F4] rounded-lg p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-500 animate-fade-in-scale-delay group h-full min-h-[280px] sm:min-h-[320px] flex flex-col">
                        <div className="mb-8 flex justify-start">
                            <div className="w-16 h-16 text-[#8B6914] animate-fade-in-scale-delay-2">
                                <svg
                                    viewBox="0 0 64 64"
                                    fill="none"
                                    className="w-full h-full"
                                >
                                    <rect
                                        x="12"
                                        y="16"
                                        width="40"
                                        height="40"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="none"
                                        rx="2"
                                    />
                                    <rect
                                        x="20"
                                        y="24"
                                        width="24"
                                        height="24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="none"
                                        rx="1"
                                    />
                                    <line
                                        x1="32"
                                        y1="16"
                                        x2="32"
                                        y2="8"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                    <line
                                        x1="24"
                                        y1="12"
                                        x2="40"
                                        y2="12"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                    <line
                                        x1="20"
                                        y1="32"
                                        x2="28"
                                        y2="32"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    />
                                    <line
                                        x1="36"
                                        y1="32"
                                        x2="44"
                                        y2="32"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    />
                                    <line
                                        x1="20"
                                        y1="40"
                                        x2="28"
                                        y2="40"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    />
                                    <line
                                        x1="36"
                                        y1="40"
                                        x2="44"
                                        y2="40"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-2xl font-semibold text-black mb-4 group-hover:text-[#8B6914] transition-colors duration-300 font-sans">
                            Building Renovation
                        </h3>
                        <p className="text-black/70 text-sm leading-relaxed font-sans">
                            Transforming old spaces into modern, stylish, and functional
                            environments.
                        </p>
                    </div>

                    {/* Construction Management Card */}
                    <div className="bg-[#F9F9F4] rounded-lg p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-500 animate-fade-in-scale-delay-2 group h-full min-h-[280px] sm:min-h-[320px] flex flex-col">
                        <div className="mb-8 flex justify-start">
                            <div className="w-16 h-16 text-[#8B6914] animate-fade-in-scale-delay-3">
                                <svg
                                    viewBox="0 0 64 64"
                                    fill="none"
                                    className="w-full h-full"
                                >
                                    <path
                                        d="M32 12 L20 20 L20 44 L32 52 L44 44 L44 20 Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="none"
                                    />
                                    <path
                                        d="M20 20 L32 28 L44 20"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="none"
                                    />
                                    <path
                                        d="M20 32 L32 40 L44 32"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="none"
                                    />
                                    <path
                                        d="M20 44 L32 52 L44 44"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="none"
                                    />
                                    <line
                                        x1="26"
                                        y1="24"
                                        x2="26"
                                        y2="40"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    />
                                    <line
                                        x1="38"
                                        y1="24"
                                        x2="38"
                                        y2="40"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    />
                                    <rect
                                        x="28"
                                        y="18"
                                        width="8"
                                        height="4"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        fill="none"
                                    />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-2xl font-semibold text-black mb-4 group-hover:text-[#8B6914] transition-colors duration-300 font-sans">
                            Construction Management
                        </h3>
                        <p className="text-black/70 text-sm leading-relaxed font-sans">
                            Seamless planning and execution to deliver projects on time and
                            budget.
                        </p>
                    </div>

                    {/* Project Consultation Card */}
                    <div className="bg-[#F9F9F4] rounded-lg p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-500 animate-fade-in-scale-delay-3 group h-full min-h-[280px] sm:min-h-[320px] flex flex-col">
                        <div className="mb-8 flex justify-start">
                            <div className="w-16 h-16 text-[#8B6914] animate-fade-in-scale-delay-4">
                                <svg
                                    viewBox="0 0 64 64"
                                    fill="none"
                                    className="w-full h-full"
                                >
                                    <circle
                                        cx="32"
                                        cy="32"
                                        r="20"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="none"
                                    />
                                    <circle
                                        cx="32"
                                        cy="32"
                                        r="12"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        fill="none"
                                    />
                                    <line
                                        x1="32"
                                        y1="12"
                                        x2="32"
                                        y2="8"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                    <line
                                        x1="32"
                                        y1="52"
                                        x2="32"
                                        y2="56"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                    <line
                                        x1="12"
                                        y1="32"
                                        x2="8"
                                        y2="32"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                    <line
                                        x1="52"
                                        y1="32"
                                        x2="56"
                                        y2="32"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                    <line
                                        x1="22"
                                        y1="22"
                                        x2="18"
                                        y2="18"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                    <line
                                        x1="42"
                                        y1="42"
                                        x2="46"
                                        y2="46"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                    <line
                                        x1="42"
                                        y1="22"
                                        x2="46"
                                        y2="18"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                    <line
                                        x1="22"
                                        y1="42"
                                        x2="18"
                                        y2="46"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-black mb-4 group-hover:text-[#8B6914] transition-colors duration-300 font-sans">
                            Project Consultation
                        </h3>
                        <p className="text-black/70 text-sm leading-relaxed font-sans">
                            Expert guidance and strategic planning to bring your vision to
                            life with precision.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}