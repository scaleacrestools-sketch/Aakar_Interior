"use client";

import { useState } from "react";
import { X, Send, Check } from "lucide-react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface FormData {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
}

interface PopupFormProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function PopupForm({ isOpen, onClose }: PopupFormProps) {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });
    const [focusedField, setFocusedField] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log("Form submitted:", formData);
        setIsSubmitting(false);
        setIsSuccess(true);

        // Reset form and close after showing success
        setTimeout(() => {
            setFormData({
                name: "",
                email: "",
                phone: "",
                service: "",
                message: "",
            });
            setIsSuccess(false);
            onClose();
        }, 2000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    if (!isOpen) return null;

    return (
        <div className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 ${inter.className}`}>
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
                onClick={onClose}
            ></div>

            {/* Modal */}
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl animate-scale-in">
                {/* Success Overlay */}
                {isSuccess && (
                    <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-50 flex flex-col items-center justify-center rounded-2xl animate-fade-in">
                        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-4 animate-bounce-in">
                            <Check className="w-10 h-10 text-white" strokeWidth={3} />
                        </div>
                        <h3 className="text-2xl font-bold text-black mb-2">Message Sent!</h3>
                        <p className="text-black/70">We&apos;ll get back to you soon.</p>
                    </div>
                )}

                {/* Header */}
                <div className="sticky top-0 bg-gradient-to-r from-[#8B6914] to-[#6d5410] text-white px-6 md:px-8 py-6 rounded-t-2xl">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-1">Get In Touch</h2>
                            <p className="text-white/90 text-sm">We&apos;d love to hear from you</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 group"
                            aria-label="Close"
                        >
                            <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                        </button>
                    </div>
                </div>

                {/* Form Content */}
                <div className="p-6 md:p-8">
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
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
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
                                    className="w-full px-4 py-3 pr-10 border border-black/20 rounded-sm focus:border-[#8B6914] focus:outline-none transition-all duration-300 appearance-none bg-white cursor-pointer"
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
                                {/* Dropdown Icon */}
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                    <svg className="w-4 h-4 text-black/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
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

                    {/* Footer Note */}
                    <p className="text-center text-xs text-black/60 mt-6">
                        By submitting this form, you agree to our privacy policy
                    </p>
                </div>
            </div>

            <style jsx global>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes scale-in {
                    from {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                @keyframes bounce-in {
                    0% {
                        transform: scale(0);
                    }
                    50% {
                        transform: scale(1.1);
                    }
                    100% {
                        transform: scale(1);
                    }
                }

                .animate-fade-in {
                    animation: fade-in 0.3s ease-out;
                }

                .animate-scale-in {
                    animation: scale-in 0.3s ease-out;
                }

                .animate-bounce-in {
                    animation: bounce-in 0.5s ease-out;
                }
            `}</style>
        </div>
    );
}