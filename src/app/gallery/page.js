
import GalleryCTASection from "@/components/sections/gallery/GalleryCTASection";
import GalleryHeroSection from "@/components/sections/gallery/GalleryHeroSection";
import GalleryPortfolioSection from "@/components/sections/gallery/GalleryPortfolioSection";
import GalleryTestimonialSection from "@/components/sections/gallery/GalleryTestimonialSection";
import BeforeAfterSection from "@/components/sections/gallery/BeforeAfterSection";

export default function GalleryPage(){

    return(

    <>
        <GalleryHeroSection />
        <GalleryPortfolioSection />
        <BeforeAfterSection />
        <GalleryTestimonialSection />
        <GalleryCTASection />
        
    </>
    )
}