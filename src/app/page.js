
import AboutSection from "@/components/sections/home/AboutSection";
import HeroSection from "@/components/sections/home/HeroSection";
import ServicesSection from "@/components/sections/home/ServicesSection";
import Testimonials from "@/components/sections/home/Testimonials";
import ImageSection from "@/components/sections/home/ImageSection";
import WhyChooseSection from "@/components/sections/home/WhyChooseSection";


export const metadata = {
  title: "Home | Adhi Robotic Services",
  description:
    "Adhi Robotic Services provides professional air quality management, HVAC cleaning, duct cleaning, AHU maintenance, cleanroom solutions, and industrial environmental services for healthcare, pharmaceutical, commercial, and manufacturing industries.",
};
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