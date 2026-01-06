"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] py-8 pt-16 font-sans">
      <div className="max-w-[95%] mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          {/* Awards Title */}
          <div className="flex-shrink-0 animate-fade-in-left flex items-center gap-3 w-full md:w-auto justify-center md:justify-start">
            <div className="relative h-20 sm:h-24 md:h-32 w-auto">
              <Image
                src="/Awards.png"
                alt="Awards"
                width={200}
                height={400}
                className="h-full w-auto object-contain -rotate-90 md:rotate-0 ml-0 sm:ml-4 md:ml-0"
              />
            </div>
            <div className="hidden sm:block h-px w-4 sm:w-6 md:w-8 bg-gray-600"></div>
          </div>

       
        </div>
        
        {/* Copyright/Mobile Text */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-xs sm:text-sm font-sans">
            © {new Date().getFullYear()} AAKAR Interior. All awards and recognitions.
          </p>
        </div>
      </div>
    </footer>
  );
}