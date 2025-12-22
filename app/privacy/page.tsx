"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PrivacyPolicyPage() {
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
                            Privacy Policy
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
                                At Aakar Interiors, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
                            </p>

                            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-black mt-8 mb-4">1. Information We Collect</h2>
                            <p className="text-sm sm:text-base text-black/80 leading-relaxed mb-3">We collect information that you provide directly to us, including:</p>
                            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-black/70 mb-6">
                                <li>Personal information (name, email address, phone number, mailing address)</li>
                                <li>Project details and design preferences</li>
                                <li>Payment and billing information</li>
                                <li>Communication records and correspondence</li>
                                <li>Information collected automatically through cookies and similar technologies</li>
                            </ul>

                            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-black mt-8 mb-4">2. How We Use Your Information</h2>
                            <p className="text-sm sm:text-base text-black/80 leading-relaxed mb-3">We use the information we collect to:</p>
                            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-black/70 mb-6">
                                <li>Provide, maintain, and improve our interior design services</li>
                                <li>Process your requests and transactions</li>
                                <li>Send you technical notices, updates, and support messages</li>
                                <li>Respond to your comments, questions, and customer service requests</li>
                                <li>Communicate with you about products, services, offers, and events</li>
                                <li>Monitor and analyze trends, usage, and activities</li>
                                <li>Personalize and improve your experience</li>
                            </ul>

                            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-black mt-8 mb-4">3. Information Sharing and Disclosure</h2>
                            <p className="text-sm sm:text-base text-black/80 leading-relaxed mb-3">We may share your information in the following circumstances:</p>
                            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-black/70 mb-3">
                                <li>With vendors, consultants, and service providers who need access to perform services for us</li>
                                <li>With contractors and suppliers involved in your project</li>
                                <li>In response to legal requests or to comply with applicable laws</li>
                                <li>To protect the rights, property, and safety of Aakar Interiors, our users, or others</li>
                                <li>With your consent or at your direction</li>
                            </ul>
                            <p className="text-sm sm:text-base text-black/80 leading-relaxed mb-6">We do not sell your personal information to third parties.</p>

                            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-black mt-8 mb-4">4. Data Security</h2>
                            <p className="text-sm sm:text-base text-black/80 leading-relaxed mb-3">We take reasonable measures to protect your information from unauthorized access, use, or disclosure. We implement industry-standard security measures including:</p>
                            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-black/70 mb-6">
                                <li>Encryption of sensitive data</li>
                                <li>Secure server infrastructure</li>
                                <li>Regular security audits and updates</li>
                                <li>Limited access to personal information</li>
                                <li>Employee training on data protection</li>
                            </ul>

                            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-black mt-8 mb-4">5. Your Rights and Choices</h2>
                            <p className="text-sm sm:text-base text-black/80 leading-relaxed mb-3">You have the right to:</p>
                            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-black/70 mb-3">
                                <li>Access, update, or delete your personal information</li>
                                <li>Opt-out of marketing communications</li>
                                <li>Request a copy of your data</li>
                                <li>Object to processing of your personal information</li>
                                <li>Request restriction of processing</li>
                                <li>Data portability</li>
                            </ul>
                            <p className="text-sm sm:text-base text-black/80 leading-relaxed mb-6">To exercise these rights, please contact us at hello@aakar.com</p>

                            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-black mt-8 mb-4">6. Cookies and Tracking Technologies</h2>
                            <p className="text-sm sm:text-base text-black/80 leading-relaxed mb-3">We use cookies and similar tracking technologies to remember your preferences, understand how you use our website, improve our services, and provide personalized content. You can control cookies through your browser settings.</p>

                            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-black mt-8 mb-4">7. Children's Privacy</h2>
                            <p className="text-sm sm:text-base text-black/80 leading-relaxed mb-6">Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.</p>

                            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-black mt-8 mb-4">8. Changes to This Privacy Policy</h2>
                            <p className="text-sm sm:text-base text-black/80 leading-relaxed mb-6">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of our services after changes constitutes acceptance of the updated policy.</p>

                            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-black mt-8 mb-4">9. International Data Transfers</h2>
                            <p className="text-sm sm:text-base text-black/80 leading-relaxed mb-6">Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.</p>

                            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-black mt-8 mb-4">10. Contact Us</h2>
                            <p className="text-sm sm:text-base text-black/80 leading-relaxed mb-3">If you have any questions about this Privacy Policy, please contact us:</p>
                            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-black/70 mb-6">
                                <li>Email: hello@aakar.com</li>
                                <li>Phone: +123-456-7890</li>
                                <li>Address: 123 Design Street, Creativity City, Country</li>
                            </ul>

                            <div className="mt-10 p-6 bg-gradient-to-br from-[#8B6914]/10 to-[#4A90E2]/10 border-l-4 border-[#8B6914] rounded-lg">
                                <h3 className="text-lg sm:text-xl font-semibold text-black mb-3">Important Notice</h3>
                                <p className="text-sm sm:text-base text-black/80 leading-relaxed">
                                    By using our website and services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <Link
                            href="/terms"
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group"
                        >
                            <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-[#8B6914] transition-colors">
                                Terms & Conditions →
                            </h3>
                            <p className="text-sm text-black/70">
                                Read our terms of service and usage guidelines
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
                                Have questions? Get in touch with our team
                            </p>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
