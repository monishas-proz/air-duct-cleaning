import BeforeAfterSection from "@/components/sections/gallery/BeforeAfterSection";
import CardSection from "@/components/sections/services/CardSection";
import DisinfectionSection from "@/components/sections/services/DisinfectionSection";
import ServicesHeroSection from "@/components/sections/services/ServicesHeroSection";
import ServicesTestimonialSection from "@/components/sections/services/ServicesTestimonialSection";

export const metadata = {
  title: "Our Services | Adhi Robotic Services",
  description:
    "Explore our professional services including HVAC cleaning, AHU maintenance, duct cleaning, cleanroom solutions, indoor air quality management, and industrial environmental services.",
};
export default function ServicePage(){

    return(
        <>
            <ServicesHeroSection />
            <CardSection />
            <DisinfectionSection />
            <ServicesTestimonialSection />
        </>
    )
}