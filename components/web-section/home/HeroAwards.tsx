"use client";

import Image from "next/image";

export default function HeroAwards() {
  return (
    <section className="w-full bg-[#0a0a0a] py-8 font-sans">
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
                className="h-full w-auto object-contain rotate-90 md:rotate-0 ml-0 sm:ml-4 md:ml-0"
              />
            </div>
            <div className="hidden sm:block h-px w-4 sm:w-6 md:w-8 bg-gray-600"></div>
          </div>

          {/* Awards List */}
          <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 flex-1 animate-fade-in-right justify-center md:justify-start">
            {[
              {
                name: "German Design Award",
                year: "2021",
                image: "/german-design-award.png",
              },
              {
                name: "Gold A' Design Award",
                year: "2021",
                image: "/a-design-award.png",
              },
              {
                name: "IF Design Award",
                year: "2020",
                image: "/if-design-award.png",
              },
              {
                name: "Good Design Award",
                year: "2019",
                image: "/good-design-award.png",
              },
            ].map((award, index) => (
              <div
                key={index}
                className="flex items-center gap-3 sm:gap-4 group hover:scale-105 transition-transform duration-300 flex-1 min-w-[140px] max-w-[180px] sm:max-w-none"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Award Badge Image */}
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center flex-shrink-0">
                  <Image
                    src={award.image}
                    alt={award.name}
                    width={56}
                    height={56}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Award Text */}
                <div className="text-gray-300 flex-1 min-w-0">
                  <div className="font-semibold text-xs sm:text-sm md:text-base leading-tight font-sans line-clamp-2">
                    {award.name}
                  </div>
                  <div className="text-gray-500 text-xs mt-0.5 sm:mt-1 font-sans">
                    {award.year}
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