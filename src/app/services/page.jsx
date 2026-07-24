import BeforeAfterSection from "@/components/sections/gallery/BeforeAfterSection";
import CardSection from "@/components/sections/services/CardSection";
import DisinfectionSection from "@/components/sections/services/DisinfectionSection";
import ServicesHeroSection from "@/components/sections/services/ServicesHeroSection";
import ServicesTestimonialSection from "@/components/sections/services/ServicesTestimonialSection";


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