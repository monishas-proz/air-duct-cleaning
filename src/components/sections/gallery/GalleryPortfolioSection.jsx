"use client";

import Reveal from "@/components/common/Reveal";
import FeaturedProjectCard from "@/components/common/FeaturedProjectCard";
import GalleryImageCard from "@/components/common/GalleryImageCard";
import { GALLERY_PROJECTS } from "@/constants/gallery";

export default function GalleryPortfolioSection() {
  return (
    <section className="section pt-0">
      <div className="container">

        {/* Top Section */}
        <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">

          <Reveal animation="left">
            <FeaturedProjectCard
              image={GALLERY_PROJECTS[0].image}
              category={GALLERY_PROJECTS[0].category}
              title={GALLERY_PROJECTS[0].title}
              description={GALLERY_PROJECTS[0].description}
            />
          </Reveal>

          <div className="grid gap-4">

            <Reveal animation="right" delay={100}>
              <GalleryImageCard image={GALLERY_PROJECTS[1].image} />
            </Reveal>

            <Reveal animation="right" delay={200}>
              <GalleryImageCard image={GALLERY_PROJECTS[2].image} />
            </Reveal>

          </div>

        </div>

        {/* Middle Row */}
        <div className="mt-4 grid gap-4 md:grid-cols-3">

          {GALLERY_PROJECTS.slice(3, 6).map((project, index) => (
            <Reveal
              key={index}
              animation="up"
              delay={index * 120}
            >
              <GalleryImageCard image={project.image} />
            </Reveal>
          ))}

        </div>

        {/* Bottom Row */}
        <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_1fr]">

          {GALLERY_PROJECTS.slice(6, 8).map((project, index) => (
            <Reveal
              key={index}
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