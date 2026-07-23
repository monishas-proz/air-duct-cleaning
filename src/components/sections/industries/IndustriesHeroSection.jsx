"use client";

import Image from "next/image";

import Reveal from "@/components/common/Reveal";

import { INDUSTRIES_HERO } from "@/constants/industries";
import { INDUSTRIES_ICONS } from "@/constants/assets";

export default function IndustriesHeroSection() {
  return (
    <section className="section section-light">
      <div className="container">

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