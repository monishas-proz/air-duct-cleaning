"use client";

import Reveal from "@/components/common/Reveal";
import { SERVICES_HERO } from "@/constants/services";

export default function ServicesHeroSection() {
  return (
    <section className="section">
      <div className="container">
        <Reveal animation="up">
          <div className="mx-auto max-w-5xl text-center">

            <span className="caption inline-block rounded-full bg-primary-50 px-4 py-1 font-semibold uppercase tracking-[0.15em] text-primary-700">
              {SERVICES_HERO.badge}
            </span>

            <h1 className="display mt-6 tracking-[-0.03em] text-neutral-900">
              {SERVICES_HERO.title.first}{" "}
              <span className="text-primary-700">
                {SERVICES_HERO.title.highlight}
              </span>
            </h1>

            <p className="body-lg mx-auto mt-6 max-w-3xl text-neutral-600">
              {SERVICES_HERO.description}
            </p>

          </div>
        </Reveal>
      </div>
    </section>
  );
}