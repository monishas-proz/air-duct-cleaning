"use client";

import Reveal from "@/components/common/Reveal";
import Button from "@/components/common/Button";
import { GALLERY_FILTERS, GALLERY_HERO } from "@/constants/gallery";

export default function GalleryHeroSection() {
  return (
    <section className="section">
      <div className="container">

        {/* Hero Content */}
        <Reveal animation="up">
          <div className="max-w-[760px]">

            <span className="caption font-semibold uppercase tracking-[0.2em] text-primary-700">
              {GALLERY_HERO.badge}
            </span>

            <h1 className="display mt-4 tracking-[-0.03em] text-neutral-900">
              {GALLERY_HERO.title.first}{" "}

              <span className="mt-1 text-primary-700">
                {GALLERY_HERO.title.second}
              </span>
            </h1>

            <p className="body-lg mt-8 max-w-[720px] text-neutral-600">
              {GALLERY_HERO.description}
            </p>

          </div>
        </Reveal>

        {/* Filter Buttons */}
        <div className="mt-14 flex flex-wrap gap-3">
          {GALLERY_FILTERS.map((filter, index) => (
            <Reveal
              key={filter}
              animation="up"
              delay={index * 80}
            >
              <Button variant="chip">
                {filter}
              </Button>
            </Reveal>
          ))}
        </div>

        <Reveal animation="fade" delay={300}>
          <div className="mt-6 border-b border-neutral-200" />
        </Reveal>

      </div>
    </section>
  );
}