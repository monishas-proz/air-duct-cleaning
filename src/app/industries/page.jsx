import CaseStudySection from "@/components/sections/industries/CaseStudySection";
import GridSection from "@/components/sections/industries/GridSection";
import IndustryCTASection from "@/components/sections/industries/IndustriesCTASection";
import IndustriesHeroSection from "@/components/sections/industries/IndustriesHeroSection";
import IndustriesTestimonialSection from "@/components/sections/industries/IndustriesTestimonialSection";

export default function IndustriesPage(){
    return (
        <>
          <IndustriesHeroSection />
          <GridSection />
          <CaseStudySection />
          <IndustriesTestimonialSection />
          <IndustryCTASection />
        </>
    )
}