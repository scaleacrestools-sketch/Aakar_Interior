"use client";

import TestimonialSection from "@/components/web-section/common-components/TestimonialSection";
import BannerHero from "@/components/web-section/home/BannerHero";
import HeroSection from "@/components/web-section/home/HeroSection";
import ServicesSection from "@/components/web-section/home/ServicesSection";
import OurServicesSection from "@/components/web-section/home/OurServicesSection";
import HowWeDesignSection from "@/components/web-section/home/HowWeDesignSection";
import FeaturedProjectsSection from "@/components/web-section/home/FeaturedProjectsSection";
import HeroAwards from "@/components/web-section/home/HeroAwards";


export default function Home() {

  return (
    <div className="min-h-screen bg-[#F5F5F0] overflow-x-hidden">
      <BannerHero
        imageSrc="/101.webp"
        headline={{
          line1: "Transform Your Space",
          line2: "With Award-Winning Design"
        }}
        description="Experience luxury interior design that combines functionality with aesthetic excellence. Our team of expert designers brings your vision to life with attention to every detail."
        ctaButton={{
          href: "/contact",
          text: "Start Your Project"
        }}
      />
      <HeroSection />
      <HeroAwards />
      <ServicesSection />
      <OurServicesSection />
      <HowWeDesignSection />
      <FeaturedProjectsSection />
      <TestimonialSection />

    </div>
  );
}
