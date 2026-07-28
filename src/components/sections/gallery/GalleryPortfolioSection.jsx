"use client";

import Reveal from "@/components/common/Reveal";
import FeaturedProjectCard from "@/components/common/FeaturedProjectCard";
import GalleryImageCard from "@/components/common/GalleryImageCard";
import { GALLERY_PROJECTS } from "@/constants/gallery";
import { useEffect, useState } from "react";
import { getCategoryImages } from "@/services/public/categoryImageService";

export default function GalleryPortfolioSection({selectedCategory}) {

    const [images, setImages] = useState([]);

      useEffect(() => {
    async function loadImages() {
      try {
        const data = await getCategoryImages(selectedCategory);
        setImages(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadImages();
  }, [selectedCategory]);

  console.log(images);

  const galleryProjects = images.map((item) => ({
  id: item.id,
  image: `${process.env.NEXT_PUBLIC_API_URL.replace(
    "/api",
    ""
  )}/uploads/categories/${item.categoryId}/${item.image}`,
  category: "Gallery",
  title: "Our Latest Work",
  description:
    "Professional HVAC installation, maintenance, and repair projects.",
}));

const featured = galleryProjects[0];
const rightImages = galleryProjects.slice(1, 3);
const middleImages = galleryProjects.slice(3, 6);
const bottomImages = galleryProjects.slice(6, 8);

  return (
    <section className="section pt-0">
      <div className="container">

        {/* Top Section */}
        <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">

          {featured && (
            <Reveal animation="left">
              <FeaturedProjectCard
                image={featured.image}
                category={featured.category}
                title={featured.title}
                description={featured.description}
              />
            </Reveal>
          )}

          <div className="grid gap-4">

            {rightImages.map((project, index) => (
              <Reveal
                key={project.id}
                animation="right"
                delay={(index + 1) * 100}
              >
                <GalleryImageCard image={project.image} />
              </Reveal>
            ))}

          </div>

        </div>

        {/* Middle Row */}
        <div className="mt-4 grid gap-4 md:grid-cols-3">

          {middleImages.map((project, index) => (
            <Reveal
              key={project.id}
              animation="up"
              delay={index * 120}
            >
              <GalleryImageCard image={project.image} />
            </Reveal>
          ))}

        </div>

        {/* Bottom Row */}
        <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_1fr]">

          {bottomImages.map((project, index) => (
            <Reveal
              key={project.id}
              animation="up"
              delay={index * 120}
            >
              <GalleryImageCard image={project.image} />
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
}