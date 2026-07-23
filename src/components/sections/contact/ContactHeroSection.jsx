"use client";

import Image from "next/image";

import Reveal from "@/components/common/Reveal";
import { CONTACT_HERO, CONTACT_IMAGES } from "@/constants/contact";

export default function ContactHeroSection() {
  return (
    <section className="relative overflow-hidden">

      {/* Background Image */}
      <Image
        src={CONTACT_IMAGES.hero}
        alt="Contact Hero"
        priority
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/30" />

      {/* Content */}
      <div className="container relative z-10 flex min-h-[420px] items-center py-16 lg:min-h-[500px]">

        <Reveal animation="up">
          <div className="max-w-2xl">

            {/* Badge */}
            <span className="caption inline-flex rounded-full bg-primary-500 px-4 py-2 font-semibold uppercase tracking-wider text-neutral-900">
              {CONTACT_HERO.badge}
            </span>

            {/* Heading */}
            <h1 className="display mt-6 text-neutral-900">
              {CONTACT_HERO.title.first}
              <br />
              {CONTACT_HERO.title.second}
            </h1>

            {/* Description */}
            <p className="body-lg mt-6 text-neutral-700">
              {CONTACT_HERO.description}
            </p>

          </div>
        </Reveal>

      </div>
    </section>
  );
}