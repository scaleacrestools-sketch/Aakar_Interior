'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState('furniture');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F5F0] overflow-x-hidden">
      {/* Top Blue Strip */}
      <div className="h-1 bg-[#4A90E2] w-full"></div>

      {/* Main Content */}
      <main className="max-w-[95%] mx-auto px-4 md:px-6 pt-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Section - Header and Hero */}
          <div className="space-y-8">
            {/* Header */}
            <header className="w-full pt-2 pb-6 bg-[#F5F5F0]">
              <nav className="flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-3 animate-fade-in">
                  <div className="grid grid-cols-2 gap-1 w-8 h-12">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="w-3 h-3 bg-black"></div>
                    ))}
                  </div>
                  <span className="text-2xl font-bold text-black tracking-tight">INTEROR</span>
                </div>

                {/* Navigation */}
                <div className="hidden md:flex items-center gap-8 animate-fade-in-delay">
                  <a href="#about" className="text-black hover:text-[#4A90E2] transition-colors duration-300">About Us</a>
                  <a href="#services" className="text-black hover:text-[#4A90E2] transition-colors duration-300">Services</a>
                  <a href="#portfolio" className="text-black hover:text-[#4A90E2] transition-colors duration-300">Portfolio</a>
                </div>

                {/* Contact Button */}
                <button className="bg-black text-white px-6 py-3 rounded-sm flex items-center gap-2 hover:bg-[#333] transition-all duration-300 animate-fade-in-delay-2 group">
                  <span>Contact Us</span>
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </button>
              </nav>
            </header>
            {/* Left Hero Section */}
            <div className={`space-y-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-bold text-black leading-tight">
                <span className="block animate-fade-in-up">Crafting Interiors</span>
                <span className="block animate-fade-in-up-delay">
                  with <em className="italic not-italic font-normal">Elegance</em> and
                </span>
                <span className="block animate-fade-in-up-delay-2">Precision</span>
          </h1>
            </div>

            <p className="text-lg text-black/80 leading-relaxed max-w-lg animate-fade-in-up-delay-3">
              At Interor, we transform spaces with meticulous attention to detail and a touch of elegance. 
              Our expert designers create bespoke interiors that perfectly reflect your style and needs. 
              Let us bring your vision to life with unparalleled craftsmanship and creativity.
            </p>

            {/* Scroll Indicator */}
            <div className="flex items-center gap-3 pt-8 animate-fade-in-up-delay-4">
              <div className="w-px h-12 bg-black animate-scroll-indicator"></div>
              <span className="text-sm text-black/70">Scroll to explore</span>
            </div>
            </div>
          </div>

          {/* Right Image Gallery */}
          <div className={`relative h-[800px] overflow-hidden ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="animate-infinite-scroll-up">
              {/* First Set of Images */}
              <div className="grid grid-cols-2 gap-4">
                {/* Top Image */}
                <div className="col-span-1">
                  <div className="relative w-full h-64 bg-gradient-to-br from-amber-100 to-amber-200 border-2 border-white rounded-sm overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500">
                    <div className="absolute bottom-4 left-4 right-4 h-32 bg-gradient-to-t from-amber-800/30 to-transparent"></div>
                  </div>
                </div>

                {/* Middle Left Image */}
                <div className="col-span-1">
                  <div className="relative w-full h-64 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-white rounded-sm overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500">
                    <div className="absolute top-4 left-4 w-24 h-32 bg-gradient-to-br from-blue-200/40 to-transparent rounded"></div>
                  </div>
                </div>

                {/* Middle Right Large Image */}
                <div className="col-span-2">
                  <div className="relative w-full h-80 bg-gradient-to-br from-orange-200 via-yellow-200 to-orange-300 border-2 border-white rounded-sm overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500">
                    <div className="absolute bottom-4 left-4 right-4 h-40 bg-gradient-to-t from-orange-600/30 to-transparent"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/20 rounded-full blur-xl"></div>
                  </div>
                </div>

                {/* Bottom Left Image */}
                <div className="col-span-1">
                  <div className="relative w-full h-48 bg-gradient-to-br from-yellow-300 to-yellow-400 border-2 border-white rounded-sm overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500">
                  </div>
                </div>

                {/* Bottom Right Image */}
                <div className="col-span-1">
                  <div className="relative w-full h-48 bg-gradient-to-br from-gray-300 to-gray-400 border-2 border-white rounded-sm overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500">
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex flex-col gap-2">
                      <div className="w-16 h-16 bg-white/30 rounded-full blur-sm"></div>
                      <div className="w-12 h-12 bg-white/30 rounded-full blur-sm mx-auto"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Duplicate Set for Seamless Loop */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                {/* Top Image */}
                <div className="col-span-1">
                  <div className="relative w-full h-64 bg-gradient-to-br from-amber-100 to-amber-200 border-2 border-white rounded-sm overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500">
                    <div className="absolute bottom-4 left-4 right-4 h-32 bg-gradient-to-t from-amber-800/30 to-transparent"></div>
                  </div>
                </div>

                {/* Middle Left Image */}
                <div className="col-span-1">
                  <div className="relative w-full h-64 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-white rounded-sm overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500">
                    <div className="absolute top-4 left-4 w-24 h-32 bg-gradient-to-br from-blue-200/40 to-transparent rounded"></div>
                  </div>
                </div>

                {/* Middle Right Large Image */}
                <div className="col-span-2">
                  <div className="relative w-full h-80 bg-gradient-to-br from-orange-200 via-yellow-200 to-orange-300 border-2 border-white rounded-sm overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500">
                    <div className="absolute bottom-4 left-4 right-4 h-40 bg-gradient-to-t from-orange-600/30 to-transparent"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/20 rounded-full blur-xl"></div>
                  </div>
                </div>

                {/* Bottom Left Image */}
                <div className="col-span-1">
                  <div className="relative w-full h-48 bg-gradient-to-br from-yellow-300 to-yellow-400 border-2 border-white rounded-sm overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500">
                  </div>
                </div>

                {/* Bottom Right Image */}
                <div className="col-span-1">
                  <div className="relative w-full h-48 bg-gradient-to-br from-gray-300 to-gray-400 border-2 border-white rounded-sm overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500">
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex flex-col gap-2">
                      <div className="w-16 h-16 bg-white/30 rounded-full blur-sm"></div>
                      <div className="w-12 h-12 bg-white/30 rounded-full blur-sm mx-auto"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Awards Section */}
      <footer className="w-full bg-[#0a0a0a] mt-10 py-8">
        <div className="max-w-[95%] mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Awards Title */}
            <div className="flex-shrink-0 animate-fade-in-left flex items-center gap-3">
              <div className="relative h-32 w-auto">
                <Image
                  src="/Awards.png"
                  alt="Awards"
                  width={200}
                  height={400}
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="h-px w-8 bg-gray-600"></div>
            </div>

            {/* Awards List */}
            <div className="flex flex-wrap gap-12 md:gap-16 lg:gap-24 flex-1 animate-fade-in-right">
              {[
                { 
                  name: 'German Design Award', 
                  year: '2021',
                  image: '/german-design-award.png'
                },
                { 
                  name: "Gold A' Design Award", 
                  year: '2021',
                  image: '/a-design-award.png'
                },
                { 
                  name: 'IF Design Award', 
                  year: '2020',
                  image: '/if-design-award.png'
                },
                { 
                  name: 'Good Design Award', 
                  year: '2019',
                  image: '/good-design-award.png'
                },
              ].map((award, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 group hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Award Badge Image */}
                  <div className="relative w-16 h-16 flex items-center justify-center flex-shrink-0">
            <Image
                      src={award.image}
                      alt={award.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Award Text */}
                  <div className="text-gray-300">
                    <div className="font-semibold text-lg leading-tight">{award.name}</div>
                    <div className="text-gray-500 text-sm mt-1">{award.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Services Section */}
      <section className="w-full bg-[#F5F5F0] py-16">
        <div className="max-w-[95%] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Title and Image */}
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-serif text-black leading-tight">
                Service That<br />We Can Provide
              </h2>
              <div className="relative w-full rounded-lg overflow-hidden shadow-lg transition-all duration-500">
                {/* Furniture Selection Image */}
                {selectedService === 'furniture' && (
                  <div className="relative w-full h-96 bg-gradient-to-br from-orange-200 via-yellow-200 to-orange-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-4 p-8">
                        <div className="w-32 h-32 bg-orange-400 rounded-full mx-auto flex items-center justify-center shadow-lg">
                          <div className="w-24 h-24 bg-white rounded-full"></div>
                        </div>
                        <div className="w-48 h-32 bg-yellow-300 rounded mx-auto shadow-md"></div>
                        <div className="flex gap-4 justify-center">
                          <div className="w-16 h-20 bg-green-400 rounded"></div>
                          <div className="w-16 h-20 bg-green-500 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Space Planning Image */}
                {selectedService === 'space' && (
                  <div className="relative w-full h-96 bg-gradient-to-br from-blue-100 via-indigo-100 to-blue-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-4 p-8">
                        <div className="grid grid-cols-3 gap-2 w-64 h-48 mx-auto">
                          <div className="bg-blue-300 rounded shadow-md"></div>
                          <div className="bg-blue-400 rounded shadow-md"></div>
                          <div className="bg-blue-300 rounded shadow-md"></div>
                          <div className="bg-indigo-300 rounded shadow-md"></div>
                          <div className="bg-indigo-400 rounded shadow-md"></div>
                          <div className="bg-indigo-300 rounded shadow-md"></div>
                        </div>
                        <div className="w-48 h-24 bg-blue-200 rounded mx-auto shadow-md"></div>
                        <div className="flex gap-2 justify-center">
                          <div className="w-12 h-12 bg-blue-400 rounded-full"></div>
                          <div className="w-12 h-12 bg-indigo-400 rounded-full"></div>
                          <div className="w-12 h-12 bg-blue-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Color Consultation Image */}
                {selectedService === 'color' && (
                  <div className="relative w-full h-96 bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-4 p-8">
                        <div className="flex gap-3 justify-center">
                          <div className="w-16 h-32 bg-pink-400 rounded shadow-md"></div>
                          <div className="w-16 h-32 bg-purple-400 rounded shadow-md"></div>
                          <div className="w-16 h-32 bg-pink-500 rounded shadow-md"></div>
                          <div className="w-16 h-32 bg-purple-500 rounded shadow-md"></div>
                        </div>
                        <div className="w-48 h-24 bg-gradient-to-r from-pink-300 via-purple-300 to-pink-400 rounded mx-auto shadow-md"></div>
                        <div className="flex gap-2 justify-center">
                          <div className="w-8 h-8 bg-pink-500 rounded-full"></div>
                          <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
                          <div className="w-8 h-8 bg-pink-400 rounded-full"></div>
                          <div className="w-8 h-8 bg-purple-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Interior Design Image */}
                {selectedService === 'interior' && (
                  <div className="relative w-full h-96 bg-gradient-to-br from-emerald-100 via-teal-100 to-emerald-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-4 p-8">
                        <div className="w-40 h-40 bg-emerald-300 rounded-lg mx-auto shadow-lg flex items-center justify-center">
                          <div className="w-32 h-32 bg-teal-400 rounded-lg"></div>
                        </div>
                        <div className="flex gap-3 justify-center">
                          <div className="w-20 h-16 bg-emerald-400 rounded shadow-md"></div>
                          <div className="w-20 h-16 bg-teal-400 rounded shadow-md"></div>
                          <div className="w-20 h-16 bg-emerald-500 rounded shadow-md"></div>
                        </div>
                        <div className="flex gap-2 justify-center">
                          <div className="w-10 h-10 bg-emerald-500 rounded-full"></div>
                          <div className="w-10 h-10 bg-teal-500 rounded-full"></div>
                          <div className="w-10 h-10 bg-emerald-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Lighting Design Image */}
                {selectedService === 'lighting' && (
                  <div className="relative w-full h-96 bg-gradient-to-br from-amber-100 via-yellow-100 to-amber-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-4 p-8">
                        <div className="flex gap-4 justify-center items-end">
                          <div className="w-12 h-20 bg-amber-400 rounded-t-full shadow-md"></div>
                          <div className="w-12 h-32 bg-yellow-400 rounded-t-full shadow-lg"></div>
                          <div className="w-12 h-24 bg-amber-500 rounded-t-full shadow-md"></div>
                          <div className="w-12 h-28 bg-yellow-500 rounded-t-full shadow-md"></div>
                        </div>
                        <div className="w-48 h-24 bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 rounded mx-auto shadow-md"></div>
                        <div className="flex gap-3 justify-center">
                          <div className="w-10 h-10 bg-amber-500 rounded-full shadow-lg"></div>
                          <div className="w-10 h-10 bg-yellow-500 rounded-full shadow-lg"></div>
                          <div className="w-10 h-10 bg-amber-400 rounded-full shadow-lg"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Description and Services List */}
            <div className="space-y-8 animate-fade-in-up-delay">
              <p className="text-black/80 text-base leading-relaxed max-w-lg">
                We offer bespoke furniture selection, space planning, and color consultation to transform your spaces into elegant, functional environments.
              </p>

              {/* Services List */}
              <div className="space-y-0">
                {/* Furniture Selection */}
                <div 
                  className="group relative cursor-pointer"
                  onClick={() => setSelectedService('furniture')}
                >
                  <div className={`flex items-center justify-between py-6 border-b transition-colors duration-300 ${
                    selectedService === 'furniture' 
                      ? 'border-black' 
                      : 'border-gray-300 hover:border-black'
                  }`}>
                    <h3 className={`text-xl transition-all duration-300 ${
                      selectedService === 'furniture' 
                        ? 'font-semibold text-black' 
                        : 'font-medium text-black/70'
                    }`}>
                      Furniture Selection
                    </h3>
                    <button className={`w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-300 group-hover:scale-110 ${
                      selectedService === 'furniture' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}>
                      <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Space Planning */}
                <div 
                  className="group relative cursor-pointer"
                  onClick={() => setSelectedService('space')}
                >
                  <div className={`flex items-center justify-between py-6 border-b transition-colors duration-300 ${
                    selectedService === 'space' 
                      ? 'border-black' 
                      : 'border-gray-300 hover:border-black'
                  }`}>
                    <h3 className={`text-xl transition-all duration-300 ${
                      selectedService === 'space' 
                        ? 'font-semibold text-black' 
                        : 'font-medium text-black/70'
                    }`}>
                      Space Planning
                    </h3>
                    <button className={`w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-300 group-hover:scale-110 ${
                      selectedService === 'space' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}>
                      <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Color Consultation */}
                <div 
                  className="group relative cursor-pointer"
                  onClick={() => setSelectedService('color')}
                >
                  <div className={`flex items-center justify-between py-6 border-b transition-colors duration-300 ${
                    selectedService === 'color' 
                      ? 'border-black' 
                      : 'border-gray-300 hover:border-black'
                  }`}>
                    <h3 className={`text-xl transition-all duration-300 ${
                      selectedService === 'color' 
                        ? 'font-semibold text-black' 
                        : 'font-medium text-black/70'
                    }`}>
                      Color Consultation
                    </h3>
                    <button className={`w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-300 group-hover:scale-110 ${
                      selectedService === 'color' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}>
                      <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Interior Design */}
                <div 
                  className="group relative cursor-pointer"
                  onClick={() => setSelectedService('interior')}
                >
                  <div className={`flex items-center justify-between py-6 border-b transition-colors duration-300 ${
                    selectedService === 'interior' 
                      ? 'border-black' 
                      : 'border-gray-300 hover:border-black'
                  }`}>
                    <h3 className={`text-xl transition-all duration-300 ${
                      selectedService === 'interior' 
                        ? 'font-semibold text-black' 
                        : 'font-medium text-black/70'
                    }`}>
                      Interior Design
                    </h3>
                    <button className={`w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-300 group-hover:scale-110 ${
                      selectedService === 'interior' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}>
                      <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Lighting Design */}
                <div 
                  className="group relative cursor-pointer"
                  onClick={() => setSelectedService('lighting')}
                >
                  <div className={`flex items-center justify-between py-6 border-b transition-colors duration-300 ${
                    selectedService === 'lighting' 
                      ? 'border-black' 
                      : 'border-gray-300 hover:border-black'
                  }`}>
                    <h3 className={`text-xl transition-all duration-300 ${
                      selectedService === 'lighting' 
                        ? 'font-semibold text-black' 
                        : 'font-medium text-black/70'
                    }`}>
                      Lighting Design
                    </h3>
                    <button className={`w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-300 group-hover:scale-110 ${
                      selectedService === 'lighting' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}>
                      <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="w-full bg-[#F5F5F0] pt-8 pb-16 relative">
        {/* Top Blue Strip */}
        {/* <div className="h-1 bg-[#4A90E2] w-full absolute top-0 left-0"></div> */}
        
        <div className="max-w-[95%] mx-auto px-4 md:px-6">
          {/* Top Section - Label and Title */}
          <div className="mb-12 animate-fade-in-up">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#8B6914]"></div>
              <span className="text-xs md:text-sm uppercase tracking-wider text-black/70 font-medium">
                OUR SERVICES
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-serif text-black leading-tight max-w-4xl">
              We provide the <em className="italic font-normal">best solutions</em><br />
              for your dream home
            </h2>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Architectural & Interior Design Card */}
            <div className="bg-[#F9F9F4] rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-500 animate-fade-in-scale group h-full min-h-[320px] flex flex-col">
              <div className="mb-8 flex justify-start">
                <div className="w-16 h-16 text-[#8B6914] animate-fade-in-scale-delay">
                  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
                    <rect x="8" y="20" width="12" height="8" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <rect x="24" y="20" width="12" height="8" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <rect x="40" y="20" width="12" height="8" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <rect x="8" y="32" width="12" height="8" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <rect x="24" y="32" width="12" height="8" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <rect x="40" y="32" width="12" height="8" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <rect x="8" y="44" width="12" height="8" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <rect x="24" y="44" width="12" height="8" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <rect x="40" y="44" width="12" height="8" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <line x1="4" y1="16" x2="4" y2="56" stroke="currentColor" strokeWidth="2"/>
                    <line x1="60" y1="16" x2="60" y2="56" stroke="currentColor" strokeWidth="2"/>
                    <line x1="4" y1="16" x2="60" y2="16" stroke="currentColor" strokeWidth="2"/>
                    <line x1="4" y1="56" x2="60" y2="56" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-serif text-black mb-4 group-hover:text-[#8B6914] transition-colors duration-300">
                Architectural & Interior design
              </h3>
              <p className="text-black/70 text-sm leading-relaxed">
                Custom spaces that balance function and style, tailored to your lifestyle.
              </p>
            </div>

            {/* Building Renovation Card */}
            <div className="bg-[#F9F9F4] rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-500 animate-fade-in-scale-delay group h-full min-h-[320px] flex flex-col">
              <div className="mb-8 flex justify-start">
                <div className="w-16 h-16 text-[#8B6914] animate-fade-in-scale-delay-2">
                  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
                    <rect x="12" y="16" width="40" height="40" stroke="currentColor" strokeWidth="2" fill="none" rx="2"/>
                    <rect x="20" y="24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" rx="1"/>
                    <line x1="32" y1="16" x2="32" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="24" y1="12" x2="40" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="20" y1="32" x2="28" y2="32" stroke="currentColor" strokeWidth="1.5"/>
                    <line x1="36" y1="32" x2="44" y2="32" stroke="currentColor" strokeWidth="1.5"/>
                    <line x1="20" y1="40" x2="28" y2="40" stroke="currentColor" strokeWidth="1.5"/>
                    <line x1="36" y1="40" x2="44" y2="40" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-serif text-black mb-4 group-hover:text-[#8B6914] transition-colors duration-300">
                Building Renovation
              </h3>
              <p className="text-black/70 text-sm leading-relaxed">
                Transforming old spaces into modern, stylish, and functional environments.
              </p>
            </div>

            {/* Construction Management Card */}
            <div className="bg-[#F9F9F4] rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-500 animate-fade-in-scale-delay-2 group h-full min-h-[320px] flex flex-col">
              <div className="mb-8 flex justify-start">
                <div className="w-16 h-16 text-[#8B6914] animate-fade-in-scale-delay-3">
                  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
                    <path d="M32 12 L20 20 L20 44 L32 52 L44 44 L44 20 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M20 20 L32 28 L44 20" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M20 32 L32 40 L44 32" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M20 44 L32 52 L44 44" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <line x1="26" y1="24" x2="26" y2="40" stroke="currentColor" strokeWidth="1.5"/>
                    <line x1="38" y1="24" x2="38" y2="40" stroke="currentColor" strokeWidth="1.5"/>
                    <rect x="28" y="18" width="8" height="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-serif text-black mb-4 group-hover:text-[#8B6914] transition-colors duration-300">
                Construction Management
              </h3>
              <p className="text-black/70 text-sm leading-relaxed">
                Seamless planning and execution to deliver projects on time and budget.
              </p>
            </div>

            {/* Project Consultation Card */}
            <div className="bg-[#F9F9F4] rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-500 animate-fade-in-scale-delay-3 group h-full min-h-[320px] flex flex-col">
              <div className="mb-8 flex justify-start">
                <div className="w-16 h-16 text-[#8B6914] animate-fade-in-scale-delay-4">
                  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
                    <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <circle cx="32" cy="32" r="12" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <line x1="32" y1="12" x2="32" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="32" y1="52" x2="32" y2="56" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="12" y1="32" x2="8" y2="32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="52" y1="32" x2="56" y2="32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="22" y1="22" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="42" y1="42" x2="46" y2="46" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="42" y1="22" x2="46" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="22" y1="42" x2="18" y2="46" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-serif text-black mb-4 group-hover:text-[#8B6914] transition-colors duration-300">
                Project Consultation
              </h3>
              <p className="text-black/70 text-sm leading-relaxed">
                Expert guidance and strategic planning to bring your vision to life with precision.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
