"use client";

import Reveal from "@/components/common/Reveal";
import FeaturedProjectCard from "@/components/common/FeaturedProjectCard";
import GalleryImageCard from "@/components/common/GalleryImageCard";
import { GALLERY_PROJECTS } from "@/constants/gallery";
import { useEffect, useState } from "react";
import { getCategoryImages } from "@/services/public/categoryImageService";

export default function GalleryPortfolioSection({selectedCategory}) {

    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    async function loadImages() {
      try {
        setLoading(true);

        const data = await getCategoryImages(selectedCategory);

        setImages(data);
      } catch (error) {
        console.error(error);
        setImages([]);
      } finally {
        setLoading(false);
      }
}

    loadImages();
  }, [selectedCategory]);


 const galleryProjects = images.map((item) => ({
  id: item.id,
  image: `${process.env.NEXT_PUBLIC_API_URL.replace(
    "/api",
    ""
  )}/uploads/categories/${item.categoryId}/${item.image}`,
  title: item.title,
  description: item.description,
}));

const featured = galleryProjects[0];
const rightImages = galleryProjects.slice(1, 3);
const middleImages = galleryProjects.slice(3, 6);
const bottomImages = galleryProjects.slice(6, 8);
const remainingImages = galleryProjects.slice(8);

if (loading) {
  return (
    <section className="section pt-0">
      <div className="container">
        <div className="flex h-[500px] items-center justify-center">
          <p className="body-lg text-neutral-500">
            Loading images...
          </p>
        </div>
      </div>
    </section>
  );
}

if (images.length === 0) {
  return (
    <section className="section pt-0">
      <div className="container">
        <Reveal animation="up">
        <div className="flex h-[500px] items-center justify-center rounded-xl border border-dashed border-neutral-300 bg-neutral-50">
          <p className="heading-3 text-neutral-500">
            No images available
          </p>
        </div>
        </Reveal>
      </div>
    </section>
  );
}

  return (
    <section className="section pt-0">
      <div className="container">

        {/* Top Section */}
        <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">

          {featured && (
            <Reveal animation="left">
              <FeaturedProjectCard
                image={featured.image}
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
                <GalleryImageCard image={project.image} 
                      title={project.title}
                      description={project.description}
                    />
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
              <GalleryImageCard image={project.image} 
                title={project.title}
                description={project.description}
              />
            </Reveal>
          ))}

        </div>

        {/* Remaining Images */}
          {remainingImages.length > 0 && (
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {remainingImages.map((project, index) => (
                <Reveal
                  key={project.id}
                  animation="up"
                  delay={(index % 3) * 100}
                >
                  <GalleryImageCard image={project.image}
                    title={project.title}
                    description={project.description}
                  />
                </Reveal>
              ))}
            </div>
          )}

      </div>
    </section>
  );
}