"use client";

import Reveal from "@/components/common/Reveal";
import Button from "@/components/common/Button";
import { GALLERY_HERO } from "@/constants/gallery";
import { getCategories } from "@/services/public/categoryService";
import { useEffect, useState } from "react";

export default function GalleryHeroSection({selectedCategory, onCategoryChange}) {

  const [categories, setCategories] = useState([]);
  
  
  useEffect(() => {
  async function loadCategories() {
    try {
      const data = await getCategories();
      setCategories(data);
    } catch (error) {
      console.error(error);
    }
  }

  loadCategories();
}, []);


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
          {[
            { id: "all", name: "All" },
            ...categories,
          ].map((category, index) => (
            <Reveal
              key={category.id}
              animation="up"
              delay={index * 80}
            >
              <Button
                variant={
                  selectedCategory === category.id
                    ? "primary"
                    : "chip"
                }
                onClick={() => onCategoryChange(category.id)}
              >
                {category.name}
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