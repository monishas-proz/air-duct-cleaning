"use client";

import Image from "next/image";

import { HOME_ICONS } from "@/constants/assets";
import { GALLERY_TESTIMONIAL } from "@/constants/gallery";
import { TESTIMONIAL } from "@/constants/home";

import Typewriter from "@/components/common/Typewriter";
import useInView from "@/hooks/useInView";

export default function GalleryTestimonialSection() {
  const { ref, isVisible } = useInView();

  return (
    <section className="section section-light">
      <div className="container">
        <div
          ref={ref}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="heading-2 text-neutral-900">
            {GALLERY_TESTIMONIAL.title}
          </h2>

          <div className="mt-6 flex justify-center">
            <Image
              src={HOME_ICONS.icon99}
              alt=""
              width={48}
              height={48}
            />
          </div>

          <p className="body-lg mx-auto mt-4 max-w-3xl italic text-neutral-600">
            "
            <Typewriter
              text={TESTIMONIAL.quote}
              speed={30}
              start={isVisible}
            />
            "
          </p>

          <p className="caption mt-4 font-semibold uppercase tracking-[0.15em] text-primary-700">
            {GALLERY_TESTIMONIAL.author}
          </p>
        </div>
      </div>
    </section>
  );
}