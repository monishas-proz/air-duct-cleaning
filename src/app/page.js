
import AboutSection from "@/components/sections/home/AboutSection";
import HeroSection from "@/components/sections/home/HeroSection";
import ServicesSection from "@/components/sections/home/ServicesSection";
import Testimonials from "@/components/sections/home/Testimonials";
import ImageSection from "@/components/sections/home/ImageSection";
import WhyChooseSection from "@/components/sections/home/WhyChooseSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <Testimonials />
      <ImageSection />
      <WhyChooseSection />
    </>
  );
}