"use client";

import Image from "next/image";

import Reveal from "@/components/common/Reveal";

import { INDUSTRIES_HERO } from "@/constants/industries";
import { INDUSTRIES_IMAGES,  } from "@/constants/assets";

export default function IndustriesHeroSection() {
  return (
    <section className="relative overflow-hidden section section-light">

      <Image
        src={INDUSTRIES_IMAGES.heroImg}   // your image
        alt="Industries Background"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/20" />
      <div className="relative z-10 container">

        <Reveal animation="up">
          <div className="max-w-[620px] min-h-[530px] pt-20 lg:pt-30">

            <h1 className="display tracking-[-0.04em] text-primary-700">
              <span className="block">
                {INDUSTRIES_HERO.title.first}
              </span>

              <span className="block">
                {INDUSTRIES_HERO.title.second}
              </span>
            </h1>

            <p className="body-lg mt-8 max-w-[560px] text-neutral-600">
              {INDUSTRIES_HERO.description}
            </p>

          </div>
        </Reveal>

      </div>
    </section>
  );
}