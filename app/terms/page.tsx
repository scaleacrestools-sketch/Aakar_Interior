"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TermsPage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="min-h-screen bg-[#F5F5F0]">
            {/* Header */}
            <header className="w-full bg-white border-b border-black/10 sticky top-0 z-50">
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
            <section className="relative w-full py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#1C1C1C] to-[#2C2C2C] text-white">
                <div className="max-w-4xl mx-auto px-4 md:px-6">
                    <div className={`text-center space-y-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
                        <div className="inline-block">
                            <span className="text-xs sm:text-sm uppercase tracking-widest text-[#8B6914] font-medium">
                                Legal Information
                            </span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Terms & Conditions
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto">
                            Last Updated: December 22, 2024
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="w-full py-12 sm:py-16 md:py-20">
                <div className="max-w-4xl mx-auto px-4 md:px-6">
                    <div className="bg-white p-6 sm:p-8 md:p-12 rounded-lg shadow-xl">
                        <div className="prose prose-sm sm:prose-base max-w-none">
                            <p className="text-base sm:text-lg text-black/80 leading-relaxed mb-8">
                                Please read these terms and conditions carefully before using our services. These terms govern your use of Aakar Interiors' website and services.
                            </p>

                            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-black mt-8 mb-4">1. Acceptance of Terms</h2>
                            <p className="text-sm sm:text-base text-black/80 leading-relaxed mb-6">By accessing and using the Aakar Interiors website and services, you accept and agree to be bound by these Terms and Conditions. We reserve the right to update or modify these terms at any time without prior notice. Your continued use of our services constitutes acceptance of any changes.</p>

                            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-black mt-8 mb-4">2. Services Description</h2>
                            <p className="text-sm sm:text-base text-black/80 leading-relaxed mb-3">Aakar Interiors provides professional interior design services, including but not limited to:</p>
                            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-black/70 mb-6">
                                <li>Residential and commercial interior design</li>
                                <li>Space planning and layout design</li>
                                <li>Furniture selection and procurement</li>
                                <li>Color consultation and material selection</li>
                                <li>Lighting design and installation coordination</li>
                                <li>Project management and construction oversight</li>
                                <li>Custom furniture design and fabrication</li>
                            </ul>

                            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-black mt-8 mb-4">3. Client Responsibilities</h2>
                            <p className="text-sm sm:text-base text-black/80 leading-relaxed mb-3">As a client, you agree to:</p>
                            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-black/70 mb-6">
                                <li>Provide accurate and complete information about your project</li>
                                <li>Grant necessary access to the project site</li>
                                <li>Make timely decisions and approvals as required</li>
                                <li>Pay all fees and expenses as agreed</li>
                                <li>Obtain necessary permits and approvals</li>
                                <li>Ensure the project site is safe and accessible</li>
                                <li>Respect intellectual property rights of our designs</li>
                            </ul>

                            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-black mt-8 mb-4">4. Fees and Payment</h2>
                            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-black/70 mb-6">
                                <li>All fees are quoted in the local currency unless otherwise specified</li>
                                <li>A deposit is required to commence work on any project</li>
                                <li>Payment schedules will be outlined in individual project agreements</li>
                                <li>Late payments may incur additional charges</li>
                                <li>All fees are exclusive of applicable taxes unless stated otherwise</li>
                                <li>Additional charges may apply for changes to approved designs</li>
                            </ul>

                            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-black mt-8 mb-4">5. Intellectual Property Rights</h2>
                            <p className="text-sm sm:text-base text-black/80 leading-relaxed mb-3">All designs, drawings, specifications, and other materials created by Aakar Interiors remain our intellectual property until full payment is received. Upon full payment, you receive a license to use the designs for the specific project only.</p>
                            <p className="text-sm sm:text-base text-black/80 leading-relaxed mb-6">We retain the right to use project photos and designs for marketing purposes unless otherwise agreed in writing.</p>

                            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-black mt-8 mb-4">6. Project Timeline and Delays</h2>
                            <p className="text-sm sm:text-base text-black/80 leading-relaxed mb-3">We strive to complete all projects within the agreed timeline. However:</p>
                            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-black/70 mb-6">
                                <li>Timelines are estimates and may be subject to change</li>
                                <li>Delays caused by client decisions, approvals, or site conditions are not our responsibility</li>
                                <li>Force majeure events may affect project timelines</li>
                                <li>Material availability and supplier delays may impact schedules</li>
                                <li>We will communicate any anticipated delays promptly</li>
                            </ul>

                            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-black mt-8 mb-4">7. Warranties and Disclaimers</h2>
                            <p className="text-sm sm:text-base text-black/80 leading-relaxed mb-3">We warrant that our services will be performed with professional skill and care. However, we disclaim warranties regarding third-party products, contractor workmanship, and structural integrity of existing buildings.</p>
                            <p className="text-sm sm:text-base text-black/80 leading-relaxed mb-6">Our liability is limited to the fees paid for our services. We are not liable for indirect, consequential, or incidental damages.</p>

                            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-black mt-8 mb-4">8. Cancellation and Termination</h2>
                            <p className="text-sm sm:text-base text-black/80 leading-relaxed mb-3">Either party may terminate the agreement with written notice:</p>
                            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-black/70 mb-6">
                                <li>Client cancellations: Fees for work completed plus cancellation fee may apply</li>
                                <li>We reserve the right to terminate for non-payment or breach of terms</li>
                                <li>Upon termination, all outstanding fees become immediately due</li>
                                <li>Materials ordered specifically for your project are non-refundable</li>
                                <li>Deposits are generally non-refundable</li>
                            </ul>

                            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-black mt-8 mb-4">9. Limitation of Liability</h2>
                            <p className="text-sm sm:text-base text-black/80 leading-relaxed mb-3">To the maximum extent permitted by law:</p>
                            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-black/70 mb-6">
                                <li>Our total liability shall not exceed the total fees paid for services</li>
                                <li>We are not liable for delays or failures due to circumstances beyond our control</li>
                                <li>We are not responsible for third-party contractor errors or omissions</li>
                                <li>Claims must be made within 30 days of project completion</li>
                                <li>We maintain professional liability insurance as required by law</li>
                            </ul>

                            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-black mt-8 mb-4">10. Confidentiality</h2>
                            <p className="text-sm sm:text-base text-black/80 leading-relaxed mb-6">We respect your privacy and maintain confidentiality of personal information, project details, financial information, and any information marked as confidential. We may share information with contractors and suppliers as necessary for project completion.</p>

                            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-black mt-8 mb-4">11. Dispute Resolution</h2>
                            <p className="text-sm sm:text-base text-black/80 leading-relaxed mb-6">In the event of a dispute, we encourage direct communication to resolve issues. Mediation may be pursued before legal action. Disputes shall be governed by the laws of the jurisdiction where our business is registered.</p>

                            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-black mt-8 mb-4">12. Contact Information</h2>
                            <p className="text-sm sm:text-base text-black/80 leading-relaxed mb-3">If you have any questions about these Terms and Conditions, please contact us:</p>
                            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-black/70 mb-6">
                                <li>Email: hello@aakar.com</li>
                                <li>Phone: +123-456-7890</li>
                                <li>Address: 123 Design Street, Creativity City, Country</li>
                            </ul>

                            <div className="mt-10 p-6 bg-gradient-to-br from-[#8B6914]/10 to-[#4A90E2]/10 border-l-4 border-[#8B6914] rounded-lg">
                                <h3 className="text-lg sm:text-xl font-semibold text-black mb-3">Agreement to Terms</h3>
                                <p className="text-sm sm:text-base text-black/80 leading-relaxed">
                                    By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions, as well as our Privacy Policy.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <Link
                            href="/privacy"
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group"
                        >
                            <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-[#8B6914] transition-colors">
                                Privacy Policy →
                            </h3>
                            <p className="text-sm text-black/70">
                                Learn how we protect and use your personal information
                            </p>
                        </Link>
                        <Link
                            href="/contact"
                            className="bg-gradient-to-br from-[#8B6914] to-[#4A90E2] p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-white group"
                        >
                            <h3 className="text-lg font-semibold mb-2 group-hover:scale-105 transition-transform">
                                Contact Us →
                            </h3>
                            <p className="text-sm text-white/90">
                                Questions about our terms? We're here to help
                            </p>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
