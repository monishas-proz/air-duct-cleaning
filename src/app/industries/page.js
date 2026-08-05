import CaseStudySection from "@/components/sections/industries/CaseStudySection";
import GridSection from "@/components/sections/industries/GridSection";
import IndustryCTASection from "@/components/sections/industries/IndustriesCTASection";
import IndustriesHeroSection from "@/components/sections/industries/IndustriesHeroSection";
import IndustriesTestimonialSection from "@/components/sections/industries/IndustriesTestimonialSection";

export const metadata = {
  title: "Industries We Serve | Adhi Robotic Services",
  description:
    "Discover how Adhi Robotic Services supports healthcare, pharmaceutical, manufacturing, commercial, and industrial sectors with advanced air quality management and HVAC solutions.",
};
export default function IndustriesPage(){
    return (
        <>
          <IndustriesHeroSection />
          <GridSection />
          <CaseStudySection />
          <IndustriesTestimonialSection />
          {/* <IndustryCTASection /> */}
        </>
    )
}