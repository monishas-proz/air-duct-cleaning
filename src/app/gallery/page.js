"use client";

import { useState } from "react";

import GalleryCTASection from "@/components/sections/gallery/GalleryCTASection";
import GalleryHeroSection from "@/components/sections/gallery/GalleryHeroSection";
import GalleryPortfolioSection from "@/components/sections/gallery/GalleryPortfolioSection";
import GalleryTestimonialSection from "@/components/sections/gallery/GalleryTestimonialSection";
import BeforeAfterSection from "@/components/sections/gallery/BeforeAfterSection";


export default function GalleryPage(){

    const [selectedCategory, setSelectedCategory] = useState("all");

    return(

    <>
        <GalleryHeroSection
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        />
        <GalleryPortfolioSection 
        selectedCategory={selectedCategory}
        />

      

        <BeforeAfterSection />
        <GalleryTestimonialSection />
        {/* <GalleryCTASection /> */}
        
    </>
    )
}